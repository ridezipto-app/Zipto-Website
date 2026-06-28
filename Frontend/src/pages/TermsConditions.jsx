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
        <p>Welcome to Bookfleet.</p>
        <p className="mt-3">
          These Terms &amp; Conditions ("Terms") govern your access to and use of the
          Bookfleet Customer App, website, and all related services operated by{" "}
          <strong>Zipto Hyperlogistics Private Limited</strong> ("Bookfleet", "Company",
          "we", "our", or "us").
        </p>
        <div className="notice-pill mt-4">
          ✅ By accessing or using the Bookfleet Platform, you agree to be legally bound
          by these Terms &amp; Conditions. If you do not agree with these Terms, please
          do not use our Platform.
        </div>
      </>
    ),
  },
  {
    id: "about",
    title: "About Bookfleet",
    number: "02",
    content: (
      <>
        <p>
          Bookfleet is a technology-enabled logistics platform that connects customers
          with independent delivery partners for on-demand transportation and delivery
          services.
        </p>
        <p className="mt-3">Bookfleet provides access to multiple vehicle categories including, but not limited to:</p>
        <ul className="dot-list mt-3">
          <li>Bike Delivery</li>
          <li>Scooter Delivery</li>
          <li>Auto Delivery</li>
          <li>Pickup Delivery</li>
          <li>Mini Truck Delivery</li>
          <li>Goods Transportation</li>
          <li>Parcel &amp; Document Delivery</li>
        </ul>
        <div className="notice-pill mt-4">
          ℹ️ Bookfleet acts only as a technology platform facilitating bookings between
          customers and independent delivery partners.
        </div>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    number: "03",
    content: (
      <>
        <p>To use Bookfleet services, you must:</p>
        <ul className="dot-list mt-3">
          <li>Be at least 18 years of age.</li>
          <li>Provide accurate and complete information.</li>
          <li>Use a valid mobile number for verification.</li>
          <li>Comply with all applicable laws and these Terms.</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Bookfleet reserves the right to refuse or terminate services if incorrect,
          misleading, or fraudulent information is provided.
        </div>
      </>
    ),
  },
  {
    id: "account",
    title: "Customer Account",
    number: "04",
    content: (
      <>
        <p>You are responsible for maintaining the confidentiality of your account and OTP verification.</p>
        <p className="mt-3">You agree to:</p>
        <ul className="dot-list mt-3">
          <li>Keep your account information accurate.</li>
          <li>Protect your login credentials.</li>
          <li>Immediately report unauthorized access.</li>
          <li>Be responsible for all activities conducted through your account.</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Bookfleet shall not be liable for losses arising from unauthorized use of your account.
        </div>
      </>
    ),
  },
  {
    id: "booking",
    title: "Booking Services",
    number: "05",
    content: (
      <>
        <p>Customers may book available logistics services through the Bookfleet Platform.</p>
        <p className="mt-3">Bookings are subject to:</p>
        <ul className="dot-list mt-3">
          <li>Vehicle availability</li>
          <li>Rider availability</li>
          <li>Serviceable locations</li>
          <li>Operational hours</li>
          <li>Safety guidelines</li>
        </ul>
        <div className="notice-pill mt-4">
          ℹ️ Bookfleet does not guarantee immediate availability of delivery partners.
        </div>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing",
    number: "06",
    content: (
      <>
        <p>Delivery charges may vary based on factors including:</p>
        <ul className="dot-list mt-3">
          <li>Distance</li>
          <li>Vehicle Type</li>
          <li>Estimated Time</li>
          <li>Traffic Conditions</li>
          <li>Demand &amp; Supply</li>
          <li>Waiting Charges</li>
          <li>Toll Charges (where applicable)</li>
          <li>Platform Fee</li>
          <li>Applicable Taxes</li>
        </ul>
        <div className="notice-pill mt-4">
          💰 The total payable amount will be displayed before confirming your booking.
        </div>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    number: "07",
    content: (
      <>
        <p>Customers may pay using available payment methods including:</p>
        <ul className="dot-list mt-3">
          <li>UPI</li>
          <li>Debit/Credit Cards</li>
          <li>Net Banking</li>
          <li>Wallets</li>
          <li>Cash (where available)</li>
        </ul>
        <div className="notice-pill mt-4">
          🔐 Bookfleet does not store complete card or banking credentials. Payment
          processing may be handled by authorized third-party payment providers.
        </div>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "Customer Responsibilities",
    number: "08",
    content: (
      <>
        <p>Customers agree to:</p>
        <ul className="dot-list mt-3">
          <li>Provide accurate pickup and delivery information.</li>
          <li>Ensure lawful shipment contents.</li>
          <li>Cooperate with delivery partners.</li>
          <li>Be available during pickup and delivery.</li>
          <li>Not misuse the platform.</li>
          <li>Comply with all applicable laws.</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Customers remain solely responsible for the contents of every shipment.
        </div>
      </>
    ),
  },
  {
    id: "prohibited",
    title: "Prohibited Items",
    number: "09",
    content: (
      <>
        <p>Customers must not book or transport prohibited items including but not limited to:</p>
        <ul className="dot-list mt-3">
          <li>Illegal goods</li>
          <li>Explosives</li>
          <li>Firearms</li>
          <li>Narcotics</li>
          <li>Hazardous chemicals</li>
          <li>Live animals (unless specifically permitted)</li>
          <li>Counterfeit goods</li>
          <li>Stolen property</li>
          <li>Items prohibited by Indian law</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          🚫 Bookfleet reserves the right to refuse any booking involving prohibited goods.
        </div>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation",
    number: "10",
    content: (
      <>
        <p>Customers may cancel bookings in accordance with the Bookfleet Cancellation Policy.</p>
        <p className="mt-3 text-muted">Cancellation charges may apply depending on the booking stage.</p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Bookfleet reserves the right to cancel bookings due to operational, safety,
          legal, or technical reasons.
        </div>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    number: "11",
    content: (
      <>
        <p>
          Bookfleet acts solely as a technology platform connecting customers with
          independent delivery partners.
        </p>
        <p className="mt-3">To the maximum extent permitted by law, Bookfleet shall not be liable for:</p>
        <ul className="dot-list mt-3">
          <li>Delay caused by traffic or weather</li>
          <li>Incorrect addresses</li>
          <li>Customer errors</li>
          <li>Force majeure events</li>
          <li>Indirect or consequential damages</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "Suspension & Termination",
    number: "12",
    content: (
      <>
        <p>Bookfleet may suspend or permanently terminate customer accounts for:</p>
        <ul className="dot-list mt-3">
          <li>Fraudulent activity</li>
          <li>Misuse of the platform</li>
          <li>Abuse towards delivery partners</li>
          <li>Illegal activities</li>
          <li>Violation of these Terms</li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to Terms",
    number: "13",
    content: (
      <>
        <p>Bookfleet may revise these Terms from time to time.</p>
        <p className="mt-3 text-muted">
          Updated Terms become effective immediately upon publication unless otherwise
          stated. Continued use of the Platform constitutes acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    number: "14",
    content: (
      <>
        <ul className="info-list">
          <li><span className="label">Governing Law</span><span>Laws of India</span></li>
          <li><span className="label">Jurisdiction</span><span>Competent courts of Bhubaneswar, Odisha</span></li>
        </ul>
      </>
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
        <title>Terms & Conditions – bookfleet | bookfleet.in</title>
        <meta name="description" content="Terms and Conditions for using bookfleet delivery services, including customer obligations, liabilities, and policies." />
        <link rel="canonical" href="https://bookfleet.in/terms-of-service" />
        <meta property="og:title" content="Terms & Conditions – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/terms-of-service" />
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
          width: 160px; height: 160px; border-radius: 28px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
          margin: 0 auto 24px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
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
        <div className="hero-badge">📋 Customer Terms &amp; Conditions</div>

        <div className="hero-logo">
          <img src={logo} alt="bookfleet Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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