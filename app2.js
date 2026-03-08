let opccionUSer = prompt(`
    Elija un día de la semana
    1:lunes
    2: Martes
    3: Miercoles
    4: jueves
    5: viernes
    6: Sabado
    7: Domingo`)

switch (opccionUSer) {
    case "1":
        console.log("Lunes");
        break;
    case "2":
        console.log("Martes")
        break;
    case "3":
        console.log("Miercoles");
        break;
    case "4":
        console.log("Juevest");
        break;
    case "5":
        console.log("Viernes");
        break;
    case "6":
        console.log("Sabado");
        break;
    case "7":
        console.log("Domingo");
        break;
    
    default:
        console.log("No valido");

}

