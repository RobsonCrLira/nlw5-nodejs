/* eslint class-methods-use-this: ["error", { "exceptMethods": ["execute"] }] */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../../Repositories/SettingsRepository';

class SettingsControllerCreate {
   async execute(request: Request, response: Response) {
      const { chat, username } = request.body;

      const settingsRepository = getCustomRepository(SettingsRepository);

      const settings = settingsRepository.create({ chat, username });

      await settingsRepository.save(settings);

      return response.json(settings);
   }
}

export { SettingsControllerCreate };
