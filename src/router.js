import { Router } from 'express';

import userController from './app/controllers/userController';
import sessionController from './app/controllers/sessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/', userController.store);
routes.post('/session', sessionController.store);

routes.put('/update', authMiddleware, userController.update)

export default routes;