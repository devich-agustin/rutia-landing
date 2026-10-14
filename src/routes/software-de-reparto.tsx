import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BedDouble,
  Bike,
  Boxes,
  BrainCircuit,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  FileSpreadsheet,
  FileText,
  HardHat,
  History,
  LayoutGrid,
  Lightbulb,
  MessagesSquare,
  PhoneIncoming,
  RefreshCcw,
  RotateCcw,
  ShoppingCart,
  Smartphone,
  Sofa,
  Tv,
  Warehouse,
  Wrench,
} from "lucide-react";
import { Footer, Navbar, Shell } from "@/routes/index";
import { Reveal } from "@/components/Reveal";
import { RouteMap } from "@/components/RouteMotif";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { trackClickDemo } from "@/lib/analytics";

const SITE_URL = "https://rutia.com.ar";
const PAGE_URL = `${SITE_URL}/software-de-reparto`;
const TRIAL_URL = "https://demo.rutia.com.ar/";
const TITLE = "Software de reparto para pymes | Rutia";
const DESCRIPTION =
  "Software de reparto para pymes que entregan lo que venden: pedidos, depósito, vehículos, choferes y fletes en un solo lugar. Probalo 1 mes gratis.";

const PROBLEMS = [
  {
    icon: FileSpreadsheet,
    title: "Pedidos en un Excel que entiende una sola persona",
    text: "Cada vendedor anota a su manera y armar el día depende de quien conoce la planilla.",
  },
  {
    icon: FileText,
    title: "Remitos en papel que se pierden",
    text: "Cuando un cliente reclama, reconstruir qué pasó con su entrega lleva una mañana entera.",
  },
  {
    icon: MessagesSquare,
    title: "Entregas coordinadas por WhatsApp",
    text: "Direcciones, cambios y avisos quedan repartidos entre chats, audios y llamados.",
  },
  {
    icon: BrainCircuit,
    title: "Todo depende de la memoria del encargado",
    text: "Si esa persona falta un día, nadie sabe qué sale, qué está preparado ni con qué vehículo.",
  },
  {
    icon: RotateCcw,
    title: "Reprogramaciones que se olvidan",
    text: "El cliente pidió otra fecha, quedó anotado en algún lado y el pedido se pierde de vista.",
  },
  {
    icon: PhoneIncoming,
    title: "Clientes que llaman preguntando por su pedido",
    text: "Sin un lugar donde mirar el estado de cada entrega, nadie puede responder rápido.",
  },
];

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Pedidos en un solo lugar",
    text: "Cargalos a mano o importalos desde tu Excel con la plantilla de Rutia: cliente, dirección, teléfono, qué se entrega y cuándo.",
  },
  {
    icon: CalendarDays,
    title: "Calendario de entregas",
    text: "Mirá cuántas entregas tenés cada día y detectá las jornadas sobrecargadas antes de que sean un problema.",
  },
  {
    icon: LayoutGrid,
    title: "Armado del día",
    text: "Arrastrá cada entrega a tu camión, camioneta, moto o flete. En minutos todos saben qué sale, con quién y en qué orden.",
  },
  {
    icon: Warehouse,
    title: "Depósito y preparación",
    text: "El depósito ve qué preparar y marca cada pedido como listo. Nada sale a la calle sin preparar.",
  },
  {
    icon: Smartphone,
    title: "Entrega desde el celular, sin app",
    text: "Chofer propio, cadete o flete abre sus entregas en el celular que ya tiene y marca entregada, parcial o fallida.",
  },
  {
    icon: RefreshCcw,
    title: "Incidencias y reprogramaciones",
    text: "Cliente ausente o dirección incorrecta: queda registrado con su motivo y la nueva fecha se agenda al momento.",
  },
  {
    icon: History,
    title: "Historial de cada entrega",
    text: "Quién la cargó, la preparó y la llevó, qué pasó y cuándo. Si un cliente reclama, la respuesta está a un clic.",
  },
];

const STEPS = [
  {
    title: "Cargás tus pedidos",
    text: "A mano en un minuto o importando tu Excel con nuestra plantilla.",
  },
  {
    title: "Preparás y armás el día",
    text: "El depósito marca qué está listo y asignás cada entrega a un vehículo propio o a un flete.",
  },
  {
    title: "Entregás con control",
    text: "Quien reparte marca cada entrega desde su celular y vos lo ves en vivo en el tablero.",
  },
  {
    title: "Mirás qué pasó",
    text: "Entregadas, fallidas y reprogramadas, con su motivo, para decidir mejor al día siguiente.",
  },
];

