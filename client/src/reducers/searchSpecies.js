import {
   SEARCH_SPECIES,
   SEARCH_SPECIES_ERROR,
   SEARCH_SPECIES_BY_ID,
   GET_NEXT_PAGE,
} from "../actions/types";

const initialState = {
   data: null,
   species: null,
   nextPage: null,
   previousPage: null,
   bark: null,
   flower: null,
   fruit: null,
   habit: null,
   leaf: null,
   other: null,
   error: {},
};

export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case SEARCH_SPECIES:
         console.log(payload);
         return {
            ...state,
            data: payload,
            nextPage: payload.links.next,
         };
      case SEARCH_SPECIES_BY_ID:
         console.log(payload);
         return {
            ...state,
            species: payload.data,
            bark: payload.data.images.bark,
            flower: payload.data.images.flower,
            fruit: payload.data.images.fruit,
            habit: payload.data.images.habit,
            leaf: payload.data.images.leaf,
            other: payload.data.images.other,
         };
      case SEARCH_SPECIES_ERROR:
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
            previousPage: payload.links.prev,
         };
      default:
         return state;
   }
}
