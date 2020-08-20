import React from "react";
import { motion } from "framer-motion";
import { Styled } from "./styles";

export function Counter({ total, ...restProps }) {
  return (
    <Styled.Counter {...restProps}>
      <h3>All time</h3>
      <motion.p
        use="p"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
      >
        {total}
      </motion.p>
    </Styled.Counter>
  );
}
