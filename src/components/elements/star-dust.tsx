import styled from "styled-components";
import { AiTwotoneStar } from "react-icons/ai";
import { getRandomNumber } from "../../utils/getRandomNumber";

const randoms: { size: number; left: number; top: number }[] = [];

let i = 70;
while (i > 1) {
  i--;
  randoms.push({
    size: getRandomNumber(30),
    left: getRandomNumber(100),
    top: getRandomNumber(75),
  });
}

export const StarDust = () => {
  return <Root>{generateDust()}</Root>;
};

const generateDust = () => {
  const elements: React.ReactElement[] = [];
  let i = 60;

  while (i > 1) {
    i--;
    elements.push(
      <Star
        key={i}
        top={randoms[i].top}
        left={randoms[i].left}
        size={randoms[i].size}
      />
    );
  }

  return elements;
};

const Star = styled(AiTwotoneStar)<{
  top: number;
  left: number;
}>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  opacity: 0;
`;

const Root = styled.div`
  z-index: 99;
  color: gold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
