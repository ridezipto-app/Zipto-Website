import { useState } from "react";
import { FaDownload, FaUser } from "react-icons/fa";

export default function CTAButtons() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full overflow-x-hidden px-4 sm:px-6 md:px-10">
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md sm:max-w-none mx-auto">
        
        {/* Download App Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 
          bg-gradient-to-r from-blue-700 to-orange-700 text-white 
          px-6 py-3 rounded-full shadow-lg 
          hover:scale-105 transition-transform duration-300"
        >
          <FaDownload />
          Download App
        </button>

        {/* Become a Rider Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 
          border-2 border-blue-800 text-blue-900 
          px-6 py-3 rounded-full 
          hover:bg-blue-500 hover:text-white 
          transition-all duration-300"
        >
          <FaUser />
          Become a Rider
        </button>
      </div>

      {/* 🌈 Responsive Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 px-4">

          {/* Glow Effects */}
          <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-orange-500/20 blur-3xl rounded-full top-10 left-5"></div>
          <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-5"></div>

          {/* Gradient Border Wrapper */}
          <div className="w-full max-w-sm sm:max-w-md p-[1.5px] rounded-3xl 
          bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 
          shadow-[0_20px_80px_rgba(0,0,0,0.8)]">

            {/* Glass Card */}
            <div className="relative bg-[#0B1220]/90 backdrop-blur-xl rounded-3xl 
            p-6 sm:p-8 text-center">

              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 
                w-8 h-8 flex items-center justify-center rounded-full 
                bg-white/10 hover:bg-white/20 
                text-gray-300 hover:text-white transition"
              >
                ✕
              </button>

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 
              rounded-2xl flex items-center justify-center 
              bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg">
                <FaDownload className="text-white text-lg sm:text-xl" />
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Coming Soon 🚀
              </h2>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
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
    </div>
  );
}
