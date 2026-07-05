export function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl shadow-[var(--shadow-premium)] ring-1 ring-black/[0.06] overflow-hidden">
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

export function DashboardMockup() {
  return (
    <BrowserFrame>
      <div className="grid grid-cols-12 bg-white text-[13px]">
        {/* Sidebar */}
        <aside className="col-span-3 border-r border-border bg-gradient-to-b from-surface to-white p-4 hidden sm:block">
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
        <main className="col-span-12 sm:col-span-9 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Martes 4 de julio</div>
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
            {[
              { name: "Camión 01 — Diego", count: 8, color: "bg-primary" },
              { name: "Camión 02 — Luis", count: 6, color: "bg-[oklch(0.6_0.15_260)]" },
              { name: "Flete — Transp. Sur", count: 4, color: "bg-success" },
            ].map((col) => (
              <div
                key={col.name}
                className="rounded-lg bg-gradient-to-b from-surface to-white p-3 ring-1 ring-border/70"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${col.color}`} />
                  <div className="text-xs font-semibold">{col.name}</div>
                  <div className="ml-auto text-[11px] text-muted-foreground">
                    {col.count}
                  </div>
                </div>
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-md bg-white p-2 ring-1 ring-border shadow-[0_1px_2px_rgb(15_23_42_/_0.03)]"
                    >
                      <div className="text-[12px] font-medium">
                        {["Sofá 3 cuerpos", "Colchón Queen", "Heladera No Frost"][i]}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        {[
                          "Av. Belgrano 1450",
                          "Rivadavia 3200",
                          "Corrientes 850",
                        ][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserFrame>
  );
}
