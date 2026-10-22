/**
 * Atribución de campañas de Rutia.
 *
 * Guarda en sessionStorage (solo durante la pestaña/sesión, sin cookies) de
 * dónde llegó la visita: parámetros UTM, identificadores de clic de Google Ads
 * (gclid, gbraid, wbraid) y de Meta (fbclid), la primera página vista y el
 * referrer. Esos datos se adjuntan:
 *   - a los formularios de contacto (llegan en el mail del lead), y
 *   - a los enlaces hacia demo.rutia.com.ar y Calendly, para que la prueba
 *     gratuita y las reuniones conserven el origen.
 *
 * No envía nada a terceros por sí mismo: solo acompaña datos que la persona
 * decide enviar (formulario) o enlaces que decide abrir.
 */

export const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
] as const;

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];

export type Attribution = Partial<Record<AttributionParam, string>> & {
  landing_page?: string;
  referrer?: string;
};

const STORAGE_KEY = "rutia_attribution";
const MAX_LENGTH = 300;

function read(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function write(value: Attribution) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* sin sessionStorage: seguimos sin persistir */
  }
}

function clean(value: string) {
  return value.trim().slice(0, MAX_LENGTH);
}

/**
 * Lee los parámetros de la URL actual. Si llegan parámetros de campaña nuevos,
 * reemplazan a los anteriores (último clic de la sesión). La primera página
 * vista y el referrer externo se conservan desde el inicio de la sesión.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const current = read();
  const url = new URL(window.location.href);

  const fromUrl: Attribution = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const v = url.searchParams.get(key);
    if (v && v.trim()) fromUrl[key] = clean(v);
  }

  const next: Attribution = Object.keys(fromUrl).length
    ? { ...fromUrl }
    : { ...current };

  next.landing_page =
    current.landing_page ?? clean(url.origin + url.pathname + url.search);

  if (!current.referrer && document.referrer) {
    try {
      const ref = new URL(document.referrer);
      if (ref.hostname !== url.hostname) next.referrer = clean(ref.href);
    } catch {
      /* referrer inválido: se ignora */
    }
  } else if (current.referrer) {
    next.referrer = current.referrer;
  }

  write(next);
}

export function getAttribution(): Attribution {
  return read();
}

/** Agrega los parámetros de campaña guardados a un enlace saliente. */
export function withAttribution(href: string): string {
  if (typeof window === "undefined") return href;
  const data = read();
  try {
    const url = new URL(href, window.location.href);
    for (const key of ATTRIBUTION_PARAMS) {
      const v = data[key];
      if (v && !url.searchParams.has(key)) url.searchParams.set(key, v);
    }
    return url.toString();
  } catch {
    return href;
  }
}

/** Suma la atribución a un FormData (campos con prefijo claro para el mail). */
export function appendAttribution(form: FormData) {
  const data = read();
  for (const key of ATTRIBUTION_PARAMS) {
    const v = data[key];
    if (v) form.set(key, v);
  }
  if (data.landing_page) form.set("landing_page", data.landing_page);
  if (data.referrer) form.set("referrer", data.referrer);
}
