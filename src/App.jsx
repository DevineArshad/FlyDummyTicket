import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/Home";
import PricingPage from "./views/PricingPage";
import DummyFlightTicket from "./views/DummyFlightTicket";
import HotelBooking from "./views/HotelBooking";
import ComboPackage from "./views/ComboPackage";
import ReturnTicket from "./views/ReturnTicket";
import TravelInsurance from "./views/TravelInsurance";
import DateChange from "./views/DateChange";
import HowItWorksPage from "./views/HowItWorksPage";
import VisaGuide from "./views/VisaGuide";
import FAQPage from "./views/FAQPage";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import PrivacyPolicy from "./views/PrivacyPolicy";
import TermsConditions from "./views/TermsConditions";
import RefundPolicy from "./views/RefundPolicy";
import NotFound from "./views/NotFound";

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
          <Route
            path="/services/visa-guide"
            element={<Navigate to="/visa-guide" replace />}
          />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* 404 Not Found Handling (Replaces soft-404 home redirects) */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;