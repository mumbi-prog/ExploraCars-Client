"use client";
import React, { useState, useEffect } from "react";
import { CarList, Search } from "@/components";
import { getCarData } from "@/lib";
function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cars, setCars] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const carData = await getCarData();
        setCars(carData);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }

    fetchData();
  }, []);
  const filteredCars = cars?.filter(
    (car) =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.trim() === ""
  );

  return (
    <>
      <h1 className="font-bold text-3xl xsm:text-2xl text-center my-2">
        Showing All Vehicles
      </h1>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <CarList cars={filteredCars} itemsPerPage={12} Search={Search} />
    </>
  );
}

export default Page;
