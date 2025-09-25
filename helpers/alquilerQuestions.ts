import inquirer from "inquirer";
import { Alquiler } from "../model/Alquiler";
import { numDiasAdicionalesValidation, numDiasAlquilerValidation, numEquiposValidation } from "../validations/alquilerValidations";
import { ask } from "./confirmations";
import { TipoServicio } from "../types/tipoServicio";


export const alquierQuestions = async(tipoServicio: TipoServicio) => {

  const numEquipos = await ask(`${"1.".blue} Número de equipos (número): `, numEquiposValidation)
  const numDiasAlquiler = await ask(`${"2.".blue} Número de días del alquiler (número): `, numDiasAlquilerValidation)
  const numDiasAdicionales = await ask(`${"3.".blue} Número de días adicionales (número): `, numDiasAdicionalesValidation)
  console.log("\n");

  const alquiler = new Alquiler(tipoServicio, Number(numEquipos), Number(numDiasAlquiler), Number(numDiasAdicionales))

  return alquiler;
}