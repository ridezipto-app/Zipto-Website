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
          This Cancellation &amp; Refund Policy outlines the rules governing booking
          cancellations, cancellation charges, refunds, and related processes for
          services offered through the bookfleet Customer App, website, and related
          platforms operated by{" "}
          <strong>Zipto Hyperlogistics Private Limited</strong> ("bookfleet",
          "Company", "we", "our", or "us").
        </p>
        <div className="notice-pill mt-4">
          ✅ By using bookfleet, you agree to this Cancellation &amp; Refund Policy.
        </div>
      </>
    ),
  },
  {
    id: "customer-cancellation",
    title: "Customer Cancellation",
    number: "02",
    content: (
      <>
        <p>
          Customers may cancel a booking at any time through the bookfleet App,
          subject to the following conditions:
        </p>
        <div className="sub-sections mt-3">
          <div className="sub-block yes-block">
            <h4>Before a Delivery Partner is Assigned</h4>
            <ul className="dot-list mt-2">
              <li>Cancellation is free of charge.</li>
              <li>No cancellation fee will be applied.</li>
            </ul>
          </div>
          <div className="sub-block mt-3" style={{ background: "#fff8ee", border: "1px solid #ffd591" }}>
            <h4 style={{ color: "#92400e" }}>After a Delivery Partner is Assigned</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: 8 }}>
              A cancellation fee may apply depending on:
            </p>
            <ul className="dot-list">
              <li>Distance travelled by the delivery partner.</li>
              <li>Time spent reaching the pickup location.</li>
              <li>Operational costs incurred.</li>
            </ul>
          </div>
          <div className="sub-block no-block mt-3">
            <h4>After Pickup</h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              Once the shipment has been picked up by the delivery partner, the
              booking generally cannot be cancelled unless approved by bookfleet
              under exceptional circumstances.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "cancellation-by-bookfleet",
    title: "Cancellation by bookfleet",
    number: "03",
    content: (
      <>
        <p>bookfleet reserves the right to cancel any booking due to:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🚫 Rider unavailability</div>
          <div className="service-chip">🚗 Vehicle unavailability</div>
          <div className="service-chip">📍 Incorrect booking details</div>
          <div className="service-chip">🛡️ Safety concerns</div>
          <div className="service-chip">🔍 Suspected fraud</div>
          <div className="service-chip">⚙️ Technical issues</div>
          <div className="service-chip">🌪️ Force majeure events</div>
          <div className="service-chip">📋 Policy violations</div>
        </div>
        <div className="notice-pill mt-4">
          ℹ️ Where applicable, eligible refunds will be processed.
        </div>
      </>
    ),
  },
  {
    id: "cancellation-by-partner",
    title: "Cancellation by Delivery Partner",
    number: "04",
    content: (
      <>
        <p>A delivery partner may cancel a booking due to:</p>
        <ul className="dot-list mt-3">
          <li>Vehicle breakdown.</li>
          <li>Personal emergency.</li>
          <li>Safety concerns.</li>
          <li>Incorrect booking details.</li>
          <li>Other valid operational reasons.</li>
        </ul>
        <div className="notice-pill mt-4">
          ℹ️ bookfleet will make reasonable efforts to assign another available delivery partner.
        </div>
      </>
    ),
  },
  {
    id: "refund-eligibility",
    title: "Refund Eligibility",
    number: "05",
    content: (
      <>
        <p>Refunds may be provided in situations including but not limited to:</p>
        <div className="penalty-table mt-3">
          <div className="penalty-row">
            <div className="penalty-icon warn">💳</div>
            <div className="penalty-info">
              <div className="penalty-title">Payment Completed, Booking Not Created</div>
              <div className="penalty-desc">Payment was deducted but no booking was generated.</div>
            </div>
            <div className="penalty-badge warn">Eligible</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon warn">🔁</div>
            <div className="penalty-info">
              <div className="penalty-title">Duplicate Payment</div>
              <div className="penalty-desc">Same booking charged more than once.</div>
            </div>
            <div className="penalty-badge warn">Eligible</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon warn">❌</div>
            <div className="penalty-info">
              <div className="penalty-title">Booking Cancelled by bookfleet</div>
              <div className="penalty-desc">Cancellation initiated by the platform.</div>
            </div>
            <div className="penalty-badge warn">Eligible</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon warn">🚫</div>
            <div className="penalty-info">
              <div className="penalty-title">Service Could Not Be Provided</div>
              <div className="penalty-desc">Delivery failed due to platform-side reasons.</div>
            </div>
            <div className="penalty-badge warn">Eligible</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon warn">⚠️</div>
            <div className="penalty-info">
              <div className="penalty-title">Incorrect Charge</div>
              <div className="penalty-desc">Payment charged incorrectly or in excess.</div>
            </div>
            <div className="penalty-badge warn">Eligible</div>
          </div>
        </div>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Refunds are not guaranteed for every cancelled booking.
        </div>
      </>
    ),
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Situations",
    number: "06",
    content: (
      <>
        <p>Refunds may not be provided if:</p>
        <ul className="dot-list mt-3">
          <li>The customer entered incorrect booking details.</li>
          <li>The customer was unavailable at pickup or delivery.</li>
          <li>The shipment violated bookfleet policies.</li>
          <li>Cancellation occurred after pickup without valid reason.</li>
          <li>The service was successfully completed.</li>
        </ul>
      </>
    ),
  },
  {
    id: "refund-processing",
    title: "Refund Processing Time",
    number: "07",
    content: (
      <>
        <ul className="info-list">
          <li>
            <span className="label">Processing Time</span>
            <span>Generally within 5–10 business days from approval.</span>
          </li>
          <li>
            <span className="label">Actual Credit Timeline</span>
            <span>May vary depending on your bank or payment service provider.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "refund-method",
    title: "Refund Method",
    number: "08",
    content: (
      <>
        <p>
          Refunds will normally be issued to the <strong>original payment method</strong> used
          during booking.
        </p>
        <p className="mt-3 text-muted">
          Where this is not possible, bookfleet may process the refund through another
          suitable method permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "failed-payments",
    title: "Failed or Pending Payments",
    number: "09",
    content: (
      <>
        <p>
          If a payment fails or remains pending, customers should first verify the
          transaction with their bank or payment provider.
        </p>
        <div className="notice-pill mt-4">
          📧 If the amount has been debited but the booking was not created, contact
          bookfleet Support for assistance.
        </div>
      </>
    ),
  },
  {
    id: "disputes",
    title: "Disputes",
    number: "10",
    content: (
      <>
        <p>Any cancellation or refund dispute will be reviewed by bookfleet.</p>
        <div className="notice-pill notice-warn mt-4">
          ⚖️ bookfleet's decision regarding refunds, after reviewing the relevant
          facts and applicable policies, shall be final to the extent permitted by law.
        </div>
      </>
    ),
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    number: "11",
    content: (
      <>
        <p>
          bookfleet may modify this Cancellation &amp; Refund Policy from time to time.
        </p>
        <p className="mt-3 text-muted">
          The latest version will always be available on the bookfleet website and
          application.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    number: "12",
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

export default function CancellationRefundPolicy() {
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
        <title>Cancellation & Refund Policy – bookfleet | bookfleet.in</title>
        <meta name="description" content="Learn about bookfleet's cancellation and refund policy, including cancellation fees, refund eligibility, processing times, and how to raise disputes." />
        <link rel="canonical" href="https://bookfleet.in/cancellation-refund-policy" />
        <meta property="og:title" content="Cancellation & Refund Policy – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/cancellation-refund-policy" />
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
        .sub-block.yes-block { background: var(--blue-50); border-color: var(--blue-200); }
        .sub-block.yes-block h4 { color: var(--blue-700); }

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
        .penalty-badge.warn { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
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

        .text-muted { color: var(--text-muted) !important; font-style: italic; font-size: 0.82rem; }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">💳 Cancellation &amp; Refund Policy</div>
        <div className="hero-logo">
          <img src={logo} alt="bookfleet Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <h1>Cancellation &amp; <em>Refund</em> Policy</h1>
        <div className="hero-meta">
          <span>📅 Effective: 11 April 2026</span>
          <span>👤 Customer</span>
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
