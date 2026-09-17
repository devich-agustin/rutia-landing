import { createFileRoute } from "@tanstack/react-router";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeebbylg";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const incoming = await request.formData();

          if (String(incoming.get("_gotcha") ?? "").trim()) {
            return Response.json({ ok: true });
          }

          const required = ["nombre", "empresa", "email", "telefono", "rubro", "entregas_por_mes"];
          if (required.some((field) => !String(incoming.get(field) ?? "").trim())) {
            return Response.json({ ok: false, error: "Faltan datos obligatorios." }, { status: 400 });
          }

          const email = String(incoming.get("email") ?? "").trim();
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json({ ok: false, error: "El correo no es válido." }, { status: 400 });
          }

          const forwarded = new FormData();
          for (const [key, value] of incoming.entries()) {
            if (key !== "_gotcha" && typeof value === "string") {
              forwarded.append(key, value.slice(0, 1000));
            }
          }

          const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            body: forwarded,
            headers: { Accept: "application/json" },
          });

          if (!formspreeResponse.ok) {
            return Response.json({ ok: false, error: "El servicio de formularios rechazó el envío." }, { status: 502 });
          }

          return Response.json({ ok: true });
        } catch {
          return Response.json({ ok: false, error: "No se pudo procesar la consulta." }, { status: 500 });
        }
      },
    },
  },
});
