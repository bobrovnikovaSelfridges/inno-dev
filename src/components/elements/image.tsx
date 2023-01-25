import styled from "styled-components";
import { bps } from "../../styles/breakpoints";
import { config } from "../../tools/config";
import { ComponentSize } from "../../tools/types";

type Props = {
  src: string;
};

export const Image = ({ src }: Props) => {
  const tempImg = src || config.images.default;

  return <ImageInCard size={"xs"} src={tempImg} />;
};

const ImageInCard = styled.img<{ size?: ComponentSize }>`
  height: 14rem;
  width: calc(100% + 2rem);
  margin-left: -1rem;
  margin-top: -1rem;

  height: 10rem;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

  ${bps.desktop} {
    width: calc(100% + 2rem);
    margin-left: -1rem;
    margin-top: -1rem;
    border-radius: 15px 15px 0 0;
  }
`;
