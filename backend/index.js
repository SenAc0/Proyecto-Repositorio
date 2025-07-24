const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors()); // Permite solicitudes CORS


app.use(express.json()); // Permite leer JSON

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.get('/ask', (req, res) => {
    res.json({
        message: 'Proyecto de repositorios de documentos, que utiliza jerarquia de carpetas y archivos, permitiendo al usuario hacer busquedas sobre el, en futuro se espera agregar asistente de IA para ayudar en la busqueda de documentos'
    });
});


app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
