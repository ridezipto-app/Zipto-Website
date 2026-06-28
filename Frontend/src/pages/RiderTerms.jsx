import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import riderlogo from "../assets/rider_logo.png";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    number: "01",
    content: (
      <>
        <p>Welcome to bookfleet Rider.</p>
        <p className="mt-3">
          These Rider Terms &amp; Conditions ("Terms") govern your registration and use
          of the bookfleet Rider App and related services operated by{" "}
          <strong>Zipto Hyperlogistics Private Limited</strong> ("bookfleet", "Company",
          "we", "our", or "us").
        </p>
        <div className="notice-pill mt-4">
          ✅ By registering as a bookfleet Delivery Partner, you agree to comply with
          these Terms &amp; Conditions.
        </div>
      </>
    ),
  },
  {
    id: "about",
    title: "About bookfleet",
    number: "02",
    content: (
      <>
        <p>
          bookfleet is a technology platform that connects customers with independent
          delivery partners for on-demand logistics services.
        </p>
        <p className="mt-3">
          bookfleet provides access to delivery opportunities through various vehicle
          categories, including:
        </p>
        <ul className="dot-list mt-3">
          <li>Bike</li>
          <li>Scooter</li>
          <li>Auto</li>
          <li>Pickup</li>
          <li>Mini Truck</li>
          <li>Other approved vehicles</li>
        </ul>
        <div className="notice-pill mt-4">
          ℹ️ bookfleet acts only as a technology platform and does not employ riders as employees.
        </div>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Rider Eligibility",
    number: "03",
    content: (
      <>
        <p>To register as a bookfleet Delivery Partner, you must:</p>
        <ul className="dot-list mt-3">
          <li>Be at least 18 years of age.</li>
          <li>Possess a valid Government-issued ID.</li>
          <li>Hold a valid Driving Licence (where applicable).</li>
          <li>Own or have legal access to an approved vehicle.</li>
          <li>Submit accurate KYC documents.</li>
          <li>Maintain a valid bank account for payouts.</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ bookfleet reserves the right to approve or reject any application.
        </div>
      </>
    ),
  },
  {
    id: "account",
    title: "Rider Account",
    number: "04",
    content: (
      <>
        <p>You are responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Maintaining accurate profile information.</li>
          <li>Protecting your login credentials.</li>
          <li>Keeping your documents updated.</li>
          <li>Reporting unauthorized access immediately.</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ You are solely responsible for all activities performed using your account.
        </div>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "Delivery Partner Responsibilities",
    number: "05",
    content: (
      <>
        <p>As a Delivery Partner, you agree to:</p>
        <ul className="dot-list mt-3">
          <li>Accept deliveries responsibly.</li>
          <li>Deliver shipments safely and professionally.</li>
          <li>Follow traffic rules and applicable laws.</li>
          <li>Treat customers respectfully.</li>
          <li>Maintain your vehicle in roadworthy condition.</li>
          <li>Carry valid vehicle documents while online.</li>
          <li>Complete deliveries honestly and accurately.</li>
        </ul>
      </>
    ),
  },
  {
    id: "contractor",
    title: "Independent Contractor",
    number: "06",
    content: (
      <>
        <p>bookfleet Delivery Partners are independent contractors.</p>
        <p className="mt-3">
          Nothing in these Terms creates an employer-employee relationship, partnership,
          agency, or joint venture between bookfleet and the Delivery Partner.
        </p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Delivery Partners remain responsible for their own taxes, insurance,
          statutory obligations, and operational expenses.
        </div>
      </>
    ),
  },
  {
    id: "earnings",
    title: "Payments & Earnings",
    number: "07",
    content: (
      <>
        <p>Rider earnings are calculated according to the pricing structure displayed in the Rider App.</p>
        <div className="two-col mt-3">
          <div className="col-block yes-block">
            <h4>Payments May Include</h4>
            <ul className="dot-list">
              <li>Delivery Earnings</li>
              <li>Incentives</li>
              <li>Bonuses</li>
              <li>Surge Earnings (where applicable)</li>
            </ul>
          </div>
          <div className="col-block no-block">
            <h4>bookfleet May Deduct</h4>
            <ul className="dot-list">
              <li>Platform Fees (if applicable)</li>
              <li>Taxes</li>
              <li>Penalties for policy violations</li>
              <li>Other lawful deductions</li>
            </ul>
          </div>
        </div>
        <div className="notice-pill mt-4">
          💳 Payouts are processed according to the bookfleet payout schedule.
        </div>
      </>
    ),
  },
  {
    id: "location",
    title: "Live Location",
    number: "08",
    content: (
      <>
        <p>While online, riders must allow bookfleet to access real-time and background location.</p>
        <p className="mt-3">Location data is required for:</p>
        <ul className="dot-list mt-3">
          <li>Order Allocation</li>
          <li>Navigation</li>
          <li>Delivery Tracking</li>
          <li>Customer Visibility</li>
          <li>Safety</li>
          <li>Operational Support</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Disabling location services may result in limited or unavailable services.
        </div>
      </>
    ),
  },
  {
    id: "prohibited",
    title: "Prohibited Conduct",
    number: "09",
    content: (
      <>
        <p>Delivery Partners must not:</p>
        <ul className="dot-list mt-3">
          <li>Submit false documents.</li>
          <li>Share Rider Accounts.</li>
          <li>Accept fake deliveries.</li>
          <li>Misuse customer information.</li>
          <li>Carry illegal or prohibited goods.</li>
          <li>Consume alcohol or drugs while delivering.</li>
          <li>Behave abusively towards customers or staff.</li>
          <li>Engage in fraudulent activities.</li>
        </ul>
        <div className="sub-block no-block mt-4">
          <h4>Consequences</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Violation may result in immediate suspension or permanent termination.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "vehicle",
    title: "Vehicle Compliance",
    number: "10",
    content: (
      <>
        <p>Riders are responsible for ensuring that:</p>
        <ul className="dot-list mt-3">
          <li>Their vehicle is legally registered.</li>
          <li>Insurance remains valid.</li>
          <li>Pollution Certificate (PUC), where applicable, is valid.</li>
          <li>Vehicle documents remain up to date.</li>
        </ul>
        <div className="notice-pill mt-4">
          ℹ️ bookfleet may request updated documents at any time.
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
        <p>bookfleet reserves the right to suspend or permanently terminate Rider Accounts for:</p>
        <ul className="dot-list mt-3">
          <li>Fraud</li>
          <li>Fake Documents</li>
          <li>Unsafe Driving</li>
          <li>Criminal Activities</li>
          <li>Customer Abuse</li>
          <li>Repeated Policy Violations</li>
          <li>Low Service Standards</li>
          <li>Any activity that may harm the bookfleet Platform or its users</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    number: "12",
    content: (
      <>
        <p>
          bookfleet acts solely as a technology platform connecting customers with
          independent delivery partners.
        </p>
        <p className="mt-3">To the fullest extent permitted by law, bookfleet shall not be liable for:</p>
        <ul className="dot-list mt-3">
          <li>Loss or damage resulting from rider negligence.</li>
          <li>Road accidents.</li>
          <li>Vehicle damage.</li>
          <li>Traffic delays.</li>
          <li>Government restrictions.</li>
          <li>Force majeure events.</li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "Modification of Terms",
    number: "13",
    content: (
      <>
        <p>bookfleet may revise these Terms &amp; Conditions from time to time.</p>
        <p className="mt-3 text-muted">
          Updated Terms become effective immediately upon publication on the Rider App
          or website. Continued use of the Rider Platform constitutes acceptance of the
          updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    number: "14",
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
    number: "15",
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

export default function RiderTerms() {
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
        <title>Rider Terms & Conditions – bookfleet | bookfleet.in</title>
        <meta name="description" content="Terms and conditions for delivery partners using the bookfleet Rider app, including rider responsibilities, obligations, and policies." />
        <link rel="canonical" href="https://bookfleet.in/rider-terms-of-service" />
        <meta property="og:title" content="Rider Terms & Conditions – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/rider-terms-of-service" />
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
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">🛵 Rider Terms & Conditions</div>
        <div className="hero-logo">
          <img src={riderlogo} alt="bookfleet Logo" />
        </div>
        <h1>Rider Terms &amp; <em>Conditions</em></h1>
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