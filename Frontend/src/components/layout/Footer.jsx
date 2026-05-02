import { Instagram, Linkedin, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import ziptoLogo from "../../assets/zipto.jpeg";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Our Delivery Vehicles", id: "Our Delivery Vehicles" },
    { name: "For Business",          id: "for-business"          },
    { name: "Become a Rider",        id: "rider"                 },
    { name: "Contact",               id: "contact"               },
  ];

  const legalLinks = [
    { name: "Privacy Policy",        path: "/privacy-policy"       },
    { name: "Terms & Conditions",    path: "/terms-of-service"     },
    { name: "Rider Agreement",       path: "/rider-agreement"      },
    { name: "Rider Privacy Policy",  path: "/rider-privacy-policy" },
    { name: "Delete Account",        path: "/delete-account"       },
  ];

  const socials = [
    { Icon: Instagram,  href: "https://www.instagram.com/ridezipto",             label: "Instagram" },
    { Icon: FaXTwitter, href: "https://x.com/ridezipto",                         label: "X"         },
    { Icon: Linkedin,   href: "https://www.linkedin.com/company/zipto-com/",     label: "LinkedIn"  },
  ];

  const handleNavigation = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={s.footer}>
      {/* top rule */}
      <div style={s.topRule} />

      <div style={s.inner}>

        {/* ── Col 1: Brand ── */}
        <div style={s.brandCol}>
          <div style={s.logoWrap}>
            <img src={ziptoLogo} alt="Zipto" style={s.logo} />
            <span style={s.brandName}>Zipto</span>
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
                aria-label={label} style={s.socialBtn}
                onMouseEnter={e => { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.borderColor = "#93c5fd"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#f9fafb"; e.currentTarget.style.borderColor = "#e5e7eb"; }}>
                <Icon size={16} style={{ color: "#374151" }} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div>
          <p style={s.colLabel}>Quick links</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {quickLinks.map(({ name, id }) => (
              <li key={id}>
                <button onClick={() => handleNavigation(id)} style={s.linkBtn}
                  onMouseEnter={e => { e.currentTarget.style.color = "#1d4ed8"; e.currentTarget.style.paddingLeft = "6px"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#4b5563"; e.currentTarget.style.paddingLeft = "0px"; }}>
                  <ArrowUpRight size={13} style={{ flexShrink: 0, opacity: 0.5 }} />
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Contact ── */}
        <div>
          <p style={s.colLabel}>Contact us</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <li style={s.contactItem}>
              <div style={s.contactIcon}><MapPin size={14} style={{ color: "#1d4ed8" }} /></div>
              <span style={s.contactText}>Bhubaneswar, Odisha</span>
            </li>
            <li style={s.contactItem}>
              <div style={s.contactIcon}><Phone size={14} style={{ color: "#1d4ed8" }} /></div>
              <div>
                <span style={s.contactText}>+91 9090029996</span>
                <span style={s.availBadge}>24×7 available</span>
              </div>
            </li>
            <li style={s.contactItem}>
              <div style={s.contactIcon}><Mail size={14} style={{ color: "#1d4ed8" }} /></div>
              <a href="mailto:support@ridezipto.com" style={{ ...s.contactText, color: "#1d4ed8", textDecoration: "none" }}>
                support@ridezipto.com
              </a>
            </li>
          </ul>
        </div>

        {/* ── Col 4: Download CTA ── */}
        <div>
          <p style={s.colLabel}>Get the app</p>
          <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginBottom: 16 }}>
            Our app is launching soon across iOS and Android. Be the first to know.
          </p>
          {[
            { label: "App Store",    sub: "iOS",     Icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.3.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
            { label: "Google Play",  sub: "Android", Icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.98.14l11.81-6.82-2.5-2.5-10.29 9.18zm-1.41-20.7C1.47 3.4 1.5 3.7 1.5 4v16c0 .3.03.6.27.94l.08.08 8.96-8.96v-.2L1.77 3.06zm17.63 8.6L16.9 9.34l-2.77 2.77 2.77 2.77 2.52-1.45c.72-.41.72-1.08-.02-1.77zm-16.21 9.64L14.4 12l-2.5-2.5L1.35 19.82c.35.38.9.43 1.84.48z"/></svg> },
          ].map(({ label, sub, Icon }) => (
            <div key={label} style={s.storeBtn}
              onMouseEnter={e => { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.borderColor = "#93c5fd"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#f9fafb"; e.currentTarget.style.borderColor = "#e5e7eb"; }}>
              <span style={{ color: "#1d4ed8" }}><Icon /></span>
              <div style={{ lineHeight: 1.25 }}>
                <div style={{ fontSize: 10, color: "#9ca3af" }}>{sub}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{label}</div>
              </div>
              <span style={{ marginLeft: "auto", fontSize: 10, background: "#dbeafe", color: "#1d4ed8", padding: "2px 8px", borderRadius: 100, fontWeight: 500 }}>Soon</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={s.bottomBar}>
        <div style={s.bottomInner}>
          <p style={s.copyright}>
            © {new Date().getFullYear()} Zipto Hyperlogistics Pvt. Ltd. · Made with care in Bhubaneswar
          </p>
          <div style={s.legalLinks}>
            {legalLinks.map(({ name, path }, i) => (
              <span key={path} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {i > 0 && <span style={{ color: "#d1d5db" }}>·</span>}
                <Link
                  to={path}
                  style={name === "Delete Account" ? s.legalLinkDelete : s.legalLink}
                  onMouseEnter={e => e.currentTarget.style.color = name === "Delete Account" ? "#dc2626" : "#1d4ed8"}
                  onMouseLeave={e => e.currentTarget.style.color = name === "Delete Account" ? "#f87171" : "#9ca3af"}>
                  {name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    background: "#ffffff",
    borderTop: "0.5px solid #e5e7eb",
    fontFamily: "'Geist', 'Inter', sans-serif",
  },
  topRule: {
    height: 3,
    background: "linear-gradient(90deg, #1d4ed8 0%, #3b82f6 50%, #93c5fd 100%)",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "64px 40px 56px",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
    gap: 48,
  },

  /* Brand col */
  brandCol: { display: "flex", flexDirection: "column", gap: 0 },
  logoWrap: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 },
  logo: { width: 44, height: 44, borderRadius: 12, objectFit: "cover", border: "1.5px solid #dbeafe" },
  brandName: { fontSize: 20, fontWeight: 700, color: "#1e3a8a", letterSpacing: "-0.01em" },
  tagline: { fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 16 },
  badge: {
    display: "inline-flex", alignItems: "center", gap: 6,
    fontSize: 11, color: "#1d4ed8", background: "#eff6ff",
    border: "0.5px solid #bfdbfe", borderRadius: 100,
    padding: "4px 12px", marginBottom: 20, fontWeight: 500,
    width: "fit-content",
  },
  badgeDot: { width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" },
  socialRow: { display: "flex", gap: 8 },
  socialBtn: {
    width: 36, height: 36, borderRadius: 10,
    background: "#f9fafb", border: "0.5px solid #e5e7eb",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", textDecoration: "none", transition: "all 0.18s ease",
  },

  /* Column headings */
  colLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
    textTransform: "uppercase", color: "#9ca3af", marginBottom: 20,
  },

  /* Links */
  linkBtn: {
    display: "flex", alignItems: "center", gap: 6,
    background: "none", border: "none", padding: "8px 0",
    fontSize: 14, color: "#4b5563", cursor: "pointer",
    fontFamily: "inherit", textAlign: "left", width: "100%",
    transition: "color 0.15s, padding-left 0.15s",
  },

  /* Contact */
  contactItem: { display: "flex", alignItems: "flex-start", gap: 12 },
  contactIcon: {
    width: 28, height: 28, borderRadius: 8,
    background: "#eff6ff", border: "0.5px solid #bfdbfe",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  contactText: { fontSize: 14, color: "#374151", lineHeight: 1.5 },
  availBadge: {
    display: "block", fontSize: 10, fontWeight: 500,
    color: "#16a34a", background: "#f0fdf4",
    border: "0.5px solid #bbf7d0", borderRadius: 100,
    padding: "1px 8px", marginTop: 4, width: "fit-content",
  },

  /* Store buttons */
  storeBtn: {
    display: "flex", alignItems: "center", gap: 10,
    padding: "10px 14px", borderRadius: 12,
    background: "#f9fafb", border: "0.5px solid #e5e7eb",
    marginBottom: 8, cursor: "pointer", transition: "all 0.18s ease",
  },

  /* Bottom bar */
  bottomBar: {
    borderTop: "0.5px solid #f3f4f6",
    background: "#fafafa",
  },
  bottomInner: {
    maxWidth: 1200, margin: "0 auto", padding: "18px 40px",
    display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
  },
  copyright: { fontSize: 12, color: "#9ca3af" },
  legalLinks: { display: "flex", alignItems: "center", gap: 0 },
  legalLink: { fontSize: 12, color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" },
  legalLinkDelete: { fontSize: 12, color: "#f87171", textDecoration: "none", transition: "color 0.15s" },
};