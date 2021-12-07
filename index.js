const appWs = require('./app-ws');
const express = require('express')
const pagina = express()

const server = pagina.listen(process.env.PORT || 3000, () => {
    console.log(`Aplicação rodando.`);
})
 
const web = appWs(server)

pagina.get("/", function(req, res){
    res.sendFile(__dirname + '/cliente.html')
}).listen(8000)

setInterval(() => {
    web.broadcast(Math.random());
}, 700)