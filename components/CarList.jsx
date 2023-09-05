import React from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { BsFuelPumpFill } from 'react-icons/bs';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
        style={{ fontSize: '50px', marginBottom: '10px', paddingBottom: '5px' }} // Adjust marginBottom and paddingBottom
      >
        <path
          fill="#0099ff"
          fillOpacity="0.7"
          d="M0,0L60,32C120,64,240,128,360,154.7C480,181,600,171,720,181.3C840,192,960,224,1080,197.3C1200,171,1320,85,1380,42.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
        <text
          x="50%"
          y="40%" // Adjust vertical position
          fill="#fff"
          textAnchor="middle"
          dy="0.3em"
          style={{ textDecoration: 'underline' }}
        >
          Our Automotive Inventory
        </text>
      </svg>
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
