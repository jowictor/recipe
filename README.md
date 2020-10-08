# Recipes API

API em Node.js para encontrar receitas a partir de ingredientes.

## Pré-requisitos e dependências
Este projeto foi construído com as seguintes dependências:

- [Node]
- [axios]
- [chai]
- [dotenv]
- [Express]

## Primeiros passos

Para obter uma cópia do projeto, clone este repositório executando o comando abaixo:


```shell
git clone https://github.com/jowictor/recipe.git
cd recipe/
```

Insira sua chave de acesso à [API do Giphy](https://developers.giphy.com/docs/) na variável `GIPHY_API_KEY` em `config/.env.example` e renomeie o arquivo para `.env`.

Em seguida, você pode [instalar os pacotes localmente e executar o projeto](#executando-localmente).


### Executando localmente

Instale as dependências com o gerenciador de pacotes de sua preferência e execute a aplicação com os comandos abaixo:

```shell
# npm
npm install
npm start
```

Faça uma requisição à `localhost:3000` e você deverá receber como resposta:

```json
{
  "message": "Hello it's a pleasure to meet you!"
}
```

Para fazer uso da API, consulte a [referência](#referência-da-api).

## Configuração

O projeto depende de três variáveis armazenadas em um arquivo de ambiente (`.env`), no formato `VAR=valor`.

As variáveis são:
- `GIPHY_API`: URL da API de buscas do Giphy. **Obrigatória**.
> Padrão: http://api.giphy.com/v1/gifs/search?q=

- `GIPHY_API_KEY`: chave de acesso à API do Giphy. **Obrigatória**.
> Chaves podem ser solicitadas seguindo a documentação disponível em: https://developers.giphy.com/docs/

- `PUPPY_API`: URL da API pública do Recipe Puppy. **Obrigatória**.
> Padrão: http://www.recipepuppy.com/api/?i=

Um arquivo de modelo é disponibilizado em `config/.env.example`. Basta criar uma cópia **Não esqueça deve ficar na mesma pasta ;)**, editar e renomear.
Aah lembre-se de ativar a opção para exibir itens ocultos nesta pasta.

> Se alguma das variáveis não for preenchida, será lançado um erro `Environment improperly configured, Please configure the environment in the config folder`.

## Referência da API

A API do projeto possui apenas um endpoint:

### GET /recipes/

Respeitando a seguinte chamada:

```
http://{HOST}/recipes/:{ingredient_1}/:{ingredient_2}?/:{ingredient_3}?
```
A partir dos ingredientes informados, é realizada uma consulta à API do Recipe Puppy, e consultamos à API do Giphy baseadas no título de cada receita.

**Exemplo:**

```
http://localhost:3000/recipes/onions/tomato
```
A resposta desta requisição será semelhante à seguinte:

```json
{
    "message": "Success",
    "status": 200,
    "data": {
        "keywords": [
            "onions",
            "tomato"
        ],
        "recipes":  [
            {
                "title": "\nGuacamole Dip Recipe\n\n",
                "ingredients": [
                    "avocado",
                    "onions",
                    "tomato"
                ],
                "link": "http://cookeatshare.com/recipes/guacamole-dip-2783",
                "gif": "https://giphy.com/gifs/guacamole-I3eVhMpz8hns4"
            },
            {
                "title": "\nHomemade Pizza Sauce For Canning Recipe\n\n",
                "ingredients": [
                    "green pepper",
                    "onions",
                    "tomato"
                ],
                "link": "http://cookeatshare.com/recipes/homemade-pizza-sauce-for-canning-12225",
                "gif": "https://giphy.com/gifs/ricardo-rp-pissa-WoKqL8nGDJfFwGzrmR"
            }
        ]
    }
        
}
```

### Teste unitaro

Foi implementado teste unitário onde ele valida o resultado retornado pela API, basta executar o comando abaixo:


```shell
npm test
```