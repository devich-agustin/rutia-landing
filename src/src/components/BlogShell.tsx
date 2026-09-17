import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog";
import { formatDate, SITE_URL } from "@/lib/blog";
import { trackClickDemo } from "@/lib/analytics";

/* ============================================================
   Piezas visuales del blog, sobre la identidad existente.
   ============================================================ */

export function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
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
          <nav className="flex items-center gap-5 text-[13.5px] font-medium">
            <Link to="/blog" className="text-white/85 transition-colors hover:text-white">
              Blog
            </Link>
            <a
              href="/#demo"
              onClick={trackClickDemo}
              className="rounded-lg bg-primary px-4 py-2 font-semibold text-white transition-colors hover:brightness-110"
            >
              Solicitar demo
            </a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-[13px] text-muted-foreground lg:px-8">
          <span>© 2026 Rutia — Buenos Aires, Argentina</span>
          <nav className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Enlaces">
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <span aria-hidden="true">·</span>
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

/* ---------- Portada editorial reutilizable (plantilla de marca) ---------- */

export function EditorialCover({ post, hero = false }: { post: Post; hero?: boolean }) {
  if (post.image) {
    return (
      <img
        src={post.image}
        alt={post.imageAlt || post.title}
        loading={hero ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
      />
    );
  }
  // Plantilla editorial Rutia: navy + ruta punteada + nodo de categoría
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden bg-ink p-4">
      <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M-10 150 C 60 130, 90 70, 160 75 S 280 130, 340 90 410 40, 420 35"
          fill="none"
          stroke="url(#cover-brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 9"
        />
        <defs>
          <linearGradient id="cover-brand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#18D2FF" />
            <stop offset="1" stopColor="#2F6BFF" />
          </linearGradient>
        </defs>
        <circle cx="160" cy="75" r="7" fill="#2F6BFF" />
        <circle cx="160" cy="75" r="13" fill="none" stroke="#2F6BFF" strokeOpacity="0.4" />
        <circle cx="340" cy="90" r="5" fill="#18D2FF" />
      </svg>
      <div className="relative flex w-full items-center justify-between">
        <img src="/rutia-logo.svg" alt="" aria-hidden="true" className={hero ? "h-7 w-auto" : "h-5 w-auto"} />
        <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/85">
          {post.category.label}
        </span>
      </div>
    </div>
  );
}

/* ---------- Card de nota ---------- */

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="block-card block-card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[1200/630] w-full overflow-hidden border-b border-border">
        <EditorialCover post={post} />
        {post.draft && (
          <span className="absolute left-3 top-3 rounded-md bg-amber-400 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-950">
            Borrador · prueba
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
            {post.category.label}
          </span>
          <span>·</span>
          <span>{post.readingMinutes} min</span>
        </div>
        <h3 className="mt-3 text-[19px] font-bold leading-snug transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-[12.5px] text-muted-foreground">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="inline-flex items-center gap-1 font-semibold text-primary">
            Leer nota <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ---------- Breadcrumbs (visual + JSON-LD lo arma cada página) ---------- */

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Migas de pan" className="text-[13px] text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <a href={it.href} className="hover:text-primary">{it.label}</a>
            ) : (
              <span aria-current="page" className="text-foreground">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${SITE_URL}${it.href}` } : {}),
    })),
  };
}

/* ---------- CTA según intención del artículo ---------- */

export function ArticleCta({ intent }: { intent: Post["intent"] }) {
  if (intent === "bofu") {
    return (
      <aside className="mt-12 overflow-hidden rounded-2xl bg-ink p-8 text-white">
        <p className="text-xl font-extrabold leading-snug">
          ¿Tu operación de entregas todavía depende de un Excel y de la memoria de una
          persona?
        </p>
        <p className="mt-2 text-[15px] text-[#9CA9C0]">
          Pedí una demo de 20 minutos y vela funcionando con entregas como las tuyas.
        </p>
        <a
          href="/#demo"
          onClick={trackClickDemo}
          className="bg-brand mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
        >
          Solicitar una demo <ArrowRight className="h-4 w-4" />
        </a>
      </aside>
    );
  }
  if (intent === "mofu") {
    return (
      <aside className="mt-12 rounded-2xl border border-primary/25 bg-primary/5 p-8">
        <p className="text-lg font-bold leading-snug">
          Así resolvemos esto en Rutia: un solo lugar para pedidos, depósito, vehículos y
          entregas.
        </p>
        <a
          href="/#producto"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
        >
          Conocé el enfoque de Rutia <ArrowRight className="h-4 w-4" />
        </a>
      </aside>
    );
  }
  // tofu
  return (
    <aside className="mt-12 rounded-2xl border border-border bg-surface p-8">
      <p className="text-lg font-bold leading-snug">¿Te sirvió esta nota?</p>
      <p className="mt-1 text-[14.5px] text-muted-foreground">
        Guardala para compartir con tu equipo, y seguí leyendo más guías sobre cómo
        ordenar la logística de tu empresa.
      </p>
      <Link
        to="/blog"
        className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
      >
        Ver más notas del blog <ArrowRight className="h-4 w-4" />
      </Link>
    </aside>
  );
}
