import { TipoServicio } from "../types/tipoServicio";


export class Alquiler {
  private tipoServicio: TipoServicio;
  private numEquipos: number;
  private numDiasAlquiler: number;
  private numDiasAdicionales: number;

  constructor(
    tipoServicio: TipoServicio,
    numEquipos: number,
    numDiasAlquiler: number,
    numDiasAdicionales: number
  ) {
    this.tipoServicio = tipoServicio;
    this.numEquipos = numEquipos;
    this.numDiasAlquiler = numDiasAlquiler;
    this.numDiasAdicionales = numDiasAdicionales;
  }

  public setNumEquipos(numEquipos: number) {
    this.numEquipos = numEquipos
  }

  public getNumEquipos() {
    return this.numEquipos
  }

  public setNumDiasAlquiler(numDiasAlquiler: number) {
    this.numDiasAlquiler = numDiasAlquiler
  }

  public getNumDiasAlquiler() {
    return this.numDiasAlquiler
  }

  public setNumDiasAdicionales(numDiasAdicionales: number) {
    this.numDiasAdicionales= numDiasAdicionales
  }

  public getNumDiasAdicionales() {
    return this.numDiasAdicionales
  }

  public getTipoServicio(tipoServicio: typeof TipoServicio) {
    return this.getTipoServicio
  }

  public toString(): string {
    return `\nTipo de servicio:         ${this.tipoServicio.green}.
    Número de equipos:        ${this.numEquipos.toString().cyan}
    Días de alquiler:         ${this.numDiasAlquiler.toString().cyan}
    Días adicionales:         ${this.numDiasAdicionales.toString().cyan}
    \n
    `.trim();
  }
}