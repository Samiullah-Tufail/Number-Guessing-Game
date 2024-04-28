#! /usr/bin/env node
import inquirer from "inquirer";
console.log("-------------------- welcome to number gussing game --------------------");
let result = Math.floor(Math.random() * 11);
// let playagian = true;
// console.log(result);
let answers = await inquirer.prompt([
    {
        name: "number",
        message: "Enter your number to guess, number range is 1 to 10:",
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
for (let i = 0; i <= 5; i++) {
    let result = Math.floor(Math.random() * 11);
    let answers1 = await inquirer.prompt([
        {
            name: "number",
            message: "Try again, number range is 1 to 10:",
            type: "number",
        },
    ]);
    if (result === answers1.number) {
        console.log("Congragulation , you win");
    }
    else if (result != answers1.number) {
        console.log(`You lost the game! Correct number was ${result} `);
        console.log("-------------------- loser --------------------");
    }
}
