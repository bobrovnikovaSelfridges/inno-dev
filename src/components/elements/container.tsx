import styled from "styled-components";
import { bps } from "../../styles/breakpoints";

export const Container = () => {
  return <Root>header</Root>;
};

const Root = styled.div`
  width: 100%;
  height: 20rem;

  ${bps.desktop} {
  }
`;
