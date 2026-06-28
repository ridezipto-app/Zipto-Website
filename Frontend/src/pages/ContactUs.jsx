import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import deliveryAnimation from "../assets/delivery-rider.json";

const BLUE = "#2563EB";
const BLUE_DARK = "#1D4ED8";
const BLUE_LIGHT = "#EFF6FF";
const INK = "#0F172A";
const MUTED = "#64748B";
const BORDER = "#E2E8F0";

const contactItems = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 9090029996",
    href: "tel:+919090029996",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email",
    value: "contact@ridebookfleet.com",
    href: "mailto:contact@ridebookfleet.com",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "781, Saheed Nagar, Maharishi College Road, Bhubaneswar, Odisha – 751007",
    href: "https://maps.google.com/?q=Saheed+Nagar+Bhubaneswar+Odisha",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const inView = useInView(formRef, { once: true, margin: "-80px" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – bookfleet | bookfleet.in</title>
        <meta name="description" content="Get in touch with bookfleet. Reach us for delivery queries, business partnerships, or support. We're happy to help." />
        <link rel="canonical" href="https://bookfleet.in/contact" />
        <meta property="og:title" content="Contact bookfleet – We're here to help" />
        <meta property="og:description" content="Reach bookfleet for delivery queries, partnerships, or support." />
        <meta property="og:url" content="https://bookfleet.in/contact" />
        <meta property="og:image" content="https://bookfleet.in/logo.jpeg" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .contact-input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid ${BORDER};
          border-radius: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          color: ${INK};
          background: #fff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-input:focus {
          border-color: ${BLUE};
          box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
        }
        .contact-input::placeholder { color: #94A3B8; }
        .wave-hand { display: inline-block; animation: wave 1.8s ease-in-out infinite; transform-origin: 70% 70%; }
        @keyframes wave {
          0%,100% { transform: rotate(0deg); }
          20%     { transform: rotate(25deg); }
          40%     { transform: rotate(-8deg); }
          60%     { transform: rotate(25deg); }
          80%     { transform: rotate(-4deg); }
        }
        .bubble-bounce { animation: bubblePop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes bubblePop {
          from { opacity: 0; transform: scale(0.5) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .submit-btn {
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 18px rgba(37,99,235,0.35);
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.45);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        @media (max-width: 900px) {
          .contact-grid { flex-direction: column !important; }
          .rider-panel  { padding: 48px 24px 32px !important; min-height: unset !important; }
          .form-panel   { padding: 40px 24px !important; }
        }
      `}</style>

      {/* ── Hero strip ── */}
      <div style={{
        background: `linear-gradient(135deg, #0F172A 0%, #1e3a8a 60%, #2563EB 100%)`,
        paddingTop: 96, paddingBottom: 60,
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{
            display: "inline-block", background: "rgba(255,255,255,0.1)", color: "#93C5FD",
            border: "1px solid rgba(147,197,253,0.3)", borderRadius: 99, fontSize: 11,
            fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "5px 14px", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16,
          }}>
            • Get in Touch
          </span>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)", color: "#fff",
            margin: 0, lineHeight: 1.15, letterSpacing: "-0.02em",
          }}>
            We'd love to hear from you
          </h1>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16,
            color: "rgba(255,255,255,0.65)", marginTop: 14, maxWidth: 480, marginInline: "auto",
          }}>
            Questions, partnerships, or just saying hello — our team is always ready to help.
          </p>
        </motion.div>
      </div>

      {/* ── Main card ── */}
      <div style={{ background: "#F8FAFD", minHeight: "70vh", padding: "0 20px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", marginTop: -40, position: "relative", zIndex: 1 }}>
          <div className="contact-grid" style={{
            display: "flex", borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(15,23,42,0.13), 0 4px 16px rgba(0,0,0,0.06)",
          }}>

            {/* ── LEFT: Rider illustration panel ── */}
            <div className="rider-panel" style={{
              flex: "0 0 42%", minHeight: 620,
              background: `linear-gradient(160deg, #1e3a8a 0%, #2563EB 60%, #3b82f6 100%)`,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "60px 40px", position: "relative", overflow: "hidden",
            }}>
              {/* background circles */}
              <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.04)", top: -80, right: -80 }} />
              <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.05)", bottom: -40, left: -60 }} />
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "22px 22px" }} />

              {/* Speech bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="bubble-bounce"
                style={{
                  background: "#fff", borderRadius: 20, padding: "14px 22px",
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: 18, color: BLUE, marginBottom: 24, position: "relative",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  zIndex: 1,
                }}
              >
                <span className="wave-hand">👋</span> Hey there!
                {/* bubble tail */}
                <div style={{
                  position: "absolute", bottom: -12, left: "50%", transform: "translateX(-50%)",
                  width: 0, height: 0,
                  borderLeft: "12px solid transparent", borderRight: "12px solid transparent",
                  borderTop: "14px solid #fff",
                }} />
              </motion.div>

              {/* Rider Lottie animation */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "100%", maxWidth: 340, position: "relative", zIndex: 1 }}
              >
                <Lottie
                  animationData={deliveryAnimation}
                  loop={true}
                  style={{ width: "100%", height: "auto" }}
                />
              </motion.div>

              {/* Contact items below rider */}
              <div style={{ marginTop: 32, width: "100%", zIndex: 1, position: "relative" }}>
                {contactItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      marginBottom: 16, textDecoration: "none",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff",
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: 13, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5 }}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Form panel ── */}
            <div ref={formRef} className="form-panel" style={{
              flex: 1, background: "#fff", padding: "56px 52px",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ textAlign: "center", padding: "40px 0" }}
                >
                  <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, color: INK, marginBottom: 10 }}>
                    Message sent!
                  </h2>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: MUTED, maxWidth: 320, margin: "0 auto 32px" }}>
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                    className="submit-btn"
                    style={{ maxWidth: 220, margin: "0 auto", display: "block" }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <>
                  <motion.div
                    custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                  >
                    <h2 style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                      fontSize: "clamp(22px, 3vw, 30px)", color: INK,
                      marginBottom: 6, letterSpacing: "-0.02em",
                    }}>
                      Send us a message
                    </h2>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: MUTED, marginBottom: 32 }}>
                      Fill out the form and we'll be in touch shortly.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    {/* Name + Phone row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                        <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}>
                          Full Name *
                        </label>
                        <input
                          className="contact-input"
                          name="name" type="text" required
                          placeholder="Rahul Sharma"
                          value={form.name} onChange={handleChange}
                        />
                      </motion.div>
                      <motion.div custom={1.5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                        <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}>
                          Phone
                        </label>
                        <input
                          className="contact-input"
                          name="phone" type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone} onChange={handleChange}
                        />
                      </motion.div>
                    </div>

                    {/* Email */}
                    <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                      <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}>
                        Email Address *
                      </label>
                      <input
                        className="contact-input"
                        name="email" type="email" required
                        placeholder="rahul@example.com"
                        value={form.email} onChange={handleChange}
                      />
                    </motion.div>

                    {/* Subject chips */}
                    <motion.div custom={2.5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                      <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
                        Topic
                      </label>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {["General Query", "Business Partnership", "Become a Rider", "Support"].map((topic) => (
                          <button
                            key={topic} type="button"
                            onClick={() => setForm(f => ({ ...f, message: topic + " — " + (f.message.includes(" — ") ? f.message.split(" — ")[1] : f.message) }))}
                            style={{
                              padding: "6px 14px", borderRadius: 99,
                              border: `1.5px solid ${form.message.startsWith(topic) ? BLUE : BORDER}`,
                              background: form.message.startsWith(topic) ? BLUE_LIGHT : "#F8FAFD",
                              color: form.message.startsWith(topic) ? BLUE : MUTED,
                              fontSize: 12, fontWeight: 600,
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              cursor: "pointer", transition: "all 0.2s",
                            }}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                      <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}>
                        Message *
                      </label>
                      <textarea
                        className="contact-input"
                        name="message" required
                        rows={4} placeholder="Tell us how we can help..."
                        value={form.message} onChange={handleChange}
                        style={{ resize: "vertical", minHeight: 100 }}
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.div custom={3.5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                      <button type="submit" disabled={loading} className="submit-btn">
                        {loading ? (
                          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
                                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/>
                              </path>
                            </svg>
                            Sending…
                          </span>
                        ) : "Send Message →"}
                      </button>
                    </motion.div>

                    <motion.p custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8", textAlign: "center", margin: 0 }}>
                      We typically respond within 24 hours. You can also email us at{" "}
                      <a href="mailto:contact@ridebookfleet.com" style={{ color: BLUE, textDecoration: "none", fontWeight: 600 }}>
                        contact@ridebookfleet.com
                      </a>
                    </motion.p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
