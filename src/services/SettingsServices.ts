import { getCustomRepository } from 'typeorm';

import { SettingsRepository } from '../Repositories/SettingsRepository';

interface ISettingsServices {
   chat: boolean;
   username: string;
}
class SettingsServices {
   async execute({ chat, username }: ISettingsServices) {
      const settingsRepository = getCustomRepository(SettingsRepository);

      const userAlreadyExists = await settingsRepository.findOne({ username });

      if (userAlreadyExists) {
         throw new Error('User already exists!');
      }

      const settings = settingsRepository.create({ chat, username });

      await settingsRepository.save(settings);
      return settings;
   }
}
export { SettingsServices };
