import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FileSpreadsheet,
  FileText,
  MessagesSquare,
  BrainCircuit,
  RotateCcw,
  PhoneIncoming,
  Check,
  ChevronDown,
} from "lucide-react";
import { Reveal, Counter } from "@/components/Reveal";
import { DashboardMockup } from "@/components/DashboardMockup";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Wordmark, Stamp, SectionTag } from "@/components/Brand";
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
  title: string;
  text: string;
  visual?: "board" | "phone";
}[] = [
  {
    title: "Pedidos",
    text: "Cargá cada pedido a mano o importalo desde tu Excel con nuestra plantilla. Cliente, dirección, teléfono, qué se entrega y cuándo. Buscá y filtrá en segundos. Nunca más un pedido olvidado.",
  },
  {
    title: "Calendario de entregas",
    text: "Mirá cuántas entregas tenés cada día y detectá los días sobrecargados antes de que sean un problema.",
  },
  {
    title: "Armado del día",
    text: "Asigná cada entrega a tu camión, camioneta, moto o al flete que contrataste, arrastrando y soltando. En minutos tenés el día armado y todos saben qué sale, con quién y en qué orden.",
    visual: "board",
  },
  {
    title: "Depósito y preparación",
    text: "El depósito ve qué hay que preparar y marca cada pedido como listo. Nada sale a la calle sin estar preparado, y vos lo ves sin llamar a nadie.",
  },
  {
    title: "Entrega desde el celular",
    text: "El que reparte —chofer propio, cadete o flete— recibe sus entregas en el celular que ya tiene: dirección, teléfono, observaciones. Marca entregada, parcial o fallida con un toque. Sin apps, sin capacitación.",
    visual: "phone",
  },
  {
    title: "Incidencias y reprogramaciones",
    text: "¿Cliente ausente? ¿Dirección incorrecta? Queda registrado con su motivo, y la reprogramación se agenda en el momento. Nada se pierde, nada queda 'en el aire'.",
  },
  {
    title: "Historial de todo lo que pasó",
    text: "Cada entrega tiene su historia completa: quién la cargó, quién la preparó, quién la llevó, qué pasó y cuándo. Si un cliente reclama, la respuesta está a un clic.",
  },
];

