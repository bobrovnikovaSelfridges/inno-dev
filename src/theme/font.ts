import { CSSProperties } from "styled-components";
import { bps } from "../styles/breakpoints";
import { FontSettings } from "../tools/types";

// convert into styles format for TS
export const toCSS = (style: string) => style as CSSProperties;

const commonTitleStyles = `
text-transform: uppercase;
font-weight: 600;`;

export const fontSettings: FontSettings = {
  text: {
    s: toCSS(`font-size: 15px; line-height: 17px;
      ${bps.desktop}{
        font-size: 17px; line-height: 25px;
      }`),
    m: toCSS(`font-size: 17px; line-height: 20px;
      ${bps.desktop}{
        font-size: 22px; line-height: 27px;
      }`),
  },
  title: {
    s: toCSS(`font-size: 17px; line-height: 20px; ${commonTitleStyles};
    ${bps.desktop}{
      font-size: 22px; line-height: 25px;
    }`),
    m: toCSS(`font-size: 22px; line-height: 28px; ${commonTitleStyles};
    ${bps.desktop}{
      font-size: 30px; line-height: 36px;
    }`),
    l: toCSS(`font-size: 25px; line-height: 30px; ${commonTitleStyles};
    ${bps.desktop}{
      font-size: 36px; line-height: 40px;
    }`),
  },
};
