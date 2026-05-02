import { motion, AnimatePresence } from "framer-motion";
import { X, Package, Zap } from "lucide-react";

export default function VehiclePopup({ vehicle, close }) {
  const accent = vehicle.accent || "#2563EB";
  const accentLight = vehicle.accentLight || "#EFF6FF";
  const accentBorder = vehicle.accentBorder || "#BFDBFE";

  return (
    <motion.div
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(15,23,42,0.45)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      {/* card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 10 }}
        transition={{ type: "spring", stiffness: 320, damping: 28, delay: 0.04 }}
        style={{
          position: "relative",
          width: "100%", maxWidth: "340px",
          background: "#FFFFFF",
          borderRadius: "20px",
          border: `1.5px solid ${accentBorder}`,
          boxShadow: `0 24px 64px rgba(0,0,0,0.12), 0 4px 16px ${accent}18`,
          overflow: "hidden",
        }}
      >
        {/* top accent stripe */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "3px",
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }} />

        {/* subtle header glow */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "120px",
          background: `radial-gradient(ellipse 80% 100% at 50% 0%, ${accent}0A 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* close button */}
        <motion.button
          onClick={close}
          whileHover={{ scale: 1.12, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.16 }}
          style={{
            position: "absolute", top: "12px", right: "12px", zIndex: 20,
            width: "28px", height: "28px",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "50%",
            background: "#F1F5F9", border: "1.5px solid #E2E8F0",
            color: "#64748B", cursor: "pointer",
          }}
        >
          <X size={13} />
        </motion.button>

        {/* ── HEADER ── */}
        <div style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", padding: "24px 24px 16px",
        }}>
          {/* icon */}
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.12 }}
            style={{
              width: "72px", height: "72px", borderRadius: "18px",
              background: accentLight,
              border: `1.5px solid ${accentBorder}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "12px",
              boxShadow: `0 4px 16px ${accent}18`,
            }}
          >
            <img
              src={vehicle.icon}
              alt={vehicle.title}
              style={{ width: "44px", height: "44px", objectFit: "contain" }}
            />
          </motion.div>

          {/* tag */}
          {vehicle.tag && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              style={{
                fontSize: "9.5px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: vehicle.tagColor || accent,
                background: vehicle.tagBg || accentLight,
                border: `1px solid ${vehicle.tagBorder || accentBorder}`,
                padding: "3px 10px", borderRadius: "99px",
                marginBottom: "8px",
              }}
            >
              {vehicle.tag}
            </motion.span>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "19px", fontWeight: 800,
              color: "#0F172A", marginBottom: "4px", lineHeight: 1.2,
            }}
          >
            {vehicle.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.5 }}
          >
            {vehicle.subtitle}
          </motion.p>
        </div>

        {/* ── CAPACITY + PRICE ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          style={{
            margin: "0 16px 14px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px",
          }}
        >
          {[
            { label: "Capacity", value: vehicle.capacity, icon: <Package size={11} />, highlight: false },
            { label: "Starting at", value: vehicle.price, icon: <Zap size={11} />, highlight: true },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderRadius: "12px",
                padding: "10px 12px",
                textAlign: "center",
                background: item.highlight ? accentLight : "#F8FAFC",
                border: `1.5px solid ${item.highlight ? accentBorder : "#E9EEF5"}`,
              }}
            >
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "4px", marginBottom: "4px",
                color: item.highlight ? accent : "#94A3B8",
              }}>
                {item.icon}
                <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {item.label}
                </span>
              </div>
              <p style={{
                fontSize: "13px", fontWeight: 800,
                color: item.highlight ? accent : "#1E293B",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── IDEAL USES ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          style={{
            margin: "0 16px 12px",
            background: "#F8FAFC", border: "1.5px solid #E9EEF5",
            borderRadius: "14px", padding: "13px 14px",
          }}
        >
          <h3 style={{
            fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: accent,
            marginBottom: "10px",
          }}>
            Ideal Uses
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {vehicle.details.uses.map((use, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.36 + i * 0.05 }}
                style={{
                  fontSize: "10.5px", fontWeight: 500, color: "#334155",
                  background: accentLight, border: `1px solid ${accentBorder}`,
                  padding: "3px 10px", borderRadius: "99px",
                }}
              >
                {use}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── BENEFITS ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          style={{
            margin: "0 16px 20px",
            background: "#F8FAFC", border: "1.5px solid #E9EEF5",
            borderRadius: "14px", padding: "13px 14px",
          }}
        >
          <h3 style={{
            fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#2563EB",
            marginBottom: "10px",
          }}>
            Why Choose This
          </h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: "7px", listStyle: "none" }}>
            {vehicle.details.benefits.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.40 + i * 0.06 }}
                style={{
                  display: "flex", alignItems: "flex-start", gap: "8px",
                  fontSize: "12px", color: "#475569", lineHeight: 1.4,
                }}
              >
                <span style={{
                  marginTop: "5px", width: "5px", height: "5px", borderRadius: "50%",
                  background: "#2563EB", flexShrink: 0,
                }} />
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}