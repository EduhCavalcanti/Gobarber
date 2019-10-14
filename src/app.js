//Estrutura da aplicação.................

const express = require('express');
const routes = require('./router');
//Utilizando classes para ficar mais organizado e mais didatico
class App {
  constructor() {
    //Criando server
    this.server = express();
    //Chamando os métodos
    this.Middlewares();
    this.routes();
  };

  //Métodos
  Middlewares() {
    this.server.use(express.json());
  };

  routes() {
    this.server.use(routes);
  };
};
//Exportando o server
module.exports = new App().server;