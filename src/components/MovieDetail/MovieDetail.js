import React from "react";
import { Link } from "react-router-dom";
import { POSTER_BASE_URL, POSTER_SIZES } from "../../config/constants";

export default function MovieDetail(props) {
  if (!props.movie) {
    return <div>Loading...</div>;
  }

  const info = props.movie.info;
  const posterPath = `${POSTER_BASE_URL}/${POSTER_SIZES["342"]}/${
    info.poster_path
  }`;

  const genres = info.genres.map(genre => (
    <span className="genre label" key={genre.id}>
      {genre.name}
    </span>
  ));

  return (
    <div>
      <Link to="/">&lt; Back to List</Link>
      <div>
        <h1>
          {info.title}
          <br />
          <small>{info.tagline}</small>
        </h1>
        <p>{info.overview}</p>
        <p>{genres}</p>
        <img src={posterPath} alt="" />
      </div>
    </div>
  );
}
