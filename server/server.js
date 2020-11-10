const net = require("net")

const PORT = "3000"

const server = net.createServer(function (connection) {

    console.log("Endereço do cliente: " + connection.remoteAddress + ":" + connection.remotePort)

    connection.on("connect", function (data) {
        connection.write("data", data)
    })

    connection.on('error', function (err) {
        console.log('client disconnected');
        console.log('error', err);
    });

    connection.on("data", function (buffer) {
        const data = buffer.toString()
        const dataList = data.split("=")
        const option = dataList[0]
        switch (option) {
            case "1":

                const number = +dataList[1]
                if (Number.isNaN(number)) {
                    connection.write("error=Na opção 1 é necessário enviar um inteiro na msg")
                }
                else {
                    connection.write("data=" + (++number))
                }
                break;
            case "2":
                var char = dataList[1].toString()
                if (char.length !== 1) {
                    connection.write("error=Na opção 2 é necessário enviar apenar um caracter")
                }
                else {
                    var asciiNumber = char.charCodeAt()

                    if (asciiNumber === char.toLowerCase().charCodeAt()) {
                        connection.write("data=" + char.toUpperCase())
                    }
                    else {
                        connection.write("data=" + char.toLowerCase())
                    }
                }
            case "3":
                const sentence = dataList[1].toString()
                const invertedSentence = sentence.split("").reverse().join("")
                connection.write("data=" + invertedSentence)
            default:
                break;
        }
    })

    connection.on('end', function () {
        console.log('client disconnected');
    });

    connection.on("close", function (hadError) {
        console.log("Ocorreu algum erro de tranmissão", hadError)
    })
})


server.listen(PORT, function () {
    const serverAddress = server.address()
    const adress = serverAddress.address + ":" + serverAddress.port
    console.log("Servidor escutando no endereço ", adress)
})
