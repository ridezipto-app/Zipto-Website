import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import ziptoTruck from "../../assets/zipto_truck.png";
import appleLogo from "../../assets/apple.png";
import androidLogo from "../../assets/android-logo.png";

const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@300;400;500;600&display=swap');

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

  /* ═══════════════════════════════════════
     BASE / DESKTOP (> 768px)
  ═══════════════════════════════════════ */

  .zipto-hero {
    width: 100vw;
    height: calc(100vh - 72px);
    min-height: 580px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(110deg, #e4e4e4 0%, #eeeeee 35%, #f8f8f8 65%, #ffffff 100%);
    font-family: 'Syne', sans-serif;
  }

  /* BG TEXT */
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
    font-size: clamp(100px, 24vw, 340px);
    letter-spacing: 0.06em;
    color: rgba(180,180,180,0.32);
    line-height: 1;
    display: block;
    opacity: 0;
    animation: zh-bgReveal 1.8s ease 0.5s forwards;
  }
  .hero-bg-text-blue {
    font-family: 'Cocon', 'Bebas Neue', sans-serif;
    font-size: clamp(100px, 24vw, 340px);
    letter-spacing: 0.06em;
    color: rgba(37,99,235,0.38);
    line-height: 1;
    display: block;
    position: absolute;
    top: 0; left: 0;
    clip-path: inset(0 0 0 100%);
    animation: zh-blueFill 1.89s cubic-bezier(0.84,0,0.9,1) 2.51s forwards;
  }
  @keyframes zh-blueFill {
    0%   { clip-path: inset(0 0 0 100%); }
    100% { clip-path: inset(0 0 0 0%); }
  }
  @keyframes zh-bgReveal {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  /* SPEED LINES */
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
    background: linear-gradient(to right, transparent 0%, rgba(155,155,155,0.6) 50%, transparent 100%);
    border-radius: 2px;
    margin: 14px 0;
    transform: scaleX(0);
    transform-origin: left center;
    animation: zh-expandLine 0.9s cubic-bezier(0.2,0,0.4,1) forwards;
  }
  .hero-speed-line:nth-child(1) { width: 82%; margin-left: 0%;  animation-delay: 0.35s; }
  .hero-speed-line:nth-child(2) { width: 68%; margin-left: 4%;  animation-delay: 0.55s; opacity: 0.75; }
  .hero-speed-line:nth-child(3) { width: 52%; margin-left: 9%;  animation-delay: 0.48s; opacity: 0.5; }
  .hero-speed-line:nth-child(4) { width: 36%; margin-left: 14%; animation-delay: 0.65s; opacity: 0.32; }
  @keyframes zh-expandLine { to { transform: scaleX(1); } }

  /* TRUCK — desktop */
  .hero-rider-wrapper {
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: clamp(220px, 48vw, 640px);
    z-index: 4;
    transform: translateX(-145vw) scaleX(-1);
    animation: zh-riderSequence 4.2s linear 0.2s forwards;
    will-change: transform, opacity;
  }
  @keyframes zh-riderSequence {
    0%  { transform: translateX(-145vw) scaleX(-1); opacity: 1; animation-timing-function: cubic-bezier(0.2,0,0.5,1); }
    48% { transform: translateX(75vw)   scaleX(-1); opacity: 1; animation-timing-function: steps(1,start); }
    49% { transform: translateX(75vw)   scaleX(1);  opacity: 0; }
    54% { transform: translateX(75vw)   scaleX(1);  opacity: 0; animation-timing-function: cubic-bezier(0.10,1,0.16,1); }
    55% { transform: translateX(75vw)   scaleX(1);  opacity: 1; }
   100% { transform: translateX(-50%)   scaleX(1);  opacity: 1; }
  }
  .hero-rider-wrapper img {
    width: 100%;
    display: block;
    filter: drop-shadow(0 24px 64px rgba(0,0,0,0.11)) drop-shadow(0 6px 18px rgba(0,0,0,0.07));
  }

  /* BOTTOM BAR — desktop */
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
    animation: zh-fadeUp 1.1s cubic-bezier(0.4,0,0.2,1) 3.9s forwards;
  }
  .hero-eyebrow {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .hero-headline {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(34px, 4.8vw, 66px);
    line-height: 0.92;
    color: var(--dark);
  }
  .hero-headline span { color: var(--accent); }
  .hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    flex-wrap: wrap;
  }
  .hero-btn-primary {
    background: var(--dark);
    color: #fff;
    padding: 11px 24px;
    border-radius: 100px;
    border: none;
    font-family: 'Syne', sans-serif;
    font-size: 0.84rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s, transform 0.25s;
  }
  .hero-btn-primary:hover { background: var(--accent); transform: scale(1.03); }
  .hero-btn-outline {
    background: transparent;
    color: var(--dark);
    padding: 10px 24px;
    border-radius: 100px;
    border: 1.5px solid rgba(0,0,0,0.18);
    font-family: 'Syne', sans-serif;
    font-size: 0.84rem;
    font-weight: 500;
    cursor: pointer;
    transition: border-color 0.3s, color 0.3s, background 0.3s, transform 0.25s;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
  .hero-btn-outline:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(37,99,235,0.04);
    transform: scale(1.03);
  }
  .hero-btn-outline .explore-arrow {
    display: inline-block;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .hero-btn-outline:hover .explore-arrow { transform: translateX(4px); }

  /* STATS */
  .hero-right {
    opacity: 0;
    animation: zh-fadeUp 1.1s cubic-bezier(0.4,0,0.2,1) 4.2s forwards;
  }
  .hero-stats-box {
    display: inline-flex;
    align-items: center;
    background: #fff;
    border: 1.5px solid #e5e7eb;
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07);
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
    background: #e5e7eb;
  }
  .hero-stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: #111;
    line-height: 1;
    letter-spacing: 0.5px;
  }
  .hero-stat-label {
    font-size: 0.58rem;
    color: #aaa;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 5px;
    font-weight: 600;
  }

  /* BADGE — desktop */
  .hero-badge {
    position: absolute;
    top: 14%; right: 10%;
    z-index: 6;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    border-radius: 14px;
    padding: 12px 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.09), 0 0 0 1px rgba(0,0,0,0.04);
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    animation: zh-popIn 0.8s cubic-bezier(0.34,1.36,0.64,1) 4.7s forwards;
  }
  .hero-badge-dot {
    width: 9px; height: 9px;
    background: #22c55e; border-radius: 50%;
    flex-shrink: 0;
    animation: zh-blink 2.2s ease-in-out 4.7s infinite;
  }
  @keyframes zh-blink {
    0%,100% { opacity: 1; box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
    50%      { opacity: 0.3; box-shadow: none; }
  }
  .hero-badge-text { font-size: 0.78rem; font-weight: 500; color: var(--dark); }
  .hero-badge-sub  { font-size: 0.66rem; color: #999; margin-top: 2px; }

  /* MODAL */
  .zipto-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.42);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: zh-overlayIn 0.25s ease forwards;
  }
  @keyframes zh-overlayIn { from { opacity:0; } to { opacity:1; } }
  .zipto-modal-card {
    background: #fff;
    border-radius: 24px;
    padding: 40px 36px 32px;
    width: 100%;
    max-width: 420px;
    position: relative;
    box-shadow: 0 32px 80px rgba(0,0,0,0.16);
    animation: zh-cardIn 0.4s cubic-bezier(0.34,1.26,0.64,1) forwards;
    font-family: 'Syne', sans-serif;
    margin: 0 16px;
  }
  @keyframes zh-cardIn {
    from { opacity:0; transform: scale(0.88) translateY(18px); }
    to   { opacity:1; transform: scale(1) translateY(0); }
  }
  .zipto-close-btn {
    position: absolute;
    top: 16px; right: 18px;
    background: #f3f4f6; border: none;
    border-radius: 50%;
    width: 32px; height: 32px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 0.9rem; color: #555;
    transition: background 0.2s;
  }
  .zipto-close-btn:hover { background: #e5e7eb; color: #111; }
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
    cursor: pointer; text-align: left; font-family: 'Syne', sans-serif;
    transition: border-color 0.22s, box-shadow 0.22s, transform 0.18s;
  }
  .zm-store:hover { border-color: #111; box-shadow: 0 4px 16px rgba(0,0,0,0.09); transform: translateY(-2px); }
  .zm-store-icon { width: 28px; height: 28px; object-fit: contain; flex-shrink: 0; }
  .zm-store-sub  { font-size: 0.57rem; color: #9ca3af; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 600; }
  .zm-store-name { font-size: 0.82rem; font-weight: 700; color: #111; margin-top: 1px; }
  .zm-notify-btn {
    width: 100%; padding: 13px; background: #111; color: #fff;
    border: none; border-radius: 100px; font-family: 'Syne', sans-serif;
    font-size: 0.86rem; font-weight: 600; cursor: pointer;
    letter-spacing: 0.2px; transition: background 0.25s, transform 0.18s; margin-top: 4px;
  }
  .zm-notify-btn:hover { background: var(--accent); transform: scale(1.02); }

  /* SHARED KEYFRAMES */
  @keyframes zh-fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes zh-popIn {
    from { opacity: 0; transform: scale(0.8) translateY(6px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  /* NO-ANIM OVERRIDES */
  .hero-bg-text-wrap.no-anim .hero-bg-text { opacity: 1 !important; animation: none !important; }
  .hero-bg-text-wrap.no-anim .hero-bg-text-blue { clip-path: inset(0 0 0 0%) !important; animation: none !important; }
  .hero-rider-wrapper.no-anim { transform: translateX(-50%) scaleX(1) !important; opacity: 1 !important; animation: none !important; }
  .hero-left.no-anim, .hero-right.no-anim, .hero-badge.no-anim { opacity: 1 !important; transform: none !important; animation: none !important; }
  .hero-speed-lines.no-anim { display: none; }

  /* Mobile truck (parked) — hidden on desktop */
  .zipto-truck-parked { display: none; }

  /* ═══════════════════════════════════════
     TABLET  769px – 1024px
  ═══════════════════════════════════════ */
  @media (min-width: 769px) and (max-width: 1024px) {

    .zipto-hero {
      height: calc(100vh - 64px);
      min-height: 520px;
    }

    /* Scale down desktop truck */
    .hero-rider-wrapper {
      width: clamp(200px, 44vw, 480px);
      bottom: 48px;
    }

    /* Tighter bottom padding */
    .hero-bottom { padding: 0 36px 28px; }

    /* Smaller headline */
    .hero-headline { font-size: clamp(30px, 4vw, 52px); }

    /* Tighter stats */
    .hero-stat-item { padding: 14px 20px; }
    .hero-stat-num  { font-size: 1.6rem; }

    /* Badge */
    .hero-badge { top: 12%; right: 6%; padding: 10px 14px; }
    .hero-badge-text { font-size: 0.72rem; }
    .hero-badge-sub  { font-size: 0.60rem; }
  }

  /* ═══════════════════════════════════════
     MOBILE  ≤ 768px
     Layout is completely restructured:
     • Hero  →  display:flex + flex-direction:column
     • hero-bottom  →  position:relative + margin-top:auto
       (sits at bottom of flex column, NO gap possible)
     • Truck  →  absolute, centered in remaining space
  ═══════════════════════════════════════ */
  @media (max-width: 768px) {

    /* ① Hero is now a flex column that fills the viewport */
    .zipto-hero {
      height: 100svh;
      min-height: 0;
      overflow: hidden;
      display: flex !important;
      flex-direction: column !important;
    }

    /* ② Hide desktop-only elements */
    .hero-rider-wrapper { display: none !important; }
    .hero-speed-lines   { display: none !important; }

    /* ③ BG text — smaller, decorative overlay */
    .hero-bg-text-wrap {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .hero-bg-text,
    .hero-bg-text-blue {
      font-size: clamp(56px, 18vw, 96px) !important;
      letter-spacing: 0.08em;
    }

    /* ④ Badge — floats top-left, absolute */
    .hero-badge {
      position: absolute !important;
      top: clamp(48px, 10svh, 80px) !important;
      left: 16px !important;
      right: auto !important;
      padding: 8px 13px;
      border-radius: 11px;
      z-index: 6;
      animation: zh-popIn 0.7s cubic-bezier(0.34,1.36,0.64,1) 3.8s both !important;
    }
    .hero-badge-text { font-size: 0.70rem; }
    .hero-badge-sub  { font-size: 0.57rem; }

    /* ⑤ Truck — show on mobile, absolute, centered in upper zone */
    .zipto-truck-parked {
      display: block !important;
      position: absolute !important;
      /* Vertical center of the hero, shifted up 10% so it sits
         above the bottom content without any gap */
      top: 42% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      width: clamp(220px, 88vw, 340px) !important;
      z-index: 4;
      filter: drop-shadow(0 12px 36px rgba(0,0,0,0.12));
    }
    .zipto-truck-parked img { width: 100%; display: block; }

    /* ⑥ hero-bottom — OUT of absolute flow.
         margin-top:auto pushes it flush to the bottom
         of the flex column. Zero gap guaranteed. */
    .hero-bottom {
      position: relative !important;
      top: auto !important; left: auto !important;
      right: auto !important; bottom: auto !important;
      margin-top: auto !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 8px !important;
      padding: 0 18px !important;
      padding-bottom: max(20px, env(safe-area-inset-bottom, 20px)) !important;
      box-sizing: border-box;
      flex-shrink: 0;
      z-index: 10;
    }

    /* hero-left */
    .hero-left {
      opacity: 0;
      animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 3.9s forwards !important;
      width: 100%;
    }
    .hero-left.no-anim { opacity: 1 !important; transform: none !important; animation: none !important; }
    .hero-eyebrow  { font-size: 0.62rem; margin-bottom: 3px; letter-spacing: 2.5px; }
    .hero-headline { font-size: clamp(30px, 9vw, 44px); margin-top: 0; line-height: 0.9; }
    .hero-actions  { width: 100%; margin-top: 10px; gap: 8px; flex-wrap: nowrap; }
    .hero-btn-primary,
    .hero-btn-outline {
      flex: 1;
      justify-content: center;
      padding: 12px 10px;
      font-size: 0.80rem;
    }

    /* hero-right / stats */
    .hero-right {
      opacity: 0;
      animation: zh-fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) 4.2s forwards !important;
      width: 100%;
    }
    .hero-right.no-anim { opacity: 1 !important; transform: none !important; animation: none !important; }
    .hero-stats-box { display: flex; width: 100%; border-radius: 14px; }
    .hero-stat-item { flex: 1; padding: 11px 4px; }
    .hero-stat-num  { font-size: 1.25rem; }
    .hero-stat-label { font-size: 0.44rem; letter-spacing: 0.9px; }

    /* Modal tweaks */
    .zipto-modal-card { padding: 30px 20px 24px; border-radius: 20px; }
    .zm-stores        { flex-direction: column; }
  }

  /* ═══════════════════════════════════════
     SMALL MOBILE  ≤ 390px
  ═══════════════════════════════════════ */
  @media (max-width: 390px) {
    .hero-bg-text,
    .hero-bg-text-blue { font-size: 52px !important; }

    .hero-badge {
      top: clamp(42px, 9svh, 66px) !important;
      left: 12px !important;
    }

    .zipto-truck-parked {
      width: clamp(200px, 86vw, 300px) !important;
      top: 41% !important;
    }

    .hero-bottom {
      gap: 6px !important;
      padding: 0 14px !important;
      padding-bottom: max(16px, env(safe-area-inset-bottom, 16px)) !important;
    }
    .hero-headline  { font-size: clamp(27px, 8.5vw, 36px); }
    .hero-btn-primary,
    .hero-btn-outline { padding: 11px 8px; font-size: 0.76rem; }
    .hero-stat-item  { padding: 9px 3px; }
    .hero-stat-num   { font-size: 1.1rem; }
    .hero-stat-label { font-size: 0.40rem; }
  }

  /* ═══════════════════════════════════════
     MOBILE TRUCK PORTAL
     Rendered into document.body during animation
     so overflow:hidden on hero cannot clip it.
  ═══════════════════════════════════════ */
  .zipto-truck-portal {
    position: absolute;
    pointer-events: none;
    z-index: 9999;
    width: clamp(220px, 88vw, 340px);
  }
  .zipto-truck-portal img {
    width: 100%;
    display: block;
    filter: drop-shadow(0 12px 32px rgba(0,0,0,0.13));
  }
  .zipto-truck-portal.animating {
    animation: zh-portalTruck 4.2s linear 0.2s forwards;
  }
  @keyframes zh-portalTruck {
    0%  { transform: translateX(-145vw) scaleX(-1); opacity: 1; animation-timing-function: cubic-bezier(0.2,0,0.5,1); }
    48% { transform: translateX(110vw)  scaleX(-1); opacity: 1; animation-timing-function: steps(1,start); }
    49% { transform: translateX(110vw)  scaleX(1);  opacity: 0; }
    54% { transform: translateX(110vw)  scaleX(1);  opacity: 0; animation-timing-function: cubic-bezier(0.10,1,0.16,1); }
    55% { transform: translateX(110vw)  scaleX(1);  opacity: 1; }
   100% { transform: translateX(0)      scaleX(1);  opacity: 1; }
  }
`;

const SESSION_KEY = "zipto-hero-seen";
const ANIM_MS     = 4200 + 200; // total animation duration + delay

export default function ZiptoHero() {
  const [showOrder,    setShowOrder]    = useState(false);
  const [playAnim,     setPlayAnim]     = useState(false);
  // "hidden" | "portal-animating" | "parked" | "static"
  const [mobileTruck,  setMobileTruck]  = useState("hidden");
  const [portalStyle,  setPortalStyle]  = useState({});
  const heroRef  = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Inject styles once
    if (!document.getElementById("zipto-hero-styles")) {
      const tag = document.createElement("style");
      tag.id    = "zipto-hero-styles";
      tag.innerHTML = heroStyles;
      document.head.appendChild(tag);
    }

    // Clear session cache on hard nav (not back/forward)
    const navType = performance.getEntriesByType("navigation")[0]?.type;
    if (navType !== "back_forward") sessionStorage.removeItem(SESSION_KEY);

    const seen       = sessionStorage.getItem(SESSION_KEY);
    const shouldPlay = !seen;
    if (shouldPlay) {
      setPlayAnim(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }

    // Mobile-only truck animation logic
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    if (shouldPlay) {
      // Position the portal truck at vertical center of the hero
      const rect   = heroRef.current?.getBoundingClientRect();
      const truckW = Math.min(Math.max(220, window.innerWidth * 0.88), 340);
      const left   = rect ? rect.left + (rect.width  - truckW) / 2 : 0;
      const top    = rect ? rect.top  + window.scrollY + rect.height * 0.42 - 60 : 0;
      setPortalStyle({ left: `${left}px`, top: `${top}px` });
      setMobileTruck("portal-animating");

      const timer = setTimeout(() => setMobileTruck("parked"), ANIM_MS);
      return () => clearTimeout(timer);
    } else {
      setMobileTruck("static");
    }

    return () => {
      document.getElementById("zipto-hero-styles")?.remove();
    };
  }, []);

  const closeOnBackdrop = (e, setter) => {
    if (e.target === e.currentTarget) setter(false);
  };

  const na = (base) => playAnim ? base : `${base} no-anim`;

  return (
    <>
      {/* Portal truck — lives on document.body during animation */}
      {mobileTruck === "portal-animating" && createPortal(
        <div
          className="zipto-truck-portal animating"
          style={portalStyle}
          aria-hidden="true"
        >
          <img src={ziptoTruck} alt="" />
        </div>,
        document.body
      )}

      <section className="zipto-hero" ref={heroRef}>

        {/* Decorative BG text */}
        <div className={na("hero-bg-text-wrap")}>
          <span className="hero-bg-text">ZIPTO</span>
          <span className="hero-bg-text-blue">ZIPTO</span>
        </div>

        {/* Speed lines — desktop / tablet only */}
        <div className={na("hero-speed-lines")}>
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
        </div>

        {/* Desktop / tablet truck (CSS hides on mobile) */}
        <div className={na("hero-rider-wrapper")}>
          <img src={ziptoTruck} alt="Zipto delivery truck" />
        </div>

        {/* Mobile truck — shown after animation or immediately for
            returning visitors. CSS positions it via top:42% + translateY(-50%) */}
        {(mobileTruck === "parked" || mobileTruck === "static") && (
          <div className="zipto-truck-parked" aria-hidden="true">
            <img src={ziptoTruck} alt="" />
          </div>
        )}

        {/* Rider nearby badge */}
        <div className={na("hero-badge")}>
          <div className="hero-badge-dot" />
          <div>
            <div className="hero-badge-text">Rider nearby</div>
            <div className="hero-badge-sub">2 min away</div>
          </div>
        </div>

        {/* ── BOTTOM CONTENT ──
            Desktop/Tablet: position:absolute, bottom:0
            Mobile: position:relative, margin-top:auto  */}
        <div className="hero-bottom">

          <div className={na("hero-left")}>
            <div className="hero-eyebrow">⚡ Fast. Reliable. Now.</div>
            <h1 className="hero-headline">
              Delivered<br />in <span>Minutes.</span>
            </h1>
            <div className="hero-actions">
              <button
                className="hero-btn-primary"
                onClick={() => setShowOrder(true)}
              >
                Order Now
              </button>
              <button
                className="hero-btn-outline"
                onClick={() => navigate("/about")}
              >
                Explore More <span className="explore-arrow">→</span>
              </button>
            </div>
          </div>

          <div className={na("hero-right")}>
            <div className="hero-stats-box">
              <div className="hero-stat-item">
                <div className="hero-stat-num">12K+</div>
                <div className="hero-stat-label">Expected Deliveries</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num">4.9★</div>
                <div className="hero-stat-label">Rating</div>
              </div>
              <div className="hero-stat-item">
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
          className="zipto-overlay"
          onClick={(e) => closeOnBackdrop(e, setShowOrder)}
        >
          <div className="zipto-modal-card">
            <button
              className="zipto-close-btn"
              onClick={() => setShowOrder(false)}
              aria-label="Close"
            >✕</button>

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
              <button className="zm-store">
                <img src={appleLogo} alt="Apple" className="zm-store-icon" />
                <div>
                  <div className="zm-store-sub">iOS</div>
                  <div className="zm-store-name">App Store</div>
                </div>
              </button>
              <button className="zm-store">
                <img src={androidLogo} alt="Android" className="zm-store-icon" />
                <div>
                  <div className="zm-store-sub">Android</div>
                  <div className="zm-store-name">Google Play</div>
                </div>
              </button>
            </div>

            <button
              className="zm-notify-btn"
              onClick={() => setShowOrder(false)}
            >
              Got it, notify me →
            </button>
          </div>
        </div>
      )}
    </>
  );
}