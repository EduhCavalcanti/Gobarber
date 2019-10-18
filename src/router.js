import { Router } from 'express';

import userController from './app/controllers/userController'

const routes = new Router();

routes.post("/", userController.store);

export default routes;