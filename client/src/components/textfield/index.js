import React from "react";
import { Styled } from "./styles";

export function TextField({
  type,
  value,
  onChange,
  label,
  name,
  ...restProps
}) {
  return (
    <>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </>
  );
}
