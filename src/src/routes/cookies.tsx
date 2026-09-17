import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, legal, legalHead, legalJsonLd } from "@/components/LegalLayout";

const META = {
  title: "Política de Cookies — Rutia",
  description:
    "Qué cookies utiliza rutia.com.ar (Google Analytics 4 y Meta Pixel), para qué sirven, cuánto duran y cómo deshabilitarlas.",
  path: "/cookies",
};

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => legalHead(META),
});

const COOKIES = [
  {
    name: "_ga",
    provider: "Google Analytics 4",
    purpose: "Distinguir usuarios de forma anónima para medir el uso del sitio.",
    duration: "Hasta 2 años",
    type: "Analítica",
  },
  {
    name: "_ga_*",
    provider: "Google Analytics 4",
    purpose: "Mantener el estado de la sesión de medición.",
    duration: "Hasta 2 años",
    type: "Analítica",
  },
  {
    name: "_fbp",
    provider: "Meta Pixel",
    purpose: "Medir la efectividad de anuncios y mostrar publicidad relevante en Facebook e Instagram.",
    duration: "Hasta 90 días",
    type: "Publicitaria",
  },
];

function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      updated="9 de julio de 2026"
      jsonLd={legalJsonLd(META)}
      intro={
        <>
          Esta política explica qué cookies utiliza{" "}
          <span className={legal.strong}>rutia.com.ar</span>, para qué sirven y cómo
          podés gestionarlas. Complementa nuestra{" "}
          <a href="/privacidad" className={legal.link}>Política de Privacidad</a>.
        </>
      }
    >
      <section aria-labelledby="que-son">
        <h2 id="que-son" className={legal.h2}>1. Qué son las cookies</h2>
        <p className={legal.p}>
          Las cookies son pequeños archivos de texto que los sitios web guardan en tu
          navegador o dispositivo cuando los visitás. Permiten, por ejemplo, recordar
          preferencias, medir visitas o mostrar publicidad relevante. Junto a las
          cookies, existen tecnologías similares —como los píxeles de seguimiento— que
          cumplen funciones equivalentes; en esta política usamos «cookies» para
          referirnos a todas ellas.
        </p>
      </section>

      <section aria-labelledby="cuales">
        <h2 id="cuales" className={legal.h2}>2. Qué cookies utiliza este sitio</h2>
        <h3 className={legal.h3}>a) Cookies necesarias</h3>
        <p className={legal.p}>
          Son las estrictamente imprescindibles para que el sitio funcione y se muestre
          correctamente. Este sitio no instala cookies técnicas propias con fines de
          identificación; los proveedores de infraestructura que lo sirven (Vercel,
          Cloudflare) pueden utilizar mecanismos técnicos mínimos necesarios para la
          entrega segura del contenido.
        </p>
        <h3 className={legal.h3}>b) Cookies analíticas</h3>
        <p className={legal.p}>
          Utilizamos <span className={legal.strong}>Google Analytics 4</span> (Google
          LLC) para conocer, de forma agregada, cuántas personas visitan el sitio, desde
          dónde llegan y cómo lo recorren. Esta información nos ayuda a mejorarlo.
        </p>
        <h3 className={legal.h3}>c) Cookies publicitarias</h3>
        <p className={legal.p}>
          Utilizamos el <span className={legal.strong}>Meta Pixel</span> (Meta
          Platforms, Inc.) para medir la efectividad de nuestras campañas y mostrar
          anuncios relevantes en las plataformas de Meta.
        </p>
        <h3 className={legal.h3}>Detalle de cookies</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px]">
            <caption className="sr-only">Cookies utilizadas en rutia.com.ar</caption>
            <thead>
              <tr className="border-b border-border text-foreground">
                <th scope="col" className="py-2.5 pr-4 font-semibold">Cookie</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold">Proveedor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold">Finalidad</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold">Duración</th>
                <th scope="col" className="py-2.5 font-semibold">Tipo</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {COOKIES.map((c) => (
                <tr key={c.name} className="border-b border-border align-top">
                  <td className="py-2.5 pr-4 font-mono text-[13px] text-foreground">{c.name}</td>
                  <td className="py-2.5 pr-4">{c.provider}</td>
                  <td className="py-2.5 pr-4">{c.purpose}</td>
                  <td className="py-2.5 pr-4 whitespace-nowrap">{c.duration}</td>
                  <td className="py-2.5">{c.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={legal.p}>
          Las duraciones indicadas son aproximadas y las define cada proveedor; pueden
          variar según su configuración vigente.
        </p>
      </section>

      <section aria-labelledby="deshabilitar">
        <h2 id="deshabilitar" className={legal.h2}>3. Cómo deshabilitar las cookies</h2>
        <p className={legal.p}>Tenés varias vías, y podés combinarlas:</p>
        <ul className={legal.ul}>
          <li>
            <span className={legal.strong}>Google Analytics:</span> instalá el{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className={legal.link}
            >
              complemento de inhabilitación de Google Analytics
            </a>{" "}
            en tu navegador.
          </li>
          <li>
            <span className={legal.strong}>Meta Pixel:</span> gestioná tus{" "}
            <a
              href="https://www.facebook.com/adpreferences"
              target="_blank"
              rel="noopener noreferrer"
              className={legal.link}
            >
              preferencias de anuncios de Meta
            </a>{" "}
            desde tu cuenta.
          </li>
          <li>
            <span className={legal.strong}>Configuración del navegador:</span> todos los
            navegadores permiten bloquear o eliminar cookies. Consultá las instrucciones
            de{" "}
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className={legal.link}>Chrome</a>,{" "}
            <a href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia" target="_blank" rel="noopener noreferrer" className={legal.link}>Firefox</a>,{" "}
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className={legal.link}>Safari</a>{" "}
            o{" "}
            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className={legal.link}>Edge</a>.
          </li>
        </ul>
        <p className={legal.p}>
          Bloquear las cookies analíticas o publicitarias no impide navegar el sitio.
        </p>
      </section>

      <section aria-labelledby="derechos">
        <h2 id="derechos" className={legal.h2}>4. Tus derechos</h2>
        <p className={legal.p}>
          Los datos recopilados mediante cookies se tratan conforme a la Ley N.º 25.326 y
          a nuestra <a href="/privacidad" className={legal.link}>Política de Privacidad</a>,
          donde encontrarás el detalle de tus derechos de acceso, rectificación,
          actualización y supresión, cómo ejercerlos escribiendo a{" "}
          <a href="mailto:contacto@rutia.com.ar" className={legal.link}>
            contacto@rutia.com.ar
          </a>{" "}
          y la información de contacto de la Agencia de Acceso a la Información Pública,
          órgano de control en Argentina.
        </p>
      </section>

      <section aria-labelledby="futuro">
        <h2 id="futuro" className={legal.h2}>5. Herramientas futuras y cambios</h2>
        <p className={legal.p}>
          A medida que el producto evolucione podríamos incorporar nuevas herramientas
          que utilicen cookies (por ejemplo, servicios de autenticación, soporte o
          pagos). Si eso ocurre, actualizaremos esta política y su fecha de última
          actualización antes de que las nuevas cookies entren en uso.
        </p>
        <p className={legal.p}>
          Contacto legal:{" "}
          <a href="mailto:contacto@rutia.com.ar" className={legal.link}>
            contacto@rutia.com.ar
          </a>. <span className={legal.strong}>Historial de cambios:</span> v1.0 — 9 de
          julio de 2026: versión inicial.
        </p>
      </section>
    </LegalLayout>
  );
}
