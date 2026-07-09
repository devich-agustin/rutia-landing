import { Link } from "@tanstack/react-router";

/**
 * Layout compartido de las páginas legales.
 * Réplica exacta de la estructura de /privacidad (header, footer, ancho,
 * jerarquía tipográfica) para que todo el bloque legal se lea igual.
 */

export const legal = {
  h2: "mt-12 text-2xl font-bold tracking-tight text-foreground",
  h3: "mt-8 text-lg font-semibold text-foreground",
  p: "mt-4 text-[15.5px] leading-relaxed text-muted-foreground",
  ul: "mt-4 list-disc space-y-2 pl-6 text-[15.5px] leading-relaxed text-muted-foreground",
  strong: "font-semibold text-foreground",
  link: "font-medium text-primary hover:underline",
};

export function Placeholder({ children }: { children: string }) {
  return (
    <mark className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-900">
      [COMPLETAR: {children}]
    </mark>
  );
}

export function LegalLayout({
  title,
  version = "1.0",
  updated,
  intro,
  jsonLd,
  children,
}: {
  title: string;
  version?: string;
  updated: string;
  intro: React.ReactNode;
  jsonLd: object;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header mínimo */}
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 lg:px-0">
          <Link to="/" aria-label="Rutia — inicio">
            <img
              src="/rutia-logo.svg"
              alt="Rutia — software de gestión de entregas"
              width={84}
              height={32}
              decoding="async"
              className="h-7 w-auto"
            />
          </Link>
          <Link
            to="/"
            className="text-[13.5px] font-medium text-[#9CA9C0] transition-colors hover:text-white"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 lg:px-0 lg:py-20">
        <article>
          <header>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
            <p className="mt-3 font-mono text-[13px] text-muted-foreground">
              Versión {version} · Vigente desde el {updated} · Última actualización: {updated}
            </p>
            <p className={legal.p}>{intro}</p>
          </header>
          {children}
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-[13px] text-muted-foreground lg:px-0">
          <span>© 2026 Rutia — Buenos Aires, Argentina</span>
          <nav className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Páginas legales">
            <a href="/privacidad" className="hover:text-foreground">Privacidad</a>
            <span aria-hidden="true">·</span>
            <a href="/terminos" className="hover:text-foreground">Términos</a>
            <span aria-hidden="true">·</span>
            <a href="/cookies" className="hover:text-foreground">Cookies</a>
            <span aria-hidden="true">·</span>
            <a href="/aviso-legal" className="hover:text-foreground">Aviso legal</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

/** Head SEO estándar de página legal (title, description, canonical, OG, Twitter). */
export function legalHead(opts: { title: string; description: string; path: string }) {
  const url = `https://rutia.com.ar${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** JSON-LD WebPage estándar de página legal. */
export function legalJsonLd(opts: { title: string; description: string; path: string }) {
  const url = `https://rutia.com.ar${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    inLanguage: "es-AR",
    isPartOf: { "@id": "https://rutia.com.ar/#website" },
  };
}
