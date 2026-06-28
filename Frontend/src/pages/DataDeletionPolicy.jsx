import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import logo from "../assets/bookfleet_logo.png";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    number: "01",
    content: (
      <>
        <p>
          This Data Deletion Policy explains how bookfleet, operated by{" "}
          <strong>Zipto Hyperlogistics Private Limited</strong> ("bookfleet", "Company",
          "we", "our", or "us"), handles requests for deletion of personal information
          and user accounts.
        </p>
        <div className="notice-pill mt-4">
          🔒 We respect your privacy and provide users with the ability to request
          deletion of their personal information, subject to applicable laws and our
          legitimate business obligations.
        </div>
      </>
    ),
  },
  {
    id: "who-can-request",
    title: "Who Can Request Data Deletion",
    number: "02",
    content: (
      <>
        <p>The following users may request deletion of their bookfleet account and associated personal information:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">👤 Customers</div>
          <div className="service-chip">🛵 Delivery Partners (Riders)</div>
        </div>
      </>
    ),
  },
  {
    id: "how-to-request",
    title: "How to Request Data Deletion",
    number: "03",
    content: (
      <>
        <p>You may request deletion of your bookfleet account by:</p>
        <ul className="dot-list mt-3">
          <li>Using the <strong>Delete Account</strong> option available within the bookfleet App (where available), or</li>
          <li>Contacting our support team directly.</li>
        </ul>
        <div className="contact-grid mt-4">
          <div className="contact-card">
            <div className="icon">📧</div>
            <div>
              <div className="c-label">Support Email</div>
              <a href="mailto:support@bookfleet.in">support@bookfleet.in</a>
            </div>
          </div>
        </div>
        <div className="notice-pill mt-4">
          ℹ️ Please include your registered mobile number and account details when submitting a request.
        </div>
      </>
    ),
  },
  {
    id: "what-happens-after",
    title: "What Happens After Your Request",
    number: "04",
    content: (
      <>
        <p>Once your request is received:</p>
        <div className="penalty-table mt-3">
          <div className="penalty-row">
            <div className="penalty-icon warn">🔍</div>
            <div className="penalty-info">
              <div className="penalty-title">Identity Verification</div>
              <div className="penalty-desc">Your identity may be verified before processing.</div>
            </div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon warn">📋</div>
            <div className="penalty-info">
              <div className="penalty-title">Account Review</div>
              <div className="penalty-desc">Your account will be reviewed for pending obligations.</div>
            </div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon warn">🗑️</div>
            <div className="penalty-info">
              <div className="penalty-title">Data Deletion / Anonymization</div>
              <div className="penalty-desc">Eligible personal information will be deleted or anonymized.</div>
            </div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon warn">✅</div>
            <div className="penalty-info">
              <div className="penalty-title">Confirmation</div>
              <div className="penalty-desc">You may receive confirmation once the deletion process is completed.</div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "information-retained",
    title: "Information That May Be Retained",
    number: "05",
    content: (
      <>
        <p>Certain information may continue to be retained where required for:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">⚖️ Legal compliance</div>
          <div className="service-chip">🧾 Tax &amp; accounting obligations</div>
          <div className="service-chip">🛡️ Fraud prevention</div>
          <div className="service-chip">🤝 Dispute resolution</div>
          <div className="service-chip">📋 Regulatory requirements</div>
          <div className="service-chip">🔒 Law enforcement requests</div>
          <div className="service-chip">📁 Internal record keeping</div>
        </div>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Such information will only be retained for the period required by applicable law.
        </div>
      </>
    ),
  },
  {
    id: "effect-of-deletion",
    title: "Effect of Account Deletion",
    number: "06",
    content: (
      <>
        <p>After account deletion:</p>
        <div className="two-col mt-3">
          <div className="col-block no-block">
            <h4>What You Lose</h4>
            <ul className="dot-list mt-2">
              <li>Access to your bookfleet account.</li>
              <li>Booking history may no longer be accessible.</li>
              <li>Saved addresses and preferences will be removed.</li>
              <li>Wallet balance (if applicable) may be forfeited unless otherwise required by law or bookfleet policy.</li>
            </ul>
          </div>
          <div className="col-block" style={{ background: "#fff8ee", border: "1px solid #ffd591" }}>
            <h4 style={{ color: "#92400e", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Important Note</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              The deletion process cannot generally be reversed once initiated.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "processing-time",
    title: "Processing Time",
    number: "07",
    content: (
      <>
        <ul className="info-list">
          <li>
            <span className="label">Standard Timeline</span>
            <span>Within 30 days from successful identity verification.</span>
          </li>
          <li>
            <span className="label">Extended Timeline</span>
            <span>May apply if required by applicable law or exceptional circumstances.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    number: "08",
    content: (
      <>
        <p>
          Where your information has been shared with authorized service providers
          (such as payment processors or technology partners), deletion of such
          information will be subject to their respective legal and contractual obligations.
        </p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ bookfleet cannot guarantee deletion timelines for data held by third-party service providers.
        </div>
      </>
    ),
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    number: "09",
    content: (
      <>
        <p>bookfleet may update this Data Deletion Policy from time to time.</p>
        <p className="mt-3 text-muted">
          Any changes will be published on the bookfleet website and applications.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    number: "10",
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
            <span>
              Zipto Hyperlogistics Private Limited, 781, Shaheed Nagar,
              780 Maharishi College Road, Bhubaneswar, Khordha, Odisha – 751007, India
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function DataDeletionPolicy() {
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
        <title>Data Deletion Policy – bookfleet | bookfleet.in</title>
        <meta name="description" content="Learn how to request deletion of your bookfleet account and personal data, what information is retained, and how long processing takes." />
        <link rel="canonical" href="https://bookfleet.in/data-deletion-policy" />
        <meta property="og:title" content="Data Deletion Policy – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/data-deletion-policy" />
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
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
          margin: 0 auto 24px;
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

        .service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        @media (max-width: 480px) { .service-grid { grid-template-columns: 1fr; } }
        .service-chip {
          padding: 12px 14px; background: var(--blue-50);
          border: 1px solid var(--blue-200); border-radius: 10px;
          font-size: 0.82rem; font-weight: 600; color: var(--blue-800);
          display: flex; align-items: center; gap: 8px;
        }

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
        .penalty-info { flex: 1; min-width: 0; }
        .penalty-title { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
        .penalty-desc { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }

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

        .text-muted { color: var(--text-muted) !important; font-style: italic; font-size: 0.82rem; }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">🗑️ Data Deletion Policy</div>
        <div className="hero-logo">
          <img src={logo} alt="bookfleet Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <h1>Data <em>Deletion</em> Policy</h1>
        <div className="hero-meta">
          <span>📅 Effective: 11 April 2026</span>
          <span>👤 All Users</span>
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
