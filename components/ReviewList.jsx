"use client";

import React, { useEffect, useState } from "react";

const ReviewList = ({ carId }) => {
  const [reviews, setReviews] = useState([]);
  const filteredReview = Array.isArray(reviews) ? reviews?.find((review) => review.car_id === carId) : null;
  useEffect(() => {
    fetch("https://explora-api.up.railway.app/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [carId]);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center m-2 mx-auto">Reviews</h2>
      <ul className="p-2 m-2 divide-y divide-blue-400 divide-dotted">
        {filteredReview &&
          filteredReview.map((review) => (
            <li key={review.id}>
              <strong className="font-bold ">{review.title}</strong>
              <p className="text-base">{review.body}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ReviewList;
