'use client'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
function booking() {
    const [tgl,setTgl] = useState(new Date())
    const [dates,setDates] = useState([])
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

      </div>
      
  )
}

export default booking
