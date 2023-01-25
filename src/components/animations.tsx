import styled, { css, keyframes } from "styled-components";

export const horisontalSlide = keyframes`  0% {
  0% {
    // width: 0;
  }
  50% {
    // width: 4rem;
  }
  100% {
    // width: 0;
  }`;

export const animationForModal = keyframes`
0% {
  width: 0;
}
50% {
  width: 4rem;
}
100% {
  width: 0;
}
`;

export const animateModal = () =>
  css`
    animation: ${animationForModal} 1s ease-in-out;
  `;
