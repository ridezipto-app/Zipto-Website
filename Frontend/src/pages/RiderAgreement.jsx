import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import riderlogo from "../assets/rider_logo.png";

const sections = [
  {
    id: "nature",
    title: "Nature of Relationship",
    number: "01",
    content: (
      <>
        <p>
          Bookfleet is a technology platform that connects customers with independent
          delivery partners.
        </p>
        <p className="mt-3">The Delivery Partner acknowledges that:</p>
        <ul className="dot-list mt-3">
          <li>They are an <strong>independent contractor</strong>.</li>
          <li>Nothing in this Agreement creates an employer-employee relationship.</li>
          <li>Nothing creates a partnership, agency, franchise, or joint venture.</li>
          <li>The Delivery Partner controls when to go online and accept deliveries.</li>
        </ul>
        <div className="notice-pill mt-4">
          ✅ By registering on the Bookfleet Rider App, you agree to be legally bound by this Agreement.
        </div>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    number: "02",
    content: (
      <>
        <p>The Delivery Partner confirms that they:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🎂 At least 18 years old</div>
          <div className="service-chip">🪪 Valid identity documents</div>
          <div className="service-chip">🚗 Valid Driving Licence</div>
          <div className="service-chip">📄 Legally authorized vehicle</div>
          <div className="service-chip">📋 Accurate KYC documents</div>
          <div className="service-chip">🏦 Valid bank account for payouts</div>
        </div>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "Rider Responsibilities",
    number: "03",
    content: (
      <>
        <p>The Delivery Partner agrees to:</p>
        <ul className="dot-list mt-3">
          <li>Complete deliveries safely and professionally.</li>
          <li>Follow all traffic laws.</li>
          <li>Wear appropriate safety gear.</li>
          <li>Treat customers respectfully.</li>
          <li>Keep vehicle documents valid.</li>
          <li>Maintain their vehicle in roadworthy condition.</li>
          <li>Deliver only lawful shipments.</li>
        </ul>
      </>
    ),
  },
  {
    id: "kyc",
    title: "KYC Verification",
    number: "04",
    content: (
      <>
        <p>Bookfleet may verify:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🪪 Aadhaar</div>
          <div className="service-chip">📄 PAN</div>
          <div className="service-chip">🚗 Driving Licence</div>
          <div className="service-chip">📋 Vehicle RC</div>
          <div className="service-chip">🛡️ Insurance</div>
          <div className="service-chip">🏦 Bank Details</div>
          <div className="service-chip">🤳 Selfie Verification</div>
          <div className="service-chip">📁 Additional documents as required</div>
        </div>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Failure to provide valid documents may result in rejection or suspension.
        </div>
      </>
    ),
  },
  {
    id: "delivery-requests",
    title: "Delivery Requests",
    number: "05",
    content: (
      <>
        <p>Bookfleet may send delivery requests based on:</p>
        <ul className="dot-list mt-3">
          <li>Rider availability</li>
          <li>Live location</li>
          <li>Vehicle type</li>
          <li>Performance</li>
          <li>Operational requirements</li>
        </ul>
        <div className="notice-pill mt-4">
          ℹ️ Acceptance of every order is voluntary unless otherwise stated by applicable incentives or programs.
        </div>
      </>
    ),
  },
  {
    id: "earnings",
    title: "Earnings & Payouts",
    number: "06",
    content: (
      <>
        <div className="two-col mt-3">
          <div className="col-block yes-block">
            <h4>Delivery Partners May Earn</h4>
            <ul className="dot-list">
              <li>Delivery Charges</li>
              <li>Distance-based Earnings</li>
              <li>Incentives</li>
              <li>Bonuses</li>
              <li>Surge Earnings (where applicable)</li>
            </ul>
          </div>
          <div className="col-block no-block">
            <h4>Bookfleet May Deduct</h4>
            <ul className="dot-list">
              <li>Applicable Taxes</li>
              <li>Government Charges</li>
              <li>Penalties (where applicable)</li>
              <li>Other lawful deductions</li>
            </ul>
          </div>
        </div>
        <div className="notice-pill mt-4">
          💳 Payouts shall be processed according to Bookfleet's payout schedule.
        </div>
      </>
    ),
  },
  {
    id: "conduct",
    title: "Rider Conduct",
    number: "07",
    content: (
      <>
        <p>The Delivery Partner shall <strong>not</strong>:</p>
        <ul className="dot-list mt-3">
          <li>Misbehave with customers.</li>
          <li>Carry prohibited goods.</li>
          <li>Consume alcohol or drugs while online.</li>
          <li>Share Rider Accounts.</li>
          <li>Submit fake documents.</li>
          <li>Commit fraud.</li>
          <li>Manipulate GPS.</li>
          <li>Engage in criminal activities.</li>
        </ul>
      </>
    ),
  },
  {
    id: "vehicle",
    title: "Vehicle Compliance",
    number: "08",
    content: (
      <>
        <p>The Delivery Partner is solely responsible for ensuring:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">📋 Valid RC</div>
          <div className="service-chip">🛡️ Valid Insurance</div>
          <div className="service-chip">🪪 Valid Driving Licence</div>
          <div className="service-chip">🌿 Pollution Certificate (where applicable)</div>
          <div className="service-chip">🔧 Proper vehicle maintenance</div>
        </div>
      </>
    ),
  },
  {
    id: "safety",
    title: "Safety",
    number: "09",
    content: (
      <>
        <p>The Delivery Partner shall:</p>
        <ul className="dot-list mt-3">
          <li>Wear a helmet where legally required.</li>
          <li>Drive responsibly.</li>
          <li>Follow road safety rules.</li>
          <li>Never overload the vehicle.</li>
          <li>Refuse transportation of prohibited items.</li>
        </ul>
        <div className="notice-pill mt-4">
          🛡️ Safety shall always take priority over delivery timelines.
        </div>
      </>
    ),
  },
  {
    id: "taxes",
    title: "Independent Taxes",
    number: "10",
    content: (
      <>
        <p>The Delivery Partner shall be solely responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Income Tax</li>
          <li>GST (where applicable)</li>
          <li>Professional Tax</li>
          <li>Any statutory obligations applicable to them</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Bookfleet shall not be responsible for the Delivery Partner's personal tax liabilities.
        </div>
      </>
    ),
  },
  {
    id: "termination",
    title: "Suspension & Termination",
    number: "11",
    content: (
      <>
        <p>Bookfleet may suspend or permanently terminate Rider Accounts for:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🚫 Fraud</div>
          <div className="service-chip">📄 Fake Documents</div>
          <div className="service-chip">⚠️ Unsafe Behaviour</div>
          <div className="service-chip">📢 Customer Complaints</div>
          <div className="service-chip">🚔 Criminal Activities</div>
          <div className="service-chip">📋 Violation of Policies</div>
          <div className="service-chip">📱 Misuse of Platform</div>
        </div>
        <div className="notice-pill mt-4">
          ℹ️ Bookfleet reserves the right to investigate any suspected misconduct.
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
        <p>Bookfleet is solely a technology platform.</p>
        <p className="mt-3">Bookfleet shall not be liable for:</p>
        <ul className="dot-list mt-3">
          <li>Vehicle Damage</li>
          <li>Personal Injury</li>
          <li>Road Accidents</li>
          <li>Traffic Delays</li>
          <li>Government Restrictions</li>
          <li>Force Majeure Events</li>
          <li>Losses arising from rider negligence</li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    number: "13",
    content: (
      <>
        <p>
          Delivery Partners shall keep confidential any customer information, pricing
          information, operational processes, and business information obtained while
          using the Bookfleet Platform.
        </p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Breach of confidentiality may result in immediate termination and legal action.
        </div>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Agreement",
    number: "14",
    content: (
      <>
        <p>Bookfleet may update this Agreement from time to time.</p>
        <p className="mt-3 text-muted">
          Continued use of the Rider Platform constitutes acceptance of the updated Agreement.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    number: "15",
    content: (
      <ul className="info-list">
        <li><span className="label">Governing Law</span><span>Laws of India</span></li>
        <li><span className="label">Jurisdiction</span><span>Competent courts of Bhubaneswar, Odisha</span></li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    number: "16",
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
  {
    id: "acceptance",
    title: "Acceptance",
    number: "17",
    content: (
      <div className="acceptance-box">
        <div className="accept-icon">✅</div>
        <p>
          By registering as a Bookfleet Delivery Partner, you confirm that you have{" "}
          <strong>read, understood, and agreed</strong> to this Delivery Partner Agreement.
        </p>
      </div>
    ),
  },
];

export default function RiderAgreement() {
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
        <title>Rider Agreement – bookfleet | bookfleet.in</title>
        <meta name="description" content="Rider Agreement for bookfleet delivery partners: terms, responsibilities, and onboarding requirements to join the bookfleet fleet." />
        <link rel="canonical" href="https://bookfleet.in/rider-agreement" />
        <meta property="og:title" content="Rider Agreement – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/rider-agreement" />
        <meta property="og:image" content="https://bookfleet.in/logo.jpeg" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');
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
          background: radial-gradient(ellipse at 70% 30%, rgba(0,198,255,0.18) 0%, transparent 60%);
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
          width: 160px; height: 160px;
          border-radius: 28px;
          overflow: hidden;
          border: 3px solid rgba(255,255,255,0.3);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          margin: 0 auto 24px;
          background: var(--blue-800);
          display: flex; align-items: center; justify-content: center;
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
        .card-body.open { max-height: 1600px; padding: 0 22px 22px; border-top: 1px solid var(--border); }
        .card-body p, .card-body li { font-size: 0.875rem; line-height: 1.7; color: var(--text-secondary); }
        .card-body .mt-2 { margin-top: 8px; }
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

        /* Penalty Table */
        .penalty-table { display: flex; flex-direction: column; gap: 10px; }
        .penalty-row {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px; background: white;
          border: 1px solid var(--border); border-radius: 10px;
          transition: box-shadow 0.2s;
        }
        .penalty-row:hover { box-shadow: var(--shadow-sm); }
        .penalty-icon {
          width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
        }
        .penalty-icon.warn { background: #fff4e5; }
        .penalty-icon.red { background: #fff0f0; }
        .penalty-info { flex: 1; min-width: 0; }
        .penalty-title { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
        .penalty-desc { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
        .penalty-badge {
          font-size: 0.7rem; font-weight: 700; padding: 4px 10px;
          border-radius: 99px; white-space: nowrap; flex-shrink: 0;
        }
        .penalty-badge.warn { background: #fff4e5; color: #7c4a00; border: 1px solid #ffd591; }
        .penalty-badge.red { background: #fff0f0; color: #c0392b; border: 1px solid #ffd0d0; }

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
        <div className="hero-badge">🛵 Rider Agreement</div>
        <div className="hero-logo">
          <img src={riderlogo} alt="bookfleet Logo" />
        </div>
        <h1>Rider <em>Agreement</em></h1>
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