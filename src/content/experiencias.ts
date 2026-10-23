/**
 * Testimonios de la home ("Lo que dicen quienes usan Rutia").
 *
 * Estados:
 *  - "borrador":   texto preparado para que la persona lo revise. Se publica
 *                  rotulado como ejemplo, SIN atribuirlo como declaración real.
 *  - "verificado": la persona aprobó el texto por escrito. Recién ahí se
 *                  muestra como testimonio, sin rótulo de ejemplo.
 *
 * Reglas:
 *  - `estrellas` solo se muestra si estado === "verificado" y la persona
 *    confirmó expresamente esa valoración.
 *  - `nombre` y `perfil` solo con datos confirmados. Si el nombre no está
 *    confirmado, dejarlo sin definir: la tarjeta muestra solo el perfil.
 *  - No agregar empresas, cargos ni resultados medibles no confirmados.
 *  - Guardar la aprobación (mail o mensaje) y anotar abajo la fecha en
 *    `aprobadoEl` al pasar un testimonio a "verificado".
 */
export type Testimonio = {
  id: string;
  estado: "borrador" | "verificado";
  nombre?: string;
  perfil: string;
  cita: string;
  /** Solo testimonios verificados con valoración confirmada (1 a 5). */
  estrellas?: 1 | 2 | 3 | 4 | 5;
  /** Fecha de la aprobación escrita (aaaa-mm-dd). Obligatoria si "verificado". */
  aprobadoEl?: string;
};

export const TESTIMONIOS: Testimonio[] = [
  {
    id: "gerardo",
    estado: "borrador",
    nombre: "Gerardo",
    perfil: "Comisionista · tres camionetas",
    cita: "Con tres camionetas en la calle, los pedidos me llegaban por WhatsApp, por teléfono y anotados en papel, y cada mañana armaba el reparto a mano. Ahora cargo todo en Rutia, reparto las entregas entre las camionetas y, a medida que los choferes las marcan desde el celular, veo qué se entregó y qué quedó pendiente.",
  },
  {
    id: "tomas",
    estado: "borrador",
    nombre: "Tomás",
    perfil: "E-commerce con reparto propio",
    cita: "Cuando crecieron las ventas online, preparar y despachar se empezó a desordenar. Con Rutia traemos los pedidos de Mercado Libre, el depósito marca lo que está listo y coordinamos las entregas desde un solo lugar. Después revisamos los reportes de entregadas y fallidas, con sus motivos, para ir ajustando la operación.",
  },
  {
    id: "ornella",
    estado: "borrador",
    nombre: "Ornella",
    perfil: "Local de ropa y flores",
    cita: "En fechas como el Día de la Madre se nos juntan muchísimos pedidos, cada uno con su dirección y su horario. Con Rutia cargamos cada entrega con su fecha y su franja, vemos qué días vienen más cargados y, si alguien no está, la reprogramación queda anotada.",
  },
  {
    id: "distribuidora",
    estado: "borrador",
    // Nombre y cargo pendientes de confirmación.
    perfil: "Responsable de operaciones de una distribuidora",
    cita: "Con varios choferes en la calle, la información estaba repartida entre planillas, chats y llamadas. Hoy veo en una sola pantalla qué lleva cada chofer y en qué estado está cada entrega, y si un cliente reclama, tengo el historial a mano.",
  },
];
