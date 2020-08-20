import React, { createContext, useReducer } from "react";
import {
  getEventsFromPastWeek,
  postEvent,
  deleteEvent,
} from "../../services/eventsApi";
import { useSnackBars } from "../../hooks";
import AppReducer from "./AppReducer";
import {
  EVENTS_LOADING,
  EVENTS_FETCHED,
  EVENT_ADDED,
  EVENT_DELETED,
  ERROR,
  INCREASE_COUNT,
} from "./types";

const initialState = {
  isLoading: false,
  error: null,
  events: null,
  showCount: 5,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { addAlert } = useSnackBars();

  // Actions
  const fetchEventsFromPastWeek = () => {
    dispatch({ type: EVENTS_LOADING });
    getEventsFromPastWeek().then((res) => {
      dispatch({
        type: res.error ? ERROR : EVENTS_FETCHED,
        payload: res.data,
      });
    });
  };

  const addEvent = (event) => {
    dispatch({ type: EVENTS_LOADING });

    postEvent(event).then((res) => {
      dispatch({ type: res.error ? ERROR : EVENT_ADDED, payload: res.data });
      if (res.error) {
        addAlert({
          variant: "error",
          text: "Failed adding beer",
        });
      } else {
        addAlert({
          variant: "success",
          text: res.data.amount > 1 ? "Beers added" : "Beer added",
          key: res.data._id,
        });
      }
    });
  };

  const removeEvent = (event) => {
    dispatch({ type: EVENTS_LOADING });

    deleteEvent(event._id).then((res) => {
      dispatch(
        res.error
          ? { type: ERROR, payload: res.data }
          : { type: EVENT_DELETED, payload: event._id }
      );
      if (res.error) {
        addAlert({
          variant: "error",
          text: "Failed removing beer",
        });
      } else {
        addAlert({
          variant: "success",
          text: "Beer removed",
        });
      }
    });
  };

  const increaseCount = () => {
    dispatch({ type: INCREASE_COUNT });
  };

  return (
    <GlobalContext.Provider
      value={{
        events: state.events,
        showCount: state.showCount,
        isLoading: state.isLoading,
        error: state.error,
        fetchEventsFromPastWeek,
        addEvent,
        removeEvent,
        increaseCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
