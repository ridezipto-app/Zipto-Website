import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}