import { useNavigate } from "react-router-dom";
import ziptoLogo from "../assets/zipto_logo.jpeg";
import WhyChooseSection from "../components/home/WhyChooseSection";
import { motion } from "framer-motion";

import bikeImg   from "../assets/bike.png";
import scootyImg from "../assets/scooty.png";
import autoImg   from "../assets/auto.png";
import carImg    from "../assets/car.png";
import truckImg  from "../assets/truck.png";

/* ─── Google Fonts — add to your index.html ─────────────────────────────────
   <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,800&display=swap" rel="stylesheet" />
   ──────────────────────────────────────────────────────────────────────────── */

/* ── Design tokens (matching ForBusinessSection) ── */
const SERIF = "'Fraunces', Georgia, serif";
const SANS  = "'Plus Jakarta Sans', system-ui, sans-serif";

const BLUE_50  = "#EFF6FF";
const BLUE_100 = "#BFDBFE";
const BLUE_200 = "#93C5FD";
const BLUE_400 = "#2563EB";
const BLUE_600 = "#1D4ED8";
const BLUE_800 = "#1e3a8a";
const BLUE_900 = "#1e3a6e";

const INK     = "#0F172A";
const MUTED   = "#64748B";
const HINT    = "#94A3B8";
const BG      = "#F8FAFD";
const SURFACE = "#FFFFFF";
const BORDER  = "#E9EEF5";
const BORDER_STRONG = "#E2E8F0";

/* ── Data ── */
const deliveries = [
  { img: bikeImg,   title: "Bike",       desc: "Documents, medicines & food deliveries" },
  { img: scootyImg, title: "Scooty",     desc: "Lightweight & quick hyperlocal runs"     },
  { img: autoImg,   title: "Auto",       desc: "Medium parcels & business shipments"     },
  { img: carImg,    title: "Pickup",     desc: "Larger goods & retail inventory"         },
  { img: truckImg,  title: "Mini Truck", desc: "Bulk shipments & heavy goods"            },
];

const missionPoints = [
  "Enable faster and more reliable deliveries for businesses and individuals",
  "Support local commerce through efficient logistics infrastructure",
  "Create flexible earning opportunities for delivery partners",
  "Build a scalable ecosystem that supports growing cities",
];

const whatWeDo = [
  "Food, medicine & grocery deliveries",
  "Parcel and document transportation",
  "Retail and e-commerce shipments",
  "Business inventory & bulk logistics",
];

const whyPoints = [
  { num: "01", title: "Real-time tracking",   desc: "Live delivery status with accurate ETAs so you're always in the know."        },
  { num: "02", title: "Flexible fleet",        desc: "Five vehicle types to match any parcel — from envelopes to bulk freight."     },
  { num: "03", title: "Partner ecosystem",     desc: "A growing network of verified delivery partners built for reliability."       },
  { num: "04", title: "Transparent pricing",   desc: "No hidden fees. Competitive rates for businesses and individuals alike."      },
  { num: "05", title: "Local-first focus",     desc: "Designed specifically for Odisha's cities — not a generic national template." },
  { num: "06", title: "Seamless onboarding",   desc: "Quick setup for businesses. Start dispatching within minutes of signing up."  },
];

const stats = [
  { num: "5+",  label: "Vehicle classes in fleet"   },
  { num: "2",   label: "Cities currently active"     },
  { num: "24h", label: "Real-time delivery tracking" },
];

const contactInfo = [
  { label: "Email",   value: "contact@ridezipto.com", highlight: true  },
  { label: "Phone",   value: "+91 9090029996",         highlight: false },
  { label: "Address", value: "Bhubaneswar, Odisha",    highlight: false },
];

/* ── Shared styles ── */
const dotGridStyle = {
  backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

/* ── Primitives ── */

function EyebrowPill({ children, color = BLUE_400, bg = BLUE_50, border = BLUE_100 }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
      textTransform: "uppercase", color,
      background: bg, border: `1.5px solid ${border}`,
      padding: "5px 14px", borderRadius: 99,
      fontFamily: SANS, marginBottom: 20,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "inline-block" }} />
      {children}
    </span>
  );
}

