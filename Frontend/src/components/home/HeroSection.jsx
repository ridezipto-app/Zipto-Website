import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ziptoTruck from "../../assets/zipto_truck.png";

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

  .zipto-hero {
    width: 100vw;
    height: calc(100vh - 72px);
    min-height: 520px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(110deg, #e4e4e4 0%, #eeeeee 35%, #f8f8f8 65%, #ffffff 100%);
    font-family: 'Syne', sans-serif;
  }

  .hero-bg-text {
    position: absolute;
    top: 28%;
    left: 50%;
    font-family: 'Cocon', 'Bebas Neue', sans-serif;
    font-size: clamp(140px, 24vw, 340px);
    letter-spacing: 0.06em;
    color: rgba(180, 180, 180, 0.32);
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transform: translate(-50%, -52%);
    animation: zh-bgReveal 1.8s ease 0.5s forwards;
  }
  @keyframes zh-bgReveal {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  .hero-bg-text.no-anim {
    opacity: 1 !important;
    animation: none !important;
  }
  .hero-rider-wrapper.no-anim {
    transform: translateX(-50%) scaleX(1) !important;
    opacity: 1 !important;
    animation: none !important;
  }
  .hero-left.no-anim,
  .hero-right.no-anim,
  .hero-badge.no-anim {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
  .hero-speed-lines.no-anim {
    display: none;
  }

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
    animation: zh-expandLine 0.9s cubic-bezier(0.2, 0, 0.4, 1) forwards;
  }
  .hero-speed-line:nth-child(1) { width: 82%; margin-left: 0%;  animation-delay: 0.35s; }
  .hero-speed-line:nth-child(2) { width: 68%; margin-left: 4%;  animation-delay: 0.55s; opacity: 0.75; }
  .hero-speed-line:nth-child(3) { width: 52%; margin-left: 9%;  animation-delay: 0.48s; opacity: 0.5; }
  .hero-speed-line:nth-child(4) { width: 36%; margin-left: 14%; animation-delay: 0.65s; opacity: 0.32; }
  @keyframes zh-expandLine { to { transform: scaleX(1); } }

  /* ── TRUCK ── */
  .hero-rider-wrapper {
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: clamp(340px, 48vw, 640px);
    z-index: 4;
    transform: translateX(-145vw) scaleX(-1);
    animation: zh-riderSequence 6.5s linear 0.2s forwards;
    will-change: transform, opacity;
  }
  @keyframes zh-riderSequence {
    0%  { transform: translateX(-145vw) scaleX(-1); opacity: 1; animation-timing-function: cubic-bezier(0.2,0,0.5,1); }
    48% { transform: translateX(75vw) scaleX(-1); opacity: 1; animation-timing-function: steps(1, start); }
    49% { transform: translateX(75vw) scaleX(1); opacity: 0; }
    54% { transform: translateX(75vw) scaleX(1); opacity: 0; animation-timing-function: cubic-bezier(0.16,1,0.3,1); }
    55% { transform: translateX(75vw) scaleX(1); opacity: 1; }
    100%{ transform: translateX(-50%) scaleX(1); opacity: 1; }
  }
  .hero-rider-wrapper img {
    width: 100%;
    display: block;
    filter: drop-shadow(0 24px 64px rgba(0,0,0,0.11)) drop-shadow(0 6px 18px rgba(0,0,0,0.07));
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
    animation: zh-fadeUp 1.1s cubic-bezier(0.4, 0, 0.2, 1) 6.2s forwards;
  }

  .hero-eyebrow {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
    font-family: 'Syne', sans-serif;
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
  /* animated arrow on explore button */
  .hero-btn-outline .explore-arrow {
    display: inline-block;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .hero-btn-outline:hover .explore-arrow {
    transform: translateX(4px);
  }

  /* ── STATS BOX ── */
  .hero-right {
    opacity: 0;
    animation: zh-fadeUp 1.1s cubic-bezier(0.4, 0, 0.2, 1) 6.5s forwards;
  }

  .hero-stats-box {
    display: inline-flex;
    align-items: center;
    background: #ffffff;
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
    font-family: 'Syne', sans-serif;
    font-weight: 600;
  }

  /* ── BADGE ── */
  .hero-badge {
    position: absolute;
    top: 14%; right: 10%;
    z-index: 6;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 14px;
    padding: 12px 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.09), 0 0 0 1px rgba(0,0,0,0.04);
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    animation: zh-popIn 0.8s cubic-bezier(0.34,1.36,0.64,1) 7.0s forwards;
  }
  .hero-badge-dot {
    width: 9px; height: 9px;
    background: #22c55e; border-radius: 50%;
    flex-shrink: 0;
    animation: zh-blink 2.2s ease-in-out 7.0s infinite;
  }
  @keyframes zh-blink {
    0%,100% { opacity: 1; box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
    50%      { opacity: 0.3; box-shadow: none; }
  }
  .hero-badge-text { font-size: 0.78rem; font-weight: 500; color: var(--dark); font-family: 'Syne', sans-serif; }
  .hero-badge-sub  { font-size: 0.66rem; color: #999; margin-top: 2px; font-family: 'Syne', sans-serif; }

  /* ── SHARED MODAL BASE ── */
  .zipto-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.42);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
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

  /* ── ORDER MODAL ── */
  .zm-launch-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 100px;
    padding: 5px 12px;
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .zm-launch-dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }
  .zm-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    color: var(--dark);
    line-height: 0.95;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
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
  .zm-store-icon { font-size: 1.5rem; line-height: 1; flex-shrink: 0; }
  .zm-store-sub  { font-size: 0.57rem; color: #9ca3af; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 600; }
  .zm-store-name { font-size: 0.82rem; font-weight: 700; color: #111; margin-top: 1px; }
  .zm-notify-btn {
    width: 100%; padding: 13px; background: #111; color: #fff;
    border: none; border-radius: 100px; font-family: 'Syne', sans-serif;
    font-size: 0.86rem; font-weight: 600; cursor: pointer;
    letter-spacing: 0.2px; transition: background 0.25s, transform 0.18s; margin-top: 4px;
  }
  .zm-notify-btn:hover { background: var(--accent); transform: scale(1.02); }

  @keyframes zh-fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes zh-popIn {
    from { opacity: 0; transform: scale(0.8) translateY(6px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
`;

const SESSION_KEY = "zipto-hero-seen";

export default function ZiptoHero() {
  const [showOrder, setShowOrder] = useState(false);
  const [playAnim, setPlayAnim]   = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.getElementById("zipto-hero-styles")) {
      const tag = document.createElement("style");
      tag.id = "zipto-hero-styles";
      tag.innerHTML = heroStyles;
      document.head.appendChild(tag);
    }

    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setPlayAnim(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }

    return () => {
      const tag = document.getElementById("zipto-hero-styles");
      if (tag) tag.remove();
    };
  }, []);

  const closeOnBackdrop = (e, setter) => {
    if (e.target === e.currentTarget) setter(false);
  };

  const na = (base) => playAnim ? base : `${base} no-anim`;

  return (
    <>
      <section className="zipto-hero">

        <div className={na("hero-bg-text")}>ZIPTO</div>

        <div className={na("hero-speed-lines")}>
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
          <div className="hero-speed-line" />
        </div>

        <div className={na("hero-rider-wrapper")}>
          <img src={ziptoTruck} alt="Zipto delivery truck" />
        </div>

        <div className={na("hero-badge")}>
          <div className="hero-badge-dot" />
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
              {/* ── Explore More → navigates to About Us ── */}
              <button
                className="hero-btn-outline"
                onClick={() => navigate("/about")}
              >
                Explore More
                <span className="explore-arrow">→</span>
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

      {/* ── ORDER NOW MODAL ── */}
      {showOrder && (
        <div className="zipto-overlay" onClick={(e) => closeOnBackdrop(e, setShowOrder)}>
          <div className="zipto-modal-card">
            <button className="zipto-close-btn" onClick={() => setShowOrder(false)} aria-label="Close">✕</button>
            <div className="zm-launch-pill">
              <div className="zm-launch-dot" />
              Launching Soon
            </div>
            <div className="zm-title">Our app is<br /><span>almost here.</span></div>
            <p className="zm-desc">Be the first to experience faster, smarter deliveries across Odisha.</p>
            <div className="zm-stores">
              <button className="zm-store">
                <div className="zm-store-icon">🍎</div>
                <div>
                  <div className="zm-store-sub">iOS</div>
                  <div className="zm-store-name">App Store</div>
                </div>
              </button>
              <button className="zm-store">
                <div className="zm-store-icon">▶</div>
                <div>
                  <div className="zm-store-sub">Android</div>
                  <div className="zm-store-name">Google Play</div>
                </div>
              </button>
            </div>
            <button className="zm-notify-btn" onClick={() => setShowOrder(false)}>
              Got it, notify me →
            </button>
          </div>
        </div>
      )}
    </>
  );
}