const RUBROS = [
  {
    icon: Sofa,
    name: "Mueblerías",
    href: "/logistica-para-mueblerias",
    label: "Software de reparto para mueblerías",
  },
  {
    icon: BedDouble,
    name: "Colchonerías",
    href: "/logistica-para-colchonerias",
    label: "Software de reparto para colchonerías",
  },
  {
    icon: Tv,
    name: "Electrodomésticos",
    href: "/logistica-para-electrodomesticos",
    label: "Software de reparto para casas de electrodomésticos",
  },
  {
    icon: Wrench,
    name: "Ferreterías",
    href: "/logistica-para-ferreterias",
    label: "Software de reparto para ferreterías",
  },
  {
    icon: HardHat,
    name: "Corralones y sanitarios",
    href: "/logistica-para-corralones",
    label: "Software de reparto para corralones",
  },
  {
    icon: Building2,
    name: "Casas de materiales",
    href: "/logistica-para-casas-de-materiales",
    label: "Software de reparto para casas de materiales",
  },
  {
    icon: Boxes,
    name: "Distribuidoras",
    href: "/logistica-para-distribuidoras",
    label: "Software de reparto para distribuidoras",
  },
  {
    icon: Bike,
    name: "Bicicleterías y deportes",
    href: "/logistica-para-bicicleterias",
    label: "Software de reparto para bicicleterías",
  },
  {
    icon: Lightbulb,
    name: "Iluminación",
    href: "/logistica-para-iluminacion",
    label: "Software de reparto para casas de iluminación",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce con reparto propio",
    href: "/logistica-para-ecommerce",
    label: "Software de reparto para e-commerce",
  },
];

const PLAN_ITEMS = [
  "Todas las funciones de Rutia incluidas",
  "Pedidos, depósito, armado del día e incidencias",
  "Entrega desde el celular e historial completo",
  "Reportes, indicadores y varios depósitos",
];

const PLANS = [
  {
    name: "Inicial",
    limit: "Hasta 150 entregas por mes",
    support: "Soporte por WhatsApp",
    featured: false,
  },
  {
    name: "PyME",
    limit: "Hasta 600 entregas por mes",
    support: "Soporte por WhatsApp",
    featured: true,
  },
  {
    name: "Empresa",
    limit: "Hasta 2.000 entregas por mes",
    support: "Soporte prioritario por WhatsApp",
    featured: false,
  },
];

