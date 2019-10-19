import User from '../models/User';


class userController {
  async store(req, res) {
    const exists = await User.findOne({
      where: { email: req.body.email }
    });
    //Se tiver email cai no if, se for null passa
    if (exists) {
      return res.status(400).json('Email já existe')
    }

    const user = await User.create(req.body);
    const { id, name, email, provider } = user;
    return res.json({
      id,
      name,
      email,
      provider
    });

  };
  async update(req, res) {
    const { email, oldPassword } = req.body;
    //Vai buscar o id do usuário no bando de dados
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const exists = await User.findOne({
        where: { email }
      });
      if (exists) {
        return res.status(400).json('Email já existe');
      };
    };
    //Só vai cair aqui se a senha dele bate e se for fazer a troca da senha 
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ Erro: "Senha não confere" });
    };
    //Se passar por todo os ifs vai poder alterar 
    const { name, provider, id } = await User.update(req.body);

    return res.json({
      email,
      name,
      provider,
      id
    });
  };
};

export default new userController();