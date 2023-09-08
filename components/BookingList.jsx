'use client'
import { useEffect,useState } from 'react'
import BookingCard from './BookingCard'
import { getCurrentUser } from '@/lib'
export default function BookingList() {
    const[bookings,setBookings]=useState([])
    const[isEditing,setIsEditing]=useState(false)
    const [errors,setErrors]=useState(null)
    const[dates,setDates]=useState({
        newStartDate:'',
        newEndDate:''
    })
    const user = getCurrentUser()
    function updateBooking(id){
        setIsEditing(()=>true)
        const targetElement = document.getElementById("update-dates");

        if (targetElement) {
          // Scroll to the target element
          targetElement.scrollIntoView({ behavior: "smooth" }); // Use "smooth" for smooth scrolling
        }
        sessionStorage.setItem("bookingId",id)
    }
    function handleDateChange(e){
        e.preventDefault()
        const id = sessionStorage.getItem("bookingId")
        const startDate = new Date(dates.newStartDate).toISOString().split('T')[0]
        const endDate = new Date(dates.newEndDate).toISOString().split('T')[0]

        const formattedDates={
            "start_date":startDate,
            "end_date":endDate
        }
        fetch(`http://localhost:3000/bookings`,{
          method:"PATCH",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(formattedDates)
        }).then((res) =>{
          if(res.status===422){
            return res.json().then(data=>setErrors(()=>data.errors))
          }else{
          response.json()}})
        .then(data =>{
            console.log(data)
        })
        setDates(()=>({
          newStartDate:'',
          newEndDate:''
        }))
    }
    function onDateChange(e){
        setDates(()=>({
            ...dates,
            [e.target.id]:e.target.value
        }))
    }
    function deleteBooking(id){
        fetch(`http://localhost:3000/bookings/${user.id}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                // You can include additional headers if needed, such as authorization headers
              },
            })
              .then((response) => {
                if (response.status === 204) {
                  console.log('Item deleted successfully.');
                } else if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
              })
              .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                // Handle errors here
              });
          };
    useEffect(() => {
            
        fetch(`http://localhost:3000/customer_bookings/${user.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setBookings(()=>data)
          })
          .catch((error) => {
            console.error('Error fetching dates:', error);
          });
      }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>
      <div className={errors?"bg-red-400 mt-3 p-2 rounded-sm":"hidden"}>
          {errors? errors: ""}</div>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
            onUpdate={updateBooking}
            onDelete={deleteBooking}
          />
        ))
      ) : (
        <p>No bookings found.</p>
      )}
      {isEditing && (
    <form className='mx-auto rounded-xl p-4 mt-4 border border-gray-300 max-w-md'id='update-dates' onSubmit={handleDateChange}>
      {/* Input fields for updating dates */}
      <label htmlFor="newStartDate">New Start Date:</label>
      <input
        type="date"
        id="newStartDate"
        name="newStartDate"
        value={dates.newStartDate}
        onChange={onDateChange}
      />
      <br />
      <label htmlFor="newEndDate">New End Date:</label>
      <input
        type="date"
        id="newEndDate"
        name="newEndDate"
        value={dates.newEndDate}
        onChange={onDateChange}
      />
      <br />
      <button type='submit' className='p-2 mt-2 ml-2 bg-red-800 rounded'>Save</button>
    </form>
  )}
      </div>
  )
}
