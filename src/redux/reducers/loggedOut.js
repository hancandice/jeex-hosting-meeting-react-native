import createReducer from "../helpers/createReducer";
import * as types from "../constants";

export const loggedInStatus = createReducer(
  {},
  {
    [types.SET_LOGGED_IN_STATE](state, action) {
      return action;
    },
  }
);

// reducer is a pure function that takes the previous state and an action as arguments and returns a new state

/* export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
} */
