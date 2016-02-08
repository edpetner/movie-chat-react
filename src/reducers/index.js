import { combineReducers } from 'redux';

import MovieReducer from './reducer_movies';
import CommentsReducer from './reducer_comments';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  movies: MovieReducer,
  form: formReducer
});

export default rootReducer;
