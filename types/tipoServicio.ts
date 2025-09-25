// export const TipoServicio = {
//   DENTRO_CIUDAD: "DENTRO DE LA CIUDAD",
//   FUERA_CIUDAD: "FUERA DE LA CIUDAD",
//   DENTRO_ESTABLECIMIENTO: "DENTRO DEL ESTABLECIMIENTO",
// } as const;

// export type TipoServicio = typeof TipoServicio[keyof typeof TipoServicio];

export enum TipoServicio {
  DENTRO_CIUDAD = "DENTRO DE LA CIUDAD",
  FUERA_CIUDAD = "FUERA DE LA CIUDAD",
  DENTRO_ESTABLECIMIENTO = "DENTRO DEL ESTABLECIMIENTO",
}

export interface Factura {
  cliente: string;
  idCliente: number;
  telefono: number;
  email: string;

  tipoServicio: TipoServicio

  numeroEquipos: number;
  diasAlquiler: number;
  valorAlquiler: number;

  diasAdicionales: number;
  valorDiasAdicionales: number;

  descuento?: number;
  valorDomicilio?: number;
  totalPagar: number;
}