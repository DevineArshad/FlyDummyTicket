import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppFAB from "../common/WhatsAppFAB";
import SEO from "../common/SEO";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <SEO />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default Layout;
