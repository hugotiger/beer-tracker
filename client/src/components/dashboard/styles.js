import styled from "styled-components";
import { motion } from "framer-motion";

const Dashboard = styled(motion.div)`
  width: 350px;
  height: 100px;
  background: var(--primary-bg);
  border-radius: 8px;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  color: #317fff;

  h3 {
    color: black;
  }

  div {
    flex: 1;
    text-align: center;

    &:first-of-type {
      border-right: 1px solid rgba(0, 0, 0, 0.08);
    }
  }

  .counter {
    font-size: 3.2rem;
    letter-spacing: 1px;
    margin: 0;
  }

  .avg {
    font-size: 3.2rem;
    /* Tabular nums doesn't work for Manrope-font as of right now,
       but i'll keep this here if it does */
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
    margin: 0;
    position: relative;

    span {
      position: absolute;
      bottom: 15%;
      font-size: 1.4rem;
      margin-left: 5px;
    }
  }
`;

export const Styled = { Dashboard };
