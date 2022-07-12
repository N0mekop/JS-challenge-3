'use strict';

const bernardName = "Bernard";
const bernardWeigh = 78;
const bernardHeight = 1.69;

const marcelName = "Marcel";
const marcelWeigh = 92;
const marcelHeight = 1.95;

/* IMC = poids en kg / taille² en m. */

function calculUserImc(userWeigh, userHeight) {
    return (userWeigh / (userHeight * userHeight));
}

const bernardImc = calculUserImc(bernardWeigh, bernardHeight).toFixed(2);
const marcelImc = calculUserImc(marcelWeigh, marcelHeight).toFixed(2);
/* console.log(bernardImc); */

function logUserImc(userName, userImc) {
    console.log(`Bonjour ${userName}, ton IMC est de ${userImc}`);
}

logUserImc(bernardName, bernardImc);
logUserImc(marcelName, marcelImc);

let bernardHigherIMC = false;

if (bernardImc > marcelImc) {
    bernardHigherIMC = true;
    console.log(`L'IMC de Bernard (${bernardImc}) est supérieur à celui de Marcel (${marcelImc}).`);
} else {
    console.log(`L'IMC de Bernard (${bernardImc}) est indérieur à celui de Marcel (${marcelImc}).`);
}

/* Faire une fonction */

if (bernardImc >= 41) {
    console.log(`${bernardName}: Obésité importante`);
} else if (bernardImc >= 31) {
    console.log(`${bernardName}: Obésité`);
} else if (bernardImc >= 26) {
    console.log(`${bernardName}: Surpoids`);
} else if (bernardImc >= 21) {
    console.log(`${bernardName}: Poids normal`);
} else {
    console.log(`${bernardName}: Insuffisance pondérale`);
}

if (marcelImc >= 41) {
    console.log(`${marcelName}: Obésité importante`);
} else if (marcelImc >= 31) {
    console.log(`${marcelName}: Obésité`);
} else if (marcelImc >= 26) {
    console.log(`${marcelName}: Surpoids`);
} else if (marcelImc >= 21) {
    console.log(`${marcelName}: Poids normal`);
} else {
    console.log(`${marcelName}: Insuffisance pondérale`);
}

