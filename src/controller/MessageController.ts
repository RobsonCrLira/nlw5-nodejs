import { Request, Response } from 'express';

import { MessagesServices } from '../services/MessagesServices';

class MessageController {
   async execute(request: Request, response: Response): Promise<Response> {
      const { admin_id, text, user_id } = request.body;
      const messageServices = new MessagesServices();

      const message = await messageServices.create({
         admin_id,
         text,
         user_id,
      });

      return response.json(message);
   }

   async showByUser(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;

      const messageServices = new MessagesServices();

      const list = await messageServices.listByUser(id);

      return response.json(list);
   }
}
export { MessageController };
