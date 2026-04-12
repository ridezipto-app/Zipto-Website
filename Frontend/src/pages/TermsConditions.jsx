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
         {/* ================= CUSTOMER TERMS ================= */}
  <section>
    <h2 className="text-2xl font-bold mb-4">
      ZIPTO TERMS & CONDITIONS (CUSTOMER APP)
    </h2>

    <p className="text-sm text-gray-500 mb-4">
      Effective Date: 11 April 2026 <br />
      Last Updated: 11 April 2026
    </p>

    <h3 className="font-semibold">1. INTRODUCTION</h3>
    <p className="text-gray-600">
      These Terms & Conditions (“Terms”) constitute a legally binding agreement between you (“User”, “Customer”) and Zipto Hyperlogistics Pvt. Ltd. (“Zipto”, “Company”, “We”, “Us”). <br /><br />
      By accessing or using the Zipto Customer Application, website, or services, you agree to be bound by these Terms.
    </p>

    <h3 className="font-semibold mt-4">2. COMPANY DETAILS</h3>
    <p className="text-gray-600">
      Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED. <br />
      Registered Office: 781, saheed Ngr, 780, Maharishi College Road, Saheed Nagar, Khorda, Bhubaneswar, Orissa, India, 751007 <br />
      Location: Bhubaneswar, Odisha, India
    </p>

    <h3 className="font-semibold mt-4">3. PLATFORM NATURE</h3>
    <p className="text-gray-600">
      Zipto is a technology platform that connects customers with independent delivery partners.
    </p>
    <p className="font-medium mt-2">
      ⚠️ Zipto does NOT directly provide delivery services.
    </p>

    <h3 className="font-semibold mt-4">4. ELIGIBILITY</h3>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Must be 18 years or older</li>
      <li>Must provide accurate information</li>
    </ul>

    <h3 className="font-semibold mt-4">5. SERVICES</h3>
    <p className="text-gray-600">Zipto enables:</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Food delivery</li>
      <li>Parcel delivery</li>
      <li>Medicine delivery</li>
      <li>Goods transportation</li>
    </ul>

    <h3 className="font-semibold mt-4">6. USER OBLIGATIONS</h3>
    <p>You agree to:</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Provide correct pickup & delivery details</li>
      <li>Properly package items</li>
      <li>Avoid sending illegal or restricted goods</li>
    </ul>

    <h3 className="font-semibold mt-4">7. PRICING & PAYMENTS</h3>
    <p className="text-gray-600">Prices are dynamic (distance, demand)</p>
    <p className="mt-2">Payment methods:</p>
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
    <p>Refunds applicable only in:</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Failed transactions</li>
      <li>Duplicate payments</li>
      <li>Cancellation by Zipto</li>
    </ul>
    <p className="mt-2">Processing time: 5–7 business days</p>

    <h3 className="font-semibold mt-4">10. PROHIBITED ITEMS</h3>
    <p>Users must NOT send:</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Illegal items (drugs, weapons)</li>
      <li>Hazardous materials</li>
      <li>Restricted or high-risk goods</li>
    </ul>
    <p className="mt-2">⚠️ User is fully responsible for shipment contents.</p>

    <h3 className="font-semibold mt-4">11. ACCOUNT & SECURITY</h3>
    <p className="text-gray-600">
      Users are responsible for account confidentiality. <br />
      Zipto is not liable for unauthorized access due to user negligence.
    </p>

    <h3 className="font-semibold mt-4">12. THIRD-PARTY SERVICES</h3>
    <p className="text-gray-600">
      Zipto may use third-party services (payments, maps). <br />
      We are not responsible for their performance.
    </p>

    <h3 className="font-semibold mt-4">13. LIMITATION OF LIABILITY</h3>
    <p className="text-gray-600">
      To the maximum extent permitted by law, Zipto shall not be liable for:
    </p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Delivery delays</li>
      <li>Loss due to improper packaging</li>
      <li>User errors</li>
      <li>Third-party actions</li>
    </ul>

    <h3 className="font-semibold mt-4">14. INDEMNIFICATION</h3>
    <p className="text-gray-600">
      Users agree to indemnify Zipto against claims arising from misuse or violations.
    </p>

    <h3 className="font-semibold mt-4">15. TERMINATION</h3>
    <p className="text-gray-600">
      Zipto may suspend or terminate accounts for fraud, abuse, or policy violations.
    </p>

    <h3 className="font-semibold mt-4">16. INTELLECTUAL PROPERTY</h3>
    <p className="text-gray-600">All platform content belongs to Zipto.</p>

    <h3 className="font-semibold mt-4">17. PRIVACY</h3>
    <p className="text-gray-600">Use of the platform is governed by our Privacy Policy.</p>

    <h3 className="font-semibold mt-4">18. FORCE MAJEURE</h3>
    <p className="text-gray-600">
      Zipto is not liable for events beyond control (natural disasters, etc.).
    </p>

    <h3 className="font-semibold mt-4">19. GOVERNING LAW</h3>
    <p className="text-gray-600">
      These Terms are governed by Indian law. <br />
      Jurisdiction: Bhubaneswar, Odisha courts.
    </p>

    <h3 className="font-semibold mt-4">20. MODIFICATION OF TERMS</h3>
    <p className="text-gray-600">
      Zipto may update these Terms at any time.
    </p>

    <h3 className="font-semibold mt-4">21. PROHIBITED ITEMS (DETAILED)</h3>
    <p>Users are strictly prohibited from sending:</p>

    <p className="font-medium mt-2">Illegal:</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Narcotics / drugs</li>
      <li>Weapons / explosives</li>
      <li>Counterfeit goods</li>
    </ul>

    <p className="font-medium mt-2">Hazardous:</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Flammable substances</li>
      <li>Toxic chemicals</li>
      <li>Dangerous materials</li>
    </ul>

    <p className="font-medium mt-2">Restricted:</p>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Cash / currency</li>
      <li>Precious items</li>
      <li>Alcohol or regulated goods</li>
    </ul>

    <p className="mt-2">🚫 Violation may result in account suspension and legal action</p>

    <h3 className="font-semibold mt-4">22. CONTACT & GRIEVANCE</h3>
    <p>Email: support@ridezipto.com</p>
    <p>Grievance Officer: Zipto Support Team</p>
    <p>Response Time: Within 48 hours</p>
  </section>

  {/* ================= RIDER TERMS ================= */}
  <section className="border-t pt-6">
    <h2 className="text-2xl font-bold mb-4">
      ZIPTO RIDER TERMS & CONDITIONS
    </h2>

    <p className="text-sm text-gray-500 mb-4">
      Effective Date: 11 April 2026 <br />
      Last Updated: 11 April 2026
    </p>

    <h3 className="font-semibold">1. INTRODUCTION</h3>
    <p className="text-gray-600">
      These Terms apply to delivery partners (“Riders”) using the Zipto Rider Onboarding Application operated by Zipto Hyperlogistics Pvt. Ltd..
    </p>

    <h3 className="font-semibold mt-3">2. COMPANY DETAILS</h3>
    <p className="text-gray-600">
      Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED. <br />
      Registered Office: Bhubaneswar, Odisha, India
    </p>

    <h3 className="font-semibold mt-3">3. INDEPENDENT CONTRACTOR STATUS</h3>
    <p className="text-gray-600">Riders are independent contractors.</p>

    <h3 className="font-semibold mt-3">4. ELIGIBILITY</h3>
    <ul className="list-disc pl-6 text-gray-600">
      <li>18+</li>
      <li>Valid documents</li>
      <li>Driving license</li>
    </ul>

    <h3 className="font-semibold mt-3">5. SERVICES</h3>
    <p className="text-gray-600">Food, parcel, medicine delivery.</p>

    <h3 className="font-semibold mt-3">6. RIDER OBLIGATIONS</h3>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Follow traffic laws</li>
      <li>Maintain professionalism</li>
      <li>Ensure safe delivery</li>
      <li>Handle goods responsibly</li>
    </ul>

    <h3 className="font-semibold mt-3">7. EARNINGS & PAYOUTS</h3>
    <p className="text-gray-600">Includes fares, incentives, deductions.</p>

    <h3 className="font-semibold mt-3">8. PERFORMANCE MONITORING</h3>
    <p className="text-gray-600">Poor performance may lead to deactivation.</p>

    <h3 className="font-semibold mt-3">9. PROHIBITED CONDUCT</h3>
    <p className="text-gray-600">Fraud, misuse, illegal activity prohibited.</p>

    <h3 className="font-semibold mt-3">10. ACCOUNT DEACTIVATION</h3>
    <p className="text-gray-600">Possible for violations.</p>

    <h3 className="font-semibold mt-3">11. LIABILITY</h3>
    <p className="text-gray-600">Riders responsible for safety & compliance.</p>

    <h3 className="font-semibold mt-3">12. CONTACT</h3>
    <p>rider.support@ridezipto.com</p>
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
