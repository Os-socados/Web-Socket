const WebSocket = require('ws')
let numero = 1

function broadcast(number) {
    if (!this.clients) return
    this.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            number = number * numero
            client.send(number)
        }
    })
}

function onError(ws, err) {
    console.error(`onError: ${err.message}`)
}
 
function onConnection(ws, req) {
    ws.on('message', function(msg){
        console.log(msg)
        if(msg == "1"){
            numero = 1
        }                
        else{
            numero = 100
        }
    })
    ws.on('error', error => onError(ws, error))
    console.log(`onConnection`)
}

module.exports = (server) => {
    const wss = new WebSocket.Server({
        server
    })
 
    wss.on('connection', onConnection)
    wss.broadcast = broadcast

    console.log(`OS SOCADOS ESTÃO ONLINE!`)
    return wss
}
