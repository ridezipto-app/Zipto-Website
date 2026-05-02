import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import WhyChooseSection from "../components/home/WhyChooseSection";
import Navbar from "../components/layout/Navbar";

/* ─── Google Fonts import (add to your index.html or global CSS) ───────────
   <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
   ────────────────────────────────────────────────────────────────────────── */

const SERIF   = "'DM Serif Display', Georgia, serif";
const SANS    = "'DM Sans', 'Inter', sans-serif";

/* ── Tokens ── */
const INK     = "#0d1117";
const MUTED   = "#6b7280";
const HINT    = "#9ca3af";
const BG      = "#f9fafb";
const SURFACE = "#ffffff";
const BORDER  = "rgba(0,0,0,0.08)";
const NAVY    = "#0a1628";

const deliveries = [
  { icon: "🏍️", title: "Bike",       desc: "Documents, medicines & food deliveries" },
  { icon: "🛵",  title: "Scooty",     desc: "Lightweight & quick hyperlocal runs"     },
  { icon: "🛺",  title: "Auto",       desc: "Medium parcels & business shipments"     },
  { icon: "🚗",  title: "Pickup",     desc: "Larger goods & retail inventory"         },
  { icon: "🚚",  title: "Mini Truck", desc: "Bulk shipments & heavy goods"            },
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
  { num: "01", title: "Real-time tracking",    desc: "Live delivery status with accurate ETAs so you're always in the know."              },
  { num: "02", title: "Flexible fleet",         desc: "Five vehicle types to match any parcel — from envelopes to bulk freight."           },
  { num: "03", title: "Partner ecosystem",      desc: "A growing network of verified delivery partners built for reliability."             },
  { num: "04", title: "Transparent pricing",    desc: "No hidden fees. Competitive rates for businesses and individuals alike."            },
  { num: "05", title: "Local-first focus",      desc: "Designed specifically for Odisha's cities — not a generic national template."       },
  { num: "06", title: "Seamless onboarding",    desc: "Quick setup for businesses. Start dispatching within minutes of signing up."        },
];

/* ── Reusable primitives ── */

function ThinRule() {
  return <div style={{ height: "0.5px", background: BORDER }} />;
}

