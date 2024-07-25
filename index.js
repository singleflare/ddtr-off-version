const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
app.use(express.static('public'));
const server = createServer(app);
const ioServer = new Server(server);

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

app.get('/', (req, res) => {
  res.send("HelloWorld")
})

app.get('/player', (req, res) => {
  res.sendFile(join(__dirname, './public/pages/player.html'))
})

app.get('/host', (req, res) => {
  res.sendFile(join(__dirname, './public/pages/host.html'))
})

const playerNamespace = ioServer.of('/player');
const hostNamespace = ioServer.of('/host');

playerNamespace.on('connection', (ioClientPlayer) => {

});

hostNamespace.on('connection', (ioClientHost) => {

});