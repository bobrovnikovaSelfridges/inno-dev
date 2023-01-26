import styled, { css, keyframes } from "styled-components";
import { StarDust } from "./star-dust";
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
  const firstName = data[1].name.split(" ")[0];
  return (
    <ContentRoot
      id={data[1].name + "_" + data[1].photo + "_"}
      onClick={() => {
        states.isModalOpen.onChange(!states.isModalOpen.value);
      }}
      size={selectedSize}
    >
      <Image src={data[1].photo} />

      <TextContent size={selectedSize}>
        <Title size={selectedSize}>{data[1].name}</Title>

        {data[1].title && <TitleContent>{data[1].title}</TitleContent>}
        <Text size={selectedSize}>{`Important facts about ${firstName}:`}</Text>

        {data[1].facts && <Text size={selectedSize}>{data[1].facts}</Text>}
        <Text
          size={selectedSize}
        >{`${firstName} is from: ${data[1].local}`}</Text>
      </TextContent>
      <StarDust data-attr="dust" />
    </ContentRoot>
  );
};

const TitleContent = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  margin: 0.25rem 0;
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
`;
const TextContent = styled.div<{ size: ComponentSize }>`
  height: 100%;
  padding-top: 1rem;
  > [id="price"] {
    text-align: right;
  }

  > h1 {
    margin-top: 0;
  }
`;

const shake = keyframes`
0% {
  transform: rotate(0);
 }
50%{
  transform: rotate(1deg);
}
100% {
  transform: rotate(0); 
  height: 0;
}
`;

const shakeAnimation = () =>
  css`
    ${shake} .5s linear alternate;
  `;

const pulse = keyframes`
0% {
  transform: rotate(0turn) scale(.2);
  opacity: 1;
}
50% {
  transform: rotate(5turn) scale(1.15);
  opacity: 1;
}
 100% {
  transform: rotate(0turn) scale(1);
  opacity: 0;
  height: 0;
}
`;

const animationStar = () =>
  css`
    ${pulse} 2s infinite alternate;
  `;

const ContentRoot = styled.div<{ isViewed?: boolean; size: ComponentSize }>`
position: relative;
box-shadow: 12px 12px 2px 1px ${({ theme }) => theme.static.contentBackground}};
padding: 1rem;
width: 14rem; 

background-color: white;
outline: 1px solid grey;
cursor: pointer;

height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 5px;

transition: .5s ease-in-out all;
  ${bps.desktop} {
    border-radius: 15px;
  }

  :hover {
    transition: 0.5s ease-in-out all;
    animation: ${shakeAnimation};

    svg {
      animation: ${animationStar};
    }
  }
`;
