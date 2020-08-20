import React from "react";
import { Styled } from "./styles";

export function Loader({ ...restProps }) {
  return (
    <Styled.Loader
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      {...restProps}
    >
      Updating...
    </Styled.Loader>
  );
}
