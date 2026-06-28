import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

export default function DeleteAccount() {
  const navigate = useNavigate();
  // Form state
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canSubmit = isEmailValid && confirmed && !loading;

  const handleDelete = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("https://api.ridezipto.com/api/auth/account", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Account deleted successfully. Your data will be removed within 48 hours.",
        });
        setEmail("");
        setConfirmed(false);
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong. Please try again or contact support@ridebookfleet.com.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Delete Your bookfleet Account — Data & Privacy</title>
        <meta name="description" content="Request deletion of your bookfleet account. This page explains the deletion process, timelines, and data retained for legal purposes." />
      </Helmet>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        :root {
          --blue-900: #062553; --blue-800: #0a3880;
          --blue-700: #0d4db3; --blue-600: #1563d4; --blue-500: #2979f5;
          --blue-400: #5b9bff; --blue-200: #c4d9ff;
          --blue-100: #e8f0ff; --blue-50: #f0f5ff;
          --red-600: #dc2626; --red-100: #fee2e2; --red-200: #fecaca;
          --green-600: #16a34a; --green-100: #dcfce7; --green-200: #bbf7d0;
          --text-primary: #0d1b3e; --text-secondary: #3a4f7a; --text-muted: #7a92be;
          --border: rgba(21,99,212,0.15);
          --shadow-sm: 0 1px 4px rgba(5,50,150,0.08);
          --shadow-md: 0 4px 20px rgba(5,50,150,0.12);
          --radius: 14px;
        }
        body { font-family: 'Sora', 'Inter', sans-serif; background: var(--blue-50); color: var(--text-primary); }


        .hero {
          background: linear-gradient(135deg, #3b0000 0%, #7f1d1d 50%, #dc2626 100%);
          padding: 64px 24px 56px; text-align: center;
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 30%, rgba(255,100,100,0.18) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.22);
          color: #fca5a5; font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 99px; margin-bottom: 20px;
        }
        .hero-logo {
          width: 72px; height: 72px; border-radius: 18px;
          border: 3px solid rgba(255,255,255,0.25);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          margin: 0 auto 20px; background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem;
        }
        .hero h1 {
          font-size: clamp(1.8rem, 5vw, 3rem);
          color: white; line-height: 1.15; letter-spacing: -0.01em; font-weight: 700;
        }
        .hero h1 span { color: #fca5a5; }
        .hero-meta {
          margin-top: 14px;
          display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;
        }
        .hero-meta span {
          font-size: 0.75rem; color: #fca5a5; font-weight: 500;
        }

        .page-wrap { max-width: 760px; margin: 0 auto; padding: 48px 20px 80px; }

        .warning-banner {
          display: flex; align-items: flex-start; gap: 14px;
          background: #fff7ed; border: 1px solid #fed7aa;
          border-radius: 12px; padding: 16px 20px; margin-bottom: 32px;
        }
        .warning-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 1px; }
        .warning-banner p { font-size: 0.875rem; color: #92400e; line-height: 1.6; }
        .warning-banner strong { color: #78350f; }

        .section-card {
          background: white; border: 1px solid var(--border);
          border-radius: var(--radius); margin-bottom: 16px;
          box-shadow: var(--shadow-sm); overflow: hidden;
        }
        .section-card-header {
          display: flex; align-items: center; gap: 14px;
          padding: 20px 24px 0;
        }
        .step-badge {
          width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
          background: var(--blue-100); border: 1.5px solid var(--blue-200);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.78rem; font-weight: 700; color: var(--blue-600);
        }
        .step-badge.red { background: var(--red-100); border-color: var(--red-200); color: var(--red-600); }
        .step-badge.green { background: var(--green-100); border-color: var(--green-200); color: var(--green-600); }
        .section-card h3 {
          font-size: 1rem; font-weight: 700; color: var(--text-primary);
        }
        .section-card-body { padding: 14px 24px 22px 24px; }

        /* Form styles */
        .form-group { margin-top: 14px; }
        .form-group label {
          display: block; font-size: 0.8rem; font-weight: 600;
          color: var(--text-secondary); margin-bottom: 6px;
        }
        .form-group input[type="email"] {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid var(--border); border-radius: 10px;
          font-size: 0.9rem; font-family: inherit;
          color: var(--text-primary); background: var(--blue-50);
          outline: none; transition: border-color 0.2s;
        }
        .form-group input[type="email"]:focus { border-color: var(--blue-500); }
        .form-group input[type="email"].invalid { border-color: var(--red-600); }

        .confirm-check {
          display: flex; align-items: flex-start; gap: 10px;
          margin-top: 16px; padding: 12px 14px;
          background: var(--red-100); border: 1px solid var(--red-200);
          border-radius: 10px; cursor: pointer;
        }
        .confirm-check input[type="checkbox"] {
          margin-top: 2px; accent-color: var(--red-600);
          width: 15px; height: 15px; flex-shrink: 0; cursor: pointer;
        }
        .confirm-check label {
          font-size: 0.82rem; color: #991b1b; line-height: 1.5; cursor: pointer;
        }

        .delete-btn {
          width: 100%; margin-top: 16px; padding: 13px;
          background: var(--red-600); color: white;
          border: none; border-radius: 10px;
          font-size: 0.9rem; font-weight: 700; font-family: inherit;
          cursor: pointer; transition: background 0.2s, opacity 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .delete-btn:hover:not(:disabled) { background: #b91c1c; }
        .delete-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: white; border-radius: 50%;
          animation: spin 0.7s linear infinite; flex-shrink: 0;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .status-msg {
          margin-top: 14px; padding: 12px 16px;
          border-radius: 10px; font-size: 0.85rem; font-weight: 500;
          line-height: 1.5;
        }
        .status-msg.success {
          background: var(--green-100); border: 1px solid var(--green-200); color: #14532d;
        }
        .status-msg.error {
          background: var(--red-100); border: 1px solid var(--red-200); color: #991b1b;
        }

        .data-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 4px; }
        @media (max-width: 500px) { .data-grid { grid-template-columns: 1fr; } }
        .data-card {
          padding: 14px 16px; border-radius: 10px;
          border: 1px solid; display: flex; flex-direction: column; gap: 6px;
        }
        .data-card.deleted { background: var(--red-100); border-color: var(--red-200); }
        .data-card.retained { background: #fff7ed; border-color: #fed7aa; }
        .data-card-label {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .data-card.deleted .data-card-label { color: var(--red-600); }
        .data-card.retained .data-card-label { color: #b45309; }
        .data-card ul { list-style: none; display: flex; flex-direction: column; gap: 5px; }
        .data-card ul li {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.82rem; line-height: 1.5;
        }
        .data-card.deleted ul li { color: #991b1b; }
        .data-card.retained ul li { color: #92400e; }
        .data-card ul li::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          margin-top: 6px; flex-shrink: 0;
        }
        .data-card.deleted ul li::before { background: var(--red-600); }
        .data-card.retained ul li::before { background: #b45309; }

        .contact-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px; background: var(--blue-50);
          border: 1px solid var(--blue-200); border-radius: 10px; margin-top: 4px;
        }
        .contact-card .icon { font-size: 1.3rem; flex-shrink: 0; }
        .contact-card .c-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 2px; }
        .contact-card a { color: var(--blue-600); font-size: 0.9rem; font-weight: 600; text-decoration: none; }
        .contact-card a:hover { text-decoration: underline; }

        .footer-note {
          text-align: center; margin-top: 40px;
          padding-top: 24px; border-top: 1px solid var(--border);
        }
        .footer-note p { font-size: 0.78rem; color: var(--text-muted); line-height: 1.7; }
        .footer-note strong { color: var(--blue-600); }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">⚠️ Account Management</div>
        <div className="hero-logo">🗑️</div>
        <h1>Delete Your <span>bookfleet Account</span></h1>
        <div className="hero-meta">
          <span>📋 Quick in-app process</span>
          <span>⏱️ Processed in 24–48 hours</span>
          <span>🔒 Your data will be removed</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="page-wrap">

        {/* Warning Banner */}
        <div className="warning-banner">
          <div className="warning-icon">⚠️</div>
          <p>
            <strong>This action is permanent and cannot be undone.</strong> Once your account is deleted,
            you will lose access to all your data, order history, and earnings. Please make sure
            you have settled any pending dues before requesting deletion.
          </p>
        </div>

        {/* Step 1 — Deletion Form */}
        <div className="section-card">
          <div className="section-card-header">
            <div className="step-badge red">01</div>
            <h3>Request Account Deletion</h3>
          </div>
          <div className="section-card-body">
            <div className="form-group">
              <label htmlFor="delete-email">Your registered email address</label>
              <input
                id="delete-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus(null);
                }}
                className={email && !isEmailValid ? "invalid" : ""}
                disabled={loading || status?.type === "success"}
              />
            </div>

            <div className="confirm-check">
              <input
                type="checkbox"
                id="confirm-check"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                disabled={loading || status?.type === "success"}
              />
              <label htmlFor="confirm-check">
                I understand this is <strong>permanent and irreversible</strong>. All my personal data,
                location history, and payment details will be deleted.
              </label>
            </div>

            <button
              className="delete-btn"
              onClick={handleDelete}
              disabled={!canSubmit}
            >
              {loading ? (
                <>
                  <span className="spinner" />
                  Deleting account…
                </>
              ) : status?.type === "success" ? (
                "✅ Account Deleted"
              ) : (
                "Delete My Account"
              )}
            </button>

            {status && (
              <div className={`status-msg ${status.type}`}>
                {status.type === "success" ? "✅ " : "❌ "}
                {status.message}
              </div>
            )}
          </div>
        </div>

        {/* Step 2 — Data Deletion Info */}
        <div className="section-card">
          <div className="section-card-header">
            <div className="step-badge red">02</div>
            <h3>What Data Gets Deleted</h3>
          </div>
          <div className="section-card-body">
            <div className="data-grid">
              <div className="data-card deleted">
                <div className="data-card-label">🗑️ Permanently Deleted</div>
                <ul>
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Profile &amp; account data</li>
                  <li>Location history</li>
                  <li>Payment details</li>
                </ul>
              </div>
              <div className="data-card retained">
                <div className="data-card-label">📁 Retained (Legal)</div>
                <ul>
                  <li>Order history</li>
                  <li>Transaction records</li>
                  <li>Compliance logs</li>
                  <li>Fraud prevention data</li>
                </ul>
              </div>
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 12, lineHeight: 1.6, fontStyle: "italic" }}>
              Certain data may be retained as required by Indian law and regulatory compliance obligations.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="section-card">
          <div className="section-card-header">
            <div className="step-badge green">?</div>
            <h3>Need Help?</h3>
          </div>
          <div className="section-card-body">
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 12 }}>
              If you have any questions about account deletion or your data, reach out to us directly.
            </p>
            <div className="contact-card">
              <div className="icon">📧</div>
              <div>
                <div className="c-label">Support Email</div>
                <a href="mailto:support@ridebookfleet.com">support@ridebookfleet.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="footer-note">
          <p>© {new Date().getFullYear()} <strong>Zipto Hyperlogistics Pvt. Ltd.</strong> · Bhubaneswar, Odisha, India</p>
          <p style={{ marginTop: 4 }}>This page exists to comply with Google Play Store data deletion requirements.</p>
        </div>

      </div>
    </>
  );
}