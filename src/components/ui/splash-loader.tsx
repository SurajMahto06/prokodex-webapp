"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SplashLoader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShow(false), 400);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      {/* Logo */}
      <div className="relative mb-8 animate-[logoEntrance_0.5s_ease-out_forwards]">
        <Image
          src="/logo-dark.png"
          alt="Prokodex"
          width={160}
          height={60}
          className="hidden dark:block"
          priority
        />
        <Image
          src="/logo-light.png"
          alt="Prokodex"
          width={160}
          height={60}
          className="block dark:hidden"
          priority
        />
        {/* Glow effect behind logo */}
        <div className="absolute inset-0 -z-10 blur-2xl scale-150 opacity-20 bg-secondary rounded-full" />
      </div>

      {/* Animated progress bar */}
      <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-secondary via-secondary/60 to-secondary rounded-full animate-[progressBar_1.2s_ease-in-out_infinite]" />
      </div>

      {/* Subtitle */}
      <p className="mt-5 text-muted-foreground text-xs tracking-widest uppercase animate-pulse">
        Loading...
      </p>

      <style>{`
        @keyframes logoEntrance {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressBar {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
