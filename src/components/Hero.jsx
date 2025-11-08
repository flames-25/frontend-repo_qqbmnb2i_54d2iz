import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#FFD700]/40 via-[#4169E1]/30 to-[#8B00FF]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-[#8B00FF]/30 via-[#4169E1]/30 to-[#FFD700]/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-bold tracking-tight text-slate-900" style={{ fontFamily: 'Sora, ui-sans-serif', lineHeight: 1.1 }}>
            Ordnung in Ihre digitalen Abläufe – mit einem System, das mitwächst.
          </h1>
          <p className="mt-5 text-lg text-slate-600" style={{ fontFamily: 'Manrope, ui-sans-serif' }}>
            Wir sortieren Prozesse, verbinden Software-Bausteine und reduzieren Routine.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#4169E1] to-[#8B00FF] px-6 py-3 text-white shadow-md transition hover:opacity-95">
              Kostenlose Beratung
            </a>
            <a href="#plattformen" className="inline-flex items-center justify-center rounded-2xl bg-white/70 px-6 py-3 text-slate-900 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-md">
              Plattformen entdecken
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-700">
            <Chip>200+ Projekte</Chip>
            <Chip>50+ Integrationen</Chip>
            <Chip>
              <Star className="mr-1 inline h-3.5 w-3.5 text-[#FFD700]" /> Ø 4,9/5
            </Chip>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}
