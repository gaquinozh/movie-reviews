import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { movieReducer } from "./movies";

const rootReducer = combineReducers({
  users: usersReducer,
  movies: movieReducer
});

export default rootReducer;
