import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-31T18:00:00-07:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number, string][] = [
    ["Days", t.d, "أيام"],
    ["Hours", t.h, "ساعات"],
    ["Minutes", t.m, "دقائق"],
    ["Seconds", t.s, "ثواني"],
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
      {items.map(([label, value, ar]) => (
        <div key={label} className="text-center">
          <div className="relative aspect-square flex flex-col items-center justify-center border border-[var(--gold-soft)]/60 rounded-sm bg-[var(--cream)]/40">
            <div className="absolute inset-1 border border-[var(--gold-soft)]/30 rounded-sm pointer-events-none" />
            <div className="font-display text-3xl sm:text-5xl text-gold tabular-nums">
              {String(value).padStart(2, "0")}
            </div>
          </div>
          <div className="mt-2 text-xs tracking-[0.3em] uppercase text-gold/80">{label}</div>
          <div className="font-arabic text-sm text-gold/70">{ar}</div>
        </div>
      ))}
    </div>
  );
}
