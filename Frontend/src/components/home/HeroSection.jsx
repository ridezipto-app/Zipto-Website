
import { useEffect, useState } from "react";

const ORDERS = [
  { id: "#ZP-4821", from: "Bhubaneswar", to: "Cuttack",     eta: "18 min", type: "Package delivery", pct: 65 },
  { id: "#ZP-4822", from: "Puri",         to: "Bhubaneswar", eta: "34 min", type: "Express scooty",   pct: 38 },
  { id: "#ZP-4823", from: "Rourkela",     to: "Sambalpur",   eta: "52 min", type: "Cargo auto",       pct: 20 },
  { id: "#ZP-4824", from: "Berhampur",    to: "Ganjam",      eta: "9 min",  type: "Instant bike",     pct: 88 },
];

const FLEET = [
  { name: "Mini truck",   avail: "Bookable",      icon: "truck" },
  { name: "Auto cargo",   avail: "3 nearby",      icon: "auto"  },
  { name: "Express bike", avail: "Available now", icon: "clock" },
  { name: "Pickup van",   avail: "2 available",   icon: "pin"   },
];

function TruckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
      <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      <path d="M2 12V8a1 1 0 011-1h11v8H4"/><path d="M14 7h4l3 4v4h-7V7z"/>
    </svg>
  );
}
function AutoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
      <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
      <rect x="9" y="11" width="14" height="10" rx="2"/>
      <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
const FleetIcon = ({ type }) => {
  if (type === "truck") return <TruckIcon />;
  if (type === "auto")  return <AutoIcon />;
  if (type === "clock") return <ClockIcon />;
  return <PinIcon />;
};

