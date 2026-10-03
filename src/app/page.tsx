import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const SECTION_TITLE =
  "font-humingson title-glow text-5xl md:text-5xl lg:text-6xl text-center text-neutral-100 mb-12";

const services = [
  {
    title: "Tatuajes Realistas",
    img: "/galeria/22.jpg",
    desc: "Retratos y figuras con una calidad asombrosa. Capturamos texturas, sombras y detalles hiperrealistas para que cada imagen cobre vida propia en tu piel.",
  },
  {
    title: "Tatuajes Tradicionales",
    img: "/galeria/1.jpg",
    desc: "Estilos clásicos con carácter atemporal. Diseños icónicos de líneas gruesas, colores vibrantes y una estética tradicional inconfundible.",
  },
  {
    title: "Tatuajes Personalizados",
    img: "/galeria/2.jpg",
    desc: "Tu idea convertida en una obra de arte única. Trabajamos codo a codo contigo para crear diseños a medida que reflejen tu historia y estilo.",
  },
  {
    title: "Tatuajes Fine Line",
    img: "/galeria/34.jpg",
    desc: "Delicadeza y precisión milimétrica. Piezas sutiles, elegantes y detalladas, desde formatos pequeños hasta composiciones grandes.",
  },
  {
    title: "Tatuajes Lettering",
    img: "/galeria/30.jpg",
    desc: "Frases, nombres o citas que cobran vida propia. Dominamos desde líneas finas y caligrafías elegantes hasta estilos góticos y urbanos, cuidando cada detalle para que tus palabras tengan una identidad visual única.",
  },
  {
    title: "Arreglos y Cover-up",
    img: "/galeria/24.jpg",
    desc: "Damos nueva vida a tus antiguos tatuajes. Transformamos, retocamos o cubrimos piezas anteriores con diseños renovados y de alta calidad.",
  },
];

