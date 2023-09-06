"use client"
import React, { useEffect, useState } from 'react';
import { CarList } from '@/components';
import Search from '@/components/Search';
import Link from 'next/link';

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
      <CarList cars={cars} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Link href="/1">Car 1</Link>
      <Link href="/2">Car 2</Link>
      <Link href="/3">Car 3</Link>
      <Link href="/4">Car 4</Link>
    </>
  );
}

export default Page;