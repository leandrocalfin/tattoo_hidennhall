"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // El CSS ya fuerza opacity:1 para estos usuarios; saltar el observer evita
    // agregar una clase inerte y observar ~130 elementos al pedo.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll("h1, h2, h3, section p, section > div, section a, section img, footer");
    els.forEach((el) => {
      if (el.closest("[data-no-reveal]") || el.hasAttribute("data-no-reveal")) return;
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
