export const TABLET_MAX_PX = 768;
export const MOBILE_MAX_PX = 548;

export const bps: { desktop: string; mobile: string; tablet: string } = {
  desktop: `@media (min-width: ${TABLET_MAX_PX}px)`,
  tablet: `@media (max-width: ${TABLET_MAX_PX}px)`,
  mobile: `@media (max-width: ${MOBILE_MAX_PX}px)`,
};
