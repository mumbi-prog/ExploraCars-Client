
import axiosInstance from '../axiosConfig';
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
    fetch("https://explora-api.up.railway.app/logout", {
        method: "DELETE"
    }).then(response => console.log(response));
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("user");
    }
  }
// function to register users
export function registerUser(formData, navigate) {
    axiosInstance.post("https://explora-api.up.railway.app/signup", formData)
      .then((response) => {
        console.log(response.data); 
          Swal.fire({
            icon: 'success',
            text: 'Registration Successful'
          });
          navigate.replace('/login');
  
      })
      .catch((error) => {
        console.error('Error during user registration:', error);
        handleRegistrationError(error?.response?.data.errors);
      });
  }
  //function to handle registration errors
  function handleRegistrationError(errors) {
   let errorMessage = errors? "": "something went wrong during registration"
    if (Array.isArray(errors)) {
      // If errors is an array, extract and join them with a line break
      errorMessage = errors.map(error => error).join('\n');
    } else if (typeof errors === 'object') {
      // If errors is an object, iterate through its properties
      for (const key in errors) {
        if (Array.isArray(errors[key])) {
          // If the property value is an array, join its contents with a line break
          errorMessage += `\n${key}: ${errors[key].join('\n')}`;
        }
      }
    }
  
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: errorMessage
    });
  }

  export async function getCar(id) {
    try {
      const response =  axiosInstance.get(`https://explora-api.up.railway.app/cars/${id}`)
      const data =  response.data
      console.log(data)
      return data
    } catch (error) {
     console.error(error) 
    }
}

export async function getCarData(){
  try {
    const response = await fetch("https://explora-api.up.railway.app/cars", {
      next: {
        revalidate: 3600
      },})
  const data = await response.json()
  return data
  } catch (error) {
    console.error(error)
  }
  
}
//function to get reviews
export function getReviews(){
  try {
    const response =  axiosInstance.get("https://explora-api.up.railway.app/reviews")
    const data = response.data
    return data
  } catch (error) {
    console.error("Error fetching reviews data:", error)
  }
}


//function to update booking
export function handleDateChange(e) {
  e.preventDefault();
  const id = updateBooking(); // Assuming updateBooking() returns the booking ID
  const startDate = new Date(dates.newStartDate).toISOString().split("T")[0];
  const endDate = new Date(dates.newEndDate).toISOString().split("T")[0];
  const formattedDates = {
    start_date: startDate,
    end_date: endDate,
  };

  if (typeof window !== "undefined" && id ) {
    fetch(`https://explora-api.up.railway.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formattedDates),
    })
      .then((res) => {
        if (res.status === 422) {
          // Handle validation errors
          Swal.fire({
            icon: "error",
            text: "An error occurred while processing your request",
            showCloseButton: true,
            showConfirmButton: false,
            timer: 3000,
          });
          return res.json().then((data) => setErrors(() => data.errors));
        } else if (res.status === 200) {
          // Handle success response
          return res.json().then((data) => {
            setBookings((prev) => [...prev, data]);
            setDates(() => ({
              newStartDate: "",
              newEndDate: "",
            }));
            setIsEditing(false);
          });
        } else {
          // Handle other response statuses
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error("Network error:", error);
      });
  }
}
