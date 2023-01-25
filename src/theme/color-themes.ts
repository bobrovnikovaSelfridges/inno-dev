import { PallettesGroupType, PalletteType } from "../tools/types";

type Names = string | "monochrome" | "autumn";

export const colorThemes: { [key: Names]: PallettesGroupType } = {
  monochrome: {
    static: {
      projectEarth: "rgb(1,183,35, .5)",
      text: "black",
      links: "rgba(117, 165, 175, 1)",
      buttonText: "rgba(117, 165, 175, 1)",
      buttonBorder: "rgba(117, 165, 175, 1)",
      contentBorder: "rgba(117, 165, 175, 1)",
      contentBackground: "#ffe256",
      boxShadow: "rgb(1,183,35, .5)",
      svgs: "black",
      buttonBackground: "rgb(1,183,35, .2)",
    } as PalletteType,
    //  small rgba change suggested
    hover: {
      projectEarth: "rgb(1,183,35,1)",
      text: "black",
      links: "rgba(117, 165, 175, .5)",
      buttonText: "rgba(117, 165, 175, .5)",
      buttonBorder: "rgba(117, 165, 175, .6)",
      contentBorder: "rgba(117, 165, 175, .5)",
      contentBackground: "#ffe256",
      boxShadow: "rgb(1,183,35, 1)",
      svgs: "black",
      buttonBackground: "rgb(1,183,35, .7)",
    } as PalletteType,
  },

  autumn: {
    static: {
      boxShadow: "rgba(0, 0, 255, 0.6)",
      text: "rgba(69, 5, 12, 1)",
      links: "rgba(69, 5, 12, .7)",
      buttonText: "rgba(69, 5, 12, 1)",
      buttonBorder: "rgba(114, 14, 7, 1)",
      contentBorder: "rgba(213, 172, 78, .125)",
      contentBackground: "rgba(238, 207, 109, .1)",
      svgs: "rgba(117, 165, 175, 1)",
    },
    hover: {
      boxShadow: "rgba(0, 0, 255, 0.6)",
      links: "rgba(69, 5, 12, 1)",
      buttonText: "rgba(117, 165, 175, .7)",
      buttonBorder: "rgba(114, 14, 7, .7)",
      contentBorder: "rgba(213, 172, 78, .25)",
      contentBackground: "rgba(238, 207, 109, .15)",
      svgs: "rgba(117, 165, 175, .7)",
    },
  },
};
