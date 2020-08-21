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

export default function (state = initialState, action) {
  switch (action.type) {
    case BEER_LOADING:
      return { ...state, isLoading: true, error: null };
    case BEER_FETCHED:
      return {
        ...state,
        beers: action.payload,
        isLoading: false,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        beers: null,
        isLoading: false,
        error: action.payload,
      };
    case BEER_ADDED:
      return {
        ...state,
        beers: [action.payload, ...state.beers],
        isLoading: false,
        error: false,
        showCount: state.showCount + 1,
      };
    case BEER_DELETED:
      return {
        ...state,
        beers: state.beers.filter((beers) => beers._id !== action.payload),
        isLoading: false,
        error: false,
        showCount: state.showCount > 5 ? state.showCount - 1 : 5,
      };
    case INCREASE_COUNT:
      return {
        ...state,
        showCount:
          state.showCount + 5 <= state.beers.length
            ? (state.showCount += 5)
            : state.beers.length,
      };
    default:
      throw new Error();
  }
}
