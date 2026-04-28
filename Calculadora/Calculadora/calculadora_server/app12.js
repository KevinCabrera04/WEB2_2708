const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta del servidor
app.use(express.static(__dirname));

// Ruta principal para servir el HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index7.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Calculadora corriendo en http://localhost:${PORT}`);
});