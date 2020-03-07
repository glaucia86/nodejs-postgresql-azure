# Projeto 1 - Desenvolvendo uma Aplicação CRUD Node.js com PostgreSQL

[![postgresql-04.gif](https://s5.gifyu.com/images/postgresql-04.gif)](https://gifyu.com/image/IucG)

Desenvolvimento de uma aplicação aplicação CRUD com Node.js persistindo os dados localmente no PostgreSQL. E ao final, iremos realizar o deploy dessa API no **[Azure App Service](https://docs.microsoft.com/azure/app-service/app-service-web-get-started-nodejs?WT.mc_id=nodejs_postgresql_azure-github-gllemos)**!

## Recursos Utilizados 🚀

* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=nodejs_postgresql_azure-github-gllemos)**
* **[Node.js](https://nodejs.org/en/)**
* **[Postman](https://www.getpostman.com/)**
* **[PostgreSQL - PgAdmin](https://www.postgresql.org/download/)**
* **[Pacote - node-postregres](https://node-postgres/)**
* **[Azure App Service](https://docs.microsoft.com/azure/app-service/app-service-web-get-started-nodejs?WT.mc_id=nodejs_postgresql_azure-github-gllemos)**
* **[Extensão Vs Code - Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice&WT.mc_id=nodejs_postgresql_azure-github-gllemos)**

## Sobre o Projeto 💻

Aqui ensino como você pode persistir localmente um dado no PostgreSQL com Node.js. E ao final do desenvolvimento da API aprenderemos a como realizar o deploy no serviço **[Azure App Service](https://docs.microsoft.com/azure/app-service/app-service-web-get-started-nodejs?WT.mc_id=nodejs_postgresql_azure-github-gllemos)**, testando no Swagger e Postman a API implementada na nuvem.

## Executando localmente a aplicação ⭐️

1. Para executar localmente a aplicação, você precisará criar a tabela no Pg Admin. O script encontra-se na pasta `sql` do projeto.

2. Depois bastam ir até: `project-1 => api` e executar o seguinte comando:

```bash
> npm i
```

3. Agora execute dentro da pasta `api` o projeto com o seguinte comando:

```bash
> nodemon
```

4. Abre o Postman. Agora você poderá:

| Método | Verbo HTTP | Endpoint |
|---|---|---|
| Create new Product | POST | `http://localhost:3000/api/products` |
| List All Products | GET | `http://localhost:3000/api/products` |
| Find Product by Id | GET | `http://localhost:3000/api/products/{id}`|
| Update Product by Id | UPDATE | `http://localhost:3000/api/products/{id}`|
| Delete Product by Id | DELETE | `http://localhost:3000/api/products/{id}`| 

## Links & Recursos Importantes ❗️

- ✅ **[Azure para devs JavaScript & Node.js](https://docs.microsoft.com/pt-br/javascript/azure/?WT.mc_id=nodejs_postgresql_azure-github-gllemos&view=azure-node-latest)**
- ✅ **[Início Rápido: Gerenciar blobs com o SDK do JavaScript v12 no Node.js](https://docs.microsoft.com/azure/storage/blobs/storage-quickstart-blobs-nodejs?WT.mc_id=nodejs_postgresql_azure-github-gllemos)**
- ✅ **[Criando um aplicativo Web do Node.js no Azure](https://docs.microsoft.com/azure/app-service/app-service-web-get-started-nodejs?WT.mc_id=nodejs_postgresql_azure-github-gllemos)**

## Tenho Dúvidas... O que Faço?! ❓

Caso tenham dúvidas aos códigos desenvolvidos durante a série de artigos, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/glaucia86/nodejs-postgresql-azure/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

