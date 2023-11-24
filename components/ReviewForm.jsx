"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { getCurrentUser } from "@/lib";
import { useRouter } from "next/navigation";

const ReviewForm = ({ carId, onReviewSubmit, setReviews }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);
  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = getCurrentUser();

    const newReview = {
      title,
      body,
      rating: parseInt(rating),
      car_id: carId,
    };
    if (!user) {
      Swal.fire("⚠️ Kindly login first");
      push("/login");
    } else {
      fetch("https://explora-cars.onrender.com/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire("✔️ Review submitted successfully");
          setReviews((prev) => [...prev, data]);
          onReviewSubmit(data);
        })
        .catch((error) => {
          console.error("Error submitting review:", error);
        });

      setTitle("");
      setBody("");
      setRating(0);
    }
  };

  return (
    <div className="w-fit sm:w-1/2 p-2">
      <h1 className="m-2 text-2xl font-bold">Write a Review</h1>
      <form onSubmit={handleSubmit} className="p-4 m-2 border shadow-lg">
        <di>
          <label className="mr-4">Title</label>
          <br></br>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="review-form-input"
          />
        </di>
        <div>
          <label htmlFor="body" className="mr-4">
            Body
          </label>
          <br></br>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="review-form-input"
          />
        </div>
        <div>
          <label htmlFor="rating" className="mr-4">
            Rating
          </label>
          <br></br>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="review-form-input"
          />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="btn-primary text-white self-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
