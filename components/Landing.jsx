import React from 'react'
import CarSlider from './CarSlider'
// import Authors from './Authors'
// import About from './About'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

function Landing() {
  return (
    <div>
      <CarSlider />
      {/* <About />
      <Authors /> */}
      <ReviewForm />  
      <ReviewList />
    </div>
  )
}

export default Landing
