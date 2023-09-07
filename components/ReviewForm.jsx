// "use client";

// import React, { useState } from 'react';

// const ReviewForm = ({ carId, onReviewSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [rating, setRating] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Create a review object
//     const newReview = {
//       title,
//       body,
//       rating: parseInt(rating),
//       car_id: carId, // Associate the review with a car
//     };
//     // Call the onReviewSubmit callback to send the review to the backend
//     onReviewSubmit(newReview);
//     // Clear the form fields
//     setTitle('');
//     setBody('');
//     setRating(0);
//   };

//   return (
//     <div>
//       <h2>Write a Review</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div>
//           <label>Body:</label>
//           <textarea value={body} onChange={(e) => setBody(e.target.value)} />
//         </div>
//         <div>
//           <label>Rating:</label>
//           <input
//             type="number"
//             min="1"
//             max="5"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };

// export default ReviewForm;
"use client";

import React, { useState } from "react";

const ReviewForm = ({ carId, onReviewSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a review object
    const newReview = {
      title,
      body,
      rating: parseInt(rating),
      car_id: carId, // Associate the review with a car
    };
    // Call the onReviewSubmit callback to send the review to the backend
    onReviewSubmit(newReview);
    // Clear the form fields
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
    <div>
      <h2>Write a Review</h2>
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
        <button type="submit" style={{ padding: "8px 16px" }}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;