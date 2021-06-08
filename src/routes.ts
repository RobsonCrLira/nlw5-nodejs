import { Router } from 'express';
import { SettingsControllerCreate } from './controller/SettingsController/SettingsControllerCreate';

const routes = Router();
const settingsControllerCreate = new SettingsControllerCreate()

routes.post('/settings', settingsControllerCreate.execute);
