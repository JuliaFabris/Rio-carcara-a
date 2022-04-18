
const express = require('express');
const path = require('path');
const app = express();
let homeRouter = require('./src/routes/home');

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

app.use('/', homeRouter);


app.use((req, res, next) => {
    res.status(404).render('404')
})

/* const handleError = require('./middlewares/handleErrors')
app.use(handleError); */
// error handler


app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

