#! /usr/bin/env node

import inquirer from "inquirer";

let result: number = Math.floor(Math.random() * 11);
// console.log(result);

let answers = await inquirer.prompt([
  {
    name: "number",
    message: "Enter your number",
    type: "number",
  },
]);

if (result === answers.number) {
  console.log("Congragulation , you win");
} else {
  console.log("Please Try Agian");
}
