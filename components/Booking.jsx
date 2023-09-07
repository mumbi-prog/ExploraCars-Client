"use client"
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useRouter } from "next/navigation";
import { getCurrentUser } from '@/lib';
import 'react-calendar/dist/Calendar.css'

export default function Booking() {
  const [tgl,setTgl] = useState(new Date())
  const [dates,setDates] = useState([])
  const [errors,setErrors]=useState(null)
  const user = getCurrentUser()
  const navigate = useRouter()
  if(!user){
    navigate.replace('/login')
  }
  // const car_id = sessionStorage.getItem("car_id")
  const [formData,setFormData]=useState({
      startDate:'',
      endDate:''
  })


  function handleChange(e){
      setFormData(()=>({...formData,
        [e.target.name]:e.target.value  
      }))
  }
  function handleBookingClick(){
    navigate.replace('/account')
  }
  function handleDatesSubmit(e){
      e.preventDefault()
      let startDate = new Date(formData.startDate).toISOString().split('T')[0];
      let endDate = new Date(formData.endDate).toISOString().split('T')[0];
      const newDates= {
          "car_id":2,
          "customer_id":user.id,
          "start_date":startDate,
          "end_date":endDate
      }
      fetch('http://localhost:3000/bookings',{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(newDates)
      })
      .then((res)=>{
        if(res.status===422){
          return res.json().then((data)=>{
            setErrors(()=>data.errors)
          })
        }else {
          // throw new Error('Failed to create booking');
          res.json()
        }
      })
      .then(data=>{
        if(data.errors){
          setErrors(()=>data.errors)
        }else{
        console.log(data)}})
      .catch((error)=>{
        if (error.response && error.response.data && error.response.data.errors) {
          setErrors(error.response.data.errors)
        }
      })
      setFormData(()=>({
        startDate:'',
        endDate:''
      }))
  }
  useEffect(() => {
          
          fetch(`http://localhost:3000/car_bookings/${id}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.error||data.errors){
                setErrors(data.error)
              }else{
              console.log(data)
              setDates(()=>data)}
            })
            .catch((error) => {
              // console.error('Error fetching dates:', error);
              setErrors(error)
            });
        }, [id]);
     return (
      <div className='w-full h-full p-10'>
          <h1 className='font-bold mb-2'>The highlighted Dates are dates not available for this car</h1>
          <div className="flex">
          <button className="btn-primary" onClick={handleBookingClick}>See bookings</button>
        </div>
      <Calendar
        className='w-96 h-full rounded-xl bg-violet-300'
        onChange={setTgl}
        value={tgl}
        tileClassName={({ date }) => {
          const realDate = date.toISOString().split('T')[0]; // Convert date to 'yyyy-mm-dd' format
          const isHighlighted = dates.some((range) => {
            const startDate = new Date(range.start_date).toISOString().split('T')[0];
            const endDate = new Date(range.end_date).toISOString().split('T')[0];
            return realDate >= startDate && realDate <= endDate;
          });
    
          return isHighlighted ? 'highlight' : ''; // Apply 'highlight' class if the date is in a range
        }}
      />
      <form className='mt-5 w-1/2 md:w-3/4 lg:w-1/2 p-5 rounded-xl border-solid' onSubmit={handleDatesSubmit}>
      <div className={errors?"bg-red-400 mt-3 p-2 rounded-sm":"hidden"}>
        {errors? errors: ""}</div>
<h2 className="mb-4">Choose the Dates you wish to hire</h2>
<div className="mb-4">
  <label htmlFor='start-date' className="block">Start date</label>
  <input className='block w-full' name='startDate' required type='date' onChange={handleChange} value={formData.startDate}></input>
</div>
<div className="mb-4">
  <label htmlFor="end_date" className="block">End date</label>
  <input className='block w-full' name='endDate' required type='date' onChange={handleChange} value={formData.endDate}></input>
  <button type='submit' className='p-2 mt-2 bg-red-800 rounded'>submit</button>
</div>
</form>
</div>
    
)
}