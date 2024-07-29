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
  ioClientPlayer.on('plus1', () => {
    playerNamespace.emit('plus1')
    hostNamespace.emit('plus1')
  })
  ioClientPlayer.on('plus2', () => {
    playerNamespace.emit('plus2')
    hostNamespace.emit('plus2')
  })
  ioClientPlayer.on('plus3', () => {
    playerNamespace.emit('plus3')
    hostNamespace.emit('plus3')
  })
  ioClientPlayer.on('plus4', () => {
    playerNamespace.emit('plus4')
    hostNamespace.emit('plus4')
  })
  ioClientPlayer.on('minus1', () => {
    playerNamespace.emit('minus1')
    hostNamespace.emit('minus1')
  })
  ioClientPlayer.on('minus2', () => {
    playerNamespace.emit('minus2')
    hostNamespace.emit('minus2')
  })
  ioClientPlayer.on('minus3', () => {
    playerNamespace.emit('minus3')
    hostNamespace.emit('minus3')
  })
  ioClientPlayer.on('minus4', () => {
    playerNamespace.emit('minus4')
    hostNamespace.emit('minus4')
  })
});

hostNamespace.on('connection', (ioClientHost) => {
  ioClientHost.on('plus1', () => {
    playerNamespace.emit('plus1')
    hostNamespace.emit('plus1')
  })
});