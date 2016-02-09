import { FETCH_MOVIES, FETCH_MOVIE, FETCH_CAST, FETCH_BACKGROUND } from '../actions/index';

const INTIAL_STATE = { all: [], movie: null, cast: null, background: null };

export default function(state = INTIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, all: action.payload.data };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload.data };
    case FETCH_CAST:
      return { ...state, cast: action.payload.data };
    case FETCH_BACKGROUND:
      return { ...state, background: action.payload.data };
    default:
      return { state }
  }
}
