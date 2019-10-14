//Estrutura da aplicação.................
import express from 'express';
import routes from './router';
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
export default new App().server;