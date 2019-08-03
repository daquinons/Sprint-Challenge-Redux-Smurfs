import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://localhost:3333/smurfs';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const setLoading = bool => {
  return { type: types.LOADING, payload: bool };
};

export const addSmurfs = smurfs => {
  return { type: types.GET_ALL_SMURFS, payload: smurfs };
};

export const setError = error => {
  return { type: types.SET_ERROR, payload: error };
}

export const getAllSmurfs = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const dataResponse = await axios.get(API_URL);
    dispatch(addSmurfs(dataResponse.data));  
  } catch (error) {
    dispatch(setError(error.message));
  }

  dispatch(setLoading(false));
}

export const postNewSmurf = (smurf) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const dataResponse = await axios.post(API_URL, smurf);
    dispatch(addSmurfs(dataResponse.data));  
  } catch (error) {
    dispatch(setError(error.message));
  }

  dispatch(setLoading(false));
}

export const deleteSmurf = (id) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const dataResponse = await axios.delete(API_URL + "/" + id);
    dispatch(addSmurfs(dataResponse.data)); 
  } catch (error) {
    dispatch(setError(error.message));
  }

  dispatch(setLoading(false));
}