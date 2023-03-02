import * as types from "./Action.Type";

const data = {
  data: [],
  isLooding: false,
  isError: false,
  color: ["black","white",'twitter.500']
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
    default:
      return state;
  }
};