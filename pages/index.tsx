import { ChangeEvent, Component, createRef, RefObject } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SimulationCanvas from '../components/simulation-canvas'
import ControlBar from '../components/control-bar'
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core'
import { QuadTree } from '../utils/quadtree'

function ActionButton(props: { onClick: () => void, label: string }): JSX.Element {
  return (
    <Button onClick={props.onClick}>{props.label}</Button>
  )
}

function DataConfig<T>(props: { value: T, label: string, updateFunc: (value: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void }): JSX.Element {
  return (
    <form autoComplete="off">
      <TextField onChange={props.updateFunc} defaultValue={props.value} label={props.label} variant="filled" inputMode="numeric" />
    </form>
  )
}

function DataToggle(props: { value: boolean, label: string, updateFunc: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void }): JSX.Element {
  return (
    <FormControlLabel control={
      <Checkbox checked={props.value} onChange={props.updateFunc} />
    } label={props.label} />
  )
}

interface StateFields { radius: number, count: number, showFPS: boolean, showQuads: boolean }

export default class Home extends Component<unknown, StateFields> {
  private simulationCanvasRef: RefObject<SimulationCanvas> = createRef()
  constructor(props: unknown) {
    super(props)
    this.state = { radius: 5, count: 1, showFPS: true, showQuads: true }
    this.simulationCanvasRef.current?.updateVars({ showFPS: this.state.showFPS, showQuads: this.state.showQuads })
  }
  componentDidMount(): void {
    for (let i = 0; i < 200; i++)
      this.simulationCanvasRef.current?.addBody(5)
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
            <SimulationCanvas ref={this.simulationCanvasRef} spawnRadius={this.state.radius} />
            <ControlBar>
              <DataConfig label="Node Capacity" value={QuadTree.capacity}
                updateFunc={(value) => this.simulationCanvasRef.current?.updateVars({ capacity: +value.target.value })} />
              <DataConfig label="Maxmimum Tree Depth" value={QuadTree.maxDepth}
                updateFunc={(value) => this.simulationCanvasRef.current?.updateVars({ maxDepth: +value.target.value })} />
              <DataConfig label="Radius" value={this.state.radius}
                updateFunc={(value) => this.setState({ radius: +value.target.value })} />
              <DataConfig label="Spawn Count" value={this.state.count}
                updateFunc={(value) => this.setState({ count: +value.target.value })} />
              <ActionButton label="Create Bodies"
                onClick={() => { for (let i = 0; i < this.state.count; i++) this.simulationCanvasRef.current?.addBody(this.state.radius) }} />
              <ActionButton label="Clear Bodies"
                onClick={() => this.simulationCanvasRef.current?.clearBodies()} />
              <DataToggle label="Show FPS" value={this.state.showFPS}
                updateFunc={(_, checked) => { this.setState({ showFPS: checked }); this.simulationCanvasRef.current?.updateVars({ showFPS: checked }) }} />
              <DataToggle label="Show Quads" value={this.state.showQuads}
                updateFunc={(_, checked) => { this.setState({ showQuads: checked }); this.simulationCanvasRef.current?.updateVars({ showQuads: checked }) }} />
            </ControlBar>
          </div>
        </main>
      </div>
    )
  }
}