const RUBROS = [
  "Mueblerías",
  "Colchonerías",
  "Electrodomésticos",
  "Ferreterías",
  "Corralones y sanitarios",
  "Casas de materiales",
  "Distribuidoras",
  "Bicicleterías y deportes",
  "Iluminación",
  "E-commerce con reparto propio",
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

/* ---------- Layout primitives ---------- */

function Shell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 lg:px-8 ${className}`}>{children}</div>;
}

function SectionHead({
  index,
  tag,
  title,
  desc,
  invert = false,
}: {
  index: string;
  tag: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <Reveal>
          <SectionTag index={index}>{tag}</SectionTag>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className={`mt-5 text-3xl font-black uppercase leading-[1.02] sm:text-4xl lg:text-[2.9rem] ${
              invert ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      </div>
      {desc && (
        <Reveal delay={120} className="lg:col-span-5 lg:self-end">
          <p className={`text-[17px] leading-relaxed ${invert ? "text-white/70" : "text-muted-foreground"}`}>
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Sections ---------- */

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
      className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur transition-colors ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="text-[1.35rem]">
          <Wordmark />
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
          <a href="#" className="rounded-md px-4 py-2 text-[14px] font-semibold hover:bg-secondary">
            Ingresar
          </a>
          <a
            href="#demo"
            className="rounded-md bg-foreground px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-primary"
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
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-[16px] font-medium">
                {label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-foreground px-5 py-3 text-center font-semibold text-white"
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
      <Shell className="pt-16 lg:pt-24">
        <div className="animate-enter">
          <SectionTag index="▪">Para empresas que entregan lo que venden</SectionTag>
        </div>
        {/* Una sola voz: el titular a escala de cartel, ancho completo */}
        <h1
          className="animate-enter mt-8 text-[2.6rem] font-black uppercase leading-[0.95] sm:text-6xl lg:text-[5rem]"
          style={{ animationDelay: "80ms" }}
        >
          Toda tu operación de entregas,{" "}
          <span className="text-primary">bajo control.</span> En un solo lugar.
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p
            className="animate-enter max-w-xl text-lg leading-relaxed text-muted-foreground lg:col-span-6"
            style={{ animationDelay: "160ms" }}
          >
            Rutia es el centro de control de tu logística: pedidos, entregas, depósito,
            vehículos, choferes y fletes, reprogramaciones y todo lo que pasó, registrado
            y a la vista. Para que la operación deje de vivir en la cabeza de una sola
            persona.
          </p>
          <div className="animate-enter lg:col-span-5 lg:col-start-8" style={{ animationDelay: "240ms" }}>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition-colors hover:bg-foreground"
              >
                Pedí una demo gratis
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 4l6 6-6 6" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-6 py-3.5 text-base font-semibold transition-colors hover:border-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25D366]" fill="currentColor">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42Z" />
                </svg>
                Escribinos por WhatsApp
              </a>
            </div>
            <p className="mt-4 font-mono text-[13px] text-muted-foreground lg:text-right">
              Sin tarjeta. Sin instalación. Los que reparten no necesitan descargar ninguna app.
            </p>
          </div>
        </div>
      </Shell>

      {/* El producto entra en cuadro: ancho completo, desbordando el margen derecho */}
      <Shell className="relative pb-24 pt-14 lg:pt-16">
        <div className="dashed-rule absolute left-0 right-0 top-1/2 hidden lg:block" aria-hidden="true" />
        <div className="animate-enter relative" style={{ animationDelay: "300ms" }}>
          <div className="carbonico rounded-lg lg:w-[108%]">
            <DashboardMockup />
          </div>
          <Stamp className="absolute -top-5 right-2 lg:right-[-2%]">Entregada</Stamp>
        </div>
      </Shell>

      {/* Datos de operación a escala display: el primer freno de mano del scroll */}
      <div className="border-y border-border">
        <Shell className="grid sm:grid-cols-3">
          {[
            { n: 2000, suffix: "+", label: "De 20 a 2.000 entregas por mes bajo control" },
            { n: 1, suffix: "", label: "solo lugar para toda la operación" },
            { n: 0, suffix: "", label: "apps que instalar" },
          ].map((m, i) => (
            <div
              key={m.label}
              className={`py-10 lg:py-14 ${
                i > 0 ? "border-t border-border sm:border-l sm:border-t-0 sm:pl-10" : ""
              }`}
            >
              <div className="font-mono text-6xl font-semibold tracking-tight text-foreground lg:text-7xl">
                <Counter to={m.n} suffix={m.suffix} />
              </div>
              <div className="mono-label mt-4 max-w-[26ch] text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </Shell>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-surface py-24 lg:py-28">
      <Shell>
        <SectionHead index="01" tag="El problema" title={<>¿Tu logística funciona así?</>} />
        <div className="mt-12 grid lg:grid-cols-2 lg:gap-x-14">
          {PROBLEMS.map(({ icon: Icon, text }, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="ledger-row flex items-start gap-5 py-6">
                <span className="mono-label pt-1 text-primary">{String(i + 1).padStart(2, "0")}</span>
                <Icon className="mt-0.5 h-5 w-5 flex-none text-muted-foreground" strokeWidth={1.5} />
                <p className="text-[16px] font-medium leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-24 border-l-2 border-primary pl-6 lg:mt-32 lg:ml-[8.33%] lg:max-w-4xl lg:pl-10">
            <p className="font-display text-2xl font-bold leading-snug text-muted-foreground sm:text-3xl lg:text-4xl">
              El verdadero problema no es la falta de tecnología. Es la falta de control.{" "}
              <span className="text-foreground">
                Rutia pasa tu operación de la memoria de una persona a un sistema que ve
                toda la empresa.
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
    <section id="producto" className="scroll-mt-24 bg-white py-24 lg:py-28">
      <Shell>
        <SectionHead
          index="02"
          tag="El producto"
          title={<>Un solo lugar para toda tu operación</>}
          desc={<>Del pedido a la entrega, cada paso queda registrado, visible y bajo control. Como una torre de control, pero para tus entregas.</>}
        />
        {/* Manifiesto de módulos: filas de registro, no tarjetas */}
        <div className="mt-14 border-b border-border">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title}>
              <div className="ledger-row grid gap-5 py-8 lg:grid-cols-12 lg:gap-10">
                <div className="flex items-baseline gap-5 lg:col-span-4">
                  <span className="mono-label text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-extrabold uppercase leading-tight">
                    {f.title}
                  </h3>
                </div>
                <p
                  className={`text-[15.5px] leading-relaxed text-muted-foreground lg:col-span-8 ${
                    f.visual ? "lg:col-span-4" : "lg:col-span-7"
                  }`}
                >
                  {f.text}
                </p>
                {f.visual === "board" && (
                  <div className="lg:col-span-4">
                    <MiniBoard />
                  </div>
                )}
                {f.visual === "phone" && (
                  <div className="lg:col-span-4">
                    <PhoneDelivery />
                  </div>
                )}
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
    ["Cargá tus pedidos", "A mano en un minuto, o importando tu Excel con nuestra plantilla."],
    ["Prepará y armá el día", "El depósito marca qué está listo y vos asignás cada entrega a un vehículo propio o flete, arrastrando y soltando."],
    ["Entregá con control", "El que reparte marca cada entrega desde su celular. Vos ves todo en vivo desde el tablero."],
    ["Mirá qué pasó", "Entregadas, fallidas, reprogramadas y por qué. Todo queda registrado para que decidas mejor mañana."],
  ];
  return (
    <section id="como" className="scroll-mt-24 bg-surface py-24 lg:py-28">
      <Shell>
        <SectionHead index="03" tag="Cómo funciona" title={<>Así de simple</>} />
        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="dashed-rule absolute left-[12%] right-[12%] top-5 hidden lg:block" aria-hidden="true" />
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="relative">
                <div className="relative inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-white font-mono text-sm font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold uppercase leading-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-16 flex items-start gap-4 border border-foreground/20 bg-white p-5 lg:items-center">
            <span className="flex h-6 w-6 flex-none items-center justify-center bg-success text-white">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <p className="text-[16px]">
              <span className="font-display font-bold uppercase">Sin apps para descargar.</span>{" "}
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
    <section id="para-quien" className="scroll-mt-24 bg-white py-24 lg:py-28">
      <Shell>
        <SectionHead
          index="04"
          tag="Para quién"
          title={<>Hecho para empresas que entregan lo que venden</>}
          desc={<>No importa qué vendés ni con qué repartís: camión propio, camioneta, moto o fletes contratados.</>}
        />
        {/* Manifiesto de rubros: tipografía, no chips */}
        <Reveal>
          <p className="mono-label mt-12 max-w-5xl text-[13px] leading-[2.4] text-foreground">
            {RUBROS.map((r, i) => (
              <span key={r}>
                <span className="transition-colors hover:text-primary">{r}</span>
                {i < RUBROS.length - 1 && <span className="mx-3 text-border">/</span>}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-14 max-w-3xl border-t-2 border-foreground pt-5">
            <span className="mono-label text-muted-foreground">Nota —</span>
            <p className="mt-2 text-[17px] leading-relaxed">
              Si hacés <span className="font-bold">más de 20 entregas por mes</span> con
              vehículos propios o fletes, Rutia es para vos. Si hacés dos envíos por mes
              por moto, probablemente no lo necesites (y preferimos decírtelo).
            </p>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function Benefits() {
  const cols = [
    {
      title: "Para el dueño",
      items: [
        "Visibilidad total sin llamar a nadie",
        "Menos costos por errores y fletes de más",
        "La empresa deja de depender de una sola persona",
      ],
    },
    {
      title: "Para el encargado de logística",
      items: [
        "El día armado en minutos, no en horas",
        "Menos llamadas y menos caos",
        "Todo registrado: nadie te puede decir 'a mí no me avisaron'",
      ],
    },
    {
      title: "Para el depósito y los que reparten",
      items: [
        "El depósito sabe qué preparar sin que nadie se lo grite",
        "El que reparte ve sus entregas claritas en el celular",
        "Cada uno sabe exactamente qué tiene que hacer",
      ],
    },
    {
      title: "Para tus clientes",
      items: [
        "Saben cuándo llega su entrega",
        "Menos reprogramaciones sorpresa",
        "Si preguntan, tu equipo responde al instante",
      ],
    },
  ];
  return (
    <section className="bg-surface py-24 lg:py-28">
      <Shell>
        <SectionHead index="05" tag="Beneficios" title={<>Cada uno gana algo distinto</>} />
        <div className="mt-14 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div
                className={`h-full py-8 ${
                  i > 0 ? "border-t border-border sm:border-t-0 lg:border-l lg:pl-8" : ""
                } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i === 1 ? "sm:border-l sm:pl-8" : ""} ${i === 3 ? "sm:border-l sm:pl-8" : ""}`}
              >
                <div className="mono-label text-primary">{c.title}</div>
                <ul className="mt-5 space-y-4">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span className="mt-[0.55em] h-1.5 w-1.5 flex-none bg-accent" />
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
    <section id="nosotros" className="scroll-mt-24 bg-white py-24 lg:py-28">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionTag index="06">Quiénes somos</SectionTag>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 text-3xl font-black uppercase leading-[1.02] sm:text-4xl">
                Rutia no se diseñó en una oficina. Se vivió en un depósito.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Rutia nace adentro de una mueblería de Avenida Belgrano, en Buenos Aires,
                con entre 20 y 50 entregas por día, un camión propio y fletes contratados a
                diario. Creíamos que el problema eran las rutas. Pero vimos de primera mano
                que el verdadero problema era otro: toda la operación dependía del Excel,
                los remitos y la memoria del encargado — y el día que esa persona faltaba,
                aparecía el caos. Construimos Rutia para resolver ese problema: el nuestro
                primero, y ahora el de miles de pymes que trabajan igual.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mono-label mt-8 text-[12px] text-foreground">
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
    <section className="bg-navy pb-24 pt-28 text-white lg:pb-28 lg:pt-36">
      <Shell>
        <Reveal>
          <p className="max-w-5xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-[3.6rem]">
            Ninguna empresa puede optimizar una operación que todavía no{" "}
            <span className="text-accent">controla</span>.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mono-label mt-8 text-[12px] text-white/60">
            Por eso Rutia empieza por lo importante: orden, visibilidad y control. La
            optimización llega después.
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
    <section id="precios" className="scroll-mt-24 border-t border-white/10 bg-navy py-24 text-white lg:py-28">
      <Shell>
        <SectionHead
          index="07"
          tag="Precio de lanzamiento — congelado para los primeros clientes"
          invert
          title={<>Precios simples, sin sorpresas</>}
          desc={<>Sin permanencia. Cancelás cuando quieras. Todos los planes incluyen todos los módulos y acceso desde el celular para los que reparten.</>}
        />
        {/* Una sola tabla tarifaria, no tres tarjetas */}
        <Reveal>
          <div className="mt-14 grid border border-white/25 lg:grid-cols-3">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className={`relative flex flex-col p-8 ${
                  p.featured ? "bg-white text-foreground" : "text-white"
                } ${i > 0 ? "border-t border-white/25 lg:border-l lg:border-t-0" : ""}`}
              >
                {p.featured && (
                  <span className="mono-label absolute right-0 top-0 bg-accent px-3 py-1.5 text-[10px] text-accent-foreground">
                    Más elegido
                  </span>
                )}
                <div className={`mono-label ${p.featured ? "text-muted-foreground" : "text-white/60"}`}>
                  {p.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-mono text-4xl font-semibold tracking-tight">{p.price}</span>
                  <span className={`font-mono text-sm ${p.featured ? "text-muted-foreground" : "text-white/60"}`}>
                    /mes
                  </span>
                </div>
                <div className={`mt-1.5 font-mono text-[13px] ${p.featured ? "text-foreground" : "text-white/80"}`}>
                  {p.limit}
                </div>
                <div className={`my-6 h-px w-full ${p.featured ? "bg-border" : "bg-white/20"}`} />
                <ul className="flex-1 space-y-3.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[14.5px] leading-relaxed">
                      <span className={`mt-[0.5em] h-1.5 w-1.5 flex-none ${p.featured ? "bg-primary" : "bg-accent"}`} />
                      <span className={p.featured ? "text-muted-foreground" : "text-white/85"}>{it}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`mt-8 block py-3 text-center font-semibold transition-colors ${
                    p.featured
                      ? "bg-accent text-accent-foreground hover:bg-foreground hover:text-white"
                      : "border border-white/40 text-white hover:bg-white hover:text-navy"
                  }`}
                >
                  Pedí una demo
                </a>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-8 font-mono text-[13px] text-white/60">
            ¿Más de 2.000 entregas por mes o varias sucursales?{" "}
            <a href="#demo" className="font-semibold text-accent hover:underline">
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
    <section className="border-t border-white/10 bg-navy py-24 text-white lg:py-28">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionTag index="08" invert>FAQ</SectionTag>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 text-3xl font-black uppercase leading-[1.02] sm:text-4xl">
                Preguntas frecuentes
              </h2>
            </Reveal>
          </div>
          <div className="border-b border-white/15 lg:col-span-8">
            {FAQ.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-t border-white/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="mono-label text-white/40">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`text-[16px] font-semibold ${isOpen ? "text-accent" : "text-white"}`}>{q}</span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-none text-white/50 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pl-10 text-[15px] leading-relaxed text-white/60">{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Shell>
    </section>
  );
}

function DemoCta() {
  const [sent, setSent] = useState(false);
  return (
    <section id="demo" className="scroll-mt-24 border-t border-white/10 bg-navy py-24 text-white lg:py-28">
      <Shell className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-white/60">
              <span className="h-1.5 w-1.5 bg-accent" />
              Empezá hoy
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-3xl font-black uppercase leading-[1.02] sm:text-4xl lg:text-[2.9rem]">
              Basta de Excel. Basta de papelitos. Empezá a controlar tu operación.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-white/70">
              Pedí una demo de 20 minutos y te mostramos Rutia funcionando con entregas
              como las tuyas.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="mono-label text-[12px] text-white/60">¿Preferís hablar directo?</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:hola@rutia.app"
                  className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 font-mono text-[15px] text-white transition-colors hover:border-white"
                >
                  hola@rutia.app
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <div className="carbonico rounded-lg [&::before]:border-white/20 [&::before]:bg-transparent">
            <div className="rounded-lg bg-white p-7 text-foreground sm:p-8">
              {sent ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <Stamp>Recibido</Stamp>
                  <h3 className="mt-8 font-display text-2xl font-black uppercase">¡Listo!</h3>
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
                  <h3 className="font-display text-xl font-black uppercase">Pedí tu demo gratis</h3>
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
                    className="mt-2 w-full bg-accent py-3.5 text-base font-bold text-accent-foreground transition-colors hover:bg-foreground"
                  >
                    Quiero mi demo gratis
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-white px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mono-label mb-1.5 block text-[11px] text-foreground">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Shell className="py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Wordmark className="text-[1.4rem]" />
            <p className="mt-4 max-w-sm text-[15px] text-muted-foreground">
              El centro de control de tus entregas. Para empresas que todavía organizan su
              logística con Excel y WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <div className="mono-label text-[11px] text-foreground">Navegación</div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li><a href="#producto" className="hover:text-foreground">Producto</a></li>
                <li><a href="#precios" className="hover:text-foreground">Precios</a></li>
                <li><a href="#nosotros" className="hover:text-foreground">Quiénes somos</a></li>
                <li><a href="#demo" className="hover:text-foreground">Contacto</a></li>
              </ul>
            </div>
            <div>
              <div className="mono-label text-[11px] text-foreground">Contacto</div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li><a href="mailto:hola@rutia.app" className="hover:text-foreground">hola@rutia.app</a></li>
                <li><a href="https://wa.me/5491100000000" className="hover:text-foreground">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <div className="mono-label text-[11px] text-foreground">Seguinos</div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 font-mono text-[13px] text-muted-foreground">
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
