import Header from './components/Header';
import Hero from './components/Hero';
import { ForWhom, Problems, PlatformTabs, Trust, Knowledge, FinalCTA } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white text-slate-900">
      <MetaTags />
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <Problems />
        <PlatformTabs />
        <Trust />
        <Knowledge />
        <FinalCTA />
      </main>
      <footer className="mx-auto max-w-7xl px-4 py-12 text-sm text-slate-500 lg:px-8">
        © {new Date().getFullYear()} Mate iT – Digital Architects
      </footer>
    </div>
  );
}

function MetaTags() {
  return (
    <>
      <title>Mate iT – Ordnung in digitale Abläufe | Digital Architects</title>
      <meta name="description" content="Wir sortieren Prozesse, verbinden Software-Bausteine und reduzieren Routine. Für Mittelstand, Produktion, E‑Commerce und Service." />
      <link rel="canonical" href="/" />
      <meta property="og:title" content="Mate iT – Ordnung in digitale Abläufe" />
      <meta property="og:description" content="Problem → Lösung → Beweise → nächster Schritt. Klar, menschlich, konkret." />
      <meta property="og:type" content="website" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Mate iT – Digital Architects',
        'url': '/',
        'logo': '/logo.png',
        'sameAs': []
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Digital Process Architecture & Integration',
        'brand': 'Mate iT',
        'description': 'Prozesse ordnen, Systeme verbinden, Routine reduzieren.'
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', 'meta[name=description]']
      }) }} />
    </>
  );
}
