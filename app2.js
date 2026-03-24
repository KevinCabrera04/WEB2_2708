// --- Ejemplo 1: Creación de objetos simple ---
var vehiculoEjemplo = new Object();
vehiculoEjemplo.marca = 'Toyota';
vehiculoEjemplo.modelo = 'Corolla';
vehiculoEjemplo.anio = 2020;
console.log(vehiculoEjemplo);

var otroVehiculo = {
    marca: 'Honda',
    modelo: 'Civic',
    anio: 2022
};
console.log(otroVehiculo);

// --- Ejemplo 2: Objeto Complejo (Estudiante) ---
const estudiantePrototipo = {
    id: 10203040,
    nombre: 'Juan',
    primerApellido: 'Pérez',
    segundoApellido: 'García',
    numerosContacto: [5512345678, 5587654321],
    direccion: {
        calle: 'Avenida Siempre Viva',
        numero: '742',
        colonia: 'Centro',
        alcaldia: 'Cuauhtémoc',
        CP: 16600,
        ciudad: 'CDMX',
        pais: 'México'
    },
    historialAcademico: {
        preescolar: {
            nombre: 'Jardín de Niños ABC',
            esPrivada: false,
            saludar: function() {
                console.log('¡Hola, clase!');
            }
        },
        primaria: {
            nombre: 'Escuela Benito Juárez',
            esPrivada: false,
            tiempoRecreo: '30 min',
            jugar: function(tipoJuego) {
                console.log("Jugando a: " + tipoJuego);
            }
        },
        secundaria: {
            nombre: 'Secundaria Técnica 1',
            esPrivada: false,
            esBachillerato: false,
            realizarActividad: function(accion) {
                console.log('Actividad realizada: ' + accion);
            }
        }
    },
    rutina: {
        lectura: 'El Principito',
        ejercicio: 'Natación',
        obtenerHorario(hora) {
            return `${this.ejercicio} programado a las ${hora}`;
        }
    }
};

// --- Pruebas de ejecución ---
console.log(estudiantePrototipo.rutina.obtenerHorario("08:00 am"));
estudiantePrototipo.historialAcademico.preescolar.saludar();
estudiantePrototipo.historialAcademico.primaria.jugar('Fútbol');
estudiantePrototipo.historialAcademico.secundaria.realizarActividad('Laboratorio de Química');

// --- Manipulación del Objeto ---

// Verificar propiedad
console.log("¿Tiene nombre?: " + estudiantePrototipo.hasOwnProperty("nombre"));

// Leer propiedad
console.log("Nombre actual: " + estudiantePrototipo['nombre']);

// Crear nueva propiedad
estudiantePrototipo.promedioGral = 9.5;
console.log("Nuevo promedio: " + estudiantePrototipo.promedioGral);

// Actualizar propiedad
estudiantePrototipo.nombre = 'Carlos';
console.log("Nombre actualizado: " + estudiantePrototipo.nombre);

// Eliminar propiedad
delete estudiantePrototipo.segundoApellido;
console.log("Objeto tras eliminar apellido:", estudiantePrototipo);