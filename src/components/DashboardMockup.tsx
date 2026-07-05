import { Truck, CircleCheck, CircleAlert, Clock } from "lucide-react";

export function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-premium)] ring-1 ring-black/[0.06]">
      {/* top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      <div className="flex items-center gap-2 border-b border-border/70 bg-gradient-to-b from-surface to-white px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 rounded-full bg-green-400/90" />
        <div className="ml-3 flex-1">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-xs text-muted-foreground ring-1 ring-border">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a5 5 0 0 1 5 5v3H7V7a5 5 0 0 1 5-5z" />
              <rect x="5" y="10" width="14" height="10" rx="2" />
            </svg>
            app.rutia.app/centro-de-control
          </div>
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
    dot: "bg-[oklch(0.6_0.15_260)]",
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
    <BrowserFrame>
      <div className="grid grid-cols-12 bg-white text-[13px]">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-border bg-gradient-to-b from-surface to-white p-4 sm:block">
          <div className="mb-6 font-bold text-foreground">
            Rutia<span className="text-accent">.</span>
          </div>
          <nav className="space-y-1">
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
                className={`rounded-md px-3 py-2 transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                    : "text-muted-foreground hover:bg-white"
                }`}
              >
                {label}
              </div>
            ))}
          </nav>
        </aside>
        {/* Main */}
        <main className="col-span-12 p-5 sm:col-span-9">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Hoy · 3 vehículos en calle</div>
              <div className="text-lg font-bold">Entregas de hoy</div>
            </div>
            <div className="rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm shadow-accent/40">
              + Nuevo pedido
            </div>
          </div>
          <div className="mb-4 grid grid-cols-4 gap-3">
            {[
              ["Programadas", "24", "text-foreground"],
              ["En camino", "9", "text-primary"],
              ["Entregadas", "12", "text-success"],
              ["Fallidas", "1", "text-destructive"],
            ].map(([label, n, color]) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-white p-3 shadow-[0_1px_2px_rgb(15_23_42_/_0.03)]"
              >
                <div className="text-[11px] text-muted-foreground">{label}</div>
                <div className={`text-xl font-bold ${color}`}>{n}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {COLUMNS.map((col) => (
              <div
                key={col.name}
                className="rounded-lg bg-gradient-to-b from-surface to-white p-3 ring-1 ring-border/70"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`h-2 w-2 flex-none rounded-full ${col.dot}`} />
                  <div className="truncate text-xs font-semibold">{col.name}</div>
                  <div className="ml-auto flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Truck className="h-3 w-3" />
                    {col.items.length}
                  </div>
                </div>
                <div className="space-y-2">
                  {col.items.map((d) => {
                    const s = d.status ? STATUS[d.status] : null;
                    return (
                      <div
                        key={d.item}
                        className="rounded-md bg-white p-2 ring-1 ring-border shadow-[0_1px_2px_rgb(15_23_42_/_0.03)]"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <div className="truncate text-[12px] font-medium">{d.item}</div>
                          {s && (
                            <span
                              className={`inline-flex flex-none items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${s.cls}`}
                            >
                              <s.Icon className="h-2.5 w-2.5" />
                              {s.label}
                            </span>
                          )}
                        </div>
                        <div className="truncate text-[11px] text-muted-foreground">{d.addr}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserFrame>
  );
}
