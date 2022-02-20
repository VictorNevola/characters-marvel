import styled from 'styled-components';



export const FooterWrapper = styled.footer`
  padding: 1.5rem 0;
  background-color: ${props => props.theme.colors.primary};
`;

export const FooterText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  text-align: left;
  margin: 0;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`;

export const FooterIcon = styled.div`
  width: 20px;
  height: 20px;

`;