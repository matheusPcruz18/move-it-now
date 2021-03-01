import GlobalStyles from '../styles/global'

import { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/themes'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={light}>

      <ChallengesProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChallengesProvider>
    
    </ThemeProvider>
  )
}

export default MyApp
