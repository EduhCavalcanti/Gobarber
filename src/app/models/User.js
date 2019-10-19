import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'

class User extends Model {
  //Método chamado automaticamente quando sequelize for chamado
  static init(sequelize) {
    //Vai chamar o método init da classe pai (Model)
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL, // campo que só vai existir no código e nunca no bando de dados
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN
    }, { sequelize }); //Segundo parâmetro deve ser passado aqui, passa o sequelize do init, pode passar mais configurações 

    //Encriptando a senha direto no model
    this.addHook('beforeSave', async (user) => { // addhook() com parametro beforeSave, ele é usado antes de salvar no banco de dados
      //Vai verificar se existe um password
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this; // Sempre vai retornar o model que acabou de ser inicializado aqui dentro
  };
  //Compara a senha que foi digitada com a do banco de dados
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  };
};

export default User;