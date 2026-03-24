//iniciamos arreglo vacio
let nombre = [];
//funcion para agregar nombres
function agregarNombre(){
    let nombre =prompt("Ingresa tu nombre");
    if(nombre){
        nombres.push(nombre);
        alert(`! Nombre: ${nombre} Agregado exitosamente`);
    }else{
        alert("El campo no puede esatr vacio");
    }
}

//funcion para mostrar nombre
function mostrarNombre(){
    if(nombres.lengh===0){
        alert("El Arreglo esta vacio,\n no tenemos nombres")
    }else{
        let mensaje ="Nombres almacenados\n";
        nombres.forEach((nombre, indice)=>{
            mensaje+=`${indice+1} .${nombre}\n`;
        });
        alert(mensaje)
    }
}

//funcion 


function mostrarMenu(){

    let opcion;
    do{
        opcion=prompt(`
            Opcciones disponibles
            1.- Agregar nombre
            2.-Mostrar nombre 
            3.-Salir
            "Elige una opcion"
            `);

        switch(opcion){
            case'1':
                agregarNombre();
                //console.log("Estamos en contruccion de modulo('Agregar nombre()')")
                break;
            case'2':
                mostrarNombre();
                //console.log ("Estamos en construccion del modulo ")
                break;
            case'3': 
                alert("Saliendo del programa");
                break;
            default: 
                alert("Opcion no valida. Intenta nuevamente")
                break;
            }

    }while(opcion !==3)

}

//inicia aplicación
mostrarMenu();