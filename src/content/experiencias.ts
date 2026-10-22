/**
 * Experiencias de uso que se muestran en la home.
 *
 * IMPORTANTE: hoy son EJEMPLOS ILUSTRATIVOS (tipo: "ejemplo"), basados en
 * situaciones típicas de los rubros de Rutia. No son testimonios de clientes y
 * la página los rotula como tales. No agregar cifras, resultados, empresas ni
 * valoraciones que no estén confirmados.
 *
 * Para publicar un testimonio real: cambiar `tipo` a "testimonio", completar
 * `empresa` y `cita` con el texto aprobado por el cliente (por escrito) y,
 * solo si hay autorización, `foto` con la ruta de la imagen en /public.
 * El diseño de la tarjeta se adapta solo.
 */
export type Experiencia = {
  tipo: "ejemplo" | "testimonio";
  nombre: string;
  perfil: string;
  desafio: string;
  conRutia: string;
  /** Solo para testimonios reales y autorizados. */
  empresa?: string;
  cita?: string;
  foto?: string;
};

export const EXPERIENCIAS: Experiencia[] = [
  {
    tipo: "ejemplo",
    nombre: "Gerardo",
    perfil: "Comisionista, responsable de tres camionetas",
    desafio:
      "Recibe pedidos de distintos clientes por WhatsApp y por teléfono, y cada mañana arma a mano qué lleva cada camioneta.",
    conRutia:
      "Centraliza los pedidos en un solo lugar, reparte las entregas entre las tres camionetas en el armado del día y ve qué se entregó, qué falló y qué quedó pendiente a medida que los choferes lo marcan desde el celular.",
  },
  {
    tipo: "ejemplo",
    nombre: "Tomás",
    perfil: "E-commerce con reparto propio",
    desafio:
      "Las ventas online se acumulan y hay que prepararlas, despacharlas y responder a los clientes que preguntan por su pedido.",
    conRutia:
      "Conecta su cuenta de Mercado Libre o importa los pedidos desde Excel, el depósito marca qué está preparado y después revisa entregadas, parciales, fallidas y reprogramadas con sus motivos para ajustar la operación.",
  },
  {
    tipo: "ejemplo",
    nombre: "Ornella",
    perfil: "Local de ropa y flores con entregas propias",
    desafio:
      "En fechas especiales se juntan muchos pedidos con dirección y horario, y anotarlos en un cuaderno deja de alcanzar.",
    conRutia:
      "Carga cada pedido con su fecha, franja horaria y dirección, mira en el calendario qué días vienen cargados y, si el cliente no está, la reprogramación queda registrada con su motivo.",
  },
  {
    tipo: "ejemplo",
    nombre: "Valeria",
    perfil: "Responsable de operaciones en una distribuidora",
    desafio:
      "Con varios choferes en la calle, la información queda repartida entre planillas, chats y llamadas.",
    conRutia:
      "Ve en una sola pantalla los pedidos, la preparación, qué lleva cada chofer y el estado de cada entrega, con el historial completo para responder un reclamo sin buscar en conversaciones.",
  },
];
