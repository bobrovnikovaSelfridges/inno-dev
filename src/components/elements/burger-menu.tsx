import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { useAppContext } from "../../context/app-context";

export const BurgerMenu = () => {
  const { states } = useAppContext();

  return (
    <Root
      size={states.isMobile.value ? 20 : 30}
      onClick={() => states.isMenuOpen.onChange(!states.isMenuOpen.value)}
    />
  );
};

export const Root = styled(GiHamburgerMenu)`
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;
