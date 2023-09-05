import React from "react";
import Helmet from './Helmet'
import CarSlider from "./CarSlider";

export default function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      <Helmet title="Home">
        <section className="p-0 hero__slider-section">
          <CarSlider />
        </section>
      </Helmet>
      {/* <CarList /> */}
      {/* <Booking /> */}
      {/* <Location /> */}
      {/* <Footer /> */}
    </>
  );
}
