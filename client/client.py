import socket
HOST = '127.0.0.1'     
PORT = 3000       
udp_server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
dest = (HOST, PORT)

print('Para sair use q\n')
msg = input()
while msg != 'q':
    udp_server.sendto(bytes(msg, 'utf-8'), dest)
    data = udp_server.recv(1024)
    print(data)
    x = data.decode("utf-8").split("=")

    print(f"resposta é: {x}")
    msg = input()
    data = None
udp_server.close()