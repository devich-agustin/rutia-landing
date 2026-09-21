import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Rutia" },
      {
        name: "description",
        content:
          "Cómo Rutia recopila, usa y protege los datos personales conforme a la Ley 25.326 de Argentina.",
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
              Última actualización: septiembre de 2026
            </p>
            <p className={pCls}>
              En Rutia nos tomamos en serio la privacidad. Esta política explica qué datos
              personales tratamos a través de la aplicación{" "}
              <span className={strongCls}>app.rutia.com.ar</span> y del sitio comercial{" "}
              <span className={strongCls}>rutia.com.ar</span>, para qué los usamos, con
              quién los compartimos y qué derechos tenés sobre ellos, conforme a la Ley
              N.º 25.326 de Protección de los Datos Personales.
            </p>
          </header>

          <section aria-labelledby="responsable">
            <h2 id="responsable" className={h2Cls}>1. Identificación del responsable</h2>
            <p className={pCls}>
              <span className={strongCls}>Agustín Ariel Devich</span>, con domicilio en
              Antezana 547, Piso 1, Dpto. B, Ciudad Autónoma de Buenos Aires, es
              responsable del tratamiento de los datos personales descriptos en esta
              Política, respecto de los usuarios del sistema y choferes/repartidores
              registrados en Rutia.
            </p>
            <p className={pCls}>
              Respecto de los datos de destinatarios/clientes finales cargados por las
              empresas usuarias, el tratamiento se rige adicionalmente por el Acuerdo de
              Encargado de Tratamiento suscripto entre Rutia y cada empresa usuaria,
              siendo esta última responsable de dichos datos.
            </p>
            <p className={pCls}>
              Contacto para consultas y ejercicio de derechos:{" "}
              <a href="mailto:legales@rutia.com.ar" className={linkCls}>
                legales@rutia.com.ar
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="alcance">
            <h2 id="alcance" className={h2Cls}>2. Alcance</h2>
            <p className={pCls}>
              Esta Política de Privacidad aplica a los datos personales tratados a través
              de la aplicación app.rutia.com.ar y del sitio comercial rutia.com.ar. El uso
              de cookies en este último se rige, además, por la{" "}
              <a href="/cookies" className={linkCls}>Política de Cookies</a>.
            </p>
          </section>

          <section aria-labelledby="datos">
            <h2 id="datos" className={h2Cls}>3. Datos que recopilamos</h2>
            <h3 className={h3Cls}>3.1. De los usuarios del sistema (empresas y sus perfiles)</h3>
            <p className={pCls}>
              Recopilamos: nombre, email, empresa a la que pertenecen, rol y permisos,
              estado de la cuenta, información relacionada con autenticación y sesiones, y
              actividad necesaria para seguridad, historial y auditoría. Las contraseñas
              son gestionadas por el proveedor de autenticación; Rutia no las almacena en
              sus propias tablas.
            </p>
            <h3 className={h3Cls}>3.2. De choferes/repartidores</h3>
            <p className={pCls}>
              Recopilamos: nombre y apellido, teléfono, email, documento, legajo,
              vehículo/asignaciones, entregas realizadas, resultados e incidencias, y
              vencimientos relacionados con su documentación.
            </p>
            <h3 className={h3Cls}>3.3. De destinatarios/clientes finales de las empresas usuarias</h3>
            <p className={pCls}>
              Recopilamos: nombre o razón social, teléfono, email, documento, domicilio de
              entrega, coordenadas geográficas, datos del pedido, y el historial y
              resultado de la entrega. Estos datos son cargados por la empresa usuaria, que
              actúa como responsable de dicho tratamiento (aplica el Acuerdo de Encargado
              de Tratamiento celebrado entre Rutia y la empresa responsable).
            </p>
            <h3 className={h3Cls}>3.4. De visitantes y contactos comerciales del sitio rutia.com.ar</h3>
            <p className={pCls}>
              Recopilamos: nombre, email, y la información que la persona complete
              voluntariamente al solicitar una demostración o agendar una reunión comercial
              a través del sitio.
            </p>
          </section>

          <section aria-labelledby="finalidad">
            <h2 id="finalidad" className={h2Cls}>4. Finalidad del tratamiento</h2>
            <p className={pCls}>
              Los datos se utilizan para: permitir el acceso y uso del sistema, organizar
              pedidos y entregas, asignar recursos (choferes, vehículos), geolocalizar
              direcciones, notificar a destinatarios (en nombre de la empresa usuaria),
              registrar el resultado de las entregas, generar reportes e indicadores,
              mantener la seguridad y el historial operativo del sistema, y atender
              solicitudes de demostración y consultas comerciales.
            </p>
            <p className={pCls}>
              Rutia no tiene como finalidad vender los datos personales tratados ni
              comercializarlos con terceros.
            </p>
          </section>

          <section aria-labelledby="base-legal">
            <h2 id="base-legal" className={h2Cls}>5. Base legal del tratamiento</h2>
            <p className={pCls}>
              El tratamiento se funda en la ejecución del contrato celebrado con el usuario
              o la empresa usuaria, y en el consentimiento otorgado al momento del registro
              y aceptación de los Términos y Condiciones correspondientes.
            </p>
          </section>

          <section aria-labelledby="comunicaciones-dest">
            <h2 id="comunicaciones-dest" className={h2Cls}>6. Comunicaciones a destinatarios finales</h2>
            <p className={pCls}>
              Rutia puede enviar comunicaciones a los destinatarios de un pedido (por
              ejemplo, aviso de «pedido en camino» o solicitud de reseña), actuando en
              todos los casos en nombre y por cuenta de la empresa usuaria, no en nombre
              propio.
            </p>
          </section>

          <section aria-labelledby="proveedores">
            <h2 id="proveedores" className={h2Cls}>7. Proveedores externos (subencargados y terceros)</h2>
            <p className={pCls}>
              Para prestar el servicio, Rutia se apoya en los proveedores identificados en
              el Anexo I de esta Política.
            </p>
          </section>

          <section aria-labelledby="transferencias">
            <h2 id="transferencias" className={h2Cls}>8. Transferencias internacionales de datos</h2>
            <p className={pCls}>
              Los proveedores mencionados en el Anexo I procesan datos personales en
              servidores ubicados fuera de la República Argentina, principalmente en
              Estados Unidos. Conforme al artículo 12 de la Ley N.º 25.326, el uso del
              servicio implica el consentimiento del titular de los datos para dicha
              transferencia internacional.
            </p>
          </section>

          <section aria-labelledby="retencion">
            <h2 id="retencion" className={h2Cls}>9. Retención y eliminación de datos</h2>
            <p className={pCls}>
              Los datos se conservan mientras dure la relación con la empresa usuaria.
              Solicitada la baja del servicio por parte de la empresa, los datos se
              conservarán durante 60 (sesenta) días corridos, transcurridos los cuales se
              procederá a su eliminación o anonimización, salvo aquellos que deban
              conservarse por obligaciones legales, fiscales, contractuales, o para la
              defensa ante reclamos.
            </p>
            <p className={pCls}>
              Los proveedores mencionados en el Anexo I pueden conservar copias de
              seguridad por plazos propios adicionales (entre 7 y 90 días según el
              proveedor), tras los cuales dichas copias se sobrescriben en el curso normal
              de su rotación técnica.
            </p>
          </section>

          <section aria-labelledby="derechos">
            <h2 id="derechos" className={h2Cls}>10. Derechos del titular de los datos</h2>
            <p className={pCls}>
              Conforme a la Ley N.º 25.326, el titular de los datos personales tiene
              derecho a:
            </p>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Acceso:</span> solicitar y obtener información
                sobre sus datos personales, dentro de un plazo de 10 (diez) días corridos
                desde la intimación fehaciente (art. 14).
              </li>
              <li>
                <span className={strongCls}>Rectificación, actualización o supresión:</span>{" "}
                solicitar la corrección, actualización o eliminación de sus datos, dentro
                de un plazo de 5 (cinco) días hábiles desde el reclamo (art. 16).
              </li>
              <li>
                <span className={strongCls}>Confidencialidad y oposición,</span> en los
                casos previstos por la normativa vigente.
              </li>
            </ul>
            <p className={pCls}>
              Para ejercer estos derechos, el titular puede dirigirse a{" "}
              <a href="mailto:legales@rutia.com.ar" className={linkCls}>legales@rutia.com.ar</a>.
              Si el titular de los datos es un destinatario final de una empresa usuaria, se
              recomienda dirigir la solicitud en primer término a dicha empresa, sin
              perjuicio de que Rutia colabore con el trámite conforme lo previsto en el
              Acuerdo de Encargado de Tratamiento correspondiente.
            </p>
            <p className={pCls}>
              El titular tiene además derecho a interponer una denuncia ante la Agencia de
              Acceso a la Información Pública (AAIP), autoridad de control de la Ley N.º
              25.326, en caso de considerar vulnerados sus derechos.
            </p>
          </section>

          <section aria-labelledby="seguridad">
            <h2 id="seguridad" className={h2Cls}>11. Seguridad de los datos</h2>
            <p className={pCls}>
              Rutia adopta medidas técnicas y organizativas destinadas a proteger los datos
              personales conforme al artículo 9.º de la Ley N.º 25.326: autenticación de
              usuarios mediante Supabase Auth, con controles de acceso segmentados por
              empresa y rol, incluyendo separación de información a nivel de base de datos y
              backend mediante políticas de seguridad (Row Level Security), validaciones de
              membresía, empresa activa y permisos.
            </p>
            <p className={pCls}>
              Los archivos sensibles (evidencias de entregas, documentación) se almacenan
              de forma privada, con acceso sujeto a autorización. Las operaciones sensibles
              cuentan con validaciones del lado del servidor, sanitización de errores,
              controles de idempotencia y límites de uso.
            </p>
            <p className={pCls}>
              El panel administrativo tiene acceso restringido, requiere autenticación
              multifactor (MFA) y registra las acciones administrativas relevantes. Las
              comunicaciones utilizan HTTPS. Se complementa con las medidas de seguridad
              provistas por los proveedores de infraestructura (Supabase, Vercel,
              Cloudflare). Se mantienen backups de base de datos provistos por Supabase, y
              un respaldo externo diario de los archivos almacenados hacia Cloudflare R2.
            </p>
          </section>

          <section aria-labelledby="menores">
            <h2 id="menores" className={h2Cls}>12. Menores de edad</h2>
            <p className={pCls}>
              Rutia no está dirigido a menores de edad. El acceso al sistema como usuario,
              chofer/repartidor, o representante de una empresa usuaria requiere ser mayor
              de edad, conforme lo previsto en los Términos y Condiciones.
            </p>
            <p className={pCls}>
              Respecto de los datos de destinatarios finales cargados por las empresas
              usuarias, en caso de que Rutia tome conocimiento de que se han incorporado
              datos personales de un menor de edad sin la intervención de quien ejerza su
              responsabilidad parental, procederá a su eliminación, sin perjuicio de la
              responsabilidad que corresponda a la empresa usuaria que los haya cargado.
            </p>
          </section>

          <section aria-labelledby="cambios">
            <h2 id="cambios" className={h2Cls}>13. Modificaciones a esta Política</h2>
            <p className={pCls}>
              Esta Política puede actualizarse para reflejar cambios en el servicio o en la
              normativa aplicable. Se notificará a los usuarios ante modificaciones
              sustanciales.
            </p>
          </section>

          <section aria-labelledby="contacto">
            <h2 id="contacto" className={h2Cls}>14. Contacto</h2>
            <p className={pCls}>
              Para consultas sobre esta Política o el tratamiento de datos personales:{" "}
              <a href="mailto:legales@rutia.com.ar" className={linkCls}>legales@rutia.com.ar</a>.
            </p>
          </section>

          <section aria-labelledby="anexo">
            <h2 id="anexo" className={h2Cls}>Anexo I — Proveedores externos</h2>
            <p className={pCls}>
              Este Anexo puede actualizarse sin necesidad de modificar el cuerpo de esta
              Política, notificándose los cambios sustanciales conforme la cláusula 13.
            </p>
            <ul className={ulCls}>
              <li>
                <span className={strongCls}>Supabase</span> — Base de datos, autenticación,
                almacenamiento, backend. Rol: encargado/subencargado.
              </li>
              <li>
                <span className={strongCls}>Vercel</span> — Hosting de la aplicación y el
                sitio. Rol: encargado/subencargado.
              </li>
              <li>
                <span className={strongCls}>Resend</span> — Envío de emails relacionados con
                las entregas. Rol: encargado/subencargado.
              </li>
              <li>
                <span className={strongCls}>Google Maps Platform</span> — Geocodificación de
                direcciones. Rol: responsable independiente (no subencargado); recibe
                únicamente componentes de la dirección, sin datos identificatorios de la
                persona.
              </li>
              <li>
                <span className={strongCls}>Formspree</span> — Formulario comercial de
                solicitud de demostración del sitio. Rol: encargado/subencargado (sus
                términos contemplan un supuesto de co-responsabilidad en determinados
                casos).
              </li>
              <li>
                <span className={strongCls}>Calendly</span> — Reserva de
                reuniones/demostraciones comerciales. Rol: encargado/subencargado.
              </li>
            </ul>
            <p className={pCls}>
              Más información sobre el tratamiento de datos por parte de Google Maps
              Platform:{" "}
              <a
                href="https://cloud.google.com/maps-platform/terms/maps-controller-terms"
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                términos de Google Maps Platform
              </a>
              . Última actualización de este Anexo: septiembre de 2026.
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
