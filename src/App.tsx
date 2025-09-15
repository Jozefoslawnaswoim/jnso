import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, ThumbsUp, Users, FileText, Landmark,  BarChart3 as ChartBar, AlertTriangle, Send, Download, Settings, ChevronRight, HeartHandshake, Megaphone, Shield, Building2 } from "lucide-react";

/**
 * JozefoslawNaSwoim.org — Jednoplikowa aplikacja React
 * Tech stack: React + TailwindCSS + Framer Motion + lucide-react
 * 
 * Jak użyć:
 * 1) Skopiuj ten komponent do projektu (Next.js / Vite). 
 * 2) Upewnij się, że włączyłeś TailwindCSS.
 * 3) (Opcjonalnie) Ustaw ENDPOINT_FORMULARZA, aby spinać ankietę z backendem / Formspree / własnym API.
 * 4) Podmień treści oznaczone // TODO: na finalne, zweryfikowane dane i odnośniki.
 * 
 * Formularz: domyślnie zapisuje odpowiedzi do localStorage i umożliwia ich eksport do CSV.
 * Jeśli ustawisz ENDPOINT_FORMULARZA (np. 
 *   const ENDPOINT_FORMULARZA = "https://formspree.io/f/XXXX";
 *), wysyłka pójdzie POST-em (JSON). 
 */

// -------------- KONFIG --------------
const NAZWA = "Józefosław Na Swoim";
const DOMENA = "JozefoslawNaSwoim.org";
// Jeśli skonfigurujesz endpoint, formularz wyśle dane na ten adres metodą POST (application/json)
const ENDPOINT_FORMULARZA: string | null = null; // np. "https://formspree.io/f/XXXX"

// -------------- NARZĘDZIA --------------
function classNames(...cls: Array<string | false | undefined>) {
  return cls.filter(Boolean).join(" ");
}

function toCSV(rows: any[]): string {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (val: any) => {
    if (val === null || val === undefined) return "";
    const s = String(val).replaceAll('"', '""');
    return `"${s}"`;
  };
  const headerRow = headers.map(escape).join(",");
  const dataRows = rows.map(r => headers.map(h => escape(r[h])).join(","));
  return [headerRow, ...dataRows].join("\n");
}

// -------------- KOMPONENT GŁÓWNY --------------
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <QuickStats />
        <WhyNow />
        <Roadmap />
        <PetitionCTA />
        <Survey />
        <MapSection />
        <HowToHelp />
        <FAQ />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// -------------- SEKCJE --------------
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100">
            <Landmark className="h-5 w-5 text-emerald-700" />
          </span>
          <div className="leading-tight">
            <div className="font-bold text-slate-900">{NAZWA}</div>
            <div className="text-xs text-slate-500">Oddolna inicjatywa mieszkańców</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#dlaczego" className="hover:text-emerald-700">Dlaczego?</a>
          <a href="#plan" className="hover:text-emerald-700">Plan</a>
          <a href="#ankieta" className="hover:text-emerald-700">Ankieta</a>
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="#dokumenty" className="hover:text-emerald-700">Dokumenty</a>
          <a href="#kontakt" className="hover:text-emerald-700">Kontakt</a>
        </nav>
        <a href="#ankieta" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-700">
          <ThumbsUp className="h-4 w-4" /> Wyraź poparcie
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
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}}>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Józefosław na swoim: <span className="text-emerald-700">czas na rozmowę</span> o własnej gminie
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Naszym celem jest otwarta debata o przyszłości największej wsi w Polsce i możliwości utworzenia gminy <strong>Józefosław</strong>.
            Chcemy więcej infrastruktury, mądrzejszego planowania przestrzennego i realnego wpływu mieszkańców.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#ankieta" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-700">
              <ThumbsUp className="h-5 w-5"/> Wypełnij ankietę poparcia
            </a>
            <a href="#dlaczego" className="inline-flex items-center gap-2 rounded-2xl bg-white border px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50">
              Dowiedz się więcej <ChevronRight className="h-4 w-4"/>
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">To inicjatywa społeczna — nie zbieramy składek, tylko głosy, pomysły i energię do działania.</p>
        </motion.div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} viewport={{once:true}}>
          <div className="relative rounded-3xl shadow-lg ring-1 ring-slate-200 overflow-hidden">
            <img
			        alt="Józefosław"
			        src="https://staticmap.openstreetmap.de/staticmap.php?center=52.105,21.02&zoom=13&size=800x500&markers=52.105,21.02,red-pushpin"
			        className="w-full h-auto"
			        loading="lazy"
			      />
          </div>
          <p className="mt-2 text-xs text-slate-500">Mapa poglądowa okolic Józefosławia. Dokładne położenie i dane demograficzne: do potwierdzenia.</p>
        </motion.div>
      </div>
    </section>
  );
}

