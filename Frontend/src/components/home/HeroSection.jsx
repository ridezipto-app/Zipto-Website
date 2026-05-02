import { useEffect, useState } from "react";

const ORDERS = [
  { id: "#ZP-4821", from: "Bhubaneswar", to: "Cuttack",     eta: "18 min", type: "Package delivery",  pct: 65 },
  { id: "#ZP-4822", from: "Puri",         to: "Bhubaneswar", eta: "34 min", type: "Express scooty",    pct: 38 },
  { id: "#ZP-4823", from: "Rourkela",     to: "Sambalpur",   eta: "52 min", type: "Cargo auto",        pct: 20 },
  { id: "#ZP-4824", from: "Berhampur",    to: "Ganjam",      eta: "9 min",  type: "Instant bike",      pct: 88 },
];

const FLEET = [
  { name: "Bike",       avail: "Available now" },
  { name: "Auto",       avail: "3 nearby"      },
  { name: "Pickup",     avail: "2 available"   },
  { name: "Mini truck", avail: "Bookable"      },
];

function LiveTracker() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((p) => (p + 1) % ORDERS.length);
        setVisible(true);
      }, 260);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const o = ORDERS[idx];

  return (
    <div style={styles.tracker}>
      {/* Header */}
      <div style={styles.trackerHead}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={styles.liveDot} />
          <span style={styles.liveText}>Live</span>
        </div>
        <span style={styles.orderId}>{o.id}</span>
      </div>

      {/* Body */}
      <div
        style={{
          ...styles.trackerBody,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-6px)",
          transition: "opacity 0.24s ease, transform 0.24s ease",
        }}
      >
        <div style={styles.orderType}>{o.type}</div>

        {/* Route */}
        <div style={styles.route}>
          <div style={styles.routeDots}>
            <div style={styles.dotO} />
            <div style={styles.routeLine} />
            <div style={styles.dotD} />
          </div>
          <div style={styles.routeLabels}>
            <div style={styles.routeLabel}>{o.from}</div>
            <div style={styles.routeLabel}>{o.to}</div>
          </div>
        </div>

        {/* Progress */}
        <div>
          <div style={styles.progBar}>
            <div
              style={{
                ...styles.progFill,
                width: `${o.pct}%`,
                transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
          <div style={styles.progMeta}>
            <span style={styles.progPct}>{o.pct}% complete</span>
            <span style={styles.progEta}>ETA {o.eta}</span>
          </div>
        </div>
      </div>

      {/* Mini map */}
      <div style={styles.minimap}>
        <svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <pattern id="mg" width="14" height="14" patternUnits="userSpaceOnUse">
              <path d="M14 0L0 0 0 14" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="280" height="80" fill="url(#mg)" />
          <path d="M 20 65 Q 80 25 150 45 T 260 15" fill="none" stroke="#E97316" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />
          <circle cx="20" cy="65" r="4" fill="#E97316" />
          <circle cx="260" cy="15" r="4" fill="#1d4ed8" />
          <circle r="4.5" fill="#E97316" opacity="0.9">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 20 65 Q 80 25 150 45 T 260 15" />
          </circle>
        </svg>
        <span style={styles.minimapLabel}>Odisha, IN</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.heroCard}>
        <div style={styles.heroInner}>

          {/* ── LEFT ── */}
          <div style={styles.left}>
            {/* Eyebrow */}
            <div style={styles.eyebrow}>
              <div style={styles.eyebrowLine} />
              <span style={styles.eyebrowText}>Odisha's delivery network</span>
            </div>

            {/* Headline */}
            <h1 style={styles.headline}>
              Deliver anything,{" "}
              <em style={{ fontStyle: "italic", color: "#E97316" }}>anywhere</em>
              {" "}—{" "}
              <span style={{ color: "#1d4ed8" }}>instantly.</span>
            </h1>

            {/* Subtext */}
            <p style={styles.subtext}>
              Bike to mini truck, book in seconds, track live. Transparent
              pricing. Zero surprises across Bhubaneswar, Cuttack &amp; beyond.
            </p>

            {/* CTAs */}
            <div style={styles.ctaRow}>
              <button style={styles.btnPrimary}>
                <ArrowIcon />
                Book a delivery
              </button>
              <button style={styles.btnSecondary}>Become a rider</button>
            </div>

            {/* Stats */}
            <div style={styles.statsRow}>
              {[
                { num: "50K+", label: "Deliveries done" },
                { num: "800+", label: "Active riders"   },
                { num: "4.9★", label: "Avg rating"      },
                { num: "12m",  label: "Avg pickup"      },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={styles.statNum}>{num}</div>
                  <div style={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div style={styles.right}>
            <div style={styles.rightLabel}>Live tracking</div>
            <LiveTracker />

            <div style={{ ...styles.rightLabel, marginTop: 8 }}>Available fleet</div>
            <div style={styles.fleetGrid}>
              {FLEET.map(({ name, avail }) => (
                <div key={name} style={styles.fleetItem}>
                  <div style={styles.fleetIcon}>
                    <TruckIcon />
                  </div>
                  <div>
                    <div style={styles.fleetName}>{name}</div>
                    <div style={styles.fleetAvail}>{avail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Ticker bar ── */}
        <div style={styles.ticker}>
          <span style={styles.tickerTag}>Delivery Aapki, Trust Humara</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            {["Bhubaneswar", "Cuttack", "Puri", "Rourkela", "Berhampur", "Sambalpur"].map(
              (city, i) => (
                <span key={city} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && <span style={styles.citySep}>·</span>}
                  <span style={styles.city}>{city}</span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ───────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ marginRight: 6 }}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#E97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

/* ── Styles ─────────────────────────────────────────────────────── */
const FONT = "'Geist', 'Inter', sans-serif";
const SERIF = "'Instrument Serif', Georgia, serif";
const ORANGE = "#E97316";
const BLUE = "#1d4ed8";
const INK = "#0f0f0f";
const MUTED = "#6b7280";
const BORDER = "#e5e7eb";
const SURFACE = "#f9fafb";

const styles = {
  section: {
    background: "#f3f4f6",
    padding: "40px 24px",
    fontFamily: FONT,
  },
  heroCard: {
    background: "#ffffff",
    border: `0.5px solid ${BORDER}`,
    borderRadius: 20,
    overflow: "hidden",
    maxWidth: 1100,
    margin: "0 auto",
  },
  heroInner: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
  },

  /* Left */
  left: {
    padding: "56px 48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRight: `0.5px solid ${BORDER}`,
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 28,
  },
  eyebrowLine: {
    width: 32,
    height: 1,
    background: ORANGE,
  },
  eyebrowText: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: ORANGE,
  },
  headline: {
    fontFamily: SERIF,
    fontSize: 54,
    lineHeight: 1.08,
    letterSpacing: "-0.02em",
    color: INK,
    marginBottom: 20,
    fontWeight: 400,
  },
  subtext: {
    fontSize: 15,
    lineHeight: 1.7,
    color: MUTED,
    maxWidth: 380,
    marginBottom: 36,
    fontWeight: 400,
  },
  ctaRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 44,
  },
  btnPrimary: {
    background: INK,
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "12px 26px",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: FONT,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.01em",
  },
  btnSecondary: {
    background: "transparent",
    color: "#374151",
    border: `0.5px solid ${BORDER}`,
    borderRadius: 10,
    padding: "12px 22px",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: FONT,
    cursor: "pointer",
    letterSpacing: "0.01em",
  },
  statsRow: {
    display: "flex",
    gap: 32,
    paddingTop: 28,
    borderTop: `0.5px solid ${BORDER}`,
  },
  statNum: {
    fontFamily: SERIF,
    fontSize: 30,
    color: INK,
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 11,
    color: "#9ca3af",
    marginTop: 3,
    letterSpacing: "0.04em",
  },

  /* Right */
  right: {
    background: SURFACE,
    padding: "36px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  rightLabel: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#9ca3af",
  },

  /* Tracker */
  tracker: {
    background: "#fff",
    border: `0.5px solid ${BORDER}`,
    borderRadius: 14,
    overflow: "hidden",
  },
  trackerHead: {
    padding: "14px 18px",
    borderBottom: `0.5px solid #f3f4f6`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  liveDot: {
    display: "inline-block",
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#22c55e",
    animation: "pulse 1.6s infinite",
  },
  liveText: {
    fontSize: 11,
    fontWeight: 600,
    color: "#22c55e",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  orderId: {
    fontSize: 11,
    color: "#9ca3af",
    fontFamily: "monospace",
  },
  trackerBody: {
    padding: "18px 18px 14px",
  },
  orderType: {
    fontSize: 11,
    color: "#9ca3af",
    marginBottom: 12,
    fontWeight: 500,
    letterSpacing: "0.04em",
  },
  route: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 16,
  },
  routeDots: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 3,
  },
  dotO: {
    width: 9,
    height: 9,
    borderRadius: "50%",
    border: `2px solid ${ORANGE}`,
    background: "#fff",
    flexShrink: 0,
  },
  routeLine: {
    width: 1,
    height: 22,
    background: BORDER,
    margin: "3px 0",
  },
  dotD: {
    width: 9,
    height: 9,
    borderRadius: "50%",
    background: BLUE,
    flexShrink: 0,
  },
  routeLabels: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  routeLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111827",
  },
  progBar: {
    height: 4,
    background: "#f3f4f6",
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 6,
  },
  progFill: {
    height: "100%",
    borderRadius: 100,
    background: ORANGE,
  },
  progMeta: {
    display: "flex",
    justifyContent: "space-between",
  },
  progPct: {
    fontSize: 11,
    color: "#9ca3af",
  },
  progEta: {
    fontSize: 12,
    fontWeight: 600,
    color: ORANGE,
  },
  minimap: {
    background: "#f8fafc",
    borderTop: `0.5px solid ${BORDER}`,
    height: 80,
    position: "relative",
    overflow: "hidden",
  },
  minimapLabel: {
    position: "absolute",
    bottom: 6,
    right: 8,
    fontSize: 10,
    color: "#cbd5e1",
  },

  /* Fleet */
  fleetGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
  },
  fleetItem: {
    background: "#fff",
    border: `0.5px solid ${BORDER}`,
    borderRadius: 10,
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  fleetIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    background: "#fff7ed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  fleetName: {
    fontSize: 13,
    fontWeight: 500,
    color: "#111827",
  },
  fleetAvail: {
    fontSize: 11,
    color: "#9ca3af",
    marginTop: 1,
  },

  /* Ticker */
  ticker: {
    background: SURFACE,
    borderTop: `0.5px solid ${BORDER}`,
    padding: "12px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerTag: {
    fontSize: 11,
    fontWeight: 600,
    color: ORANGE,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  city: {
    fontSize: 11,
    color: "#9ca3af",
  },
  citySep: {
    fontSize: 11,
    color: "#d1d5db",
    margin: "0 8px",
  },
};