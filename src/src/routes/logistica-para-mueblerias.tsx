import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  ClipboardList,
  History,
  PackageCheck,
  RefreshCcw,
  Smartphone,
  Truck,
  UserRoundX,
  Warehouse,
} from "lucide-react";
import {
  VerticalLanding,
  type VerticalLandingConfig,
} from "@/components/VerticalLanding";

const SITE_URL = "https://rutia.com.ar";
const PAGE_URL = `${SITE_URL}/logistica-para-mueblerias`;
const TITLE = "Software de logística para mueblerías | Rutia";
const DESCRIPTION =
  "Organizá pedidos, preparación, choferes, vehículos y entregas de tu mueblería en un solo lugar. Conocé cómo Rutia simplifica tu reparto.";

const config: VerticalLandingConfig = {
  eyebrow: "Rutia para mueblerías",
  title: "Software de logística para mueblerías",
  intro:
    "Organizá los pedidos pendientes, la preparación en depósito, el armado del día y cada resultado de entrega desde un solo lugar. Con vehículos propios, fletes contratados o ambos.",
  problems: [
    {
      icon: ClipboardList,
      title: "Pedidos repartidos en varias planillas",
      text: "Ventas anota una fecha, depósito maneja otra información y reparto termina confirmando todo por teléfono.",
    },
    {
      icon: Warehouse,
      title: "Muebles que salen sin estar preparados",
      text: "Si depósito no sabe qué se entrega mañana, la carga se demora y el recorrido empieza tarde.",
    },
    {
      icon: CalendarDays,
      title: "Fechas que cambian todo el tiempo",
      text: "El cliente pide mover la entrega y el cambio queda en un chat, un papel o la memoria de alguien.",
    },
    {
      icon: Truck,
      title: "Vehículos y fletes difíciles de coordinar",
      text: "Cada día hay que decidir qué entrega lleva el camión propio y cuál se asigna a un flete contratado.",
    },
    {
      icon: UserRoundX,
      title: "Clientes ausentes y entregas fallidas",
      text: "Cuando nadie recibe, necesitás registrar qué ocurrió y reprogramar sin perder el pedido de vista.",
    },
    {
      icon: History,
      title: "Reclamos sin una respuesta clara",
      text: "Si preguntan por una entrega anterior, cuesta reconstruir quién la llevó, cuándo salió y cuál fue el resultado.",
    },
  ],
  flow: [
    { title: "Pedido", text: "Cargás o importás lo pendiente de entrega." },
    {
      title: "Preparación",
      text: "Depósito ve qué muebles tiene que dejar listos.",
    },
    {
      title: "Armado del día",
      text: "Ordenás las entregas previstas para cada jornada.",
    },
    {
      title: "Chofer y vehículo",
      text: "Asignás camión, camioneta, moto o flete contratado.",
    },
    {
      title: "Entrega",
      text: "Quien reparte ve el trabajo desde su celular, sin instalar una app.",
    },
    {
      title: "Resultado",
      text: "Queda registrada la entrega, incidencia o reprogramación.",
    },
  ],
  benefits: [
    {
      title: "Menos dependencia de una sola persona",
      text: "La operación queda visible y no atada a quien conoce la planilla o recuerda cada cambio.",
    },
    {
      title: "Depósito prepara con anticipación",
      text: "El equipo sabe qué pedidos deben estar listos antes de que llegue el momento de cargar.",
    },
    {
      title: "Cambios y reprogramaciones bajo control",
      text: "Cada modificación queda registrada para que ventas, depósito y reparto trabajen con la misma fecha.",
    },
    {
      title: "Respuestas rápidas ante un reclamo",
      text: "Consultás el historial y ves qué ocurrió con la entrega sin reconstruir conversaciones viejas.",
    },
  ],
  features: [
    {
      icon: ClipboardList,
      title: "Carga e importación de pedidos",
      text: "Ingresá pedidos a mano o importalos desde Excel con la plantilla de Rutia.",
    },
    {
      icon: CalendarDays,
      title: "Calendario de entregas",
      text: "Visualizá lo programado para cada día y detectá jornadas sobrecargadas.",
    },
    {
      icon: PackageCheck,
      title: "Preparación en depósito",
      text: "Marcá qué pedidos están listos antes de asignarlos a una salida.",
    },
    {
      icon: Truck,
      title: "Asignación de vehículos y fletes",
      text: "Armá el día con recursos propios, contratados o una combinación de ambos.",
    },
    {
      icon: Smartphone,
      title: "Entrega desde el celular",
      text: "El repartidor recibe sus entregas y registra el resultado sin descargar una aplicación.",
    },
    {
      icon: RefreshCcw,
      title: "Incidencias e historial",
      text: "Registrá ausencias, entregas parciales o fallidas y conservá el historial de cada pedido.",
    },
  ],
  faq: [
    [
      "¿Rutia reemplaza el sistema de facturación o stock de la mueblería?",
      "No. Rutia se ocupa de organizar la operación de entregas y convive con el sistema que ya usás para vender, facturar o controlar stock.",
    ],
    [
      "¿Puedo trabajar con camiones propios y fletes contratados?",
      "Sí. Podés asignar entregas a vehículos propios, a fletes o combinar ambos según el día.",
    ],
    [
      "¿El chofer necesita instalar una aplicación?",
      "No. Abre sus entregas desde el celular que ya tiene y registra el resultado desde el navegador.",
    ],
    [
      "¿Puedo importar los pedidos que hoy tengo en Excel?",
      "Sí. Rutia incluye una plantilla simple para importar pedidos y empezar sin volver a cargarlos uno por uno.",
    ],
    [
      "¿Qué pasa si el cliente está ausente o pide cambiar la fecha?",
      "Podés registrar la incidencia, dejar asentado el motivo y reprogramar la entrega para otra fecha.",
    ],
    [
      "¿Sirve para una mueblería con pocas entregas?",
      "Rutia está pensada para empresas que necesitan dejar atrás la coordinación dispersa. Si realizás más de 20 entregas mensuales, probablemente ya puedas aprovecharla.",
    ],
  ],
};

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
          name: "Logística para mueblerías",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: config.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const Route = createFileRoute("/logistica-para-mueblerias")({
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
  component: MuebleriasPage,
});

function MuebleriasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <VerticalLanding config={config} />
    </>
  );
}
