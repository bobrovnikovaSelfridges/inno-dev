import { ReactNode } from "react";
import styled from "styled-components";
import { bps } from "../../styles/breakpoints";
import { ComponentSize } from "../../tools/types";

type Props = {
  children: ReactNode;
  size: ComponentSize;
};

export const Title = ({ size, children }: Props) => {
  return <Root size={size}>{children}</Root>;
};

const Root = styled.h1<{ size: ComponentSize }>`
  width: 100%;
  padding: 0;
  margin: 0;

  ${({ size }) => {
    switch (size) {
      case "s":
        return `
        margin: .5rem 0;
        font-size: 17px; 
        line-height: 20px;
        ${commonTitleStyles};
        ${bps.desktop}{
          margin 1rem 0;
          font-size: 22px;
          line-height: 25px;
        }`;
      case "l":
        return `
        font-size: 36px;
        line-height: 40px;
        ${commonTitleStyles};
        margin 1.5rem 0 .5rem;
        ${bps.desktop}{
          margin 2rem 0 1rem;
          font-size: 56px;
          line-height: 50px;
        }`;
      default:
        return `
        margin 1.5rem 0 1rem;
        font-size: 22px; 
        line-height: 28px;
        ${commonTitleStyles};
        ${bps.desktop}{
          margin 2rem 0 1rem;
          font-size: 26px;
          line-height: 30px;
        }`;
    }
  }}
`;

const commonTitleStyles = `
text-transform: uppercase;
font-weight: 600;`;
