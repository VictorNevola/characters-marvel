import styled from "styled-components";

export const CardWrapper = styled.article`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  background-color: ${(props) => props.theme.colors.primary};
`;

export const CardImage = styled.div`
  width: 100%;

  img {
    border-radius: 4px 4px 0px 0px;
  }
`;

export const CardAbout = styled.div`
  padding: 1rem;
`;

export const CardName = styled.h1`
  display: block;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.text};
  margin-top: 0.5rem;

  strong {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
    margin-right: 8px;
  }

  p {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.text};
    margin: 0px;
    max-width: 100%;
    word-break: break-word;
  }
`;

export const CardInfoList = styled.div`
  position: relative;
  margin-top: 0.5rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.colors.text};

    button {
      display: block;
      font-size: 14px;
      line-height: 18px;
    }

    & > div {
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
    }
  }

  ul {
    list-style: none;
    transition: all 0.3s ease-in-out;
    height: 0px;
    overflow-y: hidden;
    margin-top: 14px;

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
  }

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
    }
  }
`;

export const CardInfoBtn = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;
