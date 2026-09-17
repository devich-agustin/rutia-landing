import {
  VerticalLanding,
  type VerticalLandingConfig,
} from "@/components/VerticalLanding";

const SITE_URL = "https://rutia.com.ar";

export type VerticalSeoConfig = {
  path: string;
  title: string;
  description: string;
  schemaName: string;
  landing: VerticalLandingConfig;
};

export function verticalHead(config: VerticalSeoConfig) {
  const pageUrl = `${SITE_URL}${config.path}`;
  return {
    meta: [
      { title: config.title },
      { name: "description", content: config.description },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:image", content: `${SITE_URL}/og-rutia-control-v2.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.title },
      { name: "twitter:description", content: config.description },
      { name: "twitter:image", content: `${SITE_URL}/og-rutia-control-v2.jpg` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  };
}

function structuredData(config: VerticalSeoConfig) {
  const pageUrl = `${SITE_URL}${config.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: config.title,
        description: config.description,
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
            name: config.schemaName,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: config.landing.faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}

export function VerticalSeoPage({ config }: { config: VerticalSeoConfig }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData(config)),
        }}
      />
      <VerticalLanding config={config.landing} />
    </>
  );
}
