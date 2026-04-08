import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: April 08, 2026</p>

        <p className="text-gray-700">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>

        <p className="text-gray-700">
          We use Your Personal Data to provide and improve the Service. By
          using the Service, You agree to the collection and use of information
          in accordance with this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">
          Interpretation and Definitions
        </h2>

        <h3 className="font-semibold text-gray-700">Definitions</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Account:</strong> Unique account created to access our
            Service
          </li>
          <li>
            <strong>Application:</strong> Zipto Rider Onboarding
          </li>
          <li>
            <strong>Company:</strong> Zipto Hyperlogistics Pvt. Ltd.,
            Bhubaneswar, Odisha
          </li>
          <li>
            <strong>Country:</strong> India
          </li>
          <li>
            <strong>Device:</strong> Any device used to access the Service
          </li>
          <li>
            <strong>Personal Data:</strong> Information that identifies an
            individual
          </li>
          <li>
            <strong>Service:</strong> Application or Website
          </li>
          <li>
            <strong>Usage Data:</strong> Automatically collected usage data
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800">
          Information We Collect
        </h2>

        <h3 className="font-semibold text-gray-700">Personal Data</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Email address</li>
          <li>Name</li>
          <li>Phone number</li>
          <li>Address details</li>
        </ul>

        <h3 className="font-semibold text-gray-700 mt-4">Usage Data</h3>
        <p className="text-gray-700">
          Includes IP address, browser type, pages visited, time spent, and
          device info.
        </p>

        <h3 className="font-semibold text-gray-700 mt-4">App Permissions</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Location access for delivery tracking</li>
          <li>Camera & gallery for uploading images</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800">How We Use Data</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Provide and maintain services</li>
          <li>Manage user accounts</li>
          <li>Process orders and deliveries</li>
          <li>Customer support & communication</li>
          <li>Improve app performance</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800">Data Sharing</h2>
        <p className="text-gray-700">
          We do not sell your data. We may share it with service providers and
          partners only to operate our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">Data Retention</h2>
        <p className="text-gray-700">
          We retain your data only as long as necessary for legal and
          operational purposes.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">Your Rights</h2>
        <p className="text-gray-700">
          You can request to access, update, or delete your data anytime.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">Security</h2>
        <p className="text-gray-700">
          We implement reasonable security measures but cannot guarantee
          absolute security.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">
          Children&apos;s Privacy
        </h2>
        <p className="text-gray-700">
          Our service is not intended for users under 16 years of age.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">
          Changes to Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
        <ul className="text-gray-700 space-y-1">
          <li>Email: rider.support@ridezipto.com</li>
          <li>Website: https://ridezipto.com</li>
          <li>Phone: 9090029996</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
