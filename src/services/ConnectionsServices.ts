import { getCustomRepository, Repository } from 'typeorm';

import { Connections } from '../entities/Connections';
import { IConnectionsCreate } from '../interfaces/IConnectionsCreate';
import { ConnectionsRepository } from '../Repositories/ConnectionsRepository';

class ConnectionsServices {
   private connectionsRepository: Repository<Connections>;

   constructor() {
      this.connectionsRepository = getCustomRepository(ConnectionsRepository);
   }

   async create({ socket_id, user_id, admin_id, id }: IConnectionsCreate) {
      const connection = this.connectionsRepository.create({
         socket_id,
         user_id,
         admin_id,
         id,
      });

      await this.connectionsRepository.save(connection);

      return connection;
   }

   async findByUserId(user_id: string) {
      const connection = await this.connectionsRepository.findOne({ user_id });
      return connection;
   }

   async findAllWithoutAdmin() {
      const connections = await this.connectionsRepository.find({
         where: { admin_id: null },
         relations: ['user'],
      });
      return connections;
   }

   async findBySocketID(socket_id: string) {
      const connection = await this.connectionsRepository.findOne({
         socket_id,
      });

      return connection;
   }

   async updateAdminID(user_id: string, admin_id: string) {
      await this.connectionsRepository
         .createQueryBuilder()
         .update(Connections)
         .set({ admin_id })
         .where('user_id = :user_id', {
            user_id,
         })
         .execute();
   }

   async deleteBySocketId(socket_id: string) {
      await this.connectionsRepository
         .createQueryBuilder()
         .delete()
         .where('socket_id = :socket_id', {
            socket_id,
         })
         .execute();
   }
}
export { ConnectionsServices };
