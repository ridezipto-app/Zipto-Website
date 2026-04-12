import React from "react";

export default function LaunchingSoon() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-600 to-orange-500 text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-x-hidden">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center mb-10 leading-tight">
        Trusted by Thousands, <br />
        <span className="flex items-center justify-center gap-2">
          Growing Every Day 🚀
        </span>
      </h1>

      {/* Cards Container */}
      <div className="w-full max-w-4xl border border-white/20 backdrop-blur-md bg-white/10 rounded-xl p-4 sm:p-6">

        {/* ✅ FIXED GRID */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">

          {/* Card 1 */}
          <div className="border border-gray-800 rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 bg-[#0c0c0c] hover:scale-105 transition">
            <span className="text-xl sm:text-3xl">⚡</span>
            <p className="text-xs sm:text-base font-medium">
              Fast & <br /> Reliable Delivery
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-800 rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 bg-[#0c0c0c] hover:scale-105 transition">
            <span className="text-xl sm:text-3xl">🚚</span>
            <p className="text-xs sm:text-base font-medium">
              Trusted <br /> Rider Network
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-800 rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 bg-[#0c0c0c] hover:scale-105 transition">
            <span className="text-xl sm:text-3xl">📍</span>
            <p className="text-xs sm:text-base font-medium">
              Serving <br /> Across the City
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-800 rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 bg-[#0c0c0c] hover:scale-105 transition">
            <span className="text-xl sm:text-3xl">⏱️</span>
            <p className="text-xs sm:text-base font-medium">
              Quick <br /> Pickup & Drop
            </p>
          </div>

        </div>
      </div>

      {/* Mission */}
      <div className="mt-12 text-center px-2">
        <p className="text-sm sm:text-base text-gray-200 mb-2 tracking-widest">
          ~~~ Our Mission ~~~
        </p>

        <p className="text-base sm:text-lg md:text-xl text-white max-w-xl mx-auto">
          Building Odisha’s fastest hyperlocal delivery network
        </p>
      </div>

    </div>
  );
}
