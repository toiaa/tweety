// escribir rutas aquí
//esto es un modulo

const router = require('express').Router();

let tweetsDeEjemplo = [
    { id: 1, name: "juan", content: "este es un tweeettt de juan" },
    { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
    { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
];

router.get('/', function (req, res) {
    res.render( 'index', { tweets: tweetsDeEjemplo });
});

/* router.get('/tweets', function(req, res){
    res.render( 'index', list());
});
 */

module.exports = router;