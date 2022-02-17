import styled from "styled-components";
import { Container } from "../utils";

export const HomeWrapper = styled(Container)`
  padding: 2.25rem 0rem;
`;

export const HomeTopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0 22px 0px;
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.text};
`;

export const TitleSpan = styled.span`
  display: block;

  strong {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.tertiary};
    text-underline-position: under
  }
`;

export const Count = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;