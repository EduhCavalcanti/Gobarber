import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ Error: "Token não encontrado!" });
  };
  //Dividir o bearer do token
  const [bearer, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    //Incluir o id do usuário autenticado no req
    req.userId = decoded.id
    return next();

  } catch (error) {
    return res.status(401).json({ Erro: "Token invalido!" });
  };

};