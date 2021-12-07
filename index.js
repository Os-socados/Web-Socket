const app = require('./app');
const appWs = require('./app-ws');
const express = require('express')
const pagina = express()

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Aplicação rodando.`);
})
 
appWs(server)

pagina.get("/", function(req, res){
    res.sendFile(__dirname + '/cliente.html')
}).listen(8000)