

export const nameValidation = (name: string) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if ( name.trim() === "" || name.trim() === null) return "El nombre no puede estar vacío"
  if ( name.length > 10 ) return "El nombre no puede superar los 10 caracteres"
  if ( !regex.test(name.trim()) ) return "El nombre solo puede contener letras y espacios"

  return true;
}


export const idClienteValidation = (id: string) => {
  if (!id || id.trim() === "") return "El ID de cliente no puede estar vacío";
  if (!/^\d+$/.test(id)) return "El ID de cliente debe contener solo números";
  if (id.length > 10) return "El ID de cliente no puede superar los 10 dígitos";
  if (id.length < 7) return "El teléfono debe tener mínimo 8 dígitos";
  return true;
};

export const telefonoValidation = (telefono: string) => {
  if (!telefono || telefono.trim() === "") return "El teléfono no puede estar vacío";
  if (!/^\d+$/.test(telefono)) return "El teléfono debe contener solo números";
  if (telefono.length < 7 || telefono.length > 10) return "El teléfono debe tener entre 7 y 10 dígitos";

  return true;
};

export const emailValidation = (email: string) => {
  const regex = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

  if (!email || email.trim() === "") return "El email no puede estar vacío";
  if (email.length > 50) return "El email no puede superar los 50 caracteres";
  if (!regex.test(email)) return "El formato del email no es válido";

  return true;
};