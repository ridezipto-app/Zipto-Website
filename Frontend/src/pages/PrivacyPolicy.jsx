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
            ZIPTO PRIVACY POLICY
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Effective Date: 11 April 2026 <br />
            Last Updated: 11 April 2026
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-8 shadow-sm space-y-10 text-gray-800">

          {/* ================= CUSTOMER POLICY ================= */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              1. ZIPTO (CUSTOMER APP) – PRIVACY POLICY
            </h2>

            <h3 className="font-semibold mt-3">1. INTRODUCTION</h3>
            <p className="text-gray-600">
              This Privacy Policy describes how Zipto Hyperlogistics Pvt. Ltd.
              (“Zipto”, “Company”, “We”, “Us”) collects, uses, and protects your
              information when you use the Zipto Customer Application, website,
              and related services.
            </p>

            <p className="text-gray-600 mt-2">
              By using Zipto, you explicitly consent to the collection and use
              of your data as described in this policy.
            </p>

            <h3 className="font-semibold mt-4">2. COMPANY DETAILS</h3>
            <p className="text-gray-600">
              Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED. <br />
              Registered Office: 781, Saheed Nagar, Maharishi College Road,
              Bhubaneswar, Odisha, India - 751007 <br />
              Location: Bhubaneswar, Odisha, India
            </p>

            <h3 className="font-semibold mt-4">3. INFORMATION WE COLLECT</h3>

            <p className="font-medium mt-2">A. Personal Information</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
            </ul>

            <p className="font-medium mt-3">B. Location Data</p>
            <p className="text-gray-600">
              Used for pickup, delivery, tracking, and service accuracy.
            </p>
            <p className="text-sm mt-1">📍 Collected only during active services.</p>

            <p className="font-medium mt-3">C. Order & Transaction Data</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Pickup & delivery addresses</li>
              <li>Order details</li>
              <li>Payment method (UPI / COD / Cash)</li>
            </ul>

            <p className="font-medium mt-3">D. Device Information</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Device type</li>
              <li>IP address</li>
              <li>App usage data</li>
            </ul>

            <h3 className="font-semibold mt-4">4. HOW WE USE YOUR INFORMATION</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide delivery services</li>
              <li>Connect with delivery partners</li>
              <li>Process orders & payments</li>
              <li>Send updates & notifications</li>
              <li>Improve user experience</li>
            </ul>

            <h3 className="font-semibold mt-4">5. DATA SHARING</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Delivery partners</li>
              <li>Payment providers</li>
              <li>Service providers</li>
              <li>Authorities (if required)</li>
            </ul>
            <p className="mt-2 font-medium">
              ⚠️ We do NOT sell your personal data.
            </p>

            <h3 className="font-semibold mt-4">6. PAYMENT SECURITY</h3>
            <p className="text-gray-600">
              Payments are processed via secure third-party gateways. Zipto does
              NOT store card details, UPI PIN, or OTP.
            </p>

            <h3 className="font-semibold mt-4">7. DATA RETENTION</h3>
            <p className="text-gray-600">
              Data is retained while your account is active or as required by law.
            </p>

            <h3 className="font-semibold mt-4">8. USER RIGHTS</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Access data</li>
              <li>Update information</li>
              <li>Request deletion</li>
            </ul>
            <p className="mt-2">📩 support@ridezipto.com</p>

            <h3 className="font-semibold mt-4">9. ACCOUNT DELETION</h3>
            <p className="text-gray-600">
              Requests will be processed within a reasonable timeframe.
            </p>

            <h3 className="font-semibold mt-4">10. COOKIES</h3>
            <p className="text-gray-600">
              Used for improving performance and user experience.
            </p>

            <h3 className="font-semibold mt-4">11. CHILDREN’S PRIVACY</h3>
            <p className="text-gray-600">
              Not intended for users under 18.
            </p>

            <h3 className="font-semibold mt-4">12. CHANGES TO POLICY</h3>
            <p className="text-gray-600">
              Policy may be updated at any time.
            </p>

            <h3 className="font-semibold mt-4">13. CONTACT</h3>
            <p>Email: support@ridezipto.com</p>

            <h3 className="font-semibold mt-4">14. GRIEVANCE OFFICER</h3>
            <p>Zipto Support Team (Response within 48 hours)</p>
          </section>

          {/* ================= RIDER POLICY ================= */}
          <section className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">
              ZIPTO RIDER PRIVACY POLICY
            </h2>

            <h3 className="font-semibold">1. INTRODUCTION</h3>
            <p className="text-gray-600">
              This applies to the Rider Onboarding Application used by delivery partners.
            </p>

            <h3 className="font-semibold mt-3">2. COMPANY DETAILS</h3>
            <p className="text-gray-600">
              ZIPTO HYPERLOGISTICS PRIVATE LIMITED <br />
              Bhubaneswar, Odisha, India
            </p>

            <h3 className="font-semibold mt-3">3. INFORMATION WE COLLECT</h3>

            <p className="font-medium">A. Personal Info</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Name, Phone, Email</li>
            </ul>

            <p className="font-medium mt-2">B. KYC Data</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Driving License</li>
              <li>Vehicle Documents</li>
              <li>ID Proof</li>
            </ul>

            <p className="font-medium mt-2">C. Financial</p>
            <p className="text-gray-600">
              Bank details for payouts (No PIN/OTP stored)
            </p>

            <p className="font-medium mt-2">D. Location (CRITICAL)</p>
            <p className="text-gray-600">
              Real-time & background tracking for deliveries, safety, fraud prevention.
            </p>

            <p className="font-medium mt-2">E. Device Data</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Device, IP, logs</li>
            </ul>

            <h3 className="font-semibold mt-3">4. HOW WE USE DATA</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Verify identity</li>
              <li>Assign deliveries</li>
              <li>Process earnings</li>
              <li>Ensure safety</li>
            </ul>

            <h3 className="font-semibold mt-3">5. DATA SHARING</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Customers</li>
              <li>Payment processors</li>
              <li>Authorities</li>
            </ul>

            <h3 className="font-semibold mt-3">6. DATA SECURITY</h3>
            <p>We use encryption & secure systems.</p>

            <h3 className="font-semibold mt-3">7. DATA RETENTION</h3>
            <p>While active or legally required.</p>

            <h3 className="font-semibold mt-3">8. RIDER RIGHTS</h3>
            <p>📩 rider.support@ridezipto.com</p>

            <h3 className="font-semibold mt-3">9. BACKGROUND LOCATION CONSENT</h3>
            <p className="text-gray-600">
              Continuous tracking is required even when app is closed.
            </p>

            <h3 className="font-semibold mt-3">10. CHANGES</h3>
            <p>Policy may be updated.</p>

            <h3 className="font-semibold mt-3">11. CONTACT</h3>
            <p>rider.support@ridezipto.com</p>

            <h3 className="font-semibold mt-3">12. GRIEVANCE</h3>
            <p>Response within 48 hours</p>
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
