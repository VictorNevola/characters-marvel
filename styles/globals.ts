import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  body {
    background: #fafafa;
    font-family: 'Poppins', sans-serif;
  }
`;