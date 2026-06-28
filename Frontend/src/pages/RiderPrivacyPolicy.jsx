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
        <p>Welcome to Bookfleet Rider.</p>
        <p className="mt-3">
          Bookfleet Rider is operated by <strong>Zipto Hyperlogistics Private Limited</strong>{" "}
          ("Bookfleet", "Company", "we", "our", or "us"). We are committed to protecting
          the privacy and personal information of our delivery partners.
        </p>
        <p className="mt-3">
          This Privacy Policy explains how we collect, use, store, process, share, and
          protect your personal information when you register as a delivery partner or use
          the Bookfleet Rider App and related services.
        </p>
        <div className="notice-pill mt-4">
          ✅ By registering with or using the Bookfleet Rider Platform, you acknowledge
          that you have read, understood, and agreed to this Privacy Policy.
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
        <li><span className="label">Legal Entity</span><span>Zipto Hyperlogistics Private Limited</span></li>
        <li><span className="label">Brand Name</span><span>Bookfleet</span></li>
        <li><span className="label">Registered Office</span><span>781, Shaheed Nagar, 780 Maharishi College Road, Bhubaneswar, Khordha, Odisha – 751007, India</span></li>
        <li><span className="label">Website</span><a href="https://www.bookfleet.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue-600)", textDecoration: "none" }}>www.bookfleet.in</a></li>
        <li><span className="label">Support Email</span><a href="mailto:support@bookfleet.in" style={{ color: "var(--blue-600)", textDecoration: "none" }}>support@bookfleet.in</a></li>
      </ul>
    ),
  },
  {
    id: "scope",
    title: "Scope of this Privacy Policy",
    number: "03",
    content: (
      <>
        <p>This Privacy Policy applies to:</p>
        <ul className="dot-list mt-3">
          <li>Bookfleet Rider App</li>
          <li>Rider Registration</li>
          <li>KYC Verification</li>
          <li>Delivery Operations</li>
          <li>Rider Wallet &amp; Payout Services</li>
          <li>Customer Support</li>
          <li>Communication Services</li>
          <li>Any other services offered through the Bookfleet Rider Platform</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-collected",
    title: "Information We Collect",
    number: "04",
    content: (
      <div className="sub-sections">
        <div className="sub-block">
          <h4>Personal Information</h4>
          <ul className="dot-list">
            <li>Full Name</li>
            <li>Mobile Number</li>
            <li>Email Address (if provided)</li>
            <li>Date of Birth</li>
            <li>Profile Photograph</li>
          </ul>
        </div>
        <div className="sub-block">
          <h4>Identity &amp; KYC Information</h4>
          <ul className="dot-list">
            <li>Aadhaar Card</li>
            <li>PAN Card</li>
            <li>Driving Licence</li>
            <li>Selfie Verification</li>
            <li>Other documents required under applicable law</li>
          </ul>
        </div>
        <div className="sub-block">
          <h4>Vehicle Information</h4>
          <ul className="dot-list">
            <li>Vehicle Type</li>
            <li>Vehicle Registration Certificate (RC)</li>
            <li>Insurance Details</li>
            <li>Vehicle Photos</li>
            <li>Permit Details (where applicable)</li>
          </ul>
        </div>
        <div className="sub-block">
          <h4>Banking Information</h4>
          <ul className="dot-list">
            <li>Bank Account Holder Name</li>
            <li>Account Number</li>
            <li>IFSC Code</li>
            <li>UPI ID (if applicable)</li>
          </ul>
        </div>
        <div className="sub-block" style={{ background: "#fff4e5", borderColor: "#ffd591" }}>
          <h4 style={{ color: "#7c4a00" }}>Location Information</h4>
          <ul className="dot-list">
            <li>Live GPS Location</li>
            <li>Background Location (while online for deliveries)</li>
            <li>Pickup &amp; Delivery Route Information</li>
          </ul>
          <div className="notice-pill notice-warn mt-3">
            ⚠️ Background location is required while you are online for deliveries.
          </div>
        </div>
        <div className="sub-block">
          <h4>Device Information</h4>
          <ul className="dot-list">
            <li>Device Model</li>
            <li>Device Identifier</li>
            <li>Operating System</li>
            <li>App Version</li>
            <li>IP Address</li>
            <li>Crash Reports</li>
            <li>Diagnostic Information</li>
          </ul>
        </div>
        <div className="sub-block">
          <h4>Performance Information</h4>
          <ul className="dot-list">
            <li>Delivery History</li>
            <li>Acceptance Rate</li>
            <li>Completion Rate</li>
            <li>Earnings</li>
            <li>Customer Ratings &amp; Reviews</li>
            <li>Incentives &amp; Bonuses</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "data-usage",
    title: "How We Use Your Information",
    number: "05",
    content: (
      <>
        <p>We use your information to:</p>
        <ul className="dot-list mt-3">
          <li>Verify your identity and KYC</li>
          <li>Activate your rider account</li>
          <li>Assign delivery requests</li>
          <li>Provide real-time navigation</li>
          <li>Calculate earnings and incentives</li>
          <li>Process payouts</li>
          <li>Improve platform safety</li>
          <li>Prevent fraud and misuse</li>
          <li>Provide customer support</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
      </>
    ),
  },
  {
    id: "location",
    title: "Location Permissions",
    number: "06",
    content: (
      <>
        <p>
          Bookfleet Rider requires access to your device location, including background
          location while you are online, to:
        </p>
        <ul className="dot-list mt-3">
          <li>Assign nearby delivery requests</li>
          <li>Navigate to pickup and delivery locations</li>
          <li>Track deliveries</li>
          <li>Improve rider safety</li>
          <li>Calculate trip distance and earnings</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Sharing of Information",
    number: "07",
    content: (
      <>
        <p>Bookfleet may share limited rider information with:</p>
        <ul className="dot-list mt-3">
          <li>Customers (such as first name, profile photo, vehicle details, and live trip location)</li>
          <li>Payment Service Providers</li>
          <li>Technology Service Providers</li>
          <li>Government Authorities where legally required</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          🚫 Bookfleet does not sell rider personal information to third parties.
        </div>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    number: "08",
    content: (
      <p>
        We implement appropriate administrative, technical, and organizational measures
        to protect rider information from unauthorized access, disclosure, alteration,
        or misuse.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    number: "09",
    content: (
      <p>
        We retain rider information only for as long as necessary to provide our services,
        comply with legal obligations, resolve disputes, and enforce our agreements.
      </p>
    ),
  },
  {
    id: "rider-rights",
    title: "Rider Rights",
    number: "10",
    content: (
      <>
        <p>You may request to:</p>
        <ul className="dot-list mt-3">
          <li>Access your personal information</li>
          <li>Update inaccurate information</li>
          <li>Correct your profile</li>
          <li>Request account closure</li>
          <li>Withdraw consent where permitted by law</li>
        </ul>
      </>
    ),
  },
  {
    id: "account-deletion",
    title: "Account Suspension & Deletion",
    number: "11",
    content: (
      <>
        <p>
          Bookfleet may suspend or permanently terminate rider accounts for fraud, policy
          violations, unsafe conduct, submission of false documents, or any activity that
          violates applicable laws or Bookfleet policies.
        </p>
        <p className="mt-3 text-muted">
          You may also request deletion of your rider account by contacting Bookfleet
          Support, subject to legal and operational requirements.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    number: "12",
    content: (
      <p>
        Only individuals who are legally eligible to work and enter into a contract under
        applicable laws may register as Bookfleet delivery partners.
      </p>
    ),
  },
  {
    id: "policy-changes",
    title: "Changes to this Privacy Policy",
    number: "13",
    content: (
      <>
        <p>Bookfleet may update this Privacy Policy from time to time.</p>
        <p className="mt-3 text-muted">
          Any changes will be published on our website and/or Rider App and will become
          effective immediately upon publication unless otherwise stated.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    number: "14",
    content: (
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon">📧</div>
          <div>
            <div className="c-label">Support Email</div>
            <a href="mailto:support@bookfleet.in">support@bookfleet.in</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">🌐</div>
          <div>
            <div className="c-label">Website</div>
            <a href="https://www.bookfleet.in" target="_blank" rel="noopener noreferrer">www.bookfleet.in</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">📍</div>
          <div>
            <div className="c-label">Registered Office</div>
            <span>Zipto Hyperlogistics Private Limited, 781, Shaheed Nagar, 780 Maharishi College Road, Bhubaneswar, Khordha, Odisha – 751007, India</span>
          </div>
        </div>
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
  border-radius: 28px;
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