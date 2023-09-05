import React from 'react'

function BookingCard({ booking, onUpdate, onDelete }) {
    return (
        <div className="booking-card">
            <p>Start Date: {booking.start_date}</p>
            <p>End Date: {booking.end_date}</p>

            {/* Display car information */}
            <h4>Car Information:</h4>
            <p>Car ID: {booking.car.id}</p>
            <p>Make: {booking.car.make}</p>
            <p>Fuel Type: {booking.car.fuel_type}</p>
            <p>Category: {booking.car.category}</p>

            <button className='p-2 mt-2 bg-red-800 rounded' onClick={() => onUpdate(booking.id)}>Update</button>
            <button className='p-2 mt-2 ml-2 bg-red-800 rounded' onClick={() => onDelete(booking.id)}>Delete</button>
        </div>
      );
    };
    
    export default BookingCard;
