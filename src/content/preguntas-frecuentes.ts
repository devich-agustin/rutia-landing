/**
 * Preguntas frecuentes de /preguntas-frecuentes.
 *
 * Regla: cada respuesta tiene que estar respaldada por una funcionalidad real
 * que ya se comunica en el sitio (home, /software-de-reparto o páginas por
 * rubro). No agregar promesas de funciones futuras.
 */
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
        a: "Para empresas que entregan lo que venden con vehículos propios, fletes contratados o ambos: mueblerías, colchonerías, casas de electrodomésticos, ferreterías, corralones, casas de materiales, distribuidoras, bicicleterías, comercios de iluminación y e-commerce con reparto propio. Si hacés más de 20 entregas por mes, probablemente te sirva.",
      },
      {
        q: "¿Sirve para una PyME chica?",
        a: "Sí. Está pensada para operaciones que hoy se coordinan con planillas, papeles y mensajes. Los planes van desde 150 entregas por mes.",
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
        a: "Sí. Podés conectar tu cuenta vendedora de Mercado Libre para gestionar las entregas. También podés importar pedidos desde Excel o cargarlos manualmente.",
        link: {
          href: "/logistica-para-ecommerce",
          label: "Logística para e-commerce con reparto propio",
        },
      },
      {
        q: "¿Se conecta con Tiendanube, Shopify o WooCommerce?",
        a: "Hoy no hay una conexión directa con esas plataformas. Podés importar los pedidos desde Excel o cargarlos a mano.",
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
        q: "¿Queda registrado quién recibió?",
        a: "Sí. Al registrar el resultado, quien reparte puede indicar quién recibió y agregar observaciones.",
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
        a: "Si sabés usar WhatsApp, sabés usar Rutia. La mayoría arma su primer día de entregas en menos de una hora.",
      },
      {
        q: "¿Puedo trabajar con más de un depósito?",
        a: "Sí. Todos los planes incluyen la posibilidad de trabajar con varios depósitos.",
      },
      {
        q: "¿Qué soporte tengo?",
        a: "Acompañamiento humano y soporte por WhatsApp en todos los planes; el plan Empresa tiene soporte prioritario.",
      },
    ],
  },
  {
    id: "prueba-y-contratacion",
    title: "Prueba gratuita, demos y contratación",
    items: [
      {
        q: "¿Puedo probar Rutia gratis?",
        a: "Sí. Podés probar Rutia gratis durante 1 mes para conocer cómo funciona en tu operación.",
      },
      {
        q: "¿Cómo es la demo?",
        a: "Es una reunión de 30 minutos: nos contás cómo trabajás, te mostramos Rutia funcionando con entregas como las tuyas y vemos juntos si te sirve. No tiene costo ni compromiso.",
      },
      {
        q: "¿Cuánto cuesta Rutia?",
        a: "El precio depende de cuántas entregas hacés por mes: hay planes de hasta 150, 600 y 2.000 entregas mensuales, todos con todas las funciones. Si hacés más de 2.000 entregas o tenés varias sucursales, armamos un plan a medida. Consultanos el precio de tu plan.",
      },
      {
        q: "¿Hay permanencia mínima?",
        a: "No. Cancelás cuando quieras, sin letra chica.",
      },
    ],
  },
];
