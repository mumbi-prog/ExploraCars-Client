"use client"
import React, { useEffect, useState } from 'react';
import { CarList } from '@/components';
import Search from '@/components/Search';

function Page() {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
      <Search onSearchChange={setSearchQuery} />
      <CarList cars={cars} searchQuery={searchQuery} />
    </>
  );
}

export default Page;
