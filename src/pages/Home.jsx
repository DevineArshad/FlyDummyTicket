import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import SampleTicketShowcase from "../components/home/SampleTicketShowcase";
import Services from "../components/home/Services";
import MajorVisaTypes from "../components/home/MajorVisaTypes";
import HowItWorks from "../components/home/HowItWorks";
import UseCases from "../components/home/UseCases";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SampleTicketShowcase />
      <Services />
      <MajorVisaTypes />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Home;