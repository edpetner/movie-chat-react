import { FETCH_MOVIES, FETCH_MOVIE, FETCH_CAST } from '../actions/index';

const INTIAL_STATE = { all: [], movie: null, cast: null };

export default function(state = INTIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, all: action.payload.data };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload.data };
    case FETCH_CAST:
      return { ...state, cast: action.payload.data };
    default:
      return { state }
  }
}
