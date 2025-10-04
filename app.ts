import * as readline from "node:readline";
import "colors"

// LAURA ARTETA

import { confirmation } from "./helpers/confirmations";
import { userQuestions } from "./helpers/userQuestions";
import { alquierQuestions } from "./helpers/alquilerQuestions";
import { TipoServicio, type Factura } from "./types/tipoServicio";
import { ProcesarAlquiler } from "./model/ProcesarAlquiler";

console.log("=====================================================".green);
console.log("    Bienvenido estimado cliente a 'A L Q U I P C'  ");
console.log("                   Laura Arteta  ".red);
console.log("=====================================================\n".green);

const imprimirFactura = (f: Factura) => {
  console.log("📌 DETALLES DE FACTURA".yellow.bold);
  console.log(`Id factura: `.cyan + `${f.idFactura}`.white);

  console.log("\n📌 DATOS DEL CLIENTE".yellow.bold);
  console.log(`Nombre: `.cyan + `${f.cliente}`.white);
  console.log(`ID Cliente: `.cyan + `${f.idCliente}`.white);
  console.log(`Teléfono: `.cyan + `${f.telefono}`.white);
  console.log(`Email: `.cyan + `${f.email}`.white);

  console.log("\n📌 DETALLES DEL ALQUILER".yellow.bold);
  console.log(`Tipo de Servicio: `.cyan + `${f.tipoServicio}`.white);
  console.log(`Número de Equipos: `.cyan + `${f.numeroEquipos}`.white);
  console.log(`Días de Alquiler: `.cyan + `${f.diasAlquiler}`.white);
  console.log(`Días Adicionales: `.cyan + `${f.diasAdicionales}`.white);

  console.log("\n💰 VALORES A PAGAR".yellow.bold);
  console.log(`Valor Alquiler: `.cyan + `$${f.valorAlquiler.toFixed(2)}`.green);
  console.log(`Valor Días Adicionales: `.cyan + `$${f.valorDiasAdicionales.toFixed(2)}`.green);

  if (f.descuento) {
    console.log(`Valor Descuento: `.yellow + `${f.descuento.toFixed(2).green}`)
  } 

  if (f.valorDomicilio) {
    console.log(`Valor Domicilio: `.yellow + `${f.valorDomicilio.toFixed(2).green}`)
  }

  console.log(`Total a Pagar: `.cyan.bold + `$${f.totalPagar.toFixed(2)}`.bgGreen.black);
};

const main = async() => {
  let qUser = await userQuestions()
  console.log(qUser.toString())

  let uConfirmation = await confirmation() as string
  
  if (uConfirmation === "N") {
    qUser = await userQuestions()
    console.log(qUser.toString())
    uConfirmation = await confirmation()
  } 

  console.log("\n=====================================================".green);
  console.log("    Diligencie la información acerca del alquiler  ");
  console.log("=====================================================\n".green);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function seleccionarServicio(): Promise<TipoServicio> {
    return new Promise((resolve) => {
      console.log("   ¿Qué tipo de servicio desea?\n".magenta);

      console.log(`${"1.".magenta } Dentro de la ciudad`);
      console.log(`${"2.".magenta } Fuera de la ciudad`);
      console.log(`${"3.".magenta } Dentro del establecimiento\n`);

      rl.question("Seleccione una opción (1-3): ", (answer) => {
        let tipo: TipoServicio;
        switch (answer.trim()) {
          case "1":
            tipo = TipoServicio.DENTRO_CIUDAD;
            break;
          case "2":
            tipo = TipoServicio.FUERA_CIUDAD;
            break;
          case "3":
            tipo = TipoServicio.DENTRO_ESTABLECIMIENTO;
            break;
          default:
            console.log("Opción inválida. Intente de nuevo.");
            return seleccionarServicio().then(resolve);
        }
        resolve(tipo);
        rl.close();
      });
    });
  }
    
  const tipoServicio = await seleccionarServicio() as TipoServicio;
  let qAlquiler = await alquierQuestions(tipoServicio);
  
  console.log(qAlquiler.toString())

  let aConfirmation = await confirmation() as string
  
  if (aConfirmation === "N") {
    qAlquiler = await alquierQuestions(tipoServicio)
    console.log(qAlquiler.toString())
    aConfirmation = await confirmation()
  } 

  console.log("\n=====================================================".green);
  console.log(`   Factura para el Servicio ${tipoServicio} `.white.bold);
  console.log("=====================================================\n".green);
  
  const factura = await new ProcesarAlquiler(qAlquiler, qUser).getValorAlquiler(tipoServicio)
  
  imprimirFactura(factura)

  const finalRl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  finalRl.question(`\nPresione ${"Enter".red} para salir...`, () => {
    finalRl.close();
  });
}

main()

