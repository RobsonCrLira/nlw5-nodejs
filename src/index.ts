import { http } from './http';
import './websockets/client';
import './websockets/admin';

http.listen(process.env.PORT, () => {
   console.log(`🔥 Server is Running in Port ${process.env.PORT}`);
});
