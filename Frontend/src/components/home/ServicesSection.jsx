import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VehiclePopup from "./VehiclePopup";
import bikeIcon   from "../../assets/bike.png";
import scootyIcon from "../../assets/scooty.png";
import autoIcon   from "../../assets/auto.png";
import pickupIcon from "../../assets/pickup.png";
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
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: "#FFFFFF",
        border: `1.5px solid ${hovered ? vehicle.accentBorder : "#E8EDF5"}`,
        borderRadius: "24px",
        boxShadow: hovered
          ? `0 24px 56px ${vehicle.accent}28, 0 8px 20px rgba(0,0,0,0.08)`
          : "0 2px 8px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transform: hovered ? "translateY(-7px)" : "translateY(0px)",
        transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* ── top panel: gradient background + icon ── */}
      <div style={{
        height: "200px",
        background: hovered
          ? `linear-gradient(145deg, ${vehicle.accent}22 0%, ${vehicle.accentLight} 100%)`
          : `linear-gradient(145deg, ${vehicle.accent}0D 0%, ${vehicle.accentLight}95 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        transition: "background 0.4s ease",
      }}>
        {/* dot grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(circle, ${vehicle.accent}25 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          opacity: hovered ? 0.65 : 0.3,
          transition: "opacity 0.4s",
        }} />

        {/* tag pill — top left */}
        <div style={{
          position: "absolute", top: "12px", left: "12px",
          background: vehicle.tagBg,
          color: vehicle.tagColor,
          border: `1px solid ${vehicle.tagBorder}`,
          fontSize: "9.5px", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "3px 9px", borderRadius: "99px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {vehicle.tag}
        </div>

        {/* price badge — top right */}
        <div style={{
          position: "absolute", top: "10px", right: "12px",
          background: vehicle.accent,
          color: "#FFFFFF",
          fontSize: "13px", fontWeight: 800,
          padding: "5px 11px", borderRadius: "99px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          boxShadow: `0 3px 10px ${vehicle.accent}55`,
          letterSpacing: "-0.01em",
        }}>
          {vehicle.price}
          <span style={{ fontSize: "9px", fontWeight: 400, opacity: 0.78, marginLeft: "2px" }}>/trip</span>
        </div>

        {/* vehicle icon */}
        <motion.div
          animate={{ y: hovered ? -7 : 0, scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "120px", height: "120px", borderRadius: "24px",
            background: hovered ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.72)",
            backdropFilter: "blur(10px)",
            border: `1.5px solid ${hovered ? vehicle.accentBorder : "rgba(255,255,255,0.9)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: hovered
              ? `0 14px 36px ${vehicle.accent}35, 0 4px 12px rgba(0,0,0,0.09)`
              : "0 4px 16px rgba(0,0,0,0.07)",
            position: "relative", zIndex: 1,
            transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          }}
        >
          <img src={vehicle.icon} alt={vehicle.title} style={{ width: "84px", height: "84px", objectFit: "contain" }} />
        </motion.div>

        {/* left accent bar slides in on hover */}
        <motion.div
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
            background: `linear-gradient(180deg, transparent, ${vehicle.accent}, transparent)`,
            transformOrigin: "center",
          }}
        />
      </div>

      {/* ── bottom info ── */}
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>

        {/* title + subtitle */}
        <div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "16px", fontWeight: 800,
            color: "#0F172A", marginBottom: "3px", lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}>
            {vehicle.title}
          </h3>
          <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.5, margin: 0 }}>
            {vehicle.subtitle}
          </p>
        </div>

        {/* capacity pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          background: "#F1F5F9", border: "1px solid #E2E8F0",
          borderRadius: "99px", padding: "4px 11px", width: "fit-content",
          fontSize: "11px", color: "#475569", fontWeight: 500,
        }}>
          <span>📦</span>
          <span>{vehicle.capacity}</span>
        </div>

        {/* CTA button — always in layout, lights up on hover */}
        <div style={{
          background: hovered
            ? `linear-gradient(135deg, ${vehicle.accent} 0%, ${vehicle.accent}CC 100%)`
            : "#F8FAFC",
          border: `1.5px solid ${hovered ? vehicle.accent : "#E8EDF5"}`,
          borderRadius: "12px",
          padding: "9px 14px",
          textAlign: "center",
          boxShadow: hovered ? `0 6px 18px ${vehicle.accent}40` : "none",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "12px", fontWeight: 700,
            color: hovered ? "#FFFFFF" : "#94A3B8",
            letterSpacing: "0.04em",
            transition: "color 0.3s",
          }}>
            View Details →
          </span>
        </div>

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
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .bookfleet-services-section * { box-sizing: border-box; }

        /* bottom divider line fade */
        .bookfleet-services-section::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent);
        }

        /* stat pills hover */
        .stat-pill:hover { background: #F1F5F9 !important; border-color: #CBD5E1 !important; }
      `}</style>

      <section
        id="Our Delivery Vehicles"
        className="bookfleet-services-section"
        style={{
          position: "relative",
          background: "#FFFFFF",
          padding: "100px 20px 88px",
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
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em",
                color: "#0F172A", marginBottom: "16px",
              }}
            >
              Delivery{" "}
              <em style={{
                fontStyle: "italic", fontFamily: "'DM Serif Display', serif",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
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
              { text: "Speed", color: "#2563EB" },
              { text: "Affordability", color: "#16A34A" },
              { text: "Precision", color: "#EA580C" },
              { text: "Reliability", color: "#7C3AED" },
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
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, display: "inline-block", flexShrink: 0 }} />
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
            bookfleet's multi-vehicle network ensures every delivery is matched with the right vehicle for{" "}
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