import React from "react";
import { Styled } from "./styles";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as SuccessIcon } from "../../assets/circle-check.svg";
import { ReactComponent as ErrorIcon } from "../../assets/circle-x.svg";

/**
 *
 * @param {'error' || 'success'} variant
 */
export function SnackBar({
  children,
  handleClose,
  variant = "success",
  ...restProps
}) {
  return (
    <Styled.Snackbar
      variant={variant}
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0, zIndex: 100 }}
      exit={{ opacity: 0, y: 24, scale: 0.9, zIndex: 99 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileTap={{ scale: 0.98 }}
      {...restProps}
    >
      <div className="notification-icon">
        {variant === "success" ? (
          <SuccessIcon />
        ) : variant === "error" ? (
          <ErrorIcon />
        ) : null}
      </div>
      <span>{children}</span>

      <div className="close-btn" onClick={handleClose}>
        <CloseIcon />
      </div>
    </Styled.Snackbar>
  );
}
