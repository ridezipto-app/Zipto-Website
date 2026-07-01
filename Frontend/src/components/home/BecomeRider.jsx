import riderImg from "../../assets/Rider-DDQ112CI.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, IndianRupee, Clock, Bike, Users } from "lucide-react";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzQ6kMhV0nudurNUXx0g4XjXIA3NTyEqwqvgU-_JknW_8OHyV7tafs-_TtMZEs0VDND/exec";

export default function BecomeRider() {
  const [showPopup, setShowPopup] = useState(false);
  const [email,      setEmail]      = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimeout(() => {
      setEmail("");
      setEmailError("");
      setSubmitted(false);
    }, 300);
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
        body:    JSON.stringify({ email: trimmed, type: "rider" }),
      });
      setSubmitted(true);
    } catch {
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: IndianRupee,
      title: "High Earnings",
      desc: "Earn up to ₹60k/month",
      accent: "#2563EB",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      desc: "Work on your own time",
      accent: "#EA580C",
      bg: "#FFF7ED",
      border: "#FED7AA",
    },
    {
      icon: Bike,
      title: "Easy Deliveries",
      desc: "Short distance orders",
      accent: "#16A34A",
      bg: "#F0FDF4",
      border: "#BBF7D0",
    },
    {
      icon: Users,
      title: "Growing Community",
      desc: "Trusted by thousands",
      accent: "#7C3AED",
      bg: "#F5F3FF",
      border: "#DDD6FE",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .rider-section * { box-sizing: border-box; }

        .rider-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 96px;
        }

        .rider-section::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent);
        }

        .rider-bottom-div {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent);
        }

        .benefit-card {
          background: #FFFFFF;
          border: 1.5px solid #E9EEF5;
          border-radius: 14px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          cursor: default;
        }
        .benefit-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }

        .join-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 30px; border-radius: 99px; border: none;
          font-size: 14px; font-weight: 700; cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #1D4ED8, #2563EB);
          color: #FFFFFF;
          box-shadow: 0 4px 20px rgba(37,99,235,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .join-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.38);
        }

        @keyframes float-img {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        .float-img { animation: float-img 6s ease-in-out infinite; }

        @keyframes float-badge {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        .float-badge { animation: float-badge 4s ease-in-out infinite; }

        /* email input styles */
        .rider-email-wrap {
          display: flex; flex-direction: column; gap: 7px;
          margin-bottom: 10px;
          text-align: left;
        }
        .rider-email-input {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid #E2E8F0; border-radius: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; color: #0F172A;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .rider-email-input::placeholder { color: #94A3B8; }
        .rider-email-input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .rider-email-input.error {
          border-color: #EF4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.1);
        }
        .rider-email-error {
          font-size: 11.5px; color: #EF4444; font-weight: 500;
        }

        .rider-notify-btn {
          width: 100%; padding: 12px;
          border-radius: 12px; border: none;
          background: linear-gradient(135deg, #1D4ED8, #2563EB);
          color: #fff;
          font-size: 13.5px; font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.18s;
          display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .rider-notify-btn:hover:not(:disabled) {
          opacity: 0.92; transform: translateY(-1px);
        }
        .rider-notify-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .rider-success {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: 8px 0 4px;
        }
        .rider-success-icon {
          width: 56px; height: 56px; background: #DCFCE7; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem; margin-bottom: 14px;
          border: 1.5px solid #BBF7D0;
        }

        @media (max-width: 860px) {
          .rider-inner { grid-template-columns: 1fr !important; }
          .float-img { animation: none !important; }
          .rider-img-col { order: -1; }
        }
      `}</style>

      <section id="rider" className="rider-section scroll-mt-28">

        {/* glow blobs */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "440px", height: "440px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "380px", height: "380px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div className="rider-bottom-div" />

        <div
          className="rider-inner"
          style={{
            maxWidth: "1160px", margin: "0 auto",
            position: "relative", zIndex: 1,
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "72px", alignItems: "center",
          }}
        >
          {/* ── LEFT: IMAGE ── */}
          <motion.div
            className="rider-img-col"
            style={{ position: "relative" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="float-img" style={{ position: "relative" }}>
              <div style={{
                borderRadius: "24px", overflow: "hidden",
                border: "1.5px solid #E5EAF3",
                boxShadow: "0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.05)",
              }}>
                <img
                  src={riderImg}
                  alt="bookfleet Rider"
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
              </div>

              {/* floating earnings badge */}
              <div
                className="float-badge"
                style={{
                  position: "absolute", bottom: "20px", left: "20px",
                  background: "#FFFFFF",
                  border: "1.5px solid #BFDBFE",
                  borderRadius: "16px",
                  padding: "14px 18px",
                  display: "flex", alignItems: "center", gap: "12px",
                  boxShadow: "0 8px 28px rgba(37,99,235,0.14)",
                }}
              >
                <div style={{
                  width: "42px", height: "42px", borderRadius: "12px",
                  background: "#EFF6FF", border: "1.5px solid #BFDBFE",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <IndianRupee size={20} color="#2563EB" strokeWidth={2.2} />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "20px", fontWeight: 900, color: "#0F172A", lineHeight: 1.1,
                  }}>
                    ₹60,000
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#64748B", fontWeight: 500 }}>
                    Avg Monthly Earning
                  </div>
                </div>
              </div>

              {/* floating active badge */}
              <div style={{
                position: "absolute", top: "18px", right: "18px",
                background: "#FFFFFF",
                border: "1.5px solid #BBF7D0",
                borderRadius: "99px",
                padding: "6px 14px",
                display: "flex", alignItems: "center", gap: "6px",
                boxShadow: "0 4px 14px rgba(22,163,74,0.12)",
              }}>
                <span style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "#16A34A", flexShrink: 0,
                  boxShadow: "0 0 0 3px rgba(22,163,74,0.2)",
                }} />
                <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#15803D" }}>
                  Now Hiring
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eyebrow */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#EA580C",
                background: "#FFF7ED", border: "1.5px solid #FED7AA",
                padding: "5px 14px", borderRadius: "99px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#EA580C", display: "inline-block" }} />
                Become a Rider
              </span>
            </div>

            {/* heading */}
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900, lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#0F172A", marginBottom: "18px",
            }}>
              Ride with{" "}
              <em style={{
                fontStyle: "italic", fontFamily: "'DM Serif Display', serif",
                background: "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                bookfleet
              </em>{" "}
              &amp; Earn More
            </h2>

            {/* subtext */}
            <p style={{
              fontSize: "15px", color: "#64748B",
              lineHeight: 1.7, marginBottom: "32px", maxWidth: "440px",
            }}>
              Join our growing delivery network and earn more with flexible hours,
              exciting weekly bonuses, and full freedom to work on your terms.
            </p>

            {/* benefits grid */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "10px", marginBottom: "36px",
            }}>
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="benefit-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div style={{
                      width: "38px", height: "38px", flexShrink: 0,
                      borderRadius: "11px",
                      background: item.bg, border: `1.5px solid ${item.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={17} color={item.accent} strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#64748B" }}>
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
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <button className="join-btn" onClick={() => setShowPopup(true)}>
                  <Rocket size={15} />
                  Join as Rider
                </button>
              </div>
              <p style={{ fontSize: "11.5px", color: "#94A3B8", marginTop: "2px" }}>
                * Terms &amp; conditions apply
              </p>
            </motion.div>
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
              background: "rgba(15,23,42,0.5)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onClick={(e) => e.target === e.currentTarget && handleClosePopup()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              style={{
                position: "relative",
                width: "100%", maxWidth: "340px",
                background: "#FFFFFF",
                borderRadius: "20px",
                border: "1.5px solid #BFDBFE",
                boxShadow: "0 24px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(37,99,235,0.1)",
                padding: "32px 28px 28px",
                textAlign: "center",
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
                onClick={handleClosePopup}
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

              {submitted ? (
                /* ── SUCCESS VIEW ── */
                <motion.div
                  className="rider-success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <div className="rider-success-icon">✅</div>
                  <h2 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "20px", fontWeight: 900,
                    color: "#0F172A", marginBottom: "8px",
                  }}>
                    You're on the list!
                  </h2>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.65, marginBottom: "20px" }}>
                    We'll notify <strong>{email.trim()}</strong> the moment
                    the Rider app launches. Get ready to earn!
                  </p>
                  <button
                    className="rider-notify-btn"
                    onClick={handleClosePopup}
                    style={{ background: "linear-gradient(135deg, #16A34A, #22C55E)" }}
                  >
                    Awesome, thanks! 🎉
                  </button>
                </motion.div>
              ) : (
                /* ── FORM VIEW ── */
                <>
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
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "22px", fontWeight: 900,
                    color: "#0F172A", marginBottom: "8px",
                  }}>
                    Coming Soon
                  </h2>

                  <p style={{
                    fontSize: "13px", color: "#64748B",
                    lineHeight: 1.65, marginBottom: "20px",
                  }}>
                    The bookfleet Rider app is on its way. Drop your email and
                    we'll let you know the moment it's live.
                  </p>

                  {/* email input */}
                  <div className="rider-email-wrap">
                    <input
                      id="rider-notify-email"
                      type="email"
                      className={`rider-email-input${emailError ? " error" : ""}`}
                      placeholder="Enter your email to get notified"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                      onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                      disabled={submitting}
                      autoComplete="email"
                    />
                    {emailError && (
                      <span className="rider-email-error">{emailError}</span>
                    )}
                  </div>

                  <button
                    className="rider-notify-btn"
                    onClick={handleNotify}
                    disabled={submitting}
                  >
                    {submitting ? "Saving..." : <><Rocket size={14} /> Notify me when it's live</>}
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}