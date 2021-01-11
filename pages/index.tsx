import { Component, createRef, RefObject } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ProjectHeader from '../components/project-header'
import SimulationCanvas from '../components/simulation-canvas'
import ControlBar, { ActionButton, DataConfig, DataToggle } from '../components/control-bar'
import { QuadTree } from '../utils/quadtree'

interface StateFields { radius: number, count: number, showFPS: boolean, showQuads: boolean }

export default class Home extends Component<unknown, StateFields> {
  private simulationCanvasRef: RefObject<SimulationCanvas> = createRef()
  constructor(props: unknown) {
    super(props)
    this.state = {
      radius: 10,
      count: 1,
      showFPS: true,
      showQuads: true
    }
  }

  componentDidMount(): void {
    // attempt to sync simulation vars with container flags
    this.simulationCanvasRef.current?.updateVars({ showFPS: this.state.showFPS, showQuads: this.state.showQuads })

    // calculate a radius that is relatively the same retio for all windows
    const radius = Math.ceil(Math.min(window.innerWidth / 200, window.innerHeight / 200))
    // 
    this.setState({ radius: radius, count: 100 }, () => {
      for (let i = 0; i < this.state.count; i++)
        this.simulationCanvasRef.current?.addBody(this.state.radius)
    })
  }

  render(): JSX.Element {
    return (
      <div>
        <Head>
          <title>Quadtree Visualizer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className={styles.simulation_container}>
            <ProjectHeader />
            <SimulationCanvas ref={this.simulationCanvasRef} spawnRadius={this.state.radius} />
            <ControlBar>
              <DataConfig label="Node Capacity" value={QuadTree.capacity}
                updateFunc={(value) => { this.simulationCanvasRef.current?.updateVars({ capacity: +value.target.value }); this.forceUpdate() }} />
              <DataConfig label="Maxmimum Tree Depth" value={QuadTree.maxDepth}
                updateFunc={(value) => { this.simulationCanvasRef.current?.updateVars({ maxDepth: +value.target.value }); this.forceUpdate() }} />
              <DataConfig label="Radius" value={this.state.radius}
                updateFunc={(value) => this.setState({ radius: +value.target.value })} />
              <DataConfig label="Spawn Count" value={this.state.count}
                updateFunc={(value) => this.setState({ count: +value.target.value })} />
              <ActionButton label="Spawn Bodies"
                onClick={() => { for (let i = 0; i < this.state.count; i++) this.simulationCanvasRef.current?.addBody(this.state.radius) }} />
              <ActionButton label="Clear Bodies"
                onClick={() => this.simulationCanvasRef.current?.clearBodies()} />
              <DataToggle label="Show FPS" value={this.simulationCanvasRef.current?.debug.showFPS}
                updateFunc={(_, checked) => { this.simulationCanvasRef.current?.updateVars({ showFPS: checked }); this.forceUpdate() }} />
              <DataToggle label="Show Quads" value={this.simulationCanvasRef.current?.debug.showQuads}
                updateFunc={(_, checked) => { this.setState({ showQuads: checked }); this.simulationCanvasRef.current?.updateVars({ showQuads: checked }); this.forceUpdate() }} />
            </ControlBar>
          </div>
        </main>
      </div>
    )
  }
}
