/* eslint class-methods-use-this: ["error", { "exceptMethods": ["execute"] }] */
import { Request, Response } from 'express';

import { SettingsServices } from '../../services/SettingsServices';

class SettingsControllerCreate {
   async execute(request: Request, response: Response): Promise<Response> {
      const { chat, username } = request.body;

      const settingsServices = new SettingsServices();

      try {
         const settings = await settingsServices.execute({ chat, username });

         return response.status(201).json(settings);
      } catch (error) {
         return response.status(404).json(error);
      }
   }
}

export { SettingsControllerCreate };
