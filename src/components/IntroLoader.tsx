"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function IntroLoader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const shownOnce = useRef(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    // Mostrar solo una vez por carga completa de la app; navegar a Insumos
    // y volver no lo repite (isHome cambia pero el componente no se desmonta).
    if (shownOnce.current) {
      document.body.classList.add("intro-done");
      setGone(true);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const visibleMs = reduced ? 300 : 1800;
    const fadeMs = reduced ? 0 : 500;

    // Bloquea el scroll mientras está el splash
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t1 = window.setTimeout(() => {
      setFading(true);
      document.body.classList.add("intro-done");
    }, visibleMs);
    const t2 = window.setTimeout(() => {
      setGone(true);
      shownOnce.current = true;
      document.body.style.overflow = prevOverflow;
    }, visibleMs + fadeMs);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.style.overflow = prevOverflow;
    };
  }, [isHome]);

  if (!isHome || gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-neutral-950 transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={120}
        height={120}
        priority
        className="w-24 h-auto sm:w-28 [filter:drop-shadow(0_0_30px_rgba(245,158,11,0.25))]"
      />
      <p className="intro-text font-brush text-xl sm:text-2xl uppercase tracking-[0.3em]">
        Ingresando
      </p>
    </div>
  );
}
