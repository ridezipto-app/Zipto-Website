import React from "react";

export default function LaunchingSoon() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-500 uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Launching soon
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-medium leading-tight mb-3">
          Trusted by thousands,<br />growing every day.
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
          Odisha's fastest hyperlocal delivery network — connecting businesses and customers across the city.
        </p>

        {/* Target Stats */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { num: "10,000+", label: "Deliveries / month" },
            { num: "500+",    label: "Riders onboard" },
            { num: "45 min",  label: "Avg delivery time" },
          ].map(({ num, label }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-4">
              <p className="flex items-center gap-1.5 text-[11px] text-gray-400 uppercase tracking-wider mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                Our target
              </p>
              <p className="text-3xl font-medium mb-1">{num}</p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {[
            {
              bg: "#eff6ff", stroke: "#3b82f6",
              title: "Fast & reliable delivery",
              desc: "Same-day dispatch with real-time tracking.",
              icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
            },
            {
              bg: "#f0fdf4", stroke: "#22c55e",
              title: "Trusted rider network",
              desc: "Verified, trained riders across the city.",
              icon: <><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 5v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
            },
            {
              bg: "#fdf4ff", stroke: "#a855f7",
              title: "Serving across the city",
              desc: "Wide coverage from core to suburbs.",
              icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
            },
            {
              bg: "#fff7ed", stroke: "#f97316",
              title: "Quick pickup & drop",
              desc: "Minimal wait, maximum speed.",
              icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
            },
          ].map(({ bg, stroke, title, desc, icon }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-4 hover:border-gray-200 transition">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
              </div>
              <div>
                <p className="text-base font-medium mb-1">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-100 mb-8" />

        {/* Mission */}
        <div className="flex gap-3.5 items-start">
          <div className="w-0.5 min-h-[48px] bg-gray-200 rounded flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Our mission</p>
            <p className="text-lg font-medium leading-relaxed">
              Building Odisha's fastest hyperlocal delivery network — one delivery at a time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}