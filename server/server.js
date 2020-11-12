const net = require("net")
var dgram = require("dgram");

var server = dgram.createSocket("udp4");

const PORT = "3000"

server.on("connect", function(){
    console.log("Endereço do cliente: " + connection.remoteAddress + ":" + connection.remotePort)
})


server.on("message", function(buffer, rinfo){
    const data = buffer.toString()
    const dataList = data.split("=")
    const option = dataList[0]
    switch (option) {
        case "1":

            const number = +dataList[1]
            if (Number.isNaN(number)) {
                server.send("error=Na opção 1 é necessário enviar um inteiro na msg", rinfo.port, rinfo.address)
            }
            else {
                server.send("data=" + (number + 1), rinfo.port, rinfo.address)
            }
            break;
        case "2":
            var char = dataList[1].toString()
            if (char.length !== 1) {
                server.send("error=Na opção 2 é necessário enviar apenar um caracter",rinfo.port, rinfo.address)
            }
            else {
                var asciiNumber = char.charCodeAt()

                if (asciiNumber === char.toLowerCase().charCodeAt()) {
                    server.send("data=" + char.toUpperCase(), rinfo.port, rinfo.address)
                }
                else {
                    server.send("data=" + char.toLowerCase(), rinfo.port, rinfo.address)
                }
            }
            break;
        case "3":
            const sentence = dataList[1].toString()
            const invertedSentence = sentence.split("").reverse().join("")
            server.send("data=" + invertedSentence, rinfo.port, rinfo.address)
        default:
            break;
    }
})

server.on("error", function(err) {
    console.error("Erro name: ", err.name)
    console.error("Error message: ", err.message)
    console.error("Error stack trace: ", err.stack)
})

server.on("close", function(){
    console.log("Bye Bye! :D")
})

server.on("listening", function(){
    var address = server.address();
    console.log("server listening " +
        address.address + ":" + address.port);
})

server.bind(PORT)