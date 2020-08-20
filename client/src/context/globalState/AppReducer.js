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

export default function (state = initialState, action) {
  switch (action.type) {
    case EVENTS_LOADING:
      return { ...state, isLoading: true, error: null };
    case EVENTS_FETCHED:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        events: null,
        isLoading: false,
        error: action.payload,
      };
    case EVENT_ADDED:
      return {
        ...state,
        events: [action.payload, ...state.events],
        isLoading: false,
        error: false,
        showCount: state.showCount + 1,
      };
    case EVENT_DELETED:
      return {
        ...state,
        events: state.events.filter((event) => event._id !== action.payload),
        isLoading: false,
        error: false,
        showCount: state.showCount > 5 ? state.showCount - 1 : 5,
      };
    case INCREASE_COUNT:
      return {
        ...state,
        showCount:
          state.showCount + 5 <= state.events.length
            ? (state.showCount += 5)
            : state.events.length,
      };
    default:
      throw new Error();
  }
}
