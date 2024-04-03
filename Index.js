#! /usr/bin/env node
import inquirer from "inquirer";
let result = Math.floor(Math.random() * 11);
let playagian = true;
// console.log(result);
console.log("-------------------- welcome to number gussing game --------------------");
let answers = await inquirer.prompt([
    {
        name: "number",
        message: "Enter uor number to guess, number range is 1 to 10:",
        type: "number",
    },
]);
if (result === answers.number) {
    console.log("Congragulation , you win");
}
else if (result != answers.number) {
    console.log(`You lost the game! Correct number was ${result} `);
    console.log("-------------------- loser --------------------");
}
