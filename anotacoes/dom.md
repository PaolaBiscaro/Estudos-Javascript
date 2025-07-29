# DOM

https://developer.mozilla.org/pt-BR/
docs/Web/API/Document_Object_Model/Introduction


O DOM (Document Object Model) é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web.
Ele é uma interface de programação para os documentos HTML e XML, embora o DOM seja frequentemente acessado usando Javascript, não é uma parte da linguagem. Ele pode ser acessado por outras linguagens.
Ele é uma representação orientada a objetos, da página web.


# getElementsByTagName("p")

Busca todos os elementos HTML com a tag especificada, no caso "p" (paragrafo)


# onload

É um evento do JavaScript que é disparado quando a página (ou um elemento especifico) termina de carregar completamente.

```javascript
    window.onload = function () {
        alert("A página terminou de carregar!");
    };
```