function SectionHeading({ children, size = "clamp(1.6rem, 2.8vw, 2.2rem)" }) {
  return (
    <h2 style={{
      fontFamily: SERIF, fontSize: size, fontWeight: 900,
      lineHeight: 1.1, letterSpacing: "-0.02em",
      color: INK, marginBottom: 16,
    }}>
      {children}
    </h2>
  );
}

function SubText({ children, style = {} }) {
  return (
    <p style={{
      fontFamily: SANS, fontSize: 15, color: MUTED,
      lineHeight: 1.7, ...style,
    }}>
      {children}
    </p>
  );
}

function ThinDivider() {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, transparent, ${BORDER_STRONG} 30%, ${BORDER_STRONG} 70%, transparent)`,
    }} />
  );
}

function WhiteCard({ children, style = {}, accentLeft = false }) {
  return (
    <div style={{
      background: SURFACE,
      border: `1.5px solid ${BORDER}`,
      borderLeft: accentLeft ? `3px solid ${BLUE_400}` : `1.5px solid ${BORDER}`,
      borderRadius: 20,
      padding: "28px 24px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      ...style,
    }}>
      {children}
    </div>
  );
}

function IconBox({ children }) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 12,
      background: BLUE_50, border: `1.5px solid ${BLUE_100}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 20, marginBottom: 16,
    }}>
      {children}
    </div>
  );
}

function SectionWrapper({ bg = SURFACE, children, style = {} }) {
  return (
    <section style={{
      background: bg, padding: "72px 48px",
      position: "relative", overflow: "hidden", ...style,
    }}>
      {children}
    </section>
  );
}

