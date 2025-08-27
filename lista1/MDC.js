const prompt = require("prompt-sync")();

console.clear();

console.log("Máximo Divisor Comum (método iterativo)");
console.log();

let dividendo = parseInt(prompt("Digite o dividendo: "));
let divisor = parseInt(prompt("Digite o divisor: "));
let resto = dividendo % divisor;

for (; resto !== 0;) {
    dividendo = divisor;
    divisor = resto;
    resto = dividendo % divisor;
}

console.log(`MDC(a, b) = ${divisor}`);
