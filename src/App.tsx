import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/header";

import { AppContext } from "./context/app-context";
import { config } from "./tools/config";
import { getTheme } from "./theme/getTheme";
import { Cart, ProductData, ThemedStyles, Wishlist } from "./tools/types";
import "./assets/fonts/index.css";
import SwiperComponent from "./components/swiper";
import { Title } from "./components/elements/title";
import { Text } from "./components/elements/text";

function App() {
  const [isAnimatedModal, setAnimationOnModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cart, setSelectedProducts] = useState<Cart>({});
  const [viewed, setViewed] = useState<ProductData | undefined>(undefined);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [wishlist, setNewWishlist] = useState<Wishlist>({});
  const theme: ThemedStyles = getTheme("monochrome");
  const [isSelectionVisible, setVisibility] = useState(false);
  const editWishList = (item: ProductData) => {
    const newWishList = { ...wishlist };
    newWishList[item.id] = item;
    setNewWishlist(newWishList);
  };

  const editCart = (newProduct: ProductData, isRemoveItem = false) => {
    const newCart = { ...cart };
    const hasMoreThanOne = newCart.hasOwnProperty(newProduct.id);

    if (isRemoveItem) {
      // delete one from all quantity or one at all
      if (hasMoreThanOne) {
        newCart[newProduct.id].amount = newCart[newProduct.id].amount - 1;
      } else {
        delete newCart[newProduct.id];
      }
    } else {
      // add first new or update quantity
      if (hasMoreThanOne) {
        newCart[newProduct.id].amount = newCart[newProduct.id].amount + 1;
      } else {
        (newCart[newProduct.id] as any) = {};
        newCart[newProduct.id].amount = 1;
        newCart[newProduct.id].item = newCart[newProduct.id].item;
      }
    }

    setSelectedProducts(newCart);
  };

  const initialValues = {
    theme,
    config,
    states: {
      cart: {
        value: cart,
        totalAmount: getItemsAmount(cart),
        editCart,
      },
      wishlist: {
        value: wishlist,
        editWishList,
      },
      viewed: {
        value: viewed,
        onChange: setViewed,
      },
      isMobile: {
        value: isMobile,
        onChange: setIsMobile,
      },
      isAnimatedModal: {
        value: isAnimatedModal,
        onChange: () => triggerModalAnimation(setAnimationOnModal),
      },
      isModalOpen: {
        value: isModalOpen,
        onChange: setModalOpen,
      },
      isMenuOpen: {
        value: menuOpen,
        onChange: setMenuOpen,
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={initialValues}>
        <Root>
          <Header />
          <SwiperComponent />

          <Title size={"l"}>Title L size </Title>
          <Text size={"s"}>
            Innovation team is focused on innovative approach. Those are a
            couple of our recent projects:
          </Text>
          <a href="https://www.selfridges.com/GB/en/features/articles/selfridges-guideto/gifts/">
            Christmas gift Guide
          </a>

          <a href="https://vip-signup.selfridges.com/?h=fa8enAlJkN4ItQagHEXRgP6dIiJJ7gCAzelAGhPpSiM=">
            VIP sign up form
          </a>

          <p> and currently we are working on PathFinder project </p>
        </Root>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

const PE_ICON = () => (
  <PEImg src="./PE_ICON_SVG.svg" alt="A Rectangle Image with SVG" />
);

const PEImg = styled.img`
  position: absolute;
  left: 2rem;
  top: 2rem;
  z-index: 2;
  height: 10rem;
  width: 10rem;
`;

const triggerModalAnimation = (
  setAnimationOnModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setAnimationOnModal(true);

  setTimeout(() => {
    setAnimationOnModal(false);
  }, 2000);
};

const getItemsAmount = (cart: Cart): number => {
  const cartArray = Object.values(cart);
  return (
    cartArray.reduce(
      (
        accm: number,
        curr: {
          amount: number;
          item: ProductData;
        }
      ) => accm + curr.amount,
      0
    ) || 0
  );
};

export default App;

const Root = styled.div`
  color: ${({ theme }) => theme.static.text};
  font-family: poppins, "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  margin: 0;
  padding: 1rem;

  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;
