import Swiper from "react-id-swiper";
import styled from "styled-components";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import { useAppContext } from "../context/app-context";
import { ColleagueData } from "../tools/types";
import { Card } from "./elements/product";

const SwiperComponent = () => {
  SwiperCore.use([Pagination]);

  const params = {
    slidesPerView: "auto" as any,
    spaceBetween: 32,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  const { config } = useAppContext();
  if (!config.colleagues) return <>NONE</>;
  return (
    <StyledSwiper>
      <Swiper {...params}>
        {Object.entries(config.colleagues).map(
          (el: [string, ColleagueData], id: number) => {
            return (
              <div key={`${id}_${el[1].name}`}>
                <Card item={el} />
              </div>
            );
          }
        )}
      </Swiper>
    </StyledSwiper>
  );
};

export default SwiperComponent;

const StyledSwiper = styled.div`
  margin: 1rem -1rem;
  height: 100%;
  h1 {
    margin-top: 0.5rem;
  }

  .swiper-slide {
    max-width: 14rem;
  }

  > .swiper-container {
    overflow: hidden;
    margin: 0px auto;
    list-style: none;
    padding: 0 1rem;
    z-index: 1;
    padding-bottom: 1rem;
  }
  .swiper-wrapper {
    height: 100%;
    margin-top: 1rem;
  }
  .swiper-pagination-bullet {
    font-size: 3rem;
    line-height: 0;
    border-radius: 50%;
    color: ${({ theme }) => theme.static.boxShadow};

    ::before {
      content: " . ";
    }

    :hover {
      cursor: pointer;
      color: grey;
    }
  }

  .swiper-pagination-bullet-active {
    color: ${({ theme }) => theme.hover.projectEarth};
  }

  .swiper-pagination {
    margin-top: 2rem;
    text-align: center;
    transition: 300ms opacity;
  }
`;
