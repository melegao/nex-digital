# Teste técnico para Nex Digital

Essa é a documentação oficial da entrega.

Foram utilizadas as seguintes técnologias para o desenvolvimento da aplicação:

### Backend

- Node.js
- Sequelize.js
- Postgres

### Fronend

- React.js

# Backend

A API possui 10 endpoins que serão mostrados na documentação.

O JSON para utilizar no Insomnia pode ser baixo pelo link: https://1drv.ms/u/s!AsND7ZuKDISJgphrnzIWsjHiERR35g?e=owwGfk

# Iniciando o projeto

**Crie um banco de dados postgres em sua máquina para o bom funcionamento do projeto.**

Em seu terminal, acesse a pasta backend e rode o comando **yarn** para instalar as dependências.

```
yarn
```

Após a instalação, crie um arquivo .env na raíz do projeto, seguindo o exemplo do arquivo .env.example.

Preencha com os dados faltantes e salve o arquivo.

Em seguida, rode a migração utilizando o comando:

```
npx sequelize-cli db:migrate
```
Após a migração, é hora de iniciar o projeto, para isso, utlize o comando
```
yarn dev
```
**IMPORTANTE**
```
O projeto está rodando na porta 3333
```

# Rotas

<h2 align ='center'> Cadastro de usuário </h2>

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
	"name": "João da Silva",
	"email": "joao@gmail.com",
	"password": "1234"
}
```

### Retorno esperado:

`STATUS 201 - CREATED`

```json
{
	"id": 44,
	"name": "João da Silva",
	"email": "joao@gmail.com",
	"createdAt": "2023-01-22T03:38:04.935Z",
	"updatedAt": "2023-01-22T03:38:04.935Z"
}
```

<h2 align ='center'> Login de usuário </h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
	"email": "joao@gmail.com",
	"password": "1234"
}
```

### Retorno esperado:

`STATUS 200 - OK`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsImVtYWlsIjoiam9hb0BnbWFpbC5jb20iLCJpYXQiOjE2NzQzNTg4MTEsImV4cCI6MTY3NDM2NjAxMX0.F2copOdolrPq4qMmBcMZg3ZjiAEXT8f5ZS0fdU_ak30",
	"userId": 44
}
```

<h2 align ='center'> Listando todos os usuários </h2>

`GET /users - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.

```json
No content
```

### Retorno esperado:

`STATUS 200 - OK`

```json
[
	{
		"id": 41,
		"name": "Maria da Silva",
		"email": "maria@gmail.com",
		"createdAt": "2023-01-20T20:36:47.925Z",
		"updatedAt": "2023-01-20T20:37:21.324Z"
	},
	{
		"id": 42,
		"name": "Fernanda da Silva",
		"email": "fernanda@mail.com",
		"createdAt": "2023-01-21T18:45:26.027Z",
		"updatedAt": "2023-01-21T18:45:26.027Z"
	},
	{
		"id": 43,
		"name": "José da Silva",
		"email": "jose@mail.com",
		"createdAt": "2023-01-21T19:08:33.098Z",
		"updatedAt": "2023-01-21T19:08:33.098Z"
	},
	{
		"id": 44,
		"name": "João da Silva",
		"email": "joao@gmail.com",
		"createdAt": "2023-01-22T03:38:04.935Z",
		"updatedAt": "2023-01-22T03:38:04.935Z"
	}
]
```

<h2 align ='center'> Listando um usuário específico </h2>

`GET /users/:id - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.

```json
No content
```

### Retorno esperado:

`STATUS 200 - OK`

```json
{
	"id": 44,
	"name": "João da Silva",
	"email": "joao@gmail.com",
	"createdAt": "2023-01-22T03:38:04.935Z",
	"updatedAt": "2023-01-22T03:38:04.935Z"
}
```

<h2 align ='center'> Editando um usuário </h2>

`PATCH /users/:id - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.

### Somente o próprio usuário pode editar seu cadastro.

