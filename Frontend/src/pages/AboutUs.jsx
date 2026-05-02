import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ziptoLogo from "../assets/zipto_logo.jpeg";
import WhyChooseSection from "../components/home/WhyChooseSection";
import Navbar from "../components/layout/Navbar";

import bikeImg   from "../assets/bike.png";
import scootyImg from "../assets/scooty.png";
import autoImg   from "../assets/auto.png";
import carImg    from "../assets/car.png";
import truckImg  from "../assets/truck.png";

/* ─── Google Fonts — add to your index.html ────────────────────────────────
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
   ────────────────────────────────────────────────────────────────────────── */

const SERIF = "'Playfair Display', Georgia, serif";
const SANS  = "'Plus Jakarta Sans', system-ui, sans-serif";

/* ── Blue token palette ── */
const BLUE_50  = "#E6F1FB";
const BLUE_100 = "#B5D4F4";
const BLUE_200 = "#85B7EB";
const BLUE_400 = "#378ADD";
const BLUE_600 = "#185FA5";
const BLUE_800 = "#0C447C";
const BLUE_900 = "#042C53";

const INK     = "#0d1822";
const MUTED   = "#4b5c6b";
const HINT    = "#8fa3b4";
const BG      = "#f4f8fd";
const SURFACE = "#ffffff";
const BORDER  = "rgba(24,95,165,0.10)";

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

/* ── Primitives ── */

function ThinRule() {
  return <div style={{ height: "0.5px", background: BORDER }} />;
}

function Label({ children, color = BLUE_400 }) {
  return (
    <p style={{
      fontFamily: SANS, fontSize: 10.5, fontWeight: 600,
      letterSpacing: "0.14em", textTransform: "uppercase",
      color, marginBottom: 10,
    }}>
      {children}
    </p>
  );
}

function SectionTitle({ children, size = 34 }) {
  return (
    <h2 style={{
      fontFamily: SERIF, fontSize: size, fontWeight: 400,
      lineHeight: 1.15, letterSpacing: "-0.01em",
      color: INK, marginBottom: 16,
    }}>
      {children}
    </h2>
  );
}

function Divider() {
  return <div style={{ width: 36, height: 2, background: BLUE_100, margin: "18px 0" }} />;
}

function BodyText({ children, style = {} }) {
  return (
    <p style={{
      fontFamily: SANS, fontSize: 14.5, fontWeight: 300,
      color: MUTED, lineHeight: 1.75, ...style,
    }}>
      {children}
    </p>
  );
}

function Section({ bg = SURFACE, children, style = {} }) {
  return (
    <section style={{ background: bg, padding: "64px 48px", ...style }}>
      {children}
    </section>
  );
}

