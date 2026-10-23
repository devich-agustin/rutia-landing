/**
 * Preguntas frecuentes de /preguntas-frecuentes.
 *
 * Regla: cada respuesta tiene que estar respaldada por una funcionalidad real
 * que ya se comunica en el sitio (home, /software-de-reparto o páginas por
 * rubro). No agregar promesas de funciones futuras.
 */
import { PRICING_FAQ_ANSWER } from "@/content/planes";

export type FaqLink = { href: string; label: string };

export type FaqItem = {
  q: string;
  a: string;
  link?: FaqLink;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "que-es-rutia",
    title: "Qué es Rutia y para quién está pensado",
    items: [
      {
        q: "¿Qué es Rutia?",
        a: "Rutia es un software de gestión de entregas para PyMEs. Reúne en un solo lugar los pedidos, la preparación en depósito, los vehículos, los choferes y los fletes, para que todo el equipo sepa qué sale, quién lo lleva y qué pasó con cada entrega.",
        link: {
          href: "/software-de-reparto",
          label: "Conocé el software de reparto",
        },
      },
      {
        q: "¿Para qué tipo de empresas sirve?",
        a: "Para empresas que entregan lo que venden con vehículos propios, fletes contratados o ambos: mueblerías, colchonerías, casas de electrodomésticos, ferreterías, corralones, casas de materiales, distribuidoras, bicicleterías, comercios de iluminación y e-commerce con reparto propio. No importa si hacés pocas o muchas entregas por mes: lo importante es que entregues lo que vendés, con reparto propio o contratado.",
      },
      {
        q: "¿Sirve para una PyME chica?",
        a: "Sí. Rutia también está pensado para negocios que realizan pocas entregas. Si hacés 20, 50 u 80 entregas al mes, podés usarlo perfectamente. El plan Inicial incluye hasta 150 entregas mensuales.",
      },
      {
        q: "¿Reemplaza mi sistema de facturación o de stock?",
        a: "No. Rutia se ocupa de las entregas y convive con lo que ya usás para vender, facturar y controlar stock.",
      },
      {
        q: "¿Gestiona cobranza, facturación o cuentas corrientes?",
        a: "No. Rutia se enfoca en la operación de entregas: desde el pedido pendiente hasta el resultado de cada visita.",
      },
    ],
  },
  {
    id: "pedidos-y-planificacion",
    title: "Pedidos y planificación de entregas",
    items: [
      {
        q: "¿Cómo cargo los pedidos?",
        a: "Podés cargarlos a mano, por ejemplo los que llegan por teléfono o por mostrador, o importar varios a la vez desde Excel con la plantilla de Rutia.",
        link: {
          href: "/blog/como-importar-pedidos-excel-sin-cargar-a-mano",
          label: "Cómo importar pedidos desde Excel",
        },
      },
      {
        q: "¿Rutia se integra con Mercado Libre?",
        a: "Sí, la integración con Mercado Libre ya está disponible. Conectás tu cuenta vendedora y gestionás esos pedidos y sus entregas desde Rutia, junto con los que cargás a mano o importás desde Excel.",
        link: {
          href: "/logistica-para-ecommerce",
          label: "Logística para e-commerce con reparto propio",
        },
      },
      {
        q: "¿Se integra con Tiendanube, Empretienda o Tienda Negocio?",
        a: "Estamos trabajando en nuevas integraciones con Tiendanube, Empretienda y Tienda Negocio. Próximamente estarán disponibles. Mientras tanto, podés cargar tus pedidos manualmente o importarlos desde Excel.",
      },
      {
        q: "¿Puedo ver cuántas entregas tengo cada día?",
        a: "Sí. El calendario de entregas muestra la cantidad de entregas por día para que detectes los días sobrecargados antes de que sean un problema.",
      },
      {
        q: "¿Puedo registrar la fecha y el horario acordados con el cliente?",
        a: "Sí. Cada entrega se programa para una fecha y una franja horaria, y puede reprogramarse si cambia.",
      },
      {
        q: "¿Cómo sabe el depósito qué tiene que preparar?",
        a: "La etapa de preparación muestra qué pedidos hay que preparar y permite marcarlos como listos antes de incluirlos en la salida.",
      },
      {
        q: "¿Puedo agregar entregas a un día que ya está armado?",
        a: "Sí. Podés registrar cambios y reorganizar el trabajo manteniendo la información de cada pedido.",
      },
    ],
  },
  {
    id: "vehiculos-y-choferes",
    title: "Rutas, vehículos y choferes",
    items: [
      {
        q: "¿Funciona con vehículos propios y fletes contratados?",
        a: "Sí. Podés asignar cada entrega a vehículos propios, a fletes contratados o combinar ambos, y repartir con camión, camioneta, moto o lo que uses.",
        link: {
          href: "/blog/organizar-entregas-vehiculos-propios-fletes-contratados",
          label: "Cómo organizar vehículos propios y fletes",
        },
      },
      {
        q: "¿Cómo se arma el día de entregas?",
        a: "En el armado del día arrastrás y soltás cada entrega al camión, la camioneta, la moto o el flete que corresponda. Así todos saben qué sale, con quién y en qué orden.",
      },
      {
        q: "¿Puedo organizar varios choferes en una misma jornada?",
        a: "Sí. Podés asignar entregas a distintos choferes, vehículos y recursos contratados.",
      },
      {
        q: "¿Los choferes tienen que instalar una aplicación?",
        a: "No. Choferes propios, cadetes o fletes abren sus entregas desde el navegador del celular que ya tienen.",
      },
      {
        q: "¿Rutia optimiza las rutas automáticamente?",
        a: "No. Tu equipo define el armado y el orden de las entregas; Rutia centraliza las entregas, las asignaciones y sus resultados.",
      },
      {
        q: "¿Calcula el peso o la capacidad del vehículo?",
        a: "No. Rutia no calcula peso, volumen ni cubicaje: la asignación de cada entrega la decide tu equipo.",
      },
    ],
  },
  {
    id: "seguimiento-y-registro",
    title: "Seguimiento y registro de entregas",
    items: [
      {
        q: "¿Cómo sé qué pasó con cada entrega?",
        a: "Quien reparte marca cada entrega desde su celular como entregada, parcial o fallida, y vos ves el estado desde el tablero a medida que se actualiza.",
      },
      {
        q: "¿Qué queda registrado sobre quién recibió?",
        a: "Al registrar la entrega, quien reparte anota el nombre de quien recibe y puede agregar observaciones. Además, si usás la función de comprobante digital, puede adjuntar fotos y la firma de quien recibe como prueba de entrega.",
      },
      {
        q: "¿Necesito GPS o rastreo satelital?",
        a: "No. El estado de cada entrega se actualiza cuando quien reparte lo marca desde su celular, sin instalar equipos en los vehículos.",
        link: {
          href: "/blog/seguimiento-entregas-sin-gps-tiempo-real",
          label: "Seguimiento de entregas sin GPS",
        },
      },
      {
        q: "¿Qué pasa si el cliente no está o la dirección es incorrecta?",
        a: "Se registra la incidencia con su motivo y la entrega queda disponible para reprogramarla, sin perder su historial.",
        link: {
          href: "/blog/como-manejar-reprogramaciones-sin-perder-pedidos",
          label: "Cómo manejar reprogramaciones",
        },
      },
      {
        q: "¿Puedo consultar una entrega vieja si un cliente reclama?",
        a: "Sí. Cada entrega guarda su historia: quién la cargó, la preparó y la llevó, qué pasó y cuándo.",
      },
    ],
  },
  {
    id: "implementacion",
    title: "Implementación y requisitos técnicos",
    items: [
      {
        q: "¿Tengo que instalar algo?",
        a: "No. Rutia funciona desde el navegador, en cualquier computadora, y los choferes la usan desde el celular. No hay nada que instalar ni mantener.",
      },
      {
        q: "¿Es difícil de aprender?",
        a: "No. Rutia está diseñado para ser simple e intuitivo, para que todo el equipo lo adopte sin complicaciones: si sabés usar WhatsApp, vas a sentirte cómodo. Y te acompañamos en la puesta en marcha.",
      },
      {
        q: "¿Puedo trabajar con más de un depósito?",
        a: "Sí. Podés registrar varios puntos de retiro, como depósitos, una fábrica o un centro de distribución, y elegir desde cuál sale cada recorrido. Está incluido en todos los planes.",
      },
      {
        q: "¿Qué soporte tengo?",
        a: "Todos los planes incluyen soporte por WhatsApp. El plan Empresa cuenta con soporte prioritario.",
      },
    ],
  },
  {
    id: "prueba-y-contratacion",
    title: "Prueba gratuita, demos y contratación",
    items: [
      {
        q: "¿Puedo probar Rutia gratis?",
        a: "Sí. Podés probar Rutia gratis durante 1 mes para conocer cómo funciona en tu operación, sin cargar un medio de pago.",
      },
      {
        q: "¿Cómo es la demo?",
        a: "Es una reunión de 30 minutos: nos contás cómo trabajás, te mostramos Rutia funcionando con entregas como las tuyas y vemos juntos si te sirve. No tiene costo ni compromiso.",
      },
      {
        q: "¿Cuánto cuesta Rutia?",
        a: PRICING_FAQ_ANSWER,
        link: { href: "/#precios", label: "Ver los planes" },
      },
      {
        q: "¿Las entregas del plan son un mínimo?",
        a: "No. Son el máximo de entregas incluidas por mes en cada plan: podés hacer menos sin ningún problema. Todos los planes incluyen todas las funciones.",
      },
      {
        q: "¿Qué cuenta como una entrega?",
        a: "Cuenta como entrega la que entra efectivamente a la planificación operativa, no la simple carga o importación de un pedido. Una reprogramación que genere una nueva asignación puede contarse nuevamente.",
        link: { href: "/terminos", label: "Ver los términos y condiciones" },
      },
      {
        q: "¿Hay permanencia mínima?",
        a: "No. La suscripción es mensual y podés cancelarla cuando quieras, sin costo adicional.",
      },
    ],
  },
];
