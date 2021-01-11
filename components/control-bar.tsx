import styles from './control-bar.module.scss'

export default function ControlBar(props: { children: JSX.Element[] }): JSX.Element {
  return <div className={styles.control_bar}>{props.children}</div>
}