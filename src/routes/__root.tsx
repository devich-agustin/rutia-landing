import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { initAnalytics } from "../lib/analytics";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// Google Search Console: pegar aquí el código de verificación cuando exista.
// Ejemplo: const GOOGLE_SITE_VERIFICATION = "abc123...";
const GOOGLE_SITE_VERIFICATION = "";

const SITE_URL = "https://rutia.com.ar";
const SITE_TITLE = "Rutia — Software de gestión de entregas para PyMEs";
const SITE_DESCRIPTION =
  "Rutia es el centro de control de la logística de tu PyME: pedidos, entregas, depósito, vehículos, choferes y fletes en un solo lugar. Sin Excel, sin papelitos y sin apps para los que reparten.";
const OG_IMAGE = `${SITE_URL}/og-image-v2.png`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Rutia" },
      ...(GOOGLE_SITE_VERIFICATION
        ? [{ name: "google-site-verification", content: GOOGLE_SITE_VERIFICATION }]
        : []),
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "Rutia" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap",
      },
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", type: "application/rss+xml", title: "Blog de Rutia", href: `${SITE_URL}/rss.xml` },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorComponent,
});

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Rutia",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/rutia-logo.svg`,
      email: "contacto@rutia.com.ar",
      foundingLocation: { "@type": "Place", name: "Buenos Aires, Argentina" },
      sameAs: [
        "https://www.linkedin.com/company/rutia",
        "https://www.instagram.com/somosrutia",
        "https://www.facebook.com/profile.php?id=61591624718047",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contacto@rutia.com.ar",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Rutia",
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "es-AR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Rutia",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "es-AR",
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: [
        { "@type": "Offer", name: "Inicial", price: "59", priceCurrency: "USD", description: "Hasta 150 entregas por mes" },
        { "@type": "Offer", name: "PyME", price: "119", priceCurrency: "USD", description: "Hasta 600 entregas por mes" },
        { "@type": "Offer", name: "Empresa", price: "229", priceCurrency: "USD", description: "Hasta 2.000 entregas por mes" },
      ],
    },
  ],
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-white">
      <img src="/rutia-logo.svg" alt="Rutia" className="h-9 w-auto" />
      <p className="mt-8 font-mono text-sm text-[#9CA9C0]">Error 404</p>
      <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
        Esta página no está en la hoja de ruta
      </h1>
      <p className="mt-3 max-w-md text-[15.5px] text-[#9CA9C0]">
        El enlace no existe o cambió de lugar. Volvé al inicio o pasá por el blog.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="/" className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:brightness-110">
          Ir al inicio
        </a>
        <a href="/blog" className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
          Ver el blog
        </a>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
