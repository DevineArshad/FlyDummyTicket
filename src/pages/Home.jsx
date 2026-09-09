import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import AboutDummyTicket from "../components/home/AboutDummyTicket";
import Services from "../components/home/Services";
import MajorVisaTypes from "../components/home/MajorVisaTypes";
import QuickContactSection from "../components/home/QuickContactSection";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutDummyTicket />
      <Services />
      <MajorVisaTypes />
      <QuickContactSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Home;