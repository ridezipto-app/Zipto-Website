import ziptoLogo from "../../assets/zipto.jpeg";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { name: "Home", id: "home" },
    { name: "About Us", path: "/about" },
    { name: "Vehicles", id: "Our Delivery Vehicles" },
    { name: "For Business", id: "for-business" },
    { name: "Become a Rider", id: "rider" },
    
  ];

  const handleNavigation = (link) => {
    setActiveLink(link.name);
    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-[#070F1F] text-white sticky top-0 z-50 shadow-lg">
        
        {/* CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={ziptoLogo}
              alt="logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg"
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-[15px] font-medium">
            {links.map((link, index) =>
              link.path ? (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setActiveLink(link.name)}
                  className="relative px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-orange-500 rounded-full"></span>
                  )}
                </Link>
              ) : (
                <li
                  key={index}
                  onClick={() => handleNavigation(link)}
                  className="relative px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer transition"
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-orange-500 rounded-full"></span>
                  )}
                </li>
              )
            )}
          </ul>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => setShowPopup(true)}
            className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm shadow-md transition"
          >
            <FaDownload />
            <span className="hidden lg:inline">Download App</span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <div
            className="md:hidden text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#070F1F] border-t border-white/10 px-6 py-5 space-y-4">
            {links.map((link, index) =>
              link.path ? (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => {
                    setActiveLink(link.name);
                    setOpen(false);
                  }}
                  className="block w-full text-gray-300 hover:text-white py-2 transition"
                >
                  {link.name}
                </Link>
              ) : (
                <div
                  key={index}
                  onClick={() => {
                    setOpen(false);
                    handleNavigation(link);
                  }}
                  className="text-gray-300 hover:text-white py-2 cursor-pointer transition"
                >
                  {link.name}
                </div>
              )
            )}

            {/* MOBILE BUTTON */}
            <button
              onClick={() => {
                setOpen(false);
                setShowPopup(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 py-2 rounded-lg font-medium"
            >
              <FaDownload />
              Download App
            </button>
          </div>
        )}
      </nav>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 px-4">

          <div className="w-full max-w-sm p-[1.5px] rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">

            <div className="bg-[#0B1220]/95 rounded-2xl p-6 sm:p-8 text-center relative">

              {/* CLOSE */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* ICON */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-pink-500">
                <FaDownload className="text-white" />
              </div>

              {/* TEXT */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Coming Soon 🚀
              </h2>

              <p className="text-gray-400 text-sm mb-5">
                Our mobile app is on the way. Get ready for a better experience.
              </p>

              {/* BUTTON */}
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
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
