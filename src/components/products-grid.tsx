import { useState } from "react";
import styled from "styled-components";
import { bps } from "../styles/breakpoints";
import { config } from "../tools/config";
import { ColleagueData, ProductData } from "../tools/types";
import { Card } from "./elements/product";

export const ProductsGrid = () => {
  return (
    <Root>
      {Object.entries(config.colleagues).map(
        (dataset: [string, ColleagueData], idx: number) => {
          return <Card key={`${idx}${dataset[1].name}`} data={dataset[1]} />;
        }
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding: 1rem;
  gap: 1.5rem;

  ${bps.desktop} {
    gap: 2rem;
  }
`;

export const nameConstructor = (idx: number, name: string) => `${name}_${idx}`;
