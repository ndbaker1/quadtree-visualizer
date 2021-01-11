import { Component, createRef, RefObject, MouseEvent } from 'react'
import styles from './simulation-canvas.module.scss'

import { QuadNode, QuadTree } from '../utils/quadtree'
import { Rect, CircleBody, Vector2D } from '../utils/physics'

const time = () => new Date().getTime()

interface SimulationCanvasProps { spawnRadius: number }
export default class SimulationCanvas extends Component<SimulationCanvasProps> {
  public debug = { showFPS: true, showQuads: true }
  private timestamp = time()
  private dragVector = { start: new Vector2D, end: new Vector2D, isDragging: false }
  private stopLoop: boolean
  private quadTree!: QuadTree
  private canvasBounds!: Rect
  private bodies = new Array<CircleBody>()
  private canvasRef: RefObject<HTMLCanvasElement> = createRef()
  private canvasDivRef: RefObject<HTMLDivElement> = createRef()
  constructor(props: SimulationCanvasProps) {
    super(props)
    this.stopLoop = false
    // bind for context in animation callback
    this.renderLoop = this.renderLoop.bind(this)
    this.mouseDown = this.mouseDown.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.mouseDrag = this.mouseDrag.bind(this)
  }

  public updateVars(vars: { capacity?: number, maxDepth?: number, showFPS?: boolean, showQuads?: boolean }): void {
    if ('capacity' in vars)
      QuadTree.capacity = vars.capacity === undefined ? 1 : vars.capacity
    if ('maxDepth' in vars)
      QuadTree.maxDepth = vars.maxDepth === undefined ? 1 : vars.maxDepth
    if ('showFPS' in vars)
      this.debug.showFPS = !!vars.showFPS
    if ('showQuads' in vars)
      this.debug.showQuads = !!vars.showQuads
  }

  public clearBodies(): void {
    this.bodies = new Array<CircleBody>()
    this.quadTree.quadObjects = this.bodies
  }

  public addBody(radius: number, velocity?: Vector2D, position?: Vector2D): void {
    this.quadTree.insert(
      new CircleBody(
        position?.x || radius + (this.canvasBounds.w - 2 * radius) * Math.random(),
        position?.y || radius + (this.canvasBounds.h - 2 * radius) * Math.random(),
        velocity?.x || 100 * (Math.random() - 0.5),
        velocity?.y || 100 * (Math.random() - 0.5),
        radius
      )
    )
  }

  componentWillUnmount(): void {
    this.stopLoop = true
  }

  componentDidMount(): void {
    window.onresize = () => this.setupQuadTree()
    this.setupQuadTree()
    this.renderLoop()
  }

  setupQuadTree(): void {
    if (this.canvasDivRef?.current) {
      if (this.canvasRef.current) {
        const context = this.canvasRef.current.getContext('2d')
        if (context) {
          const dimensions = Math.min(this.canvasDivRef.current.clientWidth, this.canvasDivRef.current.clientHeight)
          context.canvas.width = dimensions
          context.canvas.height = dimensions
          this.canvasBounds = new Rect(0, 0, this.canvasRef.current?.width, this.canvasRef.current?.height)
          this.quadTree = new QuadTree(this.canvasBounds, this.bodies)
        }
      }
    }
  }

  renderSimulation(canvasContext: CanvasRenderingContext2D): void {
    canvasContext.fillStyle = styles.color1
    canvasContext.fillRect(0, 0, this.canvasBounds.w, this.canvasBounds.h)
    canvasContext.strokeStyle = styles.color4
    this.bodies.forEach((particle: CircleBody) => {
      canvasContext.beginPath()
      canvasContext.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI)
      canvasContext.stroke()
    })
    if (this.dragVector.isDragging) {
      canvasContext.beginPath()
      canvasContext.moveTo(this.dragVector.start.x, this.dragVector.start.y)
      canvasContext.lineTo(this.dragVector.end.x, this.dragVector.end.y)
      canvasContext.stroke()
    }


    function showQuadTrees(quad: QuadNode) {
      canvasContext.strokeRect(quad.bounds.x, quad.bounds.y, quad.bounds.w, quad.bounds.h)
      quad.leaves?.forEach((leaf: QuadNode) => showQuadTrees(leaf))
    }
    if (this.debug.showQuads) {
      canvasContext.strokeStyle = styles.color3
      showQuadTrees(this.quadTree.quadRoot)
    }
  }

  updateSimulation(delta: number): void {
    this.bodies.forEach((particle: CircleBody) => particle.tick(delta))
    this.quadTree.process(this.quadTreeProcedure())
    this.bodies.forEach((particle: CircleBody) => particle.collideBounds(this.canvasBounds))
  }

  quadTreeProcedure(): ((quadNode: QuadNode) => void) {
    return function processCollisions(quadNode: QuadNode) {
      const collisionObject = quadNode.quadObjects as CircleBody[]
      // process current level collisions
      for (let i = 0; i < collisionObject.length; i++)
        for (let j = i + 1; j < collisionObject.length; j++)
          collisionObject[i].collide(collisionObject[j])

      // process rescursive collisions
      const processLeafCollisions = (leaves: QuadNode[] | null): void => {
        leaves?.forEach((leaf: QuadNode) => {
          collisionObject.forEach((object: CircleBody) => {
            const leafCollisionObjects = leaf.quadObjects as CircleBody[]
            leafCollisionObjects.forEach((leafObject: CircleBody) =>
              object.collide(leafObject)
            )
          })
          // recurse
          processLeafCollisions(leaf.leaves)
        })
      }
      // call on current leaves
      processLeafCollisions(quadNode.leaves)

      // recurse on following quad nodes
      quadNode.leaves?.forEach((leaf: QuadNode) => processCollisions(leaf))
    }
  }

  renderLoop(): void {
    if (this.stopLoop)
      return

    const newtime = time()
    const fps = Math.round(1000 / (newtime - this.timestamp))
    this.timestamp = newtime

    this.updateSimulation(1 / fps)

    const canvas = this.canvasRef.current
    const context = canvas?.getContext('2d')

    if (context) {
      this.renderSimulation(context)

      if (this.debug.showFPS) {
        context.save()
        context.font = '25px Arial'
        context.fillStyle = styles.color4
        context.fillText('FPS: ' + fps, 10, 30)
        context.restore()
      }
    }

    // request another frame to tick
    requestAnimationFrame(this.renderLoop)
  }

  mouseDown(e: MouseEvent): void {
    if (this.canvasRef.current) {
      this.dragVector.start = this.dragVector.end = new Vector2D(e.clientX - this.canvasRef.current?.offsetLeft, e.clientY - this.canvasRef.current?.offsetTop)
      this.dragVector.isDragging = true
    }
  }

  mouseDrag(e: MouseEvent): void {
    if (this.dragVector.isDragging && this.canvasRef.current)
      this.dragVector.end = new Vector2D(e.clientX - this.canvasRef.current?.offsetLeft, e.clientY - this.canvasRef.current?.offsetTop)
  }

  mouseUp(): void {
    this.addBody(this.props.spawnRadius, this.dragVector.end.difference(this.dragVector.start), this.dragVector.start)
    this.dragVector.isDragging = false
  }

  render(): JSX.Element {
    return (
      <div className={styles.canvas_container}>
        <div ref={this.canvasDivRef} className={styles.canvas_wrapper}>
          <canvas ref={this.canvasRef} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseMove={this.mouseDrag} />
        </div>
      </div>
    )
  }
}