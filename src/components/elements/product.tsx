import styled from "styled-components";
import { bps } from "../../styles/breakpoints";
import { ComponentSize, ColleagueData } from "../../tools/types";
import { Image } from "./image";
import { Text } from "./text";
import { Title } from "./title";
import { useAppContext } from "../../context/app-context";

type Props = {
  data: [string, ColleagueData];
};

const selectedSize = "xs";

export const Card = ({ data }: Props) => {
  const { states } = useAppContext();
  return (
    <ContentRoot
      id={data[1].name + "_" + data[1].photo + "_"}
      onClick={() => {
        states.isModalOpen.onChange(!states.isModalOpen.value);
      }}
      size={selectedSize}
    >
      <Image src={data[1].photo} />

      {/* <ProductButtons data={data} /> */}

      <TextContent size={selectedSize}>
        <Title size={selectedSize}>{data[1].name}</Title>
        {data[1].facts && <Text size={selectedSize}>{data[1].facts}</Text>}
        {data[1].local && <Text size={selectedSize}>{data[1].local}</Text>}
      </TextContent>
    </ContentRoot>
  );
};

const TextContent = styled.div<{ size: ComponentSize }>`
  height: 100%;

  > [id="price"] {
    text-align: right;
  }

  ${({ size }) => {
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
  box-shadow: 12px 12px 2px 1px ${({ theme }) =>
    theme.static.contentBackground}};
  padding: 1rem;
  width: 12rem; 
  ${commonRootSet};
  
    ${bps.desktop} {
       width: 14rem; 
    };
 
 `;
