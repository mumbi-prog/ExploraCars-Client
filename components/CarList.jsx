import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <h1>Car list</h1>
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <div className='make-and bd-type'> <h2>{car.make}</h2> | <p> {car.body_type}</p></div>
          <img src={car.image_url} alt={car.make} />
          <p className='make-year'>Year: {car.year}</p>
          <p className='price'>Price per Day: Ksh.{car.price_per_day}</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;
