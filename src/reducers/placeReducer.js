import {
    SEARCH_PLACES_REQUEST,
    SEARCH_PLACES_SUCCESS,
    SEARCH_PLACES_FAILURE,
  } from '../actions/placeActions';
  
  const initialState = {
    loading: false,
    places: [],
    error: null,
  };
  
  const placeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_PLACES_REQUEST:
        return { ...state, loading: true };
      case SEARCH_PLACES_SUCCESS:
        return { ...state, loading: false, places: action.payload, error: null };
      case SEARCH_PLACES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default placeReducer;
  