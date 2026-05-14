// import { useEffect, useRef, useState, useCallback } from "react";

// const css = `
//   @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700&display=swap');

//   /* ── shared root ── */
//   .zc-root {
//     position: fixed; inset: 0; z-index: 9999;
//     background: #f8f9ff;
//     display: flex; flex-direction: column;
//     align-items: center; justify-content: center;
//     overflow: hidden;
//   }
//   .zc-grid {
//     position: absolute; inset: 0; pointer-events: none;
//     background-image:
//       linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px);
//     background-size: 48px 48px;
//   }
//   .zc-vignette {
//     position: absolute; inset: 0; pointer-events: none;
//     background: radial-gradient(ellipse at center, transparent 40%, rgba(200,210,240,0.45) 100%);
//   }
//   .zc-canvas {
//     position: absolute; inset: 0; width: 100%; height: 100%;
//     pointer-events: none; z-index: 50;
//   }
//   .zc-dark-cover {
//     position: absolute; inset: 0; background: #f8f9ff;
//     z-index: 40; opacity: 0; transition: opacity 1.1s ease; pointer-events: none;
//   }
//   .zc-dark-cover.active   { opacity: 1; }
//   .zc-dark-cover.fade-out { opacity: 0; }

//   /* ── setup screen ── */
//   .zc-setup {
//     position: relative; z-index: 10;
//     display: flex; flex-direction: column; align-items: center; gap: 0;
//     animation: zc-fadeIn .4s ease;
//   }
//   @keyframes zc-fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }

//   .zc-setup-title {
//     font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600;
//     letter-spacing: 4px; text-transform: uppercase;
//     color: rgba(30,40,80,0.35); margin-bottom: 32px;
//   }

//   .zc-time-inputs {
//     display: flex; align-items: center; gap: 4px; margin-bottom: 36px;
//   }
//   .zc-time-field {
//     display: flex; flex-direction: column; align-items: center; gap: 8px;
//   }
//   .zc-time-input {
//     font-family: 'Bebas Neue', sans-serif;
//     font-size: clamp(64px, 14vw, 88px); line-height: 1;
//     color: #0f172a; width: clamp(90px, 18vw, 120px);
//     text-align: center; letter-spacing: 2px;
//     background: rgba(37,99,235,0.05);
//     border: 2px solid rgba(37,99,235,0.15);
//     border-radius: 12px; outline: none;
//     transition: border-color .2s, background .2s;
//     -moz-appearance: textfield;
//     padding: 8px 4px;
//   }
//   .zc-time-input::-webkit-inner-spin-button,
//   .zc-time-input::-webkit-outer-spin-button { -webkit-appearance: none; }
//   .zc-time-input:focus {
//     border-color: #2563eb;
//     background: rgba(37,99,235,0.08);
//   }
//   .zc-time-lbl {
//     font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 500;
//     letter-spacing: 3px; text-transform: uppercase; color: rgba(30,40,80,0.3);
//   }
//   .zc-time-sep {
//     font-family: 'Bebas Neue', sans-serif;
//     font-size: clamp(52px, 11vw, 72px);
//     color: rgba(30,40,80,0.18); padding-bottom: 24px; margin: 0 2px;
//   }

//   .zc-hint {
//     font-family: 'Syne', sans-serif; font-size: 11px;
//     color: rgba(30,40,80,0.3); margin-bottom: 28px; letter-spacing: .5px;
//   }

//   .zc-start-btn {
//     display: inline-flex; align-items: center; gap: 9px;
//     background: #2563eb; color: #fff;
//     font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 700;
//     letter-spacing: 2.5px; text-transform: uppercase;
//     border: none; border-radius: 100px;
//     padding: 14px 36px; cursor: pointer;
//     transition: transform .15s, box-shadow .15s, background .15s;
//     box-shadow: 0 4px 24px rgba(37,99,235,0.25);
//   }
//   .zc-start-btn:hover {
//     background: #1d4ed8;
//     transform: translateY(-1px);
//     box-shadow: 0 8px 32px rgba(37,99,235,0.35);
//   }
//   .zc-start-btn:active { transform: scale(.97); }
//   .zc-start-btn svg { width: 14px; height: 14px; fill: #fff; }

