const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;


app.set('views', path.resolve(__dirname,'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, '../public')));
//app.use(methodOverride('_method')); 

app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser())
//app.use(session({
    //secret: 'RíoCarcaraná',
   // resave: false,
   // saveUninitialized: true,
//}))
//app.use(cookieSession);
let homeRouter = require('./routes/home.js');
app.use('/', homeRouter);

let backRouter = require('./routes/backRouter')
app.use('/back', backRouter);

/*app.use((req, res, next) => {
    res.status(404).render('404')
})*/

/* const handleError = require('./middlewares/handleErrors')
app.use(handleError); */
// error handler


app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

