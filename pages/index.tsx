import { Component, createRef, RefObject } from 'react'
import styles from '../styles/Home.module.scss'
import ProjectHeader from '../components/project-header'
import SimulationCanvas, { SimulationCanvasProps } from '../components/simulation-canvas'
import ControlBar, { ActionButton, DataConfig, DataSlider, DataToggle, SectionTitle } from '../components/control-bar'
import { QuadTree } from '../utils/quadtree'
import { PhysicsEnvironment } from '../utils/physics'
import { Vector2D } from '../utils/vector2d'

class StateFields implements SimulationCanvasProps {
  radius = 5
  count = 200
  showFPS = true
  showQuads = true
  physicsEnvironment = new PhysicsEnvironment
}

export default class Home extends Component<unknown, StateFields> {
  private simulationCanvasRef: RefObject<SimulationCanvas> = createRef()
  constructor(props: unknown) {
    super(props)
    this.state = new StateFields

    this.spawnRandomBodies = this.spawnRandomBodies.bind(this)
  }

  componentDidMount(): void {
    // calculate a radius that is relatively the same retio for all windows
    const radius = Math.ceil(Math.min(window.innerWidth / 200, window.innerHeight / 200))
    // set initial variables
    this.setState({ radius: radius, count: 100 }, this.spawnRandomBodies)
  }

  spawnRandomBodies(): void {
    if (this.simulationCanvasRef.current)
      for (let i = 0; i < this.state.count; i++)
        this.simulationCanvasRef.current.addBody(
          this.simulationCanvasRef.current.randomPointsInBounds(),
          new Vector2D((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200),
          this.state.radius,
        )
  }

  render(): JSX.Element {
    return (
      <main>
        <div className={styles.simulation_container}>
          <ProjectHeader />
          <SimulationCanvas ref={this.simulationCanvasRef}
            showFPS={this.state.showFPS}
            showQuads={this.state.showQuads}
            physicsEnvironment={this.state.physicsEnvironment}
            radius={this.state.radius} />
          <ControlBar>
            <SectionTitle title="Physics" />
            <DataSlider label="Restitution Coefficient" value={this.state.physicsEnvironment.coefficientOfRestitution}
              updateFunc={(value: number) => {
                this.state.physicsEnvironment.updateVar({ coefficientOfRestitution: value })
                this.setState({ physicsEnvironment: this.state.physicsEnvironment })
              }} />
            <SectionTitle title="QuadTree" />
            <DataConfig label="Node Capacity" value={QuadTree.capacity}
              updateFunc={(value) => { this.simulationCanvasRef.current?.updateVars({ capacity: +value.target.value }); this.forceUpdate() }} />
            <DataConfig label="Maxmimum Tree Depth" value={QuadTree.maxDepth}
              updateFunc={(value) => { this.simulationCanvasRef.current?.updateVars({ maxDepth: +value.target.value }); this.forceUpdate() }} />
            <SectionTitle title="Simulation" />
            <DataConfig label="Radius" value={this.state.radius}
              updateFunc={(value) => this.setState({ radius: +value.target.value })} />
            <DataConfig label="Spawn Count" value={this.state.count}
              updateFunc={(value) => this.setState({ count: +value.target.value })} />
            <ActionButton label="Spawn Bodies"
              onClick={this.spawnRandomBodies} />
            <ActionButton label="Clear Bodies"
              onClick={() => this.simulationCanvasRef.current?.clearBodies()} />
            <DataToggle label="Show FPS" value={this.state.showFPS}
              updateFunc={(_, checked) => this.setState({ showFPS: checked })} />
            <DataToggle label="Show Quads" value={this.state.showQuads}
              updateFunc={(_, checked) => this.setState({ showQuads: checked })} />
          </ControlBar>
        </div>
      </main>
    )
  }
}
