import * as types from "./Action.Type";

const data = {
  data: [],
  isLooding: false,
  isError: false,
  color: ["black", "white", "twitter.500"],
  view: "GRID",
};

export const AppReducer = (state = data, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case types.GET_SUCCESS:
      return {
        ...state,
        isLooding: false,
        data: payload,
      };
    case types.GET_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    case "CHENGE_TO_LIGHT":
      return {
        ...state,
        color: ["black", "white", "twitter.500"],
      };
    case "CHENGE_TO_DARK":
      return {
        ...state,
        color: ["white", "black", "twitter.800"],
      };
    case "CHENGE_TO_GRID_VIEW":
      return {
        ...state,
        view: "GRID",
      };
    case "CHENGE_TO_LIST_VIEW":
      return {
        ...state,
        view: "LIST",
      };
    default:
      return state;
  }
};
