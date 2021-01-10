import { Component, createRef, RefObject } from 'react'
import { QuadNode, QuadTree, Particle, Rect } from './quadtree'

interface CanvasProps {
  width: number
  height: number
}

const time = () => new Date().getTime()
let timestamp = time()
const debug = {
  showFPS: true,
  showQuads: true
}

export default class CollisionSimulator extends Component<CanvasProps> {
  private quadTree: QuadTree
  private stopLoop: boolean
  private particleArray: Array<Particle>
  private canvasRef: RefObject<HTMLCanvasElement> = createRef()
  constructor(props: CanvasProps) {
    super(props)
    this.stopLoop = false
    this.quadTree = new QuadTree(new Rect(0, 0, this.props.width, this.props.height))
    this.particleArray = this.quadTree.particleArray
    for (let i = 0; i < 500; i++) {
      const radius = 10 * Math.random() + 5
      this.quadTree.insert(
        new Particle(
          radius + (this.props.width - 2 * radius) * Math.random(),
          radius + (this.props.height - 2 * radius) * Math.random(),
          (Math.random() - 0.5) * 500,
          (Math.random() - 0.5) * 500,
          radius
        )
      )
    }
    // bind for context in animation callback
    this.renderLoop = this.renderLoop.bind(this)
  }

  componentWillUnmount(): void {
    this.stopLoop = true
  }

  componentDidMount(): void {
    this.renderLoop()
  }

  renderSimulation(canvasContext: CanvasRenderingContext2D): void {
    canvasContext.fillStyle = 'white'
    canvasContext.fillRect(0, 0, this.props.width, this.props.height)
    canvasContext.strokeStyle = 'black'
    this.particleArray.forEach((particle: Particle) => {
      canvasContext.beginPath()
      canvasContext.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI)
      canvasContext.stroke()
    })

    function showQuadTrees(quad: QuadNode) {
      canvasContext.strokeRect(quad.rect.x, quad.rect.y, quad.rect.w, quad.rect.h)
      quad.leaves.forEach((leaf: QuadNode) => showQuadTrees(leaf))
    }
    if (debug.showQuads) {
      canvasContext.strokeStyle = '#bbb'
      showQuadTrees(this.quadTree.quadRoot)
    }
  }

  updateSimulation(delta: number): void {
    this.particleArray.forEach((particle: Particle) => particle.tick(delta))
    this.particleArray.forEach((particle: Particle) => particle.collideBounds(new Rect(0, 0, this.props.width, this.props.height)))
    this.quadTree.update()
  }

  renderLoop(): void {
    if (this.stopLoop) return

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

    requestAnimationFrame(this.renderLoop)
  }

  render(): JSX.Element {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref={this.canvasRef}>
      </canvas>
    )
  }
}