function QuickStats() {
  const staty = [
    { icon: Users, label: "Liczba mieszkańców", value: "~16-17 tys.", note: "Szacunek — do potwierdzenia na podstawie danych GUS / ewidencji ludności." },
    { icon: Building2, label: "Skala zabudowy", value: "wysoka", note: "Wydawane liczne pozwolenia na budowę w ostatnich latach (dane lokalne)." },
    { icon: AlertTriangle, label: "Infrastruktura publiczna", value: "niewystarczająca", note: "Boiska, parki, miejsca rekreacji: zapotrzebowanie > podaż." },
    { icon: ChartBar, label: "Udział w podatkach", value: "znaczący", note: "Mieszkańcy oczekują proporcjonalnych inwestycji lokalnych." },
  ];
  return (
    <section className="py-10" aria-labelledby="staty">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="staty" className="sr-only">Szybkie fakty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {staty.map((s, i) => (
            <motion.div key={i} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="rounded-3xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-emerald-700"/>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
              <div className="mt-2 text-2xl font-extrabold">{s.value}</div>
              <div className="mt-1 text-xs text-slate-500">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  const items = [
    {
      icon: Shield,
      title: "Jakość życia ponad chaosem inwestycyjnym",
      text: "Wiele decyzji planistycznych zapada bez wystarczających konsultacji. Chcemy wzmocnić głos mieszkańców i poprawić ład przestrzenny.",
    },
    {
      icon: HeartHandshake,
      title: "Więcej infrastruktury dla rodzin",
      text: "Boiska, parki, ścieżki pieszo-rowerowe i kultura — Józefosław potrzebuje inwestycji adekwatnych do liczby mieszkańców.",
    },
    {
      icon: Megaphone,
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
              <motion.div key={i} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="rounded-3xl border p-5 shadow-sm">
                <it.icon className="h-6 w-6 text-emerald-700"/>
                <div className="mt-3 font-bold">{it.title}</div>
                <div className="mt-1 text-sm text-slate-600">{it.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    { title: "Zbiór opinii mieszkańców (ankieta)", detail: "Marchewka danych: kto popiera, jakie są obawy i priorytety." },
    { title: "Analiza prawna i finansowa", detail: "Ocena warunków ustawowych, podatków i kosztów usług publicznych." },
    { title: "Konsultacje społeczne i warsztaty", detail: "Otwarte spotkania tematyczne: transport, edukacja, zieleń, bezpieczeństwo." },
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

function PetitionCTA() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-emerald-600 text-white p-8 md:p-10 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-extrabold">Podpisz deklarację poparcia</h3>
              <p className="mt-2 text-emerald-100">Deklaracje i ankieta są na etapie pilotażu. Dane służą tylko do agregacji poparcia i kontaktu w sprawach inicjatywy.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#ankieta" className="inline-flex items-center gap-2 rounded-2xl bg-white text-emerald-700 px-5 py-3 font-semibold shadow-sm hover:bg-emerald-50">
                <CheckCircle className="h-5 w-5"/> Wypełnij ankietę
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------- ANKIETA --------------
function Survey() {
  const [form, setForm] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    ulica: "",
    zgodaRODO: false,
    stanowisko: "popieram",
    komentarz: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [localRows, setLocalRows] = useState<any[]>([]);
  const [showSettings, setShowSettings] = useState(false);

  // Załaduj lokalne odpowiedzi
  useEffect(() => {
    try {
      const raw = localStorage.getItem("jnso_responses");
      if (raw) setLocalRows(JSON.parse(raw));
    } catch {}
  }, []);

  // Zapisz lokalnie
  const saveLocal = (row: any) => {
    const rows = [row, ...localRows];
    setLocalRows(rows);
    try { localStorage.setItem("jnso_responses", JSON.stringify(rows)); } catch {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.zgodaRODO) {
      alert("Aby wysłać ankietę, zaznacz zgodę na przetwarzanie danych.");
      return;
    }

    const payload = {
      ...form,
      ts: new Date().toISOString(),
      zrodlo: DOMENA,
      wersja: 1,
    };

    setStatus("sending");

    try {
      if (ENDPOINT_FORMULARZA) {
        const res = await fetch(ENDPOINT_FORMULARZA, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Błąd sieci");
      } else {
        // fallback do localStorage
        saveLocal(payload);
      }
      setStatus("ok");
      // reset prosty
      setForm({ imie: "", nazwisko: "", email: "", ulica: "", zgodaRODO: false, stanowisko: "popieram", komentarz: "" });
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  const csv = useMemo(() => toCSV(localRows), [localRows]);

  const handleDownload = () => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ankieta-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="ankieta" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-start gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ankieta poparcia</h2>
          <button onClick={() => setShowSettings(s => !s)} className="ml-auto inline-flex items-center gap-2 text-sm rounded-xl border px-3 py-2 hover:bg-slate-50">
            <Settings className="h-4 w-4"/> Ustawienia
          </button>
        </div>

        {showSettings && (
          <div className="mb-6 rounded-2xl border p-4 text-sm bg-slate-50">
            <div className="font-semibold mb-1">Integracja z backendem (opcjonalnie)</div>
            <p className="text-slate-600">Aby wysyłać odpowiedzi poza przeglądarkę, ustaw stałą <code>ENDPOINT_FORMULARZA</code> na adres swojego API (np. Formspree). Aktualnie: <strong>{String(ENDPOINT_FORMULARZA || "brak — zapis lokalny")}</strong>.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold">Twoje stanowisko *</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                { value: "popieram", label: "Popieram" },
                { value: "neutralne", label: "Nie mam zdania" },
                { value: "nie_popieram", label: "Nie popieram" },
              ].map(opt => (
                <label key={opt.value} className={classNames("inline-flex items-center gap-2 rounded-2xl border px-3 py-2 cursor-pointer", form.stanowisko===opt.value && "bg-emerald-50 border-emerald-200")}> 
                  <input type="radio" name="stanowisko" value={opt.value} checked={form.stanowisko===opt.value} onChange={(e)=>setForm({...form, stanowisko: e.target.value})}/> {opt.label}
                </label>
              ))}
            </div>
          </div>

          <Field label="Imię *">
            <input required value={form.imie} onChange={e=>setForm({...form, imie:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="np. Anna"/>
          </Field>
          <Field label="Nazwisko *">
            <input required value={form.nazwisko} onChange={e=>setForm({...form, nazwisko:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="np. Kowalska"/>
          </Field>

          <Field label="Ulica / osiedle">
            <input value={form.ulica} onChange={e=>setForm({...form, ulica:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="np. Geodetów"/>
          </Field>
          <Field label="E-mail (opcjonalnie)">
            <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="do kontaktu w sprawie inicjatywy"/>
          </Field>

          <Field className="md:col-span-2" label="Komentarz / uwagi (opcjonalnie)">
            <textarea value={form.komentarz} onChange={e=>setForm({...form, komentarz:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 min-h-[100px]" placeholder="Co jest dla Ciebie najważniejsze?"/>
          </Field>

          <div className="md:col-span-2 flex items-center gap-2">
            <input id="zgoda" type="checkbox" checked={form.zgodaRODO} onChange={e=>setForm({...form, zgodaRODO: e.target.checked})} />
            <label htmlFor="zgoda" className="text-sm text-slate-700">Wyrażam zgodę na przetwarzanie danych osobowych w celu realizacji inicjatywy i kontaktu (RODO). Administratorem danych jest organizator inicjatywy; dane nie będą udostępniane podmiotom trzecim, a usunięcia można zażądać w każdej chwili.</label>
          </div>

          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <button disabled={status==="sending"} className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-700 disabled:opacity-60">
              <Send className="h-5 w-5"/> {status==="sending"?"Wysyłanie...":"Wyślij ankietę"}
            </button>
            {status==="ok" && <span className="text-emerald-700 text-sm">Dziękujemy! Twoja odpowiedź została zapisana.</span>}
            {status==="error" && <span className="text-red-600 text-sm">Ups, nie udało się wysłać. Spróbuj ponownie lub skontaktuj się z nami.</span>}
//            {!ENDPOINT_FORMULARZA && (
//             <button type="button" onClick={handleDownload} className="ml-auto inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-slate-50">
//                <Download className="h-4 w-4"/> Eksportuj lokalne odpowiedzi (CSV)
//              </button>
//            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({label, children, className}:{label:string, children:React.ReactNode, className?:string}){
  return (
    <label className={`block ${className || ""}`}>
      <span className="text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}

function MapSection(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
          <div className="p-5 flex items-center gap-2 border-b">
            <MapPin className="h-5 w-5 text-emerald-700"/>
            <div className="font-semibold">Mapa zgłaszanych problemów i pomysłów</div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-5 text-sm text-slate-700">
              <p>Oznacz na mapie miejsca wymagające uwagi: brak chodnika, niebezpieczne przejście, potrzeba parku lub placu zabaw. Podziel się lokalnymi obserwacjami.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Transport i bezpieczeństwo</li>
                <li>Zieleń i rekreacja</li>
                <li>Edukacja i opieka</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">W wersji produkcyjnej możesz podpiąć narzędzie typu uMap / Maptionnaire lub własny geoformularz.</p>
            </div>
            <div className="min-h-[300px]">
              <iframe title="Mapa Józefosław" className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=20.98%2C52.08%2C21.07%2C52.13&layer=mapnik&marker=52.105%2C21.02"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToHelp(){
  const items = [
    {title:"Dołącz do zespołu wolontariuszy", text:"Potrzebni są specjaliści od prawa, finansów, urbanistyki, komunikacji i IT."},
    {title:"Zbieraj głosy poparcia", text:"Porozmawiaj z sąsiadami, udostępnij link do ankiety, rozwieś plakaty w dozwolonych miejscach."},
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
    {q:"Jak mogę się zaangażować?", a:"Zapisz się do newslettera, zgłoś się do zespołu wolontariuszy, podziel się pomysłami i wypełnij ankietę."},
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
    {name:"Pytania do mieszkańców", href:"#", note:"Ankieta – wersja online powyżej"},
  ];
  return (
    <section id="dokumenty" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Dokumenty</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {docs.map((d, i)=> (
            <a key={i} href={d.href} className="rounded-3xl border p-5 shadow-sm bg-white hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-emerald-700"/>
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
            <Mail className="h-6 w-6 text-emerald-700"/>
            <div>
              <h3 className="text-xl font-extrabold">Kontakt</h3>
              <p className="mt-2 text-sm text-slate-700">Masz pytanie, chcesz dołączyć? Napisz do nas.</p>
              <div className="mt-3">
                <a className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-700" href="mailto:kontakt@jozefoslawnaswoim.org">
                  <Mail className="h-5 w-5"/> jozefoslawnaswoim@outlook.com
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-500">Jeśli nie masz jeszcze skrzynki pod tą domeną, podmień adres w kodzie.</p>
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
          © {new Date().getFullYear()} Józefosław Na Swoim. Wszystkie prawa zastrzeżone.
        </div>
        <div className="flex items-center gap-4">
          <a href="#ankieta" className="hover:text-emerald-700">Ankieta</a>
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="#kontakt" className="hover:text-emerald-700">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
