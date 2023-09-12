import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <Image
        src="https://www.enterprise.com/en/exotic-car-rental/locations/_jcr_content/root/container/container/container_1406325789/image.coreimg.82.1920.jpeg/1661951609321/hero-locations-home-page-1920x565.jpeg"
        width={1920}
        height={565}
        className="w-full h-fit object-contain"
        alt="location"
      />
      <div className="m-2 p-4">
        <h1 className="text-2xl font-bold my-2 md:text-4xl">Explore Our Car Rental Locations</h1>
        <p className="">Experience exceptional style and performance that will turn heads in any city.</p>
        <h2 className="text-xl font-bold md:text-3xl my-2">Reserve online by selecting a location.</h2>
        <h3 className="font-bold text-2xl">Kenya</h3>
        <ul className="text-blue-500  font-bold p-4 leading-5">
            <li className="mt-2 hover:text-blue-800"><a href="/locations/nairobi">Nairobi</a></li>
            <li className="mt-2 hover:text-blue-800"><a href="/locations/mombasa">Mombasa</a></li>
            <li className="mt-2 hover:text-blue-800"><a href="/locations/eldoret">Eldoret</a></li>
        </ul>
        <h4 className="text-2xl font-bold my-2 md:text-4xl md:my-4">Need More Information?</h4>
        <p>Check out our FAQs or call +254702018080.</p>
      </div>
    </>
  );
}
