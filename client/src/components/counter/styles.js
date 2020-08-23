import styled from "styled-components";

const Counter = styled.div`
  width: 350px;
  height: 68px;
  margin-bottom: 16px;

  /* This matches h1-styling, but i'm using <p> as it's
     more semantically correct
  */
  p {
    font-size: 3.2rem;
    margin: 0;
    font-weight: 600;
  }
`;

export const Styled = { Counter };
