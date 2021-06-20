import { Request, Response } from 'express';

import { SettingsServices } from '../services/SettingsServices';

class SettingsController {
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

   async findByUserName(
      request: Request,
      response: Response,
   ): Promise<Response> {
      const { username } = request.params;

      const settingsServices = new SettingsServices();
      const settings = await settingsServices.findByUserName(username);
      return response.json(settings);
   }

   async update(request: Request, response: Response): Promise<Response> {
      const { username } = request.params;
      const { chat } = request.body;

      const settingsServices = new SettingsServices();

      const settings = await settingsServices.update(username, chat);
      return response.json(settings);
   }
}

export { SettingsController };
