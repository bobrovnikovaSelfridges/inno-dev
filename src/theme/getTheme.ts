import { colorThemes } from "./color-themes";
import { fontSettings } from "./font";
import { ThemedStyles } from "../tools/types";

export const getTheme = (currentThemeName: string): ThemedStyles => {
  return {
    fonts: fontSettings,
    ...colorThemes[currentThemeName],
  };
};
