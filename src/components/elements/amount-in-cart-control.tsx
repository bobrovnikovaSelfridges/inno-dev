import styled from "styled-components";
import { useAppContext } from "../../context/app-context";
import { ProductData } from "../../tools/types";
import { Button } from "./button";

type Props = {
  item: ProductData;
};

export const AmountInCartControl = ({ item }: Props) => {
  const { states } = useAppContext();
  const isInCart = states.cart.value.hasOwnProperty(item.id);

  return (
    <Root>
      {isInCart && (
        <Button
          item={item}
          handler={() => {
            if (states.cart.totalAmount > 0) states.cart.editCart(item, true);
          }}
          text={"-"}
          type="cart"
        />
      )}

      <Button
        item={item}
        handler={() => {
          states.cart.editCart(item);
        }}
        text={"+"}
        type="cart"
      />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  cursor: pointer;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  button {
    width: 100%;
    > p {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;
