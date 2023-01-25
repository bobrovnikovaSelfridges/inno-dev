import { ReactNode } from "react";
import styled from "styled-components";
import { ProductData } from "../../tools/types";
import { Button } from "./button";

type Props = {
  item: ProductData;
  action: (item: ProductData) => void;

  text?: string;
  children?: ReactNode;
};

export const AddTo = ({ text, children, action, item }: Props) => {
  return (
    <Root handler={action} item={item} text={text || ""} type="cart">
      {children && children}
    </Root>
  );
};

const Root = styled(Button)`
  cursor: pointer;
  width: 50%;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
