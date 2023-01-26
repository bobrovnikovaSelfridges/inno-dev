import { CSSProperties } from "styled-components";
export type ProductData = {
  skuId: string;
  imageSrc: string;
  brand: string;
  description: string;
  price: string;
  pdpLink: string;
  id: string;
};
export type Texts = {
  title: string;
  subtitle?: string;
  description?: string;
};

export type Project = { name: string; link: string };

export type Config = {
  uiText: {
    main: Texts;
    cart: Texts;
  };
  projects: Record<number, Project>;
  types: {
    header: Headers;
    footer: Footers;
    structure: "landing" | "pages";
  };

  images: {
    default: string;
    header: string;
  };
  colleagues: {
    [key: number]: ColleagueData;
  };
};

export type Headers = "mediumImage" | "coverImage" | "logo";
export type Footers = "start" | "middle" | "navigation";

export type PalletteType = {
  text?: string;
  buttonBackground?: string;
  links?: string;
  buttonText?: string;
  buttonBorder?: string;
  contentBackground?: string;
  contentBorder?: string;
  svgs?: string;
  boxShadow?: string;
};
export type PallettesGroupType = {
  static: PalletteType;
  hover: PalletteType;
};

export type FontSettingsSet = { fontSize: string; lineHeight: string };

export type StylesBySize = {
  s?: CSSProperties;
  m?: CSSProperties;
  l?: CSSProperties;
};

export type ElementsStates = {
  button: CSSProperties;
  content: CSSProperties;
};

export type FontSettings = {
  text: StylesBySize;
  title: StylesBySize;
};

export type ThemedStyles = {
  fonts: FontSettings;
  hover: PalletteType;
  static: PalletteType;
};

export type ComponentSize = keyof StylesBySize | "xs" | "cover";
export type ProductType = "image" | "card";

export type ColleagueData = {
  name: string;
  title: string;
  photo: string;
  facts: string[];
  local: string;
};

export type ContextType = {
  config: Config;
  theme: ThemedStyles;
  states: {
    isMobile: BooleanState;
    isMenuOpen: BooleanState;
    isModalOpen: BooleanState;
    cart: ProductsInCartState;
    viewed: Viewed;
    isAnimatedModal: BooleanState;
    wishlist: ProductsWishListState;
  };
};

export type Viewed = {
  value: ProductData | undefined;
  onChange: React.Dispatch<React.SetStateAction<ProductData | undefined>>;
};

export type ProductsInCartState = {
  value: Cart;
  totalAmount: number;
  editCart: (newProduct: ProductData, isRemoveItem?: boolean) => void;
};

export type ItemInCart = {
  [key: string]: {
    itemData: ProductData;
    amount: number;
  };
};
export type ProductsWishListState = {
  editWishList: (value: ProductData) => void;
  value: { [key: string]: ProductData };
};

export type BooleanHandler = {
  value: boolean;
  onChange: () => void;
};
export type BooleanState = {
  value: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Cart = {
  [id: string]: { amount: number; item: ProductData };
};

export type Wishlist = {
  [id: string]: ProductData;
};
