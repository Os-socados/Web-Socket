const WebSocket = require('ws')

function onError(ws, err) {
    console.error(`onError: ${err.message}`);
}
 
function onMessage(ws, data) {
    let numero
    if(msg="1"){
        numero = Math.random() * 1
    }                
    else{
        numero = Math.random() * 10
    }
    setInterval(() =>{},1000) 
    ws.send('.') 
}
 
function onConnection(ws, req) {
    ws.on('message', data => onMessage(ws, data));
    ws.on('error', error => onError(ws, error));
    console.log(`onConnection`);
}

module.exports = (server) => {
    const wss = new WebSocket.Server({
        server
    });
 
    wss.on('connection', onConnection);
 
    console.log(`OS SOCADOS ESTÃO ONLINE!`);
    return wss;
}
