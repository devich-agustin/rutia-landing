import { Check, GripVertical, MapPin, Phone } from "lucide-react";

/**
 * Mini-visuales de producto embebidos en tarjetas destacadas.
 * La idea: vender software mostrando software, sin capturas pegadas.
 */

/** Tablero de armado del día: columnas por vehículo + tarjeta "en arrastre". */
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
    <div className="relative select-none rounded-xl border border-border bg-surface p-3 text-[11px] shadow-[inset_0_1px_0_rgb(255_255_255/0.7)]">
      <div className="grid grid-cols-2 gap-2.5">
        {cols.map((c) => (
          <div key={c.name} className="rounded-lg bg-white p-2 ring-1 ring-border/80">
            <div className="mb-1.5 flex items-center gap-1.5 font-semibold text-foreground">
              <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
              {c.name}
            </div>
            <div className="space-y-1.5">
              {c.items.map((it) => (
                <div
                  key={it}
                  className="flex items-center gap-1 rounded-md bg-surface px-1.5 py-1 text-muted-foreground ring-1 ring-border/70"
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
      <div className="absolute -right-1 -top-2 w-44 rotate-3 rounded-md bg-white px-2 py-1.5 text-foreground shadow-[0_12px_28px_-10px_rgb(30_64_175/0.35)] ring-1 ring-primary/30">
        <div className="flex items-center gap-1 font-medium">
          <GripVertical className="h-3 w-3 flex-none text-primary" />
          <span className="truncate">Heladera — Corrientes 850</span>
        </div>
      </div>
    </div>
  );
}

/** Vista del que reparte, en el celular que ya tiene. */
export function PhoneDelivery() {
  return (
    <div className="mx-auto w-[168px] select-none rounded-[1.4rem] border border-border bg-white p-1.5 shadow-[0_20px_40px_-18px_rgb(15_23_42/0.25)]">
      <div className="rounded-[1.05rem] bg-surface p-2.5 text-[10px]">
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-border" />
        <div className="rounded-lg bg-white p-2 ring-1 ring-border">
          <div className="font-semibold text-foreground">Entrega 3 de 8</div>
          <div className="mt-1 flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3 flex-none text-primary" />
            Av. Belgrano 1450, 2°B
          </div>
          <div className="mt-0.5 flex items-center gap-1 text-muted-foreground">
            <Phone className="h-3 w-3 flex-none text-primary" />
            11 5555-0123
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[9px] font-semibold">
            <div className="flex items-center justify-center gap-0.5 rounded-md bg-success px-1 py-1.5 text-white">
              <Check className="h-2.5 w-2.5" />
              Entregada
            </div>
            <div className="rounded-md bg-white py-1.5 text-foreground ring-1 ring-border">
              Parcial
            </div>
            <div className="rounded-md bg-white py-1.5 text-destructive ring-1 ring-border">
              Fallida
            </div>
          </div>
        </div>
        <div className="mt-1.5 rounded-lg bg-white/70 p-2 text-muted-foreground ring-1 ring-border/60">
          <div className="font-medium text-foreground/80">Siguiente</div>
          Rivadavia 3200 — Colchón Queen
        </div>
      </div>
    </div>
  );
}
