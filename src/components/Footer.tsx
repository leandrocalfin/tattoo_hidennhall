import Image from "next/image";
import Starfield from "@/components/Starfield";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 overflow-hidden">
      <Starfield count={60} />
      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        <Image src="/logo.png" alt="Hiddenhall Tattoo" width={90} height={90} />

        <p className="font-body text-neutral-500 text-sm text-center">
          © 2026 — Todos los derechos reservados
          <br />
          Sitio desarrollado por Leandro Calfin
        </p>
      </div>
    </footer>
  );
}
