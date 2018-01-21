export default {
  movies: state =>
    state.movies.displayList.map(id => state.movies.overviews[id])
};
