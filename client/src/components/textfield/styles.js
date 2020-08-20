import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 8px;
  display: block;
  font-size: 1.6rem;
  padding: 16px;
  width: 100%;
  background: rgba(242, 243, 245, 1);
  will-change: opacity;
  transition: opacity 0.2s ease 0.15s;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline-offset: 0;
    outline: var(--primary-color) auto 1px;
    /* border-color: var(--primary-color); */
    /* box-shadow: inset 0 0 0 1.5px #317fff; */
  }

  &:disabled {
    color: black;
    opacity: 0.5;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin: 16px 0 7px;
  font-size: 1.4rem;
`;

export const Styled = { Input, Label };
