import GlobalStyles from '../styles/global'

import {ThemeProvider} from '../contexts/ThemeContext'


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
