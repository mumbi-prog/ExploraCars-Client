import axiosInstance from "../axiosConfig";
import Swal from "sweetalert2";

export function getCurrentUser() {
  let userData;
  if (typeof window !== "undefined") {
    try {
      userData = sessionStorage.getItem("user");
      userData = userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Error parsing stored userData:", error);
      userData = null;
    }
  }
  return userData;
}

//function to logout the user and clear the cookies
export function clearCurrentUser() {
  fetch("https://explora-cars.onrender.com/logout", {
    method: "DELETE",
  }).then((response) => console.log(response));
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("user");
  }
}
// function to register users
export function registerUser(formData, navigate) {
  axiosInstance
    .post("https://explora-cars.onrender.com/signup", formData)
    .then((response) => {
      console.log(response.data);
      Swal.fire({
        icon: "success",
        text: "Registration Successful",
      });
      navigate.replace("/login");
    })
    .catch((error) => {
      console.error("Error during user registration:", error);
      handleRegistrationError(error?.response?.data.errors);
    });
}
//function to handle registration errors
function handleRegistrationError(errors) {
  let errorMessage = errors ? "" : "something went wrong during registration";
  if (Array.isArray(errors)) {
    // If errors is an array, extract and join them with a line break
    errorMessage = errors.map((error) => error).join("\n");
  } else if (typeof errors === "object") {
    // If errors is an object, iterate through its properties
    for (const key in errors) {
      if (Array.isArray(errors[key])) {
        // If the property value is an array, join its contents with a line break
        errorMessage += `\n${key}: ${errors[key].join("\n")}`;
      }
    }
  }

  Swal.fire({
    icon: "error",
    title: "Registration Failed",
    text: errorMessage,
  });
}

export async function getCar(id) {
  try {
    const response = axiosInstance.get(
      `https://explora-cars.onrender.com/cars/${id}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
// react-query
export async function getCarData() {
  try {
    const response = await fetch("https://explora-cars.onrender.com/cars", {
      next: {
        revalidate: 3600,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
//function to get reviews
export function getReviews() {
  try {
    const response = axiosInstance.get(
      "https://explora-cars.onrender.com/reviews"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching reviews data:", error);
  }
}

//function to delete booking
export function deleteBooking(id) {
  if (id) {
    fetch(`https://explora-cars.onrender.com/bookings/${id}`, {
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
//function to fetch cars the belong to a location
export function getLocationCars(name) {
  try {
    const response = axiosInstance.get(
      `https://explora-cars.onrender.com/locations/${name}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching reviews data:", error);
  }
}
