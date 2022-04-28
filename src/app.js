const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

/* Enrutadores */
let homeRouter = require('./routes/home');
let backRouter = require('./routes/backRouter');

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

/* Capturar informacion */
app.use(express.urlencoded({ extended : false}));
app.use(express.json())

/* rutas*/
app.use('/', homeRouter);
app.use('/back', backRouter);


app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

