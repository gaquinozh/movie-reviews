import React from "react";
import AddReview from "./AddReview";

export default function MovieReviews(props) {
  const reviews = props.reviews.map(review => (
    <li key={review.id}>
      <h4>{review.author}</h4>
      <p>{review.content}</p>
    </li>
  ));

  return (
    <div className="reviews">
      <ul className="reviews__list no-bullet">{reviews}</ul>
      <AddReview movieId={props.movieId} />
    </div>
  );
}
