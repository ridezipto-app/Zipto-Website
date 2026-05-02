import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  title,
  subtitle,
  price,
  capacity,
  accent = "#F97316",
  icon,
  tag,
  tagColor = "#F97316",
  onClick,
}) {
  return (
    <motion.div
      whileHover="hovered"
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(145deg, rgba(14,24,44,0.97) 0%, rgba(9,16,31,0.99) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "'DM Sans', sans-serif",
      }}
      variants={{
        hovered: {
          borderColor: accent + "55",
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${accent}18`,
          y: -6,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      transition={{ duration: 0.3 }}
    >
      {/* top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        variants={{ hovered: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* radial glow bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${accent}10 0%, transparent 70%)` }}
        variants={{ hovered: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 p-5 flex flex-col gap-4">

        {/* tag + price row */}
        <div className="flex items-center justify-between">
          {tag && (
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                color: tagColor,
                background: tagColor + "18",
                border: `1px solid ${tagColor}30`,
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {tag}
            </span>
          )}
          <span
            className="text-lg font-black ml-auto"
            style={{ color: accent, fontFamily: "'Syne', sans-serif" }}
          >
            {price}
            <span className="text-[10px] font-normal text-gray-500 ml-0.5">/ trip</span>
          </span>
        </div>

        {/* icon */}
        <div className="flex justify-center py-1">
          <motion.div
            variants={{ hovered: { y: -6 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: accent + "14",
              border: `1px solid ${accent}22`,
            }}
          >
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              variants={{ hovered: { opacity: 1 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)` }}
            />
          </motion.div>
        </div>

        {/* text */}
        <div className="text-center space-y-1">
          <h3
            className="text-base font-bold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-[12px] text-gray-400 leading-snug">{subtitle}</p>
        </div>

        {/* capacity */}
        <div className="flex justify-center">
          <span
            className="text-[11px] text-gray-400 px-3 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            📦 {capacity}
          </span>
        </div>

        {/* CTA */}
        <motion.div
          variants={{ hovered: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center gap-1.5"
        >
          <span className="text-xs font-semibold" style={{ color: accent }}>
            View Details
          </span>
          <motion.span
            variants={{ hovered: { x: 3 } }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={13} color={accent} />
          </motion.span>
        </motion.div>

      </div>
    </motion.div>
  );
}