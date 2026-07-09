import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Rutia" },
      {
        name: "description",
        content:
          "Cómo Rutia recopila, usa y protege tus datos personales. Política de privacidad conforme a la Ley 25.326 de Argentina.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://rutia.com.ar/privacidad" }],
  }),
});

/* Estilos tipográficos del documento, sobre el sistema existente */
const h2Cls = "mt-12 text-2xl font-bold tracking-tight text-foreground";
const h3Cls = "mt-8 text-lg font-semibold text-foreground";
const pCls = "mt-4 text-[15.5px] leading-relaxed text-muted-foreground";
const ulCls = "mt-4 list-disc space-y-2 pl-6 text-[15.5px] leading-relaxed text-muted-foreground";
const strongCls = "font-semibold text-foreground";
const linkCls = "font-medium text-primary hover:underline";

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header mínimo */}
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 lg:px-0">
          <Link to="/" aria-label="Rutia — inicio">
            <img
              src="/rutia-logo.svg"
              alt="Rutia — software de gestión de entregas"
              width={84}
              height={32}
              decoding="async"
              className="h-7 w-auto"
            />
          </Link>
          <Link
            to="/"
            className="text-[13.5px] font-medium text-[#9CA9C0] transition-colors hover:text-white"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 lg:px-0 lg:py-20">
        <article>
          <header>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="mt-3 font-mono text-[13px] text-muted-foreground">
              Versión 1.0 · Vigente desde el 9 de julio de 2026 · Última actualización: 9
              de julio de 2026
            </p>
            <p className={pCls}>
              En Rutia nos tomamos en serio la privacidad. Esta política explica, en
              lenguaje claro, qué datos recopilamos cuando visitás{" "}
              <span className={strongCls}>rutia.com.ar</span> o te contactás con
              nosotros, para qué los usamos, con quién los compartimos y qué derechos
              tenés sobre ellos.
            </p>
          </header>

          <section aria-labelledby="responsable">
            <h2 id="responsable" className={h2Cls}>1. Responsable del tratamiento</h2>
            <p className={pCls}>
              El responsable de los datos personales recopilados a través de este sitio
              es <span className={strongCls}>Agustín Ariel Devich</span>, CUIT
              20-40253699-4, con domicilio en Almagro, Ciudad Autónoma de Buenos Aires,
              República Argentina (en adelante, «Rutia» o «nosotros»).
            </p>
            <p className={pCls}>
              Contacto para asuntos de privacidad y legales:{" "}
              <a href="mailto:contacto@rutia.com.ar" className={linkCls}>
                contacto@rutia.com.ar
              </a>{" "}
              · WhatsApp: +54 9 11 7824-2630.
            </p>
          </section>

          <section aria-labelledby="alcance">
            <h2 id="alcance" className={h2Cls}>2. Alcance</h2>
            <p className={pCls}>
              Esta política aplica al sitio rutia.com.ar y a sus canales de contacto
              (correo electrónico y WhatsApp). Cuando la plataforma Rutia esté operativa
              para clientes, el tratamiento de los datos cargados dentro del producto se
              regirá además por los términos de servicio correspondientes.
            </p>
          </section>

          <section aria-labelledby="datos">
            <h2 id="datos" className={h2Cls}>3. Qué datos recopilamos</h2>
            <h3 className={h3Cls}>a) Datos que nos das directamente</h3>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Formulario de demo:</span> nombre, empresa,
                teléfono/WhatsApp, rubro y volumen aproximado de entregas mensuales.
              </li>
              <li>
                <span className={strongCls}>Correo electrónico y WhatsApp:</span> tus
                datos de contacto y el contenido de la conversación. WhatsApp es un
                servicio de Meta Platforms y se rige también por su propia política de
                privacidad.
              </li>
            </ul>
            <h3 className={h3Cls}>b) Datos que se recopilan automáticamente</h3>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Datos de navegación:</span> dirección IP,
                dispositivo y navegador, páginas visitadas, origen del tráfico e
                interacciones con el sitio.
              </li>
              <li>
                <span className={strongCls}>Cookies y tecnologías similares</span>{" "}
                (resumen en la sección 6).
              </li>
            </ul>
            <p className={pCls}>
              No recopilamos deliberadamente datos sensibles en los términos de la Ley
              N.º 25.326.
            </p>
          </section>

          <section aria-labelledby="finalidad">
            <h2 id="finalidad" className={h2Cls}>4. Para qué usamos tus datos</h2>
            <ul className={ulCls}>
              <li>Responder tus consultas y coordinar demostraciones del producto.</li>
              <li>Contactarte por los canales que nos hayas facilitado.</li>
              <li>Medir el uso del sitio para mejorarlo (analítica).</li>
              <li>Medir nuestras campañas y mostrar anuncios relevantes (publicidad).</li>
              <li>Enviarte información comercial sobre Rutia, siempre con opción de baja.</li>
              <li>Proteger la seguridad del sitio y prevenir usos fraudulentos.</li>
              <li>Cumplir obligaciones legales.</li>
            </ul>
          </section>

          <section aria-labelledby="base-legal">
            <h2 id="base-legal" className={h2Cls}>5. Base legal</h2>
            <p className={pCls}>
              Tratamos tus datos conforme a la Ley N.º 25.326 de Protección de los Datos
              Personales y su normativa complementaria, sobre estas bases:
            </p>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Tu consentimiento,</span> que prestás al
                completar el formulario, escribirnos o aceptar cookies de analítica y
                publicidad. Podés retirarlo en cualquier momento.
              </li>
              <li>
                <span className={strongCls}>La ejecución de medidas precontractuales o
                contractuales</span> que nos solicites, como coordinar una demo.
              </li>
              <li>
                <span className={strongCls}>El cumplimiento de obligaciones legales.</span>
              </li>
            </ul>
          </section>

          <section aria-labelledby="cookies">
            <h2 id="cookies" className={h2Cls}>6. Cookies</h2>
            <p className={pCls}>
              Usamos cookies y tecnologías similares de{" "}
              <span className={strongCls}>Google Analytics 4</span> (analítica) y del{" "}
              <span className={strongCls}>Meta Pixel</span> (publicidad), además de las
              estrictamente necesarias para el funcionamiento del sitio. El detalle de
              cada cookie, su duración y cómo deshabilitarlas está en nuestra{" "}
              <a href="/cookies" className={linkCls}>Política de Cookies</a>.
            </p>
          </section>

          <section aria-labelledby="no-venta">
            <h2 id="no-venta" className={h2Cls}>7. No comercializamos tus datos</h2>
            <p className={pCls}>
              Rutia <span className={strongCls}>no vende, no alquila y no comercializa</span>{" "}
              los datos personales de sus usuarios, bajo ninguna circunstancia.
            </p>
          </section>

          <section aria-labelledby="proveedores">
            <h2 id="proveedores" className={h2Cls}>8. Con quién compartimos tus datos</h2>
            <p className={pCls}>
              Compartimos datos únicamente con proveedores que los tratan por cuenta
              nuestra, bajo obligaciones de confidencialidad y solo en la medida
              necesaria para operar el sitio y nuestros canales de contacto:
            </p>
            <ul className={ulCls}>
              <li><span className={strongCls}>Vercel Inc.</span> — alojamiento del sitio.</li>
              <li><span className={strongCls}>Cloudflare, Inc.</span> — distribución de contenidos y seguridad.</li>
              <li><span className={strongCls}>Google LLC</span> — Google Workspace y Google Analytics 4.</li>
              <li><span className={strongCls}>Meta Platforms, Inc.</span> — Meta Pixel y WhatsApp Business.</li>
              <li><span className={strongCls}>GitHub, Inc.</span> — alojamiento del código fuente.</li>
            </ul>
            <p className={pCls}>
              A medida que el producto evolucione, Rutia{" "}
              <span className={strongCls}>podrá incorporar</span> nuevos proveedores —por
              ejemplo Supabase (base de datos), Resend (correos transaccionales), OpenAI
              (funcionalidades de inteligencia artificial), Stripe o Mercado Pago
              (procesamiento de pagos)—. Hoy no los utilizamos; si eso cambia,
              actualizaremos esta política antes de su puesta en uso. Los datos de
              tarjetas, de existir pagos online, serían tratados directamente por el
              procesador y nunca almacenados por Rutia.
            </p>
            <p className={pCls}>
              También podremos compartir datos si una autoridad competente lo exige
              legalmente, o en el contexto de una reorganización societaria, siempre con
              resguardos de confidencialidad.
            </p>
          </section>

          <section aria-labelledby="transferencias">
            <h2 id="transferencias" className={h2Cls}>9. Transferencias internacionales</h2>
            <p className={pCls}>
              Varios de estos proveedores procesan información fuera de la Argentina,
              principalmente en los Estados Unidos. En esos casos adoptamos resguardos
              razonables —incluyendo acuerdos de tratamiento de datos con cláusulas de
              protección conforme a los estándares reconocidos por la normativa argentina
              y las recomendaciones de la Agencia de Acceso a la Información Pública—
              para que tus datos reciban un nivel de protección adecuado.
            </p>
          </section>

          <section aria-labelledby="conservacion">
            <h2 id="conservacion" className={h2Cls}>10. Cuánto tiempo conservamos tus datos</h2>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Datos de contacto comercial:</span> mientras
                exista una relación activa y, si no se concreta, hasta 24 meses desde la
                última interacción, salvo que pidas antes su supresión.
              </li>
              <li>
                <span className={strongCls}>Datos de analítica:</span> según los plazos de
                cada herramienta (hasta 14 meses en Google Analytics 4).
              </li>
              <li>
                <span className={strongCls}>Obligaciones legales:</span> durante los
                plazos que exija la normativa aplicable.
              </li>
            </ul>
          </section>

          <section aria-labelledby="seguridad">
            <h2 id="seguridad" className={h2Cls}>11. Seguridad de la información</h2>
            <p className={pCls}>
              Rutia implementa medidas técnicas y organizativas razonables para proteger
              la información contra accesos no autorizados, pérdida, alteración o
              destrucción: cifrado del tráfico mediante HTTPS/TLS, control de accesos,
              proveedores de infraestructura con certificaciones de seguridad reconocidas
              y recopilación mínima de datos. Ningún sistema es infalible; ante un
              incidente que afecte tus datos, actuaremos con diligencia para mitigarlo y
              te informaremos cuando corresponda.
            </p>
          </section>

          <section aria-labelledby="derechos">
            <h2 id="derechos" className={h2Cls}>12. Tus derechos</h2>
            <p className={pCls}>
              Sobre tus datos personales podés solicitarnos, en cualquier momento y de
              forma gratuita:
            </p>
            <ul className={ulCls}>
              <li><span className={strongCls}>Acceso:</span> saber qué datos tuyos tenemos y cómo los usamos.</li>
              <li><span className={strongCls}>Rectificación:</span> corregir datos inexactos o erróneos.</li>
              <li><span className={strongCls}>Actualización:</span> completar o poner al día tus datos.</li>
              <li><span className={strongCls}>Eliminación:</span> pedir que borremos tus datos de nuestros registros.</li>
            </ul>
            <p className={pCls}>
              También podés retirar tu consentimiento y oponerte al uso de tus datos con
              fines publicitarios. Para ejercer cualquiera de estos derechos, escribí a{" "}
              <a href="mailto:contacto@rutia.com.ar" className={linkCls}>
                contacto@rutia.com.ar
              </a>{" "}
              indicando tu pedido; respondemos dentro de los plazos legales.
            </p>
            <p className={pCls}>
              El titular de los datos personales tiene la facultad de ejercer el derecho
              de acceso a los mismos en forma gratuita a intervalos no inferiores a seis
              meses, salvo que se acredite un interés legítimo al efecto, conforme al
              artículo 14, inciso 3 de la Ley N.º 25.326.
            </p>
            <p className={pCls}>
              La Agencia de Acceso a la Información Pública, órgano de control de la Ley
              N.º 25.326, tiene la atribución de atender las denuncias y reclamos que se
              interpongan con relación al incumplimiento de las normas sobre protección
              de datos personales:{" "}
              <a
                href="https://www.argentina.gob.ar/aaip"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                www.argentina.gob.ar/aaip
              </a>.
            </p>
          </section>

          <section aria-labelledby="menores">
            <h2 id="menores" className={h2Cls}>13. Menores de edad</h2>
            <p className={pCls}>
              Este sitio está dirigido a empresas y a personas mayores de 18 años. No
              recopilamos deliberadamente datos de menores; si advertimos que recibimos
              datos de un menor, los eliminaremos.
            </p>
          </section>

          <section aria-labelledby="comunicaciones">
            <h2 id="comunicaciones" className={h2Cls}>14. Comunicaciones comerciales</h2>
            <p className={pCls}>
              Si nos dejaste tus datos, podremos enviarte información sobre Rutia por
              correo o WhatsApp. Siempre vas a tener una vía simple de baja: respondé
              «BAJA» por WhatsApp o usá el enlace o la dirección indicada en el correo.
              Procesamos las bajas sin demoras injustificadas.
            </p>
          </section>

          <section aria-labelledby="cambios">
            <h2 id="cambios" className={h2Cls}>15. Modificaciones e historial</h2>
            <p className={pCls}>
              Podremos actualizar esta política ante cambios normativos, nuevas
              funcionalidades o incorporación de proveedores. La versión vigente estará
              siempre publicada en esta página; si el cambio fuera sustancial,
              procuraremos comunicarlo por un medio destacado.
            </p>
            <p className={pCls}>
              <span className={strongCls}>Historial de cambios:</span> v1.0 — 9 de julio
              de 2026: versión inicial.
            </p>
          </section>

          <section aria-labelledby="ley">
            <h2 id="ley" className={h2Cls}>16. Legislación aplicable y jurisdicción</h2>
            <p className={pCls}>
              Esta política se rige por las leyes de la República Argentina, en particular
              la Ley N.º 25.326. Toda controversia se someterá a los tribunales
              ordinarios competentes de la Ciudad Autónoma de Buenos Aires, República
              Argentina, sin perjuicio de las normas de orden público que establezcan una
              jurisdicción distinta.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-[13px] text-muted-foreground lg:px-0">
          <span>© 2026 Rutia — Buenos Aires, Argentina</span>
          <nav className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Páginas legales">
            <a href="/terminos" className="hover:text-foreground">Términos</a>
            <span aria-hidden="true">·</span>
            <a href="/cookies" className="hover:text-foreground">Cookies</a>
            <span aria-hidden="true">·</span>
            <a href="/aviso-legal" className="hover:text-foreground">Aviso legal</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
