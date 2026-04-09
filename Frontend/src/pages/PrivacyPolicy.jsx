import React, { useEffect } from "react";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      text: `This Privacy Policy explains how Zipto Hyperlogistics Pvt. Ltd. collects, uses, processes, and protects your personal data when you use the Zipto platform. By accessing or using our services, you agree to this Privacy Policy.`,
    },
    {
      title: "2. Information We Collect",
      text: `We collect personal information such as your name, phone number, email, and profile details. We also collect IMPORTANT location data (real-time GPS) for delivery tracking, transaction data including pickup and drop details, and device data such as IP address and usage logs.`,
    },
    {
      title: "3. Use of Information",
      text: `Your data is used to provide and improve services, match you with delivery partners, process orders and payments, enable real-time tracking, send notifications, and prevent fraud or misuse.`,
    },
    {
      title: "4. Data Sharing & Disclosure",
      text: `We may share your data with delivery partners, payment providers, and service providers for operational purposes. We may also disclose data if required by law. We do NOT sell your personal data.`,
    },
    {
      title: "5. Data Storage & Security",
      text: `We use industry-standard security practices such as encryption and secure servers to protect your data. However, no system is completely secure and data sharing is at your own risk.`,
    },
    {
      title: "6. Data Retention",
      text: `We retain your data as long as your account is active or as required by legal obligations. Data may be deleted or anonymized when no longer required.`,
    },
    {
      title: "7. User Rights",
      text: `You have the right to access, update, or delete your data, and withdraw consent where applicable.`,
    },
    {
      title: "8. Cookies & Tracking",
      text: `We use cookies and similar technologies to enhance user experience, analyze performance, and personalize services.`,
    },
    {
      title: "9. Third-Party Services",
      text: `Our platform may include third-party integrations. Zipto is not responsible for the privacy practices of these services.`,
    },
    {
      title: "10. Children's Privacy",
      text: `Zipto services are not intended for users under 18 years of age.`,
    },
    {
      title: "11. Changes to Policy",
      text: `We may update this Privacy Policy from time to time. Users will be notified of significant changes.`,
    },
  ];

  const riderSections = [
    {
      title: "1. Information We Collect",
      text: `We collect personal details, vehicle documents, bank details, device data, and live as well as background location data.`,
    },
    {
      title: "2. Background Location Tracking ⚠️",
      text: `Zipto Rider App collects continuous background location data even when the app is closed or not in use. This is mandatory for order allocation, live tracking, fraud prevention, and safety monitoring.`,
    },
    {
      title: "3. Use of Data",
      text: `Data is used for order assignment, delivery tracking, payout processing, performance monitoring, and ensuring platform safety.`,
    },
    {
      title: "4. Data Sharing",
      text: `We may share rider data with service providers, payment partners, and authorities if required by law. We do not sell personal data.`,
    },
    {
      title: "5. Data Retention",
      text: `Rider data is retained as long as required for operations and legal compliance.`,
    },
    {
      title: "6. Security",
      text: `We implement security measures but cannot guarantee absolute protection.`,
    },
    {
      title: "7. Rider Rights",
      text: `Riders can request access, correction, or deletion of their data.`,
    },
  ];

  return (
    <>
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-orange-500 to-blue-500 py-16 px-6">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={ziptoLogo} alt="Zipto Logo" className="h-25 w-25 rounded-lg" />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-800 mt-3">
            Last updated: April 2026
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-900 text-sm mb-6 flex items-center gap-3">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
            ℹ️
          </div>
          <p>
            Your privacy is important to us. Please review this policy carefully to understand how your data is handled.
          </p>
        </div>

        {/* CUSTOMER POLICY */}
        <div className="max-w-5xl mx-auto grid gap-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            ZIPTO CUSTOMER APPLICATION
          </h2>

          {sections.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIDER POLICY */}
        <div className="max-w-5xl mx-auto grid gap-6 mt-16">
          <h2 className="text-2xl font-bold text-center">
            ZIPTO RIDER APPLICATION
          </h2>

          {riderSections.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl p-8 text-center">
          <FaEnvelope className="text-3xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="opacity-90 mb-4">
            For any privacy-related queries, contact us.
          </p>
          <p>Email: support@ridezipto.com</p>
          <p>Rider Email: rider.support@ridezipto.com</p>
          <p>Bhubaneswar, Odisha</p>
        </div>

        <p className="text-center text-gray-800 mt-10 text-sm">
          🛡️ By using Zipto, you agree to this Privacy Policy.
        </p>

      </div>
    </>
  );
}
