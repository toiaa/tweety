const express = require( 'express' );
const morgan = require('morgan'); //middleware application logger
const nunjucks = require( 'nunjucks' );
const tweetBank = require('./tweetBank.js');
const routes = require('./routes')//sabe que cuando requeris a una carpeta busca el index en esa carpeta

const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan('tiny'));
app.use(express.static('./public'));
app.use('/',routes);


app.listen(3000, function(){
    console.log('Estas escuchando en el puerto 3000')
});


/*

Un data store para contener los tweets en el servidor. No es una base de datos persistente sino un arreglo de JavaScript para mantener objetos en la RAM del servidor.
Una homepage con todos los tweets de los usuarios.
Un formulario para publicar nuevos tweets.
Un página de perfil que muestre los tweets de un usuario específico.

 */