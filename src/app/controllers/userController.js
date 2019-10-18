import User from '../models/User';

class userController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }
};

export default new userController();