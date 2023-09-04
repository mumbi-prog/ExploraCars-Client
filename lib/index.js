import axiosInstance from '../axiosConfig';

export async function getCurrentUser(){
    try {
        const response = await axiosInstance.get("/me")
        const user = response.data 
        return user
    } catch (error) {
       console.error('Error:', error) 
    }
}

