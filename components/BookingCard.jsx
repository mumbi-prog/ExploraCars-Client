import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
function BookingCard({ booking, onUpdate, onDelete }) {
  return (
    <div className="rounded-xl p-4 mt-4 border shadow mx-auto max-w-md">
      <div className="bg-blue-600 px-2 rounded-sm ">
        <p className="text-base">Start Date: {booking.start_date}</p>
        <p className="text-base">End Date: {booking.end_date}</p>
        <p className="text-center my-2">Car Information</p> 
      </div>

      {/* Display car information */}
      <Card className="booking-card">
        <p className="text-base m-2 text-start italic ">{booking.car.make}</p>
        <CardBody >
          <Image
            src={booking.car.image_url}
            width={300}
            height={300}
            alt="Card background"
            className="z-0 w-full h-full object-cover"
          />
          <div className="flex-row !items-start">    <p className="">⛽Fuel Type: {booking.car.fuel_type}</p>
          <p className="">🚘Category: {booking.car.category}</p>
          <p className="">
            ⛽Fuel Consumption: {booking.car.fuel_consumption}
          </p>
          <p className="">
            💺Number of Seats: {booking.car.no_of_seats}
          </p>
          <p className="">💲Cost: Ksh{booking.total_price}</p></div>

        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <button
            className="p-2 mt-2 btn-primary"
            onClick={() => onUpdate(booking.id)}>
            Update
          </button>
          <button
            className="p-2 mt-2 ml-2 btn-primary"
            onClick={() => onDelete(booking.id)}>
            Delete
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BookingCard;
