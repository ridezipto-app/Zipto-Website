import React, { useEffect } from "react";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";

export default function TermsConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Back */}
      <div className="p-4">
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-medium hover:underline"
        >
          ← Back to Home
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 px-6 py-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <img src={ziptoLogo} className="h-16 mx-auto mb-4 rounded" />
          <h1 className="text-4xl font-bold text-gray-900">
            ZIPTO TERMS & CONDITIONS
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Effective Date: 11 April 2026 <br />
            Last Updated: 11 April 2026
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-8 shadow-sm space-y-10 text-gray-800">

          {/* ================= CUSTOMER TERMS ================= */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              ZIPTO (CUSTOMER APP) – TERMS & CONDITIONS
            </h2>

            <h3 className="font-semibold">1. INTRODUCTION</h3>
            <p className="text-gray-600">
              These Terms & Conditions constitute a legally binding agreement between you and Zipto Hyperlogistics Pvt. Ltd.
            </p>

            <h3 className="font-semibold mt-4">2. COMPANY DETAILS</h3>
            <p className="text-gray-600">
              ZIPTO HYPERLOGISTICS PRIVATE LIMITED <br />
              Saheed Nagar, Bhubaneswar, Odisha - 751007
            </p>

            <h3 className="font-semibold mt-4">3. PLATFORM NATURE</h3>
            <p className="text-gray-600">
              Zipto connects customers with independent delivery partners.
            </p>
            <p className="font-medium mt-2">
              ⚠️ Zipto does NOT directly provide delivery services.
            </p>

            <h3 className="font-semibold mt-4">4. ELIGIBILITY</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Must be 18+</li>
              <li>Must provide accurate information</li>
            </ul>

            <h3 className="font-semibold mt-4">5. SERVICES</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Food delivery</li>
              <li>Parcel delivery</li>
              <li>Medicine delivery</li>
              <li>Goods transportation</li>
            </ul>

            <h3 className="font-semibold mt-4">6. USER OBLIGATIONS</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide correct details</li>
              <li>Proper packaging</li>
              <li>Avoid illegal goods</li>
            </ul>

            <h3 className="font-semibold mt-4">7. PRICING & PAYMENTS</h3>
            <p className="text-gray-600">Prices are dynamic.</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>UPI</li>
              <li>Cash</li>
              <li>COD</li>
            </ul>

            <h3 className="font-semibold mt-4">8. CANCELLATION</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Before assignment: Free</li>
              <li>After assignment: Charges apply</li>
              <li>After pickup: Not allowed</li>
            </ul>

            <h3 className="font-semibold mt-4">9. REFUNDS</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Failed transactions</li>
              <li>Duplicate payments</li>
              <li>Cancelled by Zipto</li>
            </ul>
            <p className="mt-2">⏱ 5–7 business days</p>

            <h3 className="font-semibold mt-4">10. PROHIBITED ITEMS</h3>
            <p className="font-medium">Illegal:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Drugs</li>
              <li>Weapons</li>
              <li>Counterfeit goods</li>
            </ul>

            <p className="font-medium mt-2">Hazardous:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Flammable items</li>
              <li>Toxic chemicals</li>
            </ul>

            <p className="font-medium mt-2">Restricted:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Cash</li>
              <li>Precious items</li>
              <li>Alcohol</li>
            </ul>

            <p className="mt-2 font-medium">
              🚫 User responsible for shipment contents
            </p>

            <h3 className="font-semibold mt-4">11. ACCOUNT & SECURITY</h3>
            <p className="text-gray-600">
              Users are responsible for account security.
            </p>

            <h3 className="font-semibold mt-4">12. THIRD-PARTY SERVICES</h3>
            <p className="text-gray-600">
              Zipto is not responsible for third-party services.
            </p>

            <h3 className="font-semibold mt-4">13. LIMITATION OF LIABILITY</h3>
            <p className="text-gray-600">
              Zipto is not liable for delays, losses, or user errors.
            </p>

            <h3 className="font-semibold mt-4">14. INDEMNIFICATION</h3>
            <p className="text-gray-600">
              Users agree to indemnify Zipto.
            </p>

            <h3 className="font-semibold mt-4">15. TERMINATION</h3>
            <p className="text-gray-600">
              Accounts may be terminated for violations.
            </p>

            <h3 className="font-semibold mt-4">16. INTELLECTUAL PROPERTY</h3>
            <p className="text-gray-600">All content belongs to Zipto.</p>

            <h3 className="font-semibold mt-4">17. PRIVACY</h3>
            <p className="text-gray-600">
              Governed by Privacy Policy.
            </p>

            <h3 className="font-semibold mt-4">18. FORCE MAJEURE</h3>
            <p className="text-gray-600">
              Not liable for uncontrollable events.
            </p>

            <h3 className="font-semibold mt-4">19. GOVERNING LAW</h3>
            <p className="text-gray-600">
              Indian law. Jurisdiction: Bhubaneswar.
            </p>

            <h3 className="font-semibold mt-4">20. MODIFICATION</h3>
            <p className="text-gray-600">
              Terms may be updated anytime.
            </p>

            <h3 className="font-semibold mt-4">21. CONTACT</h3>
            <p>Email: support@ridezipto.com</p>
            <p>Response within 48 hours</p>
          </section>

          {/* ================= RIDER TERMS ================= */}
          <section className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">
              ZIPTO RIDER TERMS & CONDITIONS
            </h2>

            <h3 className="font-semibold">1. INTRODUCTION</h3>
            <p className="text-gray-600">
              Applies to delivery partners using the Rider App.
            </p>

            <h3 className="font-semibold mt-3">2. INDEPENDENT CONTRACTOR</h3>
            <p className="text-gray-600">
              Riders are not employees.
            </p>

            <h3 className="font-semibold mt-3">3. ELIGIBILITY</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>18+</li>
              <li>Valid documents</li>
              <li>Driving license</li>
            </ul>

            <h3 className="font-semibold mt-3">4. SERVICES</h3>
            <p className="text-gray-600">
              Delivery of food, parcels, medicines.
            </p>

            <h3 className="font-semibold mt-3">5. OBLIGATIONS</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Follow traffic rules</li>
              <li>Maintain professionalism</li>
              <li>Ensure safe delivery</li>
            </ul>

            <h3 className="font-semibold mt-3">6. EARNINGS</h3>
            <p className="text-gray-600">
              Includes fares, incentives, deductions.
            </p>

            <h3 className="font-semibold mt-3">7. PERFORMANCE</h3>
            <p className="text-gray-600">
              Poor performance may lead to deactivation.
            </p>

            <h3 className="font-semibold mt-3">8. PROHIBITED CONDUCT</h3>
            <p className="text-gray-600">
              Fraud, misuse, illegal activity prohibited.
            </p>

            <h3 className="font-semibold mt-3">9. ACCOUNT DEACTIVATION</h3>
            <p className="text-gray-600">
              Possible for violations.
            </p>

            <h3 className="font-semibold mt-3">10. LIABILITY</h3>
            <p className="text-gray-600">
              Riders responsible for safety & compliance.
            </p>

            <h3 className="font-semibold mt-3">11. GOVERNING LAW</h3>
            <p className="text-gray-600">
              Indian law applies.
            </p>

            <h3 className="font-semibold mt-3">12. CONTACT</h3>
            <p>rider.support@ridezipto.com</p>
          </section>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-10 text-sm">
          © 2026 Zipto Hyperlogistics Pvt. Ltd.
        </p>

      </div>
    </>
  );
}
