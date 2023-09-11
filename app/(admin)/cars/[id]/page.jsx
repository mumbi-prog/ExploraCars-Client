'use client'
// import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react"
import React from "react";
import { getCar } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { BsFillFuelPumpFill } from "react-icons/bs"
import { BsFillPersonFill } from "react-icons/bs"
import { MdOutlineAttachMoney } from "react-icons/md"
import { TiTick } from "react-icons/ti"
// import {ReviewForm, ReviewList} from "@/components"

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
      <div className="flex flex-col justify-start items-start gap-8">
      <div className="flex justify-center items-center gap-8">
        <Image src={car?.image_url} alt={car?.make} width={500} height={200} />
        <div className="flex flex-col items-start justify-start gap-8">
          <div>
            <p>Category: {car?.category}</p>
            <p>Fuel Type: {car?.fuel_type}</p>
            <p>Year: {car?.year}</p>
            <p>Transmission: {car?.transmission}</p>
            <p>Body Type: {car?.body_type}</p>
         </div>

         <div className="flex flex-col items-start justify-start">
            <div className="flex justify-center items-center gap-2"><TiTick id="tick-icon"/>
               <p>Unlimited mileage</p></div>
            <div className="flex justify-center items-center gap-2"><TiTick id="tick-icon"/>
                <p>Collision Damage Waiver</p></div>
            <div className="flex justify-center items-center gap-2"><TiTick id="tick-icon"/>
                <p>Roadside Assistance</p></div>
         </div>

        </div>
      </div>

      <div className="flex flex-col items-start justify-start">
          <div className="flex justify-center items-center gap-2"><BsFillFuelPumpFill id="fuel-icon"/>
            <p> Fuel Consumption: {car?.fuel_consumption} mpg</p>
          </div>

          <div className="flex justify-center items-center gap-2 "><MdOutlineAttachMoney id="money-icon" />
            <p>Price per Day: Ksh{car?.price_per_day}</p>
          </div>

          <div className="flex justify-center items-center gap-2"> <BsFillPersonFill id="person-icon"/>
            <p>Number of Seats: {car?.no_of_seats}</p>
          </div>

      </div>
      </div>

    <div className="grid grid-cols-2 gap-4">
        <div className="mt-4">
          <button className="btn-primary"><Link
          href={`/booking/${car?.id}`}
          className="px-4 py-2 bg-blue-500rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Book Now
        </Link></button>
      </div>
      </div>
      {/* {<ReviewForm carId={id} />  
      <ReviewList />} */}
    </div>
   
  );
}