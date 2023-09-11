"use client"
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useRouter } from "next/navigation";
import { getCurrentUser } from '@/lib';
// import 'react-calendar/dist/Calendar.css'

export default function Booking({id}) {
  const [tgl,setTgl] = useState(new Date())
  const [dates,setDates] = useState([])
  const [errors,setErrors]=useState(null)
  const [isMounted,setIsMounted]=useState(true)
  const user = getCurrentUser()
  const navigate = useRouter()
  useEffect(() => {

    if (!user) {
      navigate.replace('/login');
    }
  }, [user, navigate]);
  
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
          "car_id":id,
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
            console.log(data.errors)
            setErrors(()=>data.errors)
          })
        }else {
          res.json()
        }
      })
      .then(data=>{
        if(data.errors){
          setErrors(()=>data.errors)
        }else{
        console.log(data)}})
      .catch((error)=>{
        console.error(error)
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
          <div className="mb-4 lg:flex lg:justify-end mt-1">
          <button className="absolute right-0 p-2 bg-blue-500 text-white rounded-lg" onClick={handleBookingClick}>See bookings</button>
        </div>
      <Calendar
        className='w-96 h-64 rounded-xl mb-6 bg-blue-300 react-calendar'
        onChange={setTgl}
        value={tgl}
        tileClassName={({ date }) => {
          const realDate = date.toISOString().split('T')[0]; 
          const isHighlighted = dates.length > 0 && dates.some((range) => {
            const startDate = new Date(range.start_date).toISOString().split('T')[0];
            const endDate = new Date(range.end_date).toISOString().split('T')[0];
            return realDate >= startDate && realDate <= endDate;
          });
    
          return isHighlighted ? 'highlight' : ''; 
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
  <button type='submit' className='p-2 rounded-lg mx-4 py-2 mt-3 font-bold px-6 shadow-md border border-blue-500 bg-blue-500 hover:bg-blue-700 ml-0'>submit</button>
</div>
</form>
</div>
    
)
}