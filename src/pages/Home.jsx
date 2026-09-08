import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Services from "../components/home/Services";
import HowItWorks from "../components/home/HowItWorks";
import UseCases from "../components/home/UseCases";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Home;