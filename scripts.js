let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp|FreeCodeCamp|FreecodeCamp|FreeCodecamp|FreeCOdeCamp|FrEeCoDeCamp|FrEeCodECamp|FReeCodeCAmp/; // Altere esta linha
let result = fccRegex.test(myString);

console.log(result)