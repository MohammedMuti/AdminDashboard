import { useReducer } from "react";
import ContextProvider from "./Context";

const defaultState = {
  dark: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK":
      return {
        ...state,
        dark: action.dark,
      };

    default:
      return state;
  }
};

const ContextReducer = (props) => {
  return (
    <ContextProvider.Provider value={useReducer(reducer, defaultState)}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextReducer;
