import {
  CalendarDays,
  ClipboardList,
  History,
  PackageCheck,
  RefreshCcw,
  Smartphone,
  Truck,
  UserRoundX,
  Warehouse,
} from "lucide-react";
import type { VerticalSeoConfig } from "@/components/VerticalSeoPage";

const commonFlow = [
  {
    title: "Pedido",
    text: "Cargás o importás lo que está pendiente de entrega.",
  },
  { title: "Preparación", text: "El equipo ve qué pedidos debe dejar listos." },
  {
    title: "Armado del día",
    text: "Organizás las entregas previstas para la jornada.",
  },
  {
    title: "Recurso",
    text: "Asignás chofer, vehículo propio o flete contratado.",
  },
  {
    title: "Entrega",
    text: "Quien reparte trabaja desde el navegador de su celular.",
  },
  {
    title: "Resultado",
    text: "Queda registrada la entrega, incidencia o reprogramación.",
  },
] as const;

const standardFeatures = [
  {
    icon: ClipboardList,
    title: "Carga e importación de pedidos",
    text: "Ingresá pedidos a mano o importalos desde Excel con la plantilla de Rutia.",
  },
  {
    icon: CalendarDays,
    title: "Calendario de entregas",
    text: "Consultá lo programado por día y ordená los cambios de fecha.",
  },
  {
    icon: PackageCheck,
    title: "Preparación antes de la salida",
    text: "Marcá qué pedidos están listos y cuáles todavía necesitan preparación.",
  },
  {
    icon: Truck,
    title: "Choferes, vehículos y fletes",
    text: "Asigná cada entrega a un recurso propio o contratado.",
  },
  {
    icon: Smartphone,
    title: "Vista Chofer desde el celular",
    text: "El repartidor ve su trabajo y registra el resultado sin instalar una app.",
  },
  {
    icon: RefreshCcw,
    title: "Incidencias e historial",
    text: "Registrá visitas fallidas, cambios y reprogramaciones sin perder el seguimiento.",
  },
] as const;

export const electrodomesticos: VerticalSeoConfig = {
  path: "/logistica-para-electrodomesticos",
  title: "Software de logística para electrodomésticos | Rutia",
  description:
    "Organizá pedidos, preparación, choferes, vehículos y entregas de electrodomésticos en un solo lugar. Conocé cómo Rutia simplifica tu reparto.",
  schemaName: "Logística para electrodomésticos",
  landing: {
    breadcrumb: "Electrodomésticos",
    eyebrow: "Rutia para electrodomésticos",
    title: "Software de logística para tiendas de electrodomésticos",
    intro:
      "Coordiná heladeras, lavarropas, cocinas, televisores y otros productos pendientes de entrega desde la venta hasta el resultado en el domicilio.",
    problemTitle:
      "Una venta grande termina en una coordinación todavía más grande",
    problemIntro:
      "La fecha prometida al comprador depende de que depósito prepare el producto correcto y reparto tenga claro qué puede salir ese día.",
    coordinationTitle: "Ventas, depósito y reparto mirando el mismo pedido",
    coordinationIntro:
      "Rutia organiza la etapa de entrega. No instala electrodomésticos ni gestiona servicio técnico, stock o facturación.",
    featuresTitle: "Control para cada electrodoméstico pendiente de entrega",
    finalTitle:
      "Que cada venta llegue sin depender de planillas y mensajes sueltos",
    finalText:
      "Contanos cómo preparan y reparten hoy y te mostramos un flujo de Rutia aplicado a tu operación.",
    problems: [
      {
        icon: ClipboardList,
        title: "Fechas prometidas que quedan aisladas",
        text: "La fecha acordada en ventas no siempre llega clara a quienes preparan y entregan el pedido.",
      },
      {
        icon: Warehouse,
        title: "Productos grandes o delicados todavía sin preparar",
        text: "Una heladera, cocina o TV necesita estar identificada y lista antes de que llegue el vehículo.",
      },
      {
        icon: CalendarDays,
        title: "Muchas entregas comprometidas para una jornada",
        text: "Sin una vista común cuesta distinguir qué está listo y qué todavía no debería salir.",
      },
      {
        icon: Truck,
        title: "Reparto propio mezclado con fletes",
        text: "Cada pedido debe quedar asociado al chofer y al recurso que efectivamente lo llevará.",
      },
      {
        icon: UserRoundX,
        title: "Comprador ausente o fecha modificada",
        text: "El cambio necesita quedar registrado para reprogramar sin perder el pedido de vista.",
      },
      {
        icon: History,
        title: "Dudas sobre lo entregado y lo pendiente",
        text: "Ante una consulta, necesitás saber qué salió, cuál fue el resultado y qué falta resolver.",
      },
    ],
    flow: [...commonFlow],
    benefits: [
      {
        title: "Promesas de entrega visibles",
        text: "La fecha acordada queda dentro de la misma operación que consulta depósito y reparto.",
      },
      {
        title: "Preparación con anticipación",
        text: "El equipo identifica qué productos deben quedar listos para la próxima salida.",
      },
      {
        title: "Recursos asignados con claridad",
        text: "Cada entrega muestra quién la lleva y si se usa flota propia o un flete.",
      },
      {
        title: "Reprogramaciones sin perder contexto",
        text: "Las visitas fallidas y los cambios quedan vinculados al historial del pedido.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia gestiona la instalación del electrodoméstico?",
        "No. Rutia organiza la entrega y registra su resultado; no gestiona instalación ni servicio técnico.",
      ],
      [
        "¿Puedo separar pedidos listos de los que faltan preparar?",
        "Sí. La preparación permite identificar qué pedidos están listos antes de armar la salida.",
      ],
      [
        "¿Se puede trabajar con vehículos propios y fletes?",
        "Sí. Podés asignar cada entrega a recursos propios o contratados.",
      ],
      [
        "¿El chofer tiene que instalar una app?",
        "No. Accede a la Vista Chofer desde el navegador de su celular.",
      ],
      [
        "¿Qué ocurre si el comprador no está?",
        "Registrás la incidencia y el pedido queda disponible para reprogramarlo con su historial.",
      ],
      [
        "¿Puedo importar pedidos desde Excel?",
        "Sí. Rutia permite importarlos con una plantilla y luego organizar su preparación y entrega.",
      ],
    ],
  },
};