const FAQ: Array<[string, string]> = [
  [
    "¿Qué es un software de reparto?",
    "Es un sistema que reúne en un solo lugar todo lo que pasa entre que vendés y entregás: los pedidos pendientes, la preparación en depósito, qué vehículo o flete lleva cada entrega y qué pasó en cada visita. Reemplaza el Excel, los remitos en papel y la coordinación por WhatsApp.",
  ],
  [
    "¿Rutia sirve para una pyme chica?",
    "Sí. Está pensada para empresas que entregan lo que venden y hoy coordinan con planillas y mensajes. Si hacés más de 20 entregas por mes, probablemente ya le saques provecho.",
  ],
  [
    "¿Los choferes tienen que instalar una aplicación?",
    "No. Choferes propios, cadetes o fletes abren sus entregas desde el celular que ya tienen, en el navegador, y marcan el resultado con un toque.",
  ],
  [
    "¿Funciona si trabajo con fletes contratados?",
    "Sí. Podés asignar entregas a vehículos propios, a fletes contratados o combinar ambos según el día.",
  ],
  [
    "¿Necesito GPS o rastreo satelital?",
    "No. Rutia te muestra el estado de cada entrega a medida que quien reparte la marca desde su celular, sin instalar equipos en los vehículos.",
  ],
  [
    "¿Puedo importar los pedidos que hoy tengo en Excel?",
    "Sí. Te damos una plantilla simple: la completás o pegás tus datos y los pedidos se cargan solos.",
  ],
  [
    "¿Reemplaza mi sistema de facturación o de stock?",
    "No. Rutia se ocupa de las entregas y convive con lo que ya usás para vender, facturar y controlar stock.",
  ],
  [
    "¿Cuánto cuesta Rutia?",
    "El precio depende de cuántas entregas hacés por mes: hay planes hasta 150, 600 y 2.000 entregas mensuales, todos con todas las funciones y sin permanencia. Podés probarlo 1 mes gratis y consultarnos el precio de tu plan.",
  ],
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "es-AR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Software de reparto",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQ.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const Route = createFileRoute("/software-de-reparto")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/og-rutia-control-v2.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-rutia-control-v2.jpg` },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: SoftwareDeRepartoPage,
});

function TrialButton({ children }: { children: ReactNode }) {
  return (
    <a
      href={TRIAL_URL}
      onClick={trackClickDemo}
      className="button-primary inline-flex min-h-13 items-center justify-center gap-2 px-6 text-base font-bold text-white"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SoftwareDeRepartoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
          <RouteMap className="absolute inset-y-0 right-[-18rem] h-full w-[900px] text-cyan opacity-[0.09] lg:right-[-5rem]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(36,93,255,.22),transparent_32%)]"
          />
          <Shell className="relative">
            <nav
              aria-label="Migas de pan"
              className="mb-8 flex items-center gap-2 text-sm text-white/55"
            >
              <a href="/" className="transition-colors hover:text-white">
                Inicio
              </a>
              <ChevronRight className="h-4 w-4" />
              <span aria-current="page">Software de reparto</span>
            </nav>
            <div className="max-w-4xl">
              <span className="section-label section-label-dark">
                Software de reparto para pymes
              </span>
              <h1 className="mt-6 max-w-4xl text-[2.7rem] font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-[4.8rem]">
                Software de reparto para pymes que entregan lo que venden
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[#B9C5D5] sm:text-lg">
                Rutia reúne pedidos, depósito, vehículos, choferes y fletes en
                un solo lugar. Dejás atrás el Excel, los remitos en papel y la
                coordinación por WhatsApp, y todos saben qué sale, quién lo
                lleva y qué pasó con cada entrega.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <TrialButton>Probá Rutia 1 mes gratis</TrialButton>
                <a
                  href="/#demo"
                  onClick={trackClickDemo}
                  className="button-ghost inline-flex min-h-13 items-center justify-center px-6 font-semibold text-white"
                >
                  Pedir una demo
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                {[
                  "Sin instalación",
                  "Choferes sin app",
                  "Sin permanencia",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[cyan]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Shell>
        </section>

        {/* Problema */}
        <section className="bg-background py-20 lg:py-28">
          <Shell>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-label">El problema cotidiano</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Cuando el reparto depende de una planilla y de una persona
                </h2>
                <p className="mt-5 text-[17px] text-muted-foreground">
                  Excel, papelitos y WhatsApp alcanzan al principio. Cuando las
                  ventas crecen, la información queda repartida por todos lados
                  y cada día se arma a los llamados.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((item, index) => (
                <Reveal key={item.title} delay={index * 55}>
                  <article className="block-card block-card-hover h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Shell>
        </section>

        {/* Funciones */}
        <section className="bg-surface py-20 lg:py-28">
          <Shell>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-label">Qué hace Rutia</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Todo tu reparto, del pedido a la entrega
                </h2>
                <p className="mt-5 text-[17px] text-muted-foreground">
                  Rutia no reemplaza tu sistema de facturación ni tu stock.
                  Ordena la operación de entregas y deja un historial claro
                  para que todo el equipo trabaje con la misma información.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((item, index) => (
                <Reveal key={item.title} delay={index * 55}>
                  <article className="block-card block-card-hover h-full p-6">
                    <item.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Shell>
        </section>

        {/* Cómo funciona */}
        <section
          id="como-funciona"
          className="scroll-mt-24 bg-ink py-20 text-white lg:py-28"
        >
          <Shell>
            <Reveal>
              <div className="max-w-3xl">
                <span className="section-label section-label-dark">
                  Cómo funciona
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Cuatro pasos, sin instalar nada
                </h2>
                <p className="mt-5 text-[#9CA9C0]">
                  La mayoría arma su primer día de entregas en menos de una
                  hora. Si sabés usar WhatsApp, sabés usar Rutia.
                </p>
              </div>
            </Reveal>
            <ol className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, index) => (
                <Reveal key={step.title} delay={index * 55} as="li">
                  <div className="ink-card h-full p-5">
                    <span className="font-mono text-xs font-bold text-[cyan]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#9CA9C0]">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Shell>
        </section>

        {/* Rubros */}
        <section className="bg-background py-20 lg:py-28">
          <Shell>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-label">Para quién</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Un software de reparto adaptado a tu rubro
                </h2>
                <p className="mt-5 text-[17px] text-muted-foreground">
                  No importa qué vendés ni con qué repartís: camión propio,
                  camioneta, moto o fletes contratados. Mirá cómo se organiza
                  Rutia en tu tipo de negocio.
                </p>
              </div>
            </Reveal>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {RUBROS.map((rubro, index) => (
                <Reveal key={rubro.href} delay={index * 40} as="li">
                  <a
                    href={rubro.href}
                    aria-label={rubro.label}
                    className="block-card block-card-hover group flex h-full items-center gap-4 p-5"
                  >
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-primary/10 text-primary">
                      <rubro.icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-bold">{rubro.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                </Reveal>
              ))}
            </ul>
          </Shell>
        </section>

        {/* Planes */}
        <section className="bg-surface py-20 lg:py-28">
          <Shell>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-label">Planes</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Un plan según cuántas entregas hacés
                </h2>
                <p className="mt-5 text-[17px] text-muted-foreground">
                  Todos los planes incluyen todas las funciones. Sin
                  permanencia: cancelás cuando quieras. Empezá con 1 mes gratis
                  y consultanos el precio de tu plan.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
              {PLANS.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 80}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl p-8 text-center ${
                      plan.featured
                        ? "bg-ink-2 text-white ring-2 ring-primary/70 shadow-[0_30px_70px_-20px_rgba(47,107,255,.45)]"
                        : "block-card"
                    }`}
                  >
                    {plan.featured && (
                      <span className="bg-brand absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white shadow-lg shadow-primary/40">
                        Más elegido
                      </span>
                    )}
                    <h3
                      className={`text-sm font-semibold ${plan.featured ? "text-[cyan]" : "text-muted-foreground"}`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-3 text-2xl font-extrabold tracking-tight ${plan.featured ? "text-[cyan]" : "text-primary"}`}
                    >
                      Consultar precio
                    </p>
                    <p
                      className={`mt-1.5 text-[13.5px] font-medium ${plan.featured ? "text-white/80" : "text-foreground"}`}
                    >
                      {plan.limit}
                    </p>
                    <div
                      className={`my-6 h-px w-full ${plan.featured ? "bg-white/15" : "bg-border"}`}
                    />
                    <ul className="mx-auto flex-1 space-y-3 text-left">
                      {[...PLAN_ITEMS, plan.support].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[14px] leading-relaxed"
                        >
                          <CircleCheck
                            className={`mt-0.5 h-4 w-4 flex-none ${plan.featured ? "text-[cyan]" : "text-success"}`}
                          />
                          <span
                            className={
                              plan.featured
                                ? "text-white/85"
                                : "text-muted-foreground"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={TRIAL_URL}
                      onClick={trackClickDemo}
                      className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold transition-all duration-200 active:scale-[0.98] ${
                        plan.featured
                          ? "bg-brand text-white hover:brightness-110"
                          : "plan-cta shadow-[var(--shadow-card)] hover:-translate-y-0.5"
                      }`}
                    >
                      Probar 1 mes gratis
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-12 text-center text-[14.5px] text-muted-foreground">
              ¿Más de 2.000 entregas por mes o varias sucursales?{" "}
              <a
                href="/#demo"
                className="font-semibold text-primary hover:underline"
              >
                Escribinos y armamos un plan a medida.
              </a>
            </p>
          </Shell>
        </section>

        {/* Preguntas frecuentes */}
        <section className="bg-background py-20 lg:py-28">
          <Shell className="max-w-4xl">
            <Reveal>
              <div className="text-center">
                <span className="section-label">Preguntas frecuentes</span>
                <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
                  Sobre el software de reparto de Rutia
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 space-y-3">
              {FAQ.map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-border bg-white px-6 py-5"
                >
                  <summary className="cursor-pointer list-none pr-8 font-bold marker:hidden">
                    {question}
                  </summary>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </Shell>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden bg-ink py-20 text-center text-white lg:py-28">
          <RouteMap className="absolute inset-0 h-full w-full text-cyan opacity-[0.06]" />
          <Shell className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Basta de Excel y papelitos. Ordená tu reparto desde mañana.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[#9CA9C0]">
              Probá Rutia con tus entregas reales durante un mes, sin costo. Si
              preferís, te lo mostramos funcionando con un flujo parecido al
              tuyo.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrialButton>Empezar 1 mes gratis</TrialButton>
              <a
                href="/#demo"
                onClick={trackClickDemo}
                className="button-ghost inline-flex min-h-13 items-center justify-center px-6 font-semibold text-white"
              >
                Pedir una demo
              </a>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/55">
              <Check className="h-4 w-4 text-[cyan]" /> Sin costo y sin
              permanencia
            </p>
          </Shell>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
