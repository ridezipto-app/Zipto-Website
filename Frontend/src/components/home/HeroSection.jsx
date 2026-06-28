import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ziptoTruck from "../../assets/zipto_truck.png";
import appleLogo from "../../assets/apple.png";
import androidLogo from "../../assets/android-logo.png";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzQ6kMhV0nudurNUXx0g4XjXIA3NTyEqwqvgU-_JknW_8OHyV7tafs-_TtMZEs0VDND/exec";

const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  @font-face {
    font-family: 'Cocon';
    src: url('https://fonts.cdnfonts.com/s/15651/Cocon-Regular-Font.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --dark: #111;
    --accent: #2563eb;
  }

  .bookfleet-hero {
    width: 100vw;
    height: calc(100vh - 72px);
    min-height: 580px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(145deg, #07101f 0%, #0d1830 55%, #060d1a 100%);
    font-family: 'Space Grotesk', sans-serif;
  }

  /* Subtle dot grid for premium dark texture */
  .bookfleet-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
  }

  /* Ambient blue glow top-right */
  .bookfleet-hero::after {
    content: '';
    position: absolute;
    top: -120px; right: -80px;
    width: 600px; height: 500px;
    background: radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 65%);
    filter: blur(40px);
    pointer-events: none;
    z-index: 0;
  }

  .hero-bg-text-wrap {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -52%);
    z-index: 1;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
  }
  .hero-bg-text {
    font-family: 'Cocon', 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 190px);
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.03);
    line-height: 1;
    display: block;
    opacity: 0;
    animation: zh-bgReveal 1.8s ease 0.5s forwards;
  }
  .hero-bg-text-blue {
    font-family: 'Cocon', 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 190px);
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.03);
    line-height: 1;
    display: block;
    position: absolute;
    top: 0; left: 0;
    clip-path: inset(0 0 0 100%);
    animation: zh-blueFill 1.9s cubic-bezier(0.84,0,0.9,1) 2.5s forwards;
  }
  @keyframes zh-blueFill { to { clip-path: inset(0 0 0 0%); } }
  @keyframes zh-bgReveal  { to { opacity: 1; } }

  .hero-speed-lines {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 100%;
    pointer-events: none;
    opacity: 0;
    animation: zh-speedFade 3s ease 0.3s forwards;
  }
  @keyframes zh-speedFade {
    0%   { opacity: 0; }
    12%  { opacity: 1; }
    78%  { opacity: 0.7; }
    100% { opacity: 0; }
  }
  .hero-speed-line {
    height: 1.5px;
    background: linear-gradient(to left, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%);
    border-radius: 2px;
    margin: 14px 0;
    transform: scaleX(0);
    transform-origin: right center;
    animation: zh-expandLine 0.9s cubic-bezier(0.2,0,0.4,1) forwards;
  }
  .hero-speed-line:nth-child(1) { width: 82%; margin-left: 0%;  animation-delay: 0.35s; }
  .hero-speed-line:nth-child(2) { width: 68%; margin-left: 4%;  animation-delay: 0.55s; opacity: 0.75; }
  .hero-speed-line:nth-child(3) { width: 52%; margin-left: 9%;  animation-delay: 0.48s; opacity: 0.50; }
  .hero-speed-line:nth-child(4) { width: 36%; margin-left: 14%; animation-delay: 0.65s; opacity: 0.32; }
  @keyframes zh-expandLine { to { transform: scaleX(1); } }

  .hero-rider-wrapper {
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: clamp(220px, 48vw, 640px);
    z-index: 4;
    transform: translateX(120vw) scaleX(1);
    animation: zh-riderSequence 2.5s cubic-bezier(0.22,1,0.36,1) 0.2s forwards;
    will-change: transform, opacity;
  }

  @keyframes zh-riderSequence {
    0%   { transform: translateX(120vw) scaleX(1); opacity: 1; }
    100% { transform: translateX(-50%)  scaleX(1); opacity: 1; }
  }

  .hero-rider-wrapper img {
    width: 100%;
    display: block;
    filter: drop-shadow(0 24px 80px rgba(0,0,0,0.65)) drop-shadow(0 8px 24px rgba(37,99,235,0.18));
  }

  .hero-bottom {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    z-index: 10;
    padding: 0 56px 36px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .hero-left {
    opacity: 0;
    animation: zh-fadeUp 1.1s cubic-bezier(0.4,0,0.2,1) 2.3s forwards;
  }
  .hero-eyebrow {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: #60A5FA;
    margin-bottom: 6px;
  }
  .hero-headline {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(34px, 4.8vw, 66px);
    line-height: 0.92;
    color: #FFFFFF;
  }
  .hero-headline span { color: #60A5FA; }
  .hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    flex-wrap: wrap;
  }
  .hero-btn-primary {
    background: #FFFFFF;
    color: #0A0F1E;
    padding: 11px 24px;
    border-radius: 100px;
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.84rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, color 0.3s, transform 0.25s;
  }
  .hero-btn-primary:hover { background: #eff6ff; color: #1d4ed8; transform: scale(1.03); }
  .hero-btn-outline {
    background: transparent;
    color: #FFFFFF;
    padding: 10px 24px;
    border-radius: 100px;
    border: 1.5px solid rgba(255,255,255,0.28);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.84rem;
    font-weight: 500;
    cursor: pointer;
    transition: border-color 0.3s, color 0.3s, background 0.3s, transform 0.25s;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
  .hero-btn-outline:hover {
    border-color: #60A5FA;
    color: #60A5FA;
    background: rgba(96,165,250,0.1);
    transform: scale(1.03);
  }
  .hero-btn-outline .explore-arrow {
    display: inline-block;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .hero-btn-outline:hover .explore-arrow { transform: translateX(4px); }

  .hero-right {
    opacity: 0;
    animation: zh-fadeUp 1.1s cubic-bezier(0.4,0,0.2,1) 2.6s forwards;
  }
  .hero-stats-box {
    display: inline-flex;
    align-items: center;
    background: rgba(255,255,255,0.07);
    border: 1.5px solid rgba(255,255,255,0.12);
    border-radius: 18px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);
    overflow: hidden;
  }
  .hero-stat-item {
    padding: 18px 30px;
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
    font-size: 2rem;
    color: #FFFFFF;
    line-height: 1;
    letter-spacing: 0.5px;
  }
  .hero-stat-label {
    font-size: 0.58rem;
    color: rgba(255,255,255,0.42);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 5px;
    font-weight: 600;
  }

  .hero-badge {
    position: absolute;
    top: 14%; right: 10%;
    z-index: 6;
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-radius: 14px;
    padding: 12px 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.12);
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    animation: zh-popIn 0.8s cubic-bezier(0.34,1.36,0.64,1) 3.0s forwards;
  }
  .hero-badge-dot {
    width: 9px; height: 9px;
    background: #22c55e;
    border-radius: 50%;
    flex-shrink: 0;
    animation: zh-blink 2.2s ease-in-out 3.0s infinite;
  }
  @keyframes zh-blink {
    0%,100% { opacity: 1; box-shadow: 0 0 0 4px rgba(34,197,94,0.25); }
    50%      { opacity: 0.3; box-shadow: none; }
  }
  .hero-badge-text { font-size: 0.78rem; font-weight: 600; color: #FFFFFF; }
  .hero-badge-sub  { font-size: 0.66rem; color: rgba(255,255,255,0.5); margin-top: 2px; }

  /* MODAL */
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

  .zm-email-wrap {
    display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;
  }
  .zm-email-input {
    width: 100%; padding: 12px 16px;
    border: 1.5px solid #e5e7eb; border-radius: 12px;
    font-family: 'Space Grotesk', sans-serif; font-size: 0.86rem; color: #111;
    outline: none; transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;
  }
  .zm-email-input::placeholder { color: #9ca3af; }
  .zm-email-input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
  }
  .zm-email-input.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239,68,68,0.1);
  }
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

  @keyframes zh-fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes zh-popIn {
    from { opacity: 0; transform: scale(0.8) translateY(6px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .hero-bg-text-wrap.no-anim .hero-bg-text        { opacity: 1 !important; animation: none !important; }
  .hero-bg-text-wrap.no-anim .hero-bg-text-blue   { clip-path: inset(0 0 0 0%) !important; animation: none !important; }
  .hero-rider-wrapper.no-anim                     { transform: translateX(-50%) scaleX(1) !important; opacity: 1 !important; animation: none !important; }
  .hero-left.no-anim, .hero-right.no-anim,
  .hero-badge.no-anim                             { opacity: 1 !important; transform: none !important; animation: none !important; }
  .hero-speed-lines.no-anim                       { display: none; }
  .bookfleet-truck-parked                             { display: none; }

  @media (min-width: 769px) and (max-width: 1024px) {
    .bookfleet-hero       { height: calc(100vh - 64px); min-height: 520px; }
    .hero-rider-wrapper { width: clamp(200px, 44vw, 480px); bottom: 48px; }
    .hero-bottom      { padding: 0 36px 28px; }
    .hero-headline    { font-size: clamp(30px, 4vw, 52px); }
    .hero-stat-item   { padding: 14px 20px; }
    .hero-stat-num    { font-size: 1.6rem; }
    .hero-badge       { top: 12%; right: 6%; padding: 10px 14px; }
    .hero-badge-text  { font-size: 0.72rem; }
    .hero-badge-sub   { font-size: 0.60rem; }
  }

  @media (max-width: 768px) {
    .bookfleet-hero {
      height: 100svh;
      min-height: 0;
      overflow: hidden;
      display: flex !important;
      flex-direction: column !important;
    }
    .hero-rider-wrapper {
      bottom: auto !important;
      top: 36% !important;
      width: clamp(200px, 80vw, 320px) !important;
      animation: zh-riderSequence 2.5s cubic-bezier(0.22,1,0.36,1) 0.2s forwards !important;
    }
    .hero-rider-wrapper.no-anim {
      transform: translateX(-50%) scaleX(1) !important;
      animation: none !important;
    }
    .hero-speed-lines   { display: none !important; }
    .hero-bg-text-wrap  { top: 0; left: 50%; transform: translateX(-50%); }
    .hero-bg-text,
    .hero-bg-text-blue  { font-size: clamp(36px, 12vw, 60px) !important; letter-spacing: 0.08em; }
    .hero-badge {
      position: absolute !important;
      top: clamp(52px, 11svh, 84px) !important;
      left: 16px !important;
      right: auto !important;
      padding: 9px 14px;
      border-radius: 12px;
      z-index: 6;
      animation: zh-popIn 0.7s cubic-bezier(0.34,1.36,0.64,1) 2.3s both !important;
    }
    .hero-badge-text { font-size: 0.72rem; }
    .hero-badge-sub  { font-size: 0.58rem; }
    .bookfleet-truck-parked { display: none !important; }
    .hero-bottom {
      position: relative !important;
      top: auto !important; left: auto !important;
      right: auto !important; bottom: auto !important;
      margin-top: auto !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 10px !important;
      padding: 0 18px !important;
      padding-bottom: max(22px, env(safe-area-inset-bottom, 22px)) !important;
      box-sizing: border-box;
      flex-shrink: 0;
      z-index: 10;
    }
    .hero-left {
      opacity: 0;
      animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 2.3s forwards !important;
      width: 100%;
    }
    .hero-left.no-anim { opacity: 1 !important; transform: none !important; animation: none !important; }
    .hero-eyebrow   { font-size: 0.64rem; margin-bottom: 4px; letter-spacing: 3px; }
    .hero-headline  { font-size: clamp(32px, 10vw, 46px); line-height: 0.90; }
    .hero-actions   { width: 100%; margin-top: 12px; gap: 10px; flex-wrap: nowrap; }
    .hero-btn-primary,
    .hero-btn-outline {
      flex: 1;
      justify-content: center;
      padding: 13px 10px;
      font-size: 0.82rem;
    }
    .hero-right {
      opacity: 0;
      animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 2.6s forwards !important;
      width: 100%;
    }
    .hero-right.no-anim { opacity: 1 !important; transform: none !important; animation: none !important; }
    .hero-stats-box   { display: flex; width: 100%; border-radius: 16px; }
    .hero-stat-item   { flex: 1; padding: 12px 4px; }
    .hero-stat-num    { font-size: 1.3rem; }
    .hero-stat-label  { font-size: 0.44rem; letter-spacing: 1px; }
    .bookfleet-modal-card { padding: 30px 20px 24px; border-radius: 20px; }
    .zm-stores        { flex-direction: column; }
  }

  @media (max-width: 390px) {
    .hero-bg-text,
    .hero-bg-text-blue { font-size: 32px !important; }
    .hero-badge        { top: clamp(44px, 9svh, 68px) !important; left: 12px !important; }
    .hero-rider-wrapper { width: clamp(180px, 82vw, 280px) !important; top: 35% !important; }
    .hero-bottom       { gap: 8px !important; padding: 0 14px !important; padding-bottom: max(18px, env(safe-area-inset-bottom, 18px)) !important; }
    .hero-headline     { font-size: clamp(28px, 9vw, 38px); }
    .hero-btn-primary,
    .hero-btn-outline  { padding: 12px 8px; font-size: 0.78rem; }
    .hero-stat-item    { padding: 10px 3px; }
    .hero-stat-num     { font-size: 1.15rem; }
    .hero-stat-label   { font-size: 0.40rem; }
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
      if (!seen) {
        sessionStorage.setItem(SESSION_KEY, "1");
        return true;
      }
    } catch {}
    return false;
  });

  const [email,      setEmail]      = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);

  const navigate = useNavigate();

  const closeOnBackdrop = (e) => {
    if (e.target === e.currentTarget) handleCloseModal();
  };

  const handleCloseModal = () => {
    setShowOrder(false);
    setTimeout(() => {
      setEmail("");
      setEmailError("");
      setSubmitted(false);
    }, 300);
  };

  const focusEmail = () => {
    setTimeout(() => document.getElementById("notify-email")?.focus(), 100);
  };

  const handleNotify = async () => {
    const trimmed = email.trim();
    if (!trimmed) { setEmailError("Please enter your email address."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { setEmailError("Please enter a valid email address."); return; }
    setEmailError("");
    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method:  "POST",
        mode:    "no-cors",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email: trimmed }),
      });
      setSubmitted(true);
    } catch {
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const na = (base) => (playAnim ? base : `${base} no-anim`);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />

      <section className="bookfleet-hero" aria-label="bookfleet hero">
        <div className={na("hero-bg-text-wrap")} aria-hidden="true">
          <span className="hero-bg-text">bookfleet</span>
          <span className="hero-bg-text-blue">bookfleet</span>
        </div>

        <div className={na("hero-speed-lines")} aria-hidden="true">
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
        </div>

        <div className={na("hero-rider-wrapper")} aria-hidden="true">
          <img src={ziptoTruck} alt="bookfleet delivery truck" />
        </div>

        <div className={na("hero-badge")} role="status" aria-label="Rider nearby, 2 minutes away">
          <div className="hero-badge-dot" aria-hidden="true" />
          <div>
            <div className="hero-badge-text">Rider nearby</div>
            <div className="hero-badge-sub">2 min away</div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className={na("hero-left")}>
            <div className="hero-eyebrow">⚡ Fast. Reliable. Now.</div>
            <h1 className="hero-headline">
              Delivered<br />in <span>Minutes.</span>
            </h1>
            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={() => setShowOrder(true)}>
                Order Now
              </button>
              <button className="hero-btn-outline" onClick={() => navigate("/about")}>
                Explore More <span className="explore-arrow">→</span>
              </button>
            </div>
          </div>

          <div className={na("hero-right")}>
            <div className="hero-stats-box" role="list" aria-label="Key stats">
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
        </div>
      </section>

      {/* ORDER NOW MODAL */}
      {showOrder && (
        <div
          className="bookfleet-overlay"
          onClick={closeOnBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Order now — app coming soon"
        >
          <div className="bookfleet-modal-card">
            <button className="bookfleet-close-btn" onClick={handleCloseModal} aria-label="Close">
              ✕
            </button>

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
                <div className="zm-launch-pill">
                  <div className="zm-launch-dot" /> Launching Soon
                </div>
                <div className="zm-title">
                  Our app is<br /><span>almost here.</span>
                </div>
                <p className="zm-desc">
                  Be the first to experience faster, smarter deliveries across Odisha.
                </p>

                <div className="zm-stores">
                  <button className="zm-store" onClick={focusEmail}>
                    <img src={appleLogo} alt="Apple App Store" className="zm-store-icon" />
                    <div>
                      <div className="zm-store-sub">iOS</div>
                      <div className="zm-store-name">App Store</div>
                    </div>
                  </button>
                  <button className="zm-store" onClick={focusEmail}>
                    <img src={androidLogo} alt="Google Play Store" className="zm-store-icon" />
                    <div>
                      <div className="zm-store-sub">Android</div>
                      <div className="zm-store-name">Google Play</div>
                    </div>
                  </button>
                </div>

                <div className="zm-email-wrap">
                  <input
                    id="notify-email"
                    type="email"
                    className={`zm-email-input${emailError ? " error" : ""}`}
                    placeholder="Enter your email to get notified"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                    disabled={submitting}
                    autoComplete="email"
                  />
                  {emailError && <span className="zm-email-error">{emailError}</span>}
                </div>

                <button
                  className="zm-notify-btn"
                  onClick={handleNotify}
                  disabled={submitting}
                >
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