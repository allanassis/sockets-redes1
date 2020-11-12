var optOne = function (server, msg) {
    const number = +msg.data
    
    if (Number.isNaN(number)) {
        var buf = new Buffer("error=Na opção 1 é necessário enviar um inteiro na msg", 'utf8');
        server.send(buf,0, buf.length,  msg.info.port, msg.info.address)
    }
    else {
        var buf = new Buffer("data=" + (number + 1), 'utf8');
        server.send(buf, 0, buf.length, msg.info.port, msg.info.address)
    }
}
var two = 
module.exports = { optionOne: optOne }