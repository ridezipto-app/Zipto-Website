import ziptoLogo from "../../assets/zipto_logo.jpeg";
import { FaDownload, FaBars, FaTimes, FaApple, FaGooglePlay } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  const links = [
    { name: "Home",           id: "home"                  },
    { name: "About Us",       path: "/about"              },
    { name: "Vehicles",       id: "Our Delivery Vehicles" },
    { name: "For Business",   id: "for-business"          },
    { name: "Become a Rider", id: "rider"                 },
  ];

  const handleNavigation = (link) => {
    setActiveLink(link.name);
    const section = document.getElementById(link.id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const mobileMenuVariants = {
    hidden:  { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.055, delayChildren: 0.04 } },
    exit:    { opacity: 0, height: 0,      transition: { duration: 0.2, ease: "easeInOut" } },
  };
  const mobileLinkVariants = {
    hidden:  { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0,   transition: { ease: [0.22, 1, 0.36, 1] } },
  };
  const popupOverlayVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.18 } },
    exit:    { opacity: 0, transition: { duration: 0.15 } },
  };
  const popupCardVariants = {
    hidden:  { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1,   y: 0, transition: { type: "spring", stiffness: 320, damping: 26, delay: 0.05 } },
    exit:    { opacity: 0, scale: 0.93, y: 12, transition: { duration: 0.16 } },
  };

  const navBase = "w-full sticky top-0 z-50 transition-all duration-300";
  const navScrolled = "bg-white/95 backdrop-blur-xl shadow-[0_1px_24px_rgba(30,64,175,0.10)] border-b border-blue-100";
  const navDefault  = "bg-white border-b border-blue-50";

  return (
    <>
      {/* ── NAVBAR ── */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 28, delay: 0.08 }}
        className={`${navBase} ${scrolled ? navScrolled : navDefault}`}
      >
        {/* top accent line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #1d4ed8 40%, #3b82f6 60%, transparent)", opacity: 0.7 }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-6">

          {/* ── LOGO ── */}
       <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}
  className="flex items-center gap-3 cursor-pointer select-none"
>
  <div className="relative">
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: 12,
        background: "rgba(59,130,246,0.15)",
        filter: "blur(8px)",
        transform: "scale(1.1)",
        pointerEvents: "none",
      }}
    />
    <img
      src={ziptoLogo}
      alt="Zipto logo"
      className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl object-cover"
      style={{ border: "1.5px solid rgba(59,130,246,0.25)" }}
    />
  </div>

  <span
    style={{
      fontWeight: 700,
      fontSize: 20,
      color: "#1e3a8a",
      letterSpacing: "0.3px",
      fontFamily: "Cocon, sans-serif",
    }}
    className="hidden sm:block"
  >
    Zipto
  </span>
