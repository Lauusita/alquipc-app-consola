
export const numEquiposValidation = (numEquipos: string) => {
  if (!numEquipos || numEquipos.trim() === "") return "La cantidad de equipos no puede estar vacía";
  if (!/^\d+$/.test(numEquipos)) return "La cantidad de equipos debe contener solo números";
  const value = parseInt(numEquipos);
  if (value < 2) return "La cantidad de equipos debe ser mayor que 2";
  if (value > 1000) return "La cantidad de equipos no puede superar los 1000";
  return true;
};


export const numDiasAlquilerValidation = (numDias: string) => {
  if (!numDias || numDias.trim() === "") return "Los días de alquiler no pueden estar vacíos";
  if (!/^\d+$/.test(numDias)) return "Los días de alquiler deben ser solo números";
  const value = parseInt(numDias);
  if (value <= 0) return "Debe alquilar al menos 1 día";
  if (value > 365) return "No puedes alquilar por más de 365 días";
  return true;
};


export const numDiasAdicionalesValidation = (numDias: string) => {
  if (!numDias || numDias.trim() === "") return "Los días adicionales no pueden estar vacíos";
  if (!/^\d+$/.test(numDias)) return "Los días adicionales deben ser solo números";
  const value = parseInt(numDias);
  if (value < 0) return "Los días adicionales no pueden ser negativos";
  if (value > 100) return "No puedes añadir más de 100 días adicionales";
  return true;
};
