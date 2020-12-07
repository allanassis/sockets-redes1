var dgram = require('dgram');

var server = dgram.createSocket('udp4');
var handlers = require('./handlers')

const PORT = '9902'

server.on('message', function (buffer, rinfo) {
    const data = buffer.toString()
    const dataList = data.split('=')

    if (dataList.length !== 2) {
        handlers.badData(server, { infor: rinfo })
    }

    else if (dataList.length === 2) {

        const option = dataList[0]
        const msg = { data: dataList[1], info: rinfo }

        switch (option) {
            case '1':
                handlers.optionOne(server, msg)
                break;
            case '2':
                handlers.optionTwo(server, msg)
                break;
            case '3':
                handlers.optionThree(server, msg)
                break;
            default:
                handlers.unknown(server, msg)
                break;
        }
    }
})

server.on('error', function (err) {
    console.error('Erro name: ', err.name)
    console.error('Error message: ', err.message)
    console.error('Error stack trace: ', err.stack)
})

server.on('close', function () {
    console.log('Bye Bye! :D')
})

server.on('listening', function () {
    var address = server.address();
    console.log('Servidor ouvindo no endereço: ' +
        address.address + ':' + address.port);
})

server.bind(PORT)