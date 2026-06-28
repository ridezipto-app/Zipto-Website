import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LaunchingSoon() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeDown { from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp   { from{opacity:0;transform:translateY(20px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes pulseDot { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.5)} 50%{box-shadow:0 0 0 7px rgba(34,197,94,0)} }

        .ls-a-d0 { animation: fadeDown 0.55s ease both; }
        .ls-a-u1 { animation: fadeUp 0.6s 0.07s ease both; }
        .ls-a-u2 { animation: fadeUp 0.6s 0.15s ease both; }
        .ls-a-u3 { animation: fadeUp 0.6s 0.23s ease both; }
        .ls-a-u4 { animation: fadeUp 0.6s 0.31s ease both; }
        .ls-a-u5 { animation: fadeUp 0.6s 0.39s ease both; }
        .ls-a-u6 { animation: fadeUp 0.6s 0.47s ease both; }

        .ls-stat-card:hover  { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(29,78,216,0.13); }
        .ls-feat-card:hover  { border-color: rgba(29,78,216,0.26) !important; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(29,78,216,0.1); }
        .ls-btn-primary:hover  { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(29,78,216,0.46) !important; }
        .ls-btn-secondary:hover{ background: #fff !important; border-color: rgba(29,78,216,0.42) !important; transform: translateY(-1px); }

        @media (max-width: 540px) {
          .ls-stats    { grid-template-columns: 1fr 1fr !important; }
          .ls-stats .ls-stat-card:last-child { grid-column: 1 / -1; }
          .ls-features { grid-template-columns: 1fr !important; }
          .ls-cta-row  { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* Page wrapper */}
      <div style={s.page}>

        {/* BG orbs */}
        <div style={{ ...s.orb, width: 540, height: 540, background: "#93c5fd", top: -140, right: -120 }} />
        <div style={{ ...s.orb, width: 340, height: 340, background: "#bfdbfe", bottom: -80, left: -80 }} />
        <div style={{ ...s.orb, width: 200, height: 200, background: "#c7d2fe", top: "50%", left: "40%", opacity: 0.18 }} />
        <div style={s.gridBg} />

        <div style={s.inner}>

          {/* Eyebrow badge */}
          <div style={s.eyebrow} className="ls-a-d0">
            <span style={s.eyebrowDot} className="ls-eyebrow-dot" />
            <span style={s.eyebrowText}>Launching soon</span>
          </div>

          {/* Headline */}
          <h1 style={s.headline} className="ls-a-u1">
            Trusted by thousands,<br />
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#1d4ed8" }}>growing</em> every{" "}
            <span style={s.gradientText}>day.</span>
          </h1>

          {/* Subtext */}
          <p style={s.subtext} className="ls-a-u2">
            Odisha's fastest hyperlocal delivery network — connecting businesses and
            customers across the city with speed, trust, and zero surprises.
          </p>

          {/* Stats */}
          <div style={s.stats} className="ls-stats ls-a-u3">
            {[
              { num: "10,000+", label: "Deliveries / month" },
              { num: "500+",    label: "Riders onboard" },
              { num: "45 min",  label: "Avg delivery time" },
            ].map(({ num, label }) => (
              <div key={label} style={s.statCard} className="ls-stat-card">
                <div style={s.statTarget}>
                  <span style={s.statDot} />
                  Our target
                </div>
                <div style={s.statNum}>{num}</div>
                <div style={s.statLabel}>{label}</div>
              </div>
            ))}
          </div>

          {/* Feature cards */}
          <div style={s.features} className="ls-features ls-a-u4">
            {[
              {
                bg: "#eff6ff", stroke: "#3b82f6",
                title: "Fast & reliable delivery",
                desc: "Same-day dispatch with real-time tracking across every pin code.",
                icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
              },
              {
                bg: "#f0fdf4", stroke: "#22c55e",
                title: "Trusted rider network",
                desc: "Verified, trained riders — police checked and fully insured.",
                icon: <><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 5v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
              },
              {
                bg: "#fdf4ff", stroke: "#a855f7",
                title: "Serving across the city",
                desc: "Wide coverage from core to suburbs — and expanding fast.",
                icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
              },
              {
                bg: "#fff7ed", stroke: "#f97316",
                title: "Quick pickup & drop",
                desc: "Minimal wait, maximum speed. 12-min avg pickup time.",
                icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
              },
            ].map(({ bg, stroke, title, desc, icon }) => (
              <div key={title} style={s.featCard} className="ls-feat-card">
                <div style={{ ...s.featIcon, background: bg }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </div>
                <div>
                  <div style={s.featTitle}>{title}</div>
                  <div style={s.featDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={s.ctaRow} className="ls-cta-row ls-a-u5">
            <button style={s.btnPrimary} className="ls-btn-primary" onClick={() => setShowComingSoon(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Get the app
            </button>
            <button style={s.btnSecondary} className="ls-btn-secondary" onClick={() => {
              navigate("/");
              setTimeout(() => {
                const el = document.getElementById("rider");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 100);
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><path d="M10 8l6 4-6 4V8z" fill="#2563eb" />
              </svg>
              Learn more
            </button>
          </div>

          {/* Divider */}
          <hr style={s.divider} className="ls-a-u6" />

          {/* Mission */}
          <div style={s.mission} className="ls-a-u6">
            <div style={s.missionBar} />
            <div>
              <div style={s.missionLabel}>Our mission</div>
              <div style={s.missionText}>
                Building India's trusted on-demand logistics network — one delivery at a time.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Coming Soon Modal ── */}
      {showComingSoon && (
        <div
          onClick={() => setShowComingSoon(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: 24, padding: "48px 40px 40px",
              maxWidth: 400, width: "100%", textAlign: "center",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
              animation: "fadeUp 0.35s ease both",
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 16 }}>🚀</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 26,
              fontWeight: 700, color: "#0b0f1a", marginBottom: 10, letterSpacing: "-0.02em",
            }}>
              Coming Soon!
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5,
              color: "#64748b", lineHeight: 1.7, marginBottom: 28,
            }}>
              The bookfleet app is launching soon.<br />
              Stay tuned for something amazing.
            </p>
            <button
              onClick={() => setShowComingSoon(false)}
              style={{
                background: "#1d4ed8", color: "#fff", border: "none",
                borderRadius: 12, padding: "12px 32px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                boxShadow: "0 4px 16px rgba(29,78,216,0.35)",
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Styles ── */
const FONT  = "'Plus Jakarta Sans', sans-serif";
const SERIF = "'Space Grotesk', sans-serif";

const s = {
  page: {
    fontFamily: FONT,
    background: "linear-gradient(155deg,#f0f5ff 0%,#e8f0fe 40%,#dbeafe 100%)",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
    color: "#0b0f1a",
  },
  orb: {
    position: "fixed", borderRadius: "50%",
    filter: "blur(72px)", opacity: 0.32, pointerEvents: "none", zIndex: 0,
  },
  gridBg: {
    position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.055,
    backgroundImage: "linear-gradient(#1d4ed8 1px,transparent 1px),linear-gradient(90deg,#1d4ed8 1px,transparent 1px)",
    backgroundSize: "60px 60px",
  },
  inner: {
    position: "relative", zIndex: 2,
    maxWidth: 720, margin: "0 auto", padding: "56px 28px 64px",
  },

  /* Eyebrow */
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(29,78,216,0.08)", border: "0.5px solid rgba(29,78,216,0.22)",
    borderRadius: 100, padding: "6px 16px 6px 9px", marginBottom: 26,
  },
  eyebrowDot: {
    width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
    display: "inline-block", animation: "pulseDot 1.8s infinite",
  },
  eyebrowText: {
    fontSize: 11, fontWeight: 700, color: "#1d4ed8",
    letterSpacing: "0.07em", textTransform: "uppercase",
  },

  /* Headline */
  headline: {
    fontFamily: SERIF, fontSize: "clamp(38px, 7vw, 60px)",
    lineHeight: 1.06, letterSpacing: "-0.03em",
    color: "#0b0f1a", marginBottom: 18, fontWeight: 700,
  },
  gradientText: {
    background: "linear-gradient(130deg,#1d4ed8 0%,#60a5fa 100%)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
  },

  /* Subtext */
  subtext: {
    fontSize: 15.5, lineHeight: 1.8, color: "#64748b",
    maxWidth: 480, marginBottom: 36,
  },

  /* Stats */
  stats: {
    display: "grid", gridTemplateColumns: "repeat(3,1fr)",
    gap: 10, marginBottom: 12,
  },
  statCard: {
    background: "rgba(255,255,255,0.75)", backdropFilter: "blur(14px)",
    border: "0.5px solid rgba(29,78,216,0.14)", borderRadius: 18,
    padding: "20px 16px", transition: "transform 0.22s ease, box-shadow 0.22s ease",
    cursor: "default",
  },
  statTarget: {
    display: "flex", alignItems: "center", gap: 5,
    fontSize: 10, fontWeight: 700, color: "#94a3b8",
    textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 10,
  },
  statDot:   { width: 5, height: 5, borderRadius: "50%", background: "#f97316", flexShrink: 0 },
  statNum:   { fontSize: 30, fontWeight: 800, color: "#0b0f1a", lineHeight: 1, marginBottom: 5 },
  statLabel: { fontSize: 11.5, color: "#64748b" },

  /* Feature cards */
  features: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    gap: 10, marginBottom: 36, marginTop: 10,
  },
  featCard: {
    background: "rgba(255,255,255,0.82)", backdropFilter: "blur(14px)",
    border: "0.5px solid rgba(29,78,216,0.1)", borderRadius: 18,
    padding: "20px 18px", display: "flex", alignItems: "flex-start", gap: 14,
    transition: "border-color 0.22s, transform 0.22s, box-shadow 0.22s",
    cursor: "default",
  },
  featIcon: {
    width: 42, height: 42, borderRadius: 13,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0, border: "0.5px solid rgba(0,0,0,0.06)",
  },
  featTitle: { fontSize: 14, fontWeight: 700, color: "#0b0f1a", marginBottom: 5, lineHeight: 1.3 },
  featDesc:  { fontSize: 12, color: "#64748b", lineHeight: 1.65 },

  /* CTA buttons */
  ctaRow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 36, flexWrap: "wrap" },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 13,
    padding: "14px 28px", fontSize: 14.5, fontWeight: 700, fontFamily: FONT,
    cursor: "pointer", letterSpacing: "-0.01em",
    boxShadow: "0 4px 20px rgba(29,78,216,0.38),inset 0 1px 0 rgba(255,255,255,0.15)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  btnSecondary: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(255,255,255,0.82)", color: "#1e40af",
    border: "0.5px solid rgba(29,78,216,0.25)", borderRadius: 13,
    padding: "14px 24px", fontSize: 14.5, fontWeight: 500, fontFamily: FONT,
    cursor: "pointer", backdropFilter: "blur(8px)", transition: "all 0.2s",
  },

  /* Divider */
  divider: { border: "none", borderTop: "0.5px solid rgba(29,78,216,0.12)", marginBottom: 28 },

  /* Mission */
  mission:      { display: "flex", gap: 16, alignItems: "flex-start" },
  missionBar:   { width: 2, minHeight: 56, background: "linear-gradient(180deg,#1d4ed8,#bfdbfe)", borderRadius: 2, flexShrink: 0 },
  missionLabel: { fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 },
  missionText:  { fontFamily: SERIF, fontSize: 18, fontWeight: 600, lineHeight: 1.55, color: "#0b0f1a" },
};