import axios from 'axios';
import { API_KEY } from './keys';

const ROOT_URL = 'https://api.themoviedb.org/3';

const IMAGE_ROOT = 'https://image.tmdb.org/t/p/w396'


export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_CAST = 'FETCH_CAST';
export const FETCH_BACKGROUND = 'FETCH_BACKGROUND';

export function fetchMovies() {
  console.log("fetchmovies");
  const request = axios.get(`${ROOT_URL}/discover/movie${API_KEY}&sort_by=popularity.desc`);
  return {
    type: FETCH_MOVIES,
    payload: request
  };
}

export function fetchMovie(props) {
  const request = axios.get(`${ROOT_URL}/movie/${props}${API_KEY}`);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}

export function fetchCast(props) {
  const request = axios.get(`${ROOT_URL}/movie/${props}/credits${API_KEY}`);

  return {
    type: FETCH_CAST,
    payload: request
  }
}

export function fetchBackground(props) {
  const request = axios.get(`${ROOT_URL}/movie/${props}/images${API_KEY}`);

  return {
    type: FETCH_BACKGROUND,
    payload: request
  }
}
