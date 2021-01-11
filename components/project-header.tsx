import { Component } from 'react'
import styles from './project-header.module.scss'

export default class ProjectHeader extends Component {

  render(): JSX.Element {
    return (
      <div className={styles.header_container}>
        <div>
          <div id={styles.title}>QuadTree Visualizer</div>
          <div>Nicholas Baker 2021</div>
        </div>
      </div>
    )
  }
}
