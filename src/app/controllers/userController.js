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
    return res.json({ Ok: 'true' })
  }
};

export default new userController();