export const ferreterias: VerticalSeoConfig = {
  path: "/logistica-para-ferreterias",
  title: "Software de logística para ferreterías | Rutia",
  description:
    "Organizá pedidos, preparación y entregas de tu ferretería desde un solo lugar. Coordiná reparto, choferes y vehículos con Rutia.",
  schemaName: "Logística para ferreterías",
  landing: {
    breadcrumb: "Ferreterías",
    eyebrow: "Rutia para ferreterías",
    title: "Software de logística para ferreterías",
    intro:
      "Convertí pedidos de mostrador, teléfono y otros canales en entregas claras para depósito, choferes y fletes.",
    problemTitle:
      "Pedidos muy distintos que terminan compartiendo el mismo reparto",
    problemIntro:
      "Una compra agregada a último momento puede cambiar la preparación y la jornada si ventas, depósito y reparto no comparten la información.",
    coordinationTitle:
      "Del mostrador al domicilio sin perder cambios en el camino",
    coordinationIntro:
      "Rutia ordena la logística posterior a la venta; no reemplaza el sistema de stock, POS o facturación de la ferretería.",
    featuresTitle: "Herramientas para ordenar el reparto de la ferretería",
    finalTitle: "Más entregas bajo control, aunque cada pedido sea diferente",
    finalText:
      "Mostranos cómo pasan hoy los pedidos del mostrador al reparto y vemos cómo centralizarlos.",
    problems: [
      {
        icon: ClipboardList,
        title: "Pedidos que nacen por varios canales",
        text: "Mostrador y teléfono pueden sumar entregas que después quedan repartidas entre papeles y chats.",
      },
      {
        icon: Warehouse,
        title: "Preparaciones con artículos muy diferentes",
        text: "Depósito necesita una lista clara para completar cada pedido antes de despacharlo.",
      },
      {
        icon: CalendarDays,
        title: "Entregas agregadas durante el día",
        text: "Un nuevo domicilio o una modificación obliga a reorganizar la jornada sin perder lo anterior.",
      },
      {
        icon: Truck,
        title: "Vehículo o flete sin asignación visible",
        text: "Si la decisión queda en una conversación, el resto del equipo no sabe quién llevará el pedido.",
      },
      {
        icon: RefreshCcw,
        title: "Cambios que no llegan a todos",
        text: "Una dirección o fecha corregida debe quedar disponible para ventas, depósito y reparto.",
      },
      {
        icon: History,
        title: "Consultas que obligan a reconstruir el día",
        text: "Sin historial cuesta responder si un pedido salió, fue entregado o volvió a quedar pendiente.",
      },
    ],
    flow: [...commonFlow],
    benefits: [
      {
        title: "Pedidos reunidos en una sola vista",
        text: "Lo que requiere entrega deja de depender del canal en el que se vendió.",
      },
      {
        title: "Depósito sabe qué completar",
        text: "La preparación muestra qué pedidos están listos y cuáles siguen pendientes.",
      },
      {
        title: "La jornada admite cambios ordenados",
        text: "Las entregas agregadas o modificadas se registran sin borrar el contexto anterior.",
      },
      {
        title: "Cada resultado queda consultable",
        text: "Ventas puede responder sobre una entrega sin revisar grupos y papeles.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia controla el stock o la caja de la ferretería?",
        "No. Rutia organiza las entregas y no reemplaza inventario, POS ni facturación.",
      ],
      [
        "¿Puedo cargar pedidos que llegan por teléfono o mostrador?",
        "Sí. Podés cargarlos manualmente o importar varios desde Excel.",
      ],
      [
        "¿Se pueden agregar entregas a una jornada ya armada?",
        "Sí. Podés registrar cambios y reorganizar el trabajo manteniendo la información del pedido.",
      ],
      [
        "¿Puedo usar un flete además de mis vehículos?",
        "Sí. Las entregas pueden asignarse a recursos propios o contratados.",
      ],
      [
        "¿Cómo sabe depósito qué pedido está listo?",
        "La etapa de preparación permite marcar el estado antes de incluirlo en una salida.",
      ],
      [
        "¿Queda registro de una entrega fallida?",
        "Sí. La incidencia y la posterior reprogramación quedan en el historial.",
      ],
    ],
  },
};

