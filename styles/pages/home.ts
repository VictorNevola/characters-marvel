import styled from "styled-components";
import { Container } from "../utils";

export const HomeWrapper = styled(Container)`
  padding: 2.25rem 1rem;

  @media(max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;


export const HomeTopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0 22px 0px;
  border-bottom: 1px solid #9797977d;
  padding-bottom: 14px;

  @media(max-width: 768px) {
    flex-wrap: wrap;
    text-align: center;
    font-size: 1.25rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.text};

  @media(max-width: 768px) {
    text-align: center;
    font-size: 1.25rem;
  }
`;

export const TitleSpan = styled.span`
  display: block;

  strong {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.tertiary};
    text-underline-position: under
  }
`;

export const HomeTopActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0px 24px;
  
  @media(max-width: 768px) {
    width: 100%;
    gap: 0px 14px;
  }
`;

export const Count = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1.25rem;
  font-weight: normal;
  letter-spacing: 2px;
  margin: 0;

  @media(max-width: 768px) {
    text-align: center;
    font-size: 16px;
    width: 100%;
    margin-bottom: 12px;
  }
`;