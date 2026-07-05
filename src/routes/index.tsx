import { createFileRoute } from "@tanstack/react-router";
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
  ChevronDown,
} from "lucide-react";
import { Reveal, Counter } from "@/components/Reveal";
import { DashboardMockup } from "@/components/DashboardMockup";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RouteMap, RouteConnector } from "@/components/RouteMotif";
import { MiniBoard, PhoneDelivery } from "@/components/ProductVisuals";

export const Route = createFileRoute("/")({
  component: Landing,
});

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

const FEATURES: {
  icon: React.ElementType;
  title: string;
  text: string;
  visual?: "board" | "phone";
}[] = [
  {
    icon: Package,
    title: "Pedidos",
    text: "Cargá cada pedido a mano o importalo desde tu Excel con nuestra plantilla. Cliente, dirección, teléfono, qué se entrega y cuándo. Buscá y filtrá en segundos. Nunca más un pedido olvidado.",
  },
  {
    icon: CalendarDays,
    title: "Calendario de entregas",
    text: "Mirá cuántas entregas tenés cada día y detectá los días sobrecargados antes de que sean un problema.",
  },
  {
    icon: LayoutGrid,
    title: "Armado del día",
    text: "Asigná cada entrega a tu camión, camioneta, moto o al flete que contrataste, arrastrando y soltando. En minutos tenés el día armado y todos saben qué sale, con quién y en qué orden.",
    visual: "board",
  },
  {
    icon: Warehouse,
    title: "Depósito y preparación",
    text: "El depósito ve qué hay que preparar y marca cada pedido como listo. Nada sale a la calle sin estar preparado, y vos lo ves sin llamar a nadie.",
  },
  {
    icon: Smartphone,
    title: "Entrega desde el celular",
    text: "El que reparte —chofer propio, cadete o flete— recibe sus entregas en el celular que ya tiene: dirección, teléfono, observaciones. Marca entregada, parcial o fallida con un toque. Sin apps, sin capacitación.",
    visual: "phone",
  },
  {
    icon: RefreshCcw,
    title: "Incidencias y reprogramaciones",
    text: "¿Cliente ausente? ¿Dirección incorrecta? Queda registrado con su motivo, y la reprogramación se agenda en el momento. Nada se pierde, nada queda 'en el aire'.",
  },
  {
    icon: History,
    title: "Historial de todo lo que pasó",
    text: "Cada entrega tiene su historia completa: quién la cargó, quién la preparó, quién la llevó, qué pasó y cuándo. Si un cliente reclama, la respuesta está a un clic.",
  },
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

const FAQ = [
  ["¿Tengo que instalar algo?", "No. Rutia funciona desde el navegador, en cualquier computadora. No hay nada que instalar ni mantener."],
  ["¿Los que reparten necesitan una app?", "No. Choferes propios, cadetes o fletes abren sus entregas desde el celular que ya tienen y marcan entregada, parcial o fallida con un toque."],
  ["¿Puedo importar mis pedidos desde Excel?", "Sí. Te damos una plantilla simple: la completás (o pegás tus datos) y los pedidos se cargan solos."],
  ["¿Es difícil de aprender?", "Si sabés usar WhatsApp, sabés usar Rutia. La mayoría arma su primer día de entregas en menos de una hora."],
  ["¿Sirve si trabajo con fletes contratados y no tengo vehículo propio?", "Sí. Podés asignar entregas a vehículos propios, a fletes, o mezclar ambos. Y repartir con camión, camioneta, moto o lo que uses."],
  ["¿Reemplaza mi sistema de facturación o de stock?", "No, y está bien que así sea. Rutia se ocupa de tus entregas: convive con lo que ya usás para vender y facturar."],
  ["¿Qué pasa si un cliente reclama por una entrega vieja?", "Buscás la entrega y ves toda su historia: quién la llevó, qué pasó y cuándo. La respuesta está a un clic."],
  ["¿Qué pasa si no me sirve?", "No hay permanencia. Cancelás cuando quieras y listo, sin letra chica."],
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      Rutia<span className="text-accent">.</span>
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-dot animate-pulse-glow" />
      {children}
    </span>
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_rgb(255_255_255_/_0.6)_inset,0_8px_24px_-16px_rgb(15_23_42_/_0.12)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="text-2xl">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#"
            className="rounded-lg px-4 py-2 text-[14px] font-semibold text-foreground hover:bg-secondary"
          >
            Ingresar
          </a>
          <a
            href="#demo"
            className="group relative rounded-lg bg-foreground px-4 py-2.5 text-[14px] font-semibold text-white transition-all hover:bg-foreground/90 shadow-[0_1px_0_0_rgb(255_255_255_/_0.15)_inset,0_8px_20px_-8px_rgb(15_23_42_/_0.4)]"
          >
            Pedí una demo
          </a>
        </div>
        <button
          className="rounded-md p-2 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-[16px] font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-foreground px-5 py-3 text-center font-semibold text-white"
            >
              Pedí una demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Fondo: un glow controlado + rutas abstractas (firma visual) */}
      <div className="aurora">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(30_64_175_/_0.14),transparent_60%)] blur-2xl" />
        <RouteMap className="absolute -right-24 top-8 hidden h-[560px] w-[840px] text-primary/[0.13] lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <div className="animate-enter">
            <Eyebrow>Para empresas que entregan lo que venden</Eyebrow>
          </div>
          <h1
            className="animate-enter mt-6 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]"
            style={{ animationDelay: "80ms" }}
          >
            Toda tu operación de entregas,{" "}
            <span className="text-primary">bajo control.</span> En un solo lugar.
          </h1>
          <p
            className="animate-enter mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Rutia es el centro de control de tu logística: pedidos, entregas, depósito,
            vehículos, choferes y fletes, reprogramaciones y todo lo que pasó, registrado
            y a la vista. Para que la operación deje de vivir en la cabeza de una sola
            persona.
          </p>
          <div className="animate-enter" style={{ animationDelay: "240ms" }}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="group relative inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[0_1px_0_0_rgb(255_255_255_/_0.25)_inset,0_10px_30px_-8px_rgb(249_115_22_/_0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgb(255_255_255_/_0.25)_inset,0_16px_36px_-8px_rgb(249_115_22_/_0.55)]"
              >
                Pedí una demo gratis
                <svg viewBox="0 0 20 20" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="currentColor">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-foreground ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] hover:ring-foreground/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25D366]" fill="currentColor">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42Z" />
                </svg>
                Escribinos por WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sin tarjeta. Sin instalación. Los que reparten no necesitan descargar
              ninguna app.
            </p>
          </div>
        </div>

        <div className="animate-enter relative lg:pl-6" style={{ animationDelay: "200ms" }}>
          {/* Glow bajo el producto */}
          <div className="pointer-events-none absolute -inset-10 -z-0">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgb(30_64_175_/_0.22),transparent_70%)] blur-2xl" />
          </div>
          {/* Dashboard con leve perspectiva: se endereza al pasar el mouse */}
          <div className="group relative [perspective:1600px]">
            <div className="relative transition-transform duration-700 ease-out lg:[transform:rotateX(3deg)_rotateY(-5deg)] lg:group-hover:[transform:rotateX(0deg)_rotateY(0deg)]">
              <DashboardMockup />
            </div>
          </div>
          {/* Micro-tarjetas de estado en vivo */}
          <div className="pointer-events-none absolute -left-4 top-1/3 hidden rounded-xl bg-white/95 px-3.5 py-2.5 text-xs font-semibold shadow-[var(--shadow-card-hover)] ring-1 ring-border backdrop-blur-md md:flex md:items-center md:gap-2">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
            12 entregadas hoy
          </div>
          <div className="pointer-events-none absolute -right-2 bottom-8 hidden rounded-xl bg-white/95 px-3.5 py-2.5 text-xs font-semibold shadow-[var(--shadow-card-hover)] ring-1 ring-border backdrop-blur-md md:flex md:items-center md:gap-2">
            <Truck className="h-3.5 w-3.5 text-primary" />
            Camión 01 en camino
          </div>
        </div>
      </div>

      {/* Franja de métricas */}
      <div className="relative border-y border-border/60 bg-gradient-to-b from-surface/60 to-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 lg:px-8">
          {[
            { n: 2000, suffix: "+", label: "De 20 a 2.000 entregas por mes bajo control" },
            { n: 1, suffix: "", label: "solo lugar para toda la operación" },
            { n: 0, suffix: "", label: "apps que instalar" },
          ].map((m, i) => (
            <div
              key={m.label}
              className={`text-center ${i > 0 ? "sm:border-l sm:border-border/60" : ""}`}
            >
              <div className="text-3xl font-extrabold text-primary sm:text-4xl">
                <Counter to={m.n} suffix={m.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2
          className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
            invert ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={120}>
          <p
            className={`mt-5 text-lg ${
              invert ? "text-white/75" : "text-muted-foreground"
            }`}
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
    <section className="relative scroll-mt-24 py-24 lg:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="El problema"
          title={<>¿Tu logística funciona así?</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, text }, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="card-premium card-premium-hover h-full p-6">
                <div className="icon-chip">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-4 text-[16px] font-medium leading-relaxed text-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-16 max-w-3xl text-center text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            El verdadero problema no es la falta de tecnología. Es la falta de control.{" "}
            <span className="font-bold text-foreground">
              Rutia pasa tu operación de la memoria de una persona a un sistema que ve toda
              la empresa.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="producto" className="relative scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="El producto"
          title={<>Un solo lugar para toda tu operación</>}
          desc={<>Del pedido a la entrega, cada paso queda registrado, visible y bajo control. Como una torre de control, pero para tus entregas.</>}
        />
        <div className="mt-16 grid grid-flow-row-dense gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const featured = Boolean(f.visual);
            return (
              <Reveal
                key={f.title}
                delay={i * 50}
                className={featured ? "sm:col-span-2" : ""}
              >
                <div
                  className={`card-premium card-premium-hover group relative h-full overflow-hidden p-7 ${
                    featured ? "lg:flex lg:items-center lg:gap-8" : ""
                  }`}
                >
                  <div className={featured ? "lg:min-w-0 lg:flex-1" : ""}>
                    <div className="icon-chip">
                      <f.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                  {f.visual === "board" && (
                    <div className="mt-6 lg:mt-0 lg:w-[46%] lg:flex-none">
                      <MiniBoard />
                    </div>
                  )}
                  {f.visual === "phone" && (
                    <div className="mt-6 lg:mt-0 lg:w-[34%] lg:flex-none">
                      <PhoneDelivery />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
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
    <section
      id="como"
      className="relative scroll-mt-24 py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Cómo funciona"
          title={<>Así de simple</>}
        />
        <div className="relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Ruta que une los pasos: la entrega recorre un camino */}
          <RouteConnector className="absolute left-[12%] right-[12%] top-6 hidden h-6 text-primary/40 lg:block" />
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="relative h-full text-center lg:px-3">
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-base font-extrabold text-primary shadow-[var(--shadow-card)] ring-1 ring-primary/25">
                  <span className="absolute inset-0 rounded-full ring-4 ring-white" />
                  <span className="relative">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-border bg-white/70 px-6 py-4 text-center text-[16px] backdrop-blur">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-success/10 text-success">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <span>
              <span className="font-bold text-foreground">Sin apps para descargar.</span>{" "}
              <span className="text-muted-foreground">
                Tus choferes y fletes solo necesitan el celular que ya tienen.
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ForWhom() {
  return (
    <section id="para-quien" className="relative scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Para quién"
          title={<>Hecho para empresas que entregan lo que venden</>}
          desc={<>No importa qué vendés ni con qué repartís: camión propio, camioneta, moto o fletes contratados.</>}
        />
        <Reveal>
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {RUBROS.map(({ icon: Icon, name }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 text-[15px] font-semibold text-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[var(--shadow-card-hover)]"
              >
                <Icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} />
                {name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-white to-surface p-8 text-center text-[17px] shadow-[var(--shadow-card)]">
            Si hacés{" "}
            <span className="font-bold text-foreground">
              más de 20 entregas por mes
            </span>{" "}
            con vehículos propios o fletes, Rutia es para vos. Si hacés dos envíos por mes
            por moto, probablemente no lo necesites (y preferimos decírtelo).
          </div>
        </Reveal>
      </div>
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
    <section
      className="relative py-24 lg:py-32"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Beneficios"
          title={<>Cada uno gana algo distinto</>}
        />
        <Reveal>
          {/* Un solo panel: los roles comparten la misma ruta, separados por líneas punteadas */}
          <div className="card-premium mt-14 grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {cols.map((c, i) => (
              <div
                key={c.title}
                className={`p-7 ${
                  i > 0
                    ? "border-t border-dashed border-border sm:border-t-0 sm:[&:nth-child(odd)]:border-l lg:border-l"
                    : ""
                } ${i === 2 ? "border-t border-dashed sm:border-t lg:border-t-0" : ""} ${i === 3 ? "sm:border-t lg:border-t-0" : ""}`}
              >
                <div className="icon-chip">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-foreground">{c.title}</h3>
                <ul className="mt-4 space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
                      <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-success/12 text-success">
                        <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <Eyebrow>Quiénes somos</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Rutia no se diseñó en una oficina. Se vivió en un depósito.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Rutia nace adentro de una mueblería de Avenida Belgrano, en Buenos Aires, con
            entre 20 y 50 entregas por día, un camión propio y fletes contratados a diario.
            Creíamos que el problema eran las rutas. Pero vimos de primera mano que el
            verdadero problema era otro: toda la operación dependía del Excel, los remitos
            y la memoria del encargado — y el día que esa persona faltaba, aparecía el
            caos. Construimos Rutia para resolver ese problema: el nuestro primero, y ahora
            el de miles de pymes que trabajan igual.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-[15px] font-semibold text-foreground">
            El equipo de Rutia — Buenos Aires, Argentina 🇦🇷
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-navy-panel relative overflow-hidden py-24 lg:py-32">
      <div className="aurora text-white/[0.09]">
        <RouteMap className="absolute -left-24 top-1/2 h-[480px] w-[760px] -translate-y-1/2" animated={false} />
        <div className="absolute -top-32 left-1/2 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(120_140_255_/_0.25),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Ninguna empresa puede optimizar una operación que todavía no{" "}
            <span className="text-accent">controla</span>.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-[15px] text-white/70">
            Por eso Rutia empieza por lo importante: orden, visibilidad y control. La
            optimización llega después.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Inicial",
      price: "USD 59",
      limit: "Hasta 150 entregas por mes",
      items: [
        "Pedidos, calendario, armado del día y entrega desde el celular",
        "Soporte por WhatsApp",
      ],
      featured: false,
    },
    {
      name: "PyME",
      price: "USD 119",
      limit: "Hasta 600 entregas por mes",
      items: [
        "Todo lo de Inicial",
        "Depósito y preparación",
        "Incidencias y reprogramaciones",
        "Historial completo",
        "Tablero para dueños",
      ],
      featured: true,
    },
    {
      name: "Empresa",
      price: "USD 229",
      limit: "Hasta 2.000 entregas por mes",
      items: [
        "Todo lo de PyME",
        "Reportes e indicadores",
        "Varios depósitos",
        "Soporte prioritario",
      ],
      featured: false,
    },
  ];
  return (
    <section id="precios" className="relative scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Precio de lanzamiento — congelado para los primeros clientes"
          title={<>Precios simples, sin sorpresas</>}
          desc={<>Sin permanencia. Cancelás cuando quieras. Todos los planes incluyen todos los módulos y acceso desde el celular para los que reparten.</>}
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 ${
                  p.featured
                    ? "bg-navy-panel text-white ring-1 ring-white/10 shadow-[var(--shadow-premium)] lg:scale-[1.04]"
                    : "bg-white card-premium card-premium-hover"
                }`}
              >
                {p.featured && (
                  <>
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(120_140_255_/_0.4),transparent_70%)] blur-2xl" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground shadow-lg shadow-accent/40">
                      Más elegido
                    </span>
                  </>
                )}
                <div
                  className={`relative text-sm font-semibold ${
                    p.featured ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {p.name}
                </div>
                <div className="relative mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{p.price}</span>
                  <span
                    className={p.featured ? "text-white/70" : "text-muted-foreground"}
                  >
                    /mes
                  </span>
                </div>
                <div
                  className={`relative mt-2 text-[14px] font-medium ${
                    p.featured ? "text-white/85" : "text-foreground"
                  }`}
                >
                  {p.limit}
                </div>
                <div
                  className={`relative my-6 h-px w-full ${
                    p.featured ? "bg-white/15" : "bg-border"
                  }`}
                />
                <ul className="relative flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[14.5px]">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                          p.featured
                            ? "bg-white/15 text-white"
                            : "bg-success/12 text-success"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={
                          p.featured ? "text-white/90" : "text-muted-foreground"
                        }
                      >
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`relative mt-8 block rounded-xl py-3 text-center font-semibold transition-all hover:-translate-y-0.5 ${
                    p.featured
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:shadow-accent/40"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}
                >
                  Pedí una demo
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-center text-muted-foreground">
            ¿Más de 2.000 entregas por mes o varias sucursales?{" "}
            <a href="#demo" className="font-semibold text-primary hover:underline">
              Escribinos y armamos un plan a medida.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Preguntas frecuentes</>}
        />
        <div className="mt-12 space-y-3">
          {FAQ.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 30}>
                <div
                  className={`overflow-hidden rounded-2xl bg-white ring-1 transition-all ${
                    isOpen
                      ? "ring-primary/30 shadow-[var(--shadow-glow)]"
                      : "ring-border hover:ring-foreground/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[16px] font-semibold">{q}</span>
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-primary transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-primary/10" : "bg-surface"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted-foreground">{a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DemoCta() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="demo"
      className="bg-navy-panel relative scroll-mt-24 overflow-hidden py-24 text-white lg:py-32"
    >
      <div className="aurora">
        <RouteMap className="absolute -right-32 top-0 h-[560px] w-[880px] text-white/[0.08]" />
        <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgb(120_140_255_/_0.3),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgb(249_115_22_/_0.16),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Empezá hoy
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Basta de Excel. Basta de papelitos. Empezá a controlar tu operación.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-white/75">
              Pedí una demo de 20 minutos y te mostramos Rutia funcionando con entregas
              como las tuyas.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur-xl">
              <p className="font-semibold">¿Preferís hablar directo?</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:hola@rutia.app"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/15"
                >
                  hola@rutia.app
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="relative rounded-2xl bg-white p-7 text-foreground shadow-[var(--shadow-premium)] ring-1 ring-white/20 sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            {sent ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success text-white shadow-lg shadow-success/30">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </div>
                <h3 className="mt-6 text-2xl font-bold">¡Listo!</h3>
                <p className="mt-2 text-muted-foreground">
                  Te contactamos en menos de 24 hs hábiles.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold tracking-tight">Pedí tu demo gratis</h3>
                <Field label="Nombre">
                  <input required className={inputCls} placeholder="Tu nombre" />
                </Field>
                <Field label="Empresa">
                  <input required className={inputCls} placeholder="Nombre de tu empresa" />
                </Field>
                <Field label="Teléfono / WhatsApp">
                  <input required className={inputCls} placeholder="+54 9 11 ..." />
                </Field>
                <Field label="Rubro">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Elegí una opción</option>
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
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Elegí una opción</option>
                    <option>Menos de 20</option>
                    <option>20 a 150</option>
                    <option>150 a 600</option>
                    <option>600 a 2.000</option>
                    <option>Más de 2.000</option>
                  </select>
                </Field>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-accent py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-accent/40"
                >
                  Quiero mi demo gratis
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Logo className="text-2xl" />
            <p className="mt-4 max-w-sm text-[15px] text-muted-foreground">
              El centro de control de tus entregas. Para empresas que todavía organizan su
              logística con Excel y WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <div className="text-sm font-bold text-foreground">Navegación</div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li><a href="#producto" className="hover:text-foreground">Producto</a></li>
                <li><a href="#precios" className="hover:text-foreground">Precios</a></li>
                <li><a href="#nosotros" className="hover:text-foreground">Quiénes somos</a></li>
                <li><a href="#demo" className="hover:text-foreground">Contacto</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Contacto</div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li><a href="mailto:hola@rutia.app" className="hover:text-foreground">hola@rutia.app</a></li>
                <li><a href="https://wa.me/5491100000000" className="hover:text-foreground">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Seguinos</div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Rutia — Buenos Aires, Argentina
        </div>
      </div>
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
