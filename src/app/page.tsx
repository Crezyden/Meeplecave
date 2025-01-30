import Hero from "../components/home/hero";
import AboutSection from "../components/home/about";
import MissionSection from "../components/home/mission";
import FAQ from "../components/home/faq";
import Catalogsmini from "../components/home/catalogsmini";


export default function Home() {


  return (
    <div >
      <Hero />
      <AboutSection />
      <MissionSection />
      <Catalogsmini/>
      <FAQ />
    </div>
  );
}
