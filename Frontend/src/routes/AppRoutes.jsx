import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsConditions";
import RiderAgreement from "../pages/RiderAgreement";
import RiderPrivacyPolicy from "../pages/RiderPrivacyPolicy";
import DeleteAccount from "../pages/DeleteAccount";
import RiderTerms from "../pages/RiderTerms";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import CancellationRefundPolicy from "../pages/CancellationRefundPolicy";
import DataDeletionPolicy from "../pages/DataDeletionPolicy";
import ProhibitedItemsPolicy from "../pages/ProhibitedItemsPolicy";
import RiderDataDeletionPolicy from "../pages/RiderDataDeletionPolicy";

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
      <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
      <Route path="/data-deletion-policy" element={<DataDeletionPolicy />} />
      <Route path="/prohibited-items-policy" element={<ProhibitedItemsPolicy />} />
      <Route path="/rider-data-deletion-policy" element={<RiderDataDeletionPolicy />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}