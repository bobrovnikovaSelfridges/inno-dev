import styled, { keyframes } from "styled-components";

import { CgScrollH } from "react-icons/cg";
import { bps } from "../../styles/breakpoints";

export const ScrollTip = () => {
  return <ScrollTipStyle />;
};

const showScrollability = keyframes`  0% {
  margin-left: -1rem;
  }
  50%{
    margin-left: 1rem;
  }
  
  100% {
    margin-left: -1rem;
  
  }`;
const ScrollTipStyle = styled(CgScrollH)`
color: ${({ theme }) => theme.static.svg}};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  margin-top: 1rem;
  animation: ${showScrollability} 4s linear infinite;

  ${bps.desktop} {
    height: 2rem;
  }
`;
