
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
    const response = await fetch("https://explora-api.up.railway.app/cars")
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
