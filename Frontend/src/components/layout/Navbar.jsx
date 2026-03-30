import ziptoLogo from "../../assets/zipto.jpeg";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state
  const [activeLink, setActiveLink] = useState("Home"); // ✅ active nav

  const links = [
    { name: "Home", id: "home" },
    { name: "About Us", path: "/about" },
    { name: "Vehicles", id: "Our Delivery Vehicles" },
    { name: "For Business", id: "for-business" },
    { name: "Become a Rider", id: "rider" },
    { name: "Contact", id: "contact" },
  ];

const handleNavigation = (link) => {
  setActiveLink(link.name);

  const section = document.getElementById(link.id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  return (
    <>
      <nav className="w-full bg-[#070F1F] text-white px-10 py-4 flex items-center justify-between shadow-xl sticky top-0 z-50">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className=" rounded-xl shadow-md">
            <img
              src={ziptoLogo}
              alt="logo"
              className="h-20 w-20 rounded-lg "
            />
          </div>
          <span
  className="text-4xl tracking-wide flex items-center "
  style={{ fontFamily: "cocon, sans-serif" }}
>
  
</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {links.map((link, index) =>
            link.path ? (
              <Link
                key={index}
                to={link.path}
                onClick={() => setActiveLink(link.name)}
                className="relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition duration-300 hover:bg-white/5"
              >
                {link.name}

                {/* ✅ Active underline */}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-orange-500 rounded-full"></span>
                )}
              </Link>
            ) : (
              <li
                key={index}
                onClick={() => handleNavigation(link)}
                className="relative px-4 py-2 rounded-lg text-gray-300 hover:text-white cursor-pointer transition duration-300 hover:bg-white/5"
              >
                {link.name}

                {/* ✅ Active underline */}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-orange-500 rounded-full"></span>
                )}
              </li>
            )
          )}
        </ul>

        {/* ✅ Download Button (Popup Trigger) */}
        <button
          onClick={() => setShowPopup(true)}
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md transition duration-300"
        >
          <FaDownload /> Download App
        </button>

        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        {/* Mobile Menu */}
        {open && (
         <div className="absolute top-full left-0 w-full bg-[#070F1F] flex flex-col items-start py-6 px-6 gap-4 md:hidden border-t border-white/10">
           {links.map((link, index) =>
  link.path ? (
    <Link
      key={index}
      to={link.path}
      onClick={() => {
        setActiveLink(link.name);
        setOpen(false);
      }}
      className="w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
    >
      {link.name}
    </Link>
  ) : (
    <li
      key={index}
      onClick={() => {
        setOpen(false);
        handleNavigation(link);
      }}
      className="w-full list-none text-left px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer transition"
    >
      {link.name}
    </li>
  )
)}

            {/* ✅ Mobile Download */}
           <button
  onClick={() => {
    setOpen(false);
    setShowPopup(true);
  }}
  className="flex items-center gap-2 bg-orange-500 px-5 py-2 rounded-lg ml-1"
>
  <FaDownload /> Download App
</button>
          </div>
        )}
      </nav>

      {/* ✅ SAME POPUP */}
{showPopup && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50">

    {/* Glow Effects */}
    <div className="absolute w-72 h-72 bg-orange-500/20 blur-3xl rounded-full top-10 left-10"></div>
    <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

    {/* Gradient Border Wrapper */}
    <div className="w-[340px] p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">

      {/* Glass Card */}
      <div className="relative bg-[#0B1220]/90 backdrop-blur-xl rounded-3xl p-8 text-center">

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
        >
          ✕
        </button>

        {/* Icon Circle */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg">
          <FaDownload className="text-white text-xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Coming Soon 🚀
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Our mobile app is on the way.  
          Get ready for a faster & smoother delivery experience.
        </p>

        {/* Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="w-full py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
          hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)]
          transition-all duration-300"
        >
          Got it 👍
        </button>

      </div>
    </div>
  </div>
)}
    </>
  );
}