</motion.div>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden md:flex items-center gap-0.5 text-[13.5px] font-medium">
            {links.map((link, i) => {
              const isActive = activeLink === link.name;

              const inner = (
                <>
                  <span style={{ position: "relative", zIndex: 1, color: isActive ? "#1d4ed8" : "#4b5563" }}>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      style={{ position: "absolute", inset: 0, background: "#eff6ff", borderRadius: 8 }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      style={{ position: "absolute", bottom: 5, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#1d4ed8" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </>
              );

              const cls = "relative flex items-center px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 cursor-pointer list-none";

              return link.path ? (
                <motion.div key={i} whileTap={{ scale: 0.96 }}>
                  <Link to={link.path} onClick={() => setActiveLink(link.name)}
                    className="relative flex items-center px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-150"
                    style={{ color: isActive ? "#1d4ed8" : "#4b5563" }}>
                    {inner}
                  </Link>
                </motion.div>
              ) : (
                <motion.li key={i} whileTap={{ scale: 0.96 }}
                  onClick={() => handleNavigation(link)}
                  className={cls}>
                  {inner}
                </motion.li>
              );
            })}
          </ul>

          {/* ── DESKTOP CTA ── */}
          <motion.button
            onClick={() => setShowPopup(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "#1d4ed8", boxShadow: "0 4px 18px rgba(29,78,216,0.28)", border: "none", cursor: "pointer", fontFamily: "inherit" }}
          >
            <FaDownload style={{ fontSize: 11 }} />
            Download App
          </motion.button>

          {/* ── MOBILE HAMBURGER ── */}
          <motion.button
            className="md:hidden p-2 rounded-lg transition"
            style={{ color: "#1d4ed8", background: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="close"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.16 }}>
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span key="open"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.16 }}>
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden" animate="visible" exit="exit"
              className="md:hidden overflow-hidden"
              style={{ borderTop: "0.5px solid #dbeafe", background: "#f8faff" }}
            >
              <div className="px-5 pt-4 pb-5 space-y-1">
                {links.map((link, i) => {
                  const item = (action) => (
                    <motion.div key={i} variants={mobileLinkVariants}>
                      <div onClick={action}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition"
                        style={{ color: "#374151", fontSize: 14, fontWeight: 500 }}
                        onMouseEnter={e => e.currentTarget.style.background = "#eff6ff"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block", flexShrink: 0 }} />
                        {link.name}
                      </div>
                    </motion.div>
                  );
                  return link.path
                    ? <motion.div key={i} variants={mobileLinkVariants}>
                        <Link to={link.path} onClick={() => { setActiveLink(link.name); setOpen(false); }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl transition"
                          style={{ color: "#374151", fontSize: 14, fontWeight: 500, display: "flex" }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
                          {link.name}
                        </Link>
                      </motion.div>
                    : item(() => { setOpen(false); handleNavigation(link); });
                })}
                <motion.div variants={mobileLinkVariants} className="pt-2">
                  <button onClick={() => { setOpen(false); setShowPopup(true); }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white"
                    style={{ background: "#1d4ed8", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                    <FaDownload style={{ fontSize: 11 }} />
                    Download App
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── POPUP ── */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            variants={popupOverlayVariants}
            initial="hidden" animate="visible" exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(15,23,42,0.5)", backdropFilter: "blur(10px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) setShowPopup(false); }}
          >
            <motion.div variants={popupCardVariants} style={{ width: "100%", maxWidth: 360 }}>
              {/* card */}
              <div style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #bfdbfe",
                boxShadow: "0 24px 64px rgba(29,78,216,0.14), 0 4px 16px rgba(0,0,0,0.06)",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* subtle top band */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #1d4ed8, #3b82f6)" }} />

                {/* close */}
                <motion.button
                  onClick={() => setShowPopup(false)}
                  whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }}
                  style={{ position: "absolute", top: 16, right: 16, width: 28, height: 28, borderRadius: "50%", border: "0.5px solid #e5e7eb", background: "#f9fafb", color: "#6b7280", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>
                  ✕
                </motion.button>

                {/* icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.12 }}
                  style={{ width: 56, height: 56, margin: "0 auto 20px", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "#1d4ed8", boxShadow: "0 8px 24px rgba(29,78,216,0.32)" }}>
                  <FaDownload style={{ color: "#fff", fontSize: 18 }} />
                </motion.div>

                {/* text */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.28 }}
                  style={{ textAlign: "center", marginBottom: 24 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 8, letterSpacing: "-0.01em" }}>
                    Launching Soon
                  </h2>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>
                    Our app is almost here. Be the first to experience faster, smarter deliveries across Odisha.
                  </p>
                </motion.div>

                {/* platform badges */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.28 }}
                  style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                  {[
                    { icon: <FaApple />, label: "App Store",   sub: "iOS"     },
                    { icon: <FaGooglePlay />, label: "Google Play", sub: "Android" },
                  ].map((p, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 12, background: "#f0f7ff", border: "0.5px solid #bfdbfe", color: "#374151" }}>
                      <span style={{ fontSize: 16, color: "#1d4ed8" }}>{p.icon}</span>
                      <div style={{ lineHeight: 1.3 }}>
                        <p style={{ fontSize: 10, color: "#6b7280", marginBottom: 1 }}>{p.sub}</p>
                        <p style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>{p.label}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.button
                  onClick={() => setShowPopup(false)}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.30, duration: 0.26 }}
                  style={{ width: "100%", padding: "12px 0", borderRadius: 12, background: "#1d4ed8", color: "#fff", fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.01em" }}>
                  Got it, notify me
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}