import { ReactNode } from "react";
import styled from "styled-components";
import { bps } from "../../styles/breakpoints";
import { ComponentSize } from "../../tools/types";

type Props = {
  size: ComponentSize;
  children: string | string[];
};

export const Price = ({ size, children }: Props) => {
  return (
    <Root id="price" size={size}>
      {children}
    </Root>
  );
};

const Root = styled.p<{ size: ComponentSize }>`
  margin: 0.5rem 0;
  width: 100%;
  font-style: italic;
  // ${bps.desktop} {
  //   margin: 1rem 0;
  // }

  ${({ size }) => {
    switch (size) {
      case "xs":
        return `
        font-size: 8px;
        line-height: 12px;
        ${bps.desktop}{
          font-size: 14px;
          line-height: 17px;
        }`;
      case "s":
        return `
         font-size: 15px;
        line-height: 17px;
        ${bps.desktop}{
          margin: 1rem 0;
          font-size: 17px;
          line-height: 25px;
        }`;
      case "l":
        return `
        margin: 1rem 0;
        font-size: 20px;
          line-height: 25px;
          ${bps.desktop}{
            font-size: 25px;
            line-height: 30px;
          }
          `;
      default:
        return `

        margin: 2rem 0 1rem;
        font-size: 17px;
        line-height: 20px;
        ${bps.desktop}{
          font-size: 22px;
          line-height: 27px;
        }`;
    }
  }}
`;
