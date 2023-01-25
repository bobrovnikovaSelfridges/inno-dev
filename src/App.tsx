import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { ProductsGrid } from "./components/products-grid";
import { Text } from "./components/elements/text";
import { Title } from "./components/elements/title";
import { AppContext } from "./context/app-context";
import { config } from "./tools/config";
import { getTheme } from "./theme/getTheme";
import { Cart, ProductData, ThemedStyles, Wishlist } from "./tools/types";
import "./assets/fonts/index.css";
import SwiperComponent from "./components/swiper";
import { Button } from "./components/elements/button";

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
        {/* <Modal /> */}
        {PE_ICON()}
        <Root>
          {/* <Header /> */}
          {/* <BttnWrap onClick={() => setVisibility(true)}>
            <Button handler={() => setVisibility(true)}>Check your luck</Button>
          </BttnWrap> */}
          <ProductsGrid items={config.colleagues} />
          <Wrap
            data-a={isSelectionVisible}
            style={{
              transform: isSelectionVisible ? "scaleY(1)" : "scaleY(0)",
            }}
          >
            <SwiperComponent />
          </Wrap>
          {/* 
          <ProductsGrid productGridIndex={0} />
          <ProductsGrid productGridIndex={1} />
          <ProductsGrid productGridIndex={2} />
          <Title size={"m"}>Title M size </Title>
          <Text size={"m"}>
            M-size text: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Text>

          <Title size={"l"}>Title L size </Title>
          <Text size={"l"}>
            L-size text: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Text> */}
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
  background-color: ${({ theme }) => theme.static.contentBackground};
  font-family: poppins, "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  margin: 0;
  padding: 1rem;

  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;
const Wrap = styled.div`
  transition: 1s ease-in-out all;
`;
const BttnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
