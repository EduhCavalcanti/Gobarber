module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, //Não vai poder ter usuário sem nome 
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Não vai permitir emails repetidos
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: { // Quando for cliente vai ser false, quando for prestador do serviço vai ser true
        type: Sequelize.BOOLEAN,
        defaultValue: false, //por padrão todo usuário vai ser um cliente 
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  down: queryInterface => {
    return queryInterface.dropTable('users');

  }
};
