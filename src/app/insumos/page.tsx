import type { Metadata } from "next";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoriasGallery from "@/components/CategoriasGallery";

export const metadata: Metadata = {
  title: "Insumos PalaInk — Hiddenhall Tattoo",
  description:
    "Venta de insumos para tattoo dentro de Hidden Hall Tattoo Studio. Envíos a todo el país.",
};

const PLACEHOLDERS = [
  "Agujas",
  "Maquinas",
  "Fuentes",
  "Cables",
  "Baterias portatiles",
  "Tinta",
  "Diluyentes",
  "Cups",
  "Cartuchos",
  "Grips",
  "Guantes",
  "Papel absorbente",
  "Papel hectografico",
  "Geles",
  "Vaselina",
  "Cremas",
].map((title) => ({ title }));

const INSTAGRAM_URL = "https://www.instagram.com/palaink_insumos";

// Categoría → carpeta dentro de public/insumos (las que no mapean muestran "Próximamente fotos")
const CARPETA_POR_CATEGORIA: Record<string, string> = {
  Maquinas: "maquinas",
  Cables: "cables",
  Tinta: "tinta",
  Cups: "cups",
  Cartuchos: "cartuchos",
  Guantes: "higiene",
  "Papel absorbente": "higiene",
  Geles: "higiene",
  Vaselina: "butter",
  Cremas: "butter",
  Agujas: "agujas",
};

const EXTENSIONES_VALIDAS = /\.(jpe?g|png|webp|gif)$/i;

function imagenesDe(categoria: string): string[] {
  const carpeta = CARPETA_POR_CATEGORIA[categoria];
  if (!carpeta) return [];
  try {
    const dir = path.join(process.cwd(), "public", "insumos", carpeta);
    return fs
      .readdirSync(dir)
      .filter((f) => EXTENSIONES_VALIDAS.test(f))
      .map((f) => `/insumos/${carpeta}/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}

export default function InsumosPage() {
  return (
    <main className="flex-1 bg-neutral-950">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-10 pt-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:gap-16">
          <Image
            src="/palaInk_Insumos.png"
            alt="PalaInk Insumos"
            width={640}
            height={400}
            priority
            className="h-auto w-64 shrink-0 sm:w-80"
          />
          <div className="text-center">
        <h1 className="mt-6 font-humingson title-glow text-5xl text-neutral-100 md:mt-0 md:text-6xl">
          Insumos para tattoo
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-neutral-400 sm:text-base">
          Venta de insumos dentro de{" "}
          <a
            href="https://www.instagram.com/hiddenhallstudio"
            target="_blank"
            rel="noreferrer"
            className="text-amber-500 hover:text-amber-400 transition"
          >
            @hiddenhallstudio
          </a>
          .
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-widest">
          <span className="rounded-full border border-amber-500/60 px-4 py-1.5 font-brush text-amber-500">
            Envíos a todo el país
          </span>
          <span className="rounded-full border border-violet-500/60 px-4 py-1.5 font-brush text-violet-400">
            Venta en el local
          </span>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-[#f3ead8] uppercase tracking-widest text-lg rounded-md font-brush border border-amber-500 hover:border-amber-400 hover:scale-[1.02] transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                fill="currentColor"
                d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
              />
            </svg>
            @palaink_insumos
          </a>
        </div>
        <p className="mt-4 font-body text-xs text-neutral-500">
          Para comprar escribinos por mensaje directo en Instagram o pasá por
          el local.
        </p>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-brush uppercase tracking-normal text-4xl md:text-5xl text-center text-neutral-100 mb-4">
          Lo que vas a encontrar
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-body text-sm text-neutral-500">
          Catálogo ilustrativo, sin venta online. El stock varía: consultanos
          disponibilidad por Instagram antes de pasar por el local.
        </p>
        <CategoriasGallery
          items={PLACEHOLDERS.map(({ title }) => ({
            title,
            images: imagenesDe(title),
          }))}
        />
      </section>

      <Footer />
    </main>
  );
}
