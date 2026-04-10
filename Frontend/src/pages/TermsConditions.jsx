import React, { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";

export default function TermsConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Last updated: April 2026
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

          {/* Intro */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            These Terms & Conditions constitute a legally binding agreement between you and 
            <strong> Zipto Hyperlogistics Pvt. Ltd.</strong> By accessing or using the Zipto platform, 
            you agree to comply with and be bound by these Terms. If you do not agree, please discontinue use immediately.
          </p>

          {/* Content */}
          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

            <div>
              <h2 className="font-semibold text-gray-800">1. Platform Nature</h2>
              <p>
                Zipto is a technology-enabled logistics marketplace connecting customers, businesses, and independent delivery partners. 
                Zipto does not directly provide transportation services; all deliveries are fulfilled by third-party partners.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">2. Scope of Services</h2>
              <p>
                Services include food delivery, medicine delivery, parcel transport, hyperlocal logistics, and last-mile delivery 
                through various vehicle categories such as bikes, autos, and mini trucks.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">3. User Eligibility</h2>
              <p>
                You must be at least 18 years old and legally capable of entering into a binding contract. 
                You agree that all information provided is accurate and complete.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">4. User Responsibilities</h2>
              <p>
                Users must provide accurate delivery details, ensure proper packaging, and must not send illegal or hazardous goods. 
                You are solely responsible for the contents of your shipment.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">5. Pricing & Payments</h2>
              <p>
                Pricing is dynamic and depends on distance, demand, and service type. Charges are displayed before order confirmation. 
                Payments may be made via UPI, Cash, or COD. Zipto reserves the right to modify pricing at any time.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">6. Cancellation Policy</h2>
              <p>
                Free cancellation is allowed before partner assignment. Charges apply after assignment. 
                Cancellation is not permitted after pickup. Zipto may cancel orders for safety or policy reasons.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">7. Refund Policy</h2>
              <p>
                Refunds apply only in cases of failed transactions, duplicate payments, or cancellations by Zipto. 
                No refunds for incorrect details or post-pickup cancellations. Processing time: 5–7 business days.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">8. Prohibited Items</h2>
              <p>
                Users must not send illegal, hazardous, or restricted items including drugs, weapons, flammable materials, 
                cash, or valuables. Violations may result in suspension and legal action.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">9. Limitation of Liability</h2>
              <p>
                Zipto is not liable for indirect damages, delays, improper packaging losses, or actions of delivery partners. 
                Services are provided on an “as-is” basis.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">10. Account Suspension</h2>
              <p>
                Zipto reserves the right to suspend or terminate accounts involved in fraud, abuse, or violations of these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Courts in Bhubaneswar, Odisha shall have exclusive jurisdiction.
              </p>
            </div>

            {/* Rider Section */}
            <div className="pt-4 border-t">
              <h2 className="font-semibold text-gray-800 mb-2">
                Rider-Specific Terms
              </h2>

              <p>
                Delivery partners operate as independent contractors and are not employees of Zipto.
              </p>

              <p className="mt-2">
                Riders must follow traffic laws, ensure safe deliveries, and maintain professional conduct at all times.
              </p>

              <p className="mt-2">
                Earnings may include base fare, distance fees, and incentives. Zipto may apply platform fees or penalties.
              </p>

              <p className="mt-2">
                Zipto may monitor performance including ratings, cancellations, and acceptance rates. 
                Poor performance may result in deactivation.
              </p>

              <p className="mt-2">
                Riders are responsible for their vehicle condition, compliance with laws, and personal safety.
              </p>
            </div>

          </div>
        </div>



        {/* Footer */}
        <p className="text-center text-gray-500 mt-8 text-xs">
          By using Zipto, you acknowledge that you have read and agreed to these Terms & Conditions.
        </p>

      </div>
    </>
  );
}
