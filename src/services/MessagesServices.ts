import { getCustomRepository, Repository } from 'typeorm';

import { Message } from '../entities/Message';
import { IMessageCreate } from '../interfaces/IMessageCreate';
import { MessagesRepository } from '../Repositories/MessagesRepository';

class MessagesServices {
   private messagesRepository: Repository<Message>;

   constructor() {
      this.messagesRepository = getCustomRepository(MessagesRepository);
   }

   async create({ admin_id, text, user_id }: IMessageCreate) {
      const message = this.messagesRepository.create({
         admin_id,
         text,
         user_id,
      });

      await this.messagesRepository.save(message);

      return message;
   }

   async listByUser(user_id: string) {
      const list = await this.messagesRepository.find({
         where: { user_id },
         relations: ['user'],
      });

      return list;
   }
}

export { MessagesServices };
