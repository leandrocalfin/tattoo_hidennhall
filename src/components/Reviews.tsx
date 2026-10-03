import Image from "next/image";

const reviews = [
  { name: "Martín Gutiérrez", time: "hace 2 semanas", color: "#7b1fa2", text: "Excelente trabajo, súper profesionales. El tatuaje quedó increíble, muy recomendados." },
  { name: "Camila Rojas", time: "hace 1 mes", color: "#c2185b", text: "Muy buena onda y un laburo impecable. Volvería sin dudarlo." },
  { name: "Joaquín Sánchez", time: "hace 2 meses", color: "#00796b", text: "La amabilidad de todos es increíble. Excelente mano y atención de principio a fin." },
  { name: "Valentina Paredes", time: "hace 3 meses", color: "#e64a19", text: "Me hice un fine line y quedó hermoso. Súper cuidadosos con cada detalle." },
  { name: "Diego Fernández", time: "hace 4 meses", color: "#303f9f", text: "Gran lugar de tatuajes. Ambiente cómodo y resultados de otro nivel." },
  { name: "Lucía Morales", time: "hace 5 meses", color: "#5d4037", text: "Desde la idea hasta el resultado final, todo de diez. Artistas de verdad." },
  { name: "Nicolás Vega", time: "hace 6 meses", color: "#455a64", text: "Tengo varios tatuajes de distintos estudios y la onda que tienen estos chicos es bárbara." },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-amber-500">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.7 2.9c2.2-2.1 3.7-5.1 3.7-8.6z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.8-5L1.3 17.3C3.3 21.3 7.3 24 12 24z" />
      <path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4L1.3 6.7C.5 8.4 0 10.1 0 12s.5 3.6 1.3 5.3l3.9-2.9z" />
      <path fill="#EA4335" d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.7l3.9 2.9c.9-2.8 3.6-4.9 6.8-4.9z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <div className="mt-16 flex flex-col md:flex-row gap-6 items-stretch">
      <div className="flex flex-col items-center justify-center gap-2 p-6 md:w-56 shrink-0">
        <Image src="/logo.png" alt="Hiddenhall Tattoo" width={56} height={56} className="rounded-full h-auto w-auto" />
        <p className="font-brush text-neutral-100 text-lg md:text-base lg:text-lg uppercase tracking-widest text-center">Hiddenhall Tattoo</p>
        <Stars />
        <p className="font-body text-neutral-400 text-xs">Reseñas de Google</p>
        <a
          href="https://www.google.com.ar/maps/place/Hidden+Hall,+Tattoo+Studio/@-51.6204249,-69.2173512,16z/data=!4m12!1m2!2m1!1stattoo!3m8!1s0xbdb6f961b86d8ce9:0x6b6061e6cda4bcf8!8m2!3d-51.6183095!4d-69.2073845!9m1!1b1!15sCgZ0YXR0b2-SAQt0YXR0b29fc2hvcOABAA!16s%2Fg%2F11tgf3l_98?hl=es&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="mt-2 px-5 py-2.5 border border-amber-500 text-[#f3ead8] text-base uppercase tracking-widest font-brush rounded-md whitespace-nowrap hover:border-amber-400 hover:scale-[1.02] transition-all duration-300"
        >
          Escribí una reseña
        </a>
      </div>

      <div className="flex-1 min-w-0 max-w-full overflow-hidden pt-3 -mt-3">
        <div className="flex gap-6 animate-marquee w-max h-full">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-60 sm:w-72 shrink-0 rounded-md bg-gradient-to-b from-[#ff9e3d] to-[#ff2d78] p-px transition-transform duration-300 hover:-translate-y-2">
              <div className="h-full rounded-[5px] bg-neutral-900 p-4 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-neutral-100 text-sm font-semibold">{r.name}</p>
                    <p className="text-neutral-500 text-xs">{r.time}</p>
                  </div>
                </div>
                <GoogleG />
              </div>
              <div className="mt-3"><Stars /></div>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