export const corralones: VerticalSeoConfig = {
  path: "/logistica-para-corralones",
  title: "Software de logística para corralones | Rutia",
  description:
    "Organizá pedidos, preparación, vehículos, fletes y entregas de tu corralón desde un solo lugar. Controlá tu reparto con Rutia.",
  schemaName: "Logística para corralones",
  landing: {
    breadcrumb: "Corralones y sanitarios",
    eyebrow: "Rutia para corralones",
    title: "Software de logística para corralones y sanitarios",
    intro:
      "Ordená materiales vendidos pendientes de despacho, fechas de recepción en obra y cada salida con vehículos propios o transportistas.",
    problemTitle:
      "Cada obra espera materiales, pero la operación cambia hasta último momento",
    problemIntro:
      "Preparar, cargar y entregar en distintos domicilios exige que venta, depósito y reparto sepan qué sale, con quién y qué queda pendiente.",
    coordinationTitle:
      "Despachos y recepciones de obra en una misma hoja de ruta",
    coordinationIntro:
      "Rutia ayuda a coordinar pedidos y recursos. No calcula peso, volumen, cubicaje ni capacidad compatible del vehículo.",
    featuresTitle: "Visibilidad para cada despacho del corralón",
    finalTitle:
      "Menos llamados para saber qué material salió y cuál sigue pendiente",
    finalText:
      "Contanos cómo coordinan hoy obras, domicilios y transportistas y te mostramos Rutia aplicado a esa jornada.",
    problems: [
      {
        icon: ClipboardList,
        title: "Material vendido pendiente de despacho",
        text: "La venta está cerrada, pero todavía falta convertirla en una entrega con fecha y responsable.",
      },
      {
        icon: Warehouse,
        title: "Pedidos que deben prepararse antes de cargar",
        text: "Depósito necesita anticipar qué materiales corresponden a cada obra o domicilio.",
      },
      {
        icon: CalendarDays,
        title: "Recepciones previstas para días distintos",
        text: "Una obra puede cambiar cuándo recibe y afectar el orden de varias entregas.",
      },
      {
        icon: Truck,
        title: "Vehículos propios y transportistas",
        text: "Cada salida debe indicar qué recurso lleva el pedido, sin cálculos automáticos de capacidad.",
      },
      {
        icon: RefreshCcw,
        title: "Cambios de obra a último momento",
        text: "Una modificación de fecha o dirección necesita llegar a todos antes del despacho.",
      },
      {
        icon: History,
        title: "Material que vuelve a quedar pendiente",
        text: "Si la recepción falla, el pedido debe conservar su resultado y quedar listo para reprogramar.",
      },
    ],
    flow: [...commonFlow],
    benefits: [
      {
        title: "Despachos identificados por destino",
        text: "Cada pedido mantiene visible la obra o domicilio al que debe llegar.",
      },
      {
        title: "Preparación antes de la carga",
        text: "Depósito consulta lo previsto y marca los pedidos listos para salir.",
      },
      {
        title: "Transportistas coordinados",
        text: "El equipo ve qué salida toma cada recurso propio o contratado.",
      },
      {
        title: "Pendientes después de cada jornada",
        text: "Los resultados permiten distinguir lo entregado de lo que necesita otra fecha.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia calcula el peso o la capacidad del vehículo?",
        "No. La asignación del recurso la realiza tu equipo; Rutia no calcula peso, volumen, cubicaje ni compatibilidad automática.",
      ],
      [
        "¿Puedo organizar entregas para obras y domicilios particulares?",
        "Sí. Cada pedido conserva su destino y la fecha prevista de entrega.",
      ],
      [
        "¿Se pueden usar transportistas contratados?",
        "Sí. Podés asignar entregas a vehículos propios o fletes contratados.",
      ],
      [
        "¿Qué pasa si una obra cambia la recepción?",
        "Registrás el cambio y reprogramás el pedido para mantener informados a los equipos involucrados.",
      ],
      [
        "¿El chofer necesita instalar una app?",
        "No. Trabaja desde la Vista Chofer en el navegador del celular.",
      ],
      [
        "¿Rutia reemplaza el control de stock?",
        "No. Se enfoca en la preparación, organización, ejecución y resultado de las entregas.",
      ],
    ],
  },
};

