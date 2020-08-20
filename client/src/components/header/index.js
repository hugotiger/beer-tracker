import React from "react";
import { Styled } from "./styles";

export function Header({ ...restProps }) {
  return (
    <Styled.Header {...restProps}>
      <h1>Beer Tracker</h1>
      <span role="img" aria-label="Beer emoji">
        🍻
      </span>
    </Styled.Header>
  );
}
