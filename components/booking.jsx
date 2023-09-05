'use client'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
function booking() {
    const [tgl,setTgl] = useState(new Date())
    const [dates,setDates] = useState([])
    const [formData,setFormData]=useState({
        startDate:'',
        endDate:''
    })
    function handleChange(e){
        setFormData(()=>({...formData,
          [e.target.name]:e.target.value  
        }))
    }
    function handleDatesSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
    useEffect(() => {
            
            fetch('http://localhost:3000/bookings')
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                setDates(()=>data)
              })
              .catch((error) => {
                console.error('Error fetching dates:', error);
              });
          }, []);
       return (
        <div className='w-full h-full p-10'>
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
        <form className='mt-5 p-5 rounded-xl border-solid' onSubmit={handleDatesSubmit}>
  <h2 className="mb-4">Choose the Dates you wish to hire</h2>
  <div className="mb-4">
    <label htmlFor='start-date' className="block">Start date</label>
    <input className='block w-full' name='startDate' type='date' onChange={handleChange} value={formData.startDate}></input>
  </div>
  <div className="mb-4">
    <label htmlFor="end_date" className="block">End date</label>
    <input className='block w-full' name='endDate' type='date' onChange={handleChange} value={formData.endDate}></input>
    <button type='submit' className='p-2 mt-2 bg-red-800 rounded'>submit</button>
  </div>
</form>
      </div>
      
  )
}

export default booking
