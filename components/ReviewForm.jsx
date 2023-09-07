"use client";

import React, { useState } from "react";

const ReviewForm = ({ carId, onReviewSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      title,
      body,
      rating: parseInt(rating),
      car_id: carId, 
    };

    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log("Review submitted successfully:", data);
        
        onReviewSubmit(data);
      })
      .catch((error) => {
           console.error("Error submitting review:", error);
      });

    setTitle("");
    setBody("");
    setRating(0);
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
  };

  return (
    <div className='w-full m-auto py-16 px-4 relative group'>
      <h2 className='font-bold text-3xl text-center my-2'>Write a Review</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" className="btn-primary" style={{ color: "white" }}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
