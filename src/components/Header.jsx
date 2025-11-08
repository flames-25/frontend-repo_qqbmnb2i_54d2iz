import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, PlayCircle } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const nav = {
  platformen: [
    {
      name: 'Odoo',
      logo: 'O',
      items: [
        'Setup',
        'Integration',
        'Anpassung',
        'Schnittstellen',
      ],
    },
    {
      name: 'weclapp ERP',
      logo: 'W',
      items: [
        'Setup',
        'Integration',
        'Anpassung',
        'Schnittstellen',
      ],
    },
    {
      name: 'Zoho Suite',
      logo: 'Z',
      items: [
        'Setup',
        'Integration',
        'Anpassung',
        'Schnittstellen',
      ],
    },
  ],
  loesungen: [
    {
      name: 'Prozesse optimieren',
      items: ['Abläufe sichtbar machen', 'Durchlaufzeiten senken', 'Datenqualität erhöhen', 'Teams entlasten'],
    },
    {
      name: 'Intelligent automatisieren',
      items: ['Workflows verbinden', 'Bots für Routine', 'Prüfungen einbauen'],
    },
    {
      name: 'Digital wachsen',
      items: ['Shops anbinden', 'CRM stärken', 'Self-Service schaffen', 'Berichte standardisieren'],
    },
  ],
  wissen: [{ name: 'Blog' }, { name: 'Erfolgsgeschichten' }],
  ueber: [{ name: 'Mission' }, { name: 'Team' }, { name: 'Standorte' }],
};

export default function Header() {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      ref={headerRef}
      className={classNames(
        'sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition-shadow',
        scrolled ? 'shadow-md' : 'shadow-none'
      )}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="Mate iT Startseite">
            <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-tr from-[#FFD700] via-[#4169E1] to-[#8B00FF]" />
            <span className="text-slate-900">Mate iT – Digital Architects</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <button
                onMouseEnter={() => setOpen('plattformen')}
                onFocus={() => setOpen('plattformen')}
                className="group inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]"
                aria-haspopup="true"
                aria-expanded={open === 'plattformen'}
              >
                Plattformen <ChevronDown className="h-4 w-4 transition-transform group-aria-expanded:rotate-180" />
              </button>
              {open === 'plattformen' && (
                <MegaPanel onClose={() => setOpen(null)}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {nav.platformen.map((p) => (
                      <div key={p.name} className="rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#FFD700] via-[#4169E1] to-[#8B00FF] text-white font-bold">
                            {p.logo}
                          </div>
                          <div className="font-medium text-slate-900">{p.name}</div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          {p.items.map((i) => (
                            <li key={i}>
                              <a href="#plattformen" className="text-slate-600 hover:text-slate-900">{i}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </MegaPanel>
              )}
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setOpen('loesungen')}
                onFocus={() => setOpen('loesungen')}
                className="group inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]"
                aria-haspopup="true"
                aria-expanded={open === 'loesungen'}
              >
                Lösungen <ChevronDown className="h-4 w-4" />
              </button>
              {open === 'loesungen' && (
                <MegaPanel onClose={() => setOpen(null)}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {nav.loesungen.map((col) => (
                      <div key={col.name} className="rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5">
                        <div className="mb-3 font-medium text-slate-900">{col.name}</div>
                        <ul className="space-y-2 text-sm">
                          {col.items.map((i) => (
                            <li key={i}><a href="#loesungen" className="text-slate-600 hover:text-slate-900">{i}</a></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </MegaPanel>
              )}
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setOpen('wissen')}
                onFocus={() => setOpen('wissen')}
                className="group inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]"
                aria-haspopup="true"
                aria-expanded={open === 'wissen'}
              >
                Ratgeber & Wissen <ChevronDown className="h-4 w-4" />
              </button>
              {open === 'wissen' && (
                <MegaPanel onClose={() => setOpen(null)}>
                  <div className="grid grid-cols-2 gap-6">
                    {nav.wissen.map((w) => (
                      <a key={w.name} href="#wissen" className="rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5 text-slate-700 hover:text-slate-900">{w.name}</a>
                    ))}
                  </div>
                </MegaPanel>
              )}
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setOpen('ueber')}
                onFocus={() => setOpen('ueber')}
                className="group inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]"
                aria-haspopup="true"
                aria-expanded={open === 'ueber'}
              >
                Über uns <ChevronDown className="h-4 w-4" />
              </button>
              {open === 'ueber' && (
                <MegaPanel onClose={() => setOpen(null)}>
                  <div className="grid grid-cols-3 gap-6">
                    {nav.ueber.map((u) => (
                      <a key={u.name} href="#ueber" className="rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5 text-slate-700 hover:text-slate-900">{u.name}</a>
                    ))}
                  </div>
                </MegaPanel>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-white/70 px-4 py-2 text-slate-900 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-md">
              <Sparkles className="h-4 w-4 text-[#4169E1]" />
              Kostenlose Beratung
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD700] via-[#4169E1] to-[#8B00FF] px-4 py-2 text-white shadow-sm transition hover:opacity-95">
              <PlayCircle className="h-4 w-4" />
              Demo buchen
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(open === 'mobile' ? null : 'mobile')}
            aria-label="Menü öffnen"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>

      {open && open !== 'mobile' && (
        <div className="hidden lg:block" onMouseLeave={() => setOpen(null)} />
      )}

      {open === 'mobile' && (
        <div className="lg:hidden border-t border-slate-200 bg-white/70 backdrop-blur">
          <div className="space-y-1 p-4">
            <a href="#plattformen" className="block rounded-lg px-3 py-2 hover:bg-white">Plattformen</a>
            <a href="#loesungen" className="block rounded-lg px-3 py-2 hover:bg-white">Lösungen</a>
            <a href="#wissen" className="block rounded-lg px-3 py-2 hover:bg-white">Ratgeber & Wissen</a>
            <a href="#ueber" className="block rounded-lg px-3 py-2 hover:bg-white">Über uns</a>
            <div className="flex gap-2 pt-2">
              <a href="#kontakt" className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-center">Kostenlose Beratung</a>
              <a href="#demo" className="flex-1 rounded-lg bg-gradient-to-r from-[#FFD700] via-[#4169E1] to-[#8B00FF] px-3 py-2 text-center text-white">Demo buchen</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaPanel({ children, onClose }) {
  return (
    <div className="absolute left-1/2 z-50 w-screen max-w-5xl -translate-x-1/2 pt-2" onMouseLeave={onClose}>
      <div className="rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur">
        {children}
      </div>
    </div>
  );
}
