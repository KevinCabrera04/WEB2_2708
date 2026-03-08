let opcionUser = parseint(prompt(`
    Tienes 3 vidas
    Elige un numero del 1 al 10:`));

let NumMaq = Math.floor(Math.random()*(max-min)) + min;

let vida = 3;

while(NumMaq !== opcionUser&&vida>1){
    vida --;
    opcionUser = parseInt(promt(`I_ntenta de nuevo`))
};

 if (NumMaq === opcionUser){
    console.log ("Ganaste");
 }
 else{
    "Pierdes una vida"
 }
 

console.log(NumeroAleatorio(1-10))

