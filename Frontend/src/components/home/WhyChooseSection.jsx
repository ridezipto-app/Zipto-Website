import { motion } from "framer-motion";
import { IndianRupee, MapPin, Languages, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Transparent Pricing",
    description: "Know the exact cost upfront. No hidden charges, no surprises — ever.",
    icon: IndianRupee,
    accent: "#3B82F6",
    tag: "No hidden fees",
    glyph: "₹",
  },
  {
    title: "Real-Time Tracking",
    description: "Track your delivery live on the map from pickup to drop-off.",
    icon: MapPin,
    accent: "#F97316",
    tag: "Live updates",
    glyph: "📍",
  },
  {
    title: "Odia, Hindi & English",
    description: "Communicate in your preferred language with our local support team.",
    icon: Languages,
    accent: "#22C55E",
    tag: "3 languages",
    glyph: "🗣",
  },
  {
    title: "Verified Partners",
    description: "All riders are background-verified and trained delivery professionals.",
    icon: ShieldCheck,
    accent: "#A855F7",
    tag: "100% verified",
    glyph: "🛡",
  },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.11, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hovered"
      className="relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "linear-gradient(145deg, rgba(14,24,44,0.97) 0%, rgba(9,16,31,0.99) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        variants={{
          hovered: { boxShadow: `0 0 0 1px ${feature.accent}44, 0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${feature.accent}14` },
        }}
        initial={{ boxShadow: "0 0 0 0px transparent" }}
        transition={{ duration: 0.3 }}
      />

      {/* top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
        variants={{ hovered: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* radial bg glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${feature.accent}0e 0%, transparent 70%)` }}
        variants={{ hovered: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* large watermark glyph */}
      <div
        className="absolute -bottom-3 -right-2 text-[80px] leading-none pointer-events-none select-none"
        style={{ opacity: 0.04 }}
      >
        {feature.glyph}
      </div>

      <div className="relative z-10 p-7 flex flex-col gap-5">

        {/* tag */}
        <div className="flex items-center justify-between">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              color: feature.accent,
              background: feature.accent + "18",
              border: `1px solid ${feature.accent}28`,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {feature.tag}
          </span>
          <span className="text-[11px] text-gray-600 font-mono">0{index + 1}</span>
        </div>

        {/* icon */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: feature.accent + "16",
            border: `1px solid ${feature.accent}28`,
          }}
          variants={{ hovered: { y: -4, scale: 1.06 } }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Icon size={24} color={feature.accent} />
        </motion.div>

        {/* text */}
        <div className="space-y-2">
          <h3
            className="text-lg font-black text-white leading-snug"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {feature.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
        </div>

        {/* bottom rule */}
        <motion.div
          className="h-px"
          style={{ background: `linear-gradient(90deg, ${feature.accent}40, transparent)` }}
          variants={{ hovered: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* learn more */}
        <motion.div
          className="flex items-center gap-1.5"
          variants={{ hovered: { opacity: 1, x: 0 } }}
          initial={{ opacity: 0, x: -6 }}
          transition={{ duration: 0.25 }}
        >
          <span className="text-xs font-semibold" style={{ color: feature.accent }}>
            Learn more
          </span>
          <motion.span
            variants={{ hovered: { x: 4 } }}
            transition={{ duration: 0.2 }}
            className="text-xs"
            style={{ color: feature.accent }}
          >
            →
          </motion.span>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default function WhyChooseSection() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');`}</style>

      <section
        className="relative py-24 px-5 sm:px-8 lg:px-14 overflow-hidden"
        style={{ background: "#080F1E", fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ambient blobs */}
        <motion.div
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity }}
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, delay: 3 }}
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)", filter: "blur(50px)" }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* ── heading ── */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-orange-500" />
              <span
                className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Zipto
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-orange-500" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl font-black text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Zipto?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto"
            >
              Fast, reliable, and trustworthy delivery service built for everyone in Odisha.
            </motion.p>
          </div>

          {/* ── cards ── */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <FeatureCard key={i} feature={f} index={i} />
            ))}
          </div>

          {/* ── trust badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-14 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full cursor-default"
              style={{
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.25)",
                boxShadow: "0 0 24px rgba(168,85,247,0.1)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck size={18} color="#A855F7" />
              </motion.div>
              <p
                className="text-sm font-semibold text-gray-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Trusted by{" "}
                <span className="text-purple-400">10,000+</span> users across Odisha
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}