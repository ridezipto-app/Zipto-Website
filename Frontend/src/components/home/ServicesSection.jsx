import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VehiclePopup from "./VehiclePopup";
import bikeIcon   from "../../assets/bike.png";
import scootyIcon from "../../assets/scooty.png";
import autoIcon   from "../../assets/auto.png";
import pickupIcon from "../../assets/car.png";
import truckIcon  from "../../assets/truck.png";

/* ─── data ─────────────────────────────────────────────────────────── */
const vehicles = [
  {
    title: "Bike Delivery",
    subtitle: "Best for small urgent deliveries",
    capacity: "Up to 20 kg",
    price: "₹35",
    icon: bikeIcon,
    tag: "Fastest",
    tagColor: "#16A34A",
    tagBg: "#F0FDF4",
    tagBorder: "#BBF7D0",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentBorder: "#BFDBFE",
    details: {
      uses: ["Documents", "Food delivery", "Medicines", "Small parcels"],
      benefits: ["Fastest delivery option", "Easy navigation in traffic", "Affordable for short distances"],
    },
  },
  {
    title: "Scooty Delivery",
    subtitle: "Lightweight parcel deliveries",
    capacity: "Up to 22 kg",
    price: "₹40",
    icon: scootyIcon,
    tag: "Popular",
    tagColor: "#EA580C",
    tagBg: "#FFF7ED",
    tagBorder: "#FED7AA",
    accent: "#EA580C",
    accentLight: "#FFF7ED",
    accentBorder: "#FED7AA",
    details: {
      uses: ["Groceries", "E-commerce parcels", "Gift delivery"],
      benefits: ["Cost efficient", "Reliable for daily deliveries", "Quick pickup and drop"],
    },
  },
  {
    title: "Auto Delivery",
    subtitle: "Medium size shipments",
    capacity: "500 – 800 kg",
    price: "₹80",
    icon: autoIcon,
    tag: "Business",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF",
    tagBorder: "#DDD6FE",
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentBorder: "#DDD6FE",
    details: {
      uses: ["Restaurant bulk orders", "Shop deliveries", "Business parcels"],
      benefits: ["Higher capacity", "Perfect for business logistics", "Affordable city transport"],
    },
  },
  {
    title: "Pickup Delivery",
    subtitle: "Bulky goods transport",
    capacity: "1 – 1.5 tonnes",
    price: "₹150",
    icon: pickupIcon,
    tag: "Heavy",
    tagColor: "#B45309",
    tagBg: "#FFFBEB",
    tagBorder: "#FDE68A",
    accent: "#D97706",
    accentLight: "#FFFBEB",
    accentBorder: "#FDE68A",
    details: {
      uses: ["Furniture", "Electronics", "Marketplace deliveries"],
      benefits: ["Large loading space", "Ideal for bulky items", "Reliable logistics"],
    },
  },
  {
    title: "Mini Truck",
    subtitle: "Heavy bulk shipments",
    capacity: "2 – 2.5 tonnes",
    price: "₹250",
    icon: truckIcon,
    tag: "B2B",
    tagColor: "#DC2626",
    tagBg: "#FEF2F2",
    tagBorder: "#FECACA",
    accent: "#DC2626",
    accentLight: "#FEF2F2",
    accentBorder: "#FECACA",
    details: {
      uses: ["Warehouse supply", "Construction materials", "Bulk groceries"],
      benefits: ["High load capacity", "Perfect for large shipments", "Best for B2B logistics"],
    },
  },
];

/* ─── Vehicle Card ──────────────────────────────────────────────────── */
function VehicleCard({ vehicle, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: hovered ? vehicle.accentLight : "#FFFFFF",
        border: `1.5px solid ${hovered ? vehicle.accentBorder : "#E5E9F0"}`,
        borderRadius: "20px",
        boxShadow: hovered
          ? `0 16px 48px ${vehicle.accent}1A, 0 2px 8px rgba(0,0,0,0.06)`
          : "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* top accent stripe */}
      <motion.div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "3px",
          background: `linear-gradient(90deg, transparent, ${vehicle.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      <div style={{ padding: "22px 18px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* tag + price row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", fontFamily: "'Clash Display', 'Plus Jakarta Sans', sans-serif",
            color: vehicle.tagColor,
            background: vehicle.tagBg,
            border: `1px solid ${vehicle.tagBorder}`,
            padding: "3px 10px", borderRadius: "99px",
          }}>
            {vehicle.tag}
          </span>
          <span style={{
            fontFamily: "'Clash Display', 'Plus Jakarta Sans', sans-serif",
            fontSize: "17px", fontWeight: 800, color: vehicle.accent,
          }}>
            {vehicle.price}
            <span style={{ fontSize: "10px", fontWeight: 400, color: "#94A3B8", marginLeft: "2px" }}>/trip</span>
          </span>
        </div>

        {/* icon */}
        <motion.div
          animate={{ y: hovered ? -5 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}
        >
          <div style={{
            width: "80px", height: "80px", borderRadius: "18px",
            background: hovered ? `${vehicle.accent}12` : "#F8FAFC",
            border: `1.5px solid ${hovered ? vehicle.accentBorder : "#EEF2F7"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.3s, border-color 0.3s",
          }}>
            <img src={vehicle.icon} alt={vehicle.title} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
          </div>
        </motion.div>

        {/* title + subtitle */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{
            fontFamily: "'Clash Display', 'Plus Jakarta Sans', sans-serif",
            fontSize: "14.5px", fontWeight: 700,
            color: "#0F172A", marginBottom: "4px", lineHeight: 1.3,
          }}>
            {vehicle.title}
          </h3>
          <p style={{ fontSize: "11.5px", color: "#64748B", lineHeight: 1.4 }}>
            {vehicle.subtitle}
          </p>
        </div>

        {/* capacity */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span style={{
            fontSize: "11px", color: "#64748B",
            background: "#F1F5F9", border: "1px solid #E2E8F0",
            padding: "4px 12px", borderRadius: "99px",
          }}>
            📦 {vehicle.capacity}
          </span>
        </div>

        {/* view details cta */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.2 }}
          style={{ textAlign: "center" }}
        >
          <span style={{
            fontSize: "11.5px", fontWeight: 700,
            color: vehicle.accent,
            fontFamily: "'Clash Display', 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "0.03em",
          }}>
            View Details →
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
}

