import React, { createContext, useState, useEffect } from "react";
import { SnackBar } from "../../components/snackbar";
import { AnimatePresence } from "framer-motion";

export const SnackBarContext = createContext();

export const SnackBarProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (alerts && alerts.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts) => alerts.slice(0, alerts.length - 1)),
        5000
      );
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const addAlert = (alert) => setAlerts([alert]);

  return (
    <SnackBarContext.Provider value={{ addAlert }}>
      {children}
      <AnimatePresence>
        {alerts.map((alert) => (
          <SnackBar
            key={alert.key || Date.now()}
            handleClose={() => setAlerts([])}
            variant={alert.variant}
          >
            {alert.text}
          </SnackBar>
        ))}
      </AnimatePresence>
    </SnackBarContext.Provider>
  );
};
