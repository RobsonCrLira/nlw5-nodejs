import { getCustomRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { UsersRepository } from '../Repositories/UsersRepository';

class UsersServices {
   private usersRepository: Repository<User>;

   constructor() {
      this.usersRepository = getCustomRepository(UsersRepository);
   }

   async execute(email: string) {
      const userAlreadyExists = await this.usersRepository.findOne({ email });

      if (userAlreadyExists) {
         throw new Error('User already exists!');
      }

      const user = this.usersRepository.create({ email });

      await this.usersRepository.save(user);

      return user;
   }

   async findByEmail(email: string) {
      const user = await this.usersRepository.findOne({
         email,
      });
      return user;
   }
}
export { UsersServices };
