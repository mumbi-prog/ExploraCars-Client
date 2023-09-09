import { Hero, CarList, Qualifications } from "@/components";
import { getCarData } from "@/lib";
export default async function Home() {
  const cars = await getCarData()
  return (
    <>
      <Hero />
      <h1 className="xsm:hero__subtitle hero__title text-center mx-2">
        Explore our Rental Car Fleet
      </h1>
      <CarList cars={cars} itemsPerPage={4}/>

      <Qualifications />
    </>
  );
}

