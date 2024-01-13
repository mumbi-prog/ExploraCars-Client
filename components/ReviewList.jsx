export default function ReviewList({ carId, reviews }) {
  const filteredReview = reviews?.filter((review) => {
    if (review.car_id == carId) {
      return review;
    }
  });
  return (
    <div className="bg-white rounded-md my-2 py-2">
      <h2 className="font-bold text-2xl text-center">Reviews</h2>
      <ul className="p-2 m-2 divide-y divide-gray-100">
        {filteredReview &&
          filteredReview.map((review) => (
            <li key={review.id}>
              <p className="font-bold my-1">{review?.full_name}</p>
              <strong className="font-bold ">{review?.title}</strong>
              <p className="text-base">{review?.body}</p>
              <p>Rating: {review?.rating}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
