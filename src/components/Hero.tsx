import Image from "next/image";

export default function Hero() {
  return (
    <div data-no-reveal className="grid md:grid-cols-2 lg:grid-cols-[1.15fr_1fr] items-center gap-6 md:gap-10 w-full">
      <div className="relative aspect-[4/3] md:aspect-auto md:h-[82vh] overflow-hidden lg:-mt-12 md:ml-8 rounded-md order-2 md:order-1">
        <Image src="/hero.jpg" alt="Hidden Hall Tattoo" fill className="object-cover" priority sizes="(min-width: 768px) 50vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-l from-neutral-950 via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent" />
      </div>

      <div className="px-6 md:pr-16 md:pt-8 lg:-mt-20 order-1 md:order-2">
        <h1 className="font-humingson text-6xl md:text-7xl lg:text-9xl leading-[0.95] text-[#f3ead8] text-center [text-shadow:3px_3px_0_#d63c2f]">
          Hiddenhall
        </h1>
        <p className="font-traffic text-3xl md:text-3xl lg:text-4xl text-white mt-2 tracking-widest uppercase text-center">
          Tattoo Studio
        </p>
        <p className="font-body mt-6 max-w-md mx-auto text-center text-white md:text-sm lg:text-base">
          Transformamos tus ideas y emociones en auténticas obras de arte.
          Estudio privado en Río Gallegos, Santa Cruz.
        </p>

        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4">
          <a href="#galeria" className="px-6 py-3 bg-neutral-900 text-[#f3ead8] uppercase tracking-widest text-lg md:text-sm lg:text-lg rounded-md font-brush border border-amber-500 hover:border-amber-400 hover:scale-[1.02] hover:tracking-[0.18em] transition-all duration-300">
            Ver trabajos
          </a>
          <a
            href="https://wa.me/5492966231254?text=Hola%20Hiddenhall!%20Quiero%20agendar%20una%20cita%20para%20un%20tatuaje."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-neutral-900 text-[#f3ead8] uppercase tracking-widest text-lg md:text-sm lg:text-lg rounded-md font-brush border border-amber-500 hover:border-amber-400 hover:scale-[1.02] hover:tracking-[0.18em] transition-all duration-300"
          >
            Agenda tu cita
          </a>
        </div>

        <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4 border-t border-neutral-800 pt-6 text-center">
          <div>
            <p className="font-brush text-4xl md:text-2xl lg:text-4xl text-amber-500">10<span className="font-brush">+</span></p>
            <p className="text-xs uppercase tracking-widest text-neutral-500">años tatuando</p>
          </div>
          <div>
            <p className="font-brush text-4xl md:text-2xl lg:text-4xl text-amber-500">500<span className="font-brush">+</span></p>
            <p className="text-xs uppercase tracking-widest text-neutral-500">tatuajes hechos</p>
          </div>
          <div>
            <p className="font-brush text-4xl md:text-2xl lg:text-4xl text-amber-500">100<span className="font-brush">%</span></p>
            <p className="text-xs uppercase tracking-widest text-neutral-500">diseños únicos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
