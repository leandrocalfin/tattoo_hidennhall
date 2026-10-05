"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = Array.from({ length: 98 }, (_, i) => {
  const num = i + 1;
  const ext = [23, 26, 31, 38, 76, 77, 78, 79, 83, 84, 85, 87, 93, 95].includes(num) ? ".heic" : ".jpg";
  return `/galeria/${num}${ext}`;
});

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const third = Math.ceil(images.length / 3);
  const topRow = images.slice(0, third);
  const middleRow = images.slice(third, third * 2);
  const bottomRow = images.slice(third * 2);

  return (
    <>
      <div className="relative overflow-hidden -mx-6 py-3">
        <div className="flex gap-3 mb-3 animate-scroll-left">
          {[...topRow, ...topRow].map((src, i) => (
            <button
              key={`top-${i}`}
              onClick={() => openLightbox(i % topRow.length)}
              className="relative h-28 w-44 md:h-40 md:w-64 shrink-0 overflow-hidden border border-neutral-800 hover:border-amber-500/50 bg-neutral-900 cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Trabajo ${i + 1}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </button>
          ))}
        </div>

        <div className="flex gap-3 mb-3 animate-scroll-right">
          {[...middleRow, ...middleRow].map((src, i) => (
            <button
              key={`middle-${i}`}
              onClick={() => openLightbox(i % middleRow.length + topRow.length)}
              className="relative h-28 w-44 md:h-40 md:w-64 shrink-0 overflow-hidden border border-neutral-800 hover:border-amber-500/50 bg-neutral-900 cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Trabajo ${i + 1}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </button>
          ))}
        </div>

        <div className="flex gap-3 animate-scroll-left">
          {[...bottomRow, ...bottomRow].map((src, i) => (
            <button
              key={`bottom-${i}`}
              onClick={() => openLightbox(i % bottomRow.length + topRow.length + middleRow.length)}
              className="relative h-28 w-44 md:h-40 md:w-64 shrink-0 overflow-hidden border border-neutral-800 hover:border-amber-500/50 bg-neutral-900 cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Trabajo ${i + 1}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition z-10 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square md:aspect-video">
              <Image
                src={images[currentIndex]}
                alt={`Trabajo ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 1024px, 100vw"
              />
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
