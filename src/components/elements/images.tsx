import Swiper from "react-id-swiper";
import styled from "styled-components";
import { ComponentSize } from "../../tools/types";
import { Image } from "./image";

type Props = {
  size?: ComponentSize;
  hasNum?: boolean;
  images?: string[];
};

const sampleImages = [
  "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
  "https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1599459183200-59c7687a0275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
];

export const Images = ({
  size = "s",
  hasNum = false,
  images = sampleImages,
}: Props) => {
  const params = {
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Root id="swiper-wrap">
      <Swiper {...params}>
        {images.map((img: string, idx: number) => (
          <div key={img + idx}>
            {hasNum && <Number>{idx + 1}</Number>}
            <Image size={size} src={img} />
          </div>
        ))}
      </Swiper>
    </Root>
  );
};

const Number = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
const Root = styled.div`
  width: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
  }

  .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }

  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    transform: scale(0.85);
  }

  .swiper-slide-active {
    transition: 0.5s all ease-in-out;
    transform: scale(1);
  }

  .swiper-slide-invisible-blank {
    visibility: hidden;
  }

  img {
    object-fit: cover;
  }
`;
