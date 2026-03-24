let productos = [
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos', precio: 750},
    {nombre: 'sombrero',  precio: 350}
];

let carrito =[];
function mostrarMenu(){
    let menu = "\nSelecciona un producto a agregar\n";
    for (let i = 0; i < productos.length; i++){
        menu+=(i+1)+' . '+productos[i].nombre+ ' - _$'+productos[i.precio]+"\n";
    }
    menu +=  (productos.length+1)+".- Ver carrito y Total\n";
    menu += (productos.length+2)+ ".- Salir"
    return menu; 

}
function agregarCarrito(index){
    let productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log("El producto .-"+productoSeleccionado.nombre+"Agregar a el carrito");
    console.log("Prodecto agregado")
}

function mostrarCarritoTotal(){
    if(carrito.length===0){
        console.log("Carrito vacio")
    }else{
        let mensajeCarrito = "Carrito de compras\n";

        var total = 0;
        for(let i=0; i<carrito.length; i++){
            mensajeCarrito+=+(i+1)+" . "+carrito[i].nombre+"-"+carrito[i].precio;
            total+= carrito[i].precio; 
        }
        mensajeCarrito+="\nTotal: $"+total;
        console.log(mensajeCarrito);
    }
}

let opcion;
do{
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);
    if(isNaN(opcion) || opcion < 1 || opcion > 1 || opcion > productos.length + 2){
        console.log("Opcion no es valida")
    }else if(opcion>= 1 && opcion<= producto.length){
        agregarCarrito(opcion-1);
    }else if(opcion === productos.length+1){
        mostrarCarritoTotal();
    }

}while(opcion !== producto.length +2);
console.log("Gracias por su visita")