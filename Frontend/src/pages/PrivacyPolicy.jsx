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

        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-8 shadow-sm space-y-10 text-gray-800">

          {/* ================= CUSTOMER POLICY ================= */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              1. ZIPTO (CUSTOMER APP) – PRIVACY POLICY
            </h2>

            <p className="font-semibold">🔐 ZIPTO PRIVACY POLICY</p>

            <h3 className="mt-4 font-semibold">1. INTRODUCTION</h3>
            <p>This Privacy Policy describes how Zipto Hyperlogistics Pvt. Ltd. (“Zipto”, “Company”, “We”, “Us”) collects, uses, and protects your information when you use the Zipto Customer Application, website, and related services.</p>
            <p className="mt-2">By using Zipto, you explicitly consent to the collection and use of your data as described in this policy.</p>

            <h3 className="mt-4 font-semibold">2. COMPANY DETAILS</h3>
            <ul className="list-disc pl-6">
              <li>Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED.</li>
              <li>Registered Office: 781,saheed Ngr,780, Maharishi College Road, Saheed Nagar, Khorda, Bhubaneswar, Orissa, India, 751007</li>
              <li>Location: Bhubaneswar, Odisha, India</li>
            </ul>

            <h3 className="mt-4 font-semibold">3. INFORMATION WE COLLECT</h3>

            <p className="font-medium mt-2">A. Personal Information</p>
            <ul className="list-disc pl-6">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
            </ul>

            <p className="font-medium mt-2">B. Location Data</p>
            <p>We collect location data to:</p>
            <ul className="list-disc pl-6">
              <li>Enable pickup and delivery services</li>
              <li>Provide real-time tracking</li>
              <li>Improve service accuracy</li>
            </ul>
            <p>📍 Location is collected only when required for active services.</p>

            <p className="font-medium mt-2">C. Order & Transaction Data</p>
            <ul className="list-disc pl-6">
              <li>Pickup and delivery addresses</li>
              <li>Order details</li>
              <li>Payment method (UPI, Cash, COD)</li>
            </ul>

            <p className="font-medium mt-2">D. Device Information</p>
            <ul className="list-disc pl-6">
              <li>Device type</li>
              <li>IP address</li>
              <li>App usage data</li>
            </ul>

            <h3 className="mt-4 font-semibold">4. HOW WE USE YOUR INFORMATION</h3>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6">
              <li>Provide delivery services</li>
              <li>Connect you with delivery partners</li>
              <li>Process orders and payments</li>
              <li>Send updates and notifications</li>
              <li>Improve user experience</li>
            </ul>

            <h3 className="mt-4 font-semibold">5. DATA SHARING</h3>
            <p>We may share data with:</p>
            <ul className="list-disc pl-6">
              <li>Delivery partners (for order fulfillment)</li>
              <li>Payment providers (for transactions)</li>
              <li>Service providers (analytics, support)</li>
              <li>Authorities (if required by law)</li>
            </ul>
            <p className="mt-2 font-medium">⚠️ We do NOT sell your personal data.</p>

            <h3 className="mt-4 font-semibold">6. PAYMENT SECURITY</h3>
            <p>Payments are processed via secure third-party gateways.</p>
            <p>Zipto does NOT store:</p>
            <ul className="list-disc pl-6">
              <li>Card details</li>
              <li>UPI PIN</li>
              <li>OTP</li>
            </ul>

            <h3 className="mt-4 font-semibold">7. DATA RETENTION</h3>
            <p>We retain data:</p>
            <ul className="list-disc pl-6">
              <li>As long as your account is active</li>
              <li>As required by law</li>
            </ul>

            <h3 className="mt-4 font-semibold">8. USER RIGHTS</h3>
            <p>You may:</p>
            <ul className="list-disc pl-6">
              <li>Access your data</li>
              <li>Update your information</li>
              <li>Request account deletion</li>
            </ul>
            <p>📩 Email: support@ridezipto.com</p>

            <h3 className="mt-4 font-semibold">9. ACCOUNT DELETION</h3>
            <p>Users can request deletion via email.</p>
            <p>Data will be deleted within a reasonable timeframe, subject to legal requirements.</p>

            <h3 className="mt-4 font-semibold">10. COOKIES</h3>
            <p>We may use cookies to improve performance and user experience.</p>

            <h3 className="mt-4 font-semibold">11. CHILDREN’S PRIVACY</h3>
            <p>Zipto is not intended for users under 18 years.</p>

            <h3 className="mt-4 font-semibold">12. CHANGES TO POLICY</h3>
            <p>We may update this policy at any time.</p>

            <h3 className="mt-4 font-semibold">13. CONTACT</h3>
            <p>Email: support@ridezipto.com</p>
            <p>Location: Bhubaneswar, Odisha, India</p>

            <h3 className="mt-4 font-semibold">14. GRIEVANCE OFFICER</h3>
            <p>Zipto Support Team</p>
            <p>Response Time: Within 48 hours</p>

            <p className="mt-4">© 2026 Zipto Hyperlogistics Pvt. Ltd.</p>
          </section>

          {/* ================= RIDER POLICY ================= */}
          <section className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">
              ZIPTO RIDER PRIVACY POLICY
            </h2>

            <p className="text-sm text-gray-500">
              Effective Date: 11 April 2026 <br />
              Last Updated: 11 April 2026
            </p>

            <h3 className="mt-4 font-semibold">1. INTRODUCTION</h3>
            <p>This Privacy Policy applies to the Zipto Rider Onboarding Application, operated by Zipto Hyperlogistics Pvt. Ltd..</p>
            <p>This app is intended for delivery partners (“Riders”) to register and operate on the Zipto platform.</p>
            <p>By using this app, you consent to data collection practices described below.</p>

            <h3 className="mt-4 font-semibold">2. COMPANY DETAILS</h3>
            <ul className="list-disc pl-6">
              <li>Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED.</li>
              <li>Registered Office: 781,saheed Ngr,780, Maharishi College Road, Saheed Nagar, Khorda, Bhubaneswar, Orissa, India, 751007</li>
              <li>Location: Bhubaneswar, Odisha, India</li>
            </ul>

            <h3 className="mt-4 font-semibold">3. INFORMATION WE COLLECT</h3>

            <p className="font-medium mt-2">A. Personal Information</p>
            <ul className="list-disc pl-6">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
            </ul>

            <p className="font-medium mt-2">B. KYC & Verification Data</p>
            <ul className="list-disc pl-6">
              <li>Driving License</li>
              <li>Vehicle Registration</li>
              <li>Identity Proof</li>
            </ul>

            <p className="font-medium mt-2">C. Financial Information</p>
            <ul className="list-disc pl-6">
              <li>Bank Account Details (for payouts)</li>
            </ul>
            <p>⚠️ We do NOT store PINs, OTPs, or sensitive banking credentials.</p>

            <p className="font-medium mt-2">D. Location Data (CRITICAL)</p>
            <p>We collect:</p>
            <ul className="list-disc pl-6">
              <li>Real-time GPS location</li>
              <li>Background location data</li>
            </ul>
            <p>📍 Used for:</p>
            <ul className="list-disc pl-6">
              <li>Order assignment</li>
              <li>Live tracking</li>
              <li>Safety monitoring</li>
              <li>Fraud prevention</li>
            </ul>
            <p>⚠️ Location may be collected even when the app is closed or not in use.</p>

            <p className="font-medium mt-2">E. Device Data</p>
            <ul className="list-disc pl-6">
              <li>Device type</li>
              <li>IP address</li>
              <li>App usage logs</li>
            </ul>

            <h3 className="mt-4 font-semibold">4. HOW WE USE DATA</h3>
            <p>We use rider data to:</p>
            <ul className="list-disc pl-6">
              <li>Verify identity</li>
              <li>Assign deliveries</li>
              <li>Process earnings</li>
              <li>Monitor performance</li>
              <li>Ensure safety and compliance</li>
            </ul>

            <h3 className="mt-4 font-semibold">5. DATA SHARING</h3>
            <p>We may share data with:</p>
            <ul className="list-disc pl-6">
              <li>Customers (limited info for delivery)</li>
              <li>Payment processors</li>
              <li>Government authorities (if required)</li>
            </ul>
            <p>We do NOT sell rider data.</p>

            <h3 className="mt-4 font-semibold">6. DATA SECURITY</h3>
            <p>We use encryption and secure systems to protect data.</p>

            <h3 className="mt-4 font-semibold">7. DATA RETENTION</h3>
            <p>Data is retained:</p>
            <ul className="list-disc pl-6">
              <li>While account is active</li>
              <li>As required by law</li>
            </ul>

            <h3 className="mt-4 font-semibold">8. RIDER RIGHTS</h3>
            <p>Riders can:</p>
            <ul className="list-disc pl-6">
              <li>Update details</li>
              <li>Request account deletion</li>
            </ul>
            <p>📩 Email: rider.support@ridezipto.com</p>

            <h3 className="mt-4 font-semibold">9. ACCOUNT DELETION</h3>
            <p>Deletion requests can be made via email.</p>

            <h3 className="mt-4 font-semibold">10. BACKGROUND LOCATION CONSENT</h3>
            <p>
              By using the app, riders agree to continuous location tracking,
              including when the app is in background or closed.
            </p>

            <h3 className="mt-4 font-semibold">11. CHANGES TO POLICY</h3>
            <p>We may update this policy periodically.</p>

            <h3 className="mt-4 font-semibold">12. CONTACT</h3>
            <p>Email: rider.support@ridezipto.com</p>
            <p>Location: Bhubaneswar, Odisha, India</p>

            <h3 className="mt-4 font-semibold">13. GRIEVANCE OFFICER</h3>
            <p>Zipto Support Team</p>
            <p>Response Time: Within 48 hours</p>

            <p className="mt-4">© 2026 Zipto Hyperlogistics Pvt. Ltd.</p>
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
