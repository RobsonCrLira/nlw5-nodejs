import { getCustomRepository, Repository } from 'typeorm';

import { Setting } from '../entities/Settings';
import { ISettingsServices } from '../interfaces/ISettingsServices';
import { SettingsRepository } from '../Repositories/SettingsRepository';

class SettingsServices {
   private settingsRepository: Repository<Setting>;

   constructor() {
      this.settingsRepository = getCustomRepository(SettingsRepository);
   }

   async execute({ chat, username }: ISettingsServices) {
      const userAlreadyExists = await this.settingsRepository.findOne({
         username,
      });

      if (userAlreadyExists) {
         throw new Error('User already exists!');
      }

      const settings = this.settingsRepository.create({ chat, username });

      await this.settingsRepository.save(settings);
      return settings;
   }

   async findByUserName(username: string) {
      const settings = this.settingsRepository.findOne({ username });
      return settings;
   }

   async update(username: string, chat: boolean) {
      await this.settingsRepository
         .createQueryBuilder()
         .update(Setting)
         .set({ chat })
         .where('username =:username', { username })
         .execute();
   }
}
export { SettingsServices };
