'use client'
// import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react"
import React from "react";
import { getCar } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import {ReviewForm, ReviewList} from "@/components"

export default function CarDetailsPage({ params}) {
  const id = params.id
  const [car, setCar]= useState([])
 useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching car data:', error));
  }, [id]);
  return (
    <div className="p-4 space-y-7">
      <div className="flex">
        <Image src={car?.image_url} alt={car?.make} width={500} height={200} />
        <div>
        <h1 className="text-2xl font-semibold">{car?.make}</h1>
        <div className='flex space-x-20'>
        <div className='space-y-3 p-6'>
          <p>Category: {car?.category}</p>
          <p>
            Fuel Consumption: {car?.fuel_consumption} mpg
          </p>
          <p>Number of Seats: {car?.no_of_seats}</p>
          <p>Fuel Type: {car?.fuel_type}</p>
        </div>
        <div className='space-y-3 p-6 object-left'>
          <p>Year: {car?.year}</p>
          <p>Price per Day: Ksh{car?.price_per_day}</p>
          <p>Transmission: {car?.transmission}</p>
          <p>Body Type: {car?.body_type}</p>
        </div>
        </div>
        <div className="space-x-40 ">
          <p></p>
          <p>Unlimited mileage</p>
          <p>Collision Damage Waiver</p>
          <p>Roadside Assistance</p>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4">
        <button className="bg-blue-600 mt-2.5 p-1 rounded-sm cursor-pointer text-white"><Link href={`/booking/${car?.id}`}>Book Now</Link></button>
      </div>
      </div>
      {/* {<ReviewForm carId={id} />  
      <ReviewList />} */}
    </div>
  );
}