import { useEffect, useState } from "react";
import { initAnalytics } from "@/lib/analytics";

/**
 * Banner de consentimiento de cookies de Rutia.
 *
 * Qué hace (y por qué cumple):
 *  - NO carga Google Analytics ni Meta Pixel hasta que el visitante acepta.
 *  - Si el visitante rechaza, no se carga nada de analítica/marketing.
 *  - Recuerda la elección para no volver a mostrar el banner en cada visita.
 *  - Permite reabrir el banner (revocar/cambiar el consentimiento) desde
 *    cualquier parte del sitio disparando el evento:
 *        window.dispatchEvent(new Event("rutia:open-cookie-preferences"))
 *    (por ejemplo, desde un link "Configurar cookies" en el footer).
 *
 * IMPORTANTE: para que esto tenga validez, initAnalytics() SOLO debe llamarse
 * desde acá. En __root.tsx hay que quitar la llamada directa a initAnalytics().
 */

const STORAGE_KEY = "rutia_cookie_consent"; // valores: "accepted" | "rejected"

type Consent = "accepted" | "rejected" | null;

function readConsent(): Consent {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(value: "accepted" | "rejected") {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* si localStorage no está disponible, seguimos sin persistir */
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = readConsent();

    if (consent === "accepted") {
      // Ya había aceptado antes: cargamos analítica sin mostrar el banner.
      initAnalytics();
    } else if (consent === null) {
      // Todavía no eligió: mostramos el banner. (si "rejected", queda oculto)
      setVisible(true);
    }

    // Permite reabrir el banner para cambiar la elección más adelante.
    const reopen = () => setVisible(true);
    window.addEventListener("rutia:open-cookie-preferences", reopen);
    return () =>
      window.removeEventListener("rutia:open-cookie-preferences", reopen);
  }, []);

  function accept() {
    writeConsent("accepted");
    setVisible(false);
    initAnalytics();
  }

  function reject() {
    writeConsent("rejected");
    setVisible(false);
    // Si en esta misma sesión ya se había cargado GA4/Pixel (caso: aceptó,
    // reabrió preferencias y ahora rechaza), recargamos para que no queden
    // corriendo. En una primera visita que rechaza, esto no se ejecuta.
    if (typeof window !== "undefined" && window.gtag) {
      window.location.reload();
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-ink/95 p-5 text-white shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-[14px] leading-relaxed text-[#C7D0E0]">
          Usamos cookies propias y de terceros para analizar el uso del sitio y
          medir nuestras campañas. Podés aceptarlas o rechazarlas. Más
          información en nuestra{" "}
          <a
            href="/cookies"
            className="font-semibold text-white underline underline-offset-2 hover:text-primary"
          >
            Política de Cookies
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-110"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
