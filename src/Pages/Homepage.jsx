import About from "../component/About";
import Footer from "../component/footer";
import HeroSection from "../component/Hero-section";
import Navbar from "../component/Navbar";

import StatSection from "../component/Stat-section";
import Timeline from "../component/Timeline";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <StatSection />
      <Timeline />
   
      <Footer />
    </div>
  );
}
