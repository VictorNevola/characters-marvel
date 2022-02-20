import styled, { keyframes } from "styled-components";

export const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: auto;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const SpinnerLoader = styled.div`
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
