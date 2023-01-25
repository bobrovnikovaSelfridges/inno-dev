import { ReactNode } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/app-context";
import { config } from "../tools/config";
import { bps } from "../styles/breakpoints";
import { Text } from "./elements/text";
import { Title } from "./elements/title";

type Props = { children?: ReactNode };

export const Header = ({ children }: Props) => {
  const { config } = useAppContext();
  const headerType = config.types.header;
  const headerImg = config.images.header;
  return (
    <Root>
      {children}
      <TextContainer>
        <Title size="l">{config.uiText.main.title}</Title>
        {config.uiText.main.subtitle && (
          <Text size={"xs"}>{config.uiText.main.subtitle}</Text>
        )}
      </TextContainer>
      <CoverImage src={"./images/selfridges.jpg"} />
    </Root>
  );
};

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  width: calc(100%);
  min-height: 14rem;
  margin-bottom: 1rem;
  color: white;

  > h1 {
    padding: 1rem;
    margin: unset;
    background-color: rgba(0, 0, 0, 0.45);
    font-size: 42px;
    line-height: 1.2;
  }
`;
const CoverImage = styled.img`
  position: absolute;
  top: 0rem;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  width: calc(100% + 2rem);
  margin-left: -1rem;
`;

const Root = styled.div`
  position: relative;
  margin-top: -1rem;
`;
