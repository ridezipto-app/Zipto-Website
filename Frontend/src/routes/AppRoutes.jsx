import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsConditions";
import RiderAgreement from "../pages/RiderAgreement";
import RiderPrivacyPolicy from "../pages/RiderPrivacyPolicy";
import DeleteAccount from "../pages/DeleteAccount";
import RiderTerms from "../pages/RiderTerms";
import AboutUs from "../pages/AboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/rider-agreement" element={<RiderAgreement />} />
      <Route path="/rider-privacy-policy" element={<RiderPrivacyPolicy />} />
      <Route path="/rider-terms-of-service" element={<RiderTerms/>} />
      <Route path="/delete-account" element={<DeleteAccount />} />
    </Routes>
  );
}