const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
start();

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

async function start() {
  let done = false;
  while (!done) {
    let answer = await ask("Are we done?");
    answer = answer.toLowerCase();
    if (answer.includes("yes")) { done = true; }
    console.log("Running that loop!");
  }
  console.log("You are done!");
  process.exit();
}

function answerToLowerCase(string) {
  return string.toLowerCase();
}
