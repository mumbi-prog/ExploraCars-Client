'use client'
import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFuelPumpFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';


const CarList = ({ cars, itemsPerPage}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedCars = Array.isArray(cars) ? cars?.slice(startIndex, endIndex) : [];

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(cars?.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="car-list">
      <div className="card-grid-container">
        {cars && cars.length>0? paginatedCars?.map((car) => (
          <div key={car?.id} className="car-card mx-1">
            <div className='make-and-bd-type'>
              <h2>{car?.make}</h2>
            </div>
            <Link href={`/cars/${car.id}`}> <Image src={car.image_url} alt={car?.make} width={230} height={150}/></Link>
            <div className="divide-y divide-dashed divide-blue-600 "> 
              <div className="car-details ">
              <div className="icon-and-detail">
                <GiSteeringWheel className="icon" />
                <p>{car?.transmission}</p>
              </div>
              <div className="icon-and-detail ">
                <MdAirlineSeatReclineNormal className="icon" />
                <p>{car?.no_of_seats} seats</p>
              </div>
              <div className="icon-and-detail">
                <BsFuelPumpFill className="icon" />
                <p>{car?.fuel_consumption}L/km</p>
              </div>
            </div>
            <div className='flex justify-between my-2 items-center px-2'>
            <p className='price-holder'>
              <span className='superscript'>Ksh.</span>
              <span className='price'>{car?.price_per_day}</span>
              <span className='subscript'> Per Day</span>
            </p>
            <button className="bg-blue-600 mt-2.5 p-1 rounded-sm cursor-pointer text-white"><Link href={`/booking/${car?.id}`}>Book Now!</Link></button>
           
            </div></div>
           
          </div>
        )):<div className="flex items-center gap-2 py-2 px-4 justify-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p>Loading....</p>
      </div>}
      </div>

      <div className="flex items-center justify-center m-2 p-1 gap-1">
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="page-button hover:bg-blue-600">
            Previous
        </button>
        {cars? Array.from(
          { length: Math.ceil(cars?.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`current-page-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
            {index + 1}
            </button>
          )
        ):"null"}
        {cars && <button onClick={goToNextPage} disabled={currentPage === Math.ceil(cars?.length / itemsPerPage)} className="page-button hover:bg-blue-600">
            Next
        </button>}
      </div>

    </div>
  );
};

export default CarList;