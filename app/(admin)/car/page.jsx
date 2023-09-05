"use client"
import React, { useEffect, useState } from 'react';

function Page() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/cars')
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);

  return (
  
  );
}

export default Page;
