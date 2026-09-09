import SharedBookingCard from "../components/common/SharedBookingCard";

function ReturnTicket() {
  return (
    <SharedBookingCard
      serviceType="return"
      serviceTitle="Cancellation Return Ticket for Immigration"
      price="₹1,499"
      badge="Border Control & Airport Clearance • Cancellation Protection"
      description="Genuine airline reservation for onward or return travel with cancellation protection. Designed to satisfy airline check-in agents and border immigration officers when flying on a one-way ticket."
      features={[
        "Proof of onward journey to satisfy airline check-in agents",
        "Prevents being offloaded or denied boarding at departure airports",
        "Accepted for Thailand, UAE/Dubai, Singapore, Bali & European borders",
        "Live checkable PNR on the operating airline's portal",
        "Built-in automatic cancellation protection after immigration",
        "Priority express generation delivered within 15 minutes",
      ]}
    />
  );
}

export default ReturnTicket;
