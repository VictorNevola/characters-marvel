import styled from "styled-components";

export const CardDropDownWrapper = styled.div`
  position: relative;
  margin-top: 0.5rem;

  &.active {
    section {
      button {
        font-size: 0px;
        &::before {
          content: "Ver menos";
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    ul {
      height: auto;
      margin-top: 14px;
    }
  }
`;

export const CardDropDownSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.text};
`;

export const CardDropDownTitleContent = styled.div`
  display: flex;
  align-items: center;

  strong {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const CardDropDownBtn = styled.button`
  display: flex;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.text};
  border: none;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

export const CardDropDownList = styled.ul`
  list-style: none;
  transition: all 0.3s ease-in-out;
  height: 0px;
  overflow-y: hidden;

  li {
    padding: 8px;
    font-size: 14px;
    line-height: 21px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 4px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
