import { Hero, CarList, Qualifications, Recomendations } from "@/components";
import { getCarData } from "@/lib";
export default async function Home() {
  const cars = await getCarData()
  return (
    <>
      <Hero />
      <h1 className="xsm:text-xl hero__title text-center mx-2">
        Explore our Rental Car Fleet
      </h1>
      <CarList cars={cars} itemsPerPage={5}/>
      <Qualifications />
      <Recomendations/>
    </>
  );
}

