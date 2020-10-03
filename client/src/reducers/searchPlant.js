import {
  SEARCH_PLANT,
  SEARCH_PLANT_ERROR,
  SEARCH_PLANT_BY_ID,
} from "../actions/types";

const initialState = {
  data: null,
  plant: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_PLANT:
      console.log(payload);
      return {
        ...state,
        data: payload,
      };
    case SEARCH_PLANT_BY_ID:
      console.log(payload);
      return {
        ...state,
        plant: payload,
      };
    case SEARCH_PLANT_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
