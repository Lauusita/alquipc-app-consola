import type { Alquiler } from "./Alquiler";
import type { User } from "./User";
import { TipoServicio } from "../types/tipoServicio";
import type { Factura } from "../types/tipoServicio";
import { v4 as uuidv4 } from "uuid";

export class ProcesarAlquiler {
  private numServicio: number;
  private valorAlquiler: number;
  private valorDiasAdicionales: number;
  private total: number;
  private descuento: number;
  private valorDomicilio: number;
  private Alquiler: Alquiler;
  private Usuario: User;
  
  constructor(
    Alquiler: Alquiler,
    Usuario: User
  ) {
    this.Alquiler = Alquiler
    this.Usuario = Usuario
    this.numServicio = 0
    this.valorAlquiler = 0
    this.valorDiasAdicionales = 0
    this.total = 0
  }
  
  public setNumServicio(numServicio: number) {
    this.numServicio = numServicio
  }

  public getNumServicio() {
    return this.numServicio
  }

  public getTipoServicio(tipoServicio: TipoServicio): number {
    switch (tipoServicio) {
      case TipoServicio.DENTRO_CIUDAD:
        return 1
      
      case TipoServicio.FUERA_CIUDAD:
        return 2
      
      case TipoServicio.DENTRO_ESTABLECIMIENTO:
        return 3
      
      default:
        break;
    }
    return this.numServicio
  }
 
  public async getValorAlquiler(tipoServicio: TipoServicio) {

    try {
      const alquiler = this.Alquiler
      const user = this.Usuario
      
      // alquiler
      const numDiasAlquiler =  alquiler.getNumDiasAlquiler()
      const numEquipos = alquiler.getNumEquipos()
      const numDiasAdicionales = alquiler.getNumDiasAdicionales()

      // usuario
      const cliente = user.getNombre()
      const email = user.getEmail()
      const telefono = user.getTelefono()
      const idCliente = user.getIdCliente()

      this.valorAlquiler = 35000 * (numEquipos * numDiasAlquiler)
      this.valorDiasAdicionales = numDiasAdicionales * 34500

      
      let descuentoAdicionales = 0;
      
      if (numDiasAdicionales > 0) {
        descuentoAdicionales = this.valorDiasAdicionales * (0.02 * numDiasAdicionales);
        this.valorDiasAdicionales -= descuentoAdicionales;
      }
      
      this.total = this.valorDiasAdicionales + this.valorAlquiler
      
      let factura: Factura = {
        idFactura: uuidv4(),
        cliente,
        email,
        telefono,
        idCliente,
        diasAdicionales: numDiasAdicionales,
        diasAlquiler: numDiasAlquiler,
        numeroEquipos: numEquipos,
        tipoServicio: tipoServicio,
        valorDiasAdicionales: this.valorDiasAdicionales,
        valorAlquiler: this.valorAlquiler,
        totalPagar: this.total
      }

      if (numDiasAlquiler === 0 || numEquipos === 0) {
        console.error("El numero de días ni el alquiler pueden ser nulos")
        return;
      }

      this.numServicio = this.getTipoServicio(tipoServicio)

      switch (this.numServicio) {
        case 2:   
          this.valorDomicilio = this.total * 0.05;
          this.total += this.valorDomicilio;

          return factura = {
            ...factura, 
            totalPagar: this.total,
            valorDomicilio: this.valorDomicilio
          }
        case 3:
          this.descuento = this.total * 0.05;
          this.total -= this.descuento;

          return factura = {
            ...factura, 
            totalPagar: this.total,
            descuento: this.descuento
          }

        default:
          return factura;
      }
    } catch (error) {
      console.error("Hubo un error, por favor ingrese de nuevo.")
    }
  }
}