import { Component } from 'react'
import styles from './control-bar.module.scss'
import CloseIcon from '@material-ui/icons/Close'
import TuneIcon from '@material-ui/icons/Tune'

const ControlNav = (props: { hideFunc: () => void }): JSX.Element => (
  <div id={styles.top_control}>
    <div onClick={props.hideFunc} >
      <CloseIcon style={{ fontSize: 50 }} />
    </div>
  </div>
)

interface ControlBarState { showing: boolean }

export default class ControlBar extends Component<unknown, ControlBarState> {
  constructor(props: unknown) {
    super(props)
    this.state = { showing: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(): void {
    this.setState({ showing: !this.state.showing })
  }

  render(): JSX.Element {
    return (
      <div className={styles.control_bar}>
        <div
          className={styles.minimized}
          style={{ transform: `translateX(${this.state.showing ? -100 : 0}%)` }}
          onClick={this.handleClick}>
          <TuneIcon style={{ fontSize: 35 }} />
        </div>
        <div
          className={styles.panel}
          style={{ transform: `translateX(${this.state.showing ? 0 : -100}%)` }}>
          <ControlNav hideFunc={this.handleClick} />
          <div id={styles.options}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}