import axios from "axios";

import {
  SEARCH_PLANT,
  SEARCH_PLANT_BY_ID,
  GET_NEXT_PAGE,
  SEARCH_PLANT_ERROR,
} from "./types";

export const searchPlant = (plant) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/search/${plant}`);

    dispatch({ type: SEARCH_PLANT, payload: res.data });
  } catch (err) {
    dispatch({
      type: SEARCH_PLANT_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const searchPlantById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/search/plant/${id}`);

    dispatch({ type: SEARCH_PLANT_BY_ID, payload: res.data });
  } catch (err) {
    dispatch({
      type: SEARCH_PLANT_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getNextPage = (url) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/search/plant/` + encodeURIComponent(url)
    );

    dispatch({ type: GET_NEXT_PAGE, payload: res.data });
  } catch (err) {
    dispatch({
      type: SEARCH_PLANT_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
