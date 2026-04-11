import React, { useEffect } from "react";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";

export default function RiderAgreement() {
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
            ZIPTO RIDER AGREEMENT
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Effective Date: 11 April 2026 <br />
            Last Updated: 11 April 2026
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-8 shadow-sm space-y-8 text-gray-800">

          <section>
            <h3 className="font-semibold">1. INTRODUCTION</h3>
            <p className="text-gray-600">
              This Rider Agreement (“Agreement”) is entered into between Zipto Hyperlogistics Pvt. Ltd.
              (“Company”, “Zipto”, “We”) and you (“Rider”, “Delivery Partner”).
              By using the platform, you agree to this Agreement.
            </p>

            <h3 className="font-semibold mt-4">2. COMPANY DETAILS</h3>
            <p className="text-gray-600">
              ZIPTO HYPERLOGISTICS PRIVATE LIMITED <br />
              781, Saheed Nagar, Maharishi College Road, Bhubaneswar, Odisha - 751007
            </p>

            <h3 className="font-semibold mt-4">3. INDEPENDENT CONTRACTOR STATUS</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>You are an independent contractor</li>
              <li>No employment or partnership is created</li>
              <li>No employee benefits are provided</li>
            </ul>

            <h3 className="font-semibold mt-4">4. ONBOARDING & VERIFICATION</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Driving License</li>
              <li>Vehicle RC</li>
              <li>Identity Proof</li>
              <li>Bank Details</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Zipto may approve or reject onboarding at its discretion.
            </p>

            <h3 className="font-semibold mt-4">5. SERVICES & RESPONSIBILITIES</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Complete deliveries responsibly</li>
              <li>Follow traffic laws</li>
              <li>Handle goods safely</li>
              <li>Maintain professional behavior</li>
            </ul>

            <h3 className="font-semibold mt-4">6. WORK FLEXIBILITY</h3>
            <p className="text-gray-600">
              You can choose your working hours. Order acceptance is optional,
              but performance affects your account.
            </p>

            <h3 className="font-semibold mt-4">7. EARNINGS & PAYMENTS</h3>
            <p className="font-medium">Earnings include:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Base fare</li>
              <li>Distance charges</li>
              <li>Incentives</li>
            </ul>

            <p className="font-medium mt-2">Deductions:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Platform fees</li>
              <li>Penalties</li>
              <li>Cancellation charges</li>
            </ul>

            <h3 className="font-semibold mt-4">8. PERFORMANCE & RATINGS</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Acceptance rate</li>
              <li>Cancellation rate</li>
              <li>Customer ratings</li>
            </ul>
            <p className="mt-2 font-medium text-red-500">
              ⚠️ Poor performance may lead to suspension.
            </p>

            <h3 className="font-semibold mt-4">9. PROHIBITED ACTIVITIES</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Fraud</li>
              <li>Data misuse</li>
              <li>Package tampering</li>
              <li>Illegal deliveries</li>
            </ul>

            <h3 className="font-semibold mt-4">10. SAFETY & COMPLIANCE</h3>
            <p className="text-gray-600">
              You are responsible for your vehicle, licenses, and safety.
              Zipto is not liable for accidents.
            </p>

            <h3 className="font-semibold mt-4">11. INSURANCE</h3>
            <p className="text-gray-600">
              Zipto does not provide insurance unless specified.
            </p>

            <h3 className="font-semibold mt-4">12. EQUIPMENT & EXPENSES</h3>
            <p className="text-gray-600">
              You must provide your own vehicle, fuel, and mobile device.
            </p>

            <h3 className="font-semibold mt-4">13. ACCOUNT TERMINATION</h3>
            <p className="text-gray-600">
              Accounts may be suspended for violations or misconduct.
            </p>

            <h3 className="font-semibold mt-4">14. DATA & PRIVACY</h3>
            <p className="text-gray-600">
              Your data is handled as per the Rider Privacy Policy.
            </p>

            <h3 className="font-semibold mt-4">15. LIMITATION OF LIABILITY</h3>
            <p className="text-gray-600">
              Zipto is not liable for income loss, accidents, or system failures.
            </p>

            <h3 className="font-semibold mt-4">16. INDEMNIFICATION</h3>
            <p className="text-gray-600">
              You agree to protect Zipto from legal claims caused by your actions.
            </p>

            <h3 className="font-semibold mt-4">17. FORCE MAJEURE</h3>
            <p className="text-gray-600">
              Not liable for delays due to uncontrollable events.
            </p>

            <h3 className="font-semibold mt-4">18. GOVERNING LAW</h3>
            <p className="text-gray-600">
              Governed by Indian law. Jurisdiction: Bhubaneswar courts.
            </p>

            <h3 className="font-semibold mt-4">19. MODIFICATIONS</h3>
            <p className="text-gray-600">
              Agreement may be updated anytime.
            </p>

            <h3 className="font-semibold mt-4">20. CONTACT</h3>
            <p className="text-gray-600">
              rider.support@ridezipto.com <br />
              Response within 48 hours
            </p>

            <h3 className="font-semibold mt-4">21. ACCEPTANCE</h3>
            <p className="text-gray-600">
              By registering, you agree to all terms of this Agreement.
            </p>
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
