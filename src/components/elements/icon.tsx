import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const Icon = ({ onClick, children }: Props) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  cursor: pointer;

  outline: none;
  background: none;
  border: none;
  text-decoration: none;
  font-weight: 400;
  margin: 0;
`;
