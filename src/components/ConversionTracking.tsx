import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { captureAttribution, withAttribution } from "@/lib/attribution";
import {
  trackClickCalendly,
  trackClickDemo,
  trackClickTrial,
  trackClickWhatsApp,
  trackContact,
  trackMetaPageView,
} from "@/lib/analytics";

/**
 * Medición centralizada de clics de conversión para todo el sitio.
 *
 * En lugar de un onClick en cada botón (fácil de olvidar y de duplicar), un
 * único listener detecta por destino del enlace:
 *   - wa.me / api.whatsapp.com  → click_whatsapp
 *   - demo.rutia.com.ar         → click_trial  (+ agrega UTM/gclid/fbclid)
 *   - calendly.com              → click_calendly (+ agrega UTM)
 *   - mailto:                   → contact
 *   - …#demo                    → click_demo
 * Cubre también los enlaces escritos dentro de las notas del blog.
 *
 * Los eventos no se envían hasta que la persona acepta cookies: las funciones
 * de analytics no hacen nada mientras GA4/Pixel no estén cargados.
 */
function locationOf(a: HTMLAnchorElement) {
  const explicit = a.dataset.ctaLocation;
  if (explicit) return explicit;
  const section = a.closest("section[id], header, footer, nav, article");
  const id = section?.id || section?.tagName.toLowerCase() || "";
  return `${window.location.pathname}${id ? `#${id}` : ""}`;
}

export function ConversionTracking() {
  const router = useRouter();

  useEffect(() => {
    captureAttribution();

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const where = locationOf(a);

      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
        trackClickWhatsApp(where);
      } else if (/^https?:\/\/demo\.rutia\.com\.ar/i.test(href)) {
        a.href = withAttribution(a.href);
        trackClickTrial(where);
      } else if (/^https?:\/\/(www\.)?calendly\.com\//i.test(href)) {
        a.href = withAttribution(a.href);
        trackClickCalendly(where);
      } else if (href.startsWith("mailto:")) {
        trackContact();
      } else if (/#demo$/.test(href)) {
        trackClickDemo(where);
      }
    };

    // Fase de captura: corre antes de la navegación y de otros handlers.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    // PageView de Meta en navegaciones internas (la primera carga ya la envía
    // el Pixel al inicializarse).
    return router.subscribe("onResolved", (evt) => {
      if (evt.fromLocation && evt.pathChanged) {
        captureAttribution();
        trackMetaPageView();
      }
    });
  }, [router]);

  return null;
}
