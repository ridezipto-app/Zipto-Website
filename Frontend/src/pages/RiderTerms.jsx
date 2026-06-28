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
        <p>Welcome to <strong>bookfleet Rider Platform</strong> — a network of independent delivery partners powering intra-city logistics.</p>
        <p className="mt-3">These Terms &amp; Conditions ("Terms") govern your use of the bookfleet Rider Application and related services operated by:</p>
        <div className="col-block yes-block mt-4">
          <h4>Platform Operator</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Zipto Hyperlogistics Private Limited<br />
            ("bookfleet", "we", "our", "us")
          </p>
        </div>
        <div className="notice-pill mt-4">
          ✅ By registering or using the platform, you agree to these Terms.
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
        <p>bookfleet is a technology-enabled logistics platform that connects customers with delivery partners.</p>
        <div className="two-col mt-4">
          <div className="col-block yes-block">
            <h4>bookfleet Does</h4>
            <ul className="dot-list mt-2">
              <li>Facilitates order allocation</li>
              <li>Coordinates logistics</li>
            </ul>
          </div>
          <div className="col-block no-block">
            <h4>bookfleet Does NOT</h4>
            <ul className="dot-list mt-2">
              <li>Sell products</li>
              <li>Act as a seller</li>
              <li>Employ riders as full-time staff</li>
              <li>Own goods being transported</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "status",
    title: "Rider Status (Important)",
    number: "03",
    content: (
      <>
        <p>By joining bookfleet:</p>
        <ul className="dot-list mt-3">
          <li>You act as an <strong>independent delivery partner</strong></li>
          <li>This is <strong>not</strong> an employment relationship</li>
          <li>You control your own working hours</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ No salary, PF/ESI, insurance, or employee benefits are provided.
        </div>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    number: "04",
    content: (
      <>
        <p>To become a bookfleet rider, you must:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🎂 At least 18 years old</div>
          <div className="service-chip">🪪 Valid Driving License</div>
          <div className="service-chip">🚗 Valid Vehicle Access</div>
          <div className="service-chip">📄 Accurate KYC Documents</div>
        </div>
      </>
    ),
  },
  {
    id: "services",
    title: "Services",
    number: "05",
    content: (
      <>
        <p>Riders perform pickup and delivery of:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🍔 Food & Restaurant Items</div>
          <div className="service-chip">💊 Medicines & Pharmacy</div>
          <div className="service-chip">📦 Parcels & Packages</div>
          <div className="service-chip">🚚 Goods & Bulk Items</div>
        </div>
        <div className="notice-pill mt-4">
          📍 Delivery model: Pickup → Transport → Drop
        </div>
      </>
    ),
  },
  {
    id: "otp",
    title: "OTP & Verification",
    number: "06",
    content: (
      <>
        <p>bookfleet uses OTP-based verification for security:</p>
        <ul className="dot-list mt-3">
          <li>OTP may be sent via email or mobile for login</li>
          <li>Pickup and delivery OTP must be verified before order completion</li>
        </ul>
        <div className="sub-block no-block mt-4">
          <h4>Rider Obligation</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            You must not share OTP with any unauthorized person. bookfleet is not responsible for misuse due to rider negligence.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "Rider Responsibilities",
    number: "07",
    content: (
      <>
        <p>Riders agree to:</p>
        <ul className="dot-list mt-3">
          <li>Follow traffic laws and regulations</li>
          <li>Maintain professional conduct</li>
          <li>Ensure safe and timely delivery</li>
          <li>Verify pickup and drop details</li>
          <li>Handle items with care</li>
        </ul>
        <div className="sub-block no-block mt-4">
          <h4>Strictly Prohibited</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Riders must NOT open, tamper, or misuse any item under any circumstances.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Order Acceptance & Cancellation",
    number: "08",
    content: (
      <>
        <ul className="dot-list">
          <li>Riders should accept orders responsibly</li>
          <li>Frequent cancellations may affect account performance</li>
          <li>Cancellation after pickup is strictly prohibited</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ bookfleet may apply penalties for misuse of the order system.
        </div>
      </>
    ),
  },
  {
    id: "earnings",
    title: "Earnings & Payouts",
    number: "09",
    content: (
      <>
        <div className="two-col mt-3">
          <div className="col-block yes-block">
            <h4>Earnings Include</h4>
            <ul className="dot-list">
              <li>Base delivery fare</li>
              <li>Distance-based charges</li>
              <li>Incentives and bonuses</li>
            </ul>
          </div>
          <div className="col-block no-block">
            <h4>Deductions May Include</h4>
            <ul className="dot-list">
              <li>Platform fees</li>
              <li>Penalties or deductions</li>
            </ul>
          </div>
        </div>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Earnings are dynamic and not guaranteed.
        </div>
        <div className="notice-pill mt-3">
          💳 Payouts processed periodically as per platform policy.
        </div>
      </>
    ),
  },
  {
    id: "cod",
    title: "Payment Responsibility (COD)",
    number: "10",
    content: (
      <>
        <p>Riders are responsible for handling <strong>Cash on Delivery (COD)</strong> amounts correctly. Any discrepancy, delay, or misuse may result in:</p>
        <div className="penalty-table mt-4">
          <div className="penalty-row">
            <div className="penalty-icon warn">⚠️</div>
            <div className="penalty-info">
              <div className="penalty-title">Discrepancy / Delay</div>
              <div className="penalty-desc">COD amount mismatch or delayed submission</div>
            </div>
            <div className="penalty-badge warn">Penalties</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon red">💸</div>
            <div className="penalty-info">
              <div className="penalty-title">Recovery from Earnings</div>
              <div className="penalty-desc">Amount deducted from pending payouts</div>
            </div>
            <div className="penalty-badge red">Deduction</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon red">🚫</div>
            <div className="penalty-info">
              <div className="penalty-title">COD Misuse</div>
              <div className="penalty-desc">Fraudulent handling of cash amounts</div>
            </div>
            <div className="penalty-badge red">Account Suspension</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "performance",
    title: "Performance & Ratings",
    number: "11",
    content: (
      <>
        <p>bookfleet may monitor:</p>
        <ul className="dot-list mt-3">
          <li>Order acceptance rate</li>
          <li>Cancellation rate</li>
          <li>Customer ratings</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Poor performance may lead to reduced order allocation, temporary suspension, or permanent deactivation.
        </div>
      </>
    ),
  },
  {
    id: "prohibited",
    title: "Prohibited Conduct",
    number: "12",
    content: (
      <>
        <p>Riders must <strong>not</strong>:</p>
        <ul className="dot-list mt-3">
          <li>Engage in fraud or fake deliveries</li>
          <li>Misuse customer data</li>
          <li>Deliver illegal or restricted items</li>
          <li>Behave abusively or unprofessionally</li>
          <li>Delay or cancel orders intentionally</li>
        </ul>
        <div className="sub-block no-block mt-4">
          <h4>Consequences</h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Violations may lead to immediate deactivation and legal action.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "vehicle",
    title: "Vehicle & Safety Responsibility",
    number: "13",
    content: (
      <>
        <p>Riders are solely responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Vehicle condition and maintenance</li>
          <li>Valid insurance and documentation</li>
          <li>Personal safety during deliveries</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ bookfleet does not provide vehicle ownership or employment benefits.
        </div>
      </>
    ),
  },
  {
    id: "location",
    title: "Location Requirement",
    number: "14",
    content: (
      <>
        <p>Riders must keep <strong>GPS and location services enabled</strong> while using the app. Disabling location may result in:</p>
        <ul className="dot-list mt-3">
          <li>Reduced order allocation</li>
          <li>Restricted platform access</li>
        </ul>
        <div className="notice-pill mt-4">
          📍 Location data is used solely to facilitate efficient order allocation and delivery.
        </div>
      </>
    ),
  },
  {
    id: "liability",
    title: "Liability Limitation",
    number: "15",
    content: (
      <>
        <p>bookfleet shall not be responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Rider negligence</li>
          <li>Accidents during delivery</li>
          <li>Legal violations by the rider</li>
          <li>Product-related issues</li>
        </ul>
        <div className="notice-pill mt-4">
          📍 bookfleet's role is limited to platform facilitation only.
        </div>
      </>
    ),
  },
  {
    id: "fraud",
    title: "Fraud & Misuse",
    number: "16",
    content: (
      <>
        <p>bookfleet reserves the right to take the following actions in case of fraud, misuse, or policy violations:</p>
        <div className="penalty-table mt-4">
          <div className="penalty-row">
            <div className="penalty-icon warn">⚠️</div>
            <div className="penalty-info">
              <div className="penalty-title">Policy Violations</div>
              <div className="penalty-desc">Breach of platform rules or guidelines</div>
            </div>
            <div className="penalty-badge warn">Account Suspension</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon red">🚫</div>
            <div className="penalty-info">
              <div className="penalty-title">Fraud or Misuse</div>
              <div className="penalty-desc">Deliberate fraudulent activity on platform</div>
            </div>
            <div className="penalty-badge red">Termination + Legal Action</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "thirdparty",
    title: "Third-Party Services",
    number: "17",
    content: (
      <>
        <p>bookfleet may use third-party services including maps, payment gateways, and communication tools.</p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ bookfleet is not responsible for failures, downtime, or issues caused by third-party services.
        </div>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    number: "18",
    content: (
      <>
        <p>Rider data is handled as per the <strong>bookfleet Rider Privacy Policy</strong>. By using the platform, you consent to data collection including location tracking.</p>
        <div className="notice-pill mt-4">
          📍 Your data is used solely to facilitate platform operations and improve services.
        </div>
      </>
    ),
  },
  {
    id: "force",
    title: "Force Majeure",
    number: "19",
    content: (
      <p>
        bookfleet is not liable for delays or service interruptions caused by events beyond its reasonable control, including natural disasters, government restrictions, or network failures.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    number: "20",
    content: (
      <ul className="info-list">
        <li><span className="label">Governing Law</span><span>Laws of India</span></li>
        <li><span className="label">Jurisdiction</span><span>Bhubaneswar, Odisha</span></li>
      </ul>
    ),
  },
  {
    id: "changes",
    title: "Changes to Terms",
    number: "21",
    content: (
      <p>
        bookfleet may update these Terms at any time. Continued use of the platform after changes
        constitutes your acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & Support",
    number: "22",
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
      </div>
    ),
  },
  {
    id: "grievance",
    title: "Grievance Officer",
    number: "23",
    content: (
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon">👤</div>
          <div>
            <div className="c-label">Grievance Officer</div>
            <span>bookfleet Support Team</span>
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
    number: "24",
    content: (
      <div className="acceptance-box">
        <div className="accept-icon">✅</div>
        <p>
          By using the bookfleet Rider Platform, you confirm that you have{" "}
          <strong>read, understood, and agreed</strong> to these Terms &amp; Conditions
          in their entirety.
        </p>
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
          border-radius: 50%;
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