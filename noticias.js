let http = require('http');

// Criando um Servidor
let server = http.createServer(function(req, res) {

    //Trabalhando com a URL
    let categoria = req.url

    if(categoria == '/tecnologia'){
        res.end('<html><body>Noticias de Tecnologia</body></html>');

    } else if(categoria == '/moda'){
        res.end('<html><body>Noticias de Moda</body></html>');

    } else if(categoria == '/beleza'){
        res.end('<html><body>Noticias de Beleza</body></html>');

    } else {
        //Resposta da requisição
        res.end('<html><body>Portal de noticias</body></html>');
    }
});
server.listen(3000);
