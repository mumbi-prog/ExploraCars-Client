"use client";
import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { getCurrentUser } from "@/lib";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axiosInstance from "@/axiosConfig";
import toast from "react-hot-toast";

export default function BookingList() {
  const { push } = useRouter();
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState(null);
  const [blogId, setBlogId] = useState(null);
  const [dates, setDates] = useState({
    newStartDate: "",
    newEndDate: "",
  });
  const user = getCurrentUser();
  //function to update the booking

  async function handleSubmit(e) {
    e.preventDefault();
    const startDate = new Date(dates.newStartDate).toISOString().split("T")[0];
    const endDate = new Date(dates.newEndDate).toISOString().split("T")[0];
    const formattedDates = {
      start_date: startDate,
      end_date: endDate,
    };
    handleBookingUpdate(formattedDates);
  }

  function handleBookingUpdate(formData) {
    try {
      axiosInstance.patch(
        `https://explora-cars.onrender.com/bookings/${blogId}`,
        formData
      );
      const data = response.data;
      const updatedBooking = bookings.map((booking) =>
        booking.id === blogId ? { ...booking, ...data } : booking
      );
      setBookings(updatedBooking);
      setDates(() => ({
        newStartDate: "",
        newEndDate: "",
      }));
      setIsEditing(false);
      toast.success("Your booking has been updated successfully");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data.errors);
    }
  }
  //function to handle date selection change
  function onDateChange(e) {
    setDates(() => ({
      ...dates,
      [e.target.id]: e.target.value,
    }));
  }

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      push("/login");
    } else {
      fetch(`https://explora-cars.onrender.com/customer_bookings/${user.id}`)
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
              setBlogId={setBlogId}
              setIsEditing={setIsEditing}
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
          onSubmit={handleSubmit}>
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
