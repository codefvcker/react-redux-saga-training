import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./constants";

const initState = {
  loading: false,
  alert: null
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    default:
      return state;
  }
};
