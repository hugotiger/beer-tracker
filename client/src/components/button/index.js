import React from "react";
import { Styled } from "./styles";

export function Button({ children, ...restProps }) {
  return (
    <Styled.Button whileTap={{ scale: 0.95 }} {...restProps}>
      {children}
    </Styled.Button>
  );
}
