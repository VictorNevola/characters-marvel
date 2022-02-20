import styled, { keyframes } from "styled-components";
import { Container } from "../utils";

const shimmer = keyframes`
  0% {
    background-position: -180px 0;
  }
  
  100% {
    background-position: 180px 0; 
  }
`;

export const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const HomeWrapper = styled(Container)`
  padding: 2.25rem 1rem;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
  word-break: break-all;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.25rem;
  }
`;

export const TitleSpan = styled.span`
  display: block;

  strong {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.tertiary};
    text-underline-position: under;
  }
`;

export const HomeTopActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0px 24px;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const Shimmer = styled.h1`
  display: inline-block;
  background: ${(props) => props.theme.colors.background} -webkit-gradient(linear, 100%
        0, 0 0, from(${(props) => props.theme.colors.background}), color-stop(0.5, ${(props) => props.theme.colors.tertiary}), to(${(props) => props.theme.colors.background}));
  color: white;
  animation: ${shimmer} 3s forwards infinite;
  background-position: -50px top;
  background-repeat: no-repeat;
  border-radius: 2px;
  width: 180px;
  height: 10px;
`;

export const HomeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-row-gap: 14px;
  grid-column-gap: 18px;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

export const HomeListContent = styled.li`
  display: block;
  width: 100%;
`;

export const HomeLoader = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${(pros) => pros.theme.colors.text};
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(pros) => pros.theme.colors.text} transparent transparent
      transparent;
    margin: 0 auto;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
