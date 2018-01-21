import React, { Component } from "react";
import MovieContainer from "../MovieList/MovieContainer";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <MovieContainer />
      </div>
    );
  }
}

export default App;
