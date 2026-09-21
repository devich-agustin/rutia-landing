import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FileSpreadsheet,
  FileText,
  MessagesSquare,
  BrainCircuit,
  RotateCcw,
  PhoneIncoming,
  Package,
  CalendarDays,
  LayoutGrid,
  Warehouse,
  Smartphone,
  RefreshCcw,
  History,
  Sofa,
  BedDouble,
  Tv,
  Wrench,
  HardHat,
  Building2,
  Boxes,
  Bike,
  Lightbulb,
  ShoppingCart,
  Briefcase,
  ClipboardList,
  Truck,
  Users,
  Check,
  CircleCheck,
  ChevronDown,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Reveal, Counter } from "@/components/Reveal";
import {
  trackClickDemo,
  trackClickWhatsApp,
  trackContact,
  trackFormSubmit,
  trackLead,
} from "@/lib/analytics";
import { CalendarMockup } from "@/components/CalendarMockup";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RouteMap, RouteConnector } from "@/components/RouteMotif";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://rutia.com.ar/" }],
  }),
  component: Landing,
});

const NAV = [
  ["Producto", "/#producto"],
  ["Cómo funciona", "/#como"],
  ["Para quién", "/#para-quien"],
  ["Planes", "/#precios"],
  ["Quiénes somos", "/#nosotros"],
  ["Blog", "/blog"],
] as const;

const PROBLEMS = [
  {
    icon: FileSpreadsheet,
    text: "Los pedidos viven en un Excel que solo entiende una persona.",
  },
  { icon: FileText, text: "Remitos en papel que se pierden o se traspapelan." },
  {
    icon: MessagesSquare,
    text: "Las entregas se coordinan por WhatsApp y llamadas todo el día.",
  },
  {
    icon: BrainCircuit,
    text: "Si el encargado falta un día, nadie sabe qué sale, qué está preparado ni con qué vehículo.",
  },
  {
    icon: RotateCcw,
    text: "Las reprogramaciones se anotan 'en algún lado' y se olvidan.",
  },
  {
    icon: PhoneIncoming,
    text: "Los clientes llaman preguntando por su entrega y nadie sabe qué responder.",
  },
];

const FEATURES = [
  {
    icon: Package,
    title: "Pedidos",
    text: "A mano o importados desde tu Excel con nuestra plantilla: cliente, dirección, teléfono, qué se entrega y cuándo. Buscá y filtrá en segundos.",
  },
  {
    icon: CalendarDays,
    title: "Calendario de entregas",
    text: "Mirá cuántas entregas tenés cada día y detectá los días sobrecargados antes de que sean un problema.",
  },
  {
    icon: LayoutGrid,
    title: "Armado del día",
    text: "Arrastrá y soltá cada entrega a tu camión, camioneta, moto o flete. En minutos el día está armado: todos saben qué sale, con quién y en qué orden.",
  },
  {
    icon: Warehouse,
    title: "Depósito y preparación",
    text: "El depósito ve qué preparar y marca cada pedido como listo. Nada sale a la calle sin preparar, y vos lo ves sin llamar a nadie.",
  },
  {
    icon: Smartphone,
    title: "Entrega desde el celular",
    text: "Chofer propio, cadete o flete: recibe sus entregas en el celular que ya tiene y marca entregada, parcial o fallida con un toque. Sin apps, sin capacitación.",
  },
  {
    icon: RefreshCcw,
    title: "Incidencias y reprogramaciones",
    text: "¿Cliente ausente? ¿Dirección incorrecta? Queda registrado con su motivo y la reprogramación se agenda al momento. Nada queda 'en el aire'.",
  },
  {
    icon: History,
    title: "Historial de todo lo que pasó",
    text: "Cada entrega guarda su historia: quién la cargó, la preparó y la llevó, qué pasó y cuándo. Si un cliente reclama, la respuesta está a un clic.",
  },
];

