import styled from "styled-components";
import { motion } from "framer-motion";

const List = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
  border-radius: 8px;
  border: 1px solid #e8edf4;
  position: relative;
  overflow: hidden;
  margin: 16px 0;
`;

const ListItem = styled(motion.li)`
  overflow: hidden;
  border-bottom: 1px solid #e8edf4;
  margin-top: -1px;
  position: relative;
  z-index: 5;
  padding: 16px;
  cursor: pointer;
  &:hover {
    background: #fcfcfc;
  }
  &:active {
    background: #fafafa;
  }

  &:last-child {
    border: none;
  }
`;

const ListItemContent = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    user-select: none;
  }
  .amount {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 4px;
    color: var(--primary-color);
    background: var(--primary-bg);
    width: 22px;
    height: 22px;
    transform: scale(1.3);
  }
  .timestamp {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.6);
  }
  .body {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: default;
    .field-container  {
      h5 {
        margin: 0;
        font-size: 1.2rem;
        color: #757575;
        margin-bottom: 5px;
      }
      p {
        font-size: 1.4rem;
        line-height: 1.2;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      margin-bottom: 16px;
    }

    .button-group {
      display: flex;
      justify-content: flex-end;
    }

    .btn {
      margin-left: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      background: none;
      font-size: 1.2rem;
      line-height: 1;
      padding: 7px 9px;
      border: none;
      border-radius: 4px;
      will-change: color, background;
      transition: color ease 0.2s, background ease 0.2s;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &.close {
        color: #222;

        svg {
          stroke: black;
          margin-left: 3px;
        }

        &:hover {
          background: rgba(0, 0, 0, 0.03);
        }
      }

      &.delete {
        color: var(--palette-red);
        border: 1px solid var(--palette-red);

        svg {
          margin-top: -1px;
          stroke: var(--palette-red);
          margin-left: 3px;
          will-change: stroke;
          transition: stroke 0.2s;
        }
        &:hover {
          background: var(--palette-red);
          color: white;
          svg {
            stroke: white;
          }
        }
      }
    }
  }
`;

const ListButton = styled(motion.li)`
  &:hover {
    background: #fcfcfc;
  }
  &:active {
    background: #fafafa;
  }
  user-select: none;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 14px;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1;
    font-size: 1.4rem;
    z-index: 5;

    &:focus,
    &:active {
      outline: none;
    }

    img {
      margin-left: 5px;
      margin-top: 1px;
    }
  }
`;

export const Styled = {
  List,
  ListItem,
  ListItemContent,
  ListButton,
};