/* ─── SECTION ───────────────────────────────────────────────────────── */
export default function ServicesSection() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,wght@0,600;0,700;0,900;1,700&display=swap');

        .zipto-services-section * { box-sizing: border-box; }

        /* subtle dot pattern */
        .zipto-services-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }

        /* bottom divider line fade */
        .zipto-services-section::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent);
        }

        /* stat pills hover */
        .stat-pill:hover { background: #F1F5F9 !important; border-color: #CBD5E1 !important; }
      `}</style>

      <section
        id="Our Delivery Vehicles"
        className="zipto-services-section"
        style={{
          position: "relative",
          background: "#F8FAFD",
          padding: "96px 20px 80px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* soft radial glow top-center */}
        <div style={{
          position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "400px", pointerEvents: "none",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }} />

        <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ── HEADING ── */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                marginBottom: "18px",
              }}
            >
              <div style={{ height: "1px", width: "32px", background: "linear-gradient(to right, transparent, #2563EB)" }} />
              <span style={{
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#2563EB",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                Our Fleet
              </span>
              <div style={{ height: "1px", width: "32px", background: "linear-gradient(to left, transparent, #2563EB)" }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em",
                color: "#0F172A", marginBottom: "16px",
              }}
            >
              Delivery{" "}
              <em style={{
                fontStyle: "italic", color: "#2563EB",
                background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Vehicles
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55 }}
              style={{
                fontSize: "15px", color: "#64748B", maxWidth: "480px",
                margin: "0 auto", lineHeight: 1.65,
              }}
            >
              Choose the right vehicle for every delivery — from small parcels to bulk shipments.
            </motion.p>

          </div>

          {/* ── CARDS GRID ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}>
            {vehicles.map((v, i) => (
              <VehicleCard
                key={v.title}
                vehicle={v}
                index={i}
                onClick={() => setSelectedVehicle(v)}
              />
            ))}
          </div>

          {/* ── STATS ROW ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{
              marginTop: "56px",
              display: "flex", flexWrap: "wrap",
              justifyContent: "center", gap: "12px",
            }}
          >
            {[
              { emoji: "⚡", text: "Speed", color: "#2563EB" },
              { emoji: "💰", text: "Affordability", color: "#16A34A" },
              { emoji: "🎯", text: "Precision", color: "#EA580C" },
              { emoji: "🔒", text: "Reliability", color: "#7C3AED" },
            ].map((item) => (
              <div
                key={item.text}
                className="stat-pill"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "7px",
                  padding: "9px 18px", borderRadius: "99px",
                  background: "#FFFFFF", border: "1.5px solid #E5E9F0",
                  fontSize: "13px", fontWeight: 600, color: "#334155",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  transition: "background 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
              >
                <span>{item.emoji}</span>
                <span style={{ color: item.color }}>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* ── FOOTNOTE ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              textAlign: "center", marginTop: "20px",
              fontSize: "12.5px", color: "#94A3B8", lineHeight: 1.6,
            }}
          >
            Zipto's multi-vehicle network ensures every delivery is matched with the right vehicle for{" "}
            <span style={{ color: "#2563EB", fontWeight: 600 }}>speed</span>,{" "}
            <span style={{ color: "#16A34A", fontWeight: 600 }}>efficiency</span>, and{" "}
            <span style={{ color: "#EA580C", fontWeight: 600 }}>affordability</span>.
          </motion.p>

        </div>

        {/* top divider */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent)",
        }} />

      </section>

      {/* ── Popup ── */}
      <AnimatePresence>
        {selectedVehicle && (
          <VehiclePopup
            vehicle={selectedVehicle}
            close={() => setSelectedVehicle(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}