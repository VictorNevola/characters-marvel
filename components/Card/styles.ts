import styled from "styled-components";

export const CardWrapper = styled.article`
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  background-color: ${(props) => props.theme.colors.primary};
`;

export const CardImage = styled.div`
  width: 100%;
`;