function LiveTracker() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(p => (p + 1) % ORDERS.length);
        setVisible(true);
      }, 260);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const o = ORDERS[idx];

  return (
    <>
      <div style={s.cardFace} />
      <div style={s.trackerHead}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={s.liveDot} className="live-dot-pulse" />
          <span style={s.liveText}>Live</span>
        </div>
        <span style={s.orderId}>{o.id}</span>
      </div>
      <div style={{
        ...s.trackerBody,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 0.25s, transform 0.25s",
      }}>
        <div style={s.orderType}>{o.type}</div>
        <div style={s.route}>
          <div style={s.routeDots}>
            <div style={s.dotO} />
            <div style={s.routeLine} />
            <div style={s.dotD} />
          </div>
          <div style={s.routeLabels}>
            <div style={s.routeLabel}>{o.from}</div>
            <div style={s.routeLabel}>{o.to}</div>
          </div>
        </div>
        <div style={s.progBar}>
          <div style={{ ...s.progFill, width: `${o.pct}%`, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
        </div>
        <div style={s.progMeta}>
          <span style={s.progPct}>{o.pct}% complete</span>
          <span style={s.progEta}>ETA {o.eta}</span>
        </div>
      </div>
      <div style={s.minimap}>
        <svg viewBox="0 0 380 72" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <pattern id="mg" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M16 0L0 0 0 16" fill="none" stroke="#dbeafe" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="380" height="72" fill="url(#mg)" />
          <path d="M 20 58 Q 100 20 190 38 T 360 12" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.7" />
          <circle cx="20" cy="58" r="4" fill="#60a5fa" />
          <circle cx="360" cy="12" r="4" fill="#1d4ed8" />
          <circle r="5" fill="#2563eb" opacity="0.9">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 20 58 Q 100 20 190 38 T 360 12" />
          </circle>
          <circle r="9" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 20 58 Q 100 20 190 38 T 360 12" />
          </circle>
          <text x="356" y="24" fontSize="9" fill="#94a3b8" textAnchor="end" fontFamily="monospace">Odisha, IN</text>
        </svg>
      </div>
    </>
  );
}

export default function HeroSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,300;0,700;1,300;1,600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const card = document.getElementById("tracker-card");
    const handleMouse = (e) => {
      if (!card) return;
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
      card.style.transform = `rotateX(${8 - dy * 4}deg) rotateY(${-6 + dx * 4}deg)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,300;0,700;1,300;1,600&display=swap');

        @keyframes fadeDown  { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(16px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
        @keyframes pulseDot  { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.4)} 50%{box-shadow:0 0 0 5px rgba(34,197,94,0)} }
        @keyframes float3d   { 0%,100%{transform:rotateX(8deg) rotateY(-6deg) translateY(0)} 50%{transform:rotateX(8deg) rotateY(-6deg) translateY(-12px)} }
        @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes scan      { 0%{transform:translateY(-100%);opacity:0} 30%{opacity:0.6} 70%{opacity:0.6} 100%{transform:translateY(600%);opacity:0} }

        .hero-eyebrow  { animation: fadeDown  0.6s ease both; }
        .hero-headline { animation: fadeUp    0.7s 0.1s ease both; }
        .hero-subtext  { animation: fadeUp    0.7s 0.2s ease both; }
        .hero-ctas     { animation: fadeUp    0.7s 0.3s ease both; }
        .hero-trust    { animation: fadeUp    0.7s 0.4s ease both; }
        .hero-scene    { animation: fadeRight 0.8s 0.2s ease both; }
        .hero-ticker   { animation: fadeUp    0.7s 0.5s ease both; }

        .card-3d-float   { animation: float3d   6s ease-in-out infinite; }
        .fleet-card-float{ animation: floatCard 7s 1s ease-in-out infinite; }
        .live-dot-pulse  { animation: pulseDot  1.8s infinite; }
        .scan-anim       { animation: scan      3s ease-in-out infinite; }

        .trust-item:hover { background: rgba(239,246,255,0.9) !important; }
        .trust-item + .trust-item { border-left: 0.5px solid rgba(29,78,216,0.12); }

        .hero-btn-primary:hover  { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(29,78,216,0.45) !important; }
        .hero-btn-secondary:hover{ background: #fff !important; border-color: rgba(29,78,216,0.4) !important; transform: translateY(-1px); }
        .fleet-item-hover:hover  { background: #eff6ff !important; border-color: rgba(29,78,216,0.25) !important; transform: translateY(-1px); }

        @media (max-width: 860px) {
          .hero-layout  { grid-template-columns: 1fr !important; }
          .hero-headline{ font-size: 40px !important; }
          .card-3d-float{ animation: floatCard 6s ease-in-out infinite !important; transform: none !important; }
          .hero-trust   { grid-template-columns: 1fr 1fr !important; }
          .trust-item:nth-child(3){ border-left: none !important; border-top: 0.5px solid rgba(29,78,216,0.12) !important; }
          .trust-item:nth-child(4){ border-top: 0.5px solid rgba(29,78,216,0.12) !important; }
        }
        @media (max-width: 500px) {
          .hero-headline{ font-size: 32px !important; }
          .hero-ctas    { flex-direction: column !important; }
          .hero-trust   { grid-template-columns: 1fr !important; }
          .trust-item + .trust-item { border-left: none !important; border-top: 0.5px solid rgba(29,78,216,0.12) !important; }
        }
      `}</style>

      <section style={s.section}>
        {/* Background orbs */}
        <div style={{ ...s.bgOrb, width: 500, height: 500, background: "#93c5fd", top: -100, right: -100 }} />
        <div style={{ ...s.bgOrb, width: 300, height: 300, background: "#bfdbfe", bottom: 0,    left: 0   }} />
        <div style={s.gridLines} />

        <div style={s.container}>
          <div style={s.heroLayout} className="hero-layout">

            {/* ── LEFT ── */}
            <div>
              {/* Eyebrow */}
              <div style={s.eyebrow} className="hero-eyebrow">
                <span style={s.eyebrowDot} className="live-dot-pulse" />
                <span style={s.eyebrowText}>Odisha's fastest delivery network</span>
              </div>

              {/* Headline */}
              <h1 style={s.headline} className="hero-headline">
                Deliver anything,<br />
                <em style={{ fontStyle: "italic", fontWeight: 300, color: "#2563eb" }}>anywhere</em> —<br />
                <span style={s.headlineAccent}>instantly.</span>
              </h1>

              {/* Subtext */}
              <p style={s.subtext} className="hero-subtext">
                From bike to mini truck — book in seconds, watch it move in real time.
                Transparent pricing, zero surprises across Bhubaneswar, Cuttack &amp; beyond.
              </p>

              {/* CTAs */}
              <div style={s.ctaRow} className="hero-ctas">
                <button style={s.btnPrimary} className="hero-btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Book a delivery
                </button>
                <button style={s.btnSecondary} className="hero-btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M10 8l6 4-6 4V8z" fill="#2563eb"/>
                  </svg>
                  Become a rider
                </button>
              </div>

              {/* ── TRUST STRIP ── */}
              <div style={s.trustStrip} className="hero-trust">

                {/* Speed */}
                <div style={s.trustItem} className="trust-item">
                  <div style={s.trustIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div style={s.trustLabel}>Speed</div>
                  <div style={s.trustTitle}>12-min avg pickup</div>
                  <div style={s.trustSub}>Riders near you — no long waits, ever.</div>
                  <div style={{ ...s.pill, background: "#f0fdf4", border: "0.5px solid #bbf7d0", color: "#15803d", marginTop: 10 }}>
                    <span style={{ ...s.pillDot, background: "#22c55e" }} /> Fastest in Odisha
                  </div>
                </div>

                {/* Trust */}
                <div style={s.trustItem} className="trust-item">
                  <div style={s.trustIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div style={s.trustLabel}>Trust</div>
                  <div style={s.trustTitle}>Verified riders only</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 6 }}>
                    {["Police verified", "Insured up to ₹5,000"].map(t => (
                      <div key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <div style={s.checkCircle}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round">
                            <path d="M2 6l3 3 5-5"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: 12, color: "#374151" }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div style={s.trustItem} className="trust-item">
                  <div style={s.trustIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                    </svg>
                  </div>
                  <div style={s.trustLabel}>Pricing</div>
                  <div style={s.trustTitle}>Starts at just</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginTop: 4 }}>
                    <span style={{ fontSize: 13, color: "#94a3b8" }}>₹</span>
                    <span style={{ fontSize: 26, fontWeight: 800, color: "#1d4ed8", lineHeight: 1 }}>29</span>
                    <span style={{ fontSize: 11, color: "#64748b" }}>/ delivery</span>
                  </div>
                  <div style={{ ...s.pill, background: "#fffbeb", border: "0.5px solid #fde68a", color: "#92400e", marginTop: 8 }}>
                    <span style={{ ...s.pillDot, background: "#f59e0b" }} /> No surge pricing
                  </div>
                </div>

                {/* Social Proof */}
                <div style={s.trustItem} className="trust-item">
                  <div style={s.trustIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                  </div>
                  <div style={s.trustLabel}>Reviews</div>
                  <div style={s.trustTitle}>Loved by customers</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                    <div style={{ display: "flex" }}>
                      {[["RK","#dbeafe","#1d4ed8"],["AP","#fce7f3","#9d174d"],["SM","#dcfce7","#166534"]].map(([init, bg, col], i) => (
                        <div key={init} style={{ width: 22, height: 22, borderRadius: "50%", background: bg, color: col, border: "1.5px solid #fff", marginLeft: i === 0 ? 0 : -6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, zIndex: 3 - i, position: "relative" }}>
                          {init}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 1 }}>
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="#f59e0b">
                          <path d="M10 1l2.39 7.26H19l-5.19 3.77 1.98 7.24L10 15.27l-5.79 4 1.98-7.24L1 7.26h6.61z"/>
                        </svg>
                      ))}
                    </div>
                    <span style={{ fontSize: 11, color: "#64748b" }}>4.9 · 2.1k</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 6, fontStyle: "italic", lineHeight: 1.5 }}>
                    "Delivered in 11 min. Brilliant!"
                  </div>
                </div>

              </div>
            </div>

            {/* ── RIGHT: 3D SCENE ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, perspective: "1200px" }} className="hero-scene">

              {/* Live tracker card */}
              <div id="tracker-card" className="card-3d-float" style={s.card3d}>
                <div style={s.scanLine} className="scan-anim" />
                <LiveTracker />
              </div>

              {/* Fleet card */}
              <div style={s.fleetCard} className="fleet-card-float">
                <div style={s.fleetLabel}>Available fleet</div>
                <div style={s.fleetGrid}>
                  {FLEET.map(({ name, avail, icon }) => (
                    <div key={name} style={s.fleetItem} className="fleet-item-hover">
                      <div style={s.fleetIcon}><FleetIcon type={icon} /></div>
                      <div>
                        <div style={s.fleetName}>{name}</div>
                        <div style={s.fleetAvail}>{avail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Ticker ── */}
          <div style={s.tickerBar} className="hero-ticker">
            <span style={s.tickerTag}>Delivery Aapki · Trust Humara</span>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              {["Bhubaneswar","Cuttack","Puri","Rourkela","Berhampur","Sambalpur"].map((city, i) => (
                <span key={city} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && <span style={s.citySep}>·</span>}
                  <span style={s.city}>{city}</span>
                </span>
              ))}
            </div>
            <div style={s.activeBadge}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#1d4ed8" }}>6 cities active</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

/* ── Styles ── */
const FONT  = "'Plus Jakarta Sans', sans-serif";
const SERIF = "'Fraunces', Georgia, serif";

const s = {
  section: {
    minHeight: "100vh",
    background: "linear-gradient(155deg,#f0f5ff 0%,#e8f0fe 40%,#dbeafe 100%)",
    padding: "40px 24px 60px",
    position: "relative", overflow: "hidden",
    fontFamily: FONT,
  },
  bgOrb: {
    position: "absolute", borderRadius: "50%",
    pointerEvents: "none", filter: "blur(60px)", opacity: 0.35,
  },
  gridLines: {
    position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
    backgroundImage: "linear-gradient(#1d4ed8 1px,transparent 1px),linear-gradient(90deg,#1d4ed8 1px,transparent 1px)",
    backgroundSize: "60px 60px",
  },
  container:  { maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 },
  heroLayout: { display: "grid", gridTemplateColumns: "1fr 420px", gap: 48, alignItems: "center" },

  /* Eyebrow */
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(29,78,216,0.08)", border: "0.5px solid rgba(29,78,216,0.2)",
    borderRadius: 100, padding: "6px 14px 6px 8px", marginBottom: 28,
  },
  eyebrowDot:  { width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" },
  eyebrowText: { fontSize: 12, fontWeight: 600, color: "#1d4ed8", letterSpacing: "0.06em", textTransform: "uppercase" },

  /* Headline */
  headline: {
    fontFamily: SERIF, fontSize: 56, lineHeight: 1.06,
    letterSpacing: "-0.03em", color: "#0b0f1a", marginBottom: 20, fontWeight: 700,
  },
  headlineAccent: {
    background: "linear-gradient(135deg,#1d4ed8,#60a5fa)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
  },

  subtext: { fontSize: 15, lineHeight: 1.75, color: "#64748b", maxWidth: 420, marginBottom: 32 },

  /* CTAs */
  ctaRow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 28 },
  btnPrimary: {
    display: "flex", alignItems: "center", gap: 8,
    background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 12,
    padding: "14px 28px", fontSize: 15, fontWeight: 600, fontFamily: FONT,
    cursor: "pointer", letterSpacing: "-0.01em",
    boxShadow: "0 4px 20px rgba(29,78,216,0.35),inset 0 1px 0 rgba(255,255,255,0.15)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  btnSecondary: {
    display: "flex", alignItems: "center", gap: 8,
    background: "rgba(255,255,255,0.8)", color: "#1e40af",
    border: "0.5px solid rgba(29,78,216,0.25)", borderRadius: 12,
    padding: "14px 24px", fontSize: 15, fontWeight: 500, fontFamily: FONT,
    cursor: "pointer", backdropFilter: "blur(8px)", transition: "all 0.2s",
  },

  /* Trust Strip */
  trustStrip: {
    display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0,
    border: "0.5px solid rgba(29,78,216,0.14)", borderRadius: 18,
    background: "rgba(255,255,255,0.72)", backdropFilter: "blur(14px)",
    overflow: "hidden",
  },
  trustItem:  { padding: "20px 16px", transition: "background 0.2s", cursor: "default" },
  trustIcon:  { width: 38, height: 38, borderRadius: 11, background: "#eff6ff", border: "0.5px solid #bfdbfe", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 },
  trustLabel: { fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 },
  trustTitle: { fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 4, lineHeight: 1.3 },
  trustSub:   { fontSize: 11, color: "#64748b", lineHeight: 1.5 },
  pill:       { display: "inline-flex", alignItems: "center", gap: 5, borderRadius: 100, padding: "3px 9px", fontSize: 10, fontWeight: 600 },
  pillDot:    { width: 5, height: 5, borderRadius: "50%", display: "inline-block" },
  checkCircle:{ width: 16, height: 16, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },

  /* 3D Tracker Card */
  card3d: {
    background: "#fff", borderRadius: 20,
    border: "0.5px solid rgba(29,78,216,0.15)",
    transformStyle: "preserve-3d",
    boxShadow: "0 30px 60px rgba(29,78,216,0.15),0 12px 24px rgba(29,78,216,0.1),0 4px 8px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9)",
    overflow: "hidden", position: "relative",
  },
  cardFace:   { background: "linear-gradient(135deg,#1d4ed8,#1e40af,#1e3a8a)", height: 6 },
  scanLine:   { position: "absolute", left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.6),transparent)", top: 0, pointerEvents: "none", zIndex: 10 },
  trackerHead:{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px 14px", borderBottom: "0.5px solid #f1f5f9" },
  liveDot:    { display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#22c55e" },
  liveText:   { fontSize: 11, fontWeight: 700, color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase" },
  orderId:    { fontSize: 11, color: "#94a3b8", fontFamily: "monospace", letterSpacing: "0.05em" },
  trackerBody:{ padding: "18px 20px 16px" },
  orderType:  { fontSize: 11, color: "#94a3b8", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 },
  route:      { display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18 },
  routeDots:  { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 },
  dotO:       { width: 10, height: 10, borderRadius: "50%", border: "2px solid #2563eb", background: "#fff", flexShrink: 0 },
  routeLine:  { width: 1, height: 24, background: "linear-gradient(180deg,#2563eb,#bfdbfe)", margin: "3px 0" },
  dotD:       { width: 10, height: 10, borderRadius: "50%", background: "#2563eb", flexShrink: 0, boxShadow: "0 0 8px rgba(37,99,235,0.5)" },
  routeLabels:{ display: "flex", flexDirection: "column", gap: 16 },
  routeLabel: { fontSize: 14, fontWeight: 600, color: "#0f172a" },
  progBar:    { height: 5, background: "#f1f5f9", borderRadius: 100, overflow: "hidden", marginBottom: 8 },
  progFill:   { height: "100%", borderRadius: 100, background: "linear-gradient(90deg,#2563eb,#60a5fa)" },
  progMeta:   { display: "flex", justifyContent: "space-between" },
  progPct:    { fontSize: 11, color: "#94a3b8" },
  progEta:    { fontSize: 12, fontWeight: 700, color: "#2563eb" },
  minimap:    { background: "#f8faff", borderTop: "0.5px solid #f1f5f9", height: 72, position: "relative", overflow: "hidden" },

  /* Fleet Card */
  fleetCard:  { background: "#fff", borderRadius: 16, border: "0.5px solid rgba(29,78,216,0.12)", boxShadow: "0 8px 24px rgba(29,78,216,0.08),0 2px 6px rgba(0,0,0,0.04),inset 0 1px 0 rgba(255,255,255,0.9)", padding: "16px 18px" },
  fleetLabel: { fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 },
  fleetGrid:  { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 },
  fleetItem:  { background: "#f8faff", border: "0.5px solid rgba(29,78,216,0.1)", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s", cursor: "default" },
  fleetIcon:  { width: 28, height: 28, borderRadius: 7, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  fleetName:  { fontSize: 12, fontWeight: 600, color: "#1e40af" },
  fleetAvail: { fontSize: 10, color: "#64748b", marginTop: 1 },

  /* Ticker */
  tickerBar:  { marginTop: 40, background: "rgba(255,255,255,0.5)", border: "0.5px solid rgba(29,78,216,0.1)", borderRadius: 14, padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, backdropFilter: "blur(8px)" },
  tickerTag:  { fontSize: 12, fontWeight: 700, color: "#1d4ed8", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" },
  city:       { fontSize: 12, color: "#64748b", fontWeight: 500 },
  citySep:    { fontSize: 12, color: "#cbd5e1", margin: "0 10px" },
  activeBadge:{ display: "flex", alignItems: "center", gap: 6, background: "#eff6ff", border: "0.5px solid #bfdbfe", borderRadius: 100, padding: "5px 12px" },
};
