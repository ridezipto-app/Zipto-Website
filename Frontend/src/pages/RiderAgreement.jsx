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
              This Rider Agreement (“Agreement”) is entered into between: <br /><br />
              Zipto Hyperlogistics Pvt. Ltd. (“Company”, “Zipto”, “We”) <br />
              AND <br />
              You (“Rider”, “Delivery Partner”, “You”) <br /><br />
              This Agreement governs your use of the Zipto platform as an independent delivery partner. <br /><br />
              By registering or using the platform, you agree to be bound by this Agreement.
            </p>

            <h3 className="font-semibold mt-4">2. COMPANY DETAILS</h3>
            <p className="text-gray-600">
              Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED. <br />
              Registered Office: 781,saheed Ngr,780, Maharishi College Road, Saheed Nagar, Khorda, Bhubaneswar, Orissa, India, 751007 <br />
              Location: Bhubaneswar, Odisha, India
            </p>

            <h3 className="font-semibold mt-4">3. INDEPENDENT CONTRACTOR STATUS</h3>
            <p className="text-gray-600">
              You are engaged as an independent contractor <br /><br />
              Nothing in this Agreement creates: <br />
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Employment</li>
              <li>Partnership</li>
              <li>Agency relationship</li>
            </ul>
            <p className="text-gray-600 mt-2">
              You are not entitled to employee benefits.
            </p>

            <h3 className="font-semibold mt-4">4. ONBOARDING & VERIFICATION</h3>
            <p>You agree to provide accurate and valid documents including:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Driving License</li>
              <li>Vehicle Registration Certificate</li>
              <li>Identity Proof</li>
              <li>Bank Details</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Zipto reserves the right to approve or reject onboarding at its sole discretion.
            </p>

            <h3 className="font-semibold mt-4">5. SERVICES & RESPONSIBILITIES</h3>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Accept and complete delivery orders responsibly</li>
              <li>Follow all traffic laws and regulations</li>
              <li>Ensure safe handling of goods</li>
              <li>Maintain professional conduct with customers</li>
            </ul>

            <h3 className="font-semibold mt-4">6. WORK FLEXIBILITY</h3>
            <p className="text-gray-600">
              You are free to choose your working hours <br />
              There is no obligation to accept every order <br />
              However, performance metrics may affect your account status.
            </p>

            <h3 className="font-semibold mt-4">7. EARNINGS & PAYMENTS</h3>
            <p className="font-medium">Earnings include:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Base fare</li>
              <li>Distance-based charges</li>
              <li>Incentives or bonuses</li>
            </ul>

            <p className="font-medium mt-2">Deductions may include:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Platform service fees</li>
              <li>Penalties for violations</li>
              <li>Cancellation charges</li>
            </ul>

            <p className="mt-2 text-gray-600">
              Payouts will be processed periodically to your registered bank account.
            </p>

            <h3 className="font-semibold mt-4">8. PERFORMANCE & RATINGS</h3>
            <p>Zipto may monitor:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Acceptance rate</li>
              <li>Cancellation rate</li>
              <li>Delivery completion rate</li>
              <li>Customer ratings</li>
            </ul>
            <p className="mt-2 font-medium">
              ⚠️ Consistently poor performance may result in suspension or deactivation.
            </p>

            <h3 className="font-semibold mt-4">9. PROHIBITED ACTIVITIES</h3>
            <p>You must NOT:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Engage in fraudulent activities</li>
              <li>Misuse customer data</li>
              <li>Tamper with packages</li>
              <li>Deliver illegal or restricted goods</li>
              <li>Manipulate orders or payments</li>
            </ul>
            <p className="mt-2 text-gray-600">
              Violation may lead to immediate termination and legal action.
            </p>

            <h3 className="font-semibold mt-4">10. SAFETY & COMPLIANCE</h3>
            <p className="text-gray-600">
              You are solely responsible for your vehicle condition, valid licenses and permits,
              compliance with traffic laws, and personal safety during deliveries. <br />
              Zipto is not liable for accidents or injuries.
            </p>

            <h3 className="font-semibold mt-4">11. INSURANCE</h3>
            <p className="text-gray-600">
              Zipto does not provide insurance unless explicitly stated. <br />
              Riders are responsible for their own vehicle and personal insurance.
            </p>

            <h3 className="font-semibold mt-4">12. EQUIPMENT & EXPENSES</h3>
            <p className="text-gray-600">
              You must provide your own vehicle, fuel, and mobile device <br />
              Zipto does not reimburse operational expenses unless specified
            </p>

            <h3 className="font-semibold mt-4">13. ACCOUNT SUSPENSION & TERMINATION</h3>
            <p className="text-gray-600">
              Zipto may suspend or terminate your account for policy violations,
              fraud, misconduct, or legal reasons. <br />
              Termination may occur without prior notice in severe cases.
            </p>

            <h3 className="font-semibold mt-4">14. DATA & PRIVACY</h3>
            <p className="text-gray-600">
              Your data will be handled in accordance with the Zipto Rider Privacy Policy. <br />
              By using the platform, you consent to data collection including location tracking.
            </p>

            <h3 className="font-semibold mt-4">15. LIMITATION OF LIABILITY</h3>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Zipto shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Loss of income</li>
              <li>Accidents or injuries</li>
              <li>Third-party actions</li>
              <li>Technical issues or downtime</li>
            </ul>

            <h3 className="font-semibold mt-4">16. INDEMNIFICATION</h3>
            <p>You agree to indemnify and hold harmless Zipto against:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Claims</li>
              <li>Damages</li>
              <li>Legal costs</li>
            </ul>
            <p className="text-gray-600 mt-2">
              arising from your negligence, violation of this Agreement, or illegal activities.
            </p>

            <h3 className="font-semibold mt-4">17. FORCE MAJEURE</h3>
            <p className="text-gray-600">
              Zipto shall not be liable for delays or failures caused by natural disasters,
              government actions, network issues, or events beyond control.
            </p>

            <h3 className="font-semibold mt-4">18. GOVERNING LAW & JURISDICTION</h3>
            <p className="text-gray-600">
              This Agreement shall be governed by the laws of India. <br />
              Courts in Bhubaneswar, Odisha shall have exclusive jurisdiction.
            </p>

            <h3 className="font-semibold mt-4">19. MODIFICATIONS</h3>
            <p className="text-gray-600">
              Zipto may update this Agreement at any time. <br />
              Continued use of the platform constitutes acceptance of changes.
            </p>

            <h3 className="font-semibold mt-4">20. CONTACT & GRIEVANCE</h3>
            <p>Email: rider.support@ridezipto.com</p>
            <p>Grievance Officer: Zipto Support Team</p>
            <p>Response Time: Within 48 hours</p>

            <h3 className="font-semibold mt-4">21. ACCEPTANCE</h3>
            <p className="text-gray-600">
              By registering on the Zipto Rider platform, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>You have read and understood this Agreement</li>
              <li>You agree to all terms and conditions</li>
              <li>You voluntarily accept this Agreement</li>
            </ul>

          </section>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-10 text-sm">
          © 2026 Zipto Hyperlogistics Pvt. Ltd. All Rights Reserved.
        </p>

      </div>
    </>
  );
}
