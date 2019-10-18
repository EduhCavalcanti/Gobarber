import Sequelize, { Model } from 'sequelize';

class User extends Model {
  //Método chamado automaticamente quando sequelize for chamado
  static init(sequelize) {
    //Vai chamar o método init da classe pai (Model)
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      provide: Sequelize.BOOLEAN
    }, { sequelize });//Segundo parâmetro deve ser passado aqui, passa o sequelize do init, pode passar mais configurações 
  };
};

export default User;