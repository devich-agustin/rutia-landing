import { useEffect, useState } from "react";
import { Check, ArrowRight, X } from "lucide-react";
import { trackClickDemo } from "@/lib/analytics";

/**
 * Popup de intención de salida (exit-intent) de Rutia.
 *
 * Qué hace:
 *  - Detecta cuando el visitante mueve el mouse fuera del borde superior de la
 *    ventana (gesto típico de "me voy": ir hacia la X o la barra del navegador)
 *    y, en ese momento, ofrece un mes gratis + demo.
 *  - Solo en escritorio. En móvil no existe el "mouse-out", así que no se activa.
 *  - Se muestra UNA VEZ POR VISITA: si el usuario lo cierra y sigue navegando,
 *    no vuelve a aparecer en esa sesión. Si vuelve otro día (nueva sesión), puede
 *    volver a verlo. Se controla con sessionStorage (se borra al cerrar la pestaña).
 */

const SESSION_KEY = "rutia_exit_intent_shown";
const CALENDLY_URL = "https://calendly.com/rutia-demo/30min";

const BENEFITS = [
  "Demo personalizada de 30 minutos",
  "Lo vemos con entregas reales como las tuyas",
  "1 mes de Rutia gratis, sin compromiso",
];

function alreadyShown(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markShown() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* si sessionStorage no está disponible, simplemente no persistimos */
  }
}

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alreadyShown()) return;

    // Evita disparar en pantallas táctiles / móviles (no hay "mouse-out" real).
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;
    if (isTouch) return;

    // Pequeña gracia inicial: no dispararlo en el primer instante de carga.
    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 3000);

    const handleMouseOut = (e: MouseEvent) => {
      if (!armed || alreadyShown()) return;
      // Solo cuando el cursor sale por ARRIBA de la ventana (hacia la barra/X)
      // y no hacia un elemento hijo (relatedTarget null = salió del documento).
      if (e.clientY <= 0 && !e.relatedTarget) {
        setOpen(true);
        markShown();
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Probá Rutia gratis durante 1 mes"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
    >
      {/* Fondo oscurecido: al hacer clic afuera, cierra */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Tarjeta */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-ink p-7 text-center text-white shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-[#9CA9C0] transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Logo centrado */}
        <img
          src="/rutia-logo.svg"
          alt="Rutia"
          className="mx-auto h-6 w-auto"
        />

        <h2 className="mt-6 text-2xl font-extrabold leading-tight">
          ¡Esperá! Tenemos algo para vos 🎁
        </h2>
        <p className="mt-3 text-lg font-bold text-brand">
          Probá Rutia gratis durante 1 mes
        </p>
        <p className="mt-2 text-[15px] text-[#9CA9C0]">
          Agendá una demo de 30 minutos, conocé cómo Rutia puede ordenar tus
          entregas y te regalamos 1 mes completo para probarlo en tu empresa.
        </p>

        <ul className="mt-6 space-y-3 text-left">
          {BENEFITS.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-4 py-3"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/20 text-success">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="text-[14.5px] text-white/90">{b}</span>
            </li>
          ))}
        </ul>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackClickDemo();
            close();
          }}
          className="bg-brand group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(47,107,255,.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.98]"
        >
          Quiero mi mes gratis
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          onClick={close}
          className="mt-3 w-full text-center text-sm text-[#9CA9C0] transition-colors hover:text-white"
        >
          No gracias, seguiré explorando
        </button>
      </div>
    </div>
  );
}

export default ExitIntentModal;
