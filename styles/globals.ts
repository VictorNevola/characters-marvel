import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-family: 'Poppins', sans-serif;
  }
`;