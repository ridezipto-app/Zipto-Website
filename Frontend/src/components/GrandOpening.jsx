import { useState, useEffect } from 'react';

// ↓ Change this number to set where the countdown starts
const COUNTDOWN_FROM = 3;

const SESSION_KEY = 'bf-grand-opening-seen';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@500;700&display=swap');

  .gop-wrap {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: #030810;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Space Grotesk', sans-serif;
  }
  .gop-wrap.gop-exit {
    animation: gop-slide-up 0.9s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }
  @keyframes gop-slide-up {
    to { transform: translateY(-100vh); }
  }

  .gop-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
  }
  .gop-glow {
    position: absolute;
    width: 520px; height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%);
    pointer-events: none;
    animation: gop-glow-pulse 2.5s ease-in-out infinite;
  }
  @keyframes gop-glow-pulse {
    0%, 100% { transform: scale(1);    opacity: 0.7; }
    50%       { transform: scale(1.12); opacity: 1;   }
  }

  .gop-scan {
    position: absolute;
    left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(96,165,250,0.25), transparent);
    animation: gop-scan-move 3s linear infinite;
    pointer-events: none;
  }
  @keyframes gop-scan-move {
    from { top: 0; }
    to   { top: 100%; }
  }

  .gop-inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gop-brand {
    font-family: 'Cocon', 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(255,255,255,0.45);
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 12px;
    animation: gop-fade-up 0.6s ease forwards;
  }
  .gop-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(37,99,235,0.14);
    border: 1px solid rgba(96,165,250,0.3);
    border-radius: 100px;
    padding: 6px 18px;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #60A5FA;
    margin-bottom: 40px;
    opacity: 0;
    animation: gop-fade-up 0.6s ease 0.2s forwards;
  }
  .gop-badge-dot {
    width: 6px; height: 6px;
    background: #60A5FA;
    border-radius: 50%;
    animation: gop-blink 1.4s ease-in-out infinite;
  }
  @keyframes gop-blink {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 3px rgba(96,165,250,0.25); }
    50%       { opacity: 0.2; box-shadow: none; }
  }

  .gop-ring-wrap {
    position: relative;
    width: 220px; height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
  }
  .gop-ring-svg {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
  }
  .gop-number-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gop-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 7.5rem;
    color: #FFFFFF;
    line-height: 1;
    letter-spacing: -1px;
    animation: gop-num-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    display: block;
  }
  @keyframes gop-num-pop {
    from { opacity: 0; transform: scale(1.6); filter: blur(4px); }
    to   { opacity: 1; transform: scale(1);   filter: blur(0); }
  }
  .gop-live {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3.2rem;
    color: #22c55e;
    line-height: 1;
    letter-spacing: 5px;
    animation: gop-live-pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    display: block;
  }
  @keyframes gop-live-pop {
    from { opacity: 0; transform: scale(0.3); }
    60%  { transform: scale(1.18); }
    to   { opacity: 1; transform: scale(1); }
  }

  .gop-sub {
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(255,255,255,0.3);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 24px;
    transition: color 0.4s;
    min-height: 20px;
  }
  .gop-sub-live { color: rgba(34,197,94,0.65); }

  .gop-steps {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .gop-step {
    height: 3px;
    width: 24px;
    border-radius: 2px;
    background: rgba(255,255,255,0.1);
    transition: background 0.4s, width 0.3s;
  }
  .gop-step.gop-step-done {
    background: #2563EB;
    width: 36px;
  }
  .gop-step.gop-step-all-done {
    background: #22c55e;
    width: 36px;
  }

  .gop-bottom-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(37,99,235,0.5) 20%,
      rgba(96,165,250,0.9) 50%,
      rgba(37,99,235,0.5) 80%,
      transparent 100%
    );
  }

  @keyframes gop-fade-up {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    .gop-ring-wrap { width: 180px; height: 180px; }
    .gop-num  { font-size: 6rem; }
    .gop-live { font-size: 2.6rem; }
    .gop-glow { width: 300px; height: 300px; }
  }
`;

export default function GrandOpening() {
  const [show, setShow] = useState(() => {
    try {
      sessionStorage.removeItem(SESSION_KEY); // always show on load
      return true;
    } catch { return true; }
  });
  const [count, setCount]     = useState(COUNTDOWN_FROM);
  const [animKey, setAnimKey] = useState(0);
  const [phase, setPhase]     = useState('counting'); // counting | go | reveal

  useEffect(() => {
    if (!show || phase !== 'counting') return;

    if (count <= 0) {
      setPhase('go');
      setTimeout(() => {
        setPhase('reveal');
        setTimeout(() => {
          setShow(false);
          try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
        }, 950);
      }, 750);
      return;
    }

    const t = setTimeout(() => {
      setAnimKey(k => k + 1);
      setCount(c => c - 1);
    }, 1000);

    return () => clearTimeout(t);
  }, [count, phase, show]);

  if (!show) return null;

  const r             = 80;
  const svgSize       = 220;
  const cx            = svgSize / 2;
  const cy            = svgSize / 2;
  const circumference = 2 * Math.PI * r;
  const progress     = phase === 'go' ? 1 : (COUNTDOWN_FROM - count) / COUNTDOWN_FROM;
  const dashOffset   = circumference * (1 - progress);
  const strokeColor  = phase === 'go' ? '#22c55e' : '#2563EB';
  const activeSteps  = COUNTDOWN_FROM - count;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className={`gop-wrap${phase === 'reveal' ? ' gop-exit' : ''}`}>
        <div className="gop-grid" />
        <div className="gop-glow" />
        <div className="gop-scan" />

        <div className="gop-inner">
          <div className="gop-brand">bookfleet</div>

          <div className="gop-badge">
            <div className="gop-badge-dot" />
            Grand Opening
          </div>

          <div className="gop-ring-wrap">
            <svg
              className="gop-ring-svg"
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              aria-hidden="true"
            >
              {/* track */}
              <circle
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="3"
              />
              {/* progress */}
              <circle
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={strokeColor}
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${cx} ${cy})`}
                style={{ transition: 'stroke-dashoffset 0.95s linear, stroke 0.3s ease' }}
              />
            </svg>

            <div className="gop-number-wrap">
              {phase === 'go' ? (
                <span className="gop-live" key="live">LIVE!</span>
              ) : (
                <span className="gop-num" key={animKey}>{count}</span>
              )}
            </div>
          </div>

          <div className={`gop-sub${phase === 'go' ? ' gop-sub-live' : ''}`}>
            {phase === 'go' ? 'Welcome to bookfleet' : 'Launching in'}
          </div>

          <div className="gop-steps">
            {Array.from({ length: COUNTDOWN_FROM }, (_, i) => (
              <div
                key={i}
                className={`gop-step${
                  phase === 'go'
                    ? ' gop-step-all-done'
                    : i < activeSteps
                    ? ' gop-step-done'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>

        <div className="gop-bottom-line" />
      </div>
    </>
  );
}
