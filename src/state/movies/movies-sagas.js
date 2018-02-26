import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "axios";
import { BACKEND_URL } from "../../config/constants";
import * as actions from "./movies-actions";

export function* loadMovies(get) {
  try {
    const movies = yield call(get, `${BACKEND_URL}/movies`);
    yield put(actions.movieDataReceived(movies.data));
  } catch (error) {
    yield put(actions.movieLoadError, error);
  }
}

export function* loadMovieDetails(get, action) {
  const { id } = action.payload;
  try {
    const movie = yield call(get, `${BACKEND_URL}/movies/${id}`);
    yield put(actions.movieDetailDataReceived(id, movie.data));
  } catch (error) {
    yield put(actions.movieLoadError, error, { id });
  }
}

export default function* moviesSaga() {
  yield takeLatest(actions.MOVIES_REQUESTED, loadMovies, get);
  yield takeLatest(actions.MOVIE_DETAILS_REQUESTED, loadMovieDetails, get);
}
