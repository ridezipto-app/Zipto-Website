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

      <div className="min-h-screen bg-gray-50 px-6 py-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <img src={ziptoLogo} className="h-16 mx-auto mb-4 rounded" />
          <h1 className="text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Last updated: April 2026
          </p>
        </div>

        {/* SINGLE CARD */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-10 text-gray-800">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">1. INTRODUCTION</h2>
            <p className="text-gray-600">
              This Privacy Policy describes how Zipto Hyperlogistics Pvt. Ltd. (“Zipto”, “Company”, “We”, “Us”) collects, uses, processes, and protects your information when you use our platform, including:
            </p>

            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Zipto Customer Application</li>
              <li>Zipto Rider Application</li>
              <li>Website and related services</li>
            </ul>

            <p className="mt-2 text-gray-600">
              By using the platform, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">2. INFORMATION WE COLLECT</h2>

            <p className="font-semibold mt-2">A. Personal Information</p>
            <p className="text-gray-600">We may collect:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Profile details</li>
            </ul>

            <p className="font-semibold mt-4">B. Location Data (VERY IMPORTANT)</p>
            <p className="text-gray-600">We collect:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Real-time GPS location</li>
              <li>Background location (for riders)</li>
            </ul>

            <p className="mt-2 font-medium">📍 This is used for:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Order tracking</li>
              <li>Delivery assignment</li>
              <li>Route optimization</li>
            </ul>

            <p className="font-semibold mt-4">C. Transaction Information</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Pickup & delivery addresses</li>
              <li>Order details</li>
              <li>Payment information (UPI / COD / Cash)</li>
            </ul>

            <p className="font-semibold mt-4">D. Device & Technical Data</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Device type</li>
              <li>IP address</li>
              <li>App usage data</li>
              <li>Log data</li>
            </ul>

            <p className="font-semibold mt-4">E. Rider-Specific Data</p>
            <p className="text-gray-600">For Rider App:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Driving license</li>
              <li>Vehicle documents</li>
              <li>Bank / payout details</li>
              <li>Live location tracking</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">3. HOW WE USE YOUR INFORMATION</h2>
            <p className="text-gray-600">We use your data to:</p>
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
            <h2 className="text-xl font-semibold mb-2">4. DATA SHARING & DISCLOSURE</h2>
            <p>We may share information with:</p>

            <ul className="list-disc pl-6 text-gray-600">
              <li>✔ Delivery Partners (for order fulfillment)</li>
              <li>✔ Payment Providers (for secure transactions)</li>
              <li>✔ Service Providers (for analytics, cloud, support)</li>
              <li>✔ Government Authorities (if required by law</li>
            </ul>

            <p className="mt-2 font-medium">
              ⚠️ We do NOT sell your personal data to third parties.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">5. DATA STORAGE & SECURITY</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Encryption</li>
              <li>Secure servers</li>
              <li>Access control</li>
            </ul>
            <p className="mt-2 text-gray-600">
              However, no system is 100% secure. Users share data at their own risk.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">6. DATA RETENTION</h2>
            <p>We retain data:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>As long as your account is active</li>
              <li>As required for legal and compliance purposes</li>
            </ul>
            <p className="mt-2 text-gray-600">
              We may delete or anonymize data when no longer required.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">7. USER RIGHTS</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Access your data</li>
              <li>Update or correct information</li>
              <li>Request deletion of your account</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-2 text-gray-600">
              Requests can be made via official support channels.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">8. COOKIES & TRACKING</h2>
            <p>Zipto may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Improve user experience</li>
              <li>Analyze performance</li>
              <li>Personalize services</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">9. THIRD-PARTY SERVICES</h2>
            <p className="text-gray-600">
              Zipto may contain integrations with third-party services.
              We are not responsible for their privacy practices.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">10. CHILDREN’S PRIVACY</h2>
            <p className="text-gray-600">
              Zipto services are not intended for individuals under 18 years of age.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">11. CHANGES TO POLICY</h2>
            <p className="text-gray-600">
              Zipto reserves the right to update this Privacy Policy at any time.
              Users will be notified of significant changes via app or email.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">12. CONTACT INFORMATION</h2>
            <p>📧 Email: support@zipto.in</p>
            <p>📍 Location: Bhubaneswar, Odisha, India</p>
          </section>

          {/* RIDER */}
          <section className="border-t pt-6">
            <h2 className="text-xl font-bold mb-3">
              🛵 RIDER PRIVACY ADDENDUM (IMPORTANT)
            </h2>

            <h3 className="font-semibold">1. BACKGROUND LOCATION TRACKING</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Order allocation</li>
              <li>Live tracking</li>
              <li>Fraud prevention</li>
              <li>Safety monitoring</li>
            </ul>
            <p className="mt-2 font-medium">
              ⚠️ This is mandatory for platform functionality.
            </p>

            <h3 className="font-semibold mt-4">2. SENSITIVE DOCUMENT HANDLING</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Driving License</li>
              <li>Vehicle Registration</li>
              <li>Identity Proof</li>
            </ul>

            <h3 className="font-semibold mt-4">3. PAYOUT & FINANCIAL DATA</h3>
            <p className="text-gray-600">
              We collect bank/payment details to process rider earnings and manage payouts.
              We do not store sensitive banking credentials like OTP or PIN.
            </p>

            <h3 className="font-semibold mt-4">4. PERFORMANCE & ANALYTICS</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Acceptance rate</li>
              <li>Cancellation rate</li>
              <li>Delivery performance</li>
            </ul>
          </section>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-10 text-sm">
          By using Zipto, you agree to this Privacy Policy.
        </p>

      </div>
    </>
  );
}
