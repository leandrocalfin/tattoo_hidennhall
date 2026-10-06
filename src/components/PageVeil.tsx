// Salto instantáneo arriba, sin importar el `scroll-behavior: smooth` global.
export function jumpTopInstant() {
  const html = document.documentElement;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.style.removeProperty("scroll-behavior");
}

let freezeTimeout = 0;

// Fuerza scroll instantáneo durante `ms`, por si alguna navegación o el
// CSS global intenta animar un scroll suave a destiempo. Usa una clase
// para no pisar el inline style de jumpTopInstant.
export function freezeScrollBehavior(ms: number) {
  const html = document.documentElement;
  html.classList.add("hh-freeze-scroll");
  window.clearTimeout(freezeTimeout);
  freezeTimeout = window.setTimeout(
    () => html.classList.remove("hh-freeze-scroll"),
    ms
  );
}
