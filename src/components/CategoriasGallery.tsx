"use client";

import { useState } from "react";
import Image from "next/image";

export type CategoriaImagenes = { title: string; images: string[] };

export default function CategoriasGallery({
  items,
}: {
  items: CategoriaImagenes[];
}) {
  const itemsConTodos = [
    { title: "Todos", images: [...new Set(items.flatMap((i) => i.images))] },
    ...items,
  ];
  const [active, setActive] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(12);
  const current = itemsConTodos.find((i) => i.title === active);
  const selectCategory = (title: string) => {
    setActive(title);
    setVisibleCount(12);
  };

  return (
    <>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
        {itemsConTodos.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => selectCategory(item.title)}
            className={`rounded-full border px-3 py-1 text-xs sm:px-5 sm:py-2 sm:text-sm font-brush uppercase tracking-widest transition-all duration-300 ${
              active === item.title
                ? "border-amber-500 bg-amber-500 text-neutral-950"
                : "border-amber-500/60 bg-neutral-900 text-amber-500 hover:bg-amber-500 hover:text-neutral-950"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {current && current.images.length > 0 ? (
          current.images.slice(0, visibleCount).map((src) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-md border border-neutral-800"
            >
              <Image
                src={src}
                alt={current.title}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center font-body text-sm text-neutral-500">
            Próximamente fotos.
          </p>
        )}
      </div>

      {current && current.images.length > visibleCount && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => n + 12)}
            className="rounded-md border border-amber-500 bg-neutral-900 px-6 py-2 font-brush text-lg uppercase tracking-widest text-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-neutral-950"
          >
            Ver más
          </button>
        </div>
      )}
    </>
  );
}
