"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const works = [
  { src: "/1.png", title: "Blackwork", subtitle: "Tinta sólida y diseño geométrico" },
  { src: "/2.png", title: "Realismo", subtitle: "Detalle fotográfico en tu piel" },
  { src: "/3.png", title: "Tradicional", subtitle: "Old school con actitud" },
  { src: "/4.png", title: "Cover Up", subtitle: "Damos una segunda vida a tu tatuaje" },
  { src: "/5.png", title: "Hiddenhall", subtitle: "Arte permanente en tu piel" },
  { src: "/6.png", title: "Hiddenhall", subtitle: "Agenda tu cita" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevOffsets = useRef<number[]>(works.map((_, i) => i));
  const prev = () => setIndex((i) => (i - 1 + works.length) % works.length);
  const next = () => setIndex((i) => (i + 1) % works.length);

  const n = works.length;
  const offsets = works.map((_, i) => {
    let o = (i - index) % n;
    if (o > n / 2) o -= n;
    if (o < -n / 2) o += n;
    return o;
  });

  useEffect(() => {
    prevOffsets.current = offsets;
  });

  useEffect(() => {
    if (hovered !== null) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), 4000);
    return () => clearInterval(t);
  }, [hovered, n]);

  return (
    <section id="inicio" className="relative flex h-[85vh] scroll-mt-28 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 md:left-40 top-1/2 -translate-y-[calc(50%+2.5rem)] z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#ff9e3d] to-[#ff2d78] shadow-[0_0_20px_rgba(255,45,120,0.4)] hover:scale-110 transition"
      >
        <span className="block text-3xl leading-none -translate-y-0.5 text-neutral-950 font-bold">‹</span>
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 md:right-40 top-1/2 -translate-y-[calc(50%+2.5rem)] z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#ff9e3d] to-[#ff2d78] shadow-[0_0_20px_rgba(255,45,120,0.4)] hover:scale-110 transition"
      >
        <span className="block text-3xl leading-none -translate-y-0.5 text-neutral-950 font-bold">›</span>
      </button>

      <div className="relative h-72 md:h-96 w-full -translate-y-10 [perspective:1200px]">
        <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          {works.map((w, i) => {
            const offset = offsets[i];
            const jumped = Math.abs(offset - prevOffsets.current[i]) > n / 2;
            const isCenter = offset === 0;
            return (
              <div
                key={w.src}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => {
                  setHovered(null);
                  const el = innerRefs.current[i];
                  if (el) el.style.transform = "rotateY(0deg)";
                }}
                onMouseMove={(e) => {
                  const el = innerRefs.current[i];
                  if (!el) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const tilt = ((e.clientX - rect.left) / rect.width - 0.5) * 70;
                  el.style.transform = `rotateY(${tilt}deg)`;
                }}
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset === 0 ? 0 : Math.sign(offset) * (115 + (Math.abs(offset) - 1) * 105)}%) translateZ(${isCenter ? 0 : -150 - Math.abs(offset) * 60}px) rotateY(${offset * -35}deg)`,
                  zIndex: works.length - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  transitionDuration: jumped ? "0ms" : undefined,
                }}
                className="absolute left-1/2 top-1/2 h-72 w-44 md:h-96 md:w-60 transition-all duration-700 [transform-style:preserve-3d]"
              >
                <div
                  ref={(el) => { innerRefs.current[i] = el; }}
                  className={`h-full w-full overflow-hidden rounded-md border bg-neutral-900 transition-transform duration-200 ease-out ${
                    isCenter
                      ? "border-amber-500/50 shadow-[0_0_30px_rgba(249,115,22,0.2),0_25px_50px_rgba(0,0,0,0.8)]"
                      : "border-neutral-700/60 shadow-[0_20px_40px_rgba(0,0,0,0.6)] brightness-50"
                  }`}
                >
                  <Image src={w.src} alt={w.title} fill className="object-cover" sizes="(min-width: 768px) 240px, 176px" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-16 inset-x-0 flex items-center justify-center gap-2 pointer-events-none">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-amber-500">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
        <p className="font-subtitle text-neutral-200 text-2xl tracking-wide">Rio Gallegos, Santa Cruz</p>
      </div>

    </section>
  );
}