const artists = [
  {
    name: "Morti",
    photo: "/Morti.png",
    style: "Tradicional | Neo",
    instagram: "https://www.instagram.com/morti.hh",
    whatsapp: "https://wa.me/5492966231254",
  },
  {
    name: "Beast",
    photo: "/Beast.jpg",
    style: "Black & Grey • Realismo",
    instagram: "https://www.instagram.com/beastatuss",
    whatsapp: "https://wa.me/5492966231225",
  },
  {
    name: "Palita",
    photo: "/Palita.png",
    style: "Neo-tradicional / Fine Line",
    instagram: "https://www.instagram.com/palita.tattz",
    whatsapp: "https://wa.me/5492966717568",
  },
  {
    name: "Pala",
    photo: "/Pala.jpg",
    style: "Neotradicional a Color / Ilustrativo",
    instagram: "https://www.instagram.com/pala_mania",
    whatsapp: "https://wa.me/5492966385319",
  },
  {
    name: "Zombie",
    photo: "/Zombie.jpg",
    style: "Realismo Black & Grey + Full Color",
    instagram: "https://www.instagram.com/zombie_tatuero",
    whatsapp: "https://wa.me/5492966632600",
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-neutral-950">
      <Navbar />

      <section id="inicio" className="relative flex min-h-[85vh] items-center justify-center py-8">
        <Hero />
      </section>

      <section id="estudio" className="scroll-mt-8 px-6 py-20 max-w-5xl mx-auto">
        <h2 className={SECTION_TITLE}>Nuestro Espacio</h2>
        <p className="sm:hidden font-subtitle subtitle-stroke text-3xl mb-8 text-center leading-tight max-w-md mx-auto">
          Transformamos tus ideas y emociones en auténticas obras de arte.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-[auto_minmax(0,30rem)] gap-4 sm:gap-10 items-center sm:items-start justify-center">
          <div className="relative w-full sm:max-w-2xs">
            <div className="absolute -inset-3 border border-amber-500/30 rounded-md" />
            <div className="absolute -inset-3 rounded-md shadow-[0_0_40px_rgba(245,158,11,0.15)]" />
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/poster.jpg"
              className="relative w-full rounded-md border border-neutral-700 shadow-2xl shadow-black"
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="hidden sm:block font-subtitle subtitle-stroke text-2xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 text-center leading-tight sm:leading-none">
              Transformamos tus ideas y emociones en auténticas obras de arte.
            </p>
            <p className="font-body text-neutral-400 text-sm sm:text-sm lg:text-lg leading-relaxed text-justify">
              Bienvenidos a Hidden Hall Tattoo Studio, un refugio dedicado al arte y la creatividad
              en la piel. Nuestro objetivo es brindarte una experiencia personalizada en un ambiente
              profesional y único, donde cada trazo y cada línea reflejan nuestra pasión por
              transformar tus ideas en obras de arte permanentes.
            </p>
            <div className="mt-6 hidden sm:flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/hiddenhallstudio/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-[#f3ead8] uppercase tracking-widest text-lg rounded-md font-brush border border-amber-500 hover:border-amber-400 hover:scale-[1.02] hover:tracking-[0.18em] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <defs>
                    <radialGradient id="ig-gradient-desk" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#ig-gradient-desk)"
                    d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  />
                </svg>
                Seguinos en Instagram
              </a>
              <a
                href="https://wa.me/5492966231254"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-[#f3ead8] uppercase tracking-widest text-lg rounded-md font-brush border border-amber-500 hover:border-amber-400 hover:scale-[1.02] hover:tracking-[0.18em] transition-all duration-300"
              >
                ¡Contactanos!
              </a>
            </div>
          </div>
        </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:hidden">
              <a
                href="https://www.instagram.com/hiddenhallstudio/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-[#f3ead8] uppercase tracking-widest text-lg rounded-md font-brush border border-amber-500 hover:border-amber-400 hover:scale-[1.02] hover:tracking-[0.18em] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <defs>
                    <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#ig-gradient)"
                    d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  />
                </svg>
                Seguinos en Instagram
              </a>
              <a
                href="https://wa.me/5492966231254"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-[#f3ead8] uppercase tracking-widest text-lg rounded-md font-brush border border-amber-500 hover:border-amber-400 hover:scale-[1.02] hover:tracking-[0.18em] transition-all duration-300"
              >
                ¡Contactanos!
              </a>
            </div>
        <Reviews />
      </section>

      <section id="servicios" className="scroll-mt-8 px-6 py-20 max-w-7xl mx-auto">
        <h2 className={SECTION_TITLE}>Servicios</h2>
        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="relative overflow-hidden border border-neutral-800 rounded-md p-4 md:p-5 lg:p-8 hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute right-0 top-0 h-full w-2/5 pointer-events-none" data-no-reveal>
                <Image src={s.img} alt="" fill className="object-cover opacity-25" sizes="(min-width: 768px) 20vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-transparent" />
              </div>
              <div className="relative md:max-w-[58%]">
                <h3 className="font-brush text-xl md:text-2xl lg:text-3xl text-amber-500">{s.title}</h3>
                <p className="font-body mt-2 md:mt-3 text-neutral-400 leading-relaxed text-justify text-xs md:text-sm lg:text-base">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="artistas" className="relative scroll-mt-8 px-6 py-20 bg-neutral-900/50 overflow-hidden">
        <Image
          src="/logo.png"
          alt=""
          width={900}
          height={900}
          data-no-reveal
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
        />
        <h2 className={SECTION_TITLE}>Artistas</h2>
        <p className="font-body text-neutral-400 text-center max-w-2xl mx-auto mb-12">
          Conocé a los tatuadores de Hiddenhall, cada uno especializado en estilos distintivos y con una trayectoria impecable.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {artists.map((a) => (
            <div key={a.name} className="text-center group basis-2/5 md:basis-1/4">
              <div className="relative mx-auto h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border border-neutral-700 group-hover:border-amber-500/60 transition">
                <Image src={a.photo} alt={a.name} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="176px" />
              </div>
              <h3 className="mt-4 font-brush text-3xl md:text-2xl lg:text-3xl text-neutral-100 group-hover:text-amber-500 transition">{a.name}</h3>
              <p className="font-body text-neutral-400 text-xs mt-1 px-2">{a.style}</p>
              <div className="mt-2 flex items-center justify-center gap-3">
                <a href={a.whatsapp} target="_blank" rel="noreferrer" aria-label={`WhatsApp de ${a.name}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-amber-500 hover:border-amber-500 hover:scale-110 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.3-.2Z" />
                  </svg>
                </a>
<a href={a.instagram} target="_blank" rel="noreferrer" aria-label={`Instagram de ${a.name}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-amber-500 hover:border-amber-500 hover:scale-110 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path
                      d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2 .4 .4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="scroll-mt-8 px-6 py-20">
        <h2 className={SECTION_TITLE}>Galería</h2>
        <Gallery />
      </section>

      <section id="contacto" className="scroll-mt-8 px-6 py-20 max-w-6xl mx-auto">
        <h2 className={SECTION_TITLE}>Contacto</h2>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="font-subtitle subtitle-stroke text-5xl md:text-5xl lg:text-6xl mb-6 text-center leading-tight pt-3 animate-pulse">Turnos disponibles</p>
            <p className="font-brush text-2xl text-neutral-400 leading-relaxed text-justify">
              Estamos en Río Gallegos, Santa Cruz. ¿Dudas o presupuestos? Escribinos por
              WhatsApp o por mensaje directo en nuestras redes sociales.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-red-500 shrink-0 mt-0.5">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
                <div>
                  <p className="font-komika text-amber-500 uppercase tracking-widest text-sm">Ubicación</p>
                  <p className="font-body text-neutral-200 mt-1">Orkeke 183, Z9400 Río Gallegos, Santa Cruz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#25D366] shrink-0 mt-0.5">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.3-.2Z" />
                </svg>
                <div>
                  <p className="font-komika text-amber-500 uppercase tracking-widest text-sm">WhatsApp</p>
                  <a href="https://wa.me/5492966231254" target="_blank" rel="noreferrer" className="font-body text-neutral-200 mt-1 hover:text-amber-400 transition">
                    +54 9 2966 23-1254
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-800 pt-6 flex items-center gap-4">
              <p className="font-komika text-amber-500 uppercase tracking-widest text-sm">Seguinos en nuestras redes</p>
              <a href="https://www.instagram.com/hiddenhallstudio/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:scale-110 transition">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <defs>
                    <radialGradient id="ig-contact" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#ig-contact)"
                    d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-amber-500/30 rounded-md" />
            <div className="absolute -inset-3 rounded-md shadow-[0_0_40px_rgba(245,158,11,0.15)]" />
            <div className="relative h-80 md:h-[28rem] rounded-md overflow-hidden border border-neutral-700 shadow-2xl shadow-black">
              <iframe
                title="Ubicación Hiddenhall Tattoo"
                src="https://www.google.com/maps?q=-51.6183095,-69.2073845&z=16&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="https://wa.me/5492966231254"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-10 right-10 z-50 flex h-14 w-14 items-center justify-center"
      >
        <span className="whatsapp-wave absolute inset-0 rounded-full bg-green-500" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-black/50 hover:bg-green-400 transition">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.3-.2Z" />
          </svg>
        </span>
      </a>
    </main>
  );
}