```json
{
	"name": "João da Silva Santos"
}
```

### Retorno esperado:

`STATUS 200 - OK`

```json
{
	"id": 44,
	"name": "João da Silva Santos",
	"email": "joao@gmail.com",
	"createdAt": "2023-01-22T03:38:04.935Z",
	"updatedAt": "2023-01-22T03:47:31.418Z"
}
```
<h2 align ='center'> Deletando um usuário </h2>

`DELETE /users/:id - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.

### Somente o próprio usuário pode excluir seu cadastro.

```json
No content
```

### Retorno esperado:

`STATUS 200 - OK`

```json
{
	"message": "User deleted with success!"
}
```
<h2 align ='center'> Cadastrando um produto </h2>

`POST /product - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.

```json
{
	"name": "Microondas 20L",
	"description": "O microondas de 20 litros é idal para todas as famílias.",
	"price": 349,
	"ownerId": 44
}
```

### Retorno esperado:

`STATUS 201 - CREATED`

```json
{
	"id": 27,
	"name": "Microondas 20L",
	"description": "O microondas de 20 litros é idal para todas as famílias.",
	"price": "349.00",
	"ownerId": 44,
	"updatedAt": "2023-01-22T03:51:57.900Z",
	"createdAt": "2023-01-22T03:51:57.900Z"
}
```
<h2 align ='center'> Listando todos os produtos </h2>

`GET /product - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.

```json
No content
```

### Retorno esperado:

`STATUS 200 - OK`

```json
[
	{
		"id": 27,
		"name": "Microondas 20L",
		"description": "O microondas de 20 litros é idal para todas as famílias.",
		"price": "349.00",
		"createdAt": "2023-01-22T03:51:57.900Z",
		"updatedAt": "2023-01-22T03:51:57.900Z",
		"ownerId": 44
	},
	{
		"id": 28,
		"name": "Geladeira Brastemp",
		"description": "A melhor geladeira do mercado, ideal para a sua casa.",
		"price": "2399.90",
		"createdAt": "2023-01-22T03:53:23.705Z",
		"updatedAt": "2023-01-22T03:53:23.705Z",
		"ownerId": 41
	}
]
```
<h2 align ='center'> Editando um produto </h2>

`PATCH /product - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.
### Somente o usuário dono do produto pode edita-lo.

```json
{
	"price": 299.99
}
```

### Retorno esperado:

`STATUS 200 - OK`

```json
{
	"id": 27,
	"name": "Microondas 20L",
	"description": "O microondas de 20 litros é idal para todas as famílias.",
	"price": "299.99",
	"createdAt": "2023-01-22T03:51:57.900Z",
	"updatedAt": "2023-01-22T03:55:23.219Z",
	"ownerId": 44
}
```

<h2 align ='center'> Deletando um produto </h2>

`PATCH /product/:id - FORMATO DA REQUISIÇÃO`

### Token necessário para acessar o endpoint. Deve ser informado no header da requisição.
### Somente o usuário dono do produto pode exclui-lo.

```json
No content
```

### Retorno esperado:

`STATUS 200 - OK`

```json
{
	"message": "Product deleted with success!"
}
```


# Frontend

Foi desenvolvido um layout simples e clean para a apresentação do projeto. A aplicação é totalmente funcionando, podendo cadastrar um novo usuário e fazer login com ele.

Esse usuário pode cadastrar / editar e excluir os seus próprios produtos.

É possível visualizar produtos de outros usuários, entretanto, somente seus respectivos donos podem exclui-los.

Foram utilizadas algumas bibliotecas como: Axios, React-Hook-Form, Styled-Components entre outras.

**IMPORTANTE**
```
O projeto está rodando na porta 3000
```



# Iniciando o projeto

Em seu terminal, acesse a pasta frontend e rode o comando **yarn** para instalar as dependências.

```
yarn
```

Após a instalação das dependências, rode o comando a seguir para iniciar a aplicação

```
yarn start
```

___