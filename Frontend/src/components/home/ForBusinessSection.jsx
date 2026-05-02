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
      accent: "#2563EB",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    {
      title: "Scalable Solutions",
      desc: "Grow your delivery capacity as your business expands.",
      icon: TrendingUp,
      accent: "#16A34A",
      bg: "#F0FDF4",
      border: "#BBF7D0",
    },
    {
      title: "Same-Day Delivery",
      desc: "Fast turnaround times to keep your customers happy.",
      icon: Clock,
      accent: "#EA580C",
      bg: "#FFF7ED",
      border: "#FED7AA",
    },
    {
      title: "24/7 Availability",
      desc: "Round-the-clock service for every urgent delivery.",
      icon: ShieldCheck,
      accent: "#7C3AED",
      bg: "#F5F3FF",
      border: "#DDD6FE",
    },
  ];

  const stats = [
    { value: "Growing 🚀", label: "Business Partners", color: "#2563EB" },
    { value: "98%", label: "On-Time Delivery", color: "#EA580C" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,800&display=swap');

        .biz-section * { box-sizing: border-box; }

        .biz-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #F8FAFD;
          position: relative;
          overflow: hidden;
        }

        /* dot grid background */
        .biz-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.4;
        }

        .feature-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 16px; border-radius: 14px;
          background: #FFFFFF;
          border: 1.5px solid #E9EEF5;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .feature-row:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        .stat-card {
          background: #FFFFFF; border-radius: 16px;
          padding: 18px 20px;
          border: 1.5px solid #E9EEF5;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .stat-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-3px); }

        .testimonial-card {
          background: #FFFFFF; border-radius: 16px;
          padding: 20px; margin-top: 14px;
          border: 1.5px solid #E9EEF5;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: box-shadow 0.25s;
        }
        .testimonial-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 99px; border: none;
          font-size: 14px; font-weight: 700; cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #1D4ED8, #2563EB);
          color: #FFFFFF;
          box-shadow: 0 4px 20px rgba(37,99,235,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.38);
        }
        .cta-btn:active { transform: scale(0.97); }

        /* pulse ring */
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
          70%  { box-shadow: 0 0 0 12px rgba(37,99,235,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,99,235,0); }
        }
        .cta-btn { animation: pulse-ring 3s ease-out infinite; }

        /* right panel float */
        @keyframes float-panel {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float-panel { animation: float-panel 6s ease-in-out infinite; }

        /* popup got-it btn */
        .popup-close-btn {
          width: 100%; padding: 12px;
          border-radius: 12px; border: 1.5px solid #2563EB;
          background: #EFF6FF; color: #2563EB;
          font-size: 13.5px; font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .popup-close-btn:hover { background: #2563EB; color: #fff; }
      `}</style>

      <section
        id="for-business"
        className="biz-section"
        style={{ padding: "96px 24px 88px" }}
      >
        {/* soft blue glow top-left */}
        <div style={{
          position: "absolute", top: "-60px", left: "-60px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        {/* soft orange glow bottom-right */}
        <div style={{
          position: "absolute", bottom: "-60px", right: "-60px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.07) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "64px", alignItems: "center",
        }}
          className="biz-inner"
        >
          <style>{`
            @media (max-width: 900px) {
              .biz-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
              .float-panel { animation: none !important; }
            }
          `}</style>

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eyebrow */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#2563EB",
                background: "#EFF6FF", border: "1.5px solid #BFDBFE",
                padding: "5px 14px", borderRadius: "99px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563EB", display: "inline-block" }} />
                For Businesses
              </span>
            </div>

            {/* heading */}
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900, lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#0F172A", marginBottom: "18px",
            }}>
              Reliable Logistics for{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Local Businesses
              </em>
            </h2>

            {/* subtext */}
            <p style={{
              fontSize: "15px", color: "#64748B",
              lineHeight: 1.7, marginBottom: "32px", maxWidth: "440px",
            }}>
              Power your business with our efficient delivery network. From small
              shops to large enterprises, we provide customised logistics solutions
              that help you serve customers better.
            </p>

            {/* features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="feature-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div style={{
                      width: "40px", height: "40px", flexShrink: 0,
                      borderRadius: "12px", display: "flex",
                      alignItems: "center", justifyContent: "center",
                      background: item.bg, border: `1.5px solid ${item.border}`,
                    }}>
                      <Icon size={18} color={item.accent} strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#64748B", lineHeight: 1.5 }}>
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
              <button className="cta-btn" onClick={() => setShowPopup(true)}>
                <Rocket size={16} />
                Coming Soon
              </button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            className="float-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(20px)",
              border: "1.5px solid #E5EAF3",
              borderRadius: "24px",
              padding: "28px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)",
            }}>

              {/* section label */}
              <div style={{
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#94A3B8",
                marginBottom: "16px",
              }}>
                At a Glance
              </div>

              {/* stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                {stats.map((s, i) => (
                  <div key={i} className="stat-card">
                    <div style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "22px", fontWeight: 800,
                      color: s.color, marginBottom: "4px", lineHeight: 1.2,
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* divider */}
              <div style={{ height: "1px", background: "#EEF2F8", margin: "4px 0 14px" }} />

              {/* testimonial */}
              <div className="testimonial-card">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Fraunces', serif",
                    fontSize: "17px", fontWeight: 800, color: "#fff",
                    flexShrink: 0,
                  }}>
                    R
                  </div>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#0F172A" }}>Rajesh Kumar</div>
                    <div style={{ fontSize: "11.5px", color: "#94A3B8" }}>Local Store Owner</div>
                  </div>
                  {/* stars */}
                  <div style={{ marginLeft: "auto", display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#F59E0B", fontSize: "11px" }}>★</span>
                    ))}
                  </div>
                </div>
                <p style={{
                  fontSize: "13px", color: "#475569", lineHeight: 1.65,
                  fontStyle: "italic",
                  borderLeft: "3px solid #BFDBFE",
                  paddingLeft: "12px",
                  margin: 0,
                }}>
                  "Zipto has transformed how we serve our customers. Fast,
                  reliable, and always professional!"
                </p>
              </div>

              {/* bottom trust row */}
              <div style={{
                display: "flex", gap: "8px", marginTop: "14px", flexWrap: "wrap",
              }}>
                {["✅ Verified Partners", "🔒 Secure Payments", "⚡ Fast Delivery"].map((t) => (
                  <span key={t} style={{
                    fontSize: "10.5px", fontWeight: 600, color: "#475569",
                    background: "#F1F5F9", border: "1px solid #E2E8F0",
                    padding: "4px 10px", borderRadius: "99px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

        {/* top + bottom dividers */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent)",
        }} />
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
              background: "rgba(15,23,42,0.5)",
              backdropFilter: "blur(10px)",
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
                boxShadow: "0 24px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(37,99,235,0.1)",
                padding: "32px 28px 28px",
                textAlign: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                overflow: "hidden",
              }}
            >
              {/* top stripe */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: "linear-gradient(90deg, transparent, #2563EB, transparent)",
              }} />

              {/* close */}
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

              {/* icon */}
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
                fontFamily: "'Fraunces', serif",
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

              <button className="popup-close-btn" onClick={() => setShowPopup(false)}>
                Got it 👍
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}