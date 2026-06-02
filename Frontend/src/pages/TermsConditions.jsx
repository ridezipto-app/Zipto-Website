import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import logo from "../assets/zipto_logo.jpeg";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    number: "01",
    content: (
      <>
        <p>This Rider Agreement ("Agreement") is entered into between:</p>
        <div className="two-col mt-4">
          <div className="col-block yes-block">
            <h4>Company</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Zipto Hyperlogistics Pvt. Ltd.<br />
              ("Company", "Zipto", "We")
            </p>
          </div>
          <div className="col-block yes-block">
            <h4>Rider</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              You ("Rider", "Delivery Partner", "You")
            </p>
          </div>
        </div>
        <div className="notice-pill mt-4">
          ✅ By registering or using the platform, you agree to be bound by this Agreement.
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
        <li><span className="label">Registered Office</span><span>781, Saheed Nagar, Maharishi College Road, Khorda, Bhubaneswar, Odisha, India – 751007</span></li>
        <li><span className="label">Location</span><span>Bhubaneswar, Odisha, India</span></li>
      </ul>
    ),
  },
  {
    id: "status",
    title: "Independent Contractor Status",
    number: "03",
    content: (
      <>
        <p>You are engaged as an <strong>independent contractor</strong>. Nothing in this Agreement creates:</p>
        <ul className="dot-list mt-3">
          <li>Employment</li>
          <li>Partnership</li>
          <li>Agency relationship</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ You are not entitled to employee benefits.
        </div>
      </>
    ),
  },
  {
    id: "onboarding",
    title: "Onboarding & Verification",
    number: "04",
    content: (
      <>
        <p>You agree to provide accurate and valid documents including:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🪪 Driving License</div>
          <div className="service-chip">🚗 Vehicle Registration</div>
          <div className="service-chip">📄 Identity Proof</div>
          <div className="service-chip">🏦 Bank Details</div>
        </div>
        <p className="mt-3 text-muted">
          Zipto reserves the right to approve or reject onboarding at its sole discretion.
        </p>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "Services & Responsibilities",
    number: "05",
    content: (
      <>
        <p>You agree to:</p>
        <ul className="dot-list mt-3">
          <li>Accept and complete delivery orders responsibly</li>
          <li>Follow all traffic laws and regulations</li>
          <li>Ensure safe handling of goods</li>
          <li>Maintain professional conduct with customers</li>
        </ul>
      </>
    ),
  },
  {
    id: "flexibility",
    title: "Work Flexibility",
    number: "06",
    content: (
      <>
        <ul className="dot-list">
          <li>You are free to choose your working hours</li>
          <li>There is no obligation to accept every order</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Performance metrics may affect your account status.
        </div>
      </>
    ),
  },
  {
    id: "earnings",
    title: "Earnings & Payments",
    number: "07",
    content: (
      <>
        <div className="two-col mt-3">
          <div className="col-block yes-block">
            <h4>Earnings Include</h4>
            <ul className="dot-list">
              <li>Base fare</li>
              <li>Distance-based charges</li>
              <li>Incentives or bonuses</li>
            </ul>
          </div>
          <div className="col-block no-block">
            <h4>Deductions May Include</h4>
            <ul className="dot-list">
              <li>Platform service fees</li>
              <li>Penalties for violations</li>
              <li>Cancellation charges</li>
            </ul>
          </div>
        </div>
        <div className="notice-pill mt-4">
          💳 Payouts will be processed periodically to your registered bank account.
        </div>
      </>
    ),
  },
  {
    id: "performance",
    title: "Performance & Ratings",
    number: "08",
    content: (
      <>
        <p>Zipto may monitor:</p>
        <ul className="dot-list mt-3">
          <li>Acceptance rate</li>
          <li>Cancellation rate</li>
          <li>Delivery completion rate</li>
          <li>Customer ratings</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Consistently poor performance may result in suspension or deactivation.
        </div>
      </>
    ),
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    number: "09",
    content: (
      <>
        <p>You must <strong>not</strong>:</p>
        <ul className="dot-list mt-3">
          <li>Engage in fraudulent activities</li>
          <li>Misuse customer data</li>
          <li>Tamper with packages</li>
          <li>Deliver illegal or restricted goods</li>
          <li>Manipulate orders or payments</li>
        </ul>
        <div className="sub-block no-block mt-4">
          <h4>Consequences</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Violation may lead to immediate termination and legal action.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "safety",
    title: "Safety & Compliance",
    number: "10",
    content: (
      <>
        <p>You are solely responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Your vehicle condition</li>
          <li>Valid licenses and permits</li>
          <li>Compliance with traffic laws</li>
          <li>Personal safety during deliveries</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Zipto is not liable for accidents or injuries.
        </div>
      </>
    ),
  },
  {
    id: "insurance",
    title: "Insurance",
    number: "11",
    content: (
      <>
        <p>Zipto does <strong>not</strong> provide insurance unless explicitly stated.</p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Riders are responsible for their own vehicle and personal insurance.
        </div>
      </>
    ),
  },
  {
    id: "equipment",
    title: "Equipment & Expenses",
    number: "12",
    content: (
      <>
        <ul className="dot-list">
          <li>You must provide your own vehicle, fuel, and mobile device</li>
          <li>Zipto does not reimburse operational expenses unless specified</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "Account Suspension & Termination",
    number: "13",
    content: (
      <>
        <p>Zipto may suspend or terminate your account for:</p>
        <ul className="dot-list mt-3">
          <li>Policy violations</li>
          <li>Fraud or misconduct</li>
          <li>Legal reasons</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Termination may occur without prior notice in severe cases.
        </div>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Data & Privacy",
    number: "14",
    content: (
      <>
        <p>Your data will be handled in accordance with the Zipto Rider Privacy Policy.</p>
        <div className="notice-pill mt-4">
          📍 By using the platform, you consent to data collection including location tracking.
        </div>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    number: "15",
    content: (
      <>
        <p>To the maximum extent permitted by law, Zipto shall not be liable for:</p>
        <ul className="dot-list mt-3">
          <li>Loss of income</li>
          <li>Accidents or injuries</li>
          <li>Third-party actions</li>
          <li>Technical issues or downtime</li>
        </ul>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    number: "16",
    content: (
      <>
        <p>You agree to indemnify and hold harmless Zipto against:</p>
        <ul className="dot-list mt-3">
          <li>Claims</li>
          <li>Damages</li>
          <li>Legal costs</li>
        </ul>
        <p className="mt-3 text-muted">
          arising from your negligence, violation of this Agreement, or illegal activities.
        </p>
      </>
    ),
  },
  {
    id: "force",
    title: "Force Majeure",
    number: "17",
    content: (
      <p>
        Zipto shall not be liable for delays or failures caused by natural disasters,
        government actions, network issues, or events beyond its reasonable control.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law & Jurisdiction",
    number: "18",
    content: (
      <ul className="info-list">
        <li><span className="label">Governing Law</span><span>Laws of India</span></li>
        <li><span className="label">Jurisdiction</span><span>Bhubaneswar, Odisha</span></li>
      </ul>
    ),
  },
  {
    id: "modifications",
    title: "Modifications",
    number: "19",
    content: (
      <p>
        Zipto may update this Agreement at any time. Continued use of the platform
        constitutes acceptance of any changes made.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & Grievance",
    number: "20",
    content: (
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon">📧</div>
          <div>
            <div className="c-label">Email</div>
            <a href="mailto:rider.support@ridezipto.com">rider.support@ridezipto.com</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">👤</div>
          <div>
            <div className="c-label">Grievance Officer</div>
            <span>Zipto Support Team</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">⏱</div>
          <div>
            <div className="c-label">Response Time</div>
            <span>Within 48 hours</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance",
    number: "21",
    content: (
      <div className="acceptance-box">
        <div className="accept-icon">✅</div>
        <p>
          By registering on the Zipto Rider platform, you acknowledge that you have{" "}
          <strong>read, understood, and voluntarily agreed</strong> to all terms and
          conditions in this Agreement.
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
        <title>Terms & Conditions — Zipto</title>
        <meta name="description" content="Terms and Conditions for using Zipto services, including rider and customer obligations, liabilities, and policies." />
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
          width: 72px; height: 72px; border-radius: 18px;
          border: 3px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          margin: 0 auto 20px; background: var(--blue-800);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem; font-weight: 700; color: white; overflow: hidden;
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
        .card-body.open { max-height: 1200px; padding: 0 22px 22px; border-top: 1px solid var(--border); }
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

      <div className="hero">
        <div className="hero-badge">🛵 Terms & Conditions</div>

        <div className="hero-logo">
          <img src={logo} alt="Zipto Logo" />
        </div>

        <h1>Customer <em>Terms & Conditions</em></h1>

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