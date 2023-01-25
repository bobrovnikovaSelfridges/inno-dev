import styled, { css, keyframes } from "styled-components";

export const confetti = keyframes`
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

export const confettiStyle = () =>
  css`
    animation: ${confetti} 1s ease-in-out;
  `;