const RUBROS = [
  { icon: Sofa, name: "Mueblerías", href: "/logistica-para-mueblerias" },
  {
    icon: BedDouble,
    name: "Colchonerías",
    href: "/logistica-para-colchonerias",
  },
  {
    icon: Tv,
    name: "Electrodomésticos",
    href: "/logistica-para-electrodomesticos",
  },
  { icon: Wrench, name: "Ferreterías", href: "/logistica-para-ferreterias" },
  {
    icon: HardHat,
    name: "Corralones y sanitarios",
    href: "/logistica-para-corralones",
  },
  {
    icon: Building2,
    name: "Casas de materiales",
    href: "/logistica-para-casas-de-materiales",
  },
  {
    icon: Boxes,
    name: "Distribuidoras",
    href: "/logistica-para-distribuidoras",
  },
  {
    icon: Bike,
    name: "Bicicleterías y deportes",
    href: "/logistica-para-bicicleterias",
  },
  { icon: Lightbulb, name: "Iluminación", href: "/logistica-para-iluminacion" },
  {
    icon: ShoppingCart,
    name: "E-commerce con reparto propio",
    href: "/logistica-para-ecommerce",
  },
];

const FAQ_ITEMS = [
  [
    "¿Tengo que instalar algo?",
    "No. Rutia funciona desde el navegador, en cualquier computadora. No hay nada que instalar ni mantener.",
  ],
  [
    "¿Los que reparten necesitan una app?",
    "No. Choferes propios, cadetes o fletes abren sus entregas desde el celular que ya tienen y marcan entregada, parcial o fallida con un toque.",
  ],
  [
    "¿Puedo importar mis pedidos desde Excel?",
    "Sí. Te damos una plantilla simple: la completás (o pegás tus datos) y los pedidos se cargan solos.",
  ],
  [
    "¿Es difícil de aprender?",
    "Si sabés usar WhatsApp, sabés usar Rutia. La mayoría arma su primer día de entregas en menos de una hora.",
  ],
  [
    "¿Sirve si trabajo con fletes contratados y no tengo vehículo propio?",
    "Sí. Podés asignar entregas a vehículos propios, a fletes, o mezclar ambos. Y repartir con camión, camioneta, moto o lo que uses.",
  ],
  [
    "¿Reemplaza mi sistema de facturación o de stock?",
    "No, y está bien que así sea. Rutia se ocupa de tus entregas: convive con lo que ya usás para vender y facturar.",
  ],
  [
    "¿Qué pasa si un cliente reclama por una entrega vieja?",
    "Buscás la entrega y ves toda su historia: quién la llevó, qué pasó y cuándo. La respuesta está a un clic.",
  ],
  [
    "¿Qué pasa si no me sirve?",
    "No hay permanencia. Cancelás cuando quieras y listo, sin letra chica.",
  ],
];

export function Logo({
  lazy = false,
  className = "h-8",
}: {
  lazy?: boolean;
  className?: string;
}) {
  // El lockup oficial lleva el wordmark en blanco: pensado para fondos navy.
  return (
    <img
      src="/rutia-logo.svg"
      alt="Rutia — software de gestión de entregas"
      width={84}
      height={32}
      decoding="async"
      loading={lazy ? "lazy" : "eager"}
      className={`w-auto ${className}`}
    />
  );
}