//   /* ── countdown screen ── */
//   .zc-pill {
//     display: inline-flex; align-items: center; gap: 7px;
//     background: rgba(37,99,235,0.08);
//     border: 1px solid rgba(37,99,235,0.2);
//     border-radius: 100px; padding: 5px 16px;
//     font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600;
//     color: #2563eb; letter-spacing: 2px; text-transform: uppercase;
//     margin-bottom: 28px; position: relative; z-index: 10;
//   }
//   .zc-pill-dot {
//     width: 6px; height: 6px; background: #2563eb; border-radius: 50%;
//     animation: zc-blink 1.6s ease-in-out infinite;
//   }
//   @keyframes zc-blink { 0%,100%{opacity:1} 50%{opacity:.2} }

//   .zc-event-label {
//     font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 500;
//     letter-spacing: 4px; text-transform: uppercase;
//     color: rgba(30,40,80,0.35); margin-bottom: 20px;
//     position: relative; z-index: 10;
//   }
//   .zc-digits {
//     display: flex; align-items: flex-end; gap: 0;
//     position: relative; z-index: 10;
//   }
//   .zc-unit { display: flex; flex-direction: column; align-items: center; gap: 8px; }
//   .zc-num {
//     font-family: 'Bebas Neue', sans-serif;
//     font-size: clamp(64px, 14vw, 96px); line-height: 1;
//     color: #0f172a; min-width: clamp(80px, 17vw, 116px);
//     text-align: center; letter-spacing: 2px;
//     transition: transform .15s ease;
//   }
//   .zc-num.bump { transform: scale(1.1); }
//   .zc-unit-lbl {
//     font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 500;
//     letter-spacing: 3px; text-transform: uppercase; color: rgba(30,40,80,0.3);
//   }
//   .zc-sep {
//     font-family: 'Bebas Neue', sans-serif;
//     font-size: clamp(52px, 11vw, 80px);
//     color: rgba(30,40,80,0.18);
//     line-height: 1; margin: 0 4px; padding-bottom: 18px;
//   }
//   .zc-bar-wrap {
//     margin-top: 40px; width: min(300px, 80vw);
//     position: relative; z-index: 10;
//   }
//   .zc-bar-track {
//     height: 2px; background: rgba(30,40,80,0.1);
//     border-radius: 2px; overflow: hidden;
//   }
//   .zc-bar-fill {
//     height: 100%; background: #2563eb;
//     border-radius: 2px; transition: width 1s linear;
//   }
//   .zc-bar-row {
//     display: flex; justify-content: space-between; margin-top: 8px;
//     font-family: 'Syne', sans-serif; font-size: 11px; color: rgba(30,40,80,0.3);
//   }
//   .zc-cd-wrap {
//     position: relative; z-index: 10;
//     display: flex; flex-direction: column; align-items: center;
//   }
//   .zc-cd-wrap.hiding { animation: zc-fadeOut .35s ease forwards; }
//   @keyframes zc-fadeOut { to { opacity:0; transform:scale(.95); } }

//   @media (max-width: 480px) {
//     .zc-bar-wrap { width: min(260px, 80vw); }
//     .zc-time-inputs { gap: 2px; }
//   }
// `;

// const COLORS = [
//   "#e11d48","#f43f5e","#fb7185",
//   "#ff4500","#ff6b35",
//   "#2563eb","#818cf8",
//   "#ffd700","#ff1493",
// ];

// function randomBetween(a, b) { return a + Math.random() * (b - a); }

