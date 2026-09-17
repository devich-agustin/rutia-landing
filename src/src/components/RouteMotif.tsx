/**
 * Firma visual de Rutia: rutas abstractas con nodos.
 * Un solo motivo, usado con moderación (hero, cómo funciona, cierre).
 * Hereda color vía currentColor; la opacidad se controla desde afuera.
 */

export function RouteMap({
  className = "",
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  const dash = animated ? "animate-dash" : "";
  return (
    <svg
      viewBox="0 0 900 600"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Rutas punteadas */}
      <path
        d="M-40 470 C 140 430, 200 300, 340 300 S 560 380, 700 300 940 150, 960 140"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 10"
        strokeLinecap="round"
        className={dash}
      />
      <path
        d="M-40 200 C 120 210, 220 120, 380 140 S 620 240, 780 180 940 90, 960 80"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 10"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M120 620 C 200 480, 420 500, 520 420 S 700 460, 900 400"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 10"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Nodos: paradas del recorrido */}
      {[
        [340, 300],
        [700, 300],
        [380, 140],
        [780, 180],
        [520, 420],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="4" fill="currentColor" />
          <circle cx={x} cy={y} r="10" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        </g>
      ))}
      {/* Punto de destino */}
      <g opacity="0.9">
        <circle cx="700" cy="300" r="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  );
}

/** Línea de ruta horizontal con nodos, para conectar pasos de un proceso. */
export function RouteConnector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M0 12 H1200"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 10"
        strokeLinecap="round"
        className="animate-dash"
      />
    </svg>
  );
}