export const casasMateriales: VerticalSeoConfig = {
  path: "/logistica-para-casas-de-materiales",
  title: "Software de logística para casas de materiales | Rutia",
  description:
    "Centralizá pedidos, preparación y entregas de tu casa de materiales. Organizá vehículos, choferes y fletes con Rutia.",
  schemaName: "Logística para casas de materiales",
  landing: {
    breadcrumb: "Casas de materiales",
    eyebrow: "Rutia para casas de materiales",
    title: "Software de logística para casas de materiales",
    intro:
      "Hacé que los pedidos vendidos en mostrador lleguen a preparación y reparto con la fecha, el destino y el responsable claros.",
    problemTitle: "Después de vender, todavía queda coordinar toda la entrega",
    problemIntro:
      "Entre la fecha acordada con el cliente y la salida real aparecen preparaciones, destinos, recursos disponibles y cambios que suelen vivir en planillas separadas.",
    coordinationTitle:
      "Mostrador y logística conectados por la misma información",
    coordinationIntro:
      "Rutia centraliza la operación de reparto sin sustituir facturación, stock ni realizar cálculos de peso o cubicaje.",
    featuresTitle: "Una operación de entrega más clara desde el pedido vendido",
    finalTitle:
      "Que la coordinación no dependa de quien conoce todas las planillas",
    finalText:
      "Te mostramos cómo llevar fechas acordadas, preparación y reparto a un único flujo compartido.",
    problems: [
      {
        icon: ClipboardList,
        title: "Ventas cerradas que esperan coordinación",
        text: "El pedido ya existe, pero todavía necesita fecha, destino y lugar dentro del reparto.",
      },
      {
        icon: Warehouse,
        title: "Preparación desconectada del mostrador",
        text: "Quien prepara puede recibir tarde los cambios acordados con el cliente.",
      },
      {
        icon: CalendarDays,
        title: "Fechas acordadas difíciles de visualizar",
        text: "Varios compromisos dispersos impiden ver con claridad qué debe entregarse cada día.",
      },
      {
        icon: Truck,
        title: "Recursos disponibles en conversaciones",
        text: "La asignación de vehículos o fletes queda atada a mensajes entre pocas personas.",
      },
      {
        icon: UserRoundX,
        title: "Cliente que necesita reprogramar",
        text: "Mover una entrega debe actualizar la jornada sin perder la fecha anterior ni el motivo.",
      },
      {
        icon: History,
        title: "Resultado sin trazabilidad compartida",
        text: "Mostrador necesita saber qué ocurrió sin perseguir al chofer o revisar distintos chats.",
      },
    ],
    flow: [...commonFlow],
    benefits: [
      {
        title: "Compromisos comerciales visibles",
        text: "La fecha acordada acompaña al pedido durante toda la coordinación.",
      },
      {
        title: "Preparación alineada con el día de reparto",
        text: "El equipo prioriza lo que realmente está previsto entregar.",
      },
      {
        title: "Menos dependencia de mensajes",
        text: "Choferes, vehículos y cambios quedan dentro de la operación compartida.",
      },
      {
        title: "Respuesta clara al cliente",
        text: "El historial permite consultar el resultado sin reconstruir conversaciones.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia reemplaza el sistema de ventas de la casa de materiales?",
        "No. Rutia empieza a aportar valor cuando el pedido vendido debe prepararse y entregarse.",
      ],
      [
        "¿Puedo registrar la fecha acordada con el cliente?",
        "Sí. La entrega se organiza para la fecha prevista y puede reprogramarse si cambia.",
      ],
      [
        "¿Sirve con vehículos propios y fletes?",
        "Sí. Podés coordinar ambos tipos de recursos dentro del armado del día.",
      ],
      [
        "¿Rutia calcula peso o cubicaje?",
        "No. No realiza cálculos automáticos de peso, volumen ni capacidad del vehículo.",
      ],
      [
        "¿Puedo importar la planilla que uso hoy?",
        "Podés importar pedidos desde Excel usando la plantilla de Rutia.",
      ],
      [
        "¿Cómo consulto qué pasó con una entrega?",
        "Cada resultado, incidencia o reprogramación queda dentro del historial del pedido.",
      ],
    ],
  },
};

