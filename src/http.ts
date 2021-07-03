import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { Server } from 'socket.io';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.get('/pages/client', (request, response) => response.render('html/client'));

const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo WS - WebSocket

io.on('connection', () => {
   // console.log('Connection', socket.id);
});
app.use(express.json());

app.use(routes);

export { http, io };
