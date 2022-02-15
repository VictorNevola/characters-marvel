import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}

  body {
    background: #fafafa;
    font-family: 'Poppins', sans-serif;
  }
`;