export const distribuidoras: VerticalSeoConfig = {
  path: "/logistica-para-distribuidoras",
  title: "Software de logística para distribuidoras | Rutia",
  description:
    "Organizá pedidos, recorridos, choferes y entregas de tu distribuidora desde un solo lugar. Controlá cada jornada de reparto con Rutia.",
  schemaName: "Logística para distribuidoras",
  landing: {
    breadcrumb: "Distribuidoras",
    eyebrow: "Rutia para distribuidoras",
    title: "Software de logística para distribuidoras",
    intro:
      "Pasá de una lista creciente de pedidos a jornadas de reparto organizadas por entregas, choferes, vehículos y resultados.",
    problemTitle:
      "Cuando crece el volumen, una planilla deja de contar toda la jornada",
    problemIntro:
      "Muchos destinos, varias personas y cambios durante el día hacen difícil saber qué salió, qué volvió y qué todavía espera reparto.",
    coordinationTitle: "Una vista diaria para coordinar muchos destinos",
    coordinationIntro:
      "Rutia ayuda a agrupar y organizar entregas y recorridos definidos por tu equipo. No optimiza rutas por peso o capacidad ni gestiona facturación, cobranza o stock.",
    featuresTitle: "Control operativo para jornadas con muchas entregas",
    finalTitle:
      "Hacé crecer el reparto sin multiplicar Excel y grupos de WhatsApp",
    finalText:
      "Revisamos juntos cómo arman las jornadas y te mostramos una operación centralizada en Rutia.",
    problems: [
      {
        icon: ClipboardList,
        title: "Un volumen alto de pedidos pendientes",
        text: "La lista cambia rápido y varias personas necesitan trabajar sobre la misma versión.",
      },
      {
        icon: Warehouse,
        title: "Preparación previa para muchas salidas",
        text: "El equipo necesita distinguir lo listo de lo que todavía no puede sumarse al reparto.",
      },
      {
        icon: CalendarDays,
        title: "Jornadas con numerosos destinos",
        text: "Sin una vista diaria cuesta agrupar entregas y repartir el trabajo entre recursos.",
      },
      {
        icon: Truck,
        title: "Varios choferes y vehículos en movimiento",
        text: "Cada entrega debe quedar asociada al recorrido y responsable definidos por el equipo.",
      },
      {
        icon: RefreshCcw,
        title: "Pendientes que pasan al día siguiente",
        text: "Una entrega fallida o no realizada necesita conservar su información para reprogramarse.",
      },
      {
        icon: History,
        title: "Seguimiento disperso entre varias personas",
        text: "El crecimiento vuelve inviable reconstruir resultados desde chats y llamadas.",
      },
    ],
    flow: [
      { title: "Pedidos", text: "Cargás o importás el volumen pendiente." },
      {
        title: "Preparación",
        text: "Separás lo listo de lo que todavía espera.",
      },
      { title: "Jornada", text: "Agrupás y ordenás las entregas del día." },
      { title: "Recursos", text: "Asignás choferes, vehículos o fletes." },
      {
        title: "Recorrido",
        text: "Cada chofer consulta sus entregas desde el celular.",
      },
      {
        title: "Cierre",
        text: "Ves entregas, fallas y pendientes para reprogramar.",
      },
    ],
    benefits: [
      {
        title: "Una sola versión de la jornada",
        text: "Las personas involucradas consultan los mismos pedidos y asignaciones.",
      },
      {
        title: "Pendientes visibles al cierre",
        text: "Lo que no pudo entregarse queda identificado para la próxima planificación.",
      },
      {
        title: "Recursos distribuidos con claridad",
        text: "Cada chofer y vehículo recibe el trabajo que el equipo le asignó.",
      },
      {
        title: "Historial que acompaña el crecimiento",
        text: "Más volumen no implica perder el resultado de cada entrega.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia optimiza automáticamente las rutas?",
        "No. Tu equipo define el armado y el orden; Rutia centraliza las entregas, asignaciones y resultados.",
      ],
      [
        "¿Puedo organizar varios choferes en una jornada?",
        "Sí. Podés asignar entregas a distintos choferes, vehículos y recursos contratados.",
      ],
      [
        "¿Qué pasa con lo que no se entrega?",
        "Queda registrado como incidencia o pendiente y puede reprogramarse sin perder su historial.",
      ],
      [
        "¿Rutia gestiona cobranza, facturación o cuentas corrientes?",
        "No. Se enfoca exclusivamente en la operación de entregas.",
      ],
      [
        "¿Puedo importar muchos pedidos desde Excel?",
        "Sí. La importación permite incorporar pedidos con la plantilla de Rutia.",
      ],
      [
        "¿El repartidor instala una aplicación?",
        "No. Accede a sus entregas desde el navegador del celular.",
      ],
    ],
  },
};

