import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
