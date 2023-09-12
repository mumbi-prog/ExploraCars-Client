"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CarList, Search, Qualifications } from "@/components";
// import { getLocationCars } from "@/lib";

export default function Location({ params }) {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { replace } = useRouter();
  const validCities = ["nairobi", "eldoret", "mombasa"];
  useEffect(() => {
    if (!validCities.includes(params.name)) {
      replace("/not-found");
    }
  }, [replace, validCities, params.name]);
  useEffect(() => {
    fetch(`https://explora-api.up.railway.app/locations/${params.name}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [params.name, replace]);

  const filteredCars = cars?.filter(
    (car) =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.trim() === ""
  );

  return (
    <>
      <h1 className="font-bold text-3xl xsm:text-2xl text-center my-2">
        Explora {validCities.includes(params.name) ? params.name : ""} car
        rental
      </h1>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <CarList cars={filteredCars} itemsPerPage={12} Search={Search} />
      <Qualifications />
    </>
  );
}
