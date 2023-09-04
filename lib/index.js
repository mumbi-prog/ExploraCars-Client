"use client"
import axiosInstance from '../axiosConfig';
import Swal from "sweetalert2";

export async function getCurrentUser(){
    try {
        const response = await axiosInstance.get("/me")
        const user = response.data 
        return user
    } catch (error) {
       console.error('Error:', error) 
    }
}

export function registerUser(formData, navigate) {
    axiosInstance.post("http://127.0.0.1:3000/signup", formData)
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