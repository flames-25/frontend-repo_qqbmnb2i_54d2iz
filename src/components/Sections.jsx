import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Check, MoveRight } from 'lucide-react';

export function ForWhom() {
  const items = [
    { title: 'Mittelstand', text: 'Klare Abläufe. Schnell startklar. Weniger Aufwand im Alltag.' },
    { title: 'Produzierendes Gewerbe', text: 'Vom Auftrag bis Versand: Wir verbinden Schritte und Daten.' },
    { title: 'E‑Commerce', text: 'Shop, ERP und Lager arbeiten zusammen. Ohne Excel-Chaos.' },
    { title: 'Service-Dienstleister', text: 'Transparente Tickets. Saubere Zeiterfassung. Faire Abrechnung.' },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" id="fuer-wen">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Für wen ist Mate iT?</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <Card key={i.title}>
            <div className="text-lg font-medium text-slate-900">{i.title}</div>
            <p className="mt-2 text-sm text-slate-600">{i.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function Problems() {
  const data = [
    {
      title: 'Von Chaos zu Klarheit',
      bullets: ['Prozesse sichtbar machen', 'Medienbrüche schließen', 'Verantwortungen klären'],
    },
    {
      title: 'Weniger Routine, mehr Wert',
      bullets: ['Automatisieren statt abtippen', 'Saubere Datenflüsse', 'Weniger Nacharbeit'],
    },
    {
      title: 'Skalierbar von Anfang an',
      bullets: ['Module statt Monolith', 'Schnittstellen ready', 'Wächst mit Ihrem Team'],
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" id="probleme">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Welche Probleme lösen wir?</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {data.map((c) => (
          <Card key={c.title}>
            <div className="text-lg font-medium text-slate-900">{c.title}</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-[#4169E1]" /> {b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function PlatformTabs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" id="plattformen">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Unsere Plattform-Expertise</h2>
      <div className="mt-6 rounded-3xl border border-white/30 bg-white/70 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3">
            <TabLogo label="Odoo" active />
            <TabLogo label="weclapp" />
            <TabLogo label="Zoho" />
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <LogoBadge>Odoo</LogoBadge>
              <p className="text-slate-700 text-sm">Odoo ist modular. Starten Sie klein, wachsen Sie Schritt für Schritt. Wir richten ein, integrieren und passen an – ohne Ballast.</p>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { t: 'Auftragsabwicklung', r: ['Vom Angebot zum Lieferschein', 'Saubere Lagerbewegungen', 'Transparente Status'] },
                { t: 'Finanzen & Rechnungen', r: ['Automatische Belege', 'Zahlungen abgleichen', 'Mahnen mit System'] },
                { t: 'Schnittstellen', r: ['Shop & Marktplätze', 'Versand & Zoll', 'BI & Reporting'] },
              ].map((f) => (
                <Card key={f.t}>
                  <div className="font-medium text-slate-900">{f.t}</div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {f.r.map((x) => (
                      <li key={x} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-[#4169E1]" /> {x}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
            <a href="#odoo" className="mt-6 inline-flex items-center gap-2 text-[#4169E1] hover:text-[#8B00FF]">Mehr zu Odoo <MoveRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const quotes = [
    { q: '–60% manuelle Schritte. Endlich saubere Übergaben.', a: 'COO, E‑Commerce Brand' },
    { q: 'Wir haben Klarheit gewonnen. Alle sehen den Status.', a: 'Leitung Operations, Produktion' },
    { q: 'Die Teams sind entspannter. Routine läuft im Hintergrund.', a: 'Geschäftsführer, Service' },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" id="trust">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Was sagen unsere Kunden?</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {quotes.map((c, i) => (
          <Card key={i}>
            <p className="text-slate-900">“{c.q}”</p>
            <p className="mt-3 text-sm text-slate-500">{c.a}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function Knowledge() {
  const blog = [
    { t: 'So ordnen Sie Prozesse in 30 Tagen', href: '#' },
    { t: 'Automatisieren ohne Risiko', href: '#' },
    { t: 'ERP-Auswahl: 7 Fragen', href: '#' },
  ];
  const stories = [
    { t: 'Produktion spart 60% Handgriffe', href: '#' },
    { t: 'Shop-Integration in 4 Wochen', href: '#' },
    { t: 'Service: Tickets in Klarheit', href: '#' },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" id="wissen">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Wissen & Inspiration</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ListCard title="Blog" items={blog} />
        <ListCard title="Erfolgsgeschichten" items={stories} />
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" id="kontakt">
      <div className="rounded-3xl border border-transparent bg-white/60 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Bereit für mehr Ordnung?</h2>
            <p className="mt-2 text-slate-600">Buchen Sie den 30‑Minuten‑Check. Konkreter Blick. Klare nächste Schritte.</p>
          </div>
          <a href="#termin" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#4169E1] to-[#8B00FF] px-6 py-3 text-white shadow-md transition hover:opacity-95">
            Jetzt Termin sichern
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="group rounded-2xl border border-white/30 bg-white/70 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur transition will-change-transform hover:-translate-y-0.5 hover:shadow-md">
      {children}
    </div>
  );
}

function TabLogo({ label, active }) {
  return (
    <button className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${active ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'}`}>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-[#FFD700] via-[#4169E1] to-[#8B00FF] text-white text-xs font-bold">{label[0]}</span>
      <span>{label}</span>
    </button>
  );
}

function LogoBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-3 py-1.5 text-slate-900 shadow-sm ring-1 ring-black/5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#FFD700] via-[#4169E1] to-[#8B00FF] text-white font-bold">{children[0]}</span>
      <span className="font-medium">{children}</span>
    </div>
  );
}

function ListCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/30 bg-white/70 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur">
      <div className="mb-3 text-lg font-medium text-slate-900">{title}</div>
      <ul className="space-y-2 text-slate-700">
        {items.map((i) => (
          <li key={i.t}>
            <a href={i.href} className="group inline-flex items-center gap-2 hover:text-[#4169E1]">
              <span>{i.t}</span>
              <MoveRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
      <a href="#mehr" className="mt-4 inline-block text-sm text-[#4169E1] hover:text-[#8B00FF]">Mehr lesen</a>
    </div>
  );
}
