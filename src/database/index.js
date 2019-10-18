//Conexão do sequelize com model ( postgres com model (tabelas) )
import Sequelize from 'sequelize';

import User from '../app/models/User';
import dataBaseConfig from '../config/database';

//Vai criar um array com todos os models
const models = [User];

class Database {
  constructor() {
    //chamar o método init
    this.init();
  };
  //método init que vai fazer a conexão com o model
  init() {
    this.connection = new Sequelize(dataBaseConfig);
    //Faz a conexão com o model com o init
    models.map(model => model.init(this.connection));
  };
};

export default new Database;