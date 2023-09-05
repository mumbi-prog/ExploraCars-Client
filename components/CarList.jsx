import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <h1>Our Automotive Inventory</h1>
      <div className="card-grid-container">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className='make-and-bd-type'>
              <h2>{car.make} |</h2>
              <p> {car.body_type}</p>
            </div>
            <img src={car.image_url} alt={car.make} />
            <p className='make-year'>Year: {car.year}</p>
            <p className='price'>Price per Day: Ksh.{car.price_per_day}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
