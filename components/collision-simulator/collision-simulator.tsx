import { Component, createRef, RefObject } from 'react'
import { QuadNode, QuadTree } from './quadtree'
import { Rect, CircleBody } from '../../utils/physics'
import ControlBar from '../control-bar/control-bar'


const time = () => new Date().getTime()
let timestamp = time()
const debug = {
  showFPS: true,
  showQuads: true
}

export default class CollisionSimulator extends Component<unknown> {
  private stopLoop: boolean
  private quadTree!: QuadTree
  private canvasBounds!: Rect
  private bodies = new Array<CircleBody>()
  private canvasRef: RefObject<HTMLCanvasElement> = createRef()
  private canvasDivRef: RefObject<HTMLDivElement> = createRef()
  constructor(props: unknown) {
    super(props)
    this.stopLoop = false

    // bind for context in animation callback
    this.renderLoop = this.renderLoop.bind(this)
  }

  componentWillUnmount(): void {
    this.stopLoop = true
  }

  componentDidMount(): void {
    window.onresize = () => this.setupQuadTree()
    this.setupQuadTree()
    for (let i = 0; i < 200; i++) {
      let radius = 5
      const speed = 200
      radius = radius + radius * Math.random() / 10
      this.quadTree.insert(
        new CircleBody(
          radius + (this.canvasBounds.w / 4 - 2 * radius) * Math.random(),
          radius + (this.canvasBounds.h / 4 - 2 * radius) * Math.random(),
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed,
          radius
        )
      )
    }
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
    canvasContext.fillStyle = 'white'
    canvasContext.fillRect(0, 0, this.canvasBounds.w, this.canvasBounds.h)
    canvasContext.strokeStyle = 'black'
    this.bodies.forEach((particle: CircleBody) => {
      canvasContext.beginPath()
      canvasContext.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI)
      canvasContext.stroke()
    })

    function showQuadTrees(quad: QuadNode) {
      canvasContext.strokeRect(quad.bounds.x, quad.bounds.y, quad.bounds.w, quad.bounds.h)
      quad.leaves?.forEach((leaf: QuadNode) => showQuadTrees(leaf))
    }
    if (debug.showQuads) {
      canvasContext.strokeStyle = '#bbb'
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
    const fps = Math.round(1000 / (newtime - timestamp))
    timestamp = newtime

    this.updateSimulation(1 / fps)

    const canvas = this.canvasRef.current
    const context = canvas?.getContext('2d')

    if (context) {
      this.renderSimulation(context)

      if (debug.showFPS) {
        context.save()
        context.font = '25px Arial'
        context.fillStyle = 'grey'
        context.fillText('FPS: ' + fps, 10, 30)
        context.restore()
      }
    }

    // request another frame to tick
    requestAnimationFrame(this.renderLoop)
  }

  render(): JSX.Element {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <div style={{ flexGrow: 1, margin: 25 }}>
          <div ref={this.canvasDivRef} style={{ width: '100%', height: '100%', display: 'flex' }}>
            <canvas
              style={{ margin: 'auto' }}
              ref={this.canvasRef}
            >
            </canvas>
          </div>
        </div>
        <ControlBar />
      </div>
    )
  }
}