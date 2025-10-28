import { Hero } from "@/components/modules/Home/Hero";
import Specialities from "@/components/modules/Home/Specialties";
import Steps from "@/components/modules/Home/Steps";
import TopRatedDoctors from "@/components/modules/Home/TopRatedDoctors";


export default function Home() {
  return (
    <div>
      <Hero />
      <Specialities />
      <TopRatedDoctors />
      <Steps />
    </div>
  );
}
