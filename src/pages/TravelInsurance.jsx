import SharedBookingCard from "../components/common/SharedBookingCard";

function TravelInsurance() {
  return (
    <SharedBookingCard
      serviceType="insurance"
      serviceTitle="Travel Medical Insurance for Visa"
      price="₹699"
      badge="Schengen Article 15 Compliant • €30,000 Cover"
      description="Official travel medical insurance certificate satisfying mandatory Schengen Visa Article 15 and global embassy requirements. Provides minimum €30,000 / $50,000 emergency medical cover, hospitalization, and medical repatriation."
      features={[
        "Official travel insurance policy certificate with unique policy reference and QR code",
        "Guaranteed minimum €30,000 / $50,000 emergency medical and hospitalization coverage",
        "Full medical repatriation of remains and emergency medical evacuation included",
        "100% Accepted by all 29 Schengen states, USA, UK, Canada & worldwide consulates",
        "Zero deductible / zero excess policy terms to satisfy strict visa officer criteria",
        "Instant delivery straight to your WhatsApp and Email in print-ready PDF format in 10-30 mins",
      ]}
    />
  );
}

export default TravelInsurance;
