import express from 'express';
import { createServer } from 'http'
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});




app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT || '3000');
httpServer.listen(port, () => {
  console.log(`listening on port ${port}`);
});
