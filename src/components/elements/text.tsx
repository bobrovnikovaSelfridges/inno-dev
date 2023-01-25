import styled from "styled-components";
import { bps } from "../../styles/breakpoints";
import { ComponentSize } from "../../tools/types";

type Props = {
  size: ComponentSize;
  children: string | string[];
  lineLimit?: number;
};

export const Text = ({ size, lineLimit, children }: Props) => {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((elem) => (
          <Root
            lineLimit={lineLimit || 999999}
            size={size}
            key={elem}
            dangerouslySetInnerHTML={{ __html: elem }}
          />
        ))}
      </>
    );
  }
  return (
    <Root
      lineLimit={lineLimit || 99999999}
      size={size}
      id={"plain text"}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

const Root = styled.p<{ lineLimit: number; size: ComponentSize }>`
  width: 100%;
  margin: 0;
  padding: 0;
  ${({ lineLimit }) => `
  display: -webkit-box;
  -webkit-line-clamp: ${lineLimit};
  -webkit-box-orient: vertical;  
  overflow: hidden;
  `}
  ${({ size }) => {
    switch (size) {
      case "xs":
        return `
        margin: 1rem 0 .5rem;
        font-size: 12px;
        line-height: 14px;
        ${bps.desktop}{
          font-size: 14px;
          line-height: 17px;
        }`;
      case "s":
        return `
        margin: 1.5rem 0 1rem;
        font-size: 15px;
        line-height: 17px;
        // margin:0;
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
