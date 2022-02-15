import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.secondary};
  padding: 20px;
  color: ${props => props.theme.colors.tertiary};
  font-size: 1.5rem;
  font-weight: bold;
`;