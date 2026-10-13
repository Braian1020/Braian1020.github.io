import React, { useRef, useEffect } from "react";

interface BackgroundRomanticVideoProps {
  className?: string;
}

export default function BackgroundRomanticVideo({
  className = ""
}: BackgroundRomanticVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback if browser requires initial user interaction
      });
    }
  }, []);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* HTML5 Romantic Background Video playing seamlessly */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-opacity duration-1000 opacity-35"
        style={{ filter: "saturate(1.2) contrast(1.05) brightness(1.02)" }}
      >
        {/* HD Romantic Cherry Tree Blossom in Spring */}
        <source 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Time-lapse_of_cherry_tree_blossoms_in_Japan.webm" 
          type="video/webm" 
        />
        {/* Fallback Sunset Ocean Horizon */}
        <source 
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c6/Sunset_in_Pantai_Kukup.webm/Sunset_in_Pantai_Kukup.webm.1080p.vp9.webm" 
          type="video/webm" 
        />
      </video>

      {/* Soft Romantic Ambient Gradient Overlay to preserve readability & aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff0f3]/75 via-[#ffe5ec]/60 to-[#fff0f3]/80 backdrop-blur-[0.5px] pointer-events-none" />

      {/* Subtle Vignette for warm cinematic depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(255,209,220,0.45)_100%] pointer-events-none" />
    </div>
  );
}
