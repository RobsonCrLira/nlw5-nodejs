import { Request, Response } from 'express';

import { UsersServices } from '../services/UsersServices';

class UsersController {
   async execute(request: Request, response: Response): Promise<Response> {
      const { email } = request.body;
      const userServices = new UsersServices();

      try {
         const user = await userServices.execute(email);

         return response.status(201).json(user);
      } catch (error) {
         return response.status(404).json(error);
      }
   }
}
export { UsersController };
