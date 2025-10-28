import { Hero } from "@/components/modules/Home/Hero";
import Specialities from "@/components/modules/Home/Specialties";
import TopRatedDoctors from "@/components/modules/Home/TopRatedDoctors";


export default function Home() {
  return (
    <div>
      <Hero />
      <Specialities />
      <TopRatedDoctors />
    </div>
  );
}
