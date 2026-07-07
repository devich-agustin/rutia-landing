import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FileSpreadsheet, FileText, MessagesSquare, BrainCircuit, RotateCcw, PhoneIncoming,
  Package, CalendarDays, LayoutGrid, Warehouse, Smartphone, RefreshCcw, History,
  Sofa, BedDouble, Tv, Wrench, HardHat, Building2, Boxes, Bike, Lightbulb, ShoppingCart,
  Briefcase, ClipboardList, Truck, Users, Check, CircleCheck, ChevronDown, ArrowRight,
} from "lucide-react";
import { Reveal, Counter } from "@/components/Reveal";
import { DashboardMockup } from "@/components/DashboardMockup";
import { CalendarMockup } from "@/components/CalendarMockup";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({ component: Landing });

const NAV = [
  ["Producto", "#producto"],
  ["Cómo funciona", "#como"],
  ["Para quién", "#para-quien"],
  ["Precios", "#precios"],
  ["Quiénes somos", "#nosotros"],
] as const;

const PROBLEMS = [
  { icon: FileSpreadsheet, text: "Los pedidos viven en un Excel que solo entiende una persona." },
  { icon: FileText, text: "Remitos en papel que se pierden o se traspapelan." },
  { icon: MessagesSquare, text: "Las entregas se coordinan por WhatsApp y llamadas todo el día." },
  { icon: BrainCircuit, text: "Si el encargado falta un día, nadie sabe qué sale, qué está preparado ni con qué vehículo." },
  { icon: RotateCcw, text: "Las reprogramaciones se anotan 'en algún lado' y se olvidan." },
  { icon: PhoneIncoming, text: "Los clientes llaman preguntando por su entrega y nadie sabe qué responder." },
];

const FEATURES = [
  { icon: Package, title: "Pedidos", text: "Cargá cada pedido a mano o importalo desde tu Excel con nuestra plantilla. Cliente, dirección, teléfono, qué se entrega y cuándo. Buscá y filtrá en segundos. Nunca más un pedido olvidado." },
  { icon: CalendarDays, title: "Calendario de entregas", text: "Mirá cuántas entregas tenés cada día y detectá los días sobrecargados antes de que sean un problema." },
  { icon: LayoutGrid, title: "Armado del día", text: "Asigná cada entrega a tu camión, camioneta, moto o al flete que contrataste, arrastrando y soltando. En minutos tenés el día armado y todos saben qué sale, con quién y en qué orden." },
  { icon: Warehouse, title: "Depósito y preparación", text: "El depósito ve qué hay que preparar y marca cada pedido como listo. Nada sale a la calle sin estar preparado, y vos lo ves sin llamar a nadie." },
  { icon: Smartphone, title: "Entrega desde el celular", text: "El que reparte —chofer propio, cadete o flete— recibe sus entregas en el celular que ya tiene: dirección, teléfono, observaciones. Marca entregada, parcial o fallida con un toque. Sin apps, sin capacitación." },
  { icon: RefreshCcw, title: "Incidencias y reprogramaciones", text: "¿Cliente ausente? ¿Dirección incorrecta? Queda registrado con su motivo, y la reprogramación se agenda en el momento. Nada se pierde, nada queda 'en el aire'." },
  { icon: History, title: "Historial de todo lo que pasó", text: "Cada entrega tiene su historia completa: quién la cargó, quién la preparó, quién la llevó, qué pasó y cuándo. Si un cliente reclama, la respuesta está a un clic." },
];

const RUBROS = [
  { icon: Sofa, name: "Mueblerías" },
  { icon: BedDouble, name: "Colchonerías" },
  { icon: Tv, name: "Electrodomésticos" },
  { icon: Wrench, name: "Ferreterías" },
  { icon: HardHat, name: "Corralones y sanitarios" },
  { icon: Building2, name: "Casas de materiales" },
  { icon: Boxes, name: "Distribuidoras" },
  { icon: Bike, name: "Bicicleterías y deportes" },
  { icon: Lightbulb, name: "Iluminación" },
  { icon: ShoppingCart, name: "E-commerce con reparto propio" },
];

