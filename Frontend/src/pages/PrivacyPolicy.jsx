import { useState } from "react";

const customerSections = [
  {
    title: "Information we collect",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Personal information:</strong> Name, phone number, email
          address
        </li>
        <li>
          <strong>Location data:</strong> To provide delivery and tracking
          services
        </li>
        <li>
          <strong>Device information:</strong> Device type, IP address, app
          usage data
        </li>
        <li>
          <strong>Media access:</strong> Camera/photos (only when required by
          features)
        </li>
      </ul>
    ),
  },
  {
    title: "How we use your information",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>To provide and improve our services</li>
        <li>To manage your account</li>
        <li>To process orders and deliveries</li>
        <li>To communicate updates and support</li>
        <li>To ensure security and prevent fraud</li>
      </ul>
    ),
  },
  {
    title: "Permissions we use",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Location:</strong> For live tracking and delivery services
        </li>
        <li>
          <strong>Camera/storage:</strong> For uploading images when required
        </li>
      </ul>
    ),
  },
  {
    title: "Data sharing",
    content:
      "We do not sell your personal data. We may share your data with trusted service providers only to operate and improve our services.",
  },
  {
    title: "Data security",
    content:
      "We take reasonable steps to protect your information, but no method is 100% secure.",
  },
  {
    title: "Your rights",
    content:
      "You can update or delete your data by contacting us at the email below.",
  },
  {
    title: "Children's privacy",
    content: "Our services are not intended for users under 16 years of age.",
  },
  {
    title: "Changes to this policy",
    content: "We may update this Privacy Policy from time to time.",
  },
  {
    title: "Contact us",
    content: (
      <div className="space-y-1">
        <p>
          Email:{" "}
          <a
            href="mailto:support@ridezipto.com"
            className="text-blue-600 hover:underline"
          >
            support@ridezipto.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://ridezipto.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            ridezipto.com
          </a>
        </p>
        <p>Phone: 9090029996</p>
      </div>
    ),
  },
];

const riderSections = [
  {
    title: "Definitions",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Account:</strong> Unique account created to access our service
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
          <strong>Device:</strong> Any device used to access the service
        </li>
        <li>
          <strong>Personal data:</strong> Information that identifies an
          individual
        </li>
        <li>
          <strong>Usage data:</strong> Automatically collected usage data
        </li>
      </ul>
    ),
  },
  {
    title: "Information we collect",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-medium mb-1">Personal data:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email address, name, phone number, address details</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-1">Usage data:</p>
          <p>IP address, browser type, pages visited, time spent, and device info.</p>
        </div>
        <div>
          <p className="font-medium mb-1">App permissions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Location access for delivery tracking</li>
            <li>Camera &amp; gallery for uploading images</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "How we use data",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Provide and maintain services</li>
        <li>Manage user accounts</li>
        <li>Process orders and deliveries</li>
        <li>Customer support &amp; communication</li>
        <li>Improve app performance</li>
      </ul>
    ),
  },
  {
    title: "Data sharing",
    content:
      "We do not sell your data. We may share it with service providers and partners only to operate our services.",
  },
  {
    title: "Data retention",
    content:
      "We retain your data only as long as necessary for legal and operational purposes.",
  },
  {
    title: "Security",
    content:
      "We implement reasonable security measures but cannot guarantee absolute security.",
  },
  {
    title: "Your rights",
    content: "You can request to access, update, or delete your data anytime.",
  },
  {
    title: "Children's privacy",
    content: "Our service is not intended for users under 16 years of age.",
  },
  {
    title: "Changes to this policy",
    content: "We may update this Privacy Policy from time to time.",
  },
  {
    title: "Contact us",
    content: (
      <div className="space-y-1">
        <p>
          Email:{" "}
          <a
            href="mailto:rider.support@ridezipto.com"
            className="text-blue-600 hover:underline"
          >
            rider.support@ridezipto.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://ridezipto.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            ridezipto.com
          </a>
        </p>
        <p>Phone: 9090029996</p>
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
