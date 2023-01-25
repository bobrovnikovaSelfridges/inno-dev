import { ReactNode } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/app-context";
import { config } from "../tools/config";
import { bps } from "../styles/breakpoints";
import { Headers } from "../tools/types";
import { BurgerMenu } from "./elements/burger-menu";
import { Image } from "./elements/image";
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
      <div>
        <Title size="l">{config.uiText.main.title}</Title>
        {config.uiText.main.subtitle && (
          <Text size={"xs"}>{config.uiText.main.subtitle}</Text>
        )}
      </div>
      <CoverImage
        src={
          "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80"
        }
      />
      <BurgerMenu />
    </Root>
  );
};

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  width: calc(100% + 2rem);
  margin-left: -1rem;
  opacity: 0.8;

  ${bps.desktop} {
    width: calc(100% + 3rem);
    // margin-left: -1.5rem;
  }
`;
const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  width: calc(100%);

  padding: 1.5rem 1rem 1.5rem 12rem;
  min-height: 8rem;
  margin-bottom: 1rem;

  ${bps.desktop} {
    height: 15rem;
    min-height: 11rem;
  }

  img {
    opacity: 0.85;
  }
`;