const FAQ_ITEMS = [
  ["¿Tengo que instalar algo?", "No. Rutia funciona desde el navegador, en cualquier computadora. No hay nada que instalar ni mantener."],
  ["¿Los que reparten necesitan una app?", "No. Choferes propios, cadetes o fletes abren sus entregas desde el celular que ya tienen y marcan entregada, parcial o fallida con un toque."],
  ["¿Puedo importar mis pedidos desde Excel?", "Sí. Te damos una plantilla simple: la completás (o pegás tus datos) y los pedidos se cargan solos."],
  ["¿Es difícil de aprender?", "Si sabés usar WhatsApp, sabés usar Rutia. La mayoría arma su primer día de entregas en menos de una hora."],
  ["¿Sirve si trabajo con fletes contratados y no tengo vehículo propio?", "Sí. Podés asignar entregas a vehículos propios, a fletes, o mezclar ambos. Y repartir con camión, camioneta, moto o lo que uses."],
  ["¿Reemplaza mi sistema de facturación o de stock?", "No, y está bien que así sea. Rutia se ocupa de tus entregas: convive con lo que ya usás para vender y facturar."],
  ["¿Qué pasa si un cliente reclama por una entrega vieja?", "Buscás la entrega y ves toda su historia: quién la llevó, qué pasó y cuándo. La respuesta está a un clic."],
  ["¿Qué pasa si no me sirve?", "No hay permanencia. Cancelás cuando quieras y listo, sin letra chica."],
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-[15px] font-extrabold text-white">
        R
      </span>
      <span className={`text-xl font-bold tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
        Rutia
      </span>
    </span>
  );
}

function Shell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 lg:px-8 ${className}`}>{children}</div>;
}

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{ background: "radial-gradient(circle, oklch(0.546 0.215 262 / 0.22), transparent 65%)" }}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 border-b bg-ink/85 backdrop-blur-xl transition-colors ${
        scrolled ? "border-white/10" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#top"><Logo dark /></a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="text-[13.5px] font-medium text-white/65 transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="#" className="rounded-lg px-4 py-2 text-[13.5px] font-semibold text-white/80 hover:bg-white/10 hover:text-white">
            Ingresar
          </a>
          <a href="#demo" className="rounded-lg bg-primary px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[oklch(0.49_0.21_262)]">
            Solicitar demo
          </a>
        </div>
        <button className="rounded-md p-2 text-white lg:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-[16px] font-medium text-white/85">{label}</a>
            ))}
            <a href="#demo" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-white">
              Solicitar demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <Glow className="-top-40 right-[-10%] h-[560px] w-[560px]" />
      <Glow className="bottom-[-30%] left-[-15%] h-[620px] w-[620px] opacity-70" />
      <Shell className="relative grid items-center gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-5">
          <div className="animate-enter">
            <span className="pill pill-dark">Para empresas que entregan lo que venden</span>
          </div>
          <h1 className="animate-enter mt-6 text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.3rem]" style={{ animationDelay: "80ms" }}>
            Toda tu operación de entregas, <span className="text-[oklch(0.71_0.16_258)]">bajo control.</span> En un solo lugar.
          </h1>
          <p className="animate-enter mt-6 max-w-xl text-[17px] leading-relaxed text-white/65" style={{ animationDelay: "160ms" }}>
            Rutia es el centro de control de tu logística: pedidos, entregas, depósito,
            vehículos, choferes y fletes, reprogramaciones y todo lo que pasó, registrado
            y a la vista. Para que la operación deje de vivir en la cabeza de una sola persona.
          </p>
          <div className="animate-enter" style={{ animationDelay: "240ms" }}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[oklch(0.49_0.21_262)]">
                Solicitar demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25D366]" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42Z"/></svg>
                Escribinos por WhatsApp
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/60">
              {["Sin tarjeta", "Sin instalación", "Los que reparten no necesitan descargar ninguna app"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CircleCheck className="h-4 w-4 text-[oklch(0.71_0.16_258)]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="animate-enter relative lg:col-span-7" style={{ animationDelay: "220ms" }}>
          <DashboardMockup />
        </div>
      </Shell>
      {/* Cifras de operación */}
      <div className="relative border-t border-white/10">
        <Shell className="grid gap-6 py-9 sm:grid-cols-3">
          {[
            { n: 2000, suffix: "+", label: "De 20 a 2.000 entregas por mes bajo control", icon: Truck, tone: "text-[oklch(0.71_0.16_258)] bg-[oklch(0.71_0.16_258)]/12" },
            { n: 1, suffix: "", label: "solo lugar para toda la operación", icon: LayoutGrid, tone: "text-[oklch(0.78_0.15_152)] bg-[oklch(0.78_0.15_152)]/12" },
            { n: 0, suffix: "", label: "apps que instalar", icon: Smartphone, tone: "text-[oklch(0.8_0.14_85)] bg-[oklch(0.8_0.14_85)]/12" },
          ].map((m) => (
            <div key={m.label} className="flex items-center gap-4">
              <span className={`grid h-11 w-11 flex-none place-items-center rounded-xl ${m.tone}`}>
                <m.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-mono text-2xl font-semibold text-white">
                  <Counter to={m.n} suffix={m.suffix} />
                </div>
                <div className="text-[12.5px] leading-snug text-white/55">{m.label}</div>
              </div>
            </div>
          ))}
        </Shell>
      </div>
    </section>
  );
}

