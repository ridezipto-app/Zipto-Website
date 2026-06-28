import { Instagram, Linkedin, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import ziptoLogo from "../../assets/b_logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Our Delivery Vehicles", id: "Our Delivery Vehicles" },
    { name: "For Business",          id: "for-business"          },
    { name: "Become a Rider",        id: "rider"                 },
    { name: "Contact",               path: "/contact"            },
  ];

  const legalLinks = [
    { name: "Privacy Policy",           path: "/privacy-policy"           },
    { name: "Terms & Conditions",       path: "/terms-of-service"         },
    { name: "Rider Agreement",          path: "/rider-agreement"          },
    { name: "Rider Privacy Policy",     path: "/rider-privacy-policy"     },
    { name: "Rider Terms & Conditions", path: "/rider-terms-of-service"   },
    { name: "Delete Account",           path: "/delete-account"           },
  ];

  const socials = [
    { Icon: Instagram,  href: "https://www.instagram.com/ridezipto",         label: "Instagram" },
    { Icon: FaXTwitter, href: "https://x.com/ridezipto",                     label: "X"         },
    { Icon: Linkedin,   href: "https://www.linkedin.com/company/zipto-com/", label: "LinkedIn"  },
  ];

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px 60px;
        }
        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-legal-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
        }
        .footer-social-btn:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.22) !important;
        }
        .footer-link-btn:hover { color: #60A5FA !important; padding-left: 6px !important; }
        .footer-store-btn:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; padding: 56px 28px 48px; }
          .footer-brand-col { grid-column: 1 / -1; }
          .footer-bottom-inner { padding: 16px 28px; flex-direction: column; align-items: flex-start; gap: 10px; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; gap: 36px; padding: 44px 20px 40px; }
          .footer-brand-col { grid-column: auto; }
          .footer-bottom-inner { padding: 14px 20px; }
          .footer-legal-links { flex-direction: column; align-items: flex-start; gap: 6px; }
          .footer-legal-sep { display: none !important; }
        }
      `}</style>

      <footer style={s.footer}>
        {/* Ambient glow */}
        <div style={{
          position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
          width: "700px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 65%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        {/* Top divider */}
        <div style={s.topRule} />

        <div className="footer-grid" style={{ position: "relative", zIndex: 1 }}>

          {/* ── Col 1: Brand ── */}
          <div className="footer-brand-col" style={s.brandCol}>
            <div style={s.logoWrap}>
              <img src={ziptoLogo} alt="bookfleet" style={s.logo} />
              <span style={s.brandName}>bookfleet</span>
            </div>
            <p style={s.tagline}>
              Deliver anything, anytime —<br />
              fast, reliable, and hassle-free<br />
              across Odisha.
            </p>
            <div style={s.badge}>
              <span style={s.badgeDot} />
              Serving Bhubaneswar · Cuttack & beyond
            </div>
            <div style={s.socialRow}>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} style={s.socialBtn} className="footer-social-btn">
                  <Icon size={16} style={{ color: "rgba(255,255,255,0.65)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <p style={s.colLabel}>Quick links</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
              {quickLinks.map(({ name, id, path }) => (
                <li key={name}>
                  {path ? (
                    <Link to={path} style={s.linkBtn} className="footer-link-btn">
                      <ArrowUpRight size={13} style={{ flexShrink: 0, opacity: 0.35 }} />
                      {name}
                    </Link>
                  ) : (
                    <button onClick={() => handleNavigation(id)} style={s.linkBtn} className="footer-link-btn">
                      <ArrowUpRight size={13} style={{ flexShrink: 0, opacity: 0.35 }} />
                      {name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <p style={s.colLabel}>Contact us</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <li style={s.contactItem}>
                <div style={s.contactIcon}><MapPin size={14} style={{ color: "#60A5FA" }} /></div>
                <span style={s.contactText}>Bhubaneswar, Odisha</span>
              </li>
              <li style={s.contactItem}>
                <div style={s.contactIcon}><Phone size={14} style={{ color: "#60A5FA" }} /></div>
                <div>
                  <span style={s.contactText}>+91 9090029996</span>
                  <span style={s.availBadge}>24×7 available</span>
                </div>
              </li>
              <li style={s.contactItem}>
                <div style={s.contactIcon}><Mail size={14} style={{ color: "#60A5FA" }} /></div>
                <a href="mailto:support@bookfleet.in" style={{ ...s.contactText, color: "#60A5FA", textDecoration: "none" }}>
                  support@bookfleet.in
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Download CTA ── */}
          <div>
            <p style={s.colLabel}>Get the app</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: 16 }}>
              Our app is launching soon across iOS and Android. Be the first to know.
            </p>
            {[
              { label: "App Store",   sub: "iOS",     Icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.3.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
              { label: "Google Play", sub: "Android", Icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.98.14l11.81-6.82-2.5-2.5-10.29 9.18zm-1.41-20.7C1.47 3.4 1.5 3.7 1.5 4v16c0 .3.03.6.27.94l.08.08 8.96-8.96v-.2L1.77 3.06zm17.63 8.6L16.9 9.34l-2.77 2.77 2.77 2.77 2.52-1.45c.72-.41.72-1.08-.02-1.77zm-16.21 9.64L14.4 12l-2.5-2.5L1.35 19.82c.35.38.9.43 1.84.48z"/></svg> },
            ].map(({ label, sub, Icon }) => (
              <div key={label} style={s.storeBtn} className="footer-store-btn">
                <span style={{ color: "#60A5FA" }}><Icon /></span>
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{sub}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{label}</div>
                </div>
                <span style={{ marginLeft: "auto", fontSize: 10, background: "rgba(96,165,250,0.12)", color: "#60A5FA", padding: "2px 8px", borderRadius: 100, fontWeight: 500, border: "1px solid rgba(96,165,250,0.22)" }}>Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={s.bottomBar}>
          <div className="footer-bottom-inner">
            <p style={s.copyright}>
              © {new Date().getFullYear()} Zipto Hyperlogistics Pvt. Ltd. · Made with care in Bhubaneswar
            </p>
            <div className="footer-legal-links">
              {legalLinks.map(({ name, path }, i) => (
                <span key={path} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  {i > 0 && <span className="footer-legal-sep" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>}
                  <Link
                    to={path}
                    style={name === "Delete Account" ? s.legalLinkDelete : s.legalLink}
                    onMouseEnter={e => e.currentTarget.style.color = name === "Delete Account" ? "#FCA5A5" : "#60A5FA"}
                    onMouseLeave={e => e.currentTarget.style.color = name === "Delete Account" ? "#F87171" : "rgba(255,255,255,0.3)"}>
                    {name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const s = {
  footer: {
    background: "#060B18",
    fontFamily: "'Geist', 'Inter', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  topRule: {
    height: 1,
    background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.35) 30%, rgba(96,165,250,0.35) 70%, transparent)",
  },

  brandCol: { display: "flex", flexDirection: "column", gap: 0 },
  logoWrap: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 },
  logo: { width: 44, height: 44, borderRadius: 12, objectFit: "contain", background: "#1d4ed8", border: "1px solid rgba(255,255,255,0.12)", padding: 4 },
  brandName: { fontSize: 20, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em", fontFamily: "Cocon, sans-serif" },
  tagline: { fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, marginBottom: 16 },
  badge: {
    display: "inline-flex", alignItems: "center", gap: 6,
    fontSize: 11, color: "#60A5FA",
    background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.18)",
    borderRadius: 100, padding: "4px 12px", marginBottom: 20, fontWeight: 500, width: "fit-content",
  },
  badgeDot: { width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" },
  socialRow: { display: "flex", gap: 8 },
  socialBtn: {
    width: 36, height: 36, borderRadius: 10,
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", textDecoration: "none", transition: "all 0.18s ease",
  },

  colLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
    textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 20,
  },

  linkBtn: {
    display: "flex", alignItems: "center", gap: 6,
    background: "none", border: "none", padding: "8px 0",
    fontSize: 14, color: "rgba(255,255,255,0.5)", cursor: "pointer",
    fontFamily: "inherit", textAlign: "left", width: "100%",
    transition: "color 0.15s, padding-left 0.15s",
  },

  contactItem: { display: "flex", alignItems: "flex-start", gap: 12 },
  contactIcon: {
    width: 28, height: 28, borderRadius: 8,
    background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.18)",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  contactText: { fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 },
  availBadge: {
    display: "block", fontSize: 10, fontWeight: 500,
    color: "#34D399", background: "rgba(52,211,153,0.08)",
    border: "1px solid rgba(52,211,153,0.18)", borderRadius: 100,
    padding: "1px 8px", marginTop: 4, width: "fit-content",
  },

  storeBtn: {
    display: "flex", alignItems: "center", gap: 10,
    padding: "10px 14px", borderRadius: 12,
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
    marginBottom: 8, cursor: "pointer", transition: "all 0.18s ease",
  },

  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(0,0,0,0.2)",
  },
  copyright: { fontSize: 12, color: "rgba(255,255,255,0.28)" },
  legalLink: { fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.15s" },
  legalLinkDelete: { fontSize: 12, color: "#F87171", textDecoration: "none", transition: "color 0.15s" },
};
