import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px){
      html{
          font-size: 93.75%;
      }
  }
  @media(max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  body{
      background: ${props => props.theme.background};
      color: ${props => props.theme.text};
      transition: background-color linear 0.50s;
  }

  body, input, textarea, button {
      font: 400 1rem 'Inter', sans-serif;
  }

  button {
      cursor: pointer;
      border: none;
      background: none;
  }

  a {
      color: inherit;
      text-decoration: none;
  }
`

export default GlobalStyles

