import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, ChevronRight, CircleCheck } from "lucide-react";
import { Footer, Navbar, Shell } from "@/routes/index";
import { Reveal } from "@/components/Reveal";
import { RouteMap } from "@/components/RouteMotif";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { trackClickDemo } from "@/lib/analytics";

export type VerticalLandingConfig = {
  eyebrow: string;
  title: string;
  intro: string;
  problems: Array<{ icon: LucideIcon; title: string; text: string }>;
  flow: Array<{ title: string; text: string }>;
  benefits: Array<{ title: string; text: string }>;
  features: Array<{ icon: LucideIcon; title: string; text: string }>;
  faq: Array<[string, string]>;
};

export function VerticalLanding({ config }: { config: VerticalLandingConfig }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-ink pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
          <RouteMap className="absolute inset-y-0 right-[-18rem] h-full w-[900px] text-cyan opacity-[0.09] lg:right-[-5rem]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(36,93,255,.22),transparent_32%)]"
          />
          <Shell className="relative">
            <nav
              aria-label="Migas de pan"
              className="mb-8 flex items-center gap-2 text-sm text-white/55"
            >
              <a href="/" className="transition-colors hover:text-white">
                Inicio
              </a>
              <ChevronRight className="h-4 w-4" />
              <span aria-current="page">Mueblerías</span>
            </nav>
            <div className="max-w-4xl">
              <span className="section-label section-label-dark">
                {config.eyebrow}
              </span>
              <h1 className="mt-6 max-w-4xl text-[2.7rem] font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-[4.8rem]">
                {config.title}
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[#B9C5D5] sm:text-lg">
                {config.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#demo"
                  onClick={trackClickDemo}
                  className="button-primary inline-flex min-h-13 items-center justify-center gap-2 px-6 text-base font-bold text-white"
                >
                  Pedí una demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#como-funciona"
                  className="button-ghost inline-flex min-h-13 items-center justify-center px-6 font-semibold text-white"
                >
                  Ver cómo se organiza
                </a>
              </div>
            </div>
          </Shell>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <Shell>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-label">El problema cotidiano</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Entregar muebles exige coordinar mucho más que una dirección
                </h2>
                <p className="mt-5 text-[17px] text-muted-foreground">
                  Ventas promete una fecha, depósito prepara el pedido y reparto
                  necesita saber qué sale, con quién y qué pasó al llegar.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {config.problems.map((item, index) => (
                <Reveal key={item.title} delay={index * 55}>
                  <article className="block-card block-card-hover h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Shell>
        </section>

        <section
          id="como-funciona"
          className="scroll-mt-24 bg-ink py-20 text-white lg:py-28"
        >
          <Shell>
            <Reveal>
              <div className="max-w-3xl">
                <span className="section-label section-label-dark">
                  El flujo completo
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Del pedido pendiente al resultado de la entrega
                </h2>
                <p className="mt-5 text-[#9CA9C0]">
                  Rutia conecta las etapas que hoy suelen quedar repartidas
                  entre Excel, remitos, llamados y grupos de WhatsApp.
                </p>
              </div>
            </Reveal>
            <ol className="mt-14 grid gap-3 lg:grid-cols-6">
              {config.flow.map((step, index) => (
                <Reveal key={step.title} delay={index * 55} as="li">
                  <div className="ink-card h-full p-5">
                    <span className="font-mono text-xs font-bold text-[cyan]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#9CA9C0]">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Shell>
        </section>

        <section className="bg-surface py-20 lg:py-28">
          <Shell>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <Reveal className="lg:col-span-5">
                <span className="section-label">Para tu operación</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Una sola vista para ventas, depósito y reparto
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
                  Rutia no reemplaza tu sistema de facturación ni tu stock.
                  Ordena la operación de entregas y deja un historial claro para
                  que todos trabajen con la misma información.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {config.benefits.map((item, index) => (
                  <Reveal key={item.title} delay={index * 60}>
                    <article className="block-card h-full p-6">
                      <CircleCheck className="h-5 w-5 text-success" />
                      <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Shell>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <Shell>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-label">Qué podés controlar</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  Funciones útiles para el reparto de una mueblería
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {config.features.map((item, index) => (
                <Reveal key={item.title} delay={index * 55}>
                  <article className="block-card block-card-hover h-full p-6">
                    <item.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Shell>
        </section>

        <section className="bg-surface py-20 lg:py-28">
          <Shell className="max-w-4xl">
            <Reveal>
              <div className="text-center">
                <span className="section-label">Preguntas frecuentes</span>
                <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
                  Antes de ordenar tus entregas
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 space-y-3">
              {config.faq.map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-border bg-white px-6 py-5"
                >
                  <summary className="cursor-pointer list-none pr-8 font-bold marker:hidden">
                    {question}
                  </summary>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </Shell>
        </section>

        <section className="relative overflow-hidden bg-ink py-20 text-center text-white lg:py-28">
          <RouteMap className="absolute inset-0 h-full w-full text-cyan opacity-[0.06]" />
          <Shell className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Tu mueblería puede crecer sin sumar más Excel, llamados y
              papelitos
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[#9CA9C0]">
              Mostranos cómo organizás hoy tus entregas y te enseñamos Rutia con
              un flujo parecido al tuyo.
            </p>
            <a
              href="/#demo"
              onClick={trackClickDemo}
              className="button-primary mt-8 inline-flex min-h-13 items-center justify-center gap-2 px-7 text-base font-bold text-white"
            >
              Quiero ver una demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/55">
              <Check className="h-4 w-4 text-[cyan]" /> Sin costo y sin
              compromiso
            </p>
          </Shell>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
