import React, { useEffect } from "react";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
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
            Privacy Policy
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
              This Privacy Policy describes how Zipto Hyperlogistics Pvt. Ltd. (“Zipto”, “Company”, “We”, “Us”) collects, uses, processes, and protects your information when you use our platform, including:
            </p>

            <ul className="list-disc pl-6 mt-3 text-gray-600 space-y-1">
              <li>Zipto Customer Application</li>
              <li>Zipto Rider Application</li>
              <li>Website and related services</li>
            </ul>

            <p className="text-gray-600 mt-3">
              By using the platform, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>

            <h3 className="font-semibold mt-4 mb-1">A. Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Profile details</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">B. Location Data (VERY IMPORTANT)</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Real-time GPS location</li>
              <li>Background location (for riders)</li>
            </ul>

            <p className="mt-3 font-medium">📍 This is used for:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Order tracking</li>
              <li>Delivery assignment</li>
              <li>Route optimization</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">C. Transaction Information</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Pickup & delivery addresses</li>
              <li>Order details</li>
              <li>Payment information (UPI / COD / Cash)</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">D. Device & Technical Data</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Device type</li>
              <li>IP address</li>
              <li>App usage data</li>
              <li>Log data</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">E. Rider-Specific Data</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Driving license</li>
              <li>Vehicle documents</li>
              <li>Bank / payout details</li>
              <li>Live location tracking</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide and improve services</li>
              <li>Match customers with delivery partners</li>
              <li>Process orders and payments</li>
              <li>Enable real-time tracking</li>
              <li>Send notifications & updates</li>
              <li>Prevent fraud and abuse</li>
              <li>Ensure platform safety</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Sharing & Disclosure</h2>

            <p className="mb-2">We may share information with:</p>

            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>✔ Delivery Partners (for order fulfillment)</li>
              <li>✔ Payment Providers (for secure transactions)</li>
              <li>✔ Service Providers (analytics, cloud, support)</li>
              <li>✔ Government Authorities (if required by law)</li>
            </ul>

            <p className="mt-3 font-medium">
              ⚠️ We do NOT sell your personal data to third parties.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Storage & Security</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Encryption</li>
              <li>Secure servers</li>
              <li>Access control</li>
            </ul>

            <p className="mt-3 text-gray-600">
              However, no system is 100% secure. Users share data at their own risk.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>As long as your account is active</li>
              <li>As required for legal and compliance purposes</li>
            </ul>

            <p className="mt-3 text-gray-600">
              We may delete or anonymize data when no longer required.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. User Rights</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Access your data</li>
              <li>Update or correct information</li>
              <li>Request deletion of your account</li>
              <li>Withdraw consent</li>
            </ul>

            <p className="mt-3 text-gray-600">
              Requests can be made via official support channels.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Cookies & Tracking</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Improve user experience</li>
              <li>Analyze performance</li>
              <li>Personalize services</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Third-Party Services</h2>
            <p className="text-gray-600">
              Zipto may contain integrations with third-party services. We are not responsible for their privacy practices.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Children’s Privacy</h2>
            <p className="text-gray-600">
              Zipto services are not intended for individuals under 18 years of age.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Changes to Policy</h2>
            <p className="text-gray-600">
              Zipto reserves the right to update this Privacy Policy at any time. Users will be notified of significant changes via app or email.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Contact Information</h2>
            <p className="text-gray-600">📧 Email: support@zipto.in</p>
            <p className="text-gray-600">📍 Location: Bhubaneswar, Odisha, India</p>
          </section>

          {/* RIDER ADDENDUM */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">
              🛵 Rider Privacy Addendum (Important)
            </h2>

            <h3 className="font-semibold mb-2">1. Background Location Tracking</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Order allocation</li>
              <li>Live tracking</li>
              <li>Fraud prevention</li>
              <li>Safety monitoring</li>
            </ul>
            <p className="mt-2 font-medium">
              ⚠️ This is mandatory for platform functionality.
            </p>

            <h3 className="font-semibold mt-6 mb-2">2. Sensitive Document Handling</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Driving License</li>
              <li>Vehicle Registration</li>
              <li>Identity Proof</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2">3. Payout & Financial Data</h3>
            <p className="text-gray-600">
              Used to process rider earnings and manage payouts. We do not store sensitive banking credentials like OTP or PIN.
            </p>

            <h3 className="font-semibold mt-6 mb-2">4. Performance & Analytics</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Acceptance rate</li>
              <li>Cancellation rate</li>
              <li>Delivery performance</li>
            </ul>
          </section>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-16 text-sm">
          By using Zipto, you agree to this Privacy Policy.
        </p>

      </div>
    </>
  );
}
