import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Rutia" },
      {
        name: "description",
        content:
          "Cómo Rutia recopila, usa y protege tus datos personales. Política de privacidad y cookies conforme a la Ley 25.326 de Argentina.",
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

function Placeholder({ children }: { children: string }) {
  return (
    <mark className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-900">
      [COMPLETAR: {children}]
    </mark>
  );
}

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
              Política de Privacidad y Cookies
            </h1>
            <p className="mt-3 font-mono text-[13px] text-muted-foreground">
              Última actualización: 9 de julio de 2026
            </p>
            <p className={pCls}>
              En Rutia nos tomamos en serio la privacidad. Esta política explica, en el
              lenguaje más claro posible, qué datos recopilamos cuando visitás{" "}
              <span className={strongCls}>rutia.com.ar</span> o te ponés en contacto con
              nosotros, para qué los usamos, con quién los compartimos y qué derechos
              tenés sobre ellos.
            </p>
          </header>

          <section aria-labelledby="responsable">
            <h2 id="responsable" className={h2Cls}>1. Quién es el responsable de tus datos</h2>
            <p className={pCls}>
              El responsable del tratamiento de los datos personales recopilados a través
              de este sitio es <Placeholder>razón social o nombre del titular</Placeholder>,
              CUIT <Placeholder>CUIT</Placeholder>, con domicilio en{" "}
              <Placeholder>domicilio legal completo</Placeholder>, Argentina (en adelante,
              «Rutia», «nosotros»).
            </p>
            <p className={pCls}>
              Para cualquier consulta relacionada con esta política o con tus datos
              personales, podés escribirnos a{" "}
              <a href="mailto:contacto@rutia.com.ar" className="font-medium text-primary hover:underline">
                contacto@rutia.com.ar
              </a>{" "}
              o por WhatsApp al +54 9 11 7824-2630.
            </p>
          </section>

          <section aria-labelledby="alcance">
            <h2 id="alcance" className={h2Cls}>2. Alcance</h2>
            <p className={pCls}>
              Esta política aplica al sitio web rutia.com.ar y a los canales de contacto
              asociados (correo electrónico y WhatsApp). Cuando la plataforma Rutia esté
              operativa para clientes, el tratamiento de los datos cargados dentro del
              producto (por ejemplo, datos de entregas y clientes de nuestros usuarios) se
              regirá además por los términos del servicio correspondientes.
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
                <span className={strongCls}>Correo electrónico:</span> tu dirección, el
                contenido de tus mensajes y los datos que decidas incluir en ellos.
              </li>
              <li>
                <span className={strongCls}>WhatsApp:</span> tu número de teléfono, tu
                nombre de perfil y el contenido de la conversación. WhatsApp es un
                servicio de Meta Platforms y su uso se rige también por la política de
                privacidad de WhatsApp.
              </li>
            </ul>
            <h3 className={h3Cls}>b) Datos que se recopilan automáticamente</h3>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Datos de navegación:</span> dirección IP,
                tipo de dispositivo y navegador, páginas visitadas, duración de la
                visita, origen del tráfico e interacciones con el sitio (por ejemplo,
                clics en botones de demo o WhatsApp).
              </li>
              <li>
                <span className={strongCls}>Cookies y tecnologías similares:</span>{" "}
                descriptas en detalle en la sección 6.
              </li>
            </ul>
            <p className={pCls}>
              No recopilamos deliberadamente categorías especiales de datos (los que la
              ley argentina denomina «datos sensibles») ni datos de menores de edad. Este
              sitio está dirigido a empresas y a personas mayores de 18 años.
            </p>
          </section>

          <section aria-labelledby="finalidad">
            <h2 id="finalidad" className={h2Cls}>4. Para qué usamos tus datos</h2>
            <ul className={ulCls}>
              <li>Responder tus consultas y coordinar demostraciones del producto.</li>
              <li>Contactarte por los canales que nos hayas facilitado (teléfono, WhatsApp o correo).</li>
              <li>Medir y entender cómo se usa el sitio para mejorarlo (analítica).</li>
              <li>Medir la efectividad de nuestras campañas publicitarias y mostrar anuncios relevantes (Meta Pixel).</li>
              <li>Enviarte información comercial sobre Rutia, siempre con la posibilidad de darte de baja.</li>
              <li>Proteger la seguridad del sitio y prevenir usos fraudulentos o abusivos.</li>
              <li>Cumplir obligaciones legales que nos resulten aplicables.</li>
            </ul>
          </section>

          <section aria-labelledby="base-legal">
            <h2 id="base-legal" className={h2Cls}>5. Base legal del tratamiento</h2>
            <p className={pCls}>
              Tratamos tus datos conforme a la Ley N.º 25.326 de Protección de los Datos
              Personales de la República Argentina y su normativa complementaria. Según el
              caso, la base que legitima el tratamiento es:
            </p>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Tu consentimiento,</span> que prestás al
                completar el formulario, escribirnos o aceptar el uso de cookies de
                analítica y publicidad. Podés retirarlo en cualquier momento.
              </li>
              <li>
                <span className={strongCls}>La ejecución de medidas precontractuales o
                contractuales</span> solicitadas por vos, como coordinar una demo o
                gestionar el alta del servicio.
              </li>
              <li>
                <span className={strongCls}>El cumplimiento de obligaciones legales.</span>
              </li>
            </ul>
          </section>

          <section aria-labelledby="cookies">
            <h2 id="cookies" className={h2Cls}>6. Política de Cookies y tecnologías de seguimiento</h2>
            <p className={pCls}>
              Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando
              visitás un sitio web. Usamos cookies y tecnologías similares (píxeles,
              identificadores de dispositivo) de estos proveedores:
            </p>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Google Analytics 4</span> (Google LLC): nos
                permite conocer de forma agregada cuántas personas visitan el sitio, desde
                dónde y cómo lo recorren. Utiliza cookies como <code>_ga</code> y{" "}
                <code>_ga_*</code>, con una vigencia de hasta 2 años. Podés excluirte
                instalando el{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  complemento de inhabilitación de Google Analytics
                </a>.
              </li>
              <li>
                <span className={strongCls}>Meta Pixel</span> (Meta Platforms, Inc.): nos
                permite medir la efectividad de nuestros anuncios en Facebook e Instagram
                y mostrar publicidad relevante. Utiliza cookies como <code>_fbp</code>,
                con una vigencia de hasta 90 días. Podés gestionar tus preferencias de
                anuncios desde la configuración de tu cuenta de Meta.
              </li>
              <li>
                <span className={strongCls}>Cookies técnicas</span> estrictamente
                necesarias para el funcionamiento del sitio.
              </li>
            </ul>
            <p className={pCls}>
              Además, podés bloquear o eliminar las cookies desde la configuración de tu
              navegador en cualquier momento. Tené en cuenta que deshabilitar las cookies
              técnicas puede afectar el funcionamiento del sitio.
            </p>
          </section>

          <section aria-labelledby="proveedores">
            <h2 id="proveedores" className={h2Cls}>7. Con quién compartimos tus datos</h2>
            <p className={pCls}>
              No vendemos tus datos personales. Los compartimos únicamente con proveedores
              de servicios que los tratan por cuenta nuestra y bajo obligaciones de
              confidencialidad, en la medida necesaria para operar el sitio y nuestros
              canales de contacto:
            </p>
            <ul className={ulCls}>
              <li><span className={strongCls}>Vercel Inc.</span> — alojamiento y despliegue del sitio web.</li>
              <li><span className={strongCls}>Cloudflare, Inc.</span> — red de distribución de contenidos y seguridad.</li>
              <li><span className={strongCls}>Google LLC</span> — Google Workspace (correo y herramientas internas) y Google Analytics 4.</li>
              <li><span className={strongCls}>Meta Platforms, Inc.</span> — Meta Pixel y WhatsApp Business.</li>
              <li><span className={strongCls}>GitHub, Inc.</span> — alojamiento del código fuente del sitio.</li>
            </ul>
            <p className={pCls}>
              A medida que el producto evolucione, podremos incorporar los siguientes
              proveedores, en cuyo caso actualizaremos esta política:{" "}
              <span className={strongCls}>Supabase</span> (base de datos y
              autenticación), <span className={strongCls}>Resend</span> (envío de correos
              transaccionales), <span className={strongCls}>OpenAI</span> (funcionalidades
              basadas en inteligencia artificial), <span className={strongCls}>Stripe</span>{" "}
              y <span className={strongCls}>Mercado Pago</span> (procesamiento de pagos;
              los datos de tarjetas serían tratados directamente por estos proveedores y
              nunca almacenados por Rutia).
            </p>
            <p className={pCls}>
              También podremos compartir datos si una autoridad competente lo exige
              legalmente, o en el contexto de una reorganización societaria, siempre con
              resguardos de confidencialidad.
            </p>
          </section>

          <section aria-labelledby="transferencias">
            <h2 id="transferencias" className={h2Cls}>8. Transferencias internacionales</h2>
            <p className={pCls}>
              Varios de los proveedores mencionados almacenan o procesan información en
              servidores ubicados fuera de la Argentina, principalmente en los Estados
              Unidos. En esos casos, adoptamos resguardos razonables para que tus datos
              reciban un nivel de protección adecuado, incluyendo la celebración de
              acuerdos de tratamiento de datos con cláusulas de protección conforme a los
              estándares reconocidos por la normativa argentina y las recomendaciones de
              la Agencia de Acceso a la Información Pública.
            </p>
          </section>

          <section aria-labelledby="conservacion">
            <h2 id="conservacion" className={h2Cls}>9. Cuánto tiempo conservamos tus datos</h2>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Datos de contacto comercial</span> (formulario,
                correo, WhatsApp): mientras exista una relación comercial activa o
                interés legítimo de contacto, y como máximo 24 meses desde la última
                interacción si no se concreta una relación comercial, salvo que solicites
                antes su supresión.
              </li>
              <li>
                <span className={strongCls}>Datos de analítica:</span> según los plazos de
                retención configurados en cada herramienta (hasta 14 meses en Google
                Analytics 4).
              </li>
              <li>
                <span className={strongCls}>Datos necesarios para cumplir obligaciones
                legales:</span> durante los plazos que exija la normativa aplicable.
              </li>
            </ul>
          </section>

          <section aria-labelledby="seguridad">
            <h2 id="seguridad" className={h2Cls}>10. Seguridad de la información</h2>
            <p className={pCls}>
              Aplicamos medidas técnicas y organizativas razonables para proteger tus
              datos contra el acceso no autorizado, la pérdida y la alteración: cifrado
              del tráfico mediante HTTPS/TLS, control de accesos con autenticación,
              proveedores de infraestructura con certificaciones de seguridad reconocidas
              y principio de minimización (solo recopilamos lo necesario). Ningún sistema
              es infalible, pero ante un incidente de seguridad que afecte tus datos
              actuaremos con diligencia para mitigarlo y te informaremos cuando
              corresponda.
            </p>
          </section>

          <section aria-labelledby="derechos">
            <h2 id="derechos" className={h2Cls}>11. Tus derechos</h2>
            <p className={pCls}>
              Como titular de los datos, tenés derecho a solicitar el{" "}
              <span className={strongCls}>acceso</span> a tus datos personales, y su{" "}
              <span className={strongCls}>rectificación, actualización o supresión</span>,
              así como a <span className={strongCls}>retirar tu consentimiento</span> y a{" "}
              <span className={strongCls}>oponerte</span> al uso de tus datos con fines
              publicitarios. Para ejercerlos, escribinos a contacto@rutia.com.ar
              indicando tu pedido; te responderemos dentro de los plazos legales.
            </p>
            <p className={pCls}>
              El titular de los datos personales tiene la facultad de ejercer el derecho
              de acceso a los mismos en forma gratuita a intervalos no inferiores a seis
              meses, salvo que se acredite un interés legítimo al efecto, conforme lo
              establecido en el artículo 14, inciso 3 de la Ley N.º 25.326.
            </p>
            <p className={pCls}>
              La Agencia de Acceso a la Información Pública, órgano de control de la Ley
              N.º 25.326, tiene la atribución de atender las denuncias y reclamos que se
              interpongan con relación al incumplimiento de las normas sobre protección
              de datos personales. Podés contactarla en{" "}
              <a
                href="https://www.argentina.gob.ar/aaip"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                www.argentina.gob.ar/aaip
              </a>.
            </p>
          </section>

          <section aria-labelledby="comunicaciones">
            <h2 id="comunicaciones" className={h2Cls}>12. Comunicaciones comerciales</h2>
            <p className={pCls}>
              Si nos dejaste tus datos, podremos enviarte información sobre Rutia por
              correo electrónico o WhatsApp. Todas nuestras comunicaciones comerciales
              incluirán una vía simple para dejar de recibirlas: respondé «BAJA» por
              WhatsApp o utilizá el enlace o la dirección de contacto indicada en el
              correo. Procesaremos tu baja sin demoras injustificadas.
            </p>
          </section>

          <section aria-labelledby="pi">
            <h2 id="pi" className={h2Cls}>13. Propiedad intelectual</h2>
            <p className={pCls}>
              El sitio, su diseño, su código, sus textos, su logotipo y demás contenidos
              son propiedad de Rutia o se utilizan bajo licencia, y están protegidos por
              la normativa de propiedad intelectual aplicable. No está permitida su
              reproducción, distribución o transformación sin autorización previa y por
              escrito, salvo los usos permitidos por la ley.
            </p>
          </section>

          <section aria-labelledby="responsabilidad">
            <h2 id="responsabilidad" className={h2Cls}>14. Exclusión y limitación de responsabilidad</h2>
            <p className={pCls}>
              El contenido de este sitio tiene fines informativos y comerciales. Rutia
              procura mantenerlo actualizado y disponible, pero no garantiza la ausencia
              de errores ni la disponibilidad ininterrumpida del sitio, y podrá
              modificarlo o suspenderlo sin previo aviso. Los enlaces a sitios de terceros
              se ofrecen para tu conveniencia: no controlamos su contenido ni sus
              prácticas de privacidad, y no asumimos responsabilidad por ellos.
            </p>
            <p className={pCls}>
              En la máxima medida permitida por la ley aplicable, Rutia no será
              responsable por daños indirectos derivados del uso del sitio. Nada en esta
              política limita derechos que la normativa argentina reconozca con carácter
              irrenunciable, incluidos los derechos de los consumidores.
            </p>
          </section>

          <section aria-labelledby="cambios">
            <h2 id="cambios" className={h2Cls}>15. Modificaciones de esta política</h2>
            <p className={pCls}>
              Podremos actualizar esta política para reflejar cambios normativos, nuevas
              funcionalidades o la incorporación de proveedores. Publicaremos siempre la
              versión vigente en esta página, con su fecha de última actualización. Si el
              cambio fuera sustancial, procuraremos comunicarlo por un medio destacado.
            </p>
          </section>

          <section aria-labelledby="ley">
            <h2 id="ley" className={h2Cls}>16. Legislación aplicable y jurisdicción</h2>
            <p className={pCls}>
              Esta política se rige por las leyes de la República Argentina, en particular
              la Ley N.º 25.326 y su normativa complementaria. Toda controversia se
              someterá a los tribunales ordinarios competentes de{" "}
              <Placeholder>jurisdicción — p. ej., Ciudad Autónoma de Buenos Aires</Placeholder>,
              sin perjuicio de las normas de orden público que establezcan una
              jurisdicción distinta.
            </p>
          </section>

          <section aria-labelledby="contacto-final">
            <h2 id="contacto-final" className={h2Cls}>17. Contacto</h2>
            <p className={pCls}>
              ¿Dudas sobre esta política o sobre tus datos? Escribinos a{" "}
              <a href="mailto:contacto@rutia.com.ar" className="font-medium text-primary hover:underline">
                contacto@rutia.com.ar
              </a>{" "}
              — respondemos rápido y en criollo.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-[13px] text-muted-foreground lg:px-0">
          <span>© 2026 Rutia — Buenos Aires, Argentina</span>
          <Link to="/" className="font-medium text-primary hover:underline">
            Volver a rutia.com.ar
          </Link>
        </div>
      </footer>
    </div>
  );
}
