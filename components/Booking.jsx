"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib";
import "react-calendar/dist/Calendar.css";

export default function Booking({ id }) {
  const [dates, setDates] = useState([]);
  const [errors, setErrors] = useState(null);
  const user = getCurrentUser();
  const navigate = useRouter();
  useEffect(() => {
    if (!user) {
      navigate.replace('/login');
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  }
  async function handleDatesSubmit(e) {
    e.preventDefault();

    // Convert startDate and endDate to ISO date strings
    const startDate = new Date(formData.startDate).toISOString().split("T")[0];
    const endDate = new Date(formData.endDate).toISOString().split("T")[0];

    // Prepare the data for the POST request
    const newDates = {
      car_id: id,
      customer_id: user.id,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const response = await fetch(
        "https://explora-api.up.railway.app/bookings",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newDates),
        }
      );

      if (response.status === 422) {
        const data = await response.json();
        setErrors(() => data.errors);
      } else {
        const data = await response.json();
      }
      setFormData(() => ({
        startDate: "",
        endDate: "",
      }));
      navigate.replace("/account");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    }
  }

  useEffect(() => {
    fetch(`https://explora-api.up.railway.app/car_bookings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error || data.errors) {
          setErrors(data.error);
        } else {
          setDates(() => data);
        }
      })
      .catch((error) => {
        // console.error('Error fetching dates:', error);
        setErrors(error);
      });
  }, [id]);
  return (
    <div className="mx-auto p-2 max-w-fit">
      <h1 className="font-bold mb-2 text-2xl m-2">Choose the Dates you wish to hire</h1>
      {/* <Calendar
        className="m-2 w-full h-fit rounded-sm text-black shadow-lg"
        onChange={setTgl}
        value={tgl}
        tileClassName={({ date }) => {
          const realDate = date.toISOString().split("T")[0];
          const isHighlighted =
            dates.length > 0 &&
            dates.some((range) => {
              const startDate = new Date(range.start_date)
                .toISOString()
                .split("T")[0];
              const endDate = new Date(range.end_date)
                .toISOString()
                .split("T")[0];
              return realDate >= startDate && realDate <= endDate;
            });
          return isHighlighted ? "highlight" : ""; // Apply 'highlight' class if the date is in a range
        }}
      /> */}
      <form
        className="mt-5 m-2 p-5 shadow-lg rounded-xl border flex flex-col"
        onSubmit={handleDatesSubmit}>
        <div
          className={errors ? "bg-danger-200 mt-3 m-2 p-2 rounded-sm" : "hidden"}>
          {errors ? errors : ""}
        </div>
        
        <div className="m-1 flex flex-col">
          <label htmlFor="start-date">
            Start date
          </label>
          <input
            className="booking-form"
            name="startDate"
            required
            type="date"
            onChange={handleChange}
            value={formData.startDate}></input>
        </div>
        <div className="m-2 flex flex-col">
          <label htmlFor="end_date">
            End date
          </label>
          <input
            className="booking-form"
            name="endDate"
            required
            type="date"
            onChange={handleChange}
            value={formData.endDate}></input>
        </div>
        <button type="submit" className="btn-primary self-start">
          Submit
        </button>
      </form>
    </div>
  );
}
