import React from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { BsFuelPumpFill } from 'react-icons/bs';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <h1>Our Automotive Inventory</h1>
      <div className="card-grid-container">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className='make-and-bd-type'>
              <h2>{car.make}</h2>
            </div>
            <p className='price'>Ksh.{car.price_per_day}/day</p>
            <img src={car.image_url} alt={car.make} />
            
            <div className="car-details">
            <div className="icon-and-detail">
              <GiSteeringWheel className="icon" />
              <p>{car.transmission}</p>
            </div>
            <div className="icon-and-detail">
              <MdAirlineSeatReclineNormal className="icon" />
              <p>{car.no_of_seats}</p>
            </div>
            <div className="icon-and-detail">
              <BsFuelPumpFill className="icon" />
              <p>{car.fuel_type}</p>
            </div>
          </div>


          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
