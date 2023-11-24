"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { CarList, Qualifications } from "@/components";

export default function Location({ params }) {
  const [cars, setCars] = useState([]);
  const { replace } = useRouter();
  const validCities = useMemo(() => ["nairobi", "eldoret", "mombasa"], []);
  useEffect(() => {
    if (!validCities.includes(params.name)) {
      replace("/not-found");
    }
  }, [replace, validCities, params.name]);
  useEffect(() => {
    fetch(`https://explora-cars.onrender.com/locations/${params.name}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [params.name, replace]);

  return (
    <>
      <h1 className="font-bold text-3xl xsm:text-2xl text-center my-2">
        Explora {validCities.includes(params.name) ? params.name : ""} car
        rental
      </h1>
      <CarList cars={cars} itemsPerPage={12} />
      <Qualifications />
    </>
  );
}
