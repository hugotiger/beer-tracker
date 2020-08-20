import React from "react";
import moment from "moment";
import { Styled } from "./styles";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

export function List({ children, ...restProps }) {
  return (
    <Styled.List
      {...restProps}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence initial={false}>{children}</AnimatePresence>
    </Styled.List>
  );
}

export function ListItem({ children, ...restProps }) {
  return (
    <Styled.ListItem
      layout
      initial={{
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
      animate={{
        opacity: 1,
        paddingTop: 16,
        paddingBottom: 16,
      }}
      exit={{
        opacity: 0,
        x: -358,
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      //   whileTap={{ scale: 0.98 }}
      {...restProps}
    >
      {children}
    </Styled.ListItem>
  );
}

export function ListItemContent({
  children,
  timestamp,
  amount,
  comment,
  open,
  handleDelete,
  ...restProps
}) {
  return (
    <Styled.ListItemContent {...restProps}>
      <div className="header">
        <span className="amount">×{amount}</span>
        <span className="timestamp">{moment(timestamp).fromNow()}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, paddingTop: 0 }}
            animate={{ height: 156, opacity: 1, paddingTop: 16 }}
            exit={{ height: 0, opacity: 0, paddingTop: 0 }}
            transition={{ duration: 0.2 }}
            className="body"
          >
            <span className="field-container">
              <h5>Comment:</h5>
              <p>{comment || "-"}</p>
            </span>
            <span className="field-container">
              <h5>Time:</h5>
              <p>{moment(timestamp).format("ddd D MMM HH:mm") || "-"}</p>
            </span>
            <div className="button-group">
              <motion.button
                className="btn close"
                onClick={() => {}}
                whileTap={{ scale: 0.95 }}
              >
                Close
                <CloseIcon />
              </motion.button>
              <motion.button
                className="btn delete"
                onClick={handleDelete}
                whileTap={{ scale: 0.95 }}
              >
                Delete
                <TrashIcon />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Styled.ListItemContent>
  );
}

export function ListButton({ children, ...restProps }) {
  return (
    <Styled.ListButton {...restProps} layout>
      <motion.button whileTap={{ scale: 0.95 }}>{children}</motion.button>
    </Styled.ListButton>
  );
}
