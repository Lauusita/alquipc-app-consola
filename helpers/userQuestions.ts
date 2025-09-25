import inquirer from "inquirer";
import { emailValidation, idClienteValidation, nameValidation, telefonoValidation } from "../validations/userValidations";
import { User } from "../model/User";
import { ask } from "./confirmations";

export const userQuestions = async() => {
  const nombre = await ask(`${"1.".green} Nombre del Cliente: `, nameValidation);
  const idCliente = await ask(`${"2.".green} Id del Cliente: `, idClienteValidation);
  const telefono = await ask(`${"3.".green} Teléfono del Cliente: `, telefonoValidation);
  const email = await ask(`${"4.".green} Email del Cliente: `, emailValidation);

  const user = new User(nombre, Number(idCliente), Number(telefono), email);
  return user;
}
