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

      <div className="min-h-screen bg-white px-6 py-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <img src={ziptoLogo} className="h-16 mx-auto mb-4 rounded" />
          <h1 className="text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Last updated: April 2026
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto space-y-12 text-gray-800">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-600">
              These Terms & Conditions (“Terms”) constitute a legally binding agreement between you (“User”, “Customer”, or “Delivery Partner”) and Zipto Hyperlogistics Pvt. Ltd. (“Zipto”, “Company”, “We”, “Us”).
            </p>
            <p className="text-gray-600 mt-2">
              By accessing or using the Zipto platform (including mobile applications, websites, and services), you agree to comply with and be bound by these Terms.
            </p>
            <p className="text-gray-600 mt-2">
              If you do not agree, you must immediately discontinue use of the platform.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Platform Nature</h2>
            <p className="text-gray-600">
              Zipto is a technology-enabled logistics marketplace that connects:
            </p>

            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Customers</li>
              <li>Businesses</li>
              <li>Independent Delivery Partners</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
              <p className="font-semibold">⚠️ IMPORTANT</p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>Zipto does not provide transportation services directly.</li>
                <li>All delivery services are fulfilled by independent third-party partners.</li>
              </ul>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Scope of Services</h2>

            <ul className="list-disc pl-6 text-gray-600">
              <li>Food delivery</li>
              <li>Medicine delivery</li>
              <li>Parcel & goods transportation</li>
              <li>Hyperlocal logistics</li>
              <li>Last-mile delivery solutions</li>
            </ul>

            <p className="mt-3 text-gray-600">Service vehicles may include:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Bikes / Scooters</li>
              <li>Auto-rickshaws</li>
              <li>Pickup vehicles</li>
              <li>Mini trucks</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. User Representations & Warranties
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>You are at least 18 years of age</li>
              <li>You have legal capacity to enter into a binding contract</li>
              <li>All information provided is true, accurate, and complete</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. User Obligations</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide accurate pickup and delivery details</li>
              <li>Ensure items are securely packaged</li>
              <li>Not use the platform for unlawful or fraudulent purposes</li>
              <li>Not send prohibited or hazardous goods</li>
            </ul>

            <p className="mt-3 font-medium">
              ⚠️ You remain solely responsible for the contents of your shipment.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Pricing & Payments</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Prices are dynamically determined based on distance, demand, and service type</li>
              <li>Charges are displayed prior to order confirmation</li>
              <li>UPI / Cash / COD accepted</li>
            </ul>

            <p className="mt-2 text-gray-600">
              Zipto reserves the right to revise pricing at any time without prior notice.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Cancellation Policy</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Before partner assignment: Free cancellation</li>
              <li>After assignment: Cancellation charges applicable</li>
              <li>After pickup: ❌ No cancellation permitted</li>
            </ul>

            <p className="mt-2 text-gray-600">
              Zipto may cancel orders due to safety concerns, incorrect details, or policy violations.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Refund Policy</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Failed or unsuccessful transaction</li>
              <li>Duplicate payment</li>
              <li>Order cancelled by Zipto</li>
            </ul>

            <p className="mt-2 text-gray-600">No refunds for:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Incorrect address</li>
              <li>Customer unavailability</li>
              <li>Cancellation after pickup</li>
            </ul>

            <p className="mt-2">⏱ Processing time: 5–7 business days</p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Prohibited Items</h2>

            <p className="font-medium">Illegal:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Narcotics / drugs</li>
              <li>Weapons / explosives</li>
              <li>Counterfeit goods</li>
            </ul>

            <p className="font-medium mt-3">Hazardous:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Flammable substances</li>
              <li>Toxic chemicals</li>
              <li>Dangerous materials</li>
            </ul>

            <p className="font-medium mt-3">Restricted:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Cash / currency</li>
              <li>Precious items</li>
              <li>Alcohol or regulated goods</li>
            </ul>

            <p className="mt-3 font-medium">
              🚫 Violation may result in account suspension and legal action
            </p>
          </section>

          {/* 10–15 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-600">
              Zipto shall not be liable for indirect damages, delays, improper packaging, or actions of delivery partners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify Zipto against claims, damages, and legal costs arising from misuse or violations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Intellectual Property</h2>
            <p className="text-gray-600">
              All platform content including logo, design, and technology are owned by Zipto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Account Termination</h2>
            <p className="text-gray-600">
              Zipto may suspend or terminate accounts involved in fraud, abuse, or violations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Force Majeure</h2>
            <p className="text-gray-600">
              Zipto is not liable for failures due to events beyond control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. Governing Law</h2>
            <p className="text-gray-600">
              Governed by laws of India. Jurisdiction: Bhubaneswar, Odisha.
            </p>
          </section>

          {/* RIDER */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">
              🛵 Zipto Rider Terms (Advanced)
            </h2>

            <h3 className="font-semibold mb-2">1. Independent Contractor Status</h3>
            <p className="text-gray-600">
              Riders are independent contractors, not employees.
            </p>

            <h3 className="font-semibold mt-4 mb-2">2. Service Obligations</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Complete deliveries responsibly</li>
              <li>Follow traffic laws</li>
              <li>Maintain professionalism</li>
              <li>Ensure package safety</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">3. Earnings & Payouts</h3>
            <p className="text-gray-600">
              Includes fares, incentives, and may include deductions.
            </p>

            <h3 className="font-semibold mt-4 mb-2">4. Performance Management</h3>
            <p className="text-gray-600">
              Poor performance may lead to deactivation.
            </p>

            <h3 className="font-semibold mt-4 mb-2">5. Prohibited Conduct</h3>
            <p className="text-gray-600">
              Fraud, misuse, illegal deliveries strictly prohibited.
            </p>

            <h3 className="font-semibold mt-4 mb-2">6. Liability & Risk</h3>
            <p className="text-gray-600">
              Riders are responsible for safety and compliance.
            </p>

            <h3 className="font-semibold mt-4 mb-2">7. Termination</h3>
            <p className="text-gray-600">
              Zipto may deactivate accounts without notice for violations.
            </p>
          </section>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-16 text-sm">
          By using Zipto, you agree to these Terms & Conditions.
        </p>

      </div>
    </>
  );
}
