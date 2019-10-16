module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, // faz a conversão de camelCase para underline... ex: userGrup ==> user_grup
    underscoredAll: true

  }
};