function SectionIntro({ pill, title, desc, dark = false, center = false }: {
  pill: string; title: React.ReactNode; desc?: React.ReactNode; dark?: boolean; center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal><span className={`pill ${dark ? "pill-dark" : ""}`}>{pill}</span></Reveal>
      <Reveal delay={60}>
        <h2 className={`mt-5 text-3xl font-extrabold leading-[1.08] sm:text-4xl ${dark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={120}>
          <p className={`mt-4 text-[17px] leading-relaxed ${dark ? "text-white/60" : "text-muted-foreground"}`}>{desc}</p>
        </Reveal>
      )}
    </div>
  );
}

function Problem() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Shell>
        <SectionIntro pill="El problema" title="¿Tu logística funciona así?" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, text }, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="block-card block-card-hover h-full p-6">
                <span className="icon-chip"><Icon className="h-5 w-5" strokeWidth={1.75} /></span>
                <p className="mt-4 text-[15.5px] font-medium leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 rounded-2xl bg-surface-2 p-7 lg:p-9">
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              El verdadero problema no es la falta de tecnología. Es la falta de control.{" "}
              <span className="font-bold text-foreground">
                Rutia pasa tu operación de la memoria de una persona a un sistema que ve toda la empresa.
              </span>
            </p>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function Features() {
  return (
    <section id="producto" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white lg:py-24">
      <Glow className="right-[-15%] top-[10%] h-[500px] w-[500px] opacity-60" />
      <Shell className="relative">
        <SectionIntro
          dark
          pill="El producto"
          title="Un solo lugar para toda tu operación"
          desc="Del pedido a la entrega, cada paso queda registrado, visible y bajo control. Como una torre de control, pero para tus entregas."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="space-y-2.5 lg:col-span-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 40}>
                <div className={`flex gap-4 rounded-xl p-4 transition-colors ${i === 2 ? "ink-card border-primary/40 bg-primary/10" : "hover:bg-white/[0.04]"}`}>
                  <span className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${i === 2 ? "bg-primary text-white" : "bg-white/8 text-[oklch(0.71_0.16_258)]"}`}>
                    <f.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold text-white">{f.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-white/55">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="lg:sticky lg:top-24">
                <CalendarMockup />
                <p className="mt-4 text-center text-[13px] text-white/45">
                  El armado del día: cada entrega asignada a su vehículo, arrastrando y soltando.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Cargá tus pedidos", "A mano en un minuto, o importando tu Excel con nuestra plantilla."],
    ["Prepará y armá el día", "El depósito marca qué está listo y vos asignás cada entrega a un vehículo propio o flete, arrastrando y soltando."],
    ["Entregá con control", "El que reparte marca cada entrega desde su celular. Vos ves todo en vivo desde el tablero."],
    ["Mirá qué pasó", "Entregadas, fallidas, reprogramadas y por qué. Todo queda registrado para que decidas mejor mañana."],
  ];
  return (
    <section id="como" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <Shell>
        <SectionIntro center pill="Cómo funciona" title="Así de simple" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="block-card block-card-hover h-full p-6">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[16.5px] font-bold">{title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-success/25 bg-success/5 px-6 py-4">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-success text-white">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <p className="text-[15.5px]">
              <span className="font-bold">Sin apps para descargar.</span>{" "}
              <span className="text-muted-foreground">Tus choferes y fletes solo necesitan el celular que ya tienen.</span>
            </p>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function ForWhom() {
  return (
    <section id="para-quien" className="scroll-mt-24 bg-surface py-20 lg:py-24">
      <Shell>
        <SectionIntro
          center
          pill="Para quién"
          title="Hecho para empresas que entregan lo que venden"
          desc="No importa qué vendés ni con qué repartís: camión propio, camioneta, moto o fletes contratados."
        />
        <Reveal>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {RUBROS.map(({ icon: Icon, name }) => (
              <span key={name} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[14px] font-semibold shadow-[var(--shadow-card)]">
                <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                {name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-6 text-center text-[16px]">
            Si hacés <span className="font-bold">más de 20 entregas por mes</span> con vehículos
            propios o fletes, Rutia es para vos. Si hacés dos envíos por mes por moto,
            probablemente no lo necesites (y preferimos decírtelo).
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function Benefits() {
  const cols = [
    { icon: Briefcase, title: "Para el dueño", items: ["Visibilidad total sin llamar a nadie", "Menos costos por errores y fletes de más", "La empresa deja de depender de una sola persona"] },
    { icon: ClipboardList, title: "Para el encargado de logística", items: ["El día armado en minutos, no en horas", "Menos llamadas y menos caos", "Todo registrado: nadie te puede decir 'a mí no me avisaron'"] },
    { icon: Truck, title: "Para el depósito y los que reparten", items: ["El depósito sabe qué preparar sin que nadie se lo grite", "El que reparte ve sus entregas claritas en el celular", "Cada uno sabe exactamente qué tiene que hacer"] },
    { icon: Users, title: "Para tus clientes", items: ["Saben cuándo llega su entrega", "Menos reprogramaciones sorpresa", "Si preguntan, tu equipo responde al instante"] },
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-24">
      <Glow className="left-[-12%] top-[20%] h-[460px] w-[460px] opacity-50" />
      <Shell className="relative">
        <SectionIntro dark center pill="Beneficios" title="Cada uno gana algo distinto" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="ink-card h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-[oklch(0.71_0.16_258)]">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-white">{c.title}</h3>
                <ul className="mt-4 space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[13.5px] leading-relaxed text-white/60">
                      <CircleCheck className="mt-0.5 h-4 w-4 flex-none text-[oklch(0.78_0.15_152)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <Shell>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><span className="pill">Quiénes somos</span></Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] sm:text-4xl">
              Rutia no se diseñó en una oficina. Se vivió en un depósito.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-[17px] leading-relaxed text-muted-foreground">
              Rutia nace adentro de una mueblería de Avenida Belgrano, en Buenos Aires, con
              entre 20 y 50 entregas por día, un camión propio y fletes contratados a diario.
              Creíamos que el problema eran las rutas. Pero vimos de primera mano que el
              verdadero problema era otro: toda la operación dependía del Excel, los remitos
              y la memoria del encargado — y el día que esa persona faltaba, aparecía el
              caos. Construimos Rutia para resolver ese problema: el nuestro primero, y ahora
              el de miles de pymes que trabajan igual.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 text-[14px] font-semibold">El equipo de Rutia — Buenos Aires, Argentina 🇦🇷</p>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-24">
      <Glow className="right-[10%] top-[-40%] h-[420px] w-[420px] opacity-60" />
      <Shell className="relative text-center">
        <Reveal>
          <p className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.7rem]">
            Ninguna empresa puede optimizar una operación que todavía no{" "}
            <span className="text-[oklch(0.71_0.16_258)]">controla</span>.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-[15px] text-white/55">
            Por eso Rutia empieza por lo importante: orden, visibilidad y control. La optimización llega después.
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Inicial", price: "USD 59", limit: "Hasta 150 entregas por mes", items: ["Pedidos, calendario, armado del día y entrega desde el celular", "Soporte por WhatsApp"], featured: false },
    { name: "PyME", price: "USD 119", limit: "Hasta 600 entregas por mes", items: ["Todo lo de Inicial", "Depósito y preparación", "Incidencias y reprogramaciones", "Historial completo", "Tablero para dueños"], featured: true },
    { name: "Empresa", price: "USD 229", limit: "Hasta 2.000 entregas por mes", items: ["Todo lo de PyME", "Reportes e indicadores", "Varios depósitos", "Soporte prioritario"], featured: false },
  ];
  return (
    <section id="precios" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <Shell>
        <SectionIntro
          center
          pill="Precio de lanzamiento — congelado para los primeros clientes"
          title="Precios simples, sin sorpresas"
          desc="Sin permanencia. Cancelás cuando quieras. Todos los planes incluyen todos los módulos y acceso desde el celular para los que reparten."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className={`relative flex h-full flex-col rounded-2xl p-8 ${
                p.featured
                  ? "bg-ink text-white shadow-[var(--shadow-pop)] ring-1 ring-primary/50"
                  : "block-card block-card-hover"
              }`}>
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    Más elegido
                  </span>
                )}
                <div className={`text-sm font-semibold ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight">{p.price}</span>
                  <span className={p.featured ? "text-white/60" : "text-muted-foreground"}>/mes</span>
                </div>
                <div className={`mt-1.5 text-[13.5px] font-medium ${p.featured ? "text-white/80" : "text-foreground"}`}>{p.limit}</div>
                <div className={`my-6 h-px w-full ${p.featured ? "bg-white/15" : "bg-border"}`} />
                <ul className="flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[14px] leading-relaxed">
                      <CircleCheck className={`mt-0.5 h-4 w-4 flex-none ${p.featured ? "text-[oklch(0.71_0.16_258)]" : "text-success"}`} />
                      <span className={p.featured ? "text-white/80" : "text-muted-foreground"}>{it}</span>
                    </li>
                  ))}
                </ul>
                <a href="#demo" className={`mt-8 block rounded-xl py-3 text-center font-semibold transition-colors ${
                  p.featured ? "bg-primary text-white hover:bg-[oklch(0.49_0.21_262)]" : "border border-border hover:border-primary hover:text-primary"
                }`}>
                  Pedí una demo
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-9 text-center text-[14.5px] text-muted-foreground">
            ¿Más de 2.000 entregas por mes o varias sucursales?{" "}
            <a href="#demo" className="font-semibold text-primary hover:underline">Escribinos y armamos un plan a medida.</a>
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface py-20 lg:py-24">
      <Shell className="max-w-3xl">
        <SectionIntro center pill="Preguntas" title="Preguntas frecuentes" />
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 25}>
                <div className={`block-card overflow-hidden transition-colors ${isOpen ? "border-primary/40" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className="text-[15.5px] font-semibold">{q}</span>
                    <span className={`grid h-7 w-7 flex-none place-items-center rounded-full transition-all duration-200 ${isOpen ? "rotate-180 bg-primary/10 text-primary" : "bg-surface text-muted-foreground"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div id={`faq-panel-${i}`} className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-muted-foreground">{a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

function DemoCta() {
  const [sent, setSent] = useState(false);
  return (
    <section id="demo" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white lg:py-24">
      <Glow className="left-[-10%] top-[-25%] h-[520px] w-[520px]" />
      <Glow className="bottom-[-35%] right-[-8%] h-[480px] w-[480px] opacity-60" />
      <Shell className="relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal><span className="pill pill-dark">Empezá hoy</span></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[2.6rem]">
              Basta de Excel. Basta de papelitos. Empezá a controlar tu operación.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[17px] text-white/65">
              Pedí una demo de 20 minutos y te mostramos Rutia funcionando con entregas como las tuyas.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 rounded-2xl border border-white/12 bg-white/[0.04] p-6">
              <p className="font-semibold">¿Preferís hablar directo?</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42Z"/></svg>
                  WhatsApp
                </a>
                <a href="mailto:hola@rutia.app" className="inline-flex items-center rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                  hola@rutia.app
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-2xl bg-white p-7 text-foreground shadow-[var(--shadow-pop)] sm:p-8">
            {sent ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-success text-white">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </span>
                <h3 className="mt-6 text-2xl font-bold">¡Listo!</h3>
                <p className="mt-2 text-muted-foreground">Te contactamos en menos de 24 hs hábiles.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 className="text-xl font-bold">Pedí tu demo gratis</h3>
                <Field label="Nombre"><input required className={inputCls} placeholder="Tu nombre" /></Field>
                <Field label="Empresa"><input required className={inputCls} placeholder="Nombre de tu empresa" /></Field>
                <Field label="Teléfono / WhatsApp"><input required className={inputCls} placeholder="+54 9 11 ..." /></Field>
                <Field label="Rubro">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Elegí una opción</option>
                    <option>Mueblería</option><option>Colchonería</option><option>Electrodomésticos</option>
                    <option>Ferretería</option><option>Corralón</option><option>Distribuidora</option>
                    <option>E-commerce</option><option>Otro</option>
                  </select>
                </Field>
                <Field label="Entregas por mes">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Elegí una opción</option>
                    <option>Menos de 20</option><option>20 a 150</option><option>150 a 600</option>
                    <option>600 a 2.000</option><option>Más de 2.000</option>
                  </select>
                </Field>
                <button type="submit" className="mt-2 w-full rounded-xl bg-primary py-3.5 text-base font-bold text-white transition-colors hover:bg-[oklch(0.49_0.21_262)]">
                  Quiero mi demo gratis
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Shell className="py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-sm text-[14.5px] text-white/55">
              El centro de control de tus entregas. Para empresas que todavía organizan su
              logística con Excel y WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            {[
              ["Navegación", [["Producto", "#producto"], ["Precios", "#precios"], ["Quiénes somos", "#nosotros"], ["Contacto", "#demo"]]],
              ["Contacto", [["hola@rutia.app", "mailto:hola@rutia.app"], ["WhatsApp", "https://wa.me/5491100000000"]]],
              ["Seguinos", [["Instagram", "#"], ["LinkedIn", "#"]]],
            ].map(([title, links]) => (
              <div key={title as string}>
                <div className="text-sm font-bold">{title as string}</div>
                <ul className="mt-4 space-y-2 text-[14.5px] text-white/55">
                  {(links as [string, string][]).map(([label, href]) => (
                    <li key={label}><a href={href} className="hover:text-white">{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-[13px] text-white/45">
          © 2026 Rutia — Buenos Aires, Argentina
        </div>
      </Shell>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <ForWhom />
        <Benefits />
        <About />
        <Philosophy />
        <Pricing />
        <Faq />
        <DemoCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
