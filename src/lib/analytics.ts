/**
 * Analytics de Rutia — GA4 + Meta Pixel.
 *
 * IMPORTANTE: completar los IDs cuando existan. Con los IDs vacíos,
 * no se carga ningún script y los eventos no hacen nada (sin errores).
 *
 * GA4: crear propiedad en analytics.google.com → Measurement ID ("G-XXXXXXX")
 * Meta Pixel: crear en business.facebook.com → Events Manager → Pixel ID numérico
 */
export const GA_MEASUREMENT_ID = "G-LQR8X8TK2G";
export const META_PIXEL_ID = "1324421986512653";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

let initialized = false;

/** Cargar GA4 y Meta Pixel si hay IDs configurados. Llamar una vez en el cliente. */
export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  if (GA_MEASUREMENT_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      // DebugView de GA4 solo en desarrollo; en producción no se envía el flag
      ...(import.meta.env.DEV ? { debug_mode: true } : {}),
    }); // dispara page_view automáticamente
  }

  if (META_PIXEL_ID) {
    /* eslint-disable */
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = true; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq!("init", META_PIXEL_ID);
    window.fbq!("track", "PageView");
  }
}

function ga(event: string, params?: Record<string, unknown>) {
  if (GA_MEASUREMENT_ID && typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params ?? {});
  }
}

function fb(
  event: string,
  standard = false,
  params?: Record<string, unknown>,
) {
  if (META_PIXEL_ID && typeof window !== "undefined" && window.fbq) {
    window.fbq(standard ? "track" : "trackCustom", event, params ?? {});
  }
}

/**
 * Evita contar dos veces el mismo evento si un mismo clic dispara más de un
 * listener (por ejemplo, un botón dentro de otro elemento rastreado).
 */
const lastFired = new Map<string, number>();
function once(key: string, windowMs = 800) {
  const now = Date.now();
  const prev = lastFired.get(key) ?? 0;
  lastFired.set(key, now);
  return now - prev > windowMs;
}

/* ---------------- Eventos ----------------
 * Nombres de GA4 (marcar como "evento clave" en GA4 los de conversión):
 *   generate_lead   → formulario de demo enviado con éxito (conversión principal)
 *   click_trial     → clic hacia la prueba gratuita (demo.rutia.com.ar)
 *   click_whatsapp  → clic a WhatsApp
 *   click_calendly  → clic para agendar en Calendly
 *   click_demo      → clic a un botón que lleva al formulario de demo
 *   contact         → clic al correo de contacto
 *
 * Meta Pixel: Lead (formulario), Contact (WhatsApp y correo) y eventos
 * personalizados ClickTrial, ClickCalendly y ClickDemo.
 *
 * Todos son no-op hasta que la persona acepta cookies (initAnalytics).
 */

export const trackLead = (formName = "demo") => {
  if (!once(`lead:${formName}`, 3000)) return;
  ga("generate_lead", { form_name: formName });
  fb("Lead", true, { content_name: formName });
};

export const trackContact = () => {
  if (!once("contact")) return;
  ga("contact", { method: "email" });
  fb("Contact", true, { content_name: "email" });
};

export const trackClickWhatsApp = (location = "") => {
  if (!once("whatsapp")) return;
  ga("click_whatsapp", { link_location: location });
  fb("Contact", true, { content_name: "whatsapp" });
};

export const trackClickDemo = (location = "") => {
  if (!once("demo")) return;
  ga("click_demo", { link_location: location });
  fb("ClickDemo");
};

export const trackClickTrial = (location = "") => {
  if (!once("trial")) return;
  ga("click_trial", { link_location: location });
  fb("ClickTrial");
};

export const trackClickCalendly = (location = "") => {
  if (!once("calendly")) return;
  ga("click_calendly", { link_location: location });
  fb("ClickCalendly");
};

/**
 * PageView de Meta en navegaciones internas (sin recarga). GA4 ya las mide
 * con la medición mejorada ("Cambios de página según el historial del
 * navegador"), por eso acá no se envía page_view a GA4 para no duplicar.
 */
export const trackMetaPageView = () => {
  fb("PageView", true);
};
