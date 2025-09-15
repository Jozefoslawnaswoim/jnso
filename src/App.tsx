import React from "react";

// Minimalna, samowystarczalna wersja strony do podglądu (bez zewnętrznych bibliotek)
// - brak TypeScriptowych adnotacji
// - brak framer-motion i paczek ikon (używamy emoji)
// - wszystko w jednym pliku, eksport domyślny komponentu React

const NAZWA = "Józefosław Na Swoim";
const FB_URL = "https://www.facebook.com/JozefoslawNaSwoim";
const LOGO_URL = "/jnso.png"; // wrzuć plik do folderu public/ o nazwie jnso.png
 // ← podmień, jeśli inny

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <WhyNow />
        <Roadmap /><HowToHelp />
        <FAQ />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt={NAZWA} className="h-9 w-9 rounded-2xl ring-1 ring-emerald-200 bg-white object-cover" />
          <div className="leading-tight">
            <div className="font-bold text-slate-900">{NAZWA}</div>
            <div className="text-xs text-slate-500">Oddolna inicjatywa mieszkańców</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#dlaczego" className="hover:text-emerald-700">Dlaczego?</a>
          <a href="#plan" className="hover:text-emerald-700">Plan</a>
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="#dokumenty" className="hover:text-emerald-700">Dokumenty</a>
          <a href="#kontakt" className="hover:text-emerald-700">Kontakt</a>
        </nav>
        <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-700">
          👍 Dołącz na Facebooku
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_40%)]"/>
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Józefosław na swoim: <span className="text-emerald-700">czas na rozmowę</span> o własnej gminie
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Naszym celem jest otwarta debata o przyszłości największej wsi w Polsce i możliwości utworzenia gminy <strong>Józefosław</strong>.
            Chcemy więcej infrastruktury, mądrzejszego planowania przestrzennego i realnego wpływu mieszkańców.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-700">
              👍 Dołącz do dyskusji na FB
            </a>
            <a href="#dlaczego" className="inline-flex items-center gap-2 rounded-2xl bg-white border px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50">
              Dowiedz się więcej →
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">To inicjatywa społeczna — nie zbieramy składek, tylko głosy, pomysły i energię do działania.</p>
        </div>
        <div>
          <div className="relative rounded-3xl shadow-lg ring-1 ring-slate-200 overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "62.5%" }}>
              <iframe
                title="Mapa Józefosław"
                className="absolute inset-0 w-full h-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=20.98%2C52.08%2C21.07%2C52.13&layer=mapnik&marker=52.105%2C21.02"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">Mapa poglądowa okolic Józefosławia (OpenStreetMap – osadzona jako iframe, bez limitów obrazków).</p>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  const items = [
    {
      icon: "🛡️",
      title: "Jakość życia ponad chaosem inwestycyjnym",
      text: "Wiele decyzji planistycznych zapada bez wystarczających konsultacji. Chcemy wzmocnić głos mieszkańców i poprawić ład przestrzenny.",
    },
    {
      icon: "🤝",
      title: "Więcej infrastruktury dla rodzin",
      text: "Boiska, parki, ścieżki pieszo-rowerowe i kultura — Józefosław potrzebuje inwestycji adekwatnych do liczby mieszkańców.",
    },
    {
      icon: "📣",
      title: "Przejrzystość i rozliczalność",
      text: "Budżet blisko mieszkańców to większa kontrola nad priorytetami i szybsza realizacja potrzeb.",
    },
  ];
  return (
    <section id="dlaczego" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Dlaczego teraz?</h2>
            <p className="mt-4 text-slate-600">
              Inicjatywa <strong>{NAZWA}</strong> startuje, aby zebrać dane, opinie i poparcie dla rozpoczęcia formalnych analiz utworzenia gminy Józefosław. Na tym etapie <em>pytamy mieszkańców</em> i porządkujemy argumenty — za i przeciw.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700 list-disc pl-5">
              <li>Pełny szacunek dla prawa i procedur samorządowych.</li>
              <li>Otwartość na dialog z gminą Piaseczno i sąsiadami.</li>
              <li>Transparentność danych i finansów inicjatywy (brak składek).</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <div key={i} className="rounded-3xl border p-5 shadow-sm">
                <div className="text-xl">{it.icon}</div>
                <div className="mt-3 font-bold">{it.title}</div>
                <div className="mt-1 text-sm text-slate-600">{it.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    { title: "Zbiór opinii mieszkańców (dyskusje online/offline)", detail: "Zbieramy głosy i uwagi — transparentnie." },
    { title: "Analiza prawna i finansowa", detail: "Ocena warunków ustawowych, podatków i kosztów usług publicznych." },
    { title: "Konsultacje społeczne i warsztaty", detail: "Otwarte spotkania: transport, edukacja, zieleń, bezpieczeństwo." },
    { title: "Wniosek i procedura formalna", detail: "Jeśli poparcie będzie znaczące — praca nad wnioskiem zgodnym z ustawą o samorządzie gminnym." },
  ];
  return (
    <section id="plan" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan działania</h2>
        <ol className="mt-6 grid md:grid-cols-2 gap-4">
          {steps.map((s, i) => (
            <li key={i} className="rounded-3xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold">{i+1}</div>
                <div className="font-semibold">{s.title}</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


function HowToHelp(){
  const items = [
    {title:"Dołącz do zespołu wolontariuszy", text:"Potrzebni są specjaliści od prawa, finansów, urbanistyki, komunikacji i IT."},
    {title:"Zbieraj głosy poparcia", text:"Porozmawiaj z sąsiadami, udostępnij link do FB, rozwieś plakaty w dozwolonych miejscach."},
    {title:"Zgłaszaj problemy i pomysły", text:"Dodaj lokalne uwagi, które powinny trafić do planu działań."},
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Jak możesz pomóc?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {items.map((it, i)=> (
            <div key={i} className="rounded-3xl border p-5 shadow-sm">
              <div className="font-semibold">{it.title}</div>
              <div className="mt-2 text-sm text-slate-600">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const faqs = [
    {q:"Czy utworzenie nowej gminy jest w ogóle możliwe?", a:"Tak, polskie prawo przewiduje możliwość tworzenia, łączenia i dzielenia gmin. Wymaga to spełnienia warunków ustawowych, konsultacji oraz decyzji administracyjnych. Na tym etapie prowadzimy rozmowę i zbieramy dane."},
    {q:"Czy to oznacza konflikt z Piasecznem?", a:"Nie. Chcemy merytorycznego dialogu i szacunku dla wspólnych interesów. Spory nie służą mieszkańcom."},
    {q:"Co z podatkami i finansami?", a:"Konieczna jest szczegółowa analiza dochodów i kosztów świadczenia usług (oświata, drogi, zieleń, pomoc społeczna). Po zebraniu danych opublikujemy otwarty model finansowy."},
    {q:"Jak mogę się zaangażować?", a:"Dołącz na Facebooku, zgłoś się do zespołu wolontariuszy, podziel się pomysłami."},
  ];
  return (
    <section id="faq" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Najczęstsze pytania</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((f,i)=> (
            <details key={i} className="rounded-2xl border bg-white p-4">
              <summary className="font-semibold cursor-pointer select-none">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documents(){
  const docs = [
    {name:"Założenia inicjatywy", href:"#", note:"Wersja robocza"},
    {name:"Harmonogram prac", href:"#", note:"Draft"},
    {name:"Pytania do mieszkańców", href:"#", note:"W przygotowaniu"},
  ];
  return (
    <section id="dokumenty" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Dokumenty</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {docs.map((d, i)=> (
            <a key={i} href={d.href} className="rounded-3xl border p-5 shadow-sm bg-white hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="text-xl">📄</div>
                <div className="font-semibold">{d.name}</div>
              </div>
              <div className="mt-1 text-xs text-slate-500">{d.note}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section id="kontakt" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-xl">📣</div>
            <div>
              <h3 className="text-xl font-extrabold">Kontakt</h3>
              <p className="mt-2 text-sm text-slate-700">Pytania i aktualności znajdziesz na naszym Facebooku.</p>
              <div className="mt-3">
                <a className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-700" href={FB_URL} target="_blank" rel="noopener noreferrer">
                  📣 Strona na Facebooku
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-500">To nasz oficjalny kanał aktualności i kontaktu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="py-10 border-t">
      <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 flex flex-wrap items-center gap-2 justify-between">
        <div>
          © {new Date().getFullYear()} {NAZWA}. Wszystkie prawa zastrzeżone.
        </div>
        <div className="flex items-center gap-4">
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="#kontakt" className="hover:text-emerald-700">Kontakt</a>
          <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
