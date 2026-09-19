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
import NotFound from "./pages/NotFound";

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