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
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Last updated: April 2026
          </p>
        </div>

        {/* SINGLE CARD */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-10 text-gray-800">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
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
            <h2 className="text-xl font-semibold mb-2">2. Platform Nature</h2>
            <p className="text-gray-600">Zipto is a technology-enabled logistics marketplace that connects:</p>

            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Customers</li>
              <li>Businesses</li>
              <li>Independent Delivery Partners</li>
            </ul>

            <p className="mt-3 font-medium">⚠️ IMPORTANT:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Zipto does not provide transportation services directly.</li>
              <li>All delivery services are fulfilled by independent third-party partners.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Scope of Services</h2>

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
            <h2 className="text-xl font-semibold mb-2">4. User Representations & Warranties</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>You are at least 18 years of age</li>
              <li>You have legal capacity to enter into a binding contract</li>
              <li>All information provided is true, accurate, and complete</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">5. User Obligations</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide accurate pickup and delivery details</li>
              <li>Ensure items are securely packaged</li>
              <li>Not use the platform for unlawful or fraudulent purposes</li>
              <li>Not send prohibited or hazardous goods</li>
            </ul>
            <p className="mt-2 font-medium">
              ⚠️ You remain solely responsible for the contents of your shipment.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Pricing & Payments</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Prices are dynamically determined</li>
              <li>Charges shown before confirmation</li>
              <li>UPI / Cash / COD accepted</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Cancellation Policy</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Before assignment: Free</li>
              <li>After assignment: Charges apply</li>
              <li>After pickup: ❌ Not allowed</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">8. Refund Policy</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Failed transactions</li>
              <li>Duplicate payments</li>
              <li>Cancelled by Zipto</li>
            </ul>
            <p className="mt-2">⏱ 5–7 business days</p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">9. Prohibited Items</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Illegal goods</li>
              <li>Hazardous materials</li>
              <li>Restricted items (cash, alcohol, etc.)</li>
            </ul>
          </section>

          {/* 10–15 (compact for readability) */}
          <section>
            <h2 className="text-xl font-semibold mb-2">10–15. Legal Terms</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Limitation of liability applies</li>
              <li>Users indemnify Zipto</li>
              <li>All IP belongs to Zipto</li>
              <li>Accounts may be suspended</li>
              <li>Force majeure applies</li>
              <li>Jurisdiction: Bhubaneswar, India</li>
            </ul>
          </section>

          {/* RIDER */}
          <section className="border-t pt-6">
            <h2 className="text-xl font-bold mb-3">
              🛵 Rider Terms (Advanced)
            </h2>

            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Independent contractor (no employment)</li>
              <li>Must follow laws & complete deliveries</li>
              <li>Earnings include fares & incentives</li>
              <li>Performance is monitored</li>
              <li>Fraud or misconduct → deactivation</li>
              <li>Riders responsible for safety & vehicle</li>
            </ul>
          </section>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-10 text-sm">
          By using Zipto, you agree to these Terms & Conditions.
        </p>

      </div>
    </>
  );
}
