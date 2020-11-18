# Trabalho de sockets
Trabalho de sockets da disciplina de redes 1 na uerj

Consiste em um servidor UDP escrito em javascript e um client UDP escrito em python

Se o servidor receber um inteiro, deve incrementar esse inteiro e retornar
Se o servidor receber um caracter, deve inverte a caixa desse caracter e retorna-lo
Se o servidor receber uma string, deve inverte a mesma e retorna-la

# Rodando

Simplementes entrar na pasta server e rodar `node server.js`

Irá aparecer uma mensagem informando que o servidor está rodando

Após o servidor rodando abrir outra sessão de terminal e ir na pasta client e rodar o comando `python client.py`


## Protocolo

Foi criado um protocolo simples para realizar esse trabalho

Os dados enviados para o servidor são no formato `{opção}=msg`

Onde `{opção}` pode assumir os valores de 1, 2 ou 3.

Primeiro vem a opção que será executada e depois o dado que será processado

Os dados recebedos do servidor estão no formato `data=msg` ou `error=msg` se houver algum erro.

## Requisitos

nodejs >= 0.10
python >=3.4