function IconBox({ children, bg = BLUE_50 }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: bg, display: "flex",
      alignItems: "center", justifyContent: "center",
      fontSize: 18, marginBottom: 16,
    }}>
      {children}
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: SURFACE, border: `0.5px solid ${BORDER}`,
      borderRadius: 16, padding: "28px 24px", ...style,
    }}>
      {children}
    </div>
  );
}

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>

      {/* ── NAVBAR ── */}
      <Navbar />

     
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <div style={{
        background: `linear-gradient(145deg, ${BLUE_900} 0%, ${BLUE_800} 50%, #0a2a5e 100%)`,
        padding: "72px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative rings */}
        {[
          { width: 500, height: 500, top: -120, right: -80 },
          { width: 320, height: 320, bottom: -100, left: "30%" },
          { width: 200, height: 200, top: 40, left: -60, borderColor: "rgba(55,138,221,0.15)" },
        ].map((ring, i) => (
          <div key={i} style={{
            position: "absolute", borderRadius: "50%",
            border: `1px solid ${ring.borderColor || "rgba(255,255,255,0.05)"}`,
            pointerEvents: "none", ...ring,
          }} />
        ))}

        {/* logo */}
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: BLUE_50, border: "1px solid rgba(255,255,255,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, marginBottom: 24, position: "relative", zIndex: 1,
        }}>
          🚀
        </div>

        {/* eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 10.5, fontWeight: 600, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.38)",
          marginBottom: 22, position: "relative", zIndex: 1,
        }}>
          <span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
          Zipto Hyperlogistics Pvt. Ltd.
        </div>

        {/* headline */}
        <h1 style={{
          fontFamily: SERIF, fontSize: 56, fontWeight: 400,
          lineHeight: 1.06, color: "#ffffff",
          letterSpacing: "-0.02em",
          maxWidth: 540, marginBottom: 20,
          position: "relative", zIndex: 1,
        }}>
          Delivering{" "}
          <em style={{ fontStyle: "italic", color: BLUE_200 }}>smarter,</em>
          <br />moving faster.
        </h1>

        {/* subtext */}
        <p style={{
          fontFamily: SANS, fontSize: 14.5, fontWeight: 300,
          color: "rgba(255,255,255,0.45)", maxWidth: 440,
          lineHeight: 1.75, marginBottom: 34,
          position: "relative", zIndex: 1,
        }}>
          A technology-driven platform built to simplify and accelerate
          last-mile delivery for businesses and individuals across India.
        </p>

        {/* live badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.07)",
          border: "0.5px solid rgba(255,255,255,0.12)",
          borderRadius: 100, padding: "7px 16px",
          fontSize: 12, color: "rgba(255,255,255,0.5)",
          position: "relative", zIndex: 1,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
          Now live · Bhubaneswar – Cuttack corridor
        </div>
      </div>

      {/* ════════════════════════════════
          STATS BAR
      ════════════════════════════════ */}
      <Section bg={SURFACE} style={{ padding: "40px 48px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          border: `0.5px solid ${BORDER}`, borderRadius: 14, overflow: "hidden",
        }}>
          {stats.map(({ num, label }, i) => (
            <div key={i} style={{
              padding: "24px 28px", background: SURFACE,
              borderRight: i < stats.length - 1 ? `0.5px solid ${BORDER}` : "none",
            }}>
              <div style={{
                fontFamily: SERIF, fontSize: 36, fontWeight: 400,
                color: BLUE_600, lineHeight: 1,
              }}>
                {num}
              </div>
              <div style={{ fontSize: 12, color: HINT, marginTop: 4, fontWeight: 400, fontFamily: SANS }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ThinRule />

      {/* ════════════════════════════════
          WHO WE ARE
      ════════════════════════════════ */}
      <Section bg={SURFACE}>
        <Label>Who we are</Label>
        <SectionTitle>Smart logistics,<br />built for everyone</SectionTitle>
        <Divider />
        <BodyText style={{ maxWidth: 580 }}>
          Zipto redefines local delivery with a connected logistics network — from bikes to mini trucks.
          We bring customers, businesses, and delivery partners onto a single ecosystem, enabling fast,
          affordable, and reliable movement of goods across the city.
        </BodyText>
      </Section>

      <ThinRule />

      {/* ════════════════════════════════
          VISION + MISSION
      ════════════════════════════════ */}
      <Section bg={BG}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

          {/* Vision */}
          <Card>
            <IconBox>🚀</IconBox>
            <Label>Our vision</Label>
            <h3 style={{
              fontFamily: SERIF, fontSize: 19, fontWeight: 400,
              lineHeight: 1.3, color: INK, marginBottom: 0,
            }}>
              India's most trusted<br />logistics network
            </h3>
            <Divider />
            <BodyText style={{ fontSize: 13.5 }}>
              To build one of the most trusted and scalable hyperlocal logistics networks across India —
              empowering local businesses, creating delivery partner opportunities, and making city
              logistics smarter.
            </BodyText>
          </Card>

          {/* Mission */}
          <Card style={{ borderLeft: `3px solid ${BLUE_400}` }}>
            <IconBox>👥</IconBox>
            <Label>Our mission</Label>
            <h3 style={{
              fontFamily: SERIF, fontSize: 19, fontWeight: 400,
              lineHeight: 1.3, color: INK, marginBottom: 0,
            }}>
              Transform local logistics<br />with technology
            </h3>
            <Divider />
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {missionPoints.map((pt, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  fontSize: 13.5, color: MUTED, lineHeight: 1.6, fontWeight: 300,
                  fontFamily: SANS,
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: BLUE_200, flexShrink: 0, marginTop: 7,
                  }} />
                  {pt}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <ThinRule />

      {/* ════════════════════════════════
          WHAT WE DO
      ════════════════════════════════ */}
      <Section bg={SURFACE}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <IconBox>📦</IconBox>
            <Label>What we do</Label>
            <SectionTitle size={28}>Covering every<br />delivery need</SectionTitle>
            <BodyText style={{ fontSize: 13.5, maxWidth: 340 }}>
              Zipto connects customers and businesses with delivery partners through an intelligent
              platform designed for speed and efficiency.
            </BodyText>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 10, marginTop: 8,
          }}>
            {whatWeDo.map((item, i) => (
              <div key={i} style={{
                background: BLUE_50, border: `0.5px solid ${BLUE_100}`,
                borderRadius: 10, padding: "14px 16px",
                fontSize: 13, color: BLUE_800, fontFamily: SANS,
                display: "flex", alignItems: "flex-start",
                gap: 10, lineHeight: 1.55, fontWeight: 400,
              }}>
                <span style={{ color: BLUE_400, fontSize: 14, lineHeight: 1.55 }}>•</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinRule />

      {/* ════════════════════════════════
          FLEET
      ════════════════════════════════ */}
      <Section bg={BG}>
        <Label>Our fleet</Label>
        <SectionTitle size={28}>Delivery network</SectionTitle>
        <BodyText style={{ fontSize: 13, marginBottom: 0 }}>
          Five vehicle classes to match every parcel size and business need.
        </BodyText>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(5,1fr)",
          gap: 12, marginTop: 28,
        }}>
          {deliveries.map((item, i) => (
            <div
              key={i}
              style={{
                background: SURFACE, border: `0.5px solid ${BORDER}`,
                borderRadius: 14, padding: "22px 14px 18px",
                textAlign: "center", cursor: "default",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = BLUE_200;
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(24,95,165,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = BORDER;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* ── PNG image instead of emoji ── */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: BLUE_50, display: "flex",
                alignItems: "center", justifyContent: "center",
                margin: "0 auto 12px", overflow: "hidden",
              }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: 34, height: 34, objectFit: "contain" }}
                />
              </div>
              <div style={{ fontSize: 12, fontWeight: 500, color: INK, marginBottom: 5, fontFamily: SANS }}>
                {item.title}
              </div>
              <div style={{ fontSize: 11, color: HINT, lineHeight: 1.55, fontWeight: 300, fontFamily: SANS }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ThinRule />

      {/* ════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════ */}
      <Section bg={SURFACE}>
        <Label>Why Zipto</Label>
        <SectionTitle size={28}>Built different</SectionTitle>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: 14, marginTop: 28,
        }}>
          {whyPoints.map((item, i) => (
            <div
              key={i}
              style={{
                background: BG, border: `0.5px solid ${BORDER}`,
                borderRadius: 14, padding: "24px 20px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = BLUE_200}
              onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
            >
              <div style={{
                fontFamily: SERIF, fontSize: 30, fontWeight: 400,
                color: BLUE_100, marginBottom: 8, lineHeight: 1,
              }}>
                {item.num}
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 500, color: INK, marginBottom: 6, fontFamily: SANS }}>
                {item.title}
              </div>
              <div style={{ fontSize: 12.5, color: HINT, lineHeight: 1.6, fontWeight: 300, fontFamily: SANS }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ThinRule />

      {/* ════════════════════════════════
          JOURNEY
      ════════════════════════════════ */}
      <Section bg={BG}>
        <Label>Our journey</Label>
        <SectionTitle size={28}>Starting from<br />Bhubaneswar – Cuttack</SectionTitle>
        <div style={{
          background: `linear-gradient(135deg, ${BLUE_900} 0%, ${BLUE_800} 100%)`,
          borderRadius: 18, padding: "36px 40px",
          display: "grid", gridTemplateColumns: "auto 1fr",
          gap: 28, alignItems: "flex-start",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            border: "0.5px solid rgba(255,255,255,0.12)",
            display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 20, flexShrink: 0,
          }}>
            📍
          </div>
          <div>
            <p style={{
              fontFamily: SANS, fontSize: 10.5, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: 10,
            }}>
              Origin story
            </p>
            <h3 style={{
              fontFamily: SERIF, fontSize: 22, fontWeight: 400,
              color: "#ffffff", lineHeight: 1.2, marginBottom: 12,
              letterSpacing: "-0.01em",
            }}>
              The Bhubaneswar – Cuttack corridor
            </h3>
            <p style={{
              fontFamily: SANS, fontSize: 13.5, fontWeight: 300,
              color: "rgba(255,255,255,0.45)", lineHeight: 1.7,
            }}>
              Zipto is launching initial operations along this critical urban corridor, with a long-term
              vision to expand across Odisha and Eastern India. As we grow, our focus remains on building
              a delivery network that is fast, reliable, and accessible for everyone.
            </p>
            <div style={{ marginTop: 16 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.06)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                borderRadius: 100, padding: "5px 12px",
                fontSize: 11.5, color: "rgba(255,255,255,0.5)",
                fontFamily: SANS,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                Bhubaneswar · Cuttack · Odisha
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHY CHOOSE SECTION (existing component) ── */}
      <WhyChooseSection />

      <ThinRule />

      {/* ════════════════════════════════
          CONTACT
      ════════════════════════════════ */}
      <Section bg={SURFACE}>
        <Label>Contact</Label>
        <SectionTitle size={28}>Get in touch<br />with Zipto</SectionTitle>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto",
          gap: 32, alignItems: "center",
          borderTop: `0.5px solid ${BORDER}`, paddingTop: 36,
          marginTop: 8,
        }}>
          <div>
            <BodyText style={{ fontSize: 13.5, maxWidth: 420, marginBottom: 18 }}>
              Have questions about our platform, partnership opportunities, or delivery services?
              We'd love to hear from you.
            </BodyText>
            {contactInfo.map(({ label, value, highlight }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center",
                gap: 12, marginTop: 10,
              }}>
                <span style={{ fontSize: 11.5, color: HINT, minWidth: 56, fontFamily: SANS }}>
                  {label}
                </span>
                <span style={{
                  fontSize: 13, fontWeight: highlight ? 500 : 400,
                  color: highlight ? BLUE_600 : MUTED, fontFamily: SANS,
                }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <a
            href="mailto:contact@ridezipto.com"
            style={{
              display: "inline-block",
              background: BLUE_600, border: "none",
              borderRadius: 10, padding: "12px 24px",
              fontSize: 13, fontWeight: 500,
              color: "#ffffff", textDecoration: "none",
              whiteSpace: "nowrap", fontFamily: SANS,
              transition: "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = BLUE_800}
            onMouseLeave={e => e.currentTarget.style.background = BLUE_600}
          >
            Send a message →
          </a>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <div style={{
        background: BLUE_900, padding: "36px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: SERIF, fontSize: 20, color: "#fff", fontWeight: 400 }}>
          Zipto
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: SANS }}>
          © 2025 Zipto Hyperlogistics Pvt. Ltd. · Bhubaneswar, Odisha
        </div>
      </div>

    </div>
  );
}