import { CircleCheck } from "lucide-react";

/**
 * Dashboard oscuro estilo producto real: sidebar, KPIs, próximas entregas
 * y panel de mapa con la ruta del día. Pensado para el hero.
 */

function RoutePanel() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[oklch(0.17_0.03_262)]">
      <div className="flex items-center justify-between px-3 py-2 text-[10.5px] text-white/60">
        <span className="font-medium text-white/85">Ruta del día — Camión 01</span>
        <span className="font-mono">7 paradas</span>
      </div>
      <svg viewBox="0 0 260 170" className="block w-full">
        {/* calles */}
        <g stroke="white" strokeOpacity="0.06" strokeWidth="1">
          {[20, 55, 90, 125, 160].map((y) => <path key={y} d={`M0 ${y} H260`} />)}
          {[40, 95, 150, 205].map((x) => <path key={x} d={`M${x} 0 V170`} />)}
        </g>
        {/* ruta */}
        <path
          d="M28 140 C 60 120, 70 80, 105 78 S 160 110, 190 84 226 40, 236 34"
          fill="none"
          stroke="oklch(0.71 0.16 258)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 8"
          className="animate-dash"
        />
        {[
          [28, 140, "1"],
          [105, 78, "2"],
          [190, 84, "3"],
          [236, 34, "4"],
        ].map(([x, y, n]) => (
          <g key={n as string}>
            <circle cx={x as number} cy={y as number} r="9" fill="oklch(0.546 0.215 262)" />
            <text x={x as number} y={(y as number) + 3.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="white">
              {n}
            </text>
          </g>
        ))}
        {/* camión en tránsito */}
        <g transform="translate(140 100)">
          <rect x="-11" y="-8" width="22" height="16" rx="4" fill="white" />
          <text x="0" y="4" textAnchor="middle" fontSize="10">🚚</text>
        </g>
      </svg>
      {/* Chip flotante */}
      <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full border border-success/40 bg-[oklch(0.17_0.05_155)] px-3 py-1.5 text-[11px] font-semibold text-[oklch(0.8_0.15_152)]">
        <CircleCheck className="h-3.5 w-3.5" />
        Entregado
      </div>
    </div>
  );
}

export function DashboardMockup() {
  const kpis = [
    ["Pedidos hoy", "24", "text-white"],
    ["Entregados", "12", "text-[oklch(0.78_0.15_152)]"],
    ["En camino", "9", "text-[oklch(0.75_0.14_258)]"],
    ["Fallidos", "1", "text-[oklch(0.72_0.19_25)]"],
  ];
  const next = [
    ["10:00", "Juan Pérez", "Sofá 3 cuerpos"],
    ["11:30", "María González", "Mesa + 6 sillas"],
    ["13:00", "Roberto Sosa", "Rack TV"],
    ["15:00", "Ana López", "Sommier 2 plazas"],
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[oklch(0.15_0.028_262)] shadow-[var(--shadow-pop)]">
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="grid h-5 w-5 place-items-center rounded-md bg-primary text-[10px] font-extrabold text-white">R</span>
        <span className="text-[12px] font-semibold text-white/90">Rutia</span>
        <span className="ml-3 text-[12px] text-white/45">Centro de control</span>
        <span className="ml-auto font-mono text-[10px] text-white/40">hoy</span>
      </div>
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-white/10 p-3 lg:block">
          {[
            ["Tablero", true],
            ["Pedidos", false],
            ["Entregas del día", false],
            ["Calendario", false],
            ["Vehículos", false],
            ["Incidencias", false],
            ["Historial", false],
          ].map(([label, active]) => (
            <div
              key={label as string}
              className={`rounded-lg px-3 py-1.5 text-[11.5px] ${
                active ? "bg-primary font-semibold text-white" : "text-white/55"
              }`}
            >
              {label}
            </div>
          ))}
        </aside>
        {/* Main */}
        <main className="col-span-12 space-y-3 p-3.5 lg:col-span-9">
          <div className="grid grid-cols-4 gap-2">
            {kpis.map(([label, n, color]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
                <div className="text-[9.5px] text-white/50">{label}</div>
                <div className={`font-mono text-lg font-semibold ${color}`}>{n}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <div className="mb-1.5 text-[10.5px] font-medium text-white/85">Próximas entregas</div>
              <div className="space-y-1">
                {next.map(([h, who, what]) => (
                  <div key={h} className="flex items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1.5">
                    <span className="font-mono text-[10px] text-[oklch(0.75_0.14_258)]">{h}</span>
                    <span className="truncate text-[11px] font-medium text-white/85">{who}</span>
                    <span className="ml-auto truncate text-[10px] text-white/40">{what}</span>
                  </div>
                ))}
              </div>
            </div>
            <RoutePanel />
          </div>
        </main>
      </div>
    </div>
  );
}
