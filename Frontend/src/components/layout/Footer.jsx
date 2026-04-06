import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // ✅ New X icon
import ziptoLogo from "../../assets/zipto.jpeg";
import { Link } from "react-router-dom";

export default function Footer() {

  const links = [
    { name: "Our Delivery Vehicles", id: "Our Delivery Vehicles" },
    { name: "For Business", id: "for-business" },
    { name: "Become a Rider", id: "rider" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (link) => {
    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ✅ Socials with original colors
  const socials = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/ridezipto",
      color: "text-pink-500",
      bg: "hover:bg-pink-100",
    },
    {
      icon: FaXTwitter, // ✅ Updated icon
      link: "https://x.com/ridezipto",
      color: "text-black",
      bg: "hover:bg-gray-200",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/company/zipto-com/",
      color: "text-blue-600",
      bg: "hover:bg-blue-100",
    },
  ];

  return (
    <>
      <footer className="bg-white text-black relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-orange-500"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={ziptoLogo}
                alt="Zipto Logo"
                className="h-20 w-20 rounded-lg"
              />
            </div>

            <p className="leading-relaxed mb-8">
              Deliver anything, anytime — fast, reliable, and hassle-free.
            </p>

            {/* ✅ Social Icons */}
            <div className="flex gap-4">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center transition duration-300 ${social.bg}`}
                  >
                    <Icon size={18} className={`${social.color}`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4 list-disc marker:text-blue-500 pl-5">
              {links.map((link, i) => (
                <li
                  key={i}
                  onClick={() => handleNavigation(link)}
                  className="hover:translate-x-1 transition duration-200 cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xl mb-8">Contact Us</h4>

            <ul className="space-y-5 list-disc marker:text-blue-500 pl-5">

              <li className="flex items-start gap-3">
                <MapPin size={20} stroke="url(#ziptoGradient)" strokeWidth={2} />
                <span>Bhubaneswar, Odisha</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={20} stroke="url(#ziptoGradient)" strokeWidth={2} />
                <span>+91 9090029996</span>
              </li>

              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full w-fit">
                24×7 Available
              </span>

              <li className="flex items-center gap-3">
                <Mail size={20} stroke="url(#ziptoGradient)" strokeWidth={2} />
                <span>support@ridezipto.com</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

            <p>
              © {new Date().getFullYear()} Zipto. All rights reserved. Made with ❤️ in Bhubaneswar
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-orange">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-orange">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="ziptoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>

      </footer>
    </>
  );
}
