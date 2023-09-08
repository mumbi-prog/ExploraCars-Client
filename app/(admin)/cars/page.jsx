"use client"
import React, { useEffect, useState } from 'react';
import { CarList, Search } from '@/components';

function Page() {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.trim() === ''
  );

  useEffect(() => {
    fetch('http://127.0.0.1:3000/cars')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);

  return (
    <>
    <h1 className="font-bold text-3xl xsm:text-2xl text-center my-2">Showing All Vehicles</h1>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <CarList cars={filteredCars}  />
    </>
  );
}

export default Page;