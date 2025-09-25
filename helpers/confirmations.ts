import * as readline from "node:readline";
import "colors"

import inquirer from "inquirer";
console.clear();

export const ask = (question: string, validate: (input: string) => true | string): Promise<any>  => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {

    const prompt = () => {
      rl.question(question, (answer) => {
        const validation = validate(answer);
        if (validation === true) {
          rl.close();
          resolve(answer.trim());
        } else {
          console.log(`❌ ${validation}\n`);
          prompt(); 
        }
      });
    }
    prompt();
  });
}

export const confirmation = async (): Promise<"Y" | "N"> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    const ask = () => {
      rl.question("¿Confirma los datos ingresados? (Y/N)".blue + " ", (answer) => {
        const value = answer.trim().toUpperCase();

        if (value !== "Y" && value !== "N") {
          console.log(`\nDebes ingresar ${"Y".green } (sí) o ${"N".red } (no)\n`);
          ask(); // 🔁 vuelve a preguntar
        } else {
          rl.close();
          resolve(value as "Y" | "N");
        }
      });
    };
    ask();
  });
};

export const confirmation1 = async() => {
  const questions = await inquirer.prompt([
    {
      type: "input",
      name: "confirmation",
      message: "¿Confirma los datos ingresados? (Y/N)".blue,
      validate: (input: string) => {
        const value = input.trim().toUpperCase();
        if (value !== "Y" && value !== "N") {
          return "Debes ingresar Y (sí) o N (no)";
        }
        return true;
      }
    }
  ]);

  console.log(questions.confirmation.trim().toUpperCase());
  
  return await questions.confirmation.trim().toUpperCase()
}