'use client'
import {useState, useEffect} from "react"
import {Hero, CarList, Qualifications} from '@/components'
export default function Home() {
  const [cars, setCars] = useState([]);
  

  useEffect(() => {
    fetch('http://127.0.0.1:3000/cars')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);
  return (
    <>
      <Hero />
      <h1 className='xsm:hero__subtitle hero__title text-center mx-2'>Explore our Rental Car Fleet</h1>
      <CarList cars={cars} />
      
<Qualifications/>
    </>
  )
}
