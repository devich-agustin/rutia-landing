/**
 * Testimonios de la home ("Lo que dicen quienes usan Rutia").
 *
 * Testimonios de usuarios reales de Rutia, confirmados por Rutia el
 * 2026-10-23. Reglas para agregar o editar:
 *  - Solo personas reales que usan Rutia, con el texto aprobado por ellas.
 *  - `estrellas` solo si la persona confirmó expresamente esa valoración.
 *  - No agregar empresas, cargos ni resultados medibles no confirmados.
 */
export type Testimonio = {
  id: string;
  nombre: string;
  perfil: string;
  cita: string;
  /** Solo con valoración confirmada por la persona (1 a 5). */
  estrellas?: 1 | 2 | 3 | 4 | 5;
};

export const TESTIMONIOS: Testimonio[] = [
  {
    id: "gerardo",
    nombre: "Gerardo",
    perfil: "Comisionista · tres camionetas",
    cita: "Con tres camionetas en la calle, los pedidos me llegaban por WhatsApp, por teléfono y anotados en papel, y cada mañana armaba el reparto a mano. Ahora cargo todo en Rutia, reparto las entregas entre las camionetas y, a medida que los choferes las marcan desde el celular, veo qué se entregó y qué quedó pendiente.",
  },
  {
    id: "tomas",
    nombre: "Tomás",
    perfil: "E-commerce con reparto propio",
    cita: "Cuando crecieron las ventas online, preparar y despachar se empezó a desordenar. Con Rutia traemos los pedidos de Mercado Libre, el depósito marca lo que está listo y coordinamos las entregas desde un solo lugar. Después revisamos los reportes de entregadas y fallidas, con sus motivos, para ir ajustando la operación.",
  },
  {
    id: "ornella",
    nombre: "Ornella",
    perfil: "Local de ropa y flores",
    cita: "En fechas como el Día de la Madre se nos juntan muchísimos pedidos, cada uno con su dirección y su horario. Con Rutia cargamos cada entrega con su fecha y su franja, vemos qué días vienen más cargados y, si alguien no está, la reprogramación queda anotada.",
  },
];
