import { ChangeEvent, Component } from 'react'
import { Button, Checkbox, FormControlLabel, Slider, TextField } from '@material-ui/core'
import EditSharpIcon from '@material-ui/icons/EditSharp'
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp'
import styles from './control-bar.module.scss'

const ControlNav = (props: { hideFunc: () => void }): JSX.Element => (
  <div id={styles.top_control}>
    <NavigateBeforeSharpIcon style={{ fontSize: 50 }} onClick={props.hideFunc} />
    <p>SETTINGS</p>
  </div>
)

const UIInfo = (): JSX.Element => <div style={{ textAlign: 'center', fontSize: '0.8rem' }}><i>Click and Drag to Launch a New Body</i></div>

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
          <EditSharpIcon style={{ fontSize: 35 }} />
        </div>
        <div
          className={styles.panel}
          style={{ transform: `translateX(${this.state.showing ? 0 : -100}%)` }}>
          <ControlNav hideFunc={this.handleClick} />
          <div style={{ margin: 'auto', height: 2, width: '90%', backgroundColor: styles.color2 }}></div>
          <div id={styles.options}>
            {this.props.children}
          </div>
          <UIInfo />
        </div>
      </div>
    )
  }
}

export function SectionTitle(props: { title: string }): JSX.Element {
  return <div className={styles.section_header}>{props.title.toUpperCase()}</div>
}

export function DataSlider(props: { value: number, updateFunc: (value: number) => void, label: string }): JSX.Element {
  return (
    <div>
      <div className={styles.data_title}>Restitution Constant<br /><b>{props.value}</b></div>
      <Slider style={{ width: '80%' }}
        value={props.value}
        onChange={(_, value: number | number[]) => props.updateFunc(typeof value === 'number' ? value : 0)}
        step={0.01}
        min={0}
        max={1}
      />
    </div>
  )
}

export function ActionButton(props: { onClick: () => void, label: string }): JSX.Element {
  return (
    <Button onClick={props.onClick} size="medium" >{props.label}</Button>
  )
}

export function DataConfig<T>(props: { value: T, label: string, updateFunc: (value: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void }): JSX.Element {
  return (
    <form autoComplete="off">
      <TextField onChange={props.updateFunc} value={props.value} label={props.label} variant="filled" inputMode="numeric" />
    </form>
  )
}

export function DataToggle(props: { value: boolean | undefined, label: string, updateFunc: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void }): JSX.Element {
  return (
    <FormControlLabel control={
      <Checkbox checked={props.value === undefined ? true : props.value} onChange={props.updateFunc} />
    } label={props.label} style={{ marginLeft: 10, marginRight: 'auto' }} />
  )
}
