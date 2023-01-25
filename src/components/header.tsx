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
      {printHeaderContent(headerType, headerImg)}
      <BurgerMenu />
    </Root>
  );
};

const printHeaderContent = (type: Headers, headerImg?: string) => {
  switch (type) {
    case "coverImage":
      return (
        <>
          <div>
            <Title size="l">{config.uiText.main.title}</Title>
            <Text size={"xs"}>{config.uiText.main.subtitle}</Text>
          </div>
          {headerImg && <Image size={"cover"} src={headerImg} />}
        </>
      );

    case "mediumImage":
      return <></>;

    default:
      // logo only
      return (
        <>
          <Title size={"l"}>Title S size </Title>
          <Text size={"m"}>
            S-size text: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </>
      );
  }
};

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
