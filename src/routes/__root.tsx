import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { CookieConsent } from "../components/CookieConsent";
import { ExitIntentModal } from "../components/ExitIntentModal";
import { ConversionTracking } from "../components/ConversionTracking";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-white">
      <img src="/rutia-logo.svg" alt="Rutia" className="h-9 w-auto" />
      <h1 className="mt-8 text-2xl font-extrabold sm:text-3xl">
        No pudimos cargar esta página
      </h1>
      <p className="mt-3 max-w-md text-[15.5px] text-[#9CA9C0]">
        Algo falló de nuestro lado. Probá de nuevo en unos segundos o volvé al
        inicio. Si el problema sigue, escribinos a contacto@rutia.com.ar.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:brightness-110"
        >
          Intentar de nuevo
        </button>
        <a
          href="/"
          className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
        >
          Ir al inicio
        </a>
      </div>
    </div>
  );
}

// Google Search Console: configurar VITE_GOOGLE_SITE_VERIFICATION con el token
// que entrega Google. Si no existe, la metaetiqueta no se publica.
const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_URL = "https://rutia.com.ar";
export const SITE_TITLE = "Software de Gestión de Entregas y Reparto | Rutia";
export const SITE_DESCRIPTION =
  "Rutia es el software de gestión de entregas para PyMEs argentinas: pedidos, depósito, vehículos, choferes y fletes en un solo lugar, sin Excel ni papelitos.";
const OG_IMAGE = `${SITE_URL}/og-rutia-control-v2.jpg`;


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "color-scheme", content: "light" },
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
      // Fuentes servidas desde el propio sitio (antes: Google Fonts, que
      // bloqueaba el renderizado). Se precarga solo la fuente principal.
      {
        rel: "preload",
        href: "/fonts/geist-latin-wght-normal.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
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
      description: "Software argentino de gestión de entregas para PyMEs: pedidos, depósito, vehículos, choferes y fletes en un solo lugar.",
      address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
      areaServed: "AR",
      foundingLocation: { "@type": "Place", name: "Buenos Aires, Argentina" },
      sameAs: [
        "https://www.linkedin.com/company/rutia",
        "https://www.instagram.com/somosrutia",
        "https://www.facebook.com/profile.php?id=61591624718047",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+54-9-11-7824-2630",
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
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Rutia",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Software de gestión de entregas",
      featureList: ["Carga de pedidos a mano o desde Excel", "Calendario de entregas", "Armado del día por vehículo o flete", "Preparación en depósito", "Entrega desde el celular del chofer sin instalar apps", "Incidencias y reprogramaciones", "Historial completo de cada entrega"],
      operatingSystem: "Web",
      inLanguage: "es-AR",
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

const PRE_PAINT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add("js");try{var c=localStorage.getItem("rutia_cookie_consent");if(c==="accepted"||c==="rejected"){d.setAttribute("data-cookie-consent",c)}}catch(e){}})();`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        {/* Antes del primer pintado: si la persona ya eligió sobre cookies, se
            marca <html> para ocultar el aviso por CSS (sin parpadeo) y se
            habilitan las animaciones de aparición solo cuando hay JavaScript. */}
        <script dangerouslySetInnerHTML={{ __html: PRE_PAINT_SCRIPT }} />
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <ConversionTracking />
      <CookieConsent />
      <ExitIntentModal />
    </QueryClientProvider>
  );
}
