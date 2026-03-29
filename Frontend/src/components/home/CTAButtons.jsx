import { useState } from "react";
import { FaDownload, FaUser } from "react-icons/fa";

export default function CTAButtons() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        
        {/* Download App Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <FaDownload />
          Download App
        </button>

        {/* Become a Rider Button */}
        <button
           onClick={() => setShowPopup(true)}
          className="flex items-center justify-center gap-2 border-2 border-blue-800 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
          <FaUser />
          Become a Rider
        </button>
      </div>

      {/* 🌈 Gradient Popup Modal */}
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
