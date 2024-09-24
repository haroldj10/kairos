const express = require('express');
const path = require('path');
const app = express();



// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos de Bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/font', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.use('/imges', express.static(path.join(__dirname, 'public/images')));

// Ruta para la página principal


app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Kairós', message: '¡Hola, mundo!' });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Información', message: '¡Hola, mundo!' });
});

app.get('/productos', (req, res) => {
  res.render('productos');
});

app.get('/aliados', (req, res) => {
  res.render('aliados');
});

