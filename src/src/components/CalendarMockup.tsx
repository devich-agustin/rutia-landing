/**
 * Calendario de entregas estilo scheduler: columnas por vehículo,
 * franjas horarias y una tarjeta de detalle flotante.
 */
export function CalendarMockup() {
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  const cols = [
    {
      name: "Camión 01",
      sub: "AA 123 BB",
      blocks: [
        { top: 1, span: 1.5, title: "Juan Pérez", sub: "Sofá 3 cuerpos", tone: "blue" },
        { top: 3, span: 1.5, title: "Roberto Sosa", sub: "Rack TV", tone: "blue" },
        { top: 7, span: 1.5, title: "Carla Ruiz", sub: "Modular + mesa", tone: "blue" },
      ],
    },
    {
      name: "Camioneta",
      sub: "AC 456 CD",
      blocks: [
        { top: 1.5, span: 1.25, title: "María González", sub: "Mesa + 6 sillas", tone: "sky" },
        { top: 5, span: 1.5, title: "Ana López", sub: "Sommier 2 plazas", tone: "green" },
      ],
    },
    {
      name: "Flete externo",
      sub: "Sin asignar",
      blocks: [],
      drop: true,
    },
  ];
  const tone: Record<string, string> = {
    blue: "border-primary/50 bg-primary/15 text-white",
    sky: "border-[#18D2FF]/50 bg-[#18D2FF]/12 text-white",
    green: "border-success/50 bg-success/15 text-white",
  };
  const ROW = 36;
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-white/12 bg-ink-2 shadow-[var(--shadow-pop)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <span className="text-[12px] font-semibold text-white/90">Calendario de entregas</span>
          <span className="font-mono text-[10px] text-white/45">hoy · día</span>
        </div>
        <div className="grid grid-cols-[48px_1fr_1fr_1fr] gap-px bg-white/10 p-px text-[10.5px]">
          {/* header row */}
          <div className="bg-ink-2" />
          {cols.map((c) => (
            <div key={c.name} className="bg-ink-2 px-2 py-2">
              <div className="font-semibold text-white/90">{c.name}</div>
              <div className="font-mono text-[9px] text-white/40">{c.sub}</div>
            </div>
          ))}
          {/* body */}
          <div className="relative bg-ink-2" style={{ height: ROW * hours.length }}>
            {hours.map((h, i) => (
              <div key={h} className="absolute left-0 w-full pr-1 text-right font-mono text-[8.5px] text-white/35" style={{ top: i * ROW + 2 }}>
                {h}
              </div>
            ))}
          </div>
          {cols.map((c) => (
            <div key={c.name} className="relative bg-ink-3" style={{ height: ROW * hours.length }}>
              {hours.map((_, i) => (
                <div key={i} className="absolute left-0 w-full border-t border-white/[0.05]" style={{ top: i * ROW }} />
              ))}
              {c.blocks.map((b) => (
                <div
                  key={b.title}
                  className={`absolute inset-x-1 rounded-md border px-1.5 py-1 ${tone[b.tone]}`}
                  style={{ top: b.top * ROW + 2, height: b.span * ROW - 4 }}
                >
                  <div className="truncate text-[10.5px] font-semibold">{b.title}</div>
                  <div className="truncate text-[9.5px] opacity-70">{b.sub}</div>
                </div>
              ))}
              {c.drop && (
                <div className="absolute inset-x-1.5 rounded-md border border-dashed border-white/20 px-2 py-2 text-center text-[9px] text-white/35" style={{ top: 6.5 * ROW }}>
                  Soltar aquí para asignar
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Detalle flotante */}
      <div className="absolute -right-3 top-16 hidden w-48 rounded-xl border border-border bg-white p-3 text-[11px] shadow-[var(--shadow-pop)] lg:block">
        <div className="font-semibold text-foreground">Juan Pérez</div>
        <div className="text-muted-foreground">Sofá 3 cuerpos</div>
        <span className="mt-1.5 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10.5px] font-semibold text-primary">
          En camino
        </span>
        <div className="mt-2 space-y-1 text-[10px] text-muted-foreground">
          <div><span className="font-medium text-foreground">Dirección</span><br />Av. Belgrano 1450, CABA</div>
          <div><span className="font-medium text-foreground">Franja horaria</span><br />09:00 – 10:00</div>
        </div>
        <div className="mt-2 rounded-md border border-border py-1 text-center text-[10px] font-semibold text-foreground">
          Ver detalle
        </div>
      </div>
    </div>
  );
}
