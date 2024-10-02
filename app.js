const express = require('express');
const path = require('path');
const app = express();

const ejs = require('ejs');
// const fs = require('fs');

// const templatePath1 = path.join(__dirname, 'docs/index.ejs');
// const outputPath1 = path.join(__dirname, 'docs/index.html');
// const templatePath2 = path.join(__dirname, 'docs/aliados.ejs');
// const outputPath2 = path.join(__dirname, 'docs/aliados.html');
// const templatePath3 = path.join(__dirname, 'docs/contactos.ejs');
// const outputPath3 = path.join(__dirname, 'docs/contactos.html');
// const templatePath4 = path.join(__dirname, 'docs/productos.ejs');
// const outputPath4 = path.join(__dirname, 'docs/productos.html');

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/docs/views'));

// Servir archivos estáticos de Bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/font', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));
app.use('/css', express.static(path.join(__dirname, 'docs/css')));

app.use('/imges', express.static(path.join(__dirname, 'docs/images')));

// Ruta para la página principal

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


// app.listen(3000, () => {
//   console.log('Servidor escuchando en http://localhost:3000');
// });

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


// ejs.renderFile(templatePath1, {}, (err, str) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   fs.writeFileSync(outputPath1, str);
//   console.log('index.html has been generated');
// });

// ejs.renderFile(templatePath2, {}, (err, str) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   fs.writeFileSync(outputPath2, str);
//   console.log('index.html has been generated');
// });

// ejs.renderFile(templatePath3, {}, (err, str) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   fs.writeFileSync(outputPath3, str);
//   console.log('index.html has been generated');
// });

// ejs.renderFile(templatePath4, {}, (err, str) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   fs.writeFileSync(outputPath4, str);
//   console.log('index.html has been generated');
// });

