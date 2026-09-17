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
const PAGE_URL = `${SITE_URL}/logistica-para-colchonerias`;
const TITLE = "Software de logística para colchonerías | Rutia";
const DESCRIPTION =
  "Organizá pedidos, preparación, choferes, vehículos y entregas de tu colchonería en un solo lugar. Conocé cómo Rutia simplifica tu reparto.";

const config: VerticalLandingConfig = {
  breadcrumb: "Colchonerías",
  eyebrow: "Rutia para colchonerías",
  title: "Software de logística para colchonerías",
  intro:
    "Organizá colchones y sommiers pendientes, la preparación, el armado del día y cada resultado de entrega desde un solo lugar. Con vehículos propios, fletes contratados o ambos.",
  problemTitle:
    "Entregar colchones y sommiers exige coordinar mucho más que una dirección",
  problemIntro:
    "Ventas acuerda una fecha, el depósito prepara productos voluminosos y reparto necesita saber qué sale, con quién y qué ocurrió al llegar.",
  coordinationTitle: "Una sola vista para ventas, depósito y reparto",
  coordinationIntro:
    "Rutia no reemplaza tu sistema de facturación ni el control de stock. Ordena la operación de entregas para que ventas, depósito y reparto trabajen con la misma información.",
  featuresTitle: "Funciones útiles para el reparto de una colchonería",
  finalTitle:
    "Tu colchonería puede crecer sin sumar más Excel, papeles y mensajes sueltos",
  finalText:
    "Mostranos cómo organizás hoy tus entregas y te enseñamos Rutia con un flujo parecido al tuyo.",
  problems: [
    {
      icon: ClipboardList,
      title: "Pedidos y fechas en distintos lugares",
      text: "La fecha prometida puede quedar en una planilla, un chat o el sistema de ventas, mientras depósito y reparto reciben otra versión.",
    },
    {
      icon: Warehouse,
      title: "Productos voluminosos sin preparar",
      text: "Colchones, bases y sommiers necesitan estar identificados y listos antes de que llegue el vehículo para cargar.",
    },
    {
      icon: CalendarDays,
      title: "Muchas entregas coordinadas para el mismo día",
      text: "Cuando se acumulan franjas y compromisos, cuesta ver si la jornada es realmente posible con los recursos disponibles.",
    },
    {
      icon: Truck,
      title: "Vehículos propios y fletes difíciles de combinar",
      text: "Cada salida exige decidir qué pedidos lleva la flota propia y cuáles conviene asignar a un transportista contratado.",
    },
    {
      icon: UserRoundX,
      title: "Clientes ausentes o cambios de fecha",
      text: "Una reprogramación puede alterar el armado del día y dejar el pedido perdido entre mensajes si no queda registrada.",
    },
    {
      icon: History,
      title: "Poca claridad sobre lo que ya ocurrió",
      text: "Ante un reclamo, necesitás distinguir rápido qué está pendiente, qué salió y cuál fue el resultado de la entrega.",
    },
  ],
  flow: [
    { title: "Pedido", text: "Cargás o importás lo pendiente de entrega." },
    {
      title: "Preparación",
      text: "Depósito ve qué colchones y complementos debe dejar listos.",
    },
    {
      title: "Armado del día",
      text: "Ordenás las entregas previstas para cada jornada.",
    },
    {
      title: "Chofer y vehículo",
      text: "Asignás camión, camioneta o flete contratado.",
    },
    {
      title: "Entrega",
      text: "Quien reparte consulta su trabajo desde el celular, sin instalar una app.",
    },
    {
      title: "Resultado",
      text: "Queda registrada la entrega, incidencia o reprogramación.",
    },
  ],
  benefits: [
    {
      title: "Promesas de entrega más claras",
      text: "Ventas puede consultar lo programado y evitar comprometer fechas sin conocer la carga real de la operación.",
    },
    {
      title: "Depósito prepara con anticipación",
      text: "El equipo sabe qué colchones, bases y accesorios deben estar identificados y listos para cada salida.",
    },
    {
      title: "Flota y fletes mejor coordinados",
      text: "Asignás cada pedido al recurso adecuado y todos ven la organización del día en un mismo lugar.",
    },
    {
      title: "Reprogramaciones con historial",
      text: "Los cambios de fecha y las visitas fallidas quedan asociados al pedido para retomarlo sin perder información.",
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
      text: "Visualizá lo programado para cada día y detectá jornadas con demasiados compromisos.",
    },
    {
      icon: PackageCheck,
      title: "Preparación en depósito",
      text: "Marcá qué colchones, sommiers y complementos están listos antes de asignarlos a una salida.",
    },
    {
      icon: Truck,
      title: "Asignación de vehículos y fletes",
      text: "Armá el día con recursos propios, contratados o una combinación de ambos.",
    },
    {
      icon: Smartphone,
      title: "Entrega desde el celular",
      text: "El repartidor recibe sus entregas y registra el resultado desde el navegador, sin descargar una aplicación.",
    },
    {
      icon: RefreshCcw,
      title: "Incidencias e historial",
      text: "Registrá ausencias, entregas parciales o fallidas y conservá el historial de cada pedido.",
    },
  ],
  faq: [
    [
      "¿Rutia reemplaza el sistema de facturación o stock de la colchonería?",
      "No. Rutia organiza la operación de entregas y convive con el sistema que ya usás para vender, facturar o controlar stock.",
    ],
    [
      "¿Puedo trabajar con vehículos propios y fletes contratados?",
      "Sí. Podés asignar entregas a vehículos propios, a fletes o combinar ambos según la necesidad de cada jornada.",
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
      "Podés registrar la incidencia, dejar asentado el motivo y reprogramar la entrega sin perder el historial del pedido.",
    ],
    [
      "¿Sirve para una colchonería con pocas entregas?",
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
          name: "Logística para colchonerías",
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

export const Route = createFileRoute("/logistica-para-colchonerias")({
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
  component: ColchoneriasPage,
});

function ColchoneriasPage() {
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
