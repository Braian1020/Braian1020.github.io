import React, { useMemo } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  animationVariant: number;
  colorType: "ruby" | "velvet" | "blush" | "crimson" | "pinkHeart";
  blur: boolean;
  opacity: number;
}

interface RosePetalsRainProps {
  active: boolean;
  count?: number;
  isInsideModal?: boolean;
}

export default function RosePetalsRain({ 
  active, 
  count = 28,
  isInsideModal = false 
}: RosePetalsRainProps) {
  // Generate consistent pseudo-random petals so they don't re-render unpredictably
  const petals = useMemo<Petal[]>(() => {
    const list: Petal[] = [];
    const colors: ("ruby" | "velvet" | "blush" | "crimson" | "pinkHeart")[] = [
      "ruby", 
      "velvet", 
      "blush", 
      "crimson", 
      "ruby", 
      "blush",
      "pinkHeart"
    ];

    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        left: Math.floor(Math.random() * 98), // 0% to 98%
        size: Math.floor(Math.random() * 16) + 16, // 16px to 32px
        duration: Math.random() * 5 + 7, // 7s to 12s (slow and gentle fall)
        delay: Math.random() * 8, // Staggered delays
        animationVariant: (i % 3) + 1, // 1, 2, or 3
        colorType: colors[i % colors.length],
        blur: Math.random() > 0.75, // Some background petals with soft romantic blur
        opacity: Math.random() * 0.35 + 0.65 // 0.65 to 1.0
      });
    }
    return list;
  }, [count]);

  if (!active) return null;

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 select-none ${
        isInsideModal ? "z-[2999]" : "z-[35]"
      }`}
      aria-hidden="true"
    >
      {petals.map((petal) => {
        const animName = `petalFall${petal.animationVariant}`;

        return (
          <div
            key={petal.id}
            className="absolute top-0 will-change-transform"
            style={{
              left: `${petal.left}%`,
              width: `${petal.size}px`,
              height: `${petal.size * 1.25}px`,
              animation: `${animName} ${petal.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
              animationDelay: `${petal.delay}s`,
              filter: petal.blur ? "blur(1px)" : "none",
              opacity: petal.opacity
            }}
          >
            {petal.colorType === "pinkHeart" ? (
              /* Harmonious mini-heart integrated into the petal rain */
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full drop-shadow-[0_2px_6px_rgba(230,57,70,0.35)]"
                fill="none"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="url(#heartGradient)"
                />
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff758f" />
                    <stop offset="100%" stopColor="#e63946" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              /* Realistic Curved Rose Petal SVG */
              <svg
                viewBox="0 0 36 44"
                className="w-full h-full drop-shadow-[0_4px_8px_rgba(217,4,41,0.28)]"
                fill="none"
              >
                <defs>
                  {/* Crimson Ruby Velvet Gradient */}
                  <linearGradient id={`petalGrad-${petal.id}`} x1="15%" y1="0%" x2="85%" y2="100%">
                    {petal.colorType === "ruby" && (
                      <>
                        <stop offset="0%" stopColor="#ff4d6d" />
                        <stop offset="50%" stopColor="#e63946" />
                        <stop offset="100%" stopColor="#9d0208" />
                      </>
                    )}
                    {petal.colorType === "velvet" && (
                      <>
                        <stop offset="0%" stopColor="#ff758f" />
                        <stop offset="60%" stopColor="#d90429" />
                        <stop offset="100%" stopColor="#7a0010" />
                      </>
                    )}
                    {petal.colorType === "blush" && (
                      <>
                        <stop offset="0%" stopColor="#fff0f3" />
                        <stop offset="45%" stopColor="#ffafcc" />
                        <stop offset="100%" stopColor="#ff4d6d" />
                      </>
                    )}
                    {petal.colorType === "crimson" && (
                      <>
                        <stop offset="0%" stopColor="#ff85a1" />
                        <stop offset="65%" stopColor="#c1121f" />
                        <stop offset="100%" stopColor="#59000b" />
                      </>
                    )}
                  </linearGradient>

                  {/* Soft Petal Highlights */}
                  <linearGradient id={`petalHighlight-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Natural Organic Petal Shape */}
                <path
                  d="M18 2 C28 2, 35 12, 34 24 C33 34, 25 42, 18 42 C11 42, 3 34, 2 24 C1 12, 8 2, 18 2 Z"
                  fill={`url(#petalGrad-${petal.id})`}
                />

                {/* Soft natural fold/crease curvature */}
                <path
                  d="M18 4 C19 14, 21 28, 18 40"
                  stroke={`url(#petalHighlight-${petal.id})`}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.6"
                />

                {/* Top subtle sheen */}
                <path
                  d="M10 6 C15 3, 21 3, 26 6"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
