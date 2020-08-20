import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Snackbar = styled(motion.div)`
  user-select: none;
  position: fixed;
  z-index: 100;
  width: 350px;
  border-radius: 8px;
  top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.variant === "success"
      ? css`
          background: var(--palette-green-bg);
          color: var(--palette-green);
          box-shadow: 0 15px 30px var(--shadow-green);
          border: 1px solid var(--palette-green-border);
        `
      : props.variant === "error"
      ? css`
          background: var(--palette-red-bg);
          color: var(--palette-red);
          box-shadow: 0 15px 30px var(--shadow-red);
          border: 1px solid var(--palette-red-border);
        `
      : css`
          background: #e6f4ed;
          color: #31b57f;
          box-shadow: 0 15px 30px rgba(49, 181, 127, 0.1);
          border: 1px solid #cae6d8;
        `};

  .notification-icon {
    svg {
      margin-top: 1px;
      stroke: ${(props) =>
        props.variant === "success"
          ? "#31b57f"
          : props.variant === "error"
          ? "var(--palette-red)"
          : "#31b57f"};
    }
    width: 32px;
    height: 32px;
    margin-left: 8px;
    display: grid;
    place-content: center;
    margin-right: 5px;
  }
  span {
    padding: 16px 0;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    flex: 1;
  }

  .close-btn {
    cursor: pointer;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 4px;
    display: grid;
    place-content: center;
    svg {
      stroke-width: 2px;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }
  }
`;

export const Styled = { Snackbar };
