import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, legal, legalHead, legalJsonLd } from "@/components/LegalLayout";

const META = {
  title: "Aviso Legal — Rutia",
  description:
    "Información legal del sitio rutia.com.ar: titularidad, derechos de autor, marcas, responsabilidad y legislación aplicable.",
  path: "/aviso-legal",
};

export const Route = createFileRoute("/aviso-legal")({
  component: LegalNoticePage,
  head: () => legalHead(META),
});

function LegalNoticePage() {
  return (
    <LegalLayout
      title="Aviso Legal"
      updated="9 de julio de 2026"
      jsonLd={legalJsonLd(META)}
      intro={
        <>
          Este aviso identifica al titular del sitio{" "}
          <span className={legal.strong}>rutia.com.ar</span> y establece las condiciones
          básicas de su publicación, en cumplimiento de la normativa argentina aplicable.
        </>
      }
    >
      <section aria-labelledby="titular">
        <h2 id="titular" className={legal.h2}>1. Titular del sitio</h2>
        <ul className={legal.ul}>
          <li>
            <span className={legal.strong}>Titular:</span> Agustín Ariel Devich
          </li>
          <li>
            <span className={legal.strong}>CUIT:</span> 20-40253699-4
          </li>
          <li>
            <span className={legal.strong}>Domicilio:</span> Almagro, Ciudad Autónoma
            de Buenos Aires, República Argentina
          </li>
          <li>
            <span className={legal.strong}>Dominio:</span> rutia.com.ar
          </li>
          <li>
            <span className={legal.strong}>Contacto:</span>{" "}
            <a href="mailto:contacto@rutia.com.ar" className={legal.link}>
              contacto@rutia.com.ar
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="autor">
        <h2 id="autor" className={legal.h2}>2. Derechos de autor</h2>
        <p className={legal.p}>
          Los contenidos de este sitio —textos, diseño, código, imágenes e interfaces—
          son propiedad de Rutia o se utilizan bajo licencia, y están protegidos por la
          Ley N.º 11.723 de Propiedad Intelectual. Queda prohibida su reproducción,
          distribución o transformación sin autorización previa y por escrito, salvo los
          usos permitidos por la ley.
        </p>
      </section>

      <section aria-labelledby="marcas">
        <h2 id="marcas" className={legal.h2}>3. Uso de marcas</h2>
        <p className={legal.p}>
          «Rutia» y su isologotipo son signos distintivos de su titular. Las marcas,
          nombres comerciales y logotipos de terceros que puedan mencionarse en el sitio
          (por ejemplo, WhatsApp, Google o Meta) pertenecen a sus respectivos titulares y
          se citan únicamente con fines identificativos, sin que ello implique
          asociación, patrocinio ni aval.
        </p>
      </section>

      <section aria-labelledby="contenidos">
        <h2 id="contenidos" className={legal.h2}>4. Responsabilidad sobre los contenidos</h2>
        <p className={legal.p}>
          La información publicada tiene fines informativos y comerciales. Procuramos
          mantenerla exacta y actualizada, pero puede contener errores u omisiones
          involuntarios, y las características, planes y precios del producto pueden
          cambiar sin previo aviso. La información del sitio no constituye asesoramiento
          profesional ni oferta contractual vinculante.
        </p>
      </section>

      <section aria-labelledby="limitacion">
        <h2 id="limitacion" className={legal.h2}>5. Limitación de responsabilidad</h2>
        <p className={legal.p}>
          En la máxima medida permitida por la ley, Rutia no responde por daños derivados
          del uso del sitio o de la imposibilidad de acceder a él, ni por decisiones
          tomadas en base a su contenido. Esta limitación no alcanza los derechos
          irrenunciables que reconozca la normativa argentina, incluida la de defensa del
          consumidor cuando resulte aplicable.
        </p>
      </section>

      <section aria-labelledby="enlaces">
        <h2 id="enlaces" className={legal.h2}>6. Enlaces externos</h2>
        <p className={legal.p}>
          Los enlaces a sitios o servicios de terceros se ofrecen para tu conveniencia.
          No controlamos esos sitios ni respondemos por sus contenidos, disponibilidad o
          prácticas de privacidad.
        </p>
      </section>

      <section aria-labelledby="disponibilidad">
        <h2 id="disponibilidad" className={legal.h2}>7. Disponibilidad del sitio</h2>
        <p className={legal.p}>
          Podremos modificar, suspender o interrumpir el sitio, total o parcialmente, en
          cualquier momento y sin previo aviso, sin que ello genere derecho a reclamo o
          indemnización.
        </p>
      </section>

      <section aria-labelledby="ley">
        <h2 id="ley" className={legal.h2}>8. Legislación aplicable</h2>
        <p className={legal.p}>
          Este aviso legal se rige por las leyes de la República Argentina, con
          jurisdicción de los tribunales ordinarios competentes de la Ciudad Autónoma de
          Buenos Aires. Para todo lo
          no previsto aquí, resultan aplicables nuestros{" "}
          <a href="/terminos" className={legal.link}>Términos y Condiciones</a>, la{" "}
          <a href="/privacidad" className={legal.link}>Política de Privacidad</a> y la{" "}
          <a href="/cookies" className={legal.link}>Política de Cookies</a>.
        </p>
        <p className={legal.p}>
          <span className={legal.strong}>Historial de cambios:</span> v1.0 — 9 de julio
          de 2026: versión inicial.
        </p>
      </section>
    </LegalLayout>
  );
}
