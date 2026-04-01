import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import ziptoLogo from "../../assets/zipto.jpeg";
import { Link } from "react-router-dom";

export default function Footer() {

    // same links as navbar
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
  

   const socials = [
  // {
  //   icon: Facebook,
  //   link: "https://www.facebook.com/login.php/",
  // },
  {
    icon: Instagram,
    link: "https://www.instagram.com/ridezipto?igsh=ZDNldGp6YjN2YXZx",
  },
  {
    icon: Twitter,
    link: "https://x.com/ridezipto",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/zipto-com/",
  },
];

  return (
      <>
    <footer className="bg-white text-black relative overflow-hidden">
      
      {/* Top Gradient Border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-orange-500"></div>

      {/* Increased Height */}
      <div className="max-w-7xl mx-auto px-6 py-28 grid gap-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="bg-gradient-to-tr from-blue-600 to-orange-600 p-1 rounded-lg shadow-lg flex items-center justify-center"> */}
              <img
                src={ziptoLogo}
                alt="Zipto Logo"
                className="h-20 w-20 rounded-lg"
              />
            {/* </div> */}
            
          </div>

          <p className="text-black-400 leading-relaxed mb-8">
  Fast, reliable, and affordable logistics solutions built for businesses and individuals.
</p>

          {/* Social Icons */}
          <div className="flex gap-4">
  {socials.map((social, i) => {
    const Icon = social.icon;

    return (
      <a
        key={i}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-orange-500 hover:text-black transition duration-300 cursor-pointer"
      >
        <Icon size={18} />
       
      </a>
    );
  })}
</div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-black font-semibold text-xl mb-8">
            Quick Links
          </h4>
          <ul className="space-y-4 list-disc marker:text-blue-500 pl-5">
            {links.map((link, i) => (
              <li
                key={i}
                onClick={() => handleNavigation(link)}
                className="hover:text-black hover:translate-x-1 transition duration-200 cursor-pointer"
                >
                  {link.name}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Business */}
        {/* <div>
          <h4 className="text-white font-semibold text-xl mb-8">
            Business
          </h4>
          <ul className="space-y-4 list-disc marker:text-blue-500 pl-5">
            {[
              "Partner With Us",
              "Enterprise Solutions",
              "API Integration",
              "Bulk Orders",
            ].map((link, i) => (
              <li
                key={i}
                className="hover:text-white hover:translate-x-1 transition duration-200 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact Info */}
        <div>
          <h4 className="text-black font-semibold text-xl mb-8">
            Contact Us
          </h4>

          <ul className="space-y-5 list-disc marker:text-blue-500 pl-5">
            
            <li className="flex items-start gap-3">
  <MapPin
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
    stroke="url(#ziptoGradient)"
    strokeWidth={2}
  />
  <span className="text-sm sm:text-base">
    Plot No-781, Maharishi College Rd, in front of DN Kingsland, Saheed Nagar, Bhubaneswar, Odisha 751007
  </span>
</li>

            <li className="flex items-center gap-3">
              <Phone
                size={20}
                stroke="url(#ziptoGradient)"
                strokeWidth={2}
              />
              <span>+91 9090029996</span>
             
            </li>
             <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full w-fit">
  24×7 Available
</span>

            <li className="flex items-center gap-3">
              <Mail
                size={20}
                stroke="url(#ziptoGradient)"
                strokeWidth={2}
              />
              <span> support@ridezipto.com</span>
            </li>
           

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          
          <p> © {new Date().getFullYear()} Zipto. All rights reserved. Made with ❤️ in Bhubaneswar </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
  to="/privacy-policy"
  className="hover:text-orange transition"
>
  Privacy Policy
</Link>
            <Link
              to="/terms-of-service"
              className="hover:text-orange cursor-pointer transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* SVG Gradient Definition (Required for Icon Gradient) */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="ziptoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

    </footer>

          )
     
           {/* CONTACT MODAL */}
         
           {/* Animation */}
           <style>
             {`
               .animate-popup {
                 animation: popup 0.35s ease-out;
               }
               @keyframes popup {
                 from {
                   transform: scale(0.85);
                   opacity: 0;
                 }
                 to {
                   transform: scale(1);
                   opacity: 1;
                 }
               }
             `}
           </style>
         
    
 </>
  );
}
