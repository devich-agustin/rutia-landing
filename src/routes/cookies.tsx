import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, legal, legalHead, legalJsonLd } from "@/components/LegalLayout";

const META = {
  title: "Política de Cookies — Rutia",
  description:
    "Qué cookies utiliza rutia.com.ar (Google Analytics 4 y Meta Pixel), para qué sirven, cómo gestionarlas y cómo revocar el consentimiento.",
  path: "/cookies",
};

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => legalHead(META),
});

function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      updated="septiembre de 2026"
      jsonLd={legalJsonLd(META)}
      intro={
        <>
          Esta Política de Cookies aplica exclusivamente al sitio comercial{" "}
          <span className={legal.strong}>rutia.com.ar</span>. No aplica a la aplicación
          app.rutia.com.ar, cuyo uso está regulado por los Términos y Condiciones y la
          Política de Privacidad correspondientes.
        </>
      }
    >
      <section aria-labelledby="responsable">
        <h2 id="responsable" className={legal.h2}>1. Identificación del responsable</h2>
        <p className={legal.p}>
          <span className={legal.strong}>Agustín Ariel Devich</span>, con domicilio en
          Antezana 547, Piso 1, Dpto. B, Ciudad Autónoma de Buenos Aires, es titular del
          sitio web rutia.com.ar y responsable del tratamiento de los datos recabados a
          través de cookies y tecnologías similares en dicho sitio.
        </p>
        <p className={legal.p}>
          Contacto para consultas sobre esta política:{" "}
          <a href="mailto:legales@rutia.com.ar" className={legal.link}>legales@rutia.com.ar</a>.
        </p>
      </section>

      <section aria-labelledby="que-son">
        <h2 id="que-son" className={legal.h2}>2. Qué son las cookies</h2>
        <p className={legal.p}>
          Las cookies son pequeños archivos de texto que un sitio web instala en el
          dispositivo del visitante al navegarlo. Permiten, entre otras funciones,
          reconocer al usuario en visitas sucesivas, recordar sus preferencias y obtener
          información sobre el uso del sitio.
        </p>
      </section>

      <section aria-labelledby="categorias">
        <h2 id="categorias" className={legal.h2}>3. Categorías de cookies utilizadas</h2>

        <h3 className={legal.h3}>3.1. Cookies necesarias o técnicas</h3>
        <p className={legal.p}>
          Son indispensables para el funcionamiento básico del sitio, para la carga de
          elementos de la interfaz y la seguridad del sistema. No requieren consentimiento
          previo del usuario.
        </p>

        <h3 className={legal.h3}>3.2. Cookies de personalización o funcionales</h3>
        <p className={legal.p}>
          Permiten recordar parámetros seleccionados conscientemente por el usuario (por
          ejemplo, idioma o región). Requieren consentimiento previo.
        </p>

        <h3 className={legal.h3}>3.3. Cookies analíticas</h3>
        <p className={legal.p}>
          Utilizadas para medir el uso del sitio y elaborar estadísticas de navegación
          (páginas visitadas, tiempo de permanencia, errores).
        </p>
        <ul className={legal.ul}>
          <li>
            <span className={legal.strong}>Google Analytics 4:</span> medición de tráfico y
            comportamiento de navegación en el sitio.
          </li>
        </ul>

        <h3 className={legal.h3}>3.4. Cookies publicitarias o de marketing</h3>
        <p className={legal.p}>
          Utilizadas para medir la efectividad de campañas publicitarias de manera cruzada,
          crear perfiles de intereses y mostrar anuncios personalizados.
        </p>
        <ul className={legal.ul}>
          <li>
            <span className={legal.strong}>Meta Pixel:</span> medición y optimización de
            campañas publicitarias en plataformas de Meta.
          </li>
        </ul>

        <p className={legal.p}>
          Las cookies analíticas y publicitarias tienen una duración máxima de hasta 25
          meses, según la configuración vigente de cada proveedor.
        </p>
      </section>

      <section aria-labelledby="base-legal">
        <h2 id="base-legal" className={legal.h2}>4. Base legal del tratamiento</h2>
        <p className={legal.p}>
          El tratamiento de datos mediante cookies analíticas y publicitarias se basa en el{" "}
          <span className={legal.strong}>consentimiento previo, libre, específico e informado</span>{" "}
          del usuario, otorgado mediante el panel de configuración disponible al ingresar al
          sitio. Las cookies necesarias no requieren consentimiento por ser indispensables
          para el funcionamiento del sitio.
        </p>
      </section>

      <section aria-labelledby="terceros">
        <h2 id="terceros" className={legal.h2}>5. Terceros involucrados</h2>
        <p className={legal.p}>
          <span className={legal.strong}>Google (Google Analytics 4):</span> actúa como
          encargado del tratamiento respecto de los datos de navegación recabados con esta
          finalidad, conforme sus propios términos. Más información en{" "}
          <a href="https://policies.google.com/technologies/partner-sites" className={legal.link} target="_blank" rel="noopener noreferrer">
            políticas de Google
          </a>{" "}
          y{" "}
          <a href="https://policies.google.com/privacy" className={legal.link} target="_blank" rel="noopener noreferrer">
            privacidad de Google
          </a>.
        </p>
        <p className={legal.p}>
          <span className={legal.strong}>Meta (Meta Pixel):</span> para los datos de eventos
          generados por el píxel, Meta y Rutia pueden actuar conjuntamente respecto de
          determinados tratamientos, conforme los términos de Meta Business Tools. Más
          información en{" "}
          <a href="https://www.facebook.com/privacy/policies/cookies/" className={legal.link} target="_blank" rel="noopener noreferrer">
            la política de cookies de Meta
          </a>.
        </p>
      </section>

      <section aria-labelledby="gestionar">
        <h2 id="gestionar" className={legal.h2}>6. Cómo gestionar o revocar el consentimiento</h2>
        <p className={legal.p}>
          El usuario puede aceptar, rechazar o configurar sus preferencias de cookies por
          categoría al ingresar al sitio, mediante el panel de configuración disponible en el
          banner de cookies. Si el usuario rechaza una categoría de cookies no esenciales,
          cualquier cookie de esa categoría que hubiera comenzado a instalarse será eliminada
          del navegador.
        </p>
        <p className={legal.p}>
          En cualquier momento posterior, el usuario puede modificar su elección accediendo
          al pie de página del sitio, bajo el enlace{" "}
          <span className={legal.strong}>Preferencias de cookies</span>.
        </p>
        <p className={legal.p}>
          Adicionalmente, el usuario puede configurar su navegador para bloquear o eliminar
          cookies. Esta opción puede afectar el funcionamiento de determinadas secciones del
          sitio.
        </p>
      </section>

      <section aria-labelledby="transferencias">
        <h2 id="transferencias" className={legal.h2}>7. Transferencias internacionales</h2>
        <p className={legal.p}>
          Los proveedores mencionados en esta política pueden procesar datos en servidores
          ubicados fuera de la República Argentina, incluyendo Estados Unidos. El
          otorgamiento del consentimiento para el uso de estas cookies implica la aceptación
          de dicha transferencia internacional de datos.
        </p>
      </section>

      <section aria-labelledby="cambios">
        <h2 id="cambios" className={legal.h2}>8. Modificaciones a esta política</h2>
        <p className={legal.p}>
          Esta Política de Cookies puede actualizarse para reflejar cambios en las cookies
          utilizadas o en la normativa aplicable. Se recomienda su revisión periódica.
        </p>
      </section>
    </LegalLayout>
  );
}