export const bicicleterias: VerticalSeoConfig = {
  path: "/logistica-para-bicicleterias",
  title: "Software de logística para bicicleterías | Rutia",
  description:
    "Organizá pedidos y entregas de bicicletas y productos deportivos. Coordiná preparación, reparto y resultados desde Rutia.",
  schemaName: "Logística para bicicleterías",
  landing: {
    breadcrumb: "Bicicleterías y deportes",
    eyebrow: "Rutia para bicicleterías",
    title: "Software de logística para bicicleterías y tiendas deportivas",
    intro:
      "Organizá bicicletas y productos deportivos vendidos que deben prepararse para una entrega a domicilio en la fecha comprometida.",
    problemTitle:
      "La venta termina recién cuando el pedido preparado llega al cliente",
    problemIntro:
      "Entre quien vende, quien deja el producto listo y quien reparte puede perderse la fecha, el responsable o un cambio del comprador.",
    coordinationTitle:
      "Preparación y reparto conectados sin gestionar el taller",
    coordinationIntro:
      "Rutia organiza la entrega. No realiza armado técnico, servicio de taller, inventario ni gestión de reparaciones.",
    featuresTitle:
      "Seguimiento para bicicletas y productos pendientes de entrega",
    finalTitle:
      "Cada bicicleta entregada con su fecha, responsable y resultado",
    finalText:
      "Contanos cómo coordinás hoy las entregas a domicilio y te mostramos cómo ordenar el flujo.",
    problems: [
      {
        icon: ClipboardList,
        title: "Productos vendidos que esperan entrega",
        text: "La bicicleta o el artículo deportivo necesita pasar de la venta a una entrega programada.",
      },
      {
        icon: PackageCheck,
        title: "Pedido aún no preparado para despacho",
        text: "Reparto necesita saber si el producto ya está listo antes de incluirlo en la salida.",
      },
      {
        icon: CalendarDays,
        title: "Fecha comprometida con el comprador",
        text: "El acuerdo debe quedar visible para quienes preparan y llevan el pedido.",
      },
      {
        icon: Truck,
        title: "Recurso adecuado sin asignar",
        text: "La entrega puede requerir vehículo propio o flete y debe quedar claro quién la realiza.",
      },
      {
        icon: UserRoundX,
        title: "Comprador ausente o cambio de día",
        text: "La visita fallida necesita registrarse y volver a una fecha posible.",
      },
      {
        icon: History,
        title: "Duda sobre si salió o sigue pendiente",
        text: "Un historial común evita consultar a varias personas para conocer el estado.",
      },
    ],
    flow: [...commonFlow],
    benefits: [
      {
        title: "Fecha compartida desde la venta",
        text: "Preparación y reparto consultan el mismo compromiso con el comprador.",
      },
      {
        title: "Sólo sale lo que está listo",
        text: "El estado de preparación ayuda a armar la jornada con información real.",
      },
      {
        title: "Responsable visible",
        text: "Cada entrega queda asociada al chofer, vehículo o flete asignado.",
      },
      {
        title: "Historial ante cambios",
        text: "Ausencias y reprogramaciones no borran lo ocurrido anteriormente.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia gestiona el armado técnico de bicicletas?",
        "No. Sólo organiza la preparación logística y la entrega; no reemplaza el trabajo técnico o de taller.",
      ],
      [
        "¿Puedo organizar bicicletas y otros productos deportivos?",
        "Sí. Los pedidos pueden representar distintos productos vendidos que requieren entrega.",
      ],
      [
        "¿Cómo sé si un pedido está listo?",
        "La etapa de preparación permite marcarlo antes de incorporarlo al armado del día.",
      ],
      [
        "¿Se puede asignar un flete?",
        "Sí. Podés trabajar con vehículos propios, fletes contratados o ambos.",
      ],
      [
        "¿Qué pasa si el comprador cambia la fecha?",
        "Reprogramás la entrega y el cambio queda asociado al historial.",
      ],
      [
        "¿Rutia controla inventario o reparaciones?",
        "No. No gestiona stock, servicio técnico ni taller.",
      ],
    ],
  },
};

