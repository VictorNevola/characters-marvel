import styled from 'styled-components';

export const CardBtnWishList = styled.button`
  display: block;
  position: absolute;
  top: 6px;
  right: 6px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    display: block;
    color: ${(props) => props.theme.colors.tertiary};
    z-index: 1;
  }
`;