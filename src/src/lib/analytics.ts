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

function fb(event: string, standard = false) {
  if (META_PIXEL_ID && typeof window !== "undefined" && window.fbq) {
    window.fbq(standard ? "track" : "trackCustom", event);
  }
}

/* ---------------- Eventos ---------------- */

export const trackPageView = () => {
  ga("page_view");
  fb("PageView", true);
};

export const trackLead = () => {
  ga("generate_lead");
  fb("Lead", true);
};

export const trackContact = () => {
  ga("contact");
  fb("Contact", true);
};

export const trackFormSubmit = () => {
  ga("form_submit", { form_name: "demo" });
  fb("FormSubmit");
};

export const trackClickWhatsApp = () => {
  ga("click_whatsapp");
  fb("ClickWhatsApp");
};

export const trackClickDemo = () => {
  ga("click_demo");
  fb("ClickDemo");
};
