import { motion } from "framer-motion";
import { IndianRupee, MapPin, Languages, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Transparent Pricing",
    description: "Know the exact cost upfront. No hidden charges, no surprises — ever.",
    icon: IndianRupee,
    accent: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    tag: "No hidden fees",
  },
  {
    title: "Real-Time Tracking",
    description: "Track your delivery live on the map from pickup to drop-off.",
    icon: MapPin,
    accent: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    tag: "Live updates",
  },
  {
    title: "Odia, Hindi & English",
    description: "Communicate in your preferred language with our local support team.",
    icon: Languages,
    accent: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    tag: "3 languages",
  },
  {
    title: "Verified Partners",
    description: "All riders are background-verified and trained delivery professionals.",
    icon: ShieldCheck,
    accent: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    tag: "100% verified",
  },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#FFFFFF",
        border: "1.5px solid #E9EEF5",
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        cursor: "default",
        transition: "box-shadow 0.25s, border-color 0.25s, transform 0.25s",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 32px rgba(0,0,0,0.09)",
        borderColor: feature.border,
      }}
    >
      {/* top accent line on hover via motion */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
          transformOrigin: "left",
        }}
      />

      {/* index number */}
      <div style={{
        position: "absolute",
        top: "20px", right: "20px",
        fontSize: "11px",
        fontWeight: 700,
        color: "#CBD5E1",
        letterSpacing: "0.05em",
        fontFamily: "monospace",
      }}>
        0{index + 1}
      </div>

      {/* tag pill */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
        color: feature.accent,
        background: feature.bg,
        border: `1.5px solid ${feature.border}`,
        padding: "4px 10px",
        borderRadius: "99px",
        marginBottom: "20px",
      }}>
        <span style={{
          width: "5px", height: "5px",
          borderRadius: "50%",
          background: feature.accent,
          display: "inline-block",
          flexShrink: 0,
        }} />
        {feature.tag}
      </div>

      {/* icon */}
      <motion.div
        whileHover={{ y: -3, scale: 1.06 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          width: "52px", height: "52px",
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: feature.bg,
          border: `1.5px solid ${feature.border}`,
          marginBottom: "18px",
        }}
      >
        <Icon size={22} color={feature.accent} strokeWidth={2} />
      </motion.div>

      {/* text */}
      <div>
        <h3 style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: "17px",
          fontWeight: 800,
          color: "#0F172A",
          marginBottom: "8px",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontSize: "13px",
          color: "#64748B",
          lineHeight: 1.65,
          margin: 0,
        }}>
          {feature.description}
        </p>
      </div>

      {/* bottom rule + learn more */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ marginTop: "18px" }}
      >
        <div style={{
          height: "1px",
          background: `linear-gradient(90deg, ${feature.accent}40, transparent)`,
          marginBottom: "12px",
        }} />
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: feature.accent }}>
            Learn more
          </span>
          <motion.span
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: "12px", color: feature.accent }}
          >
            →
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,800&display=swap');

        .why-section * { box-sizing: border-box; }

        .why-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #F8FAFD;
          position: relative;
          overflow: hidden;
        }

        /* dot grid */
        .why-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.4;
        }
      `}</style>

      <section
        className="why-section"
        style={{ padding: "96px 24px 88px" }}
      >
        {/* blue glow top-left */}
        <div style={{
          position: "absolute", top: "-60px", left: "-60px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        {/* orange glow bottom-right */}
        <div style={{
          position: "absolute", bottom: "-60px", right: "-60px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.07) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />

        {/* top divider */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent)",
        }} />
        {/* bottom divider */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent)",
        }} />

        <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ── Heading ── */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>

            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: "18px" }}
            >
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#EA580C",
                background: "#FFF7ED",
                border: "1.5px solid #FED7AA",
                padding: "5px 14px",
                borderRadius: "99px",
              }}>
                <span style={{
                  width: "6px", height: "6px",
                  borderRadius: "50%",
                  background: "#EA580C",
                  display: "inline-block",
                }} />
                Why Zipto
              </span>
            </motion.div>

            {/* main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#0F172A",
                marginBottom: "16px",
              }}
            >
              Why Choose{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Zipto?
              </em>
            </motion.h2>

            {/* subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: "15px",
                color: "#64748B",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Fast, reliable, and trustworthy delivery service built for everyone in Odisha.
            </motion.p>
          </div>

          {/* ── Cards Grid ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "16px",
            marginBottom: "48px",
          }}>
            {features.map((f, i) => (
              <FeatureCard key={i} feature={f} index={i} />
            ))}
          </div>

          {/* ── Trust badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                borderRadius: "99px",
                background: "#F5F3FF",
                border: "1.5px solid #DDD6FE",
                boxShadow: "0 4px 16px rgba(124,58,237,0.1)",
                cursor: "default",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck size={18} color="#7C3AED" />
              </motion.div>
              <p style={{
                fontSize: "13.5px",
                fontWeight: 700,
                color: "#475569",
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                Trusted by{" "}
                <span style={{ color: "#7C3AED" }}>10,000+</span>{" "}
                users across Odisha
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}