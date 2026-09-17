import { Check, GripVertical, MapPin, Phone } from "lucide-react";

/** Tablero de armado del día, plano, con voz mono en los datos. */
export function MiniBoard() {
  const cols = [
    {
      name: "Camión 01",
      dot: "bg-primary",
      items: ["Sofá 3 cuerpos — Belgrano 1450", "Placard 6 ptas — Mitre 980"],
    },
    {
      name: "Flete — T. Sur",
      dot: "bg-success",
      items: ["Colchón Queen — Rivadavia 3200"],
    },
  ];
  return (
    <div className="relative select-none rounded-md border border-border bg-surface p-3 text-[11px]">
      <div className="grid grid-cols-2 gap-2.5">
        {cols.map((c) => (
          <div key={c.name} className="rounded border border-border bg-white p-2">
            <div className="mb-1.5 flex items-center gap-1.5 font-semibold text-foreground">
              <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
              {c.name}
            </div>
            <div className="space-y-1.5">
              {c.items.map((it) => (
                <div
                  key={it}
                  className="flex items-center gap-1 rounded-sm border border-border bg-surface px-1.5 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  <GripVertical className="h-3 w-3 flex-none opacity-50" />
                  <span className="truncate">{it}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Tarjeta en pleno arrastre */}
      <div className="absolute -top-3 right-2 w-44 rotate-2 rounded-sm border-2 border-primary bg-white px-2 py-1.5 font-mono text-[10px] text-foreground">
        <div className="flex items-center gap-1 font-medium">
          <GripVertical className="h-3 w-3 flex-none text-primary" />
          <span className="truncate">Heladera — Corrientes 850</span>
        </div>
      </div>
    </div>
  );
}

/** Vista del que reparte, en el celular que ya tiene. Plana. */
export function PhoneDelivery() {
  return (
    <div className="mx-auto w-[172px] select-none rounded-[1.2rem] border border-foreground/20 bg-white p-1.5">
      <div className="rounded-[0.85rem] bg-surface p-2.5 text-[10px]">
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-border" />
        <div className="rounded border border-border bg-white p-2">
          <div className="mono-label text-[8px] text-muted-foreground">Entrega 3 de 8</div>
          <div className="mt-1 flex items-center gap-1 font-mono text-muted-foreground">
            <MapPin className="h-3 w-3 flex-none text-primary" />
            Av. Belgrano 1450, 2°B
          </div>
          <div className="mt-0.5 flex items-center gap-1 font-mono text-muted-foreground">
            <Phone className="h-3 w-3 flex-none text-primary" />
            11 5555-0123
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[8.5px] font-semibold uppercase">
            <div className="flex items-center justify-center gap-0.5 rounded-sm bg-success px-1 py-1.5 text-white">
              <Check className="h-2.5 w-2.5" />
              Entreg.
            </div>
            <div className="rounded-sm border border-border bg-white py-1.5 text-foreground">
              Parcial
            </div>
            <div className="rounded-sm border border-border bg-white py-1.5 text-destructive">
              Fallida
            </div>
          </div>
        </div>
        <div className="mt-1.5 rounded border border-border bg-white/60 p-2 font-mono text-muted-foreground">
          <div className="mono-label text-[8px] text-foreground/70">Siguiente</div>
          Rivadavia 3200 — Colchón Queen
        </div>
      </div>
    </div>
  );
}
