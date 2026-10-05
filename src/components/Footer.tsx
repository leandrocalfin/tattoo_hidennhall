import Image from "next/image";
import Starfield from "@/components/Starfield";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        aria-hidden
        className="h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.4)]"
      />
      <Starfield count={60} />
      <div className="relative max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-4">
        <Image src="/logo.png" alt="Hiddenhall Tattoo" width={60} height={60} className="w-14 h-auto" />

        <p className="font-brush text-neutral-500 text-base tracking-widest uppercase text-center">
          © 2026 — Todos los derechos reservados
          <br />
          Sitio desarrollado por{" "}
          <a
            href="https://www.leandrocalfin.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="text-amber-500 hover:text-amber-400 transition"
          >
            Leandro Calfin
          </a>
        </p>
      </div>
    </footer>
  );
}
