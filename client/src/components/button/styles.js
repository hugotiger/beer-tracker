import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  color: #fff;
  border: 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.6rem;
  padding: 16px;
  margin: 16px 0 32px;
  width: 100%;
  will-change: opacity, background;
  transition: opacity 0.2s ease 0.15s, background ease 0.15s;
  img {
    margin-left: 5px;
  }

  &:disabled {
    opacity: 0.5;
  }
  &:hover:enabled {
    background: #025ef2;
  }
  &:focus {
    outline: 0;
  }
`;

export const Styled = { Button };
