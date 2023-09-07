"use client";

import React, { useEffect, useState } from 'react';

const ReviewList = ({ carId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [carId]);

  return (
    <div>
      <h2 className='font-bold text-3xl text-center my-2'>Reviews</h2>
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
