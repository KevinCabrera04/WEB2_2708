
let numero1 = parseInt(promt("introduce un numero"));
let numero2 = parseInt(promt("introduce un numero"));

if (numero1 > numero2) {
    console.log("El número " + numero1 + " es mayor que " + numero2);
} else if (numero2 > numero1) {
    console.log("El número " + numero2 + " es mayor que " + numero1);
} else {
    console.log("Ambos números son iguales.");
}