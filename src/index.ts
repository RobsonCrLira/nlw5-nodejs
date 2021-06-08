import express from 'express';
import './database'; // eslint-disable-line

const app = express();

app.listen(process.env.PORT, () => {
   console.log(`🔥 Server is Running in Port ${process.env.PORT}`);
});// eslint-disable-line no-console
