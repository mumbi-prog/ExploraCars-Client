import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { BsFuelPumpFill } from 'react-icons/bs';

const CarList = ({ cars }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = cars.filter((car) =>
    car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    searchQuery.trim() === ''
  );

  return (
    <div className="car-list">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
        style={{ fontSize: '50px', marginBottom: '10px', paddingBottom: '5px' }}
      >
        <path
          fill="#3563e9"
          fill-opacity="0.7"
          d="M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,186.7C672,213,768,203,864,197.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
        <text
          x="50%"
          y="45%"
          fill="#fff"
          textAnchor="middle"
          dy="0.3em"
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Automotive Inventory
        </text>
      </svg>

      <input
        type="text"
        placeholder="Search by make"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="card-grid-container">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <div className='make-and-bd-type'>
              <h2>{car.make}</h2>
            </div>
            <p className='price-holder'>
              <span className='superscript'>Ksh.</span>
              <span className='price'>{car.price_per_day}</span>
              <span className='subscript'>/day</span>
            </p>
            <img src={car.image_url} alt={car.make} />

            <div className="car-details">
              <div className="icon-and-detail">
                <GiSteeringWheel className="icon" />
                <p>{car.transmission}</p>
              </div>
              <div className="icon-and-detail">
                <MdAirlineSeatReclineNormal className="icon" />
                <p>{car.no_of_seats} seats</p>
              </div>
              <div className="icon-and-detail">
                <BsFuelPumpFill className="icon" />
                <p>{car.fuel_consumption}L/km</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
