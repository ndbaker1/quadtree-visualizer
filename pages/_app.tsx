import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { AppProps } from 'next/app'
import '../styles/globals.scss'
import styles from '../styles/theme.module.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: styles.color1

    },
    secondary: {
      main: styles.color1
    },
    text: {
      primary: styles.color1,
      secondary: styles.color1
    }
  }
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
