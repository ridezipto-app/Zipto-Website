import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appleLogo from "../../assets/apple.png";
import androidLogo from "../../assets/android-logo.png";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzQ6kMhV0nudurNUXx0g4XjXIA3NTyEqwqvgU-_JknW_8OHyV7tafs-_TtMZEs0VDND/exec";

const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  :root { --dark: #111; --accent: #2563eb; }

  .bookfleet-hero {
    width: 100vw;
    height: calc(100vh - 72px);
    min-height: 640px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(140deg, #050c1e 0%, #091528 55%, #040a1c 100%);
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* dot grid */
  .bookfleet-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── ORBS ── */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .hero-orb-1 {
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%);
    top: -200px; right: -150px;
    filter: blur(70px);
    animation: zh-orb1 9s ease-in-out infinite;
  }
  .hero-orb-2 {
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 65%);
    bottom: -160px; left: -100px;
    filter: blur(90px);
    animation: zh-orb2 12s ease-in-out infinite;
  }
  .hero-orb-3 {
    width: 380px; height: 380px;
    background: radial-gradient(circle, rgba(14,165,233,0.11) 0%, transparent 65%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(110px);
    animation: zh-orb3 7s ease-in-out infinite;
  }
  @keyframes zh-orb1 { 0%,100% { transform: translate(0,0);           } 50% { transform: translate(-40px, 50px);  } }
  @keyframes zh-orb2 { 0%,100% { transform: translate(0,0);           } 50% { transform: translate(50px,-40px);   } }
  @keyframes zh-orb3 { 0%,100% { transform: translate(-50%,-50%) scale(1);  } 50% { transform: translate(-50%,-50%) scale(1.3); } }

  /* ── BG TEXT ── */
  .hero-bg-text-wrap {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
  }
  .hero-bg-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(90px, 17vw, 240px);
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.022);
    line-height: 1;
    display: block;
  }

  /* ── MAIN CONTENT ── */
  .hero-content {
    position: relative;
    z-index: 5;
    text-align: center;
    max-width: 820px;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-eyebrow-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(37,99,235,0.14);
    border: 1px solid rgba(96,165,250,0.3);
    border-radius: 100px;
    padding: 7px 18px;
    font-size: 0.70rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #60A5FA;
    margin-bottom: 28px;
    opacity: 0;
    animation: zh-fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s forwards;
  }
  .hero-eyebrow-dot {
    width: 6px; height: 6px;
    background: #60A5FA;
    border-radius: 50%;
    flex-shrink: 0;
    animation: zh-blink 2s ease-in-out infinite;
  }

  .hero-headline {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(58px, 9vw, 116px);
    line-height: 0.88;
    color: #FFFFFF;
    margin-bottom: 22px;
    letter-spacing: 0.02em;
    opacity: 0;
    animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 0.4s forwards;
  }
  .hero-headline .hl-blue    { color: #60A5FA; }
  .hero-headline .hl-outline {
    -webkit-text-stroke: 2px rgba(255,255,255,0.32);
    color: transparent;
  }

  .hero-subtitle {
    font-size: clamp(0.88rem, 1.3vw, 1.05rem);
    color: rgba(255,255,255,0.46);
    line-height: 1.78;
    max-width: 440px;
    margin-bottom: 36px;
    opacity: 0;
    animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 0.6s forwards;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 52px;
    opacity: 0;
    animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 0.8s forwards;
  }

  .hero-btn-primary {
    background: #2563EB;
    color: #FFFFFF;
    padding: 14px 30px;
    border-radius: 100px;
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, transform 0.25s, box-shadow 0.3s;
    box-shadow: 0 8px 28px rgba(37,99,235,0.45);
  }
  .hero-btn-primary:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 14px 36px rgba(37,99,235,0.55);
  }
  .hero-btn-outline {
    background: rgba(255,255,255,0.06);
    color: #FFFFFF;
    padding: 13px 30px;
    border-radius: 100px;
    border: 1.5px solid rgba(255,255,255,0.2);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: border-color 0.3s, background 0.3s, color 0.3s, transform 0.25s;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    backdrop-filter: blur(8px);
  }
  .hero-btn-outline:hover {
    border-color: #60A5FA;
    color: #60A5FA;
    background: rgba(96,165,250,0.1);
    transform: translateY(-2px);
  }
  .explore-arrow {
    display: inline-block;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .hero-btn-outline:hover .explore-arrow { transform: translateX(4px); }

  /* ── STATS ── */
  .hero-stats-row {
    display: inline-flex;
    align-items: center;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 22px;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07);
    overflow: hidden;
    opacity: 0;
    animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 1.0s forwards;
  }
  .hero-stat-item {
    padding: 20px 36px;
    text-align: center;
    position: relative;
  }
  .hero-stat-item + .hero-stat-item::before {
    content: '';
    position: absolute;
    left: 0; top: 22%; height: 56%;
    width: 1px;
    background: rgba(255,255,255,0.1);
  }
  .hero-stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.1rem;
    color: #FFFFFF;
    line-height: 1;
    letter-spacing: 0.5px;
  }
  .hero-stat-label {
    font-size: 0.58rem;
    color: rgba(255,255,255,0.38);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 5px;
    font-weight: 600;
  }

  /* ── FLOATING SERVICE CARDS ── */
  .hero-float-card {
    position: absolute;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.11);
    border-radius: 18px;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    z-index: 4;
    box-shadow: 0 8px 32px rgba(0,0,0,0.28);
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
  }
  .hero-float-icon { font-size: 1.6rem; line-height: 1; flex-shrink: 0; }
  .hero-float-title { font-size: 0.82rem; font-weight: 600; color: #FFFFFF; }
  .hero-float-sub   { font-size: 0.65rem; color: rgba(255,255,255,0.42); margin-top: 2px; }
  .hero-float-badge {
    font-size: 0.6rem; font-weight: 700;
    color: #60A5FA;
    background: rgba(37,99,235,0.18);
    border: 1px solid rgba(96,165,250,0.25);
    border-radius: 100px;
    padding: 2px 8px;
    margin-top: 4px;
    display: inline-block;
  }

  .hero-float-card-1 { left: 3%;  top: 22%; animation: zh-floatIn 0.7s cubic-bezier(0.34,1.26,0.64,1) 1.2s forwards, zh-bob1 5s   ease-in-out 2s infinite; }
  .hero-float-card-2 { left: 2%;  top: 58%; animation: zh-floatIn 0.7s cubic-bezier(0.34,1.26,0.64,1) 1.5s forwards, zh-bob2 6s   ease-in-out 2.3s infinite; }
  .hero-float-card-3 { right: 3%; top: 22%; animation: zh-floatIn 0.7s cubic-bezier(0.34,1.26,0.64,1) 1.35s forwards, zh-bob3 5.5s ease-in-out 2.1s infinite; }
  .hero-float-card-4 { right: 2%; top: 58%; animation: zh-floatIn 0.7s cubic-bezier(0.34,1.26,0.64,1) 1.6s forwards, zh-bob1 7s   ease-in-out 2.4s infinite; }

  @keyframes zh-floatIn {
    from { opacity: 0; transform: translateY(24px) scale(0.92); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }
  @keyframes zh-bob1 { 0%,100% { transform: translateY(0);    } 50% { transform: translateY(-10px); } }
  @keyframes zh-bob2 { 0%,100% { transform: translateY(0);    } 50% { transform: translateY( 10px); } }
  @keyframes zh-bob3 { 0%,100% { transform: translateY(-5px); } 50% { transform: translateY(  8px); } }

  /* ── LIVE BADGE ── */
  .hero-badge {
    position: absolute;
    top: 9%; right: 4%;
    z-index: 6;
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-radius: 14px;
    padding: 12px 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.11);
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    animation: zh-popIn 0.8s cubic-bezier(0.34,1.36,0.64,1) 1.8s forwards;
  }
  .hero-badge-dot {
    width: 9px; height: 9px;
    background: #22c55e;
    border-radius: 50%;
    flex-shrink: 0;
    animation: zh-blink 2.2s ease-in-out 1.8s infinite;
  }
  @keyframes zh-blink {
    0%,100% { opacity: 1; box-shadow: 0 0 0 4px rgba(34,197,94,0.25); }
    50%      { opacity: 0.3; box-shadow: none; }
  }
  .hero-badge-text { font-size: 0.78rem; font-weight: 600; color: #FFFFFF; }
  .hero-badge-sub  { font-size: 0.66rem; color: rgba(255,255,255,0.5); margin-top: 2px; }

  /* bottom accent line */
  .hero-route-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent 0%, rgba(37,99,235,0.5) 20%, rgba(96,165,250,0.9) 50%, rgba(37,99,235,0.5) 80%, transparent 100%);
    z-index: 3;
    transform: scaleX(0);
    transform-origin: left;
    animation: zh-routeScan 2s cubic-bezier(0.4,0,0.2,1) 1s forwards;
  }
  @keyframes zh-routeScan { to { transform: scaleX(1); } }

  /* ── KEYFRAMES ── */
  @keyframes zh-fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes zh-popIn {
    from { opacity: 0; transform: scale(0.8) translateY(6px); }
    to   { opacity: 1; transform: scale(1)   translateY(0); }
  }

  /* ── NO-ANIM ── */
  .hero-content.no-anim .hero-eyebrow-pill,
  .hero-content.no-anim .hero-headline,
  .hero-content.no-anim .hero-subtitle,
  .hero-content.no-anim .hero-actions,
  .hero-content.no-anim .hero-stats-row {
    opacity: 1 !important; transform: none !important; animation: none !important;
  }
  .hero-float-card-1.no-anim { opacity: 1 !important; animation: zh-bob1 5s   ease-in-out infinite !important; }
  .hero-float-card-2.no-anim { opacity: 1 !important; animation: zh-bob2 6s   ease-in-out infinite !important; }
  .hero-float-card-3.no-anim { opacity: 1 !important; animation: zh-bob3 5.5s ease-in-out infinite !important; }
  .hero-float-card-4.no-anim { opacity: 1 !important; animation: zh-bob1 7s   ease-in-out infinite !important; }
  .hero-badge.no-anim         { opacity: 1 !important; transform: none !important; animation: none !important; }

  /* ── MODAL ── */
  .bookfleet-overlay {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,0.42);
    backdrop-filter: blur(6px);
    display: flex; align-items: center; justify-content: center;
    animation: zh-overlayIn 0.25s ease forwards;
  }
  @keyframes zh-overlayIn { from { opacity:0; } to { opacity:1; } }
  .bookfleet-modal-card {
    background: #fff; border-radius: 24px;
    padding: 40px 36px 32px;
    width: 100%; max-width: 420px;
    position: relative;
    box-shadow: 0 32px 80px rgba(0,0,0,0.16);
    animation: zh-cardIn 0.4s cubic-bezier(0.34,1.26,0.64,1) forwards;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0 16px;
  }
  @keyframes zh-cardIn {
    from { opacity:0; transform: scale(0.88) translateY(18px); }
    to   { opacity:1; transform: scale(1) translateY(0); }
  }
  .bookfleet-close-btn {
    position: absolute; top: 16px; right: 18px;
    background: #f3f4f6; border: none; border-radius: 50%;
    width: 32px; height: 32px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 0.9rem; color: #555;
    transition: background 0.2s;
  }
  .bookfleet-close-btn:hover { background: #e5e7eb; color: #111; }
  .zm-launch-pill {
    display: inline-flex; align-items: center; gap: 6px;
    background: #eff6ff; border: 1px solid #bfdbfe;
    border-radius: 100px; padding: 5px 12px;
    font-size: 0.68rem; font-weight: 700; color: var(--accent);
    letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;
  }
  .zm-launch-dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }
  .zm-title {
    font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem;
    color: var(--dark); line-height: 0.95; letter-spacing: 0.5px; margin-bottom: 12px;
  }
  .zm-title span { color: var(--accent); }
  .zm-desc { font-size: 0.82rem; color: #6b7280; line-height: 1.65; font-weight: 400; margin-bottom: 26px; }
  .zm-stores { display: flex; gap: 11px; margin-bottom: 14px; }
  .zm-store {
    flex: 1; display: flex; align-items: center; gap: 10px;
    padding: 13px 15px; border-radius: 14px;
    border: 1.5px solid #e5e7eb; background: #fff;
    cursor: pointer; text-align: left; font-family: 'Space Grotesk', sans-serif;
    transition: border-color 0.22s, box-shadow 0.22s, transform 0.18s;
  }
  .zm-store:hover { border-color: #111; box-shadow: 0 4px 16px rgba(0,0,0,0.09); transform: translateY(-2px); }
  .zm-store-icon { width: 28px; height: 28px; object-fit: contain; flex-shrink: 0; }
  .zm-store-sub  { font-size: 0.57rem; color: #9ca3af; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 600; }
  .zm-store-name { font-size: 0.82rem; font-weight: 700; color: #111; margin-top: 1px; }
  .zm-email-wrap { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
  .zm-email-input {
    width: 100%; padding: 12px 16px;
    border: 1.5px solid #e5e7eb; border-radius: 12px;
    font-family: 'Space Grotesk', sans-serif; font-size: 0.86rem; color: #111;
    outline: none; transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;
  }
  .zm-email-input::placeholder { color: #9ca3af; }
  .zm-email-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  .zm-email-input.error { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.1); }
  .zm-email-error { font-size: 0.72rem; color: #ef4444; font-weight: 500; }
  .zm-success {
    display: flex; flex-direction: column; align-items: center;
    text-align: center; padding: 16px 0 8px;
    animation: zh-cardIn 0.4s cubic-bezier(0.34,1.26,0.64,1) forwards;
  }
  .zm-success-icon {
    width: 52px; height: 52px; background: #dcfce7; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; margin-bottom: 14px;
  }
  .zm-success-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; color: #111; margin-bottom: 6px; }
  .zm-success-sub   { font-size: 0.82rem; color: #6b7280; line-height: 1.6; }
  .zm-notify-btn {
    width: 100%; padding: 13px; background: #111; color: #fff;
    border: none; border-radius: 100px; font-family: 'Space Grotesk', sans-serif;
    font-size: 0.86rem; font-weight: 600; cursor: pointer;
    letter-spacing: 0.2px; transition: background 0.25s, transform 0.18s; margin-top: 4px;
    display: flex; align-items: center; justify-content: center;
  }
  .zm-notify-btn:hover:not(:disabled) { background: var(--accent); transform: scale(1.02); }
  .zm-notify-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* ── TABLET ── */
  @media (min-width: 769px) and (max-width: 1100px) {
    .hero-float-card-1, .hero-float-card-2 { left: 1%; }
    .hero-float-card-3, .hero-float-card-4 { right: 1%; }
    .hero-float-icon { font-size: 1.3rem; }
    .hero-float-title { font-size: 0.76rem; }
    .hero-float-sub, .hero-float-badge { font-size: 0.58rem; }
    .hero-content { max-width: 640px; }
  }

  /* ── MOBILE ── */
  @media (max-width: 768px) {
    .bookfleet-hero {
      height: 100svh;
      min-height: 0;
      align-items: center;
      padding: 20px 0 0;
    }
    .hero-float-card { display: none; }
    .hero-badge {
      top: auto !important; bottom: 16px; right: 16px;
      padding: 9px 14px; border-radius: 12px;
    }
    .hero-content { padding: 0 20px; }
    .hero-eyebrow-pill { font-size: 0.62rem; letter-spacing: 2.5px; padding: 6px 14px; margin-bottom: 20px; }
    .hero-headline { font-size: clamp(46px, 11.5vw, 72px); margin-bottom: 16px; }
    .hero-subtitle { font-size: 0.86rem; margin-bottom: 28px; }
    .hero-actions { margin-bottom: 36px; gap: 10px; }
    .hero-btn-primary, .hero-btn-outline { padding: 13px 22px; font-size: 0.86rem; }
    .hero-stat-item { padding: 14px 18px; }
    .hero-stat-num  { font-size: 1.6rem; }
    .hero-stat-label { font-size: 0.50rem; }
    .bookfleet-modal-card { padding: 30px 20px 24px; border-radius: 20px; }
    .zm-stores { flex-direction: column; }
  }

  @media (max-width: 420px) {
    .hero-headline { font-size: clamp(38px, 11vw, 56px); }
    .hero-actions { flex-direction: column; align-items: stretch; }
    .hero-btn-primary, .hero-btn-outline { justify-content: center; }
    .hero-stats-row { width: 100%; }
    .hero-stat-item { flex: 1; padding: 12px 8px; }
    .hero-stat-num  { font-size: 1.3rem; }
    .hero-stat-label { font-size: 0.42rem; letter-spacing: 1px; }
  }
`;

const SESSION_KEY = "bookfleet-hero-seen";

export default function bookfleetHero() {
  const [showOrder, setShowOrder] = useState(false);
  const [playAnim] = useState(() => {
    try {
      const navType = performance.getEntriesByType("navigation")[0]?.type;
      if (navType !== "back_forward") sessionStorage.removeItem(SESSION_KEY);
      const seen = sessionStorage.getItem(SESSION_KEY);
      if (!seen) { sessionStorage.setItem(SESSION_KEY, "1"); return true; }
    } catch {}
    return false;
  });

  const [email,      setEmail]      = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);

  const navigate = useNavigate();

  const closeOnBackdrop = (e) => { if (e.target === e.currentTarget) handleCloseModal(); };
  const handleCloseModal = () => {
    setShowOrder(false);
    setTimeout(() => { setEmail(""); setEmailError(""); setSubmitted(false); }, 300);
  };
  const focusEmail = () => { setTimeout(() => document.getElementById("notify-email")?.focus(), 100); };

  const handleNotify = async () => {
    const trimmed = email.trim();
    if (!trimmed) { setEmailError("Please enter your email address."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { setEmailError("Please enter a valid email address."); return; }
    setEmailError(""); setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: trimmed }) });
      setSubmitted(true);
    } catch { setEmailError("Something went wrong. Please try again."); }
    finally { setSubmitting(false); }
  };

  const na   = (base) => playAnim ? base : `${base} no-anim`;
  const nafc = (base) => playAnim ? `hero-float-card ${base}` : `hero-float-card ${base} no-anim`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />

      <section className="bookfleet-hero" aria-label="bookfleet hero">

        {/* Background orbs */}
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-orb hero-orb-3" aria-hidden="true" />

        {/* Faint background text */}
        <div className="hero-bg-text-wrap" aria-hidden="true">
          <span className="hero-bg-text">bookfleet</span>
        </div>

        {/* ── Floating service cards (desktop) ── */}
        <div className={nafc("hero-float-card-1")} aria-hidden="true">
          <span className="hero-float-icon">🛵</span>
          <div>
            <div className="hero-float-title">Bike Delivery</div>
            <div className="hero-float-sub">Fastest pickup</div>
            <div className="hero-float-badge">2 min ETA</div>
          </div>
        </div>

        <div className={nafc("hero-float-card-2")} aria-hidden="true">
          <span className="hero-float-icon">🛺</span>
          <div>
            <div className="hero-float-title">Auto Delivery</div>
            <div className="hero-float-sub">Medium loads</div>
            <div className="hero-float-badge">On demand</div>
          </div>
        </div>

        <div className={nafc("hero-float-card-3")} aria-hidden="true">
          <span className="hero-float-icon">🚛</span>
          <div>
            <div className="hero-float-title">Truck Delivery</div>
            <div className="hero-float-sub">Heavy cargo</div>
            <div className="hero-float-badge">Scheduled</div>
          </div>
        </div>

        <div className={nafc("hero-float-card-4")} aria-hidden="true">
          <span className="hero-float-icon">📦</span>
          <div>
            <div className="hero-float-title">100% Insured</div>
            <div className="hero-float-sub">Every package</div>
            <div className="hero-float-badge">Guaranteed</div>
          </div>
        </div>

        {/* ── Center content ── */}
        <div className={na("hero-content")}>
          <div className="hero-eyebrow-pill">
            <div className="hero-eyebrow-dot" />
            ⚡ Fast · Reliable · Now
          </div>

          <h1 className="hero-headline">
            Move <span className="hl-outline">Anything,</span><br />
            <span className="hl-blue">Anytime.</span>
          </h1>

          <p className="hero-subtitle">
            Same-day logistics across Bhubaneswar.<br />
            Bikes, Autos &amp; Trucks — all on demand.
          </p>

          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={() => setShowOrder(true)}>
              Order Now
            </button>
            <button className="hero-btn-outline" onClick={() => navigate("/about")}>
              Explore More <span className="explore-arrow">→</span>
            </button>
          </div>

          <div className="hero-stats-row" role="list" aria-label="Key stats">
            <div className="hero-stat-item" role="listitem">
              <div className="hero-stat-num">12K+</div>
              <div className="hero-stat-label">Expected Deliveries</div>
            </div>
            <div className="hero-stat-item" role="listitem">
              <div className="hero-stat-num">4.9★</div>
              <div className="hero-stat-label">Rating</div>
            </div>
            <div className="hero-stat-item" role="listitem">
              <div className="hero-stat-num">&lt;20m</div>
              <div className="hero-stat-label">Avg. Time</div>
            </div>
          </div>
        </div>

        {/* Live badge */}
        <div className={na("hero-badge")} role="status" aria-label="Rider nearby, 2 minutes away">
          <div className="hero-badge-dot" aria-hidden="true" />
          <div>
            <div className="hero-badge-text">Rider nearby</div>
            <div className="hero-badge-sub">2 min away</div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="hero-route-line" aria-hidden="true" />
      </section>

      {/* ── ORDER NOW MODAL ── */}
      {showOrder && (
        <div className="bookfleet-overlay" onClick={closeOnBackdrop} role="dialog" aria-modal="true" aria-label="Order now — app coming soon">
          <div className="bookfleet-modal-card">
            <button className="bookfleet-close-btn" onClick={handleCloseModal} aria-label="Close">✕</button>

            {submitted ? (
              <div className="zm-success">
                <div className="zm-success-icon">✅</div>
                <div className="zm-success-title">You're on the list!</div>
                <p className="zm-success-sub">
                  We'll notify <strong>{email.trim()}</strong> the moment we launch.<br />
                  Stay tuned for faster deliveries across Odisha.
                </p>
              </div>
            ) : (
              <>
                <div className="zm-launch-pill"><div className="zm-launch-dot" /> Launching Soon</div>
                <div className="zm-title">Our app is<br /><span>almost here.</span></div>
                <p className="zm-desc">Be the first to experience faster, smarter deliveries across Odisha.</p>

                <div className="zm-stores">
                  <button className="zm-store" onClick={focusEmail}>
                    <img src={appleLogo} alt="Apple App Store" className="zm-store-icon" />
                    <div><div className="zm-store-sub">iOS</div><div className="zm-store-name">App Store</div></div>
                  </button>
                  <button className="zm-store" onClick={focusEmail}>
                    <img src={androidLogo} alt="Google Play Store" className="zm-store-icon" />
                    <div><div className="zm-store-sub">Android</div><div className="zm-store-name">Google Play</div></div>
                  </button>
                </div>

                <div className="zm-email-wrap">
                  <input
                    id="notify-email" type="email"
                    className={`zm-email-input${emailError ? " error" : ""}`}
                    placeholder="Enter your email to get notified"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                    disabled={submitting} autoComplete="email"
                  />
                  {emailError && <span className="zm-email-error">{emailError}</span>}
                </div>

                <button className="zm-notify-btn" onClick={handleNotify} disabled={submitting}>
                  {submitting ? "Saving..." : "Got it, notify me →"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
