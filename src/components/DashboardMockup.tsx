import { Truck, CircleCheck, CircleAlert, Clock } from "lucide-react";

/**
 * El producto como documento operativo: frame plano, barra con voz mono,
 * sin puntitos de macOS, sin sombras premium. Se apoya en la página
 * como una planilla sobre el escritorio.
 */
export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-foreground/15 bg-white">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5">
        <div className="mono-label text-foreground">
          Rutia<span className="text-accent">▪</span> / Centro de control
        </div>
        <div className="mono-label hidden text-muted-foreground sm:block">
          Hoy — 24 entregas
        </div>
      </div>
      {children}
    </div>
  );
}

type Delivery = {
  item: string;
  addr: string;
  status?: "ok" | "route" | "fail";
};

const STATUS = {
  ok: { label: "Entregada", cls: "bg-success/10 text-success", Icon: CircleCheck },
  route: { label: "En camino", cls: "bg-primary/10 text-primary", Icon: Clock },
  fail: { label: "Fallida", cls: "bg-destructive/10 text-destructive", Icon: CircleAlert },
} as const;

const COLUMNS: { name: string; dot: string; items: Delivery[] }[] = [
  {
    name: "Camión 01 — Diego",
    dot: "bg-primary",
    items: [
      { item: "Sofá 3 cuerpos", addr: "Av. Belgrano 1450", status: "ok" },
      { item: "Placard 6 puertas", addr: "Mitre 980", status: "route" },
      { item: "Mesa + 6 sillas", addr: "Alsina 2210" },
    ],
  },
  {
    name: "Camioneta — Luis",
    dot: "bg-foreground/50",
    items: [
      { item: "Colchón Queen", addr: "Rivadavia 3200", status: "ok" },
      { item: "Sommier 2 plazas", addr: "Urquiza 540", status: "route" },
    ],
  },
  {
    name: "Flete — Transp. Sur",
    dot: "bg-success",
    items: [
      { item: "Heladera No Frost", addr: "Corrientes 850", status: "fail" },
      { item: "Lavarropas 8kg", addr: "9 de Julio 1122" },
      { item: "Cocina 4 hornallas", addr: "San Martín 77" },
    ],
  },
];

export function DashboardMockup() {
  return (
    <AppFrame>
      <div className="grid grid-cols-12 bg-white text-[13px]">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-border bg-surface p-3.5 sm:block">
          <nav className="space-y-0.5">
            {[
              ["Tablero", true],
              ["Pedidos", false],
              ["Entregas del día", false],
              ["Calendario", false],
              ["Vehículos", false],
              ["Incidencias", false],
            ].map(([label, active]) => (
              <div
                key={label as string}
                className={`rounded px-2.5 py-1.5 text-[12px] ${
                  active
                    ? "bg-primary font-semibold text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </div>
            ))}
          </nav>
        </aside>
        {/* Main */}
        <main className="col-span-12 p-4 sm:col-span-9">
          <div className="mb-3 grid grid-cols-4 divide-x divide-border rounded border border-border">
            {[
              ["Programadas", "24", "text-foreground"],
              ["En camino", "9", "text-primary"],
              ["Entregadas", "12", "text-success"],
              ["Fallidas", "1", "text-destructive"],
            ].map(([label, n, color]) => (
              <div key={label} className="px-3 py-2">
                <div className="mono-label text-[9px] text-muted-foreground">{label}</div>
                <div className={`font-mono text-lg font-semibold ${color}`}>{n}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {COLUMNS.map((col) => (
              <div key={col.name} className="rounded border border-border bg-surface p-2.5">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className={`h-2 w-2 flex-none rounded-full ${col.dot}`} />
                  <div className="truncate text-[11px] font-semibold">{col.name}</div>
                  <div className="ml-auto flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                    <Truck className="h-3 w-3" />
                    {col.items.length}
                  </div>
                </div>
                <div className="space-y-1.5">
                  {col.items.map((d) => {
                    const s = d.status ? STATUS[d.status] : null;
                    return (
                      <div key={d.item} className="rounded border border-border bg-white p-2">
                        <div className="flex items-center justify-between gap-1">
                          <div className="truncate text-[12px] font-medium">{d.item}</div>
                          {s && (
                            <span
                              className={`inline-flex flex-none items-center gap-0.5 rounded-sm px-1 py-0.5 font-mono text-[8.5px] font-semibold uppercase tracking-wide ${s.cls}`}
                            >
                              <s.Icon className="h-2.5 w-2.5" />
                              {s.label}
                            </span>
                          )}
                        </div>
                        <div className="truncate font-mono text-[10px] text-muted-foreground">
                          {d.addr}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </AppFrame>
  );
}
