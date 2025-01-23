import Image from "next/image";
import Hero from "../components/home/hero";
import AboutSection from "../components/home/about";
import MissionSection from "../components/home/mission";
import FAQ from "../components/home/faq";


export default function Home() {
  return (
    <div >
      <Hero/>
      <AboutSection/>
      <MissionSection/>
      <FAQ/>
    </div> 
  );
}
