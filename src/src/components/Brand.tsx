import { Check } from "lucide-react";

/** Wordmark: señalética + el nodo naranja (una parada en la ruta). */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-black uppercase tracking-tight ${className}`}
    >
      Rutia
      <span className="ml-1 inline-block h-[0.42em] w-[0.42em] bg-accent align-baseline" />
    </span>
  );
}

/** Sello de goma: la firma de la marca. Usar con moderación (2 apariciones máx). */
export function Stamp({
  children = "Entregada",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`stamp ${className}`}>
      <Check className="h-3.5 w-3.5" strokeWidth={3} />
      {children}
    </span>
  );
}

/** Etiqueta de sección: la página es un registro, cada sección tiene su número. */
export function SectionTag({
  index,
  children,
  invert = false,
}: {
  index: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <div className={`mono-label flex items-center gap-3 ${invert ? "text-white/60" : "text-muted-foreground"}`}>
      <span className={invert ? "text-accent" : "text-primary"}>{index}</span>
      <span className={`h-px w-6 ${invert ? "bg-white/30" : "bg-border"}`} />
      <span>{children}</span>
    </div>
  );
}
