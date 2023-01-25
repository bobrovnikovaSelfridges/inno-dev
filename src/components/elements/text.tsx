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
  margin: 1rem 0 .5rem;
  font-size: 14px;
  line-height: 14px;
  ${bps.desktop} {
    font-size: 14px;
    line-height: 17px;
  }
`;
