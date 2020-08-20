import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Styled } from "./styles";

export function Dashboard({ totalToday, avgLast30days, ...restProps }) {
  return (
    <Styled.Dashboard {...restProps}>
      <div>
        <h3>Today</h3>
        {totalToday !== null && (
          <AnimatePresence>
            <motion.p
              className="counter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.2,
              }}
            >
              {totalToday}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
      <div>
        <h3>Avg last 30 days</h3>
        {avgLast30days !== null && (
          <AnimatePresence>
            <motion.p
              className="avg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.2,
              }}
            >
              {avgLast30days}
              <span>/day</span>
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </Styled.Dashboard>
  );
}
