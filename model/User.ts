export class User {
  private nombre: string;
  private idCliente: number;
  private telefono: number;
  private email: string;

  constructor(nombre: string, idCliente: number, telefono: number, email: string) {
    this.nombre = nombre;
    this.idCliente = idCliente;
    this.telefono = telefono;
    this.email = email;
  }

  setNombre(nombre: string) {
    this.nombre = nombre
  }

  getNombre() {
    return this.nombre
  }

  setIdCliente(idCliente: number) {
    this.idCliente = idCliente
  }

  getIdCliente() {
    return this.idCliente
  }

  setTelefono(telefono: number) {
    this.telefono= telefono
  }

  getTelefono() {
    return this.telefono
  }

  setEmail(email: string) {
    this.nombre = email
  }

  getEmail() {
    return this.email
  }

  toString(): string {
    return `
    Nombre:   ${this.nombre}
    ID:       ${this.idCliente}
    Teléfono: ${this.telefono}
    Email:    ${this.email}
    `;
  }
}