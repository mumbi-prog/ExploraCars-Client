
export default function ReviewList({ carId, reviews }) {
  console.log(reviews);
  const filteredReview = reviews?.filter((review) => {
    if (review.car_id == carId) {
      return review;
    }
  });
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
}
