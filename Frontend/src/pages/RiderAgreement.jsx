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
        <p>Welcome to <strong>bookfleet Rider Platform</strong> — powering fast, reliable intra-city delivery.</p>
        <p className="mt-3">This Rider Agreement ("Agreement") is entered into between:</p>
        <div className="two-col mt-4">
          <div className="col-block yes-block">
            <h4>Company</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Zipto Hyperlogistics Pvt. Ltd.<br />
              ("Company", "bookfleet", "We")
            </p>
          </div>
          <div className="col-block yes-block">
            <h4>Rider</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              You ("Rider", "Delivery Partner")
            </p>
          </div>
        </div>
        <div className="notice-pill mt-4">
          ✅ By registering or using the bookfleet platform, you agree to this Agreement.
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
        <p>bookfleet is a technology-enabled logistics platform that connects users with delivery partners.</p>
        <div className="sub-block mt-4">
          <h4>What bookfleet Does</h4>
          <ul className="dot-list mt-2">
            <li>Facilitates pickup &amp; delivery</li>
          </ul>
        </div>
        <div className="sub-block no-block mt-3">
          <h4>What bookfleet Does NOT Do</h4>
          <ul className="dot-list mt-2">
            <li>bookfleet does NOT own goods</li>
            <li>bookfleet does NOT act as a seller</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "status",
    title: "Independent Contractor Status",
    number: "03",
    content: (
      <>
        <p>By joining bookfleet, you operate as an <strong>independent delivery partner</strong>. This Agreement does NOT create:</p>
        <ul className="dot-list mt-3">
          <li>Employment</li>
          <li>Partnership</li>
          <li>Agency relationship</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ You are not entitled to salary, PF/ESI, insurance, or employee benefits.
        </div>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility & Onboarding",
    number: "04",
    content: (
      <>
        <p>To join bookfleet, you must be at least <strong>18 years old</strong> and hold a valid driving license. You must provide:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🪪 Driving License</div>
          <div className="service-chip">🚗 Vehicle RC</div>
          <div className="service-chip">📄 Identity Proof</div>
          <div className="service-chip">🏦 Bank Details</div>
        </div>
        <p className="mt-3 text-muted">
          bookfleet reserves the right to approve or reject applications at its sole discretion.
        </p>
      </>
    ),
  },
  {
    id: "role",
    title: "Role & Services",
    number: "05",
    content: (
      <>
        <p>You agree to perform pickup and delivery services, including:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🍔 Restaurants</div>
          <div className="service-chip">💊 Pharmacies</div>
          <div className="service-chip">📦 Parcels & Packages</div>
          <div className="service-chip">🚚 Goods & Bulk Items</div>
        </div>
        <div className="notice-pill mt-4">
          📍 Delivery flow: Pickup → Transport → Drop
        </div>
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
          <li>You choose your own working hours</li>
          <li>You may accept or reject orders freely</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Your performance impacts order allocation, platform visibility, and account status.
        </div>
      </>
    ),
  },
  {
    id: "earnings",
    title: "Earnings & Payouts",
    number: "07",
    content: (
      <>
        <div className="two-col mt-3">
          <div className="col-block yes-block">
            <h4>Earnings Include</h4>
            <ul className="dot-list">
              <li>Base fare</li>
              <li>Distance-based charges</li>
              <li>Incentives / bonuses</li>
            </ul>
          </div>
          <div className="col-block no-block">
            <h4>Deductions May Include</h4>
            <ul className="dot-list">
              <li>Platform fees</li>
              <li>Penalties</li>
              <li>Cancellation charges</li>
            </ul>
          </div>
        </div>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Earnings are dynamic and not guaranteed. Income depends on demand, location, and performance.
        </div>
        <div className="notice-pill mt-3">
          💳 Payouts are processed periodically to your registered bank account.
        </div>
      </>
    ),
  },
  {
    id: "performance",
    title: "Performance Standards",
    number: "08",
    content: (
      <>
        <p>bookfleet may monitor:</p>
        <ul className="dot-list mt-3">
          <li>Acceptance rate</li>
          <li>Cancellation rate</li>
          <li>Delivery completion</li>
          <li>Customer ratings</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Poor performance may result in reduced orders, temporary suspension, or permanent deactivation.
        </div>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "Rider Responsibilities",
    number: "09",
    content: (
      <>
        <p>You agree to:</p>
        <ul className="dot-list mt-3">
          <li>Follow all traffic laws</li>
          <li>Maintain professional conduct</li>
          <li>Ensure safe handling of items</li>
          <li>Verify delivery details</li>
          <li>Complete deliveries on time</li>
        </ul>
        <div className="sub-block no-block mt-4">
          <h4>Strictly Prohibited</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            You must NOT open, tamper, or misuse any package under any circumstances.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "penalties",
    title: "Penalties & Platform Discipline",
    number: "10",
    content: (
      <>
        <p>To maintain service quality, bookfleet may impose the following penalties:</p>

        <div className="penalty-table mt-4">
          <div className="penalty-row">
            <div className="penalty-icon warn">⚠️</div>
            <div className="penalty-info">
              <div className="penalty-title">Order Cancellation (after accept)</div>
              <div className="penalty-desc">Repeated cancellations may lead to suspension</div>
            </div>
            <div className="penalty-badge warn">Suspension Risk</div>
          </div>

          <div className="penalty-row">
            <div className="penalty-icon red">📦</div>
            <div className="penalty-info">
              <div className="penalty-title">Mishandling / Damage (negligence)</div>
              <div className="penalty-desc">Severe cases may result in deactivation</div>
            </div>
            <div className="penalty-badge red">₹100 – ₹500</div>
          </div>

          <div className="penalty-row">
            <div className="penalty-icon red">🚫</div>
            <div className="penalty-info">
              <div className="penalty-title">Fraud / Fake Delivery</div>
              <div className="penalty-desc">Earnings hold + legal action</div>
            </div>
            <div className="penalty-badge red">Immediate Termination</div>
          </div>

          <div className="penalty-row">
            <div className="penalty-icon red">📱</div>
            <div className="penalty-info">
              <div className="penalty-title">Platform Misuse</div>
              <div className="penalty-desc">Data misuse or app manipulation</div>
            </div>
            <div className="penalty-badge red">Permanent Ban</div>
          </div>

          <div className="penalty-row">
            <div className="penalty-icon red">🚔</div>
            <div className="penalty-info">
              <div className="penalty-title">Illegal Deliveries</div>
              <div className="penalty-desc">Immediate deactivation</div>
            </div>
            <div className="penalty-badge red">Legal Action</div>
          </div>
        </div>

        <div className="notice-pill notice-warn mt-4">
          ⚖️ bookfleet reserves the right to adjust penalties based on severity.
        </div>
      </>
    ),
  },
  {
    id: "safety",
    title: "Safety & Compliance",
    number: "11",
    content: (
      <>
        <p>You are solely responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Vehicle condition &amp; maintenance</li>
          <li>Valid documents &amp; insurance</li>
          <li>Personal safety during deliveries</li>
          <li>Legal compliance</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ bookfleet is NOT liable for accidents, injuries, or violations.
        </div>
      </>
    ),
  },
  {
    id: "insurance",
    title: "Insurance",
    number: "12",
    content: (
      <>
        <p>bookfleet does <strong>not</strong> provide insurance unless explicitly stated.</p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Riders must manage their own vehicle insurance and personal coverage.
        </div>
      </>
    ),
  },
  {
    id: "equipment",
    title: "Equipment & Expenses",
    number: "13",
    content: (
      <>
        <p>You are responsible for providing and maintaining:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🚗 Vehicle</div>
          <div className="service-chip">⛽ Fuel</div>
          <div className="service-chip">📱 Mobile Device</div>
          <div className="service-chip">📶 Internet</div>
        </div>
        <p className="mt-3 text-muted">
          bookfleet does not reimburse operational costs unless specifically agreed upon.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Account Suspension & Termination",
    number: "14",
    content: (
      <>
        <p>bookfleet may suspend or terminate your account for:</p>
        <ul className="dot-list mt-3">
          <li>Fraud or misconduct</li>
          <li>Policy violations</li>
          <li>Poor performance</li>
          <li>Legal non-compliance</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Severe violations may result in immediate termination without prior notice.
        </div>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Data & Privacy",
    number: "15",
    content: (
      <>
        <p>Your data is handled as per the bookfleet Rider Privacy Policy. By using the app, you consent to:</p>
        <ul className="dot-list mt-3">
          <li>Data collection</li>
          <li>Location tracking (including background GPS)</li>
        </ul>
        <div className="notice-pill mt-4">
          📍 Location data is used solely to facilitate deliveries and improve platform performance.
        </div>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    number: "16",
    content: (
      <>
        <p>To the maximum extent permitted by law, bookfleet shall not be liable for:</p>
        <ul className="dot-list mt-3">
          <li>Loss of income</li>
          <li>Accidents or injuries</li>
          <li>Customer disputes</li>
          <li>Third-party issues</li>
          <li>App downtime</li>
        </ul>
        <div className="notice-pill mt-4">
          📍 bookfleet's role is limited to platform facilitation only.
        </div>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    number: "17",
    content: (
      <>
        <p>You agree to indemnify and hold harmless bookfleet against:</p>
        <ul className="dot-list mt-3">
          <li>Claims</li>
          <li>Damages</li>
          <li>Legal costs</li>
        </ul>
        <p className="mt-3 text-muted">
          arising from your negligence, violations of this Agreement, or illegal activities.
        </p>
      </>
    ),
  },
  {
    id: "force",
    title: "Force Majeure",
    number: "18",
    content: (
      <p>
        bookfleet is not liable for delays or failures caused by natural disasters,
        government restrictions, network failures, or any other events beyond its reasonable control.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law & Jurisdiction",
    number: "19",
    content: (
      <ul className="info-list">
        <li><span className="label">Governing Law</span><span>Laws of India</span></li>
        <li><span className="label">Jurisdiction</span><span>Bhubaneswar, Odisha</span></li>
      </ul>
    ),
  },
  {
    id: "modifications",
    title: "Changes to Agreement",
    number: "20",
    content: (
      <p>
        bookfleet may update this Agreement at any time. Continued use of the platform
        after changes constitutes your acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & Support",
    number: "21",
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
            <div className="c-label">Office</div>
            <span>Bhubaneswar, Odisha, India</span>
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
    number: "22",
    content: (
      <div className="acceptance-box">
        <div className="accept-icon">✅</div>
        <p>
          By registering on the bookfleet Rider platform, you confirm that you have{" "}
          <strong>read, understood, and voluntarily agreed</strong> to all terms in this
          Agreement and that you are joining as an independent delivery partner.
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
        <div className="hero-badge">🛵 Rider Onboarding Agreement</div>
        <div className="hero-logo">
          <img src={riderlogo} alt="bookfleet Logo" />
        </div>
        <h1>Rider Onboarding <em>Agreement</em></h1>
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