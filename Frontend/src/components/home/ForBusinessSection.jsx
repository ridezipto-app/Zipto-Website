import {
  Headphones,
  TrendingUp,
  Clock,
  ShieldCheck,
  X,
  Rocket,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ForBusinessSection() {
  const [showPopup, setShowPopup] = useState(false);

  const features = [
    {
      title: "Dedicated Support",
      desc: "Priority customer service tailored to your business needs.",
      icon: Headphones,
      accent: "#60A5FA",
      bg: "rgba(96,165,250,0.12)",
      border: "rgba(96,165,250,0.2)",
    },
    {
      title: "Scalable Solutions",
      desc: "Grow your delivery capacity as your business expands.",
      icon: TrendingUp,
      accent: "#34D399",
      bg: "rgba(52,211,153,0.12)",
      border: "rgba(52,211,153,0.2)",
    },
    {
      title: "Same-Day Delivery",
      desc: "Fast turnaround times to keep your customers happy.",
      icon: Clock,
      accent: "#FB923C",
      bg: "rgba(251,146,60,0.12)",
      border: "rgba(251,146,60,0.2)",
    },
    {
      title: "24/7 Availability",
      desc: "Round-the-clock service for every urgent delivery.",
      icon: ShieldCheck,
      accent: "#A78BFA",
      bg: "rgba(167,139,250,0.12)",
      border: "rgba(167,139,250,0.2)",
    },
  ];

  const stats = [
    { value: "24/7", label: "Service Hours", color: "#60A5FA" },
    { value: "Same Day", label: "Delivery", color: "#FB923C" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .biz-section * { box-sizing: border-box; }

        .biz-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #080D1A;
          position: relative;
          overflow: hidden;
        }

        /* Subtle dot grid */
        .biz-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 1;
        }

        .biz-feature-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 18px; border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .biz-feature-row:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-2px);
        }

        .biz-stat-card {
          background: rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 18px 20px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.25s, transform 0.25s;
        }
        .biz-stat-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-3px);
        }

        .biz-testimonial-card {
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 20px; margin-top: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.25s;
        }
        .biz-testimonial-card:hover {
          background: rgba(255,255,255,0.07);
        }

        .biz-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 99px; border: none;
          font-size: 14px; font-weight: 700; cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          color: #FFFFFF;
          box-shadow: 0 4px 24px rgba(37,99,235,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .biz-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(37,99,235,0.6);
        }
        .biz-cta-btn:active { transform: scale(0.97); }

        @keyframes biz-float-panel {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .biz-float-panel { animation: biz-float-panel 6s ease-in-out infinite; }

        .biz-popup-close-btn {
          width: 100%; padding: 12px;
          border-radius: 12px; border: 1.5px solid #2563EB;
          background: #EFF6FF; color: #2563EB;
          font-size: 13.5px; font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .biz-popup-close-btn:hover { background: #2563EB; color: #fff; }

        @media (max-width: 900px) {
          .biz-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
          .biz-float-panel { animation: none !important; }
        }
      `}</style>

      <section
        id="for-business"
        className="biz-section"
        style={{ padding: "96px 24px 88px" }}
      >
        {/* Blue glow top-left */}
        <div style={{
          position: "absolute", top: "-80px", left: "-80px",
          width: "560px", height: "560px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)",
          filter: "blur(50px)", pointerEvents: "none",
        }} />
        {/* Orange glow bottom-right */}
        <div style={{
          position: "absolute", bottom: "-80px", right: "-80px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 65%)",
          filter: "blur(50px)", pointerEvents: "none",
        }} />

        {/* Top divider */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent)",
        }} />
        {/* Bottom divider */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent)",
        }} />

        <div
          className="biz-inner"
          style={{
            maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1,
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "64px", alignItems: "center",
          }}
        >
          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#60A5FA",
                background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.25)",
                padding: "5px 14px", borderRadius: "99px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60A5FA", display: "inline-block" }} />
                For Businesses
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900, lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF", marginBottom: "18px",
            }}>
              Reliable Logistics for{" "}
              <em style={{
                fontStyle: "italic", fontFamily: "'DM Serif Display', serif",
                background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Local Businesses
              </em>
            </h2>

            {/* Subtext */}
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.58)",
              lineHeight: 1.75, marginBottom: "32px", maxWidth: "440px",
            }}>
              Power your business with our efficient delivery network. From small
              shops to large enterprises, we provide customised logistics solutions
              that help you serve customers better.
            </p>

            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="biz-feature-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div style={{
                      width: "40px", height: "40px", flexShrink: 0,
                      borderRadius: "12px", display: "flex",
                      alignItems: "center", justifyContent: "center",
                      background: item.bg, border: `1px solid ${item.border}`,
                    }}>
                      <Icon size={18} color={item.accent} strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", marginBottom: "2px" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <button className="biz-cta-btn" onClick={() => setShowPopup(true)}>
                <Rocket size={16} />
                Coming Soon
              </button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            className="biz-float-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "28px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}>

              {/* Section label */}
              <div style={{
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                marginBottom: "16px",
              }}>
                At a Glance
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                {stats.map((s, i) => (
                  <div key={i} className="biz-stat-card">
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "22px", fontWeight: 800,
                      color: s.color, marginBottom: "4px", lineHeight: 1.2,
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "4px 0 14px" }} />

              {/* Commitment */}
              <div className="biz-testimonial-card">
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "12px" }}>
                  Our Commitment
                </div>
                <p style={{
                  fontSize: "13px", color: "rgba(255,255,255,0.58)", lineHeight: 1.7,
                  borderLeft: "3px solid rgba(96,165,250,0.4)",
                  paddingLeft: "14px",
                  margin: 0,
                }}>
                  Every delivery is backed by real-time tracking, verified riders, and
                  dedicated business support — so you can focus on what matters.
                </p>
              </div>

              {/* Bottom trust row */}
              <div style={{ display: "flex", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
                {["✅ Verified Partners", "🔒 Secure Payments", "⚡ Fast Delivery"].map((t) => (
                  <span key={t} style={{
                    fontSize: "10.5px", fontWeight: 600, color: "rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    padding: "4px 10px", borderRadius: "99px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── POPUP ── */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "16px",
              background: "rgba(5,10,25,0.7)",
              backdropFilter: "blur(12px)",
            }}
            onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              style={{
                position: "relative",
                width: "100%", maxWidth: "320px",
                background: "#FFFFFF",
                borderRadius: "20px",
                border: "1.5px solid #BFDBFE",
                boxShadow: "0 24px 60px rgba(0,0,0,0.25), 0 4px 16px rgba(37,99,235,0.1)",
                padding: "32px 28px 28px",
                textAlign: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                overflow: "hidden",
              }}
            >
              {/* Top stripe */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: "linear-gradient(90deg, transparent, #2563EB, transparent)",
              }} />

              {/* Close */}
              <motion.button
                onClick={() => setShowPopup(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  position: "absolute", top: "12px", right: "12px",
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "#F1F5F9", border: "1.5px solid #E2E8F0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#64748B", cursor: "pointer",
                }}
              >
                <X size={13} />
              </motion.button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.1 }}
                style={{
                  width: "64px", height: "64px", borderRadius: "18px",
                  background: "#EFF6FF", border: "1.5px solid #BFDBFE",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
                }}
              >
                <Rocket size={26} color="#2563EB" />
              </motion.div>

              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "22px", fontWeight: 900,
                color: "#0F172A", marginBottom: "10px",
              }}>
                Coming Soon
              </h2>

              <p style={{
                fontSize: "13px", color: "#64748B",
                lineHeight: 1.65, marginBottom: "24px",
              }}>
                Our business partner app is on the way. Get ready for a faster,
                smarter delivery management experience.
              </p>

              <button className="biz-popup-close-btn" onClick={() => setShowPopup(false)}>
                Got it 👍
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
