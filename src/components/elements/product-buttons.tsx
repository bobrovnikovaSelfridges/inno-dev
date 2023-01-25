import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AddTo } from "./add-to";
import { useAppContext } from "../../context/app-context";
import { AmountInCartControl } from "./amount-in-cart-control";
import { ProductData } from "../../tools/types";

type Props = {
  item: ProductData;
  canAddMoreThanOne?: boolean;
};
export const ProductButtons = ({ item }: Props) => {
  const { states } = useAppContext();
  const isInWishlist = states.wishlist.value.hasOwnProperty(item.id);

  return (
    <Buttons>
      <AmountInCartControl item={item} />

      <AddTo
        action={() => {
          states.wishlist.editWishList(item);
        }}
        item={item}
      >
        {isInWishlist ? <BsHeartFill size={20} /> : <BsHeart size={20} />}
      </AddTo>
    </Buttons>
  );
};

const Buttons = styled.div`
  width: calc(100% + 3rem);
  margin-left: -1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
