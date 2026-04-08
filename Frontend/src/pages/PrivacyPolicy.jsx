import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Last updated: April 08, 2026
        </p>

        <p className="text-gray-700 mb-6">
          This Privacy Policy explains how Zipto Hyperlogistics Pvt. Ltd.
          (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
          and protects your information when you use our application{" "}
          <span className="font-semibold">Zipto</span>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Information We Collect
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, phone number, email
            address
          </li>
          <li>
            <strong>Location Data:</strong> To provide delivery and tracking
            services
          </li>
          <li>
            <strong>Device Information:</strong> Device type, IP address, app
            usage data
          </li>
          <li>
            <strong>Media Access:</strong> Camera/photos (only when required by
            features)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>To provide and improve our services</li>
          <li>To manage your account</li>
          <li>To process orders and deliveries</li>
          <li>To communicate updates and support</li>
          <li>To ensure security and prevent fraud</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Permissions We Use
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <strong>Location:</strong> For live tracking and delivery services
          </li>
          <li>
            <strong>Camera/Storage:</strong> For uploading images when required
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Data Sharing
        </h2>
        <p className="text-gray-700">
          We do not sell your personal data. We may share your data with
          trusted service providers only to operate and improve our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Data Security
        </h2>
        <p className="text-gray-700">
          We take reasonable steps to protect your information, but no method
          is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Your Rights
        </h2>
        <p className="text-gray-700">
          You can update or delete your data by contacting us at the email
          below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Children&apos;s Privacy
        </h2>
        <p className="text-gray-700">
          Our services are not intended for users under 16 years of age.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Changes to This Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-700">Email: support@ridezipto.com</p>
        <p className="text-gray-700">Website: https://ridezipto.com</p>
        <p className="text-gray-700">Phone: 9090029996</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
