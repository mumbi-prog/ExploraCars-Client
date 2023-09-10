import React from 'react'

function BookingCard({ booking, onUpdate, onDelete }) {
  const handleUpdate = () => {
    if (booking.id) {
      onUpdate(booking.id);
    }
  };

  const handleDelete = () => {
    if (booking.id) {
      onDelete(booking.id);
    }
  };

  return (
    <div className="booking-card mx-auto rounded-xl p-4 mt-4 border border-gray-300 max-w-md">
      <p className="font-semibold">Start Date: {booking.start_date}</p>
      <p className="font-semibold">End Date: {booking.end_date}</p>

      {/* Display car information */}
      <h4 className="mt-2 font-bold">Car Information:</h4>
      <p className="font-semibold">Car ID: {booking.car.id}</p>
      <p className="font-semibold">Make: {booking.car.make}</p>
      <p className="font-semibold">Fuel Type: {booking.car.fuel_type}</p>
      <p className="font-semibold">Category: {booking.car.category}</p>

      {booking.id && (
        <>
          <button className='p-2 mt-2 btn-primary' onClick={handleUpdate}>
            Update
          </button>
          <button className='p-2 mt-2 ml-2 btn-primary' onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default BookingCard;

