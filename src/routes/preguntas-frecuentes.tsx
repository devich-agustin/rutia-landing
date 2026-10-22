import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, ChevronRight } from "lucide-react";
import { Footer, Navbar, Shell } from "@/routes/index";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RouteMap } from "@/components/RouteMotif";
import { FAQ_CATEGORIES } from "@/content/preguntas-frecuentes";

const SITE_URL = "https://rutia.com.ar";
const PAGE_PATH = "/preguntas-frecuentes";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "Preguntas frecuentes sobre Rutia | Software de entregas";
const DESCRIPTION =
  "Respuestas sobre Rutia: cómo cargar pedidos, armar el día con vehículos propios o fletes, qué ve el chofer en el celular, la prueba gratis y la contratación.";
const OG_IMAGE = `${SITE_URL}/og-rutia-control-v2.jpg`;
const TRIAL_URL = "https://demo.rutia.com.ar/";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: FaqPage,
});

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
          name: "Preguntas frecuentes",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      inLanguage: "es-AR",
      mainEntity: FAQ_CATEGORIES.flatMap((c) =>
        c.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      ),
    },
  ],
};

function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-white lg:pb-20 lg:pt-44">
          <RouteMap className="absolute inset-y-0 right-[-18rem] h-full w-[900px] text-cyan opacity-[0.09] lg:right-[-5rem]" />
          <Shell className="relative">
            <nav
              aria-label="Migas de pan"
              className="mb-8 flex items-center gap-2 text-sm text-white/55"
            >
              <a href="/" className="transition-colors hover:text-white">
                Inicio
              </a>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span aria-current="page">Preguntas frecuentes</span>
            </nav>
            <div className="max-w-3xl">
              <span className="section-label section-label-dark">Ayuda</span>
              <h1 className="mt-6 text-[2.5rem] font-black leading-[1] tracking-[-.05em] sm:text-6xl">
                Preguntas frecuentes sobre Rutia
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#B9C5D5] sm:text-lg">
                Todo lo que suelen preguntarnos antes de empezar: qué hace
                Rutia, cómo se cargan los pedidos, qué ve el chofer en el
                celular y cómo probarlo en tu operación.
              </p>
            </div>
            <nav
              aria-label="Categorías de preguntas"
              className="mt-10 flex flex-wrap gap-2"
            >
              {FAQ_CATEGORIES.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[13.5px] font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {c.title}
                </a>
              ))}
            </nav>
          </Shell>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <Shell className="max-w-3xl">
            <div className="space-y-14">
              {FAQ_CATEGORIES.map((c) => (
                <section
                  key={c.id}
                  id={c.id}
                  aria-labelledby={`${c.id}-title`}
                  className="scroll-mt-28"
                >
                  <h2
                    id={`${c.id}-title`}
                    className="text-2xl font-extrabold tracking-tight sm:text-3xl"
                  >
                    {c.title}
                  </h2>
                  <div className="mt-6 space-y-3">
                    {c.items.map((item) => (
                      <details
                        key={item.q}
                        className="faq-item block-card group overflow-hidden"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left">
                          <h3 className="text-[15.5px] font-semibold">
                            {item.q}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="grid h-7 w-7 flex-none place-items-center rounded-full bg-surface text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:bg-primary/10 group-open:text-primary"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </span>
                        </summary>
                        <div className="px-6 pb-5 text-[14.5px] leading-relaxed text-muted-foreground">
                          <p>{item.a}</p>
                          {item.link && (
                            <a
                              href={item.link.href}
                              className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                            >
                              {item.link.label}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Shell>
        </section>

        <section
          id="empezar"
          className="relative overflow-hidden bg-ink py-20 text-center text-white lg:py-24"
        >
          <RouteMap className="absolute inset-0 h-full w-full text-cyan opacity-[0.06]" />
          <Shell className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
              ¿Te quedó alguna duda?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[#9CA9C0]">
              Probá Rutia gratis durante 1 mes o pedí una demo de 30 minutos y
              lo vemos con entregas como las tuyas.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta-location="faq-final"
                className="button-primary inline-flex min-h-13 items-center justify-center gap-2 px-7 text-base font-bold text-white"
              >
                Probá Rutia gratis 1 mes
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#demo"
                data-cta-location="faq-final"
                className="button-ghost inline-flex min-h-13 items-center justify-center px-7 font-semibold text-white"
              >
                Pedí una demo
              </a>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/55">
              <Check className="h-4 w-4 text-[cyan]" /> Sin permanencia:
              cancelás cuando quieras
            </p>
          </Shell>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
