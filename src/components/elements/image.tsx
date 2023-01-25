import styled from "styled-components";
import { bps } from "../../styles/breakpoints";
import { ComponentSize } from "../../tools/types";

type Props = {
  src: string;
  size?: ComponentSize;
  isInCard?: boolean;
};

export const Image = ({ src, size, isInCard = false }: Props) => {
  const tempImg =
    src ||
    " https://images.unsplash.com/photo-1631050165155-421c47e306f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  return isInCard ? (
    <ImageInCard size={size} id={"ImageInCard_" + size} src={tempImg} />
  ) : (
    <ImageStyles size={size} id={"ImageStyles_" + size} src={tempImg} />
  );
};

const ImageStyles = styled.img<{ size?: ComponentSize }>`
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  ${bps.desktop} {
    border-radius: 0 0 15px 15px;
  }
  ${({ size }) => {
    switch (size) {
      case "cover":
        return `
        object-fit: cover;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        border-radius: 0 0 5px 5px;
        ${bps.desktop} {
          border-radius: 0 0 15px 15px;
        } 
      `;

      case "s":
        return `
        object-fit: cover;
        width: 100%;
        height: 12rem;
        border-radius: 5px;
        ${bps.desktop} {
          height: 14rem;
          border-radius:  15px;
        } 
      `;

      case "m":
        return `
        height: 14rem;
       ${bps.desktop} {
        height: 16rem;
      }`;

      default:
        return `
        border-radius: 5px;
        height: 14rem;
        width: 100%;
 
        ${bps.desktop} {
          height: 15rem;
          border-radius: 15px;
        }`;
    }
  }}
`;

const totalCover = `
  object-fit: cover;
  width: 100%;
  height: 100%;
  width: calc(100% + 2rem);
  margin-left: -1rem;

  ${bps.desktop} {
    width: calc(100% + 3rem);
    margin-left: -1.5rem;
  }
`;

const ImageInCard = styled.img<{ size?: ComponentSize }>`
  height: 14rem;
  width: calc(100% + 3rem);
  margin-left: -1.5rem;
  margin-top: -1.5rem;
  ${({ size, theme }) => {
    switch (size) {
      case "xs":
        return `
        object-fit: cover;
         border-radius: 5px 5px  0 0;

        ${bps.desktop} {
          border-radius: 15px 15px 0 0;
        }`;

      case "s":
        return `
        object-fit: cover;
        height: 70%;
        border-radius: 5px 5px  0 0;

        ${bps.desktop} {
          border-radius: 15px 15px 0 0;
        }
        `;

      case "m":
        return `
        ${totalCover};
         height: 14rem;
         width: calc(100% - 2rem)
         ${bps.desktop} {
           height: 16rem;
        }`;

      case "xs":
        return `  
        height: 8rem; 
        margin-top: unset !important;
         margin-bottom: -1rem ;
        ${bps.desktop} { 
          margin-bottom: -1.5rem ;
        }
        `;
      default:
        // cover, l...
        return `
        height: calc(100% - 3rem);
        border-bottom: 1px solid ${theme.static.contentBorder};
        border-radius: 5px 5px 0 0; 
        
          ${bps.desktop} {
          border-radius: 15px 15px 0 0; 
        }`;
    }
  }}
`;
