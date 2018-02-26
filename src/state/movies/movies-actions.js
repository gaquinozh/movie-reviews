export const MOVIES_REQUESTED = "MOVIES REQUESTED";
export const moviesRequested = () => ({ type: MOVIES_REQUESTED });

export const MOVIE_DETAILS_REQUESTED = "MOVIE DETAILS REQUESTED";
export const movieDetailsRequested = id => ({
  type: MOVIE_DETAILS_REQUESTED,
  id
});

export const MOVIE_DATA_RECEIVED = "MOVIE DATA RECEIVED";
export const movieDataReceived = movies => ({
  type: MOVIE_DATA_RECEIVED,
  payload: { movies: movies }
});

export const MOVIE_DETAIL_DATA_RECEIVED = "MOVIE DETAIL DATA RECEIVED";
export const movieDetailDataReceived = (id, movie) => ({
  type: MOVIE_DETAIL_DATA_RECEIVED,
  payload: { movie, id }
});

export const MOVIE_LOAD_ERROR = "MOVIE LOAD ERROR";
export const movieLoadError = (error, payload) => ({
  type: MOVIE_LOAD_ERROR,
  payload,
  error
});
