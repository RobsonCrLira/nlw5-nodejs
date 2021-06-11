import { Router } from 'express';

import { SettingsControllerCreate } from './controller/SettingsController/SettingsControllerCreate';
import { UsersControllerCreate } from './controller/UsersController/UsersControllerCreate';

const routes = Router();
const settingsControllerCreate = new SettingsControllerCreate();
const usersControllerCreate = new UsersControllerCreate();

routes.post('/settings', settingsControllerCreate.execute);
routes.post('/users', usersControllerCreate.execute);

export { routes };
