import { useState } from "react";

const customerSections = [
  {
    title: "1. Introduction",
    content:
      "This Privacy Policy explains how Zipto Hyperlogistics Pvt. Ltd. collects, uses, processes, and protects your data when you use our platform including customer app, rider app, and website services. By using the platform, you consent to this policy.",
  },
  {
    title: "2. Information We Collect",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Personal Information:</strong> Full name, mobile number, email, profile details</li>
        <li><strong>Location Data:</strong> Real-time GPS location for tracking and delivery services</li>
        <li><strong>Transaction Data:</strong> Pickup/delivery address, order details, payment info</li>
        <li><strong>Device Data:</strong> IP address, device type, app usage, logs</li>
      </ul>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Provide and improve services</li>
        <li>Match customers with delivery partners</li>
        <li>Process orders and payments</li>
        <li>Enable real-time tracking</li>
        <li>Send notifications and updates</li>
        <li>Prevent fraud and ensure safety</li>
      </ul>
    ),
  },
  {
    title: "4. Data Sharing & Disclosure",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Delivery partners (for fulfilling orders)</li>
        <li>Payment providers (secure transactions)</li>
        <li>Service providers (analytics, cloud, support)</li>
        <li>Government authorities (if required by law)</li>
        <li><strong>We do NOT sell your personal data</strong></li>
      </ul>
    ),
  },
  {
    title: "5. Data Storage & Security",
    content:
      "We use industry-standard security practices such as encryption, secure servers, and access control. However, no system is completely secure and users share data at their own risk.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain your data as long as your account is active or as required by legal and compliance obligations. Data may be deleted or anonymized when no longer needed.",
  },
  {
    title: "7. User Rights",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Access your data</li>
        <li>Update or correct information</li>
        <li>Request account deletion</li>
        <li>Withdraw consent</li>
      </ul>
    ),
  },
  {
    title: "8. Cookies & Tracking",
    content:
      "We use cookies and similar technologies to improve user experience, analyze performance, and personalize services.",
  },
  {
    title: "9. Third-Party Services",
    content:
      "Our platform may include third-party integrations. Zipto is not responsible for their privacy practices.",
  },
  {
    title: "10. Children's Privacy",
    content:
      "Zipto services are not intended for users under 18 years of age.",
  },
  {
    title: "11. Changes to Policy",
    content:
      "We may update this Privacy Policy at any time. Users will be notified of significant changes via app or email.",
  },
  {
    title: "12. Contact Information",
    content: (
      <div>
        <p>Email: support@ridezipto.com</p>
        <p>Location: Bhubaneswar, Odisha, India</p>
      </div>
    ),
  },
];

const riderSections = [
  {
    title: "1. Information We Collect",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Personal details (name, phone, email)</li>
        <li>Driving license & vehicle documents</li>
        <li>Bank & payout details</li>
        <li>Live and background location tracking</li>
        <li>Device and usage data</li>
      </ul>
    ),
  },
  {
    title: "2. Background Location Tracking ⚠️",
    content:
      "Zipto Rider App collects continuous background location data even when the app is closed. This is required for order allocation, live tracking, fraud prevention, and safety monitoring.",
  },
  {
    title: "3. How We Use Data",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Order assignment and delivery tracking</li>
        <li>Processing payouts</li>
        <li>Improving platform performance</li>
        <li>Ensuring safety and fraud prevention</li>
      </ul>
    ),
  },
  {
    title: "4. Data Sharing",
    content:
      "We may share data with service providers, payment partners, and authorities if required by law. We do not sell personal data.",
  },
  {
    title: "5. Data Retention",
    content:
      "We retain rider data as long as required for platform operations and legal compliance.",
  },
  {
    title: "6. Sensitive Document Handling",
    content:
      "Documents such as driving license, vehicle registration, and identity proof are securely stored and used only for verification and compliance.",
  },
  {
    title: "7. Payout & Financial Data",
    content:
      "Bank details are used only for processing payouts. We do not store sensitive credentials like OTP or PIN.",
  },
  {
    title: "8. Performance Monitoring",
    content:
      "We track acceptance rate, cancellation rate, and delivery performance to improve efficiency and fairness.",
  },
  {
    title: "9. Security",
    content:
      "We implement security measures but cannot guarantee absolute protection.",
  },
  {
    title: "10. User Rights",
    content:
      "Riders can request access, correction, or deletion of their data.",
  },
  {
    title: "11. Contact",
    content: (
      <div>
        <p>Email: rider.support@ridezipto.com</p>
        <p>Location: Bhubaneswar, Odisha</p>
      </div>
    ),
  },
];

const PolicyCard = ({ type, title, intro, sections }) => {
  const isCustomer = type === "customer";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
      <span
        className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-md mb-4 ${
          isCustomer ? "bg-blue-50 text-blue-800" : "bg-green-50 text-green-800"
        }`}
      >
        {isCustomer ? "Customer" : "Rider"}
      </span>
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
      <p className="text-xs text-gray-400 mb-4">Effective April 08, 2026</p>
      <p className="text-sm text-gray-600 leading-relaxed mb-5 pb-5 border-b border-gray-100">
        {intro}
      </p>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-700 mb-1">
              {section.title}
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed">
              {typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}
            </div>
            {index < sections.length - 1 && (
              <div className="border-b border-gray-100 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const TABS = ["customer", "rider", "both"];

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mt-1">
            Zipto Hyperlogistics Pvt. Ltd. &nbsp;·&nbsp; Last updated: April 08,
            2026
          </p>
        </div>

        <div className="flex gap-2 bg-gray-100 rounded-xl p-1.5 mb-8 max-w-sm mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all capitalize ${
                activeTab === tab
                  ? "bg-white text-gray-800 shadow-sm border border-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "both" ? "View both" : tab}
            </button>
          ))}
        </div>

        {activeTab === "customer" && (
          <PolicyCard
            type="customer"
            title="Customer Privacy Policy"
            intro="This Privacy Policy explains how Zipto Hyperlogistics Pvt. Ltd. collects, uses, and protects your information when you use the Zipto application."
            sections={customerSections}
          />
        )}

        {activeTab === "rider" && (
          <PolicyCard
            type="rider"
            title="Rider Privacy Policy"
            intro="This Privacy Policy describes the policies and procedures of Zipto Hyperlogistics Pvt. Ltd. on the collection, use and disclosure of information when you use the Zipto Rider Onboarding application."
            sections={riderSections}
          />
        )}

        {activeTab === "both" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PolicyCard
              type="customer"
              title="Customer Privacy Policy"
              intro="This Privacy Policy explains how Zipto Hyperlogistics Pvt. Ltd. collects, uses, and protects your information when you use the Zipto application."
              sections={customerSections}
            />
            <PolicyCard
              type="rider"
              title="Rider Privacy Policy"
              intro="This Privacy Policy describes the policies and procedures of Zipto Hyperlogistics Pvt. Ltd. on the collection, use and disclosure of information when you use the Zipto Rider Onboarding application."
              sections={riderSections}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
