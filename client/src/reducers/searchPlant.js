import {
  SEARCH_PLANT,
  SEARCH_PLANT_ERROR,
  SEARCH_PLANT_BY_ID,
  GET_NEXT_PAGE,
} from "../actions/types";

const initialState = {
  data: null,
  plant: null,
  nextPage: null,
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
        nextPage: payload.links.next,
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
    case GET_NEXT_PAGE:
      console.log(payload);
      return {
        ...state,
        data: payload,
        nextPage: payload.links.next,
      };
    default:
      return state;
  }
}
