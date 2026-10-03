"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Starfield from "@/components/Starfield";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "estudio", label: "Estudio" },
  { id: "servicios", label: "Servicios" },
  { id: "artistas", label: "Artistas" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "inicio";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En móvil el menú se cierra con Escape o al pasar a desktop.
  // No se bloquea el scroll del fondo para no interferir con el scroll suave de los links.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open ]);

  const goTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = (id: string) =>
    `inline-block hover:scale-105 hover:text-amber-500 transition-all duration-200 ${
      active === id ? "text-amber-500" : "text-white"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transform-gpu transition-colors duration-300 ${
          scrolled || open
            ? "bg-neutral-950 sm:bg-neutral-950/85 sm:backdrop-blur-md"
            : "bg-neutral-950 sm:bg-neutral-950/85 sm:backdrop-blur-md lg:bg-transparent"
        }`}
      >
        <div className="sm:hidden" aria-hidden="true">
          <Starfield count={18} />
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <Starfield count={50} />
        </div>
        <div id="nav-row" className="relative flex items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#inicio" aria-label="Inicio" onClick={goTop} className="relative z-10 shrink-0">
          <Image id="nav-logo" src="/logo.png" alt="Hiddenhall Tattoo" width={82} height={82} className="w-10 h-auto sm:w-[82px] sm:ml-4 md:ml-20 relative" />
        </a>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-4 text-3xl uppercase tracking-normal font-brush">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={id === "inicio" ? goTop : undefined}
              className={linkClass(id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div id="nav-right" className="relative z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            id="nav-cartel"
            href="https://wa.me/5492966231254?text=Hola%20Hiddenhall!%20Quiero%20reservar%20un%20turno."
            target="_blank"
            rel="noreferrer"
            className="block -rotate-3 border-2 border-amber-500 bg-neutral-950/90 rounded-md px-2 py-1 sm:px-4 sm:py-1.5 shadow-[0_0_12px_rgba(249,115,22,0.4)] hover:rotate-0 transition-all duration-300 animate-sign shrink-0"
          >
            <span className="font-subtitle subtitle-stroke text-xs sm:text-2xl whitespace-nowrap">Turnos Disponibles</span>
          </a>
          <button
            id="nav-burger"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={open}
            aria-controls="menu-movil"
          className="lg:hidden relative z-10 flex h-10 w-10 shrink-0 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-md"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        </div>

      {open && (
        <nav id="menu-movil" className="relative lg:hidden bg-neutral-950 sm:bg-neutral-950/95 sm:backdrop-blur-md border-t border-neutral-900 px-6 py-3 flex flex-col gap-2 text-lg uppercase tracking-normal font-brush items-center text-center max-h-[calc(100dvh-5rem)] overflow-y-auto">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                if (id === "inicio") { goTop(e); return; }
                setOpen(false);
              }}
              className={linkClass(id)}
            >
              {label}
            </a>
          ))}
          </nav>
        )}
      </header>

      <div className="h-20 sm:h-28" />
    </>
  );
}
