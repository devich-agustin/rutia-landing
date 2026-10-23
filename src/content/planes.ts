/**
 * Planes y precios de Rutia: fuente única para la home, /software-de-reparto,
 * las preguntas frecuentes y los datos estructurados.
 *
 * Para cambiar un precio, cambialo SOLO acá (y en public/llms.txt, que es un
 * archivo estático). No agregar descuentos, impuestos ni condiciones que no
 * estén confirmados comercialmente.
 */
export type Plan = {
  id: "inicial" | "pyme" | "empresa";
  name: string;
  /** Precio mensual en pesos argentinos, como número (para datos estructurados). */
  price: number;
  /** Máximo de entregas mensuales incluidas (no es un mínimo para contratar). */
  maxDeliveries: number;
  support: string;
  featured: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "inicial",
    name: "Inicial",
    price: 45000,
    maxDeliveries: 150,
    support: "Soporte por WhatsApp",
    featured: false,
  },
  {
    id: "pyme",
    name: "PyME",
    price: 79000,
    maxDeliveries: 600,
    support: "Soporte por WhatsApp",
    featured: true,
  },
  {
    id: "empresa",
    name: "Empresa",
    price: 145000,
    maxDeliveries: 2000,
    support: "Soporte prioritario por WhatsApp",
    featured: false,
  },
];

const ars = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });

/** "$45.000" */
export function formatPrice(price: number) {
  return `$${ars.format(price)}`;
}

/** "Incluye hasta 150 entregas por mes" */
export function planLimit(plan: Plan) {
  return `Incluye hasta ${ars.format(plan.maxDeliveries)} entregas por mes`;
}

export const PRICE_NOTE =
  "Precios mensuales en pesos argentinos. Cada plan indica el máximo de entregas incluidas por mes: no hay un mínimo para contratar.";

export const CUSTOM_PLAN_TEXT =
  "¿Más de 2.000 entregas por mes o varias sucursales?";

export const PRICING_FAQ_ANSWER = `Rutia tiene tres planes mensuales: ${PLANS.map(
  (p) =>
    `${p.name} por ${formatPrice(p.price)}, con hasta ${ars.format(p.maxDeliveries)} entregas`,
)
  .join("; ")
  .replace(
    /; ([^;]*)$/,
    "; y $1",
  )}. Si superás ese volumen, podemos preparar una propuesta personalizada.`;

/** Ofertas para el SoftwareApplication (schema.org), iguales a lo publicado. */
export function planOffers(siteUrl: string) {
  return PLANS.map((p) => ({
    "@type": "Offer",
    name: `Plan ${p.name}`,
    description: `Hasta ${ars.format(p.maxDeliveries)} entregas por mes. Todas las funciones incluidas.`,
    price: String(p.price),
    priceCurrency: "ARS",
    url: `${siteUrl}/#precios`,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(p.price),
      priceCurrency: "ARS",
      unitCode: "MON",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: 1,
        unitCode: "MON",
      },
    },
  }));
}
