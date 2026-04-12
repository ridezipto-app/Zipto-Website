import {
  FaMapMarkerAlt,
  FaSignal,
  FaBatteryFull,
  FaArrowRight,
} from "react-icons/fa";

import bikeIcon from "../../assets/bike.png";
import autoIcon from "../../assets/auto.png";

export default function MobileMockup() {
  return (
    <div className="w-full flex justify-center items-center relative px-4 sm:px-6 md:px-10 overflow-x-hidden">

      {/* Soft Glow */}
      <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] 
      bg-gradient-to-r from-blue-400 to-orange-400 opacity-20 blur-3xl rounded-full"></div>

      {/* iPhone Frame */}
      <div className="relative w-[260px] h-[520px] sm:w-[300px] sm:h-[580px] md:w-[320px] md:h-[600px] 
      bg-black rounded-[45px] sm:rounded-[50px] md:rounded-[55px] shadow-2xl p-[5px] sm:p-[6px]">

        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[35px] sm:rounded-[40px] md:rounded-[45px] overflow-hidden">

          {/* Dynamic Island */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 
          w-24 sm:w-28 md:w-32 h-5 sm:h-6 bg-black rounded-full"></div>

          {/* Status Bar */}
          <div className="flex justify-between items-center px-4 sm:px-6 pt-3 sm:pt-4 
          text-[10px] sm:text-xs font-medium text-black">
            <span>9:41</span>
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <FaSignal />
              <FaBatteryFull />
            </div>
          </div>

          {/* App Content */}
          <div className="px-4 sm:px-6 pt-8 sm:pt-10 pb-5 sm:pb-6">

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5 sm:mb-6">
              Book Delivery
            </h2>

            {/* Pickup */}
            <div className="bg-gray-100/70 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm mb-3 sm:mb-4">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Pickup Location</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <FaMapMarkerAlt className="text-blue-500 text-sm" />
                <span className="text-xs sm:text-sm text-gray-800">
                  Nearby Railway Station
                </span>
              </div>
            </div>

            {/* Drop */}
            <div className="bg-gray-100/70 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Drop Location</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <FaMapMarkerAlt className="text-orange-500 text-sm" />
                <span className="text-xs sm:text-sm text-gray-800">
                  Cuttack Market
                </span>
              </div>
            </div>

            {/* Vehicle Options */}
            <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6">

              {/* Selected */}
              <div className="flex-1 bg-blue-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl 
              text-center shadow-md cursor-pointer">
                <img src={bikeIcon} alt="Bike" className="mx-auto mb-2 w-6 h-6 sm:w-8 sm:h-8" />
                <p className="text-sm sm:text-base font-medium">Bike</p>
                <p className="text-[10px] sm:text-xs opacity-80">₹35</p>
              </div>

              {/* Normal */}
              <div className="flex-1 bg-gray-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl 
              text-center cursor-pointer">
                <img src={autoIcon} alt="Auto" className="mx-auto mb-2 w-6 h-6 sm:w-8 sm:h-8" />
                <p className="text-sm sm:text-base font-medium text-gray-800">Auto</p>
                <p className="text-[10px] sm:text-xs text-gray-500">₹80</p>
              </div>
            </div>

            {/* Book Section */}
            <div className="relative mt-6 sm:mt-8 flex flex-col items-center">

              {/* More Vehicles */}
              <div className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl 
              shadow flex items-center justify-between px-3 sm:px-4 py-2 mb-2 
              cursor-pointer hover:bg-gray-100 transition">
                <span className="text-gray-600 text-xs sm:text-sm font-medium">
                  More Vehicles
                </span>
                <FaArrowRight className="text-gray-600 text-sm sm:text-lg" />
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-black text-white py-2.5 sm:py-3 
              rounded-xl sm:rounded-2xl font-semibold shadow-md 
              active:scale-95 transition-transform duration-150 text-sm sm:text-base">
                Book Now
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
