import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth'

class sessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ Error: "Usuário não existe" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ Error: "Senha não confere" })
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.experesIn
      }),
    });
  };
};

export default new sessionController();