function Label({ children, color = MUTED }) {
  return (
    <p style={{
      fontFamily: SANS, fontSize: 10.5, fontWeight: 600,
      letterSpacing: "0.13em", textTransform: "uppercase",
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
  return <div style={{ width: 36, height: 2, background: BORDER, margin: "18px 0" }} />;
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

/* ── Section wrapper ── */
function Section({ bg = SURFACE, children, style = {} }) {
  return (
    <section style={{ background: bg, padding: "64px 48px", ...style }}>
      {children}
    </section>
  );
}

/* ── Icon box ── */
function IconBox({ children, bg = "#e6f1fb" }) {
  return (
    <div style={{
      width: 38, height: 38, borderRadius: 10,
      background: bg, display: "flex",
      alignItems: "center", justifyContent: "center",
      fontSize: 16, marginBottom: 16,
    }}>
      {children}
    </div>
  );
}

/* ── Card ── */
function Card({ children, style = {} }) {
  return (
    <div style={{
      background: SURFACE, border: `0.5px solid ${BORDER}`,
      borderRadius: 14, padding: "28px 24px", ...style,
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

      {/* ── BACK BUTTON ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 48px 0" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: SURFACE, border: `0.5px solid ${BORDER}`,
            borderRadius: 10, padding: "8px 16px",
            fontSize: 13, fontWeight: 500, color: "#185fa5",
            cursor: "pointer", fontFamily: SANS,
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#e6f1fb"}
          onMouseLeave={e => e.currentTarget.style.background = SURFACE}
        >
          <FaArrowLeft style={{ fontSize: 11 }} />
          Back to Home
        </button>
      </div>

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <div style={{
        background: NAVY,
        padding: "72px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative rings */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 420, height: 420, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: "30%",
          width: 300, height: 300, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }} />

        {/* logo */}
        <img src={ziptoLogo} alt="Zipto"
          style={{
            width: 52, height: 52, borderRadius: 12,
            objectFit: "cover",
            border: "1px solid rgba(255,255,255,0.12)",
            marginBottom: 22,
            position: "relative", zIndex: 1,
          }}
        />

        {/* eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
          marginBottom: 20, position: "relative", zIndex: 1,
        }}>
          <span style={{ width: 20, height: 1, background: "rgba(255,255,255,0.2)" }} />
          Zipto Hyperlogistics Pvt. Ltd.
        </div>

        {/* headline */}
        <h1 style={{
          fontFamily: SERIF, fontSize: 52, fontWeight: 400,
          lineHeight: 1.08, color: "#ffffff",
          letterSpacing: "-0.02em",
          maxWidth: 560, marginBottom: 20,
          position: "relative", zIndex: 1,
        }}>
          Delivering <em style={{ fontStyle: "italic", color: "#7eb3ff" }}>smarter,</em>
          <br />moving faster.
        </h1>

        {/* subtext */}
        <p style={{
          fontFamily: SANS, fontSize: 15, fontWeight: 300,
          color: "rgba(255,255,255,0.5)", maxWidth: 480,
          lineHeight: 1.7, marginBottom: 32,
          position: "relative", zIndex: 1,
        }}>
          A technology-driven platform built to simplify and accelerate
          last-mile delivery for businesses and individuals across India.
        </p>

        {/* live badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "rgba(255,255,255,0.06)",
          border: "0.5px solid rgba(255,255,255,0.1)",
          borderRadius: 100, padding: "6px 14px",
          fontSize: 12, color: "rgba(255,255,255,0.55)",
          position: "relative", zIndex: 1,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80" }} />
          Now live · Bhubaneswar – Cuttack corridor
        </div>
      </div>

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
            <IconBox bg="#e6f1fb">🚀</IconBox>
            <Label>Our vision</Label>
            <h3 style={{
              fontFamily: SERIF, fontSize: 18, fontWeight: 400,
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
          <Card>
            <IconBox bg="#faeeda">👥</IconBox>
            <Label color="#ba7517">Our mission</Label>
            <h3 style={{
              fontFamily: SERIF, fontSize: 18, fontWeight: 400,
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
                    width: 4, height: 4, borderRadius: "50%",
                    background: HINT, flexShrink: 0, marginTop: 7,
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
            <IconBox bg="#e6f1fb">📦</IconBox>
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
                background: BG, border: `0.5px solid ${BORDER}`,
                borderRadius: 10, padding: "14px 16px",
                fontSize: 13, color: MUTED, fontFamily: SANS,
                display: "flex", alignItems: "flex-start",
                gap: 10, lineHeight: 1.55, fontWeight: 300,
              }}>
                <span style={{
                  width: 3, height: 3, borderRadius: "50%",
                  background: HINT, flexShrink: 0, marginTop: 7,
                }} />
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
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,0,0,0.16)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: BG, display: "flex",
                alignItems: "center", justifyContent: "center",
                margin: "0 auto 12px", fontSize: 22,
              }}>
                {item.icon}
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
            <div key={i} style={{
              background: BG, border: `0.5px solid ${BORDER}`,
              borderRadius: 14, padding: "22px 20px",
            }}>
              <div style={{
                fontFamily: SERIF, fontSize: 28, fontWeight: 400,
                color: HINT, marginBottom: 8, lineHeight: 1,
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
          background: NAVY, borderRadius: 16,
          padding: "36px 40px",
          display: "grid", gridTemplateColumns: "auto 1fr",
          gap: 28, alignItems: "flex-start",
        }}>
          {/* icon */}
          <div style={{
            width: 50, height: 50, borderRadius: "50%",
            border: "0.5px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 20, flexShrink: 0,
          }}>
            📍
          </div>
          <div>
            <p style={{
              fontFamily: SANS, fontSize: 11, fontWeight: 500,
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
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
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
            {[
              { label: "Email",   value: "contact@ridezipto.com" },
              { label: "Phone",   value: "+91 9090029996"          },
              { label: "Address", value: "Bhubaneswar, Odisha"    },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center",
                gap: 12, marginTop: 10,
              }}>
                <span style={{ fontSize: 11.5, color: HINT, minWidth: 52, fontFamily: SANS }}>
                  {label}
                </span>
                <span style={{ fontSize: 13, color: MUTED, fontWeight: 400, fontFamily: SANS }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <a
            href="mailto:contact@ridezipto.com"
            style={{
              display: "inline-block",
              background: SURFACE, border: `0.5px solid rgba(0,0,0,0.15)`,
              borderRadius: 10, padding: "11px 22px",
              fontSize: 13, fontWeight: 500,
              color: INK, textDecoration: "none",
              whiteSpace: "nowrap", fontFamily: SANS,
              transition: "background 0.15s, border-color 0.15s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = BG;
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.25)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = SURFACE;
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
            }}
          >
            Send a message →
          </a>
        </div>
      </Section>

    </div>
  );
}