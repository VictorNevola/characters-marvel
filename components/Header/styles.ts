import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.tertiary};
  padding: .75rem 0;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeadertActions = styled.div`
  display: flex;
  align-items: center;
`;