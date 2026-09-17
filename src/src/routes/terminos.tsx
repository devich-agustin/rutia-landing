import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, legal, legalHead, legalJsonLd } from "@/components/LegalLayout";

const META = {
  title: "Términos y Condiciones — Rutia",
  description:
    "Condiciones de uso del sitio rutia.com.ar: uso permitido, propiedad intelectual, responsabilidad y ley aplicable en Argentina.",
  path: "/terminos",
};

export const Route = createFileRoute("/terminos")({
  component: TermsPage,
  head: () => legalHead(META),
});

function TermsPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      updated="9 de julio de 2026"
      jsonLd={legalJsonLd(META)}
      intro={
        <>
          Estos términos regulan el acceso y uso del sitio{" "}
          <span className={legal.strong}>rutia.com.ar</span>. Al navegar el sitio o
          utilizar sus canales de contacto, aceptás estas condiciones. Si no estás de
          acuerdo con ellas, te pedimos que no utilices el sitio.
        </>
      }
    >
      <section aria-labelledby="objeto">
        <h2 id="objeto" className={legal.h2}>1. Objeto del sitio</h2>
        <p className={legal.p}>
          El sitio tiene por objeto presentar Rutia, un software de gestión de entregas
          para pequeñas y medianas empresas, brindar información sobre sus
          funcionalidades y planes, y ofrecer canales para solicitar una demostración o
          ponerse en contacto con nosotros. El sitio es operado por{" "}
          <span className={legal.strong}>Agustín Ariel Devich</span>, CUIT 20-40253699-4,
          con domicilio en Almagro, Ciudad Autónoma de Buenos Aires, República Argentina
          («Rutia», «nosotros»).
        </p>
      </section>

      <section aria-labelledby="definiciones">
        <h2 id="definiciones" className={legal.h2}>2. Definiciones</h2>
        <ul className={legal.ul}>
          <li>
            <span className={legal.strong}>«Sitio»:</span> el sitio web disponible en
            rutia.com.ar y sus subdominios.
          </li>
          <li>
            <span className={legal.strong}>«Usuario» o «vos»:</span> toda persona que
            accede o navega el Sitio, complete o no sus formularios.
          </li>
          <li>
            <span className={legal.strong}>«Servicio» o «Plataforma»:</span> el software
            de gestión de entregas que Rutia comercializa o comercialice en el futuro,
            cuyo uso podrá regirse por términos de servicio específicos.
          </li>
          <li>
            <span className={legal.strong}>«Contenido»:</span> los textos, imágenes,
            marcas, logotipos, capturas, diseños y código que componen el Sitio.
          </li>
        </ul>
      </section>

      <section aria-labelledby="uso-permitido">
        <h2 id="uso-permitido" className={legal.h2}>3. Uso permitido</h2>
        <p className={legal.p}>
          Podés usar el Sitio para informarte sobre Rutia, evaluar si el Servicio se
          ajusta a tu empresa, solicitar una demostración y comunicarte con nosotros por
          los canales publicados. El uso del Sitio es gratuito y no requiere registro.
        </p>
      </section>

      <section aria-labelledby="uso-prohibido">
        <h2 id="uso-prohibido" className={legal.h2}>4. Uso prohibido</h2>
        <p className={legal.p}>Al usar el Sitio te comprometés a no:</p>
        <ul className={legal.ul}>
          <li>Utilizarlo con fines ilícitos o contrarios a estos términos.</li>
          <li>
            Intentar vulnerar su seguridad, acceder sin autorización a sistemas o datos,
            o interferir con su funcionamiento (incluyendo ataques de denegación de
            servicio, inyección de código o uso de vulnerabilidades).
          </li>
          <li>
            Realizar extracción masiva o automatizada de contenidos (scraping) sin
            autorización previa y por escrito.
          </li>
          <li>
            Enviar a través de los formularios o canales de contacto información falsa,
            datos de terceros sin su consentimiento, o contenido ofensivo, difamatorio o
            que infrinja derechos de terceros.
          </li>
          <li>
            Realizar ingeniería inversa, descompilar o intentar derivar el código fuente
            del Sitio o del Servicio, salvo en la medida en que la ley lo permita
            expresamente.
          </li>
          <li>Suplantar la identidad de otra persona o de Rutia.</li>
        </ul>
        <p className={legal.p}>
          Nos reservamos el derecho de restringir el acceso al Sitio ante usos que
          consideremos abusivos, y de denunciar ante las autoridades competentes las
          conductas que puedan constituir delito.
        </p>
      </section>

      <section aria-labelledby="registro">
        <h2 id="registro" className={legal.h2}>5. Registro de usuarios</h2>
        <p className={legal.p}>
          Actualmente el Sitio no ofrece la creación de cuentas de usuario. Cuando la
          Plataforma esté disponible, el acceso al Servicio podrá requerir un registro,
          que se regirá por términos de servicio específicos que publicaremos en su
          momento e incluirán, entre otros aspectos, las condiciones de contratación,
          precios, soporte y tratamiento de los datos cargados en la Plataforma. Nada de
          lo dispuesto en estos términos implica que dichas funcionalidades estén hoy
          operativas.
        </p>
        <h3 className={legal.h3}>Funcionalidades beta</h3>
        <p className={legal.p}>
          Rutia podrá ofrecer funcionalidades identificadas como «beta», «piloto» o «en
          prueba». De existir, se brindarían «tal como están», con fines de evaluación,
          pudiendo modificarse o discontinuarse en cualquier momento y sin las garantías
          aplicables a las funcionalidades estables.
        </p>
        <h3 className={legal.h3}>APIs</h3>
        <p className={legal.p}>
          Rutia podrá ofrecer en el futuro interfaces de programación (APIs) para
          integrarse con otros sistemas. Su eventual uso estará sujeto a términos,
          límites y credenciales específicos que se publicarían en su momento. Hoy no
          existe una API pública disponible.
        </p>
      </section>

      <section aria-labelledby="formularios">
        <h2 id="formularios" className={legal.h2}>6. Formularios de contacto</h2>
        <p className={legal.p}>
          El Sitio incluye un formulario para solicitar una demostración y enlaces de
          contacto por correo electrónico y WhatsApp. Al utilizarlos, declarás que la
          información que suministrás es veraz y propia. El tratamiento de los datos
          personales que nos facilites se rige por nuestra{" "}
          <a href="/privacidad" className={legal.link}>Política de Privacidad</a>. El
          envío de una consulta o solicitud de demo no genera por sí solo ninguna
          relación contractual ni obligación de contratación para ninguna de las partes.
        </p>
      </section>

      <section aria-labelledby="feedback">
        <h2 id="feedback" className={legal.h2}>7. Sugerencias y feedback</h2>
        <p className={legal.p}>
          Si nos hacés llegar ideas, sugerencias o comentarios sobre Rutia, nos otorgás
          una autorización gratuita, no exclusiva y sin límite temporal para usarlos en
          la mejora del Sitio y del Servicio, sin que ello genere obligación de
          compensación ni de implementación. No envíes información que consideres
          confidencial.
        </p>
      </section>

      <section aria-labelledby="pi">
        <h2 id="pi" className={legal.h2}>8. Propiedad intelectual</h2>
        <p className={legal.p}>
          El Contenido del Sitio —incluyendo la marca Rutia, su isologotipo, los textos,
          el diseño, las interfaces mostradas y el código— es propiedad de Rutia o se
          utiliza bajo licencia, y está protegido por la Ley N.º 11.723 de Propiedad
          Intelectual, la Ley N.º 22.362 de Marcas y demás normativa aplicable. No está
          permitida su reproducción, distribución, comunicación pública o transformación
          sin autorización previa y por escrito, salvo los usos permitidos por la ley
          (como la cita con indicación de fuente). Las marcas de terceros mencionadas en
          el Sitio pertenecen a sus respectivos titulares.
        </p>
      </section>

      <section aria-labelledby="disponibilidad">
        <h2 id="disponibilidad" className={legal.h2}>9. Disponibilidad y mantenimiento</h2>
        <p className={legal.p}>
          Procuramos que el Sitio esté disponible de forma continua, pero no garantizamos
          su funcionamiento ininterrumpido ni libre de errores, ni asumimos niveles de
          disponibilidad (SLA) salvo acuerdo expreso y por escrito. Podremos realizar
          tareas de mantenimiento programado o de emergencia —procurando, cuando sea
          posible, hacerlas en horarios de bajo uso— y suspender temporalmente el acceso
          por actualizaciones o causas ajenas a nuestro control, sin que ello genere
          derecho a indemnización.
        </p>
      </section>

      <section aria-labelledby="garantias">
        <h2 id="garantias" className={legal.h2}>10. Exclusión de garantías</h2>
        <p className={legal.p}>
          El Sitio y su Contenido se ofrecen «tal como están», con fines informativos y
          comerciales. La información sobre funcionalidades, planes y precios es
          orientativa y puede modificarse sin previo aviso; las condiciones aplicables a
          una eventual contratación del Servicio serán las que se acuerden expresamente
          en ese momento. Nada de lo anterior limita las garantías que resulten
          irrenunciables conforme a la normativa argentina de defensa del consumidor,
          cuando ésta resulte aplicable.
        </p>
      </section>

      <section aria-labelledby="responsabilidad">
        <h2 id="responsabilidad" className={legal.h2}>11. Limitación de responsabilidad</h2>
        <p className={legal.p}>
          En la máxima medida permitida por la ley aplicable, Rutia no será responsable
          por daños indirectos, lucro cesante o pérdida de datos derivados del uso o la
          imposibilidad de uso del Sitio, ni por decisiones adoptadas sobre la base de la
          información publicada en él. Esta limitación no alcanza los supuestos de dolo o
          culpa grave, ni los derechos que la Ley N.º 24.240 de Defensa del Consumidor y
          normas concordantes reconozcan con carácter de orden público.
        </p>
      </section>

      <section aria-labelledby="fuerza-mayor">
        <h2 id="fuerza-mayor" className={legal.h2}>12. Fuerza mayor</h2>
        <p className={legal.p}>
          Rutia no será responsable por incumplimientos o demoras causados por hechos de
          caso fortuito o fuerza mayor en los términos del Código Civil y Comercial de la
          Nación, incluyendo —a título de ejemplo— fallas generalizadas de
          infraestructura de internet o de proveedores, cortes de energía, ciberataques
          de terceros, desastres naturales o actos de autoridad.
        </p>
      </section>

      <section aria-labelledby="enlaces">
        <h2 id="enlaces" className={legal.h2}>13. Enlaces a sitios de terceros</h2>
        <p className={legal.p}>
          El Sitio contiene enlaces a servicios de terceros (por ejemplo, WhatsApp,
          Instagram, LinkedIn o Facebook). No controlamos esos sitios ni sus prácticas, y
          no asumimos responsabilidad por sus contenidos, políticas o funcionamiento. El
          acceso a ellos es bajo tu exclusiva responsabilidad y se rige por sus propios
          términos.
        </p>
      </section>

      <section aria-labelledby="cambios-servicio">
        <h2 id="cambios-servicio" className={legal.h2}>14. Cambios en el Servicio</h2>
        <p className={legal.p}>
          Rutia es un producto en evolución. Podremos modificar, ampliar o discontinuar
          funcionalidades, planes y precios del Servicio en cualquier momento. Los
          cambios que afecten contrataciones vigentes, cuando existan, se regirán por los
          términos de servicio aplicables a esas contrataciones.
        </p>
      </section>

      <section aria-labelledby="cambios-terminos">
        <h2 id="cambios-terminos" className={legal.h2}>15. Modificaciones e historial</h2>
        <p className={legal.p}>
          Podremos actualizar estos términos para reflejar cambios normativos o del
          Sitio. La versión vigente, con su fecha de última actualización, estará siempre
          publicada en esta página. El uso del Sitio con posterioridad a la publicación
          de los cambios implica su aceptación.
        </p>
        <p className={legal.p}>
          <span className={legal.strong}>Historial de cambios:</span> v1.0 — 9 de julio
          de 2026: versión inicial.
        </p>
      </section>

      <section aria-labelledby="ley">
        <h2 id="ley" className={legal.h2}>16. Ley aplicable y jurisdicción</h2>
        <p className={legal.p}>
          Estos términos se rigen por las leyes de la República Argentina. Toda
          controversia derivada de su interpretación o cumplimiento se someterá a los
          tribunales ordinarios competentes de la Ciudad Autónoma de Buenos Aires,
          República Argentina, sin perjuicio de las normas de orden público —incluidas las de defensa del
          consumidor— que establezcan una jurisdicción distinta.
        </p>
      </section>

      <section aria-labelledby="contacto">
        <h2 id="contacto" className={legal.h2}>17. Contacto</h2>
        <p className={legal.p}>
          Contacto legal y consultas sobre estos términos:{" "}
          <a href="mailto:contacto@rutia.com.ar" className={legal.link}>
            contacto@rutia.com.ar
          </a>{" "}
          o por WhatsApp al +54 9 11 7824-2630.
        </p>
      </section>
    </LegalLayout>
  );
}
