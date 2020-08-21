import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../GlobalStyle";
import { SnackBarProvider } from "./snackbar/SnackBarContext";
import { BeerProvider } from "./beers/BeerContext";

export function AppProviders({ children }) {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyle />
      <SnackBarProvider>
        <BeerProvider>{children}</BeerProvider>
      </SnackBarProvider>
    </React.Fragment>
  );
}
