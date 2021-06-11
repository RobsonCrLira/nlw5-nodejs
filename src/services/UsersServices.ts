import { getCustomRepository } from 'typeorm';

import { UsersRepository } from '../Repositories/UsersRepository';

class UsersServices {
   async execute(email: string) {
      const usersRepository = getCustomRepository(UsersRepository);
      console.log(usersRepository);

      const userAlreadyExists = await usersRepository.findOne({ email });

      if (userAlreadyExists) {
         throw new Error('User already exists!');
      }

      const user = usersRepository.create({ email });

      await usersRepository.save(user);

      return user;
   }
}
export { UsersServices };
