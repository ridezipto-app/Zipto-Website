import React from "react";

export default function LaunchingSoon() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-10">
        Launching Soon in <br />
        <span className="flex items-center justify-center gap-2">
          Bhubaneswar 🚀
        </span>
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* Card 1 */}
        <div className="border border-gray-800 rounded-xl p-6 flex items-center gap-4 bg-[#0c0c0c]">
          <span className="text-3xl">⚡</span>
          <p className="text-lg font-medium">
            Fast & <br /> Reliable Delivery
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-800 rounded-xl p-6 flex items-center gap-4 bg-[#0c0c0c]">
          <span className="text-3xl">🚚</span>
          <p className="text-lg font-medium">
            Trusted <br /> Rider Network
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-800 rounded-xl p-6 flex items-center gap-4 bg-[#0c0c0c]">
          <span className="text-3xl">📍</span>
          <p className="text-lg font-medium">
            Serving <br /> Across the City
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-800 rounded-xl p-6 flex items-center gap-4 bg-[#0c0c0c]">
          <span className="text-3xl">⏱️</span>
          <p className="text-lg font-medium">
            Quick <br /> Pickup & Drop
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-2 tracking-widest">~~~ Our Mission ~~~</p>

        <p className="text-lg md:text-xl text-gray-200 max-w-xl">
          Launching soon. Join us in redefining local delivery.
        </p>
      </div>
    </div>
  );
}
