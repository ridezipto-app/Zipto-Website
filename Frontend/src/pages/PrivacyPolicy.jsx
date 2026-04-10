import React, { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg border hover:bg-blue-50 transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 py-12 px-4">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={ziptoLogo}
            alt="Zipto Logo"
            className="h-20 w-20 rounded-lg"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Last updated: April 2026
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

          {/* Intro */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            This Privacy Policy explains how <strong>Zipto Hyperlogistics Pvt. Ltd.</strong> 
            collects, uses, processes, and protects your personal data when you use our platform, 
            including the customer application, rider application, and related services. 
            By using Zipto, you agree to the terms of this Privacy Policy.
          </p>

          {/* Sections */}
          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">1. Information We Collect</h2>
              <p>
                We collect personal information such as name, phone number, email, and profile details. 
                <strong> Location Data (IMPORTANT):</strong> We collect real-time GPS location for order tracking, 
                delivery assignment, and route optimization. We also collect transaction data (addresses, orders, payments) 
                and device data (IP address, device type, usage logs).
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">2. How We Use Your Information</h2>
              <p>
                Your information is used to provide and improve services, match customers with delivery partners, 
                process orders and payments, enable real-time tracking, send notifications, and prevent fraud or misuse.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">3. Data Sharing & Disclosure</h2>
              <p>
                We may share data with delivery partners, payment providers, and service providers for operational purposes. 
                Data may also be disclosed if required by law. <strong>We do NOT sell your personal data.</strong>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">4. Data Storage & Security</h2>
              <p>
                We implement industry-standard security measures including encryption, secure servers, and access controls. 
                However, no system can guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">5. Data Retention</h2>
              <p>
                We retain your data as long as your account is active or as required by legal obligations. 
                Data may be deleted or anonymized when no longer necessary.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">6. User Rights</h2>
              <p>
                You have the right to access, update, or correct your data, request deletion, and withdraw consent where applicable.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">7. Cookies & Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance user experience, analyze performance, and personalize services.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">8. Third-Party Services</h2>
              <p>
                Our platform may include third-party integrations. Zipto is not responsible for their privacy practices.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">9. Children's Privacy</h2>
              <p>
                Zipto services are not intended for users under 18 years of age.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-1">10. Changes to Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Users will be notified of significant changes.
              </p>
            </div>

            {/* Rider Section */}
            <div className="pt-4 border-t">
              <h2 className="font-semibold text-gray-800 mb-2">
                Rider-Specific Policy
              </h2>

              <p>
                Zipto Rider App collects personal details, vehicle documents, bank details, and device data.
              </p>

              <p className="mt-2">
                <strong>Background Location Tracking (MANDATORY):</strong> The rider app collects continuous 
                background location data even when the app is closed or not in use. This is required for 
                order allocation, live tracking, fraud prevention, and safety monitoring.
              </p>

              <p className="mt-2">
                Rider data is used for delivery tracking, payout processing, performance monitoring, and safety enforcement. 
                Data may be shared with service providers and authorities if required by law.
              </p>
            </div>

          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-8 bg-white border border-gray-200 rounded-xl p-6 text-center">
          <FaEnvelope className="text-xl mx-auto mb-2 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-sm text-gray-600">
            For any privacy-related queries:
          </p>
          <p className="text-sm mt-2">support@ridezipto.com</p>
          <p className="text-sm">rider.support@ridezipto.com</p>
          <p className="text-sm mt-1">Bhubaneswar, Odisha, India</p>
          <p className="text-xs text-gray-400 mt-2">Response Time: 24–48 hours</p>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8 text-xs">
          By using Zipto, you agree to this Privacy Policy.
        </p>

      </div>
    </>
  );
}