function WhatsappIcon({
  className = "h-5 w-5",
  phoneColor = "white",
}: {
  className?: string;
  phoneColor?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42Z"
      />
      <path
        fill={phoneColor}
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

export function Shell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(47,107,255,.20), transparent 65%)",
      }}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const ids = NAV.map(([, href]) => href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-transparent px-3 pt-3">
      <div
        className={`mx-auto flex max-w-[1000px] items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-5 ${scrolled ? "border-white/15 bg-ink/92 shadow-[0_16px_45px_-20px_rgba(0,0,0,.8)]" : "border-white/10 bg-ink/75"}`}
      >
        <a href="/#top" aria-label="Rutia — inicio">
          <Logo />
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map(([label, href]) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                className={`group relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-[#9CA9C0] hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="/#demo"
            onClick={trackClickDemo}
            className="bg-brand rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_4px_16px_-4px_rgba(47,107,255,.5)] transition-all duration-200 hover:-translate-y-px hover:brightness-110 active:translate-y-0 active:scale-[0.98]"
          >
            Solicitar demo
          </a>
        </div>
        <button
          className="rounded-md p-2 text-white lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="mobile-menu mx-auto mt-2 max-w-[1000px] overflow-hidden rounded-3xl border border-white/10 bg-ink/95 px-5 py-4 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="mobile-menu-link rounded-xl px-4 py-3 text-center text-[16px] font-semibold text-white/85"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                {label}
              </a>
            ))}
            <a
              href="/#demo"
              onClick={() => {
                setOpen(false);
                trackClickDemo();
              }}
              className="mobile-menu-link bg-brand mt-2 rounded-xl px-5 py-3 text-center font-semibold text-white"
              style={{ animationDelay: `${NAV.length * 45}ms` }}
            >
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
    <section
      id="top"
      className="hero-stage relative overflow-hidden bg-ink text-white"
    >
      <img
        src="/rutia-warehouse-hero.jpg"
        alt=""
        aria-hidden="true"
        width={1600}
        height={600}
        fetchPriority="high"
        decoding="async"
        className="hero-photo absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="hero-photo-shade absolute inset-0" />
      <RouteMap className="absolute -right-24 -top-10 h-[680px] w-[1020px] text-cyan opacity-[0.13]" />
      <div
        aria-hidden="true"
        className="hero-grid absolute inset-0 opacity-50"
      />
      <Shell className="relative grid items-center gap-12 pb-16 pt-32 lg:min-h-[720px] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-32">
        <div className="relative z-10 lg:col-span-7 lg:pr-6">
          <div className="animate-enter">
            <span className="eyebrow-dark">
              <span className="status-dot" />
              Para empresas que entregan lo que venden
            </span>
          </div>
          <h1
            className="animate-enter mt-6 max-w-[12ch] text-[2.85rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-[4.25rem] lg:text-[5.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Tus entregas. <span className="text-brand">Bajo control.</span>
          </h1>
          <p
            className="animate-enter mt-6 max-w-[570px] text-[17px] leading-[1.65] text-[#AAB6C8] sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Rutia reúne pedidos, depósito, vehículos, choferes y fletes en un
            solo lugar. Todos saben qué sale, quién lo lleva y qué pasó con cada
            entrega.
          </p>
          <div className="animate-enter" style={{ animationDelay: "240ms" }}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                onClick={trackClickDemo}
                className="button-primary group inline-flex min-h-13 items-center justify-center gap-2 px-6 text-base font-bold text-white"
              >
                Ver Rutia en acción
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5491178242630?text=Hola%2C%20quiero%20una%20demo%20de%20Rutia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackClickWhatsApp}
                className="button-ghost inline-flex min-h-13 items-center justify-center gap-2 px-6 text-base font-semibold text-white"
              >
                <WhatsappIcon className="h-5 w-5 text-[#25D366]" />
                Escribinos por WhatsApp
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/65">
              {[
                "Sin instalación",
                "Funciona en celular",
                "Acompañamiento humano",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CircleCheck className="h-4 w-4 text-[cyan]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="hidden lg:col-span-5 lg:block" />
      </Shell>
      {/* Cifras de operación */}
      <div className="relative border-t border-white/10">
        <Shell className="grid py-8 sm:grid-cols-3 sm:divide-x sm:divide-white/10 lg:py-10">
          {[
            {
              n: 2000,
              suffix: "+",
              label: "De 20 a 2.000 entregas por mes bajo control",
            },
            { n: 1, suffix: "", label: "solo lugar para toda la operación" },
            { n: 0, suffix: "", label: "apps que instalar" },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 120}>
              <div
                className={`py-5 text-center sm:py-0 sm:text-left ${i > 0 ? "sm:pl-12" : ""} ${i < 2 ? "sm:pr-12" : ""}`}
              >
                <div className="font-mono text-4xl font-semibold tracking-tight text-white lg:text-[3rem]">
                  <Counter to={m.n} suffix={m.suffix} />
                </div>
                <div className="bg-brand mx-auto mt-3 h-[3px] w-10 rounded-full sm:mx-0" />
                <div className="mx-auto mt-3 max-w-[26ch] text-[13.5px] leading-snug text-[#9CA9C0] sm:mx-0">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </Shell>
      </div>
    </section>
  );
}

function SectionIntro({
  pill,
  title,
  desc,
  dark = false,
  center = false,
}: {
  pill: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className={`section-label ${dark ? "section-label-dark" : ""}`}>
          {pill}
        </span>
      </Reveal>
      <Reveal delay={60}>
        <h2
          className={`mt-5 text-[2.25rem] font-black leading-[1.02] tracking-[-0.045em] sm:text-[3.35rem] ${dark ? "text-white" : "text-foreground"}`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={120}>
          <p
            className={`mt-4 text-[17px] leading-relaxed ${dark ? "text-white/60" : "text-muted-foreground"}`}
          >
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function Problem() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionIntro
                pill="El problema"
                title={
                  <>
                    Cuando todo depende de una persona,{" "}
                    <span className="text-primary">no hay control.</span>
                  </>
                }
              />
              <Reveal delay={150}>
                <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground">
                  Excel, papelitos y WhatsApp pueden alcanzar al principio. El
                  problema aparece cuando la operación crece y la información
                  queda repartida por todos lados.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="problem-list lg:col-span-7">
            {PROBLEMS.map(({ icon: Icon, text }, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="problem-row group">
                  <span className="problem-number">0{i + 1}</span>
                  <span className="problem-icon">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-[16px] font-semibold leading-relaxed sm:text-[17px]">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="statement-band mt-14">
            <p className="max-w-5xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2.6rem]">
              Rutia pasa tu operación de la memoria de una persona a un sistema
              que <span className="text-[cyan]">ve toda la empresa.</span>
            </p>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function Features() {
  const side = FEATURES.slice(0, 3); // Pedidos, Calendario, Armado del día
  const below = FEATURES.slice(3); // Depósito, Celular, Incidencias, Historial
  return (
    <section
      id="producto"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white lg:py-32"
    >
      <RouteMap className="product-route absolute -left-40 top-0 h-[720px] w-[1080px] text-cyan" />
      <div aria-hidden="true" className="product-scan" />
      <Glow className="right-[-15%] top-[10%] h-[500px] w-[500px] opacity-60" />
      <Shell className="relative">
        <SectionIntro
          dark
          pill="El producto"
          title="Un solo lugar para toda tu operación"
          desc="Del pedido a la entrega, cada paso queda registrado, visible y bajo control. Como una torre de control, pero para tus entregas."
        />
        {/* La imagen manda: calendario grande a la izquierda, los módulos que muestra a su lado */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-3 lg:order-1 lg:col-span-4">
            {side.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div
                  className={`flex flex-col items-center gap-4 rounded-2xl p-5 text-center sm:flex-row sm:items-start sm:text-left ${i === 2 ? "ink-card border-primary/40 bg-primary/10" : "ink-card"}`}
                >
                  <span
                    className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${i === 2 ? "bg-primary text-white" : "bg-white/8 text-[cyan]"}`}
                  >
                    <f.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-white/55">
                      {f.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="lg:order-2 lg:col-span-8">
            <div>
              <CalendarMockup />
              <p className="mt-4 text-center text-[13px] text-white/45">
                El armado del día: cada entrega asignada a su vehículo,
                arrastrando y soltando.
              </p>
            </div>
          </Reveal>
        </div>
        {/* El resto de los módulos: franja compacta, sin competir con el producto */}
        <div className="mt-12 grid gap-x-10 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {below.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="product-module group text-center sm:text-left">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-white/8 text-[cyan] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-cyan/15 group-hover:shadow-[0_0_24px_rgba(57,217,255,.25)] sm:mx-0">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-3.5 text-[15.5px] font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mx-auto mt-1.5 max-w-sm text-[13.5px] leading-relaxed text-white/55 sm:mx-0">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    [
      "Cargá tus pedidos",
      "A mano en un minuto, o importando tu Excel con nuestra plantilla.",
    ],
    [
      "Prepará y armá el día",
      "El depósito marca qué está listo y vos asignás cada entrega a un vehículo propio o flete, arrastrando y soltando.",
    ],
    [
      "Entregá con control",
      "El que reparte marca cada entrega desde su celular. Vos ves todo en vivo desde el tablero.",
    ],
    [
      "Mirá qué pasó",
      "Entregadas, fallidas, reprogramadas y por qué. Todo queda registrado para que decidas mejor mañana.",
    ],
  ];
  return (
    <section id="como" className="scroll-mt-24 bg-background py-20 lg:py-32">
      <Shell>
        <SectionIntro
          center
          pill="Cómo funciona"
          title="Del pedido a la entrega, sin vueltas"
          desc="Cuatro pasos claros. Ninguna app para instalar y ningún proceso complicado para aprender."
        />
        <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <RouteConnector className="absolute left-[8%] right-[8%] top-8 hidden h-6 w-[84%] text-primary/35 lg:block" />
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="process-step group relative h-full p-6 text-center lg:px-7 lg:py-4 lg:text-left">
                <span className="process-node relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border-4 border-background bg-primary font-mono text-sm font-bold text-white shadow-[0_0_0_1px_rgba(36,93,255,.2)] transition-transform duration-300 group-hover:scale-110 lg:mx-0">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                  {text}
                </p>
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
              <span className="text-muted-foreground">
                Tus choferes y fletes solo necesitan el celular que ya tienen.
              </span>
            </p>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function ForWhom() {
  return (
    <section
      id="para-quien"
      className="scroll-mt-24 border-y border-border bg-surface py-20 lg:py-28"
    >
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionIntro
              pill="Para quién"
              title="Hecho para empresas que entregan lo que venden"
              desc="No importa qué vendés ni con qué repartís: camión propio, camioneta, moto o fletes contratados."
            />
          </div>
          <Reveal className="lg:col-span-5">
            <div className="fit-callout">
              <strong>¿Rutia es para vos?</strong>
              <span>
                Si hacés más de 20 entregas por mes, probablemente sí.
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {RUBROS.map(({ icon: Icon, name, ...item }) =>
              "href" in item ? (
                <Link
                  key={name}
                  to={item.href}
                  className="industry-chip cursor-pointer transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  {name}
                </Link>
              ) : (
                <span key={name} className="industry-chip">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  {name}
                </span>
              ),
            )}
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function Benefits() {
  const cols = [
    {
      icon: Briefcase,
      title: "Para el dueño",
      items: [
        "Visibilidad total sin llamar a nadie",
        "Menos costos por errores y fletes de más",
        "La empresa deja de depender de una sola persona",
      ],
    },
    {
      icon: ClipboardList,
      title: "Para el encargado de logística",
      items: [
        "El día armado en minutos, no en horas",
        "Menos llamadas y menos caos",
        "Todo registrado: nadie te puede decir 'a mí no me avisaron'",
      ],
    },
    {
      icon: Truck,
      title: "Para el depósito y los que reparten",
      items: [
        "El depósito sabe qué preparar sin que nadie se lo grite",
        "El que reparte ve sus entregas claritas en el celular",
        "Cada uno sabe exactamente qué tiene que hacer",
      ],
    },
    {
      icon: Users,
      title: "Para tus clientes",
      items: [
        "Saben cuándo llega su entrega",
        "Menos reprogramaciones sorpresa",
        "Si preguntan, tu equipo responde al instante",
      ],
    },
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-white/10"
      />
      <Glow className="left-[-12%] top-[15%] h-[520px] w-[520px] opacity-60" />
      <Glow className="bottom-[-30%] right-[-10%] h-[460px] w-[460px] opacity-40" />
      <Shell className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="pill pill-dark">Beneficios</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              Cada uno gana algo distinto
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="ink-card ink-card-hover group h-full p-8 lg:p-9">
                <div className="flex items-center gap-4">
                  <span className="grid h-13 w-13 flex-none place-items-center rounded-2xl bg-primary/15 text-[cyan] transition-colors group-hover:bg-primary group-hover:text-white">
                    <c.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {c.title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#9CA9C0]"
                    >
                      <CircleCheck className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.78_0.15_152)]" />
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
    <section
      id="nosotros"
      className="scroll-mt-24 bg-background py-20 lg:py-32"
    >
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label">Quiénes somos</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 text-[2.4rem] font-black leading-[1.02] tracking-[-0.045em] sm:text-[3.4rem]">
                Rutia no se diseñó en una oficina. Se vivió en un depósito.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <Reveal delay={120}>
              <p className="text-[17px] leading-[1.8] text-muted-foreground">
                Rutia nace adentro de una mueblería de Avenida Belgrano, en
                Buenos Aires, con entre 20 y 50 entregas por día, un camión
                propio y fletes contratados a diario. Creíamos que el problema
                eran las rutas. Pero vimos de primera mano que el verdadero
                problema era otro: toda la operación dependía del Excel, los
                remitos y la memoria del encargado — y el día que esa persona
                faltaba, aparecía el caos. Construimos Rutia para resolver ese
                problema: el nuestro primero, y ahora el de miles de pymes que
                trabajan igual.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 border-l-2 border-primary pl-4 text-[14px] font-bold">
                El equipo de Rutia — Buenos Aires, Argentina 🇦🇷
              </p>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white lg:py-44">
      <RouteMap className="absolute inset-y-0 right-0 h-full w-[900px] text-cyan opacity-[0.08]" />
      <Glow className="right-[10%] top-[-40%] h-[420px] w-[420px] opacity-60" />
      <Shell className="relative text-center">
        <Reveal>
          <p className="mx-auto max-w-5xl text-[2.5rem] font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.6rem]">
            Ninguna empresa puede optimizar una operación que todavía no{" "}
            <span className="text-brand">controla.</span>
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-[15px] text-white/55">
            Por eso Rutia empieza por lo importante: orden, visibilidad y
            control. La optimización llega después.
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Inicial",
      limit: "Hasta 150 entregas por mes",
      items: [
        "Todas las funciones de Rutia incluidas",
        "Pedidos, depósito, armado del día e incidencias",
        "Entrega desde el celular e historial completo",
        "Reportes, indicadores y varios depósitos",
        "Soporte por WhatsApp",
      ],
      featured: false,
    },
    {
      name: "PyME",
      limit: "Hasta 600 entregas por mes",
      items: [
        "Todas las funciones de Rutia incluidas",
        "Pedidos, depósito, armado del día e incidencias",
        "Entrega desde el celular e historial completo",
        "Reportes, indicadores y varios depósitos",
        "Soporte por WhatsApp",
      ],
      featured: true,
    },
    {
      name: "Empresa",
      limit: "Hasta 2.000 entregas por mes",
      items: [
        "Todas las funciones de Rutia incluidas",
        "Pedidos, depósito, armado del día e incidencias",
        "Entrega desde el celular e historial completo",
        "Reportes, indicadores y varios depósitos",
        "Soporte prioritario por WhatsApp",
      ],
      featured: false,
    },
  ];
  return (
    <section id="precios" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <Shell>
        <SectionIntro
          center
          pill="Un plan para cada tamaño de operación"
          title="Planes que se adaptan a tu operación"
          desc="Todos los planes incluyen todos los módulos y acceso desde el celular para los que reparten. Sin permanencia: cancelás cuando quieras."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`group relative flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 ${
                  p.featured
                    ? "bg-ink-2 py-10 text-white shadow-[0_30px_70px_-20px_rgba(47,107,255,.45)] ring-2 ring-primary/70 lg:-my-4 lg:scale-[1.03] hover:lg:scale-[1.05]"
                    : "block-card block-card-hover"
                }`}
              >
                {p.featured && (
                  <>
                    <span className="bg-brand absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white shadow-lg shadow-primary/40">
                      Más elegido
                    </span>
                  </>
                )}
                <div
                  className={`text-sm font-semibold ${p.featured ? "text-[cyan]" : "text-muted-foreground"}`}
                >
                  {p.name}
                </div>
                <div
                  className={`mt-3 text-2xl font-extrabold tracking-tight ${p.featured ? "text-[cyan]" : "text-primary"}`}
                >
                  Pedí tu demo gratuita
                </div>
                <div
                  className={`mt-1.5 text-[13.5px] font-medium ${p.featured ? "text-white/80" : "text-foreground"}`}
                >
                  {p.limit}
                </div>
                <div
                  className={`my-6 h-px w-full ${p.featured ? "bg-white/15" : "bg-border"}`}
                />
                <ul className="flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex justify-center gap-2.5 text-left text-[14px] leading-relaxed"
                    >
                      <CircleCheck
                        className={`mt-0.5 h-4 w-4 flex-none ${p.featured ? "text-[cyan]" : "text-success"}`}
                      />
                      <span
                        className={
                          p.featured ? "text-white/85" : "text-muted-foreground"
                        }
                      >
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  onClick={trackClickDemo}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-center font-semibold transition-all duration-200 active:scale-[0.98] ${
                    p.featured
                      ? "bg-brand text-[15.5px] text-white shadow-[0_10px_30px_-8px_rgba(47,107,255,.6)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_36px_-8px_rgba(47,107,255,.7)]"
                      : "plan-cta shadow-[var(--shadow-card)] hover:-translate-y-0.5"
                  }`}
                >
                  Pedí una demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-12 text-center text-[14.5px] text-muted-foreground">
            ¿Más de 2.000 entregas por mes o varias sucursales?{" "}
            <a
              href="#demo"
              className="font-semibold text-primary hover:underline"
            >
              Escribinos y armamos un plan a medida.
            </a>
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Shell className="max-w-3xl">
        <SectionIntro center pill="Preguntas" title="Preguntas frecuentes" />
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 25}>
                <div
                  className={`block-card overflow-hidden transition-colors ${isOpen ? "border-primary/40" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className="text-[15.5px] font-semibold">{q}</span>
                    <span
                      className={`grid h-7 w-7 flex-none place-items-center rounded-full transition-all duration-200 ${isOpen ? "rotate-180 bg-primary/10 text-primary" : "bg-surface text-muted-foreground"}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-muted-foreground">
                        {a}
                      </p>
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

// Conexión futura del formulario: pegar aquí la URL del endpoint cuando exista
// (ej. Formspree: "https://formspree.io/f/XXXXXXXX"). Con el valor vacío, el
// formulario muestra la confirmación sin enviar datos a ningún servicio externo.
const FORM_ENDPOINT = "https://formspree.io/f/xeebbylg";
const CONTACT_ENDPOINT = "/api/contact";
const CALENDLY_URL = "https://calendly.com/rutia-demo/30min";

function DemoCta() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  return (
    <section
      id="demo"
      className="relative scroll-mt-24 overflow-hidden bg-[#E8EEF1] py-20 text-foreground lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(36,93,255,.12),transparent_32%)]"
      />
      <Shell className="relative grid gap-12 lg:grid-cols-12">
        <div className="text-center lg:col-span-6 lg:text-left">
          <Reveal>
            <span className="section-label">Empezá hoy</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[2.6rem]">
              Basta de Excel. Basta de papelitos. Empezá a controlar tu
              operación.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-xl text-[17px] text-muted-foreground lg:mx-0">
              Dejanos tus datos y coordinamos una reunión de 30 minutos: nos
              contás cómo trabajás, te mostramos Rutia funcionando con entregas
              como las tuyas, y vemos juntos si te sirve.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 rounded-2xl border border-border bg-white/70 p-6 text-center shadow-[var(--shadow-card)] lg:text-left">
              <p className="font-semibold">¿Preferís hablar directo?</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="https://wa.me/5491178242630?text=Hola%2C%20quiero%20conocer%20Rutia"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackClickWhatsApp}
                  className="whatsapp-action inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-[0_8px_24px_-6px_rgb(18_140_74/0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgb(18_140_74/0.65)] active:scale-[0.98]"
                >
                  <WhatsappIcon className="h-5 w-5" phoneColor="#128C4A" />
                  Escribinos por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contacto@rutia.com.ar"
                  onClick={trackContact}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  contacto@rutia.com.ar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-2xl bg-white p-7 text-center text-foreground shadow-[var(--shadow-pop)] sm:p-8">
            {sent ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-success text-white">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </span>
                <h3 className="mt-6 text-2xl font-bold">
                  ¡Listo! Recibimos tus datos.
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Ya que estás, agendá la reunión ahora y elegí el horario que
                  te quede mejor.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackClickDemo}
                  className="bg-brand group mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(47,107,255,.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.98]"
                >
                  Agendá tu reunión
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            ) : (
              <form
                action={FORM_ENDPOINT}
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (sending) return; // evita doble envío
                  const form = e.currentTarget;
                  setSending(true);
                  setError(false);
                  try {
                    const data = new FormData(form);
                    data.append("page_url", window.location.href);
                    const controller = new AbortController();
                    const timeout = window.setTimeout(
                      () => controller.abort(),
                      15000,
                    );
                    let res = await fetch(CONTACT_ENDPOINT, {
                      method: "POST",
                      body: data,
                      headers: { Accept: "application/json" },
                      signal: controller.signal,
                    });
                    if (!res.ok && res.status >= 500) {
                      res = await fetch(FORM_ENDPOINT, {
                        method: "POST",
                        body: data,
                        headers: { Accept: "application/json" },
                        signal: controller.signal,
                      });
                    }
                    window.clearTimeout(timeout);
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    trackFormSubmit();
                    trackLead();
                    setSent(true);
                  } catch (err) {
                    console.error("Error al enviar el formulario:", err);
                    setError(true);
                  } finally {
                    setSending(false);
                  }
                }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold">Pedí tu demo gratis</h3>
                <p className="-mt-1 text-[13.5px] text-muted-foreground">
                  Dejanos tus datos y coordinamos la reunión. Sin costo, sin
                  compromiso.
                </p>
                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva consulta desde rutia.com.ar"
                />
                <input type="hidden" name="source" value="rutia.com.ar" />
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <Field label="Nombre">
                  <input
                    required
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    className={inputCls}
                    placeholder="Tu nombre"
                  />
                </Field>
                <Field label="Empresa">
                  <input
                    required
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    className={inputCls}
                    placeholder="Nombre de tu empresa"
                  />
                </Field>
                <Field label="Correo electrónico">
                  <input
                    required
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className={inputCls}
                    placeholder="tu@empresa.com"
                  />
                </Field>
                <Field label="Teléfono / WhatsApp">
                  <input
                    required
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    className={inputCls}
                    placeholder="+54 9 11 ..."
                  />
                </Field>
                <Field label="Rubro">
                  <select
                    required
                    name="rubro"
                    className={inputCls}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Elegí una opción
                    </option>
                    <option>Mueblería</option>
                    <option>Colchonería</option>
                    <option>Electrodomésticos</option>
                    <option>Ferretería</option>
                    <option>Corralón</option>
                    <option>Distribuidora</option>
                    <option>E-commerce</option>
                    <option>Otro</option>
                  </select>
                </Field>
                <Field label="Entregas por mes">
                  <select
                    required
                    name="entregas_por_mes"
                    className={inputCls}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Elegí una opción
                    </option>
                    <option>Menos de 20</option>
                    <option>20 a 150</option>
                    <option>150 a 600</option>
                    <option>600 a 2.000</option>
                    <option>Más de 2.000</option>
                  </select>
                </Field>
                <button
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  className="bg-brand mt-2 w-full rounded-xl py-3.5 text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(47,107,255,.5)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
                >
                  Quiero mi demo gratis
                </button>
                {error && (
                  <p
                    role="alert"
                    className="mt-3 text-[13.5px] font-medium text-destructive"
                  >
                    No pudimos enviar tu consulta. Probá nuevamente o escribinos
                    por WhatsApp o a contacto@rutia.com.ar.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-[#18D2FF]/15";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block text-[13px] font-semibold">{label}</span>
      {children}
    </label>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Shell className="py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Logo lazy />
            <p className="mt-4 max-w-sm text-[14.5px] text-white/55">
              El centro de control de tus entregas. Para empresas que todavía
              organizan su logística con Excel y WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            {[
              [
                "Navegación",
                [
                  ["Producto", "/#producto"],
                  ["Planes", "/#precios"],
                  ["Quiénes somos", "/#nosotros"],
                  ["Blog", "/blog"],
                  ["Contacto", "/#demo"],
                ],
              ],
              [
                "Contacto",
                [
                  ["contacto@rutia.com.ar", "mailto:contacto@rutia.com.ar"],
                  [
                    "WhatsApp",
                    "https://wa.me/5491178242630?text=Hola%2C%20quiero%20una%20demo%20de%20Rutia",
                  ],
                ],
              ],
              [
                "Seguinos",
                [
                  ["Instagram", "https://www.instagram.com/somosrutia"],
                  ["LinkedIn", "https://www.linkedin.com/company/rutia"],
                  [
                    "Facebook",
                    "https://www.facebook.com/profile.php?id=61591624718047",
                  ],
                ],
              ],
            ].map(([title, links]) => (
              <div key={title as string}>
                <div className="text-sm font-bold">{title as string}</div>
                <ul className="mt-4 space-y-2 text-[14.5px] text-white/55">
                  {(links as [string, string][]).map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="hover:text-white"
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-white/45">
          <span>© 2026 Rutia — Buenos Aires, Argentina</span>
          <nav
            className="flex flex-wrap gap-x-3 gap-y-1"
            aria-label="Páginas legales"
          >
            <a
              href="/privacidad"
              className="transition-colors hover:text-white"
            >
              Política de privacidad
            </a>
            <span aria-hidden="true">·</span>
            <a href="/terminos" className="transition-colors hover:text-white">
              Términos
            </a>
            <span aria-hidden="true">·</span>
            <a href="/cookies" className="transition-colors hover:text-white">
              Cookies
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("rutia:open-cookie-preferences"))
              }
              className="transition-colors hover:text-white"
            >
              Preferencias de cookies
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="/aviso-legal"
              className="transition-colors hover:text-white"
            >
              Aviso legal
            </a>
          </nav>
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