export const iluminacion: VerticalSeoConfig = {
  path: "/logistica-para-iluminacion",
  title: "Software de logística para tiendas de iluminación | Rutia",
  description:
    "Organizá pedidos, preparación y entregas de productos de iluminación. Coordiná tu reparto y controlá cada entrega con Rutia.",
  schemaName: "Logística para tiendas de iluminación",
  landing: {
    breadcrumb: "Iluminación",
    eyebrow: "Rutia para tiendas de iluminación",
    title: "Software de logística para tiendas de iluminación",
    intro:
      "Coordiná luminarias y pedidos con múltiples artículos desde la preparación cuidadosa hasta el resultado de la entrega.",
    problemTitle: "Pedidos delicados y completos antes de llegar al domicilio",
    problemIntro:
      "Una entrega puede reunir varias luminarias y accesorios; todos necesitan estar preparados y asociados a la fecha acordada.",
    coordinationTitle: "La misma lista para venta, preparación y reparto",
    coordinationIntro:
      "Rutia organiza el despacho y su resultado. No controla roturas automáticamente, no gestiona instalaciones eléctricas ni stock.",
    featuresTitle:
      "Control de entrega para luminarias y pedidos con varios artículos",
    finalTitle: "Menos dudas entre lo vendido, lo preparado y lo entregado",
    finalText:
      "Te mostramos cómo centralizar fechas, responsables y resultados sin cambiar tu sistema comercial.",
    problems: [
      {
        icon: ClipboardList,
        title: "Pedidos con varias piezas y accesorios",
        text: "La entrega debe conservar una referencia clara a todo lo que fue vendido para ese destino.",
      },
      {
        icon: PackageCheck,
        title: "Productos delicados pendientes de preparación",
        text: "El equipo necesita anticipar qué pedido debe quedar listo para el despacho.",
      },
      {
        icon: CalendarDays,
        title: "Fecha acordada fuera de la operación",
        text: "Cuando queda sólo en ventas, depósito y reparto pueden trabajar con otra prioridad.",
      },
      {
        icon: Truck,
        title: "Distintos domicilios y recursos",
        text: "Cada entrega debe quedar asignada al vehículo o flete definido por el equipo.",
      },
      {
        icon: RefreshCcw,
        title: "Cambios que desarman la jornada",
        text: "Mover una entrega debe actualizar el plan sin perder la información del pedido.",
      },
      {
        icon: History,
        title: "Resultado difícil de consultar",
        text: "Ante una consulta, ventas necesita saber qué ocurrió sin depender de llamadas.",
      },
    ],
    flow: [...commonFlow],
    benefits: [
      {
        title: "Pedidos completos antes de salir",
        text: "La preparación ayuda a identificar qué entrega ya está lista para la jornada.",
      },
      {
        title: "Fechas visibles para todos",
        text: "El compromiso con el cliente acompaña al pedido hasta su resultado.",
      },
      {
        title: "Reparto propio o contratado",
        text: "Cada destino queda asociado al recurso que lo realizará.",
      },
      {
        title: "Cambios con contexto",
        text: "Las reprogramaciones conservan el historial de lo ocurrido.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia controla automáticamente roturas?",
        "No. Rutia registra el resultado operativo de la entrega, pero no detecta roturas automáticamente.",
      ],
      [
        "¿Gestiona instalaciones eléctricas?",
        "No. Se enfoca en organizar la entrega de los productos vendidos.",
      ],
      [
        "¿Puedo organizar pedidos con varios artículos?",
        "Sí. El pedido se mantiene identificado durante su preparación y entrega.",
      ],
      [
        "¿Se pueden coordinar fletes contratados?",
        "Sí. Podés asignar entregas a recursos propios o contratados.",
      ],
      [
        "¿Cómo manejo un cambio de fecha?",
        "La entrega puede reprogramarse y conservar el historial anterior.",
      ],
      [
        "¿Rutia reemplaza mi control de stock?",
        "No. La función de Rutia comienza en la organización operativa de lo que debe entregarse.",
      ],
    ],
  },
};

