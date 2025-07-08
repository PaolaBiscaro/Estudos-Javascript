# Javascript para Web

**Protocolo HTTP** é o protocolo de comunicação principal entre cliente-servidor.


# URL
A URL faz parte da requisição HTTP, ela indica o caminho e a porta da requisição:

**Requisição HTTP**

**URL:** 'https://pokeapi.co/api/v2/pokemon'
          ${IP}/${path = caminho de identificação do recurso}   

**IP:** https://pokeapi.co 
        Num servidor é feita a conversão de dominio para IP.
        Num dominio local(sua máquina) estaria: http://127.0.0.1:80

**PATH:** é a identificação do recurso, logo após o dominio, temos a parte que identifica o que estamos pedindo.


# Request Method
Diz respeito ao tipo de requisição que estamos fazendo, os tipos mais utilizados são:

**GET | POST | PUT | DELETE**

GET - buscar recurso
POST - inserir recurso
PUT - atualizar a recurso
DELETE - deletar a recurso


# Path Params
Parametros de Caminho, são valores que fazem parte do caminho da URL e servem para identificar um recurso específico, que seguem o formato **/recurso/valor**

*Por exemplo:* /pokemons/1 - Esta URL indica "Quero acessar o Pokémon com o ID 1"


# Query String
É um conjunto de pares chave=valor que aparece após o "?" na URL, usado para filtrar, buscar ou modificar resultados, sem identificar um único recurso, segue o **formato:/recurso?chave=valor&outraChave=outroValor**

*Por exemplo:* /pokemons?tipo=agua&ordem=asc - Esta URL indica "Quero todos os pokemons do tipo aguá ordenados de forma crescente."


# Request Headers e Response Headers

**Request Headers - Cabeçalhos da Requisição**, são informações enviadas pelo cliente (geralmente o navegador) para o servidor quando ele faz uma requisição (como abrir uma página ou buscar dados de uma API).

**Response Headers - Cabeçalhos da Resposta**, são informações enviadas pelo servidor como resposta á requisição do cliente. Eles vêm junto com os dados da resposta.


# Body e Status Code
É o corpo da minha requisição ou resposta, dependendo da requisição que você faz ou da resposta que recebe, é necessário um corpo para ela, com um volume maior de informações, por exemplo no uso do POST.

O corpo fica entre { }

```json
{
        "name": "teste",
        "valor": 1
}
```

**Status Code** - é o numero que indica o estado a requisição.
https://http.dog/
https://http.cat/
