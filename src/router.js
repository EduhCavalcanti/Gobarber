import { Router } from 'express';

import userController from './app/controllers/userController';
import sessionController from './app/controllers/sessionController';

const routes = new Router();

routes.post('/', userController.store);
routes.post('/session', sessionController.store);

routes.put('/update', userController.update)

export default routes;