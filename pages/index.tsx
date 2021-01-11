import { Component, createRef, RefObject } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SimulationCanvas from '../components/simulation-canvas'
import ControlBar from '../components/control-bar'

export default class Home extends Component {
  simulationCanvasRef: RefObject<SimulationCanvas> = createRef()

  componentDidMount(): void {
    for (let i = 0; i < 200; i++) {
      this.simulationCanvasRef.current?.addBody(5)
    }
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
            <SimulationCanvas ref={this.simulationCanvasRef} />
            <ControlBar>
            </ControlBar>
          </div>
        </main>
      </div>
    )
  }
}
