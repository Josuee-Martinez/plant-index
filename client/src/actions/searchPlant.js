import axios from "axios";

import {
   SEARCH_SPECIES,
   SEARCH_SPECIES_BY_ID,
   GET_NEXT_PAGE,
   SEARCH_SPECIES_ERROR,
} from "./types";

export const searchSpecies = (species) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/search/${species}`
      );

      dispatch({ type: SEARCH_SPECIES, payload: res.data });
   } catch (err) {
      dispatch({
         type: SEARCH_SPECIES_ERROR,
         // payload: { msg: err.response.statusText, status: err.response.status },
      });
   }
};

export const searchSpeciesById = (id) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/search/speciesid/${id}`
      );

      dispatch({ type: SEARCH_SPECIES_BY_ID, payload: res.data });
   } catch (err) {
      dispatch({
         type: SEARCH_SPECIES_ERROR,
         // payload: { msg: err.response.statusText, status: err.response.status },
      });
   }
};

export const getNextPage = (url) => async (dispatch) => {
   try {
      const res = await axios.get(
         `http://localhost:5000/api/search/species/` + encodeURIComponent(url)
      );

      dispatch({ type: GET_NEXT_PAGE, payload: res.data });
   } catch (err) {
      dispatch({
         type: SEARCH_SPECIES_ERROR,
         // payload: { msg: err.response.statusText, status: err.response.status },
      });
   }
};