/* ── Animated fade-up wrapper ── */
function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,800&display=swap');
        * { box-sizing: border-box; }
      `}</style>


      {/* ════════════ HERO ════════════ */}
      <section style={{
        background: "linear-gradient(145deg, #0C2461 0%, #1D4ED8 55%, #1e40af 100%)",
        padding: "80px 48px 88px",
        position: "relative", overflow: "hidden",
      }}>
        {/* dot grid overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.07,
        }} />

        {/* glow blobs */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: "25%",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />

        {/* decorative rings */}
        {[
          { width: 420, height: 420, top: -100, right: -60 },
          { width: 260, height: 260, bottom: -80, left: "35%" },
        ].map((ring, i) => (
          <div key={i} style={{
            position: "absolute", borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
            pointerEvents: "none", ...ring,
          }} />
        ))}

        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* logo icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: 56, height: 56, borderRadius: 14,
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, marginBottom: 28,
            }}
          >
            🚀
          </motion.div>

          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.45)",
              marginBottom: 24,
            }}
          >
            <span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
            Zipto Hyperlogistics Pvt. Ltd.
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: SERIF, fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900, lineHeight: 1.06, color: "#fff",
              letterSpacing: "-0.02em", maxWidth: 560, marginBottom: 20,
            }}
          >
            Delivering{" "}
            <em style={{ fontStyle: "italic", color: "#93C5FD" }}>smarter,</em>
            <br />moving faster.
          </motion.h1>

          {/* subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontFamily: SANS, fontSize: 15, color: "rgba(255,255,255,0.5)",
              maxWidth: 440, lineHeight: 1.75, marginBottom: 36,
            }}
          >
            A technology-driven platform built to simplify and accelerate
            last-mile delivery for businesses and individuals across India.
          </motion.p>

          {/* live badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.14)",
              borderRadius: 99, padding: "7px 16px",
              fontSize: 12, color: "rgba(255,255,255,0.55)",
              fontFamily: SANS,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
            Now live · Bhubaneswar – Cuttack corridor
          </motion.div>
        </div>
      </section>

      {/* ════════════ STATS BAR ════════════ */}
      <SectionWrapper bg={SURFACE} style={{ padding: "48px 48px" }}>
        {/* blue glow */}
        <div style={{
          position: "absolute", top: "-40px", left: "-40px",
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            border: `1.5px solid ${BORDER}`,
            borderRadius: 18, overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}>
            {stats.map(({ num, label }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{
                  padding: "28px 32px", background: SURFACE,
                  borderRight: i < stats.length - 1 ? `1.5px solid ${BORDER}` : "none",
                }}>
                  <div style={{
                    fontFamily: SERIF, fontSize: 38, fontWeight: 900,
                    color: BLUE_400, lineHeight: 1, marginBottom: 6,
                  }}>
                    {num}
                  </div>
                  <div style={{ fontSize: 12.5, color: HINT, fontWeight: 500, fontFamily: SANS }}>
                    {label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ThinDivider />

      {/* ════════════ WHO WE ARE ════════════ */}
      <SectionWrapper bg={SURFACE}>
        {/* dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.35,
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeUp>
            <EyebrowPill>Who we are</EyebrowPill>
            <SectionHeading>Smart logistics,{" "}
              <em style={{
                fontStyle: "italic",
                background: `linear-gradient(135deg, ${BLUE_400} 0%, #60A5FA 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                built for everyone
              </em>
            </SectionHeading>
            <SubText style={{ maxWidth: 580 }}>
              Zipto redefines local delivery with a connected logistics network — from bikes to mini trucks.
              We bring customers, businesses, and delivery partners onto a single ecosystem, enabling fast,
              affordable, and reliable movement of goods across the city.
            </SubText>
          </FadeUp>
        </div>
      </SectionWrapper>

      <ThinDivider />

      {/* ════════════ VISION + MISSION ════════════ */}
      <SectionWrapper bg={BG}>
        {/* dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.4,
        }} />
        {/* glow */}
        <div style={{
          position: "absolute", top: -60, left: -60,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

            {/* Vision */}
            <FadeUp delay={0.1}>
              <WhiteCard style={{ height: "100%" }}>
                <IconBox>🚀</IconBox>
                <EyebrowPill>Our Vision</EyebrowPill>
                <h3 style={{
                  fontFamily: SERIF, fontSize: 20, fontWeight: 900,
                  lineHeight: 1.2, color: INK, marginBottom: 14,
                  letterSpacing: "-0.01em",
                }}>
                  India's most trusted<br />logistics network
                </h3>
                <div style={{ height: 2, width: 36, background: BLUE_100, marginBottom: 16 }} />
                <SubText style={{ fontSize: 13.5 }}>
                  To build one of the most trusted and scalable hyperlocal logistics networks across India —
                  empowering local businesses, creating delivery partner opportunities, and making city
                  logistics smarter.
                </SubText>
              </WhiteCard>
            </FadeUp>

            {/* Mission */}
            <FadeUp delay={0.2}>
              <WhiteCard accentLeft style={{ height: "100%" }}>
                <IconBox>👥</IconBox>
                <EyebrowPill>Our Mission</EyebrowPill>
                <h3 style={{
                  fontFamily: SERIF, fontSize: 20, fontWeight: 900,
                  lineHeight: 1.2, color: INK, marginBottom: 14,
                  letterSpacing: "-0.01em",
                }}>
                  Transform local logistics<br />with technology
                </h3>
                <div style={{ height: 2, width: 36, background: BLUE_100, marginBottom: 16 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {missionPoints.map((pt, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: 10,
                      fontSize: 13.5, color: MUTED, lineHeight: 1.65, fontFamily: SANS,
                    }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: BLUE_200, flexShrink: 0, marginTop: 7,
                      }} />
                      {pt}
                    </div>
                  ))}
                </div>
              </WhiteCard>
            </FadeUp>

          </div>
        </div>
      </SectionWrapper>

      <ThinDivider />

      {/* ════════════ WHAT WE DO ════════════ */}
      <SectionWrapper bg={SURFACE}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.3,
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <FadeUp>
              <IconBox>📦</IconBox>
              <EyebrowPill>What we do</EyebrowPill>
              <SectionHeading>Covering every{" "}
                <em style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #EA580C, #F97316)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  delivery need
                </em>
              </SectionHeading>
              <SubText style={{ fontSize: 14, maxWidth: 360 }}>
                Zipto connects customers and businesses with delivery partners through an intelligent
                platform designed for speed and efficiency.
              </SubText>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 10, marginTop: 8,
              }}>
                {whatWeDo.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(37,99,235,0.08)" }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background: BLUE_50, border: `1.5px solid ${BLUE_100}`,
                      borderRadius: 14, padding: "16px",
                      fontSize: 13, color: "#1e3a8a", fontFamily: SANS,
                      display: "flex", alignItems: "flex-start",
                      gap: 10, lineHeight: 1.6, fontWeight: 500,
                      cursor: "default",
                    }}
                  >
                    <span style={{ color: BLUE_400, fontSize: 14, lineHeight: 1.6, flexShrink: 0 }}>•</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </SectionWrapper>

      <ThinDivider />

      {/* ════════════ FLEET ════════════ */}
      <SectionWrapper bg={BG}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.4,
        }} />
        <div style={{
          position: "absolute", bottom: -60, right: -60,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeUp>
            <EyebrowPill color="#EA580C" bg="#FFF7ED" border="#FED7AA">Our Fleet</EyebrowPill>
            <SectionHeading>Delivery network</SectionHeading>
            <SubText style={{ fontSize: 13.5, marginBottom: 0 }}>
              Five vehicle classes to match every parcel size and business need.
            </SubText>
          </FadeUp>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12, marginTop: 28,
          }}>
            {deliveries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(37,99,235,0.1)", borderColor: BLUE_100 }}
                style={{
                  background: SURFACE,
                  border: `1.5px solid ${BORDER}`,
                  borderRadius: 18, padding: "24px 14px 20px",
                  textAlign: "center", cursor: "default",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "border-color 0.25s",
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: BLUE_50, border: `1.5px solid ${BLUE_100}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px", overflow: "hidden",
                }}>
                  <img
                    src={item.img} alt={item.title}
                    style={{ width: 34, height: 34, objectFit: "contain" }}
                  />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6, fontFamily: SANS }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 11.5, color: HINT, lineHeight: 1.55, fontFamily: SANS }}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ThinDivider />

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <SectionWrapper bg={SURFACE}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.3,
        }} />
        <div style={{
          position: "absolute", top: -60, left: -60,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeUp>
            <EyebrowPill>Why Zipto</EyebrowPill>
            <SectionHeading>Built{" "}
              <em style={{
                fontStyle: "italic",
                background: `linear-gradient(135deg, ${BLUE_400}, #60A5FA)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                different
              </em>
            </SectionHeading>
          </FadeUp>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14, marginTop: 28,
          }}>
            {whyPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.07)", borderColor: BLUE_100 }}
                style={{
                  background: BG,
                  border: `1.5px solid ${BORDER}`,
                  borderRadius: 18, padding: "24px 20px",
                  cursor: "default",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                  transition: "border-color 0.25s",
                }}
              >
                <div style={{
                  fontFamily: SERIF, fontSize: 32, fontWeight: 900,
                  color: BLUE_100, marginBottom: 10, lineHeight: 1,
                }}>
                  {item.num}
                </div>
                <div style={{
                  fontSize: 14, fontWeight: 700, color: INK,
                  marginBottom: 7, fontFamily: SANS,
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: 12.5, color: HINT, lineHeight: 1.65,
                  fontFamily: SANS,
                }}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ThinDivider />

      {/* ════════════ JOURNEY ════════════ */}
      <SectionWrapper bg={BG}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.4,
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeUp>
            <EyebrowPill>Our Journey</EyebrowPill>
            <SectionHeading>Starting from{" "}
              <em style={{
                fontStyle: "italic",
                background: `linear-gradient(135deg, ${BLUE_400}, #60A5FA)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Bhubaneswar – Cuttack
              </em>
            </SectionHeading>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div style={{
              background: `linear-gradient(145deg, #0C2461 0%, ${BLUE_600} 100%)`,
              borderRadius: 22, padding: "36px 40px",
              display: "grid", gridTemplateColumns: "auto 1fr",
              gap: 28, alignItems: "flex-start",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 8px 32px rgba(37,99,235,0.2)",
              marginTop: 8,
            }}>
              {/* dot-grid overlay inside card */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: 22,
                ...dotGridStyle, opacity: 0.07, pointerEvents: "none",
              }} />

              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 22, flexShrink: 0,
              }}>
                📍
              </div>
              <div>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                  marginBottom: 12, fontFamily: SANS,
                }}>
                  <span style={{ width: 20, height: 1, background: "rgba(255,255,255,0.2)" }} />
                  Origin Story
                </span>
                <h3 style={{
                  fontFamily: SERIF, fontSize: 22, fontWeight: 900,
                  color: "#fff", lineHeight: 1.2, marginBottom: 14,
                  letterSpacing: "-0.01em",
                }}>
                  The Bhubaneswar – Cuttack corridor
                </h3>
                <p style={{
                  fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.75, marginBottom: 18,
                }}>
                  Zipto is launching initial operations along this critical urban corridor, with a long-term
                  vision to expand across Odisha and Eastern India. As we grow, our focus remains on building
                  a delivery network that is fast, reliable, and accessible for everyone.
                </p>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  borderRadius: 99, padding: "6px 14px",
                  fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: SANS,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  Bhubaneswar · Cuttack · Odisha
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </SectionWrapper>

      {/* ── WHY CHOOSE SECTION (existing component) ── */}
      <WhyChooseSection />

      <ThinDivider />

      {/* ════════════ CONTACT ════════════ */}
      <SectionWrapper bg={SURFACE}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          ...dotGridStyle, opacity: 0.3,
        }} />
        <div style={{
          position: "absolute", bottom: -60, right: -60,
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeUp>
            <EyebrowPill>Contact</EyebrowPill>
            <SectionHeading>Get in touch{" "}
              <em style={{
                fontStyle: "italic",
                background: `linear-gradient(135deg, ${BLUE_400}, #60A5FA)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                with Zipto
              </em>
            </SectionHeading>
          </FadeUp>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 32, alignItems: "center",
            borderTop: `1.5px solid ${BORDER}`, paddingTop: 36, marginTop: 8,
          }}>
            <FadeUp delay={0.1}>
              <SubText style={{ fontSize: 14, maxWidth: 420, marginBottom: 20 }}>
                Have questions about our platform, partnership opportunities, or delivery services?
                We'd love to hear from you.
              </SubText>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {contactInfo.map(({ label, value, highlight }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", gap: 12,
                  }}>
                    <span style={{
                      fontSize: 11.5, color: HINT, minWidth: 60,
                      fontFamily: SANS, fontWeight: 500,
                    }}>
                      {label}
                    </span>
                    <span style={{
                      fontSize: 13.5, fontWeight: highlight ? 700 : 500,
                      color: highlight ? BLUE_400 : MUTED, fontFamily: SANS,
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <motion.a
                href="mailto:contact@ridezipto.com"
                whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(37,99,235,0.32)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: `linear-gradient(135deg, ${BLUE_600}, ${BLUE_400})`,
                  borderRadius: 99, padding: "13px 28px",
                  fontSize: 14, fontWeight: 700, color: "#fff",
                  textDecoration: "none", whiteSpace: "nowrap", fontFamily: SANS,
                  boxShadow: "0 4px 20px rgba(37,99,235,0.28)",
                  letterSpacing: "0.02em",
                  transition: "box-shadow 0.25s",
                }}
              >
                Send a message →
              </motion.a>
            </FadeUp>
          </div>
        </div>
      </SectionWrapper>



    </div>
  );
}