// function createPapers(W, H) {
//   return Array.from({ length: 160 }, () => {
//     const fromLeft = Math.random() < 0.5;
//     return {
//       x: fromLeft ? randomBetween(-80, W * 0.35) : randomBetween(W * 0.65, W + 80),
//       y: randomBetween(-H * 0.2, H * 0.1),
//       w: randomBetween(8, 18), h: randomBetween(14, 28),
//       color: COLORS[Math.floor(Math.random() * COLORS.length)],
//       angle: randomBetween(0, Math.PI * 2),
//       vx: fromLeft ? randomBetween(2, 7) : randomBetween(-7, -2),
//       vy: randomBetween(3, 9), va: randomBetween(-0.12, 0.12),
//       gravity: randomBetween(0.12, 0.28),
//       swing: randomBetween(0.03, 0.09),
//       swingOffset: Math.random() * Math.PI * 2,
//       tick: 0, opacity: 1,
//     };
//   });
// }

// function clampNum(val, min, max) {
//   const n = parseInt(val, 10);
//   if (isNaN(n)) return min;
//   return Math.min(max, Math.max(min, n));
// }

// export default function ZiptoCountdown({ onComplete }) {
//   // ── setup state ──
//   const [screen, setScreen]       = useState("setup"); // "setup" | "counting"
//   const [inputMin, setInputMin]   = useState(20);
//   const [inputSec, setInputSec]   = useState(0);

//   // ── countdown state ──
//   const [remaining, setRemaining] = useState(0);
//   const [phase, setPhase]         = useState("counting");
//   const totalRef    = useRef(0);
//   const coverRef    = useRef(null);
//   const canvasRef   = useRef(null);
//   const rafRef      = useRef(null);
//   const prevSecRef  = useRef(null);
//   const prevMinRef  = useRef(null);
//   const launchAtRef = useRef(null);

//   const runConfetti = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     const W = canvas.width  = window.innerWidth;
//     const H = canvas.height = window.innerHeight;
//     const papers = createPapers(W, H);
//     let startTime = null;
//     const DURATION = 3200;
//     const draw = (ts) => {
//       if (!startTime) startTime = ts;
//       const elapsed = ts - startTime;
//       ctx.clearRect(0, 0, W, H);
//       let allGone = true;
//       papers.forEach(p => {
//         p.tick++;
//         p.x += p.vx + Math.sin(p.tick * p.swing + p.swingOffset) * 1.4;
//         p.y += p.vy; p.vy += p.gravity; p.vx *= 0.995; p.angle += p.va;
//         if (elapsed > DURATION * 0.55) p.opacity = Math.max(0, p.opacity - 0.018);
//         if (p.opacity > 0 && p.y < H + 60) allGone = false;
//         if (p.opacity <= 0) return;
//         ctx.save();
//         ctx.translate(p.x, p.y); ctx.rotate(p.angle);
//         ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
//         ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
//         ctx.globalAlpha = p.opacity * 0.2; ctx.fillStyle = "rgba(0,0,0,0.2)";
//         ctx.fillRect(-p.w/2+2, -p.h/2+2, p.w, p.h);
//         ctx.restore();
//       });
//       if (!allGone && elapsed < DURATION + 1000) rafRef.current = requestAnimationFrame(draw);
//       else ctx.clearRect(0, 0, W, H);
//     };
//     rafRef.current = requestAnimationFrame(draw);
//   }, []);

//   const fireReveal = useCallback(() => {
//     setPhase("hiding");
//     setTimeout(() => {
//       setPhase("blast");
//       runConfetti();
//       if (coverRef.current) {
//         coverRef.current.classList.add("active");
//         setTimeout(() => {
//           coverRef.current?.classList.add("fade-out");
//           coverRef.current?.classList.remove("active");
//         }, 600);
//       }
//       setTimeout(() => { setPhase("done"); onComplete?.(); }, 2000);
//     }, 380);
//   }, [onComplete, runConfetti]);

//   // inject styles once
//   useEffect(() => {
//     if (!document.getElementById("zc-styles")) {
//       const tag = document.createElement("style");
//       tag.id = "zc-styles"; tag.innerHTML = css;
//       document.head.appendChild(tag);
//     }
//     return () => {
//       document.getElementById("zc-styles")?.remove();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   // start the interval only after user hits Start
//   useEffect(() => {
//     if (screen !== "counting") return;

//     if (!launchAtRef.current) {
//       launchAtRef.current = Date.now() + totalRef.current * 1000;
//     }

