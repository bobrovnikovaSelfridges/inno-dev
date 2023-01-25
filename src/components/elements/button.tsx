import { Text } from "./text";
import styled from "styled-components";
import { ReactNode } from "react";
import { ComponentSize } from "../../tools/types";
import { useAppContext } from "../../context/app-context";
import { ProductData } from "../../tools/types";

export type ButtonTypes = "link" | "cart" | "bubble";

type Props = {
  text?: string;
  type?: ButtonTypes;
  children?: ReactNode;
  size?: ComponentSize;
  handler?: (item: ProductData) => void;
  item?: ProductData;
};

export const Button = ({
  size,
  item,
  handler,
  children,
  text,
  type = "bubble",
}: Props) => {
  const { states } = useAppContext();
  return (
    <Root
      onClick={() => {
        handler && item && handler(item);
        states.isAnimatedModal.onChange(true);
        setTimeout(() => {
          states.isAnimatedModal.onChange(false);
        }, 20000);
      }}
      id={`${size || "xs"}_${type}`}
      size={size || "xs"}
      bttnType={type}
    >
      {children && children}
      {text && <Text children={text} size={"s"} />}
    </Root>
  );
};

const commonButtonTypes = `
  outline: none;
  background: none;
  border: none;
  text-decoration: none;
  font-weight: 400;
  margin: 0;
  padding: 0.75rem;
  height: 45px;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center; 


  p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

`;

const Root = styled.button<{ size: ComponentSize; bttnType: ButtonTypes }>`
  ${commonButtonTypes};
  background-color: ${({ theme }) => theme.static.buttonBackground};
  &:hover {
    background-color: ${({ theme }) => theme.hover.buttonBackground};
  }
  ${({ theme, bttnType }) => buttonsByType(bttnType, theme)}
`;

const buttonsByType = (bttnType: ButtonTypes, theme: any) => {
  switch (bttnType) {
    case "bubble":
      return `
        text-transform: uppercase;
        background-color: white;
        outline: 1px solid white;
        border-radius: 5px;
     `;

    case "link":
      return `
     outline-bottom: 1px solid ${theme.static.contentBorder};
    `;

    default:
      // cart
      return ` 
      // padding: 0;
      border-radius: 5px;
      outline-bottom: 1px solid white;      aspect-ratio: 1/1;
  `;
  }
};
