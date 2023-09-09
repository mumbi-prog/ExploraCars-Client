
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {ReviewForm, ReviewList} from "@/components"
import {getCar} from "@/lib"

export default async function CarDetailsPage({ params}) {
  const car = await getCar(params.id)
  console.log(params.id)
console.log(car)
  return (
    <div className="p-4 space-y-4">
      <Image src={car?.image_url} alt={car?.make} width={2901} height={1425} />
      <h1 className="text-2xl font-semibold">{car?.make}</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>Year: {car?.year}</p>
          <p>Price per Day: Ksh{car?.price_per_day}</p>
          <p>Transmission: {car?.transmission}</p>
          <p>Body Type: {car?.body_type}</p>
        </div>
        <div>
          <p>Category: {car?.category}</p>
          <p>
            Fuel Consumption: {car?.fuel_consumption} mpg
          </p>
          <p>Number of Seats: {car?.no_of_seats}</p>
          <p>Fuel Type: {car?.fuel_type}</p>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn-primary"><Link
          href="/booking"
          className="px-4 py-2 bg-blue-500rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Book Now
        </Link></button>
      </div>
      <ReviewForm carId={params.id} />  
      <ReviewList />
    </div>
  );
}
