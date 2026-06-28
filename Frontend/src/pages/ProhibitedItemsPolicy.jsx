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
          This Prohibited Items Policy outlines the categories of goods and materials
          that must not be booked, transported, or delivered through the bookfleet
          platform operated by{" "}
          <strong>Zipto Hyperlogistics Private Limited</strong> ("bookfleet",
          "Company", "we", "our", or "us").
        </p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Customers are solely responsible for ensuring that every shipment
          complies with applicable laws and this Policy.
        </div>
      </>
    ),
  },
  {
    id: "prohibited-items",
    title: "Prohibited Items",
    number: "02",
    content: (
      <>
        <p>The following items are <strong>strictly prohibited</strong> from being transported through bookfleet:</p>

        <div className="proh-block mt-4">
          <div className="proh-header">🚫 Illegal Goods</div>
          <ul className="dot-list mt-2">
            <li>Narcotic drugs and psychotropic substances</li>
            <li>Counterfeit products</li>
            <li>Smuggled goods</li>
            <li>Stolen property</li>
            <li>Any item prohibited under Indian law</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">☣️ Dangerous &amp; Hazardous Materials</div>
          <ul className="dot-list mt-2">
            <li>Explosives</li>
            <li>Fireworks</li>
            <li>Ammunition</li>
            <li>Flammable liquids or gases</li>
            <li>Toxic chemicals</li>
            <li>Corrosive substances</li>
            <li>Radioactive materials</li>
            <li>Biohazardous materials</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">🔫 Weapons</div>
          <ul className="dot-list mt-2">
            <li>Firearms, rifles, pistols</li>
            <li>Air guns</li>
            <li>Swords</li>
            <li>Explosive devices</li>
            <li>Weapon parts prohibited by law</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">💊 Restricted Medicines</div>
          <ul className="dot-list mt-2">
            <li>Prescription medicines without valid authorization (where required)</li>
            <li>Illegal drugs</li>
            <li>Controlled substances</li>
            <li>Medical waste</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">💵 Cash &amp; Financial Instruments</div>
          <ul className="dot-list mt-2">
            <li>Currency notes and coins</li>
            <li>Cheques and demand drafts</li>
            <li>Credit / debit cards</li>
            <li>Gift cards</li>
            <li>Precious securities</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">💎 Valuable Items</div>
          <ul className="dot-list mt-2">
            <li>Gold, silver, diamonds</li>
            <li>Precious stones and jewellery</li>
            <li>High-value collectibles</li>
            <li>Antiques</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">🐾 Live Animals &amp; Wildlife</div>
          <ul className="dot-list mt-2">
            <li>Live animals, birds, reptiles</li>
            <li>Wildlife and protected species</li>
            <li>Animal organs</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">🧬 Human Remains</div>
          <ul className="dot-list mt-2">
            <li>Human organs or remains</li>
            <li>Biological samples</li>
            <li>Medical specimens requiring special handling</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">🔞 Adult &amp; Illegal Content</div>
          <ul className="dot-list mt-2">
            <li>Obscene materials</li>
            <li>Pornographic content</li>
            <li>Any material prohibited under applicable laws</li>
          </ul>
        </div>

        <div className="proh-block mt-3">
          <div className="proh-header">📦 Other Restricted Items</div>
          <ul className="dot-list mt-2">
            <li>Perishable goods requiring special storage unless specifically supported by bookfleet</li>
            <li>Items emitting strong odours</li>
            <li>Leaking packages</li>
            <li>Unsafe or improperly packed goods</li>
            <li>Any shipment considered unsafe by bookfleet</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "customer-responsibility",
    title: "Customer Responsibility",
    number: "03",
    content: (
      <>
        <p>Customers are solely responsible for:</p>
        <ul className="dot-list mt-3">
          <li>Ensuring shipment contents are lawful.</li>
          <li>Properly packing items.</li>
          <li>Providing accurate shipment information.</li>
          <li>Complying with all applicable laws and regulations.</li>
        </ul>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Customers must not conceal prohibited items inside other packages.
        </div>
      </>
    ),
  },
  {
    id: "inspection-rights",
    title: "Inspection Rights",
    number: "04",
    content: (
      <>
        <p>bookfleet reserves the right to:</p>
        <div className="service-grid mt-3">
          <div className="service-chip">🚫 Refuse any shipment</div>
          <div className="service-chip">❌ Cancel any booking</div>
          <div className="service-chip">📋 Request shipment information</div>
          <div className="service-chip">🚨 Report to authorities</div>
        </div>
        <div className="notice-pill mt-4">
          ℹ️ bookfleet may refuse transportation if it reasonably believes a
          shipment violates this Policy or applicable laws.
        </div>
      </>
    ),
  },
  {
    id: "consequences",
    title: "Consequences of Violation",
    number: "05",
    content: (
      <>
        <p>Violation of this Policy may result in:</p>
        <div className="penalty-table mt-3">
          <div className="penalty-row">
            <div className="penalty-icon red">❌</div>
            <div className="penalty-info">
              <div className="penalty-title">Booking Cancellation</div>
              <div className="penalty-desc">Immediate cancellation of the booking without refund.</div>
            </div>
            <div className="penalty-badge red">Immediate</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon red">🚫</div>
            <div className="penalty-info">
              <div className="penalty-title">Account Suspension or Termination</div>
              <div className="penalty-desc">Temporary suspension or permanent termination of the customer account.</div>
            </div>
            <div className="penalty-badge red">Account Action</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon red">🔒</div>
            <div className="penalty-info">
              <div className="penalty-title">Refusal of Future Services</div>
              <div className="penalty-desc">The customer may be barred from using bookfleet.</div>
            </div>
            <div className="penalty-badge red">Permanent Ban</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon red">🚨</div>
            <div className="penalty-info">
              <div className="penalty-title">Law Enforcement Reporting</div>
              <div className="penalty-desc">Reporting to law enforcement or regulatory authorities where required.</div>
            </div>
            <div className="penalty-badge red">Legal Action</div>
          </div>
          <div className="penalty-row">
            <div className="penalty-icon red">💸</div>
            <div className="penalty-info">
              <div className="penalty-title">Recovery of Losses</div>
              <div className="penalty-desc">Recovery of any losses or damages suffered by bookfleet, where permitted by law.</div>
            </div>
            <div className="penalty-badge red">Financial</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    number: "06",
    content: (
      <>
        <p>
          bookfleet is a technology platform that connects customers with independent
          delivery partners.
        </p>
        <p className="mt-3">
          bookfleet does not verify the contents of every shipment and shall not be
          liable for any prohibited or illegal items submitted by customers.
        </p>
        <div className="notice-pill notice-warn mt-4">
          ⚠️ Customers remain solely responsible for the legality, safety, and
          compliance of all items transported using the bookfleet platform.
        </div>
      </>
    ),
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    number: "07",
    content: (
      <>
        <p>bookfleet may update this Prohibited Items Policy from time to time.</p>
        <p className="mt-3 text-muted">
          The latest version will always be available on the bookfleet website and
          applications.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    number: "08",
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

export default function ProhibitedItemsPolicy() {
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
        <title>Prohibited Items Policy – bookfleet | bookfleet.in</title>
        <meta name="description" content="List of items prohibited from being transported through bookfleet, including illegal goods, hazardous materials, weapons, and restricted items." />
        <link rel="canonical" href="https://bookfleet.in/prohibited-items-policy" />
        <meta property="og:title" content="Prohibited Items Policy – bookfleet" />
        <meta property="og:url" content="https://bookfleet.in/prohibited-items-policy" />
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
          width: 160px; height: 160px; border-radius: 28px; overflow: hidden;
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
        .card-body.open { max-height: 3200px; padding: 0 22px 22px; border-top: 1px solid var(--border); }
        .card-body p, .card-body li { font-size: 0.875rem; line-height: 1.7; color: var(--text-secondary); }
        .card-body .mt-2 { margin-top: 8px; }
        .card-body .mt-3 { margin-top: 12px; }
        .card-body .mt-4 { margin-top: 16px; }

        .dot-list { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .dot-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;
        }
        .dot-list li::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue-500); margin-top: 6px; flex-shrink: 0;
        }

        .proh-block {
          padding: 14px 16px; border-radius: 10px;
          background: #fff4f4; border: 1px solid #ffd0d0;
        }
        .proh-header {
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em;
          text-transform: uppercase; color: #c0392b; margin-bottom: 4px;
        }
        .proh-block .dot-list li::before { background: #e74c3c; }

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
        .penalty-icon.red { background: #fff0f0; }
        .penalty-info { flex: 1; min-width: 0; }
        .penalty-title { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
        .penalty-desc { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
        .penalty-badge {
          font-size: 0.7rem; font-weight: 700; padding: 4px 10px;
          border-radius: 99px; white-space: nowrap; flex-shrink: 0;
        }
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
        <div className="hero-badge">🚫 Prohibited Items Policy</div>
        <div className="hero-logo">
          <img src={logo} alt="bookfleet Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <h1>Prohibited <em>Items</em> Policy</h1>
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
