import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import DummyFlightTicket from "./pages/DummyFlightTicket";
import HotelBooking from "./pages/HotelBooking";
import ComboPackage from "./pages/ComboPackage";
import ReturnTicket from "./pages/ReturnTicket";
import TravelInsurance from "./pages/TravelInsurance";
import DateChange from "./pages/DateChange";
import HowItWorksPage from "./pages/HowItWorksPage";
import VisaGuide from "./pages/VisaGuide";
import FAQPage from "./pages/FAQPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route
            path="/services/flight-reservation"
            element={<DummyFlightTicket />}
          />
          <Route
            path="/services/hotel-booking"
            element={<HotelBooking />}
          />
          <Route
            path="/services/flight-hotel-package"
            element={<ComboPackage />}
          />
          <Route
            path="/services/travel-insurance"
            element={<TravelInsurance />}
          />
          <Route
            path="/services/return-ticket"
            element={<ReturnTicket />}
          />
          <Route
            path="/services/date-change"
            element={<DateChange />}
          />

          {/* Guide & Informational Pages */}
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/visa-guide" element={<VisaGuide />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* Catch-all redirect back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;