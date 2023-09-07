"use client";

import React, { useEffect, useState } from 'react';

const ReviewList = ({ carId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/cars/${carId}/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [carId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.title}</strong> - Rating: {review.rating}
            <p>{review.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
