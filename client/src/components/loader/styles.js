import styled from "styled-components";
import { motion } from "framer-motion";

const Loader = styled(motion.div)`
  user-select: none;
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 200px;
  top: 0;
  left: 0;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 20;
  backdrop-filter: blur(1px);
  animation: flash 0.8s alternate-reverse infinite;
  font-weight: 500;

  @keyframes flash {
    0% {
      background: rgba(255, 255, 255, 0.6);
    }
    100% {
      background: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const Styled = { Loader };
