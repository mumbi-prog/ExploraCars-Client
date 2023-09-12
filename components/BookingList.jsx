"use client";
import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { getCurrentUser } from "@/lib";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axiosInstance from "@/axiosConfig";

export default function BookingList() {
  const { push } = useRouter();
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState(null);
  const [dates, setDates] = useState({
    newStartDate: "",
    newEndDate: "",
  });
  const user = getCurrentUser();
  //function to update the booking
  function updateBooking(id, e) {
    setIsEditing(true);
    if (e) {
      e.preventDefault();
      const startDate = new Date(dates.newStartDate)
        .toISOString()
        .split("T")[0];
      const endDate = new Date(dates.newEndDate).toISOString().split("T")[0];
      const formattedDates = {
        start_date: startDate,
        end_date: endDate,
      };
      try {
        axiosInstance.patch(
          `https://explora-api.up.railway.app/bookings/${id}`,
          formattedDates
        );
        const data = response.data;
        setBookings((prev) => [...prev, data]);
        setDates(() => ({
          newStartDate: "",
          newEndDate: "",
        }));
        setIsEditing(false);
        Swal.fire({
          icon: "success",
          text: "Your booking has been updated successfully",
          showCloseButton: true,
          confirmButtonColor: "#0096FF",
          timer: 3000,
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          text: error.response.data.errors,
          showCloseButton: true,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }
  }

  //function to handle date selection change
  function onDateChange(e) {
    setDates(() => ({
      ...dates,
      [e.target.id]: e.target.value,
    }));
  }
  //function to delete booking
  function deleteBooking(id) {
    if (id) {
      fetch(`https://explora-api.up.railway.app/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          Swal.fire({
            icon: "success",
            text: "Your booking had been cancelled. Kindly note cancellations are not allowed after 24 hrs of booking confirmation",
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonColor: "#2563EB",
            timer: 3000,
          });
          setBookings((prev) => prev.filter((booking) => booking.id !== id));
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          // Handle errors here
        });
    } else {
      console.error("Cannot delete booking with null id");
    }
  }
  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      push("/login");
    } else {
      fetch(`https://explora-api.up.railway.app/customer_bookings/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setBookings(() => data);
        })
        .catch((error) => {
          console.error("Error fetching dates:", error);
        });
    }
  }, [push]);
  return (
    <div className="mx-2 overflow-x-hidden">
      <h1 className="text-3xl font-bold m-2">
        Welcome {user ? user.full_name : ""}
      </h1>
      <h2 className="text-2xl text-center font-bold xsm:text-start xsm:m-2">
        Manage Bookings
      </h2>
      <div className={errors ? "bg-red-400 mt-3 p-2 rounded-sm" : "hidden"}>
        {errors ? errors : ""}
      </div>
      <div className="booking-card-grid mx-2">
        {" "}
        {bookings.length > 0 ? (
          bookings?.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onUpdate={updateBooking}
              onDelete={deleteBooking}
            />
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>

      {isEditing && (
        <form
          className="mx-auto rounded-xl p-4 mt-4 border shadow-lg max-w-md"
          id="update-dates"
          onSubmit={updateBooking}>
          {/* Input fields for updating dates */}
          <label htmlFor="newStartDate" className="m-2 font-bold">
            New Start Date
          </label>
          <br></br>
          <input
            type="date"
            id="newStartDate"
            name="newStartDate"
            className="booking-form"
            value={dates.newStartDate}
            onChange={onDateChange}
          />
          <br />
          <label htmlFor="newEndDate" className="m-2 font-bold">
            New End Date
          </label>
          <br></br>
          <input
            type="date"
            id="newEndDate"
            name="newEndDate"
            className="booking-form"
            value={dates.newEndDate}
            onChange={onDateChange}
          />

          <br />
          <button type="submit" className="btn-primary">
            Save
          </button>
        </form>
      )}
    </div>
  );
}
