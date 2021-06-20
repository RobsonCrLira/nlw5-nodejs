import { Router } from 'express';

import { MessageController } from './controller/MessageController';
import { SettingsController } from './controller/SettingsController';
import { UsersController } from './controller/UsersController';

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessageController();

routes.post('/settings', settingsController.execute);
routes.post('/settings/:username', settingsController.findByUserName);
routes.post('/settings/:username', settingsController.update);

routes.post('/users', usersController.execute);

routes.post('/messages', messageController.execute);
routes.post('/messages/:id', messageController.showByUser);

export { routes };
