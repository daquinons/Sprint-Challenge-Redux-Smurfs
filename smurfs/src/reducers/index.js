import * as types from '../actions/actionTypes';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

let initialState = { smurfs: [], loading: false, error: null };

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurf = (state = initialState, action) => {
  switch (action) {
    case types.GET_ALL_SMURFS:
      return { ...state, smurfs: action.payload };
    case types.LOADING:
      return { ...state, loading: action.payload };
    case types.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default smurf;
