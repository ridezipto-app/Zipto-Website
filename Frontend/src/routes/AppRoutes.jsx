import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsConditions";
import RiderAgreement from "./pages/RiderAgreement";
import AboutUs from "../pages/AboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/rider-agreement" element={<RiderAgreement />} />
    </Routes>
  );
}