export const ecommerce: VerticalSeoConfig = {
  path: "/logistica-para-ecommerce",
  title: "Software de logística para e-commerce con reparto propio | Rutia",
  description:
    "Organizá los pedidos que tenés que entregar con tu propio reparto. Planificá entregas, choferes y resultados desde Rutia.",
  schemaName: "Logística para e-commerce",
  landing: {
    breadcrumb: "E-commerce con reparto propio",
    eyebrow: "Después de la venta online",
    title: "Software de logística para e-commerce con reparto propio",
    intro:
      "Vendiste online. Ahora convertí esos pedidos en entregas reales con preparación, armado del día, choferes y resultados bajo control.",
    problemTitle:
      "La tienda toma el pedido; la última milla necesita otra organización",
    problemIntro:
      "Cuando crecen compradores y direcciones, una planilla y un grupo de chat dejan de mostrar qué fue entregado y qué sigue pendiente.",
    coordinationTitle: "Del pedido exportado a una jornada de reparto concreta",
    coordinationIntro:
      "Rutia no es una plataforma de e-commerce ni sincroniza tiendas automáticamente. Podés importar pedidos desde Excel y organizar la operación posterior a la venta.",
    featuresTitle: "Control para la etapa que empieza después del checkout",
    finalTitle: "Que el crecimiento online no desordene tu reparto propio",
    finalText:
      "Mostranos cómo pasás hoy de los pedidos a la calle y te enseñamos cómo centralizar esa última milla.",
    problems: [
      {
        icon: ClipboardList,
        title: "Pedidos online que deben volverse entregas",
        text: "La venta digital existe, pero todavía falta incorporarla a una jornada real de reparto.",
      },
      {
        icon: PackageCheck,
        title: "Preparación antes de despachar",
        text: "El equipo necesita distinguir los pedidos listos de los que aún no pueden salir.",
      },
      {
        icon: CalendarDays,
        title: "Muchos compradores y direcciones",
        text: "El volumen vuelve difícil armar el día y mantener una única lista actualizada.",
      },
      {
        icon: Truck,
        title: "Choferes y vehículos por asignar",
        text: "Cada pedido debe quedar asociado al recurso que realizará la entrega.",
      },
      {
        icon: UserRoundX,
        title: "Comprador ausente o entrega agregada",
        text: "Los cambios durante la jornada necesitan registrarse sin perder pedidos.",
      },
      {
        icon: History,
        title: "Entregados y pendientes mezclados",
        text: "Sin un cierre claro, el equipo no sabe qué debe volver al próximo armado.",
      },
    ],
    flow: [
      {
        title: "Pedido online",
        text: "Importás desde Excel o cargás lo que debés entregar.",
      },
      {
        title: "Preparación",
        text: "Marcás qué pedidos ya están listos para salir.",
      },
      {
        title: "Reparto diario",
        text: "Armás la jornada con compradores y direcciones.",
      },
      {
        title: "Asignación",
        text: "Definís chofer y vehículo para cada grupo.",
      },
      {
        title: "Última milla",
        text: "El repartidor trabaja desde el navegador del celular.",
      },
      {
        title: "Resultado",
        text: "Separás entregados, incidencias y pedidos a reprogramar.",
      },
    ],
    benefits: [
      {
        title: "Una operación posterior a la venta",
        text: "Los pedidos dejan de ser filas aisladas y pasan a una jornada de entrega.",
      },
      {
        title: "Preparados y pendientes separados",
        text: "El equipo arma el reparto con los pedidos que realmente pueden salir.",
      },
      {
        title: "Última milla compartida",
        text: "Quienes coordinan y quienes reparten consultan la misma información.",
      },
      {
        title: "Cierre diario visible",
        text: "Sabés qué fue entregado y qué necesita una nueva fecha.",
      },
    ],
    features: [...standardFeatures],
    faq: [
      [
        "¿Rutia se integra automáticamente con Tiendanube, Mercado Libre, Shopify o WooCommerce?",
        "No. Actualmente podés importar pedidos desde Excel o cargarlos manualmente para organizar la entrega.",
      ],
      [
        "¿Rutia reemplaza mi plataforma de e-commerce?",
        "No. Rutia empieza a aportar valor después de la venta, en la preparación y el reparto.",
      ],
      [
        "¿Puedo organizar varios choferes y vehículos?",
        "Sí. El armado del día permite asignar los recursos definidos por tu equipo.",
      ],
      [
        "¿Qué pasa si el comprador está ausente?",
        "Registrás la incidencia y el pedido queda disponible para reprogramarlo.",
      ],
      [
        "¿El repartidor necesita una app?",
        "No. Accede a la Vista Chofer desde el navegador de su celular.",
      ],
      [
        "¿Puedo saber qué pedidos siguen pendientes?",
        "Sí. Los resultados y el historial permiten distinguir lo entregado de lo que aún necesita resolución.",
      ],
    ],
  },
};
