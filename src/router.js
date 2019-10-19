import { Router } from 'express';

import userController from './app/controllers/userController';
import sessionController from './app/controllers/sessionController';

const routes = new Router();

routes.post("/", userController.store);
routes.post('/session', sessionController.store);

export default routes;