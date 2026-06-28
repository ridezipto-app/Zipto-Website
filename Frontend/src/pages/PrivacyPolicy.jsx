import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import logo from "../assets/bookfleet_logo.png";

const sections = [
  {
    id: "intro",
    title: "Introduction",
    number: "01",
    content: (
      <>
        <p>
          This Privacy Policy describes how <strong>Zipto Hyperlogistics Private
            Limited</strong> ("bookfleet", "Company", "We", "Us") collects, uses, and
          protects your information when you use the bookfleet Customer Application,
          website, and related services.
        </p>
        <p className="mt-3">
          By using bookfleet, you explicitly consent to the collection and use of
          your data as described in this policy.
        </p>
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
        <li><span className="label">Email</span><a href="mailto:support@bookfleet.com">support@bookfleet.com</a></li>
      </ul>
    ),
  },
  {
    id: "collection",
    title: "Information We Collect",
    number: "03",
    content: (
      <div className="sub-sections">
        <div className="sub-block">
          <h4>A. Personal Information</h4>
          <ul className="dot-list"><li>Full Name</li><li>Mobile Number</li><li>Email Address</li></ul>
        </div>
        <div className="sub-block">
          <h4>B. Location Data</h4>
          <p>We collect location data to:</p>
          <ul className="dot-list">
            <li>Enable pickup and delivery services</li>
            <li>Provide real-time tracking</li>
            <li>Improve service accuracy</li>
          </ul>
          <div className="notice-pill">📍 Location is collected only when required for active services.</div>
        </div>
        <div className="sub-block">
          <h4>C. Order &amp; Transaction Data</h4>
          <ul className="dot-list">
            <li>Pickup and delivery addresses</li>
            <li>Order details &amp; delivery instructions</li>
            <li>Payment method (UPI / Cash / COD)</li>
          </ul>
        </div>
        <div className="sub-block">
          <h4>D. Device &amp; Usage Information</h4>
          <ul className="dot-list"><li>Device type</li><li>IP address</li><li>App usage data</li></ul>
        </div>
        <div className="sub-block">
          <h4>E. Verification Data</h4>
          <ul className="dot-list">
            <li>OTP usage (email-based and in-app)</li>
            <li>Authentication logs for security purposes</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "otp",
    title: "OTP & Verification",
    number: "04",
    content: (
      <>
        <p>bookfleet uses secure verification mechanisms for authentication and delivery operations:</p>
        <ul className="dot-list mt-3">
          <li>Email OTP may be used for account login and verification</li>
          <li>Pickup and Delivery OTPs are generated within the application</li>
        </ul>
        <div className="notice-pill mt-4">🔒 OTPs are used <strong>only</strong> for authentication and delivery confirmation — never for marketing.</div>
      </>
    ),
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    number: "05",
    content: (
      <ul className="dot-list">
        <li>Provide pickup and delivery services</li>
        <li>Assign delivery partners</li>
        <li>Process orders and facilitate payments</li>
        <li>Send notifications and service updates</li>
        <li>Improve platform performance and reliability</li>
      </ul>
    ),
  },
  {
    id: "nature",
    title: "Nature of Service",
    number: "06",
    content: (
      <>
        <p>bookfleet is a <strong>logistics facilitation platform</strong> that facilitates the movement of goods.</p>
        <div className="two-col mt-4">
          <div className="col-block no-block">
            <h4>bookfleet Does NOT</h4>
            <ul className="dot-list">
              <li>Sell, manufacture, or own any products</li>
              <li>Control product quality, legality, or condition</li>
            </ul>
          </div>
          <div className="col-block yes-block">
            <h4>Responsibility Lies With</h4>
            <ul className="dot-list">
              <li>Sender</li>
              <li>Seller</li>
              <li>Third-party provider</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Data Sharing",
    number: "07",
    content: (
      <>
        <p>We may share limited information with:</p>
        <ul className="dot-list mt-3">
          <li>Delivery partners (for order execution)</li>
          <li>Payment gateways</li>
          <li>Service providers (analytics, support, infrastructure)</li>
          <li>Legal authorities (if required by law)</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">🚫 bookfleet does <strong>NOT</strong> sell personal data.</div>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment Security",
    number: "08",
    content: (
      <>
        <p>All payments are processed through secure third-party providers. bookfleet does <strong>not</strong> store:</p>
        <ul className="dot-list mt-3">
          <li>Card details</li>
          <li>UPI PIN</li>
          <li>Payment authentication credentials</li>
        </ul>
        <div className="notice-pill mt-4">🔐 bookfleet does not send OTPs for payment authentication.</div>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    number: "09",
    content: (
      <ul className="dot-list">
        <li>As long as your account is active</li>
        <li>As required under applicable laws and regulations</li>
      </ul>
    ),
  },
  {
    id: "responsibility",
    title: "User Responsibility",
    number: "10",
    content: (
      <>
        <p>Users must ensure:</p>
        <ul className="dot-list mt-3">
          <li>Accurate pickup and delivery details</li>
          <li>Correct item description</li>
          <li>Items are legal and safe for transport</li>
        </ul>
        <p className="mt-3 text-muted">bookfleet reserves the right to refuse unsafe or restricted items.</p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    number: "11",
    content: (
      <>
        <p>bookfleet shall not be responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Product quality or condition</li>
          <li>Incorrect or incomplete items</li>
          <li>Expired or damaged goods</li>
          <li>Indirect or consequential losses</li>
        </ul>
        <p className="mt-3 text-muted">bookfleet's responsibility is limited strictly to logistics services.</p>
      </>
    ),
  },
  {
    id: "rights",
    title: "User Rights",
    number: "12",
    content: (
      <>
        <p>You may:</p>
        <ul className="dot-list mt-3">
          <li>Access your data</li>
          <li>Update your information</li>
          <li>Request account deletion</li>
        </ul>
        <div className="contact-chip mt-4">📩 <a href="mailto:support@bookfleet.com">support@bookfleet.com</a></div>
      </>
    ),
  },
  {
    id: "deletion",
    title: "Account Deletion",
    number: "13",
    content: (
      <p>Users may request deletion via email. Data will be removed within a reasonable timeframe, subject to legal obligations.</p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    number: "14",
    content: <p>We may use cookies and similar technologies to enhance user experience and improve platform performance.</p>,
  },
  {
    id: "children",
    title: "Children's Privacy",
    number: "15",
    content: <p>bookfleet services are <strong>not intended</strong> for individuals under the age of 18.</p>,
  },
  {
    id: "changes",
    title: "Changes to Policy",
    number: "16",
    content: <p>We may update this Privacy Policy from time to time. Continued use of the service constitutes acceptance of updated terms.</p>,
  },
  {
    id: "contact",
    title: "Contact & Grievance",
    number: "17",
    content: (
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon">📧</div>
          <div>
            <div className="c-label">Email</div>
            <a href="mailto:support@bookfleet.com">support@bookfleet.com</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">📍</div>
          <div>
            <div className="c-label">Location</div>
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
];

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (id) =>
    setActiveSection((prev) => (prev === id ? null : id));

  return (
    <>
      <Helmet>
        <title>Privacy Policy – bookfleet | bookfleet.in</title>
        <meta name="description" content="bookfleet Privacy Policy: how we collect, use, and protect your data on the bookfleet delivery platform." />
        <link rel="canonical" href="https://bookfleet.in/privacy-policy" />
        <meta property="og:title" content="Privacy Policy – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/privacy-policy" />
        <meta property="og:image" content="https://bookfleet.in/logo.jpeg" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --blue-950: #03122b;
          --blue-900: #062553;
          --blue-800: #0a3880;
          --blue-700: #0d4db3;
          --blue-600: #1563d4;
          --blue-500: #2979f5;
          --blue-400: #5b9bff;
          --blue-300: #93bfff;
          --blue-200: #c4d9ff;
          --blue-100: #e8f0ff;
          --blue-50:  #f0f5ff;
          --accent:   #00c6ff;
          --white:    #ffffff;
          --text-primary:   #0d1b3e;
          --text-secondary: #3a4f7a;
          --text-muted:     #7a92be;
          --border:   rgba(21,99,212,0.15);
          --shadow-sm: 0 1px 4px rgba(5,50,150,0.08);
          --shadow-md: 0 4px 20px rgba(5,50,150,0.12);
          --shadow-lg: 0 12px 40px rgba(5,50,150,0.18);
          --radius:   14px;
          --font-body: 'Sora', sans-serif;
          --font-display: 'DM Serif Display', serif;
        }

        body { font-family: var(--font-body); background: var(--blue-50); color: var(--text-primary); }


        /* ─── HERO BANNER ─── */
        .hero {
          background: linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 60%, var(--blue-500) 100%);
          padding: 64px 24px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
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
  width: 120px;
  height: 120px;
  border-radius: 32px;
  overflow: hidden;
  border: 3px solid rgba(255,255,255,0.3);
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  margin: 0 auto 20px;

  background: var(--blue-800);
  display: flex;
  align-items: center;
  justify-content: center;
}
        .hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: white; line-height: 1.1;
          letter-spacing: -0.01em;
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

        /* ─── MAIN LAYOUT ─── */
        .page-wrap {
          max-width: 860px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }

        /* ─── SECTION CARD ─── */
        .policy-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          margin-bottom: 12px;
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: box-shadow 0.25s;
        }
        .policy-card:hover { box-shadow: var(--shadow-md); }
        .policy-card.open { box-shadow: var(--shadow-md); }

        .card-header {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px; cursor: pointer;
          user-select: none;
          transition: background 0.2s;
        }
        .card-header:hover { background: var(--blue-50); }

        .section-number {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
          color: var(--blue-400); min-width: 28px;
        }
        .section-title {
          flex: 1;
          font-size: 0.95rem; font-weight: 600;
          color: var(--text-primary);
        }
        .chevron {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--blue-100);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; color: var(--blue-600);
          transition: transform 0.3s, background 0.2s;
          flex-shrink: 0;
        }
        .policy-card.open .chevron {
          transform: rotate(180deg);
          background: var(--blue-600); color: white;
        }

        .card-body {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s;
          padding: 0 22px;
        }
        .card-body.open {
          max-height: 1200px;
          padding: 0 22px 22px;
          border-top: 1px solid var(--border);
        }
        .card-body p, .card-body li {
          font-size: 0.875rem; line-height: 1.7;
          color: var(--text-secondary);
        }
        .card-body .mt-3 { margin-top: 12px; }
        .card-body .mt-4 { margin-top: 16px; }

        /* ─── INFO LIST ─── */
        .info-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .info-list li {
          display: flex; gap: 10px;
          font-size: 0.875rem; color: var(--text-secondary);
          padding: 10px 14px; background: var(--blue-50);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .info-list .label { font-weight: 600; color: var(--blue-700); min-width: 130px; flex-shrink: 0; }
        .info-list a { color: var(--blue-600); text-decoration: none; }
        .info-list a:hover { text-decoration: underline; }

        /* ─── DOT LIST ─── */
        .dot-list { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .dot-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;
        }
        .dot-list li::before {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue-500);
          margin-top: 6px; flex-shrink: 0;
        }

        /* ─── SUB SECTIONS ─── */
        .sub-sections { display: flex; flex-direction: column; gap: 16px; }
        .sub-block { padding: 14px 16px; background: var(--blue-50); border-radius: 10px; border: 1px solid var(--border); }
        .sub-block h4 {
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--blue-700);
          margin-bottom: 8px;
        }

        /* ─── NOTICE PILL ─── */
        .notice-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--blue-100); border: 1px solid var(--blue-200);
          color: var(--blue-800); font-size: 0.78rem; font-weight: 500;
          padding: 7px 14px; border-radius: 8px; line-height: 1.5;
        }
        .notice-pill.notice-warn {
          background: #fff4e5; border-color: #ffd591; color: #7c4a00;
        }

        /* ─── TWO COL ─── */
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 540px) { .two-col { grid-template-columns: 1fr; } }
        .col-block { padding: 14px; border-radius: 10px; }
        .col-block h4 { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
        .no-block { background: #fff4f4; border: 1px solid #ffd0d0; }
        .no-block h4 { color: #c0392b; }
        .yes-block { background: var(--blue-50); border: 1px solid var(--blue-200); }
        .yes-block h4 { color: var(--blue-700); }

        /* ─── CONTACT ─── */
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

        .contact-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 16px; background: var(--blue-100);
          border: 1px solid var(--blue-200); border-radius: 99px;
          font-size: 0.82rem; font-weight: 500; color: var(--blue-800);
        }
        .contact-chip a { color: var(--blue-700); text-decoration: none; font-weight: 600; }

        /* ─── TEXT MUTED ─── */
        .text-muted { color: var(--text-muted) !important; font-style: italic; font-size: 0.82rem; }

        /* ─── FOOTER ─── */
        .policy-footer {
          text-align: center; padding: 32px 20px;
          border-top: 1px solid var(--border);
          margin-top: 20px;
        }
        .policy-footer p { font-size: 0.78rem; color: var(--text-muted); }
        .policy-footer .brand { font-weight: 700; color: var(--blue-600); }

        /* ─── EXPAND ALL ─── */
        .toolbar {
          display: flex; justify-content: flex-end; margin-bottom: 16px;
        }
        .expand-btn {
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em;
          color: var(--blue-600); background: white; cursor: pointer;
          border: 1px solid var(--border); padding: 7px 16px; border-radius: 99px;
          transition: background 0.2s, color 0.2s;
        }
        .expand-btn:hover { background: var(--blue-600); color: white; }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">🔒 Legal &amp; Privacy</div>

        <div className="hero-logo">
          <img src={logo} alt="bookfleet Logo" />
        </div>

        <h1>bookfleet <em>Privacy</em> Policy</h1>

        <div className="hero-meta">
          <span>📅 Effective: 11 April 2026</span>
          <span>🔄 Last Updated: 11 April 2026</span>
          <span>🏢 Customer App</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="page-wrap">
        <div className="toolbar">
          <button
            className="expand-btn"
            onClick={() =>
              setActiveSection(
                activeSection ? null : sections.map((s) => s.id).join(",")
              )
            }
          >
            {activeSection ? "Collapse All ↑" : "Expand All ↓"}
          </button>
        </div>

        {sections.map((sec) => {
          const isOpen =
            activeSection === sec.id ||
            (activeSection && activeSection.includes(sec.id));
          return (
            <div key={sec.id} className={`policy-card ${isOpen ? "open" : ""}`}>
              <div className="card-header" onClick={() => toggleSection(sec.id)}>
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