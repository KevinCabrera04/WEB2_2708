function AgregarPantalla(value) {
    // Asegúrate de que el ID sea "display" en tu HTML
    document.getElementById("display").value += value;
}

function limpiarPantalla() {
    document.getElementById("display").value = "";
}

function calcularResultado() {
    try {
        // eval toma el string y lo resuelve
        var resultado = eval(document.getElementById("display").value);
        document.getElementById("display").value = resultado;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