//     const tick = () => {
//       const secs = Math.max(0, Math.round((launchAtRef.current - Date.now()) / 1000));
//       setRemaining(secs);
//       if (secs <= 0) { clearInterval(id); fireReveal(); }
//     };

//     tick();
//     const id = setInterval(tick, 1000);
//     return () => clearInterval(id);
//   }, [screen, fireReveal]);

//   // ── handlers ──
//   const handleStart = () => {
//     const mins = clampNum(inputMin, 0, 99);
//     const secs = clampNum(inputSec, 0, 59);
//     const total = mins * 60 + secs;
//     if (total <= 0) return;
//     totalRef.current = total;
//     launchAtRef.current = null; // reset so effect sets fresh launchAt
//     prevSecRef.current = null;
//     prevMinRef.current = null;
//     setRemaining(total);
//     setPhase("counting");
//     setScreen("counting");
//   };

//   if (phase === "done") return null;

//   // ── setup screen ──
//   if (screen === "setup") {
//     return (
//       <div className="zc-root">
//         <div className="zc-grid" />
//         <div className="zc-vignette" />
//         <div className="zc-setup">
//           <div className="zc-setup-title">Set countdown duration</div>

//           <div className="zc-time-inputs">
//             <div className="zc-time-field">
//               <input
//                 className="zc-time-input"
//                 type="number" min="0" max="99"
//                 value={inputMin}
//                 onChange={e => setInputMin(e.target.value)}
//                 onBlur={e => setInputMin(clampNum(e.target.value, 0, 99))}
//               />
//               <span className="zc-time-lbl">min</span>
//             </div>
//             <div className="zc-time-sep">:</div>
//             <div className="zc-time-field">
//               <input
//                 className="zc-time-input"
//                 type="number" min="0" max="59"
//                 value={inputSec}
//                 onChange={e => setInputSec(e.target.value)}
//                 onBlur={e => setInputSec(clampNum(e.target.value, 0, 59))}
//               />
//               <span className="zc-time-lbl">sec</span>
//             </div>
//           </div>

//           <div className="zc-hint">Enter your time, then press Start</div>

//           <button className="zc-start-btn" onClick={handleStart}>
//             <svg viewBox="0 0 16 16"><path d="M3 2.5l10 5.5-10 5.5V2.5z"/></svg>
//             Start Countdown
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ── countdown screen ──
//   const pad = (n) => String(n).padStart(2, "0");
//   const m   = Math.floor(remaining / 60);
//   const s   = remaining % 60;
//   const pct = Math.round((remaining / totalRef.current) * 100);

//   const sBump = prevSecRef.current !== null && prevSecRef.current !== s;
//   const mBump = prevMinRef.current !== null && prevMinRef.current !== m;
//   prevSecRef.current = s;
//   prevMinRef.current = m;

//   return (
//     <div className="zc-root">
//       <div className="zc-grid" />
//       <div className="zc-vignette" />
//       <div className="zc-dark-cover" ref={coverRef} />
//       <canvas className="zc-canvas" ref={canvasRef} />

//       {(phase === "counting" || phase === "hiding") && (
//         <div className={`zc-cd-wrap${phase === "hiding" ? " hiding" : ""}`}>

//           <div className="zc-pill">
//             <div className="zc-pill-dot" />
//             Launching Soon
//           </div>

//           <div className="zc-event-label">Website Reveal</div>

//           <div className="zc-digits">
//             <div className="zc-unit">
//               <span className={`zc-num${mBump ? " bump" : ""}`}>{pad(m)}</span>
//               <span className="zc-unit-lbl">min</span>
//             </div>
//             <div className="zc-sep">:</div>
//             <div className="zc-unit">
//               <span className={`zc-num${sBump ? " bump" : ""}`}>{pad(s)}</span>
//               <span className="zc-unit-lbl">sec</span>
//             </div>
//           </div>

//           <div className="zc-bar-wrap">
//             <div className="zc-bar-track">
//               <div className="zc-bar-fill" style={{ width: `${pct}%` }} />
//             </div>
//             <div className="zc-bar-row">
//               <span>Starting shortly</span>
//               <span>{pct}%</span>
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }