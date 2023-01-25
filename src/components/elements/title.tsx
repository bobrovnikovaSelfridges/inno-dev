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
  margin: .5rem 0;
  font-size: 17px; 
  line-height: 20px;
  text-transform: uppercase;

  ${bps.desktop}{
    margin 1rem 0;
    font-size: 20px;
    line-height: 25px;
  }
`;
