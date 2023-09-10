import React from 'react'

function BookingCard({ booking, onUpdate, onDelete }) {
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
    
      <button className='p-2 mt-2 btn-primary' onClick={() => onUpdate(booking.id)}>Update</button>
      <button className='p-2 mt-2 ml-2 btn-primary' onClick={() => onDelete(booking.id)}>Delete</button>
    </div>
      );
    };
    
    export default BookingCard;
