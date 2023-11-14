import axios from 'axios';

export const SEARCH_PLACES_REQUEST = 'SEARCH_PLACES_REQUEST';
export const SEARCH_PLACES_SUCCESS = 'SEARCH_PLACES_SUCCESS';
export const SEARCH_PLACES_FAILURE = 'SEARCH_PLACES_FAILURE';

const API_KEY = 'AIzaSyAjrBaPKqUxRtqA8FjngYnP06ARTcx40r8';

export const searchPlacesRequest = () => ({
  type: SEARCH_PLACES_REQUEST,
});

export const searchPlacesSuccess = (places) => ({
  type: SEARCH_PLACES_SUCCESS,
  payload: places,
});

export const searchPlacesFailure = (error) => ({
  type: SEARCH_PLACES_FAILURE,
  payload: error,
});

export const searchPlaces = (query) => async (dispatch) => {
  dispatch(searchPlacesRequest());

  try {
    const response = await axios.get( `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${query}` );

    const places = response.data.predictions;

    dispatch(searchPlacesSuccess(places));
  } catch (error) {
    dispatch(searchPlacesFailure(error));
  }
};
