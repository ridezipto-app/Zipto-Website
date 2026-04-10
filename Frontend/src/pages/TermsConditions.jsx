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
            <p className="text-gray-600 leading-relaxed">
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

            <p className="text-gray-600 mb-3">
              Zipto is a technology-enabled logistics marketplace that connects:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Customers</li>
              <li>Businesses</li>
              <li>Independent Delivery Partners</li>
            </ul>

            <p className="mt-4 font-medium text-gray-800">
              ⚠️ IMPORTANT:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Zipto does not provide transportation services directly</li>
              <li>All delivery services are fulfilled by independent third-party partners</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Scope of Services</h2>

            <p className="text-gray-600 mb-3">
              Zipto facilitates on-demand logistics services including:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Food delivery</li>
              <li>Medicine delivery</li>
              <li>Parcel & goods transportation</li>
              <li>Hyperlocal logistics</li>
              <li>Last-mile delivery solutions</li>
            </ul>

            <p className="mt-4 text-gray-600">
              Service vehicles may include:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
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

            <p className="text-gray-600 mb-2">
              By using Zipto, you represent that:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>You are at least 18 years of age</li>
              <li>You have legal capacity to enter into a binding contract</li>
              <li>All information provided is true, accurate, and complete</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. User Obligations</h2>

            <p className="text-gray-600 mb-2">
              You agree that you will:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Provide accurate pickup and delivery details</li>
              <li>Ensure items are securely packaged</li>
              <li>Not use the platform for unlawful or fraudulent purposes</li>
              <li>Not send prohibited or hazardous goods</li>
            </ul>

            <p className="mt-3 font-medium">
              ⚠️ You remain solely responsible for the contents of your shipment.
            </p>
          </section>

          {/* Continue same pattern for all sections... */}

          {/* Rider Section */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">
              🛵 ZIPTO RIDER TERMS (ADVANCED)
            </h2>

            <h3 className="font-semibold mb-2">
              1. Independent Contractor Status
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Delivery Partners act as independent contractors</li>
              <li>No employment, partnership, or agency relationship</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2">
              2. Service Obligations
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Complete deliveries responsibly</li>
              <li>Follow traffic laws</li>
              <li>Maintain professionalism</li>
              <li>Ensure package safety</li>
            </ul>
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
