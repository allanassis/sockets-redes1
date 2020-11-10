import socket
HOST = '127.0.0.1'     # Endereco IP do Servidor
PORT = 3000            # Porta que o Servidor esta
tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
dest = (HOST, PORT)
tcp.connect(dest)
print('Para sair use q\n')
msg = input()
while msg != 'q':
    # b = bytes(mystring, 'utf-8')
    tcp.send(bytes(msg, 'utf-8'))
    data = tcp.recv(1024)
    print(data)
    msg = data.decode("utf-8").split("=")

    print(f"resposta é: {msg}")
    msg = input()
    data = None
tcp.close()
