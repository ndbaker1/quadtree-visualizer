import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { AppProps } from 'next/app'
import '../styles/globals.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#000'
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
