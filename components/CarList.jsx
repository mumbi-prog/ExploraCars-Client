'use client'
import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { BsFuelPumpFill } from 'react-icons/bs';
import Link from 'next/link';


const CarList = ({ cars }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 

  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.trim() === ''
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="car-list">
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 180" 
        style={{ fontSize: '50px', marginBottom: '10px', paddingBottom: '5px' }}
        >
        <path fill="#3563e9" 
          fillOpacity="0.7" 
          d="M0,0L60,10.7C120,21,240,43,360,42.7C480,43,600,21,720,16C840,11,960,21,1080,53.3C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <text x="50%" 
          y="50%" 
          fill="#333" 
          textAnchor="middle" 
          dy="0.3em" style={{ fontWeight: 'bold' }}
          >
          <tspan fill="#333" style={{ textDecoration: 'underline' }}>
            CAR FLEET
          </tspan>
        </text>
      </svg>


      <div className="search">
        <input
          type="text"
          placeholder="Search by make"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="card-grid-container">
        {paginatedCars.map((car) => (
          <div key={car.id} className="car-card">
            <div className='make-and-bd-type'>
              <h2>{car.make}</h2>
            </div>
            <p className='price-holder'>
              <span className='superscript'>Ksh.</span>
              <span className='price'>{car.price_per_day}</span>
              <span className='subscript'>/day</span>
            </p>
            <Link href={`/cars/${car.id}`}> <img src={car.image_url} alt={car.make} /></Link>
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

      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="page-button">
            Previous
        </button>
        {Array.from(
          { length: Math.ceil(filteredCars.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`current-page-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          )
        )}
        <button onClick={goToNextPage} disabled={currentPage === Math.ceil(filteredCars.length / itemsPerPage)} className="page-button">
            Next
        </button>
      </div>

    </div>
  );
};

export default CarList;