import styled from "styled-components";
import { bps } from "../../styles/breakpoints";
import { ComponentSize, ColleagueData } from "../../tools/types";
import { Image } from "./image";
import { Price } from "./price";
import { Text } from "./text";
import { Title } from "./title";
import { useAppContext } from "../../context/app-context";

type Props = {
  data: ColleagueData;
};

const selectedSize = "s";

export const Card = ({ data }: Props) => {
  const { states } = useAppContext();
  return (
    <ContentRoot
      id={data.name + "_" + data.photo + "_"}
      onClick={() => {
        states.isModalOpen.onChange(!states.isModalOpen.value);
      }}
      size={selectedSize}
    >
      <Image isInCard={true} size={selectedSize} src={data.photo} />

      {/* <ProductButtons data={data} /> */}

      <TextContent size={selectedSize}>
        <Title size={selectedSize}>{data.name}</Title>
        {data.facts && <Text size={selectedSize}>{data.facts}</Text>}
      </TextContent>
    </ContentRoot>
  );
};

const TextContent = styled.div<{ size: ComponentSize }>`
  height: 100%;

  > [id="price"] {
    text-align: right;
  }

  ${({ size, theme }) => {
    switch (size) {
      case "xs":
        return `
         
        > h1 {
          margin-top: 0;
        }`;

      default:
        return ``;
    }
  }}
`;

const commonRootSet = `
 background-color: white;
 outline: 1px solid grey;
 cursor: pointer;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 border-radius: 5px;

 transition: .5s ease-in-out all;
 ${bps.desktop} {
 border-radius: 15px;
 }

`;
const ContentRoot = styled.div<{ isViewed?: boolean; size: ComponentSize }>`
  position: relative;
  ${({ size, isViewed, theme }) => {
    switch (size) {
      case "xs":
        return `
           box-shadow: 12px 12px 2px 1px ${theme.static.boxShadow}};
          padding: 1rem;
          width: 12rem; 
          ${commonRootSet};
           ${bps.desktop} {
          padding: 1.5rem;
          width: 14rem; 
          };`;

      case "s":
        return `
 ${commonRootSet};
 
 border-radius: 5px;
 aspect-ratio: 1/1.25;
 max-width: 12rem;
 min-width: 6rem; 
 height: 22rem;
 
 ${bps.desktop} {
 border-radius: 15px;
 max-width: 14rem; 
 };

 ${bps.mobile} {
 max-width: unset;
 min-width: unset:
 width: 100%;
 }
 
 `;

      case "m":
        return `
 ${commonRootSet};
 box-shadow: 12px 12px 2px 1px ${theme.static.boxShadow}};
 width: 16rem; 

 ${bps.desktop} {
 width: 18rem;
 height: 26rem;
 };
 ${
   isViewed &&
   `transform: scale(1.05);
 height: auto;`
 }
 `;

      default:
        // l
        return `
 max-height: 18rem;
 width: 50%;
 ${bps.desktop} {
 max-height: 22rem;
 width: 28rem;
 };
 ${
   isViewed &&
   `max-height: 24rem;
 transform: scale(1.05);
 height: auto;`
 }
 `;
    }
  }}

  &:hover {
    ${bps.desktop} {
      transform: scale(1.015);
    }
    cursor: pointer;
  }
`;
