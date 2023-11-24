"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ReviewForm, ReviewList } from "@/components";

export default function CarDetailsPage({ params }) {
  const id = params.id;
  const [car, setCar] = useState([]);
  const [reviews, setReviews] = useState([]);

  //function to fetch reviews and car details
  useEffect(() => {
    fetch(`https://explora-cars.onrender.com/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
      })
      .catch((error) => console.error("Error fetching car data:", error));
  }, [id]);
  //function to fetch reviews
  useEffect(() => {
    fetch("https://explora-cars.onrender.com/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error("Error fetching car data:", error));
  }, [reviews]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col sm:flex-row mx-auto dark:bg-gray-900 shadow-lg drop-shadow-lg h-fit rounded-lg">
        <div className="w-fit sm:w-1/2 flex-row shadow-lg">
          <Image
            src={car?.image_url}
            alt={car?.make}
            class="w-full h-auto"
            width={400}
            height={300}
          />
          <div className="flex items-center justify-center">
            <button className="btn-primary text-white self-center">
              <Link href={`/booking/${id}`}>Book Now</Link>
            </button>
          </div>
        </div>
        <div className="w-fit sm:w-1/2 p-2 ">
          <h1 className=" m-2 text-2xl font-bold">{car?.make}</h1>
          <div className="space-y-2 divide-y-2 divide-blue-200">
            <p className="m-2">Category: {car?.category}</p>
            <p className="m-2">Fuel Consumption: {car?.fuel_consumption} mpg</p>
            <p className="m-2">Number of Seats: {car?.no_of_seats}</p>
            <p className="m-2">Fuel Type: {car?.fuel_type}</p>
            <p className="m-2">Year: {car?.year}</p>
            <p className="m-2">Price per Day: Ksh{car?.price_per_day}</p>
            <p className="m-2">Transmission: {car?.transmission}</p>
            <p className="m-2">Body Type: {car?.body_type}</p>
          </div>
        </div>
        <ReviewForm carId={id} setReviews={setReviews} />
      </div>
      <ReviewList carId={id} reviews={reviews} />
    </div>
  );
}
