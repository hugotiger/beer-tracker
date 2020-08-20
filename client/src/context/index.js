import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../GlobalStyle";
import { SnackBarProvider } from "./snackbar/SnackBarContext";
import { GlobalProvider } from "./globalState/GlobalState";

export function AppProviders({ children }) {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyle />
      <SnackBarProvider>
        <GlobalProvider>{children}</GlobalProvider>
      </SnackBarProvider>
    </React.Fragment>
  );
}
