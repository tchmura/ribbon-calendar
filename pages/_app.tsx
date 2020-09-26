import type { AppProps } from 'next/app'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Component {...pageProps} />
    </MuiPickersUtilsProvider>
  )
}

export default MyApp
