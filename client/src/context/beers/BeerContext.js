import React, { createContext, useReducer } from "react";
import {
  getBeersFromPast30Days,
  postBeers,
  deleteBeers,
} from "../../services/beersApi";
import { useSnackBars } from "../../hooks";
import AppReducer from "./BeerReducer";
import {
  BEER_LOADING,
  BEER_FETCHED,
  BEER_ADDED,
  BEER_DELETED,
  ERROR,
  INCREASE_COUNT,
} from "./types";

const initialState = {
  isLoading: false,
  error: null,
  beers: null,
  showCount: 5,
};

export const BeerContext = createContext(initialState);

export const BeerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { addAlert } = useSnackBars();

  // Actions
  const fetchBeersFromPast30Days = () => {
    dispatch({ type: BEER_LOADING });
    getBeersFromPast30Days().then((res) => {
      dispatch({
        type: res.error ? ERROR : BEER_FETCHED,
        payload: res.data,
      });
    });
  };

  const addBeers = (beers) => {
    dispatch({ type: BEER_LOADING });

    postBeers(beers).then((res) => {
      dispatch({ type: res.error ? ERROR : BEER_ADDED, payload: res.data });
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

  const removeBeers = (beers) => {
    dispatch({ type: BEER_LOADING });

    deleteBeers(beers._id).then((res) => {
      dispatch(
        res.error
          ? { type: ERROR, payload: res.data }
          : { type: BEER_DELETED, payload: beers._id }
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
    <BeerContext.Provider
      value={{
        beers: state.beers,
        showCount: state.showCount,
        isLoading: state.isLoading,
        error: state.error,
        fetchBeersFromPast30Days,
        addBeers,
        removeBeers,
        increaseCount,
      }}
    >
      {children}
    </BeerContext.Provider>
  );
};
