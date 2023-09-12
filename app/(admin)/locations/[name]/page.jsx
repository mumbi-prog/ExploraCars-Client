"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/axiosConfig";
import { CarList, Search, Qualifications } from "@/components";
import { getLocationCars } from "@/lib";

export default function Location({ params }) {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { replace } = useRouter();
  const validCities = ["nairobi", "eldoret", "mombasa"];

  useEffect(() => {
    async function fetchData() {
      try {
        const carData = await getLocationCars(params.name);
        setCars(carData);
      } catch (error) {
        console.error("Error fetching car data:", error);
        replace("/cars");
      }
    }

    fetchData();
  }, [params.name, replace]);
  useEffect(() => {
    if (!validCities.includes(params.name)) {
      replace("/not-found");
    }
  }, [replace, validCities, params.name]);

  const filteredCars = cars?.filter(
    (car) =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.trim() === ""
  );

  return (
    <>
      <h1 className="font-bold text-3xl xsm:text-2xl text-center my-2">
        Explora {params.name} car rental
      </h1>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <CarList cars={filteredCars} itemsPerPage={12} Search={Search} />
      <Qualifications />
    </>
  );
}
