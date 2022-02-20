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
  flex-wrap: wrap;
  position: relative;
  gap: 0.5rem 0px;
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
