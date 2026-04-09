import React from "react";
import { FaCheckCircle, FaEnvelope, FaMotorcycle } from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TermsConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const sections = [
  {
    title: "1. Introduction",
    text: `These Terms & Conditions constitute a legally binding agreement between you and Zipto Hyperlogistics Pvt. Ltd. By using the Zipto platform, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.`,
  },
  {
    title: "2. Platform Nature",
    text: `Zipto is a technology-enabled logistics marketplace connecting customers, businesses, and independent delivery partners. Zipto does not provide transportation services directly; all deliveries are fulfilled by third-party partners.`,
  },
  {
    title: "3. Scope of Services",
    text: `Zipto facilitates on-demand services including food delivery, medicine delivery, parcel transport, hyperlocal logistics, and last-mile delivery using vehicles like bikes, autos, pickups, and mini trucks.`,
  },
  {
    title: "4. User Representations",
    text: `You confirm that you are at least 18 years old, legally capable of entering a contract, and that all information provided by you is accurate and complete.`,
  },
  {
    title: "5. User Obligations",
    text: `Users must provide accurate delivery details, ensure proper packaging, and must not send illegal or hazardous goods. You are solely responsible for the shipment contents.`,
  },
  {
    title: "6. Pricing & Payments",
    text: `Pricing is dynamic based on distance, demand, and service type. Charges are shown before order confirmation. Payments may be made via UPI, Cash, or COD. Zipto may update pricing at any time.`,
  },
  {
    title: "7. Cancellation Policy",
    text: `Free cancellation is allowed before partner assignment. After assignment, charges apply. Cancellation is not allowed after pickup. Zipto may cancel orders due to safety or policy violations.`,
  },
  {
    title: "8. Refund Policy",
    text: `Refunds are applicable only for failed transactions, duplicate payments, or cancellations by Zipto. No refunds for incorrect address, customer unavailability, or post-pickup cancellations. Processing time: 5–7 business days.`,
  },
  {
    title: "9. Prohibited Items",
    text: `Users must not send illegal (drugs, weapons), hazardous (flammable, toxic), or restricted items (cash, valuables, alcohol). Violations may lead to account suspension and legal action.`,
  },
  {
    title: "10. Limitation of Liability",
    text: `Zipto is not liable for indirect damages, delays, improper packaging losses, or actions of delivery partners. Services are provided on an "as-is" basis.`,
  },
  {
    title: "11. Indemnification",
    text: `You agree to indemnify Zipto against claims, damages, or legal costs arising from misuse, violations, or illegal shipments.`,
  },
  {
    title: "12. Intellectual Property",
    text: `All content including logo, design, and technology belongs to Zipto. Unauthorized use is strictly prohibited.`,
  },
  {
    title: "13. Account Suspension",
    text: `Zipto may suspend or terminate accounts involved in fraud, abuse, or policy violations.`,
  },
  {
    title: "14. Force Majeure",
    text: `Zipto is not responsible for delays or failures due to events beyond control such as natural disasters, government actions, or network failures.`,
  },
  {
    title: "15. Governing Law",
    text: `These Terms are governed by the laws of India. Courts in Bhubaneswar, Odisha shall have exclusive jurisdiction.`,
  },
];

const riderSections = [
  {
    title: "1. Independent Contractor Status",
    text: `Delivery partners operate as independent contractors. This agreement does not create employment, partnership, or agency relationships.`,
  },
  {
    title: "2. Service Obligations",
    text: `Riders must complete deliveries responsibly, follow traffic laws, maintain professionalism, and ensure package safety.`,
  },
  {
    title: "3. Earnings & Payouts",
    text: `Earnings include base fare, distance fees, and incentives. Zipto may deduct platform fees or penalties where applicable.`,
  },
  {
    title: "4. Performance Monitoring",
    text: `Zipto may track acceptance rate, cancellations, and customer ratings. Poor performance may lead to deactivation.`,
  },
  {
    title: "5. Prohibited Conduct",
    text: `Riders must not tamper with goods, misuse customer data, accept illegal deliveries, or engage in fraud.`,
  },
  {
    title: "6. Liability & Risk",
    text: `Riders are responsible for their vehicle condition, legal compliance, and personal safety.`,
  },
  {
    title: "7. Termination",
    text: `Zipto may deactivate rider accounts without notice in cases of misconduct, fraud, or policy violations.`,
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
          <div className="flex items-center gap-3">
            <img
              src={ziptoLogo}
              alt="Zipto Logo"
              className="h-25 w-25 rounded-lg"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>

          <p className="text-gray-800 mt-3">
            Last updated: January 2026
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-900 text-sm mb-6 flex items-center gap-3">

  {/* Icon */}
  <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center">
    <span className="text-sm">ℹ️</span>
  </div>

  {/* Text */}
  <p className="leading-relaxed">
    Welcome to Zipto, operated by Zipto Hyperlogistics Pvt. Ltd. Please review all sections carefully before proceeding.
  </p>

</div>

        {/* CUSTOMER TERMS */}
        <div className="max-w-5xl mx-auto grid gap-6">

          <h2 className="text-2xl font-bold text-center mb-6">
            ZIPTO CUSTOMER APPLICATION
          </h2>

          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
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

        {/* RIDER TERMS */}
        <div className="max-w-5xl mx-auto grid gap-6 mt-16">

          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
             ZIPTO RIDER APPLICATION
          </h2>

          {riderSections.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
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

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl p-8 text-center">

          <FaEnvelope className="text-3xl mx-auto mb-4" />

          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>

          <p className="opacity-90 mb-4">
            If you have questions about this Terms & Conditions, contact us.
          </p>

          <p>Email:  legal@ridezipto.com</p>
          <p>Phone: +91 9090029996</p>
          <p> Bhubaneswar, Odisha </p>

        </div>

        <p className="text-center text-gray-800 mt-10 text-sm">
          🛡️ By using Zipto, you acknowledge that you have read this Terms & Condition.
        </p>
        

        

      </div>
    </>
  );
}
