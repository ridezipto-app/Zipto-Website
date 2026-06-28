import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import riderlogo from "../assets/rider_logo.png"; // adjust path if needed
const sections = [
  {
    id: "introduction",
    title: "Introduction",
    number: "01",
    content: (
      <>
        <p>
          This Privacy Policy explains how <strong>Zipto Hyperlogistics Private Limited</strong>{" "}
          ("bookfleet", "Company", "We", "Us", "Our") collects, uses, processes, stores, and
          protects information of delivery partners ("Riders") using the bookfleet Rider
          Application and related services.
        </p>
        <p className="mt-3">
          The Rider App is designed to onboard and manage independent delivery partners
          who perform pickup and delivery services through the bookfleet platform.
        </p>
        <div className="notice-pill mt-4">
          ✅ By registering or using the Rider App, you agree to this Privacy Policy.
        </div>
      </>
    ),
  },
  {
    id: "company",
    title: "Company Details",
    number: "02",
    content: (
      <ul className="info-list">
        <li><span className="label">Company Name</span><span>Zipto Hyperlogistics Private Limited</span></li>
        <li><span className="label">Registered Office</span><span>781, Saheed Nagar, Maharishi College Road, Bhubaneswar, Khordha, Odisha – 751007, India</span></li>
        <li><span className="label">Operating Location</span><span>Bhubaneswar, Odisha, India</span></li>
        <li><span className="label">Email</span><span><a href="mailto:rider.support@bookfleet.com" style={{ color: "var(--blue-600)", textDecoration: "none" }}>rider.support@bookfleet.com</a></span></li>
      </ul>
    ),
  },
  {
    id: "data-collected",
    title: "Information We Collect",
    number: "03",
    content: (
      <>
        <div className="two-col mt-3">
          <div className="col-block yes-block">
            <h4>A. Personal Information</h4>
            <ul className="dot-list">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Profile Photo (if applicable)</li>
            </ul>
          </div>
          <div className="col-block yes-block">
            <h4>B. Device & Technical Data</h4>
            <ul className="dot-list">
              <li>Device type and model</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>App usage logs</li>
            </ul>
          </div>
        </div>

        <div className="sub-block mt-4">
          <h4>C. KYC & Verification Data</h4>
          <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 8 }}>
            To ensure identity verification and regulatory compliance, we collect:
          </p>
          <ul className="dot-list">
            <li>Driving License</li>
            <li>Vehicle Registration Certificate (RC)</li>
            <li>Identity Proof (Aadhaar / PAN / other valid ID)</li>
          </ul>
          <p className="mt-3 text-muted">
            All KYC documents are securely processed and used strictly for verification purposes.
          </p>
        </div>

        <div className="sub-block mt-4">
          <h4>D. Financial Information</h4>
          <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 8 }}>
            For processing payouts:
          </p>
          <ul className="dot-list">
            <li>Bank Account Details</li>
            <li>UPI ID (if applicable)</li>
          </ul>
        </div>
        <div className="sub-block no-block mt-3">
          <h4>bookfleet Does NOT Store</h4>
          <ul className="dot-list">
            <li>ATM PIN</li>
            <li>UPI PIN</li>
            <li>Payment OTP</li>
          </ul>
        </div>

        <div className="sub-block mt-4" style={{ background: "#fff4e5", borderColor: "#ffd591" }}>
          <h4 style={{ color: "#7c4a00" }}>E. Location Data (Critical)</h4>
          <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 8 }}>
            bookfleet collects real-time and background location data. This is required for:
          </p>
          <ul className="dot-list">
            <li>Assigning delivery orders based on proximity</li>
            <li>Providing real-time tracking to customers</li>
            <li>Route optimization and navigation</li>
            <li>Ensuring safety, compliance, and fraud prevention</li>
          </ul>
          <div className="notice-pill notice-warn mt-3">
            ⚠️ Background location is required even when the app is not actively in use.
          </div>
        </div>

        <div className="sub-block mt-4">
          <h4>F. OTP & Authentication Data</h4>
          <ul className="dot-list">
            <li>OTP usage for login and verification</li>
            <li>Authentication logs</li>
          </ul>
          <p className="mt-3 text-muted">OTP may be sent via email or mobile for account access.</p>
        </div>
      </>
    ),
  },
  {
    id: "data-usage",
    title: "How We Use Rider Data",
    number: "04",
    content: (
      <>
        <p>We use collected data to:</p>
        <ul className="dot-list mt-3">
          <li>Verify rider identity and documents</li>
          <li>Enable onboarding and account activation</li>
          <li>Assign delivery orders</li>
          <li>Provide navigation and tracking services</li>
          <li>Process earnings and payouts</li>
          <li>Monitor performance, safety, and compliance</li>
          <li>Prevent fraud and misuse</li>
          <li>Improve platform functionality</li>
        </ul>
      </>
    ),
  },
  {
    id: "platform-nature",
    title: "Nature of Platform",
    number: "05",
    content: (
      <>
        <p>bookfleet operates as a technology-enabled logistics platform.</p>
        <div className="two-col mt-4">
          <div className="col-block yes-block">
            <h4>bookfleet's Role</h4>
            <ul className="dot-list">
              <li>Facilitates order allocation</li>
              <li>Coordinates logistics</li>
              <li>Provides technology platform</li>
            </ul>
          </div>
          <div className="col-block no-block">
            <h4>Riders Are NOT</h4>
            <ul className="dot-list">
              <li>Employees of bookfleet</li>
              <li>Agents of bookfleet</li>
              <li>Representatives of bookfleet</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    number: "06",
    content: (
      <>
        <p>We may share limited rider data with:</p>
        <ul className="dot-list mt-3">
          <li>Customers (name and phone number for delivery coordination)</li>
          <li>Payment processors (for payout processing)</li>
          <li>Service providers (analytics, support, infrastructure)</li>
          <li>Legal or government authorities (if required by law)</li>
        </ul>
        <div className="sub-block no-block mt-4">
          <h4>We Never Do This</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            bookfleet does <strong>not</strong> sell rider personal data under any circumstances.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    number: "07",
    content: (
      <>
        <p>We implement appropriate technical and organizational safeguards including:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🔒 Secure servers</div>
          <div className="service-chip">🔐 Encryption practices</div>
          <div className="service-chip">🛡️ Restricted access</div>
          <div className="service-chip">📋 Compliance controls</div>
        </div>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    number: "08",
    content: (
      <>
        <p>We retain rider data:</p>
        <ul className="dot-list mt-3">
          <li>As long as the account is active</li>
          <li>As required for legal, compliance, and fraud prevention purposes</li>
        </ul>
      </>
    ),
  },
  {
    id: "rider-responsibilities",
    title: "Rider Responsibilities",
    number: "09",
    content: (
      <>
        <p>Riders agree to:</p>
        <ul className="dot-list mt-3">
          <li>Provide accurate and valid information</li>
          <li>Maintain updated documents</li>
          <li>Safely handle items during delivery</li>
          <li>Follow all applicable laws and platform guidelines</li>
        </ul>
      </>
    ),
  },
  {
    id: "otp-security",
    title: "OTP & Account Security",
    number: "10",
    content: (
      <>
        <ul className="dot-list">
          <li>Riders must keep OTP and account credentials confidential</li>
          <li>OTP is used only for login and verification</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ bookfleet is not responsible for unauthorized access due to user negligence.
        </div>
      </>
    ),
  },
  {
    id: "location-consent",
    title: "Background Location Consent",
    number: "11",
    content: (
      <>
        <p>By using the bookfleet Rider App, you explicitly consent to:</p>
        <ul className="dot-list mt-3">
          <li>Real-time location tracking</li>
          <li>Background GPS access for operational purposes</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Disabling location access may affect order availability and service functionality.
        </div>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    number: "12",
    content: (
      <>
        <p>bookfleet shall not be responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Product quality, legality, or condition</li>
          <li>Issues caused by sender or third-party providers</li>
          <li>Indirect or consequential damages</li>
        </ul>
        <div className="notice-pill mt-4">
          👉 bookfleet's role is limited to <strong>platform facilitation</strong>.
        </div>
      </>
    ),
  },
  {
    id: "fraud",
    title: "Fraud & Misuse",
    number: "13",
    content: (
      <>
        <p>bookfleet reserves the right to:</p>
        <ul className="dot-list mt-3">
          <li>Suspend or terminate rider accounts</li>
          <li>Take necessary action in case of fraud, misuse, or policy violations</li>
        </ul>
      </>
    ),
  },
  {
    id: "rider-rights",
    title: "Rider Rights",
    number: "14",
    content: (
      <>
        <p>Riders may:</p>
        <ul className="dot-list mt-3">
          <li>Access and update their information</li>
          <li>Request correction of data</li>
          <li>Request account deletion</li>
        </ul>
        <div className="contact-grid mt-4">
          <div className="contact-card">
            <div className="icon">📩</div>
            <div>
              <div className="c-label">Submit requests via</div>
              <a href="mailto:rider.support@bookfleet.com">rider.support@bookfleet.com</a>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "account-deletion",
    title: "Account Deletion",
    number: "15",
    content: (
      <>
        <p>
          Account deletion requests can be made via email. Data will be removed within a
          reasonable timeframe, subject to legal obligations.
        </p>
        <div className="notice-pill mt-4">
          📩 Email: <strong>rider.support@bookfleet.com</strong>
        </div>
      </>
    ),
  },
  {
    id: "policy-changes",
    title: "Changes to Policy",
    number: "16",
    content: (
      <p>
        bookfleet may update this Privacy Policy from time to time. Continued use of the app
        indicates acceptance of the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    number: "17",
    content: (
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon">📧</div>
          <div>
            <div className="c-label">Email</div>
            <a href="mailto:rider.support@bookfleet.com">rider.support@bookfleet.com</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">📍</div>
          <div>
            <div className="c-label">Location</div>
            <span>Bhubaneswar, Odisha, India</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "grievance",
    title: "Grievance Officer",
    number: "18",
    content: (
      <ul className="info-list">
        <li><span className="label">Officer</span><span>bookfleet Support Team</span></li>
        <li><span className="label">Response Time</span><span>Within 48 hours</span></li>
        <li><span className="label">Email</span><span><a href="mailto:rider.support@bookfleet.com" style={{ color: "var(--blue-600)", textDecoration: "none" }}>rider.support@bookfleet.com</a></span></li>
      </ul>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance",
    number: "19",
    content: (
      <div className="acceptance-box">
        <div className="accept-icon">✅</div>
        <p>
          By using the bookfleet Rider Application, you confirm that you have{" "}
          <strong>read, understood, and agreed</strong> to this Privacy Policy in its entirety.
        </p>
      </div>
    ),
  },
];

export default function RiderPrivacyPolicy() {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState(new Set());
  const allIds = sections.map((s) => s.id);
  const allOpen = openSections.size === allIds.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = (id) =>
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleAll = () =>
    setOpenSections(allOpen ? new Set() : new Set(allIds));

  return (
    <>
      <Helmet>
        <title>Rider Privacy Policy – bookfleet | bookfleet.in</title>
        <meta name="description" content="Privacy policy for bookfleet delivery partners. Learn how we collect, use, and protect rider data on the bookfleet platform." />
        <link rel="canonical" href="https://bookfleet.in/rider-privacy-policy" />
        <meta property="og:title" content="Rider Privacy Policy – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/rider-privacy-policy" />
        <meta property="og:image" content="https://bookfleet.in/logo.jpeg" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        :root {
          --blue-950: #03122b; --blue-900: #062553; --blue-800: #0a3880;
          --blue-700: #0d4db3; --blue-600: #1563d4; --blue-500: #2979f5;
          --blue-400: #5b9bff; --blue-300: #93bfff; --blue-200: #c4d9ff;
          --blue-100: #e8f0ff; --blue-50: #f0f5ff; --accent: #00c6ff;
          --white: #ffffff; --text-primary: #0d1b3e;
          --text-secondary: #3a4f7a; --text-muted: #7a92be;
          --border: rgba(21,99,212,0.15);
          --shadow-sm: 0 1px 4px rgba(5,50,150,0.08);
          --shadow-md: 0 4px 20px rgba(5,50,150,0.12);
          --radius: 14px;
          --font-body: 'Sora', sans-serif;
          --font-display: 'DM Serif Display', serif;
        }
        body { font-family: var(--font-body); background: var(--blue-50); color: var(--text-primary); }


        .hero {
          background: linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 60%, var(--blue-500) 100%);
          padding: 64px 24px 56px; text-align: center;
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 70%, rgba(0,198,255,0.18) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.22);
          color: var(--blue-200); font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 99px; margin-bottom: 20px;
        }
       .hero-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255,255,255,0.3);
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  margin: 0 auto 20px;

  background: var(--blue-800);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
        .hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: white; line-height: 1.1; letter-spacing: -0.01em;
        }
        .hero h1 em { color: var(--accent); font-style: normal; }
        .hero-meta {
          margin-top: 14px;
          display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;
        }
        .hero-meta span {
          font-size: 0.75rem; color: var(--blue-200); font-weight: 500;
          display: flex; align-items: center; gap: 4px;
        }

        .page-wrap { max-width: 860px; margin: 0 auto; padding: 40px 20px 80px; }
        .toolbar { display: flex; justify-content: flex-end; margin-bottom: 16px; }
        .expand-btn {
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em;
          color: var(--blue-600); background: white; cursor: pointer;
          border: 1px solid var(--border); padding: 7px 16px; border-radius: 99px;
          transition: background 0.2s, color 0.2s;
        }
        .expand-btn:hover { background: var(--blue-600); color: white; }

        .policy-card {
          background: white; border: 1px solid var(--border);
          border-radius: var(--radius); margin-bottom: 12px;
          box-shadow: var(--shadow-sm); overflow: hidden;
          transition: box-shadow 0.25s;
        }
        .policy-card:hover { box-shadow: var(--shadow-md); }
        .policy-card.open { box-shadow: var(--shadow-md); }
        .card-header {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px; cursor: pointer; user-select: none;
          transition: background 0.2s;
        }
        .card-header:hover { background: var(--blue-50); }
        .section-number {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
          color: var(--blue-400); min-width: 28px;
        }
        .section-title {
          flex: 1; font-size: 0.95rem; font-weight: 600; color: var(--text-primary);
        }
        .chevron {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--blue-100);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; color: var(--blue-600);
          transition: transform 0.3s, background 0.2s; flex-shrink: 0;
        }
        .policy-card.open .chevron { transform: rotate(180deg); background: var(--blue-600); color: white; }
        .card-body {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s;
          padding: 0 22px;
        }
        .card-body.open { max-height: 1400px; padding: 0 22px 22px; border-top: 1px solid var(--border); }
        .card-body p, .card-body li { font-size: 0.875rem; line-height: 1.7; color: var(--text-secondary); }
        .card-body .mt-3 { margin-top: 12px; }
        .card-body .mt-4 { margin-top: 16px; }

        .info-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .info-list li {
          display: flex; gap: 10px; font-size: 0.875rem; color: var(--text-secondary);
          padding: 10px 14px; background: var(--blue-50);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .info-list .label { font-weight: 600; color: var(--blue-700); min-width: 160px; flex-shrink: 0; }

        .dot-list { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .dot-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;
        }
        .dot-list li::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue-500); margin-top: 6px; flex-shrink: 0;
        }

        .sub-block { padding: 14px 16px; background: var(--blue-50); border-radius: 10px; border: 1px solid var(--border); }
        .sub-block h4 {
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--blue-700); margin-bottom: 8px;
        }
        .sub-block.no-block { background: #fff4f4; border-color: #ffd0d0; }
        .sub-block.no-block h4 { color: #c0392b; }

        .notice-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--blue-100); border: 1px solid var(--blue-200);
          color: var(--blue-800); font-size: 0.78rem; font-weight: 500;
          padding: 7px 14px; border-radius: 8px; line-height: 1.5;
        }
        .notice-pill.notice-warn { background: #fff4e5; border-color: #ffd591; color: #7c4a00; }

        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 540px) { .two-col { grid-template-columns: 1fr; } }
        .col-block { padding: 14px; border-radius: 10px; }
        .col-block h4 { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
        .no-block { background: #fff4f4; border: 1px solid #ffd0d0; }
        .no-block h4 { color: #c0392b; }
        .yes-block { background: var(--blue-50); border: 1px solid var(--blue-200); }
        .yes-block h4 { color: var(--blue-700); }

        .service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        @media (max-width: 480px) { .service-grid { grid-template-columns: 1fr; } }
        .service-chip {
          padding: 12px 14px; background: var(--blue-50);
          border: 1px solid var(--blue-200); border-radius: 10px;
          font-size: 0.82rem; font-weight: 600; color: var(--blue-800);
          display: flex; align-items: center; gap: 8px;
        }

        .contact-grid { display: flex; flex-direction: column; gap: 10px; }
        .contact-card {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px; background: var(--blue-50);
          border: 1px solid var(--border); border-radius: 10px;
        }
        .contact-card .icon { font-size: 1.2rem; flex-shrink: 0; }
        .contact-card .c-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); }
        .contact-card a { color: var(--blue-600); font-size: 0.875rem; text-decoration: none; }
        .contact-card a:hover { text-decoration: underline; }
        .contact-card span { font-size: 0.875rem; color: var(--text-secondary); }

        .acceptance-box {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 18px;
          background: linear-gradient(135deg, var(--blue-100), var(--blue-50));
          border: 1px solid var(--blue-300); border-radius: 12px;
        }
        .accept-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
        .acceptance-box p { font-size: 0.875rem; color: var(--blue-900); line-height: 1.7; }

        .text-muted { color: var(--text-muted) !important; font-style: italic; font-size: 0.82rem; }

        .policy-footer {
          text-align: center; padding: 32px 20px;
          border-top: 1px solid var(--border); margin-top: 20px;
        }
        .policy-footer p { font-size: 0.78rem; color: var(--text-muted); }
        .policy-footer .brand { font-weight: 700; color: var(--blue-600); }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">🛵 Rider Privacy Policy</div>

        <div className="hero-logo">
          <img src={riderlogo} alt="bookfleet Logo" />
        </div>

        <h1>Rider <em>Privacy Policy</em></h1>

        <div className="hero-meta">
          <span>📅 Effective: 11 April 2026</span>
          <span>🛵 Delivery Partner</span>
          <span>⚖️ Governed by Indian Law</span>
        </div>
      </div>


      {/* CONTENT */}
      <div className="page-wrap">
        <div className="toolbar">
          <button className="expand-btn" onClick={toggleAll}>
            {allOpen ? "Collapse All ↑" : "Expand All ↓"}
          </button>
        </div>

        {sections.map((sec) => {
          const isOpen = openSections.has(sec.id);
          return (
            <div key={sec.id} className={`policy-card ${isOpen ? "open" : ""}`}>
              <div className="card-header" onClick={() => toggle(sec.id)}>
                <span className="section-number">{sec.number}</span>
                <span className="section-title">{sec.title}</span>
                <div className="chevron">▾</div>
              </div>
              <div className={`card-body ${isOpen ? "open" : ""}`}>
                <div style={{ paddingTop: "16px" }}>{sec.content}</div>
              </div>
            </div>
          );
        })}


      </div>
    </>
  );
}