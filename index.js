const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
app.use(express.static('public'));
const server = createServer(app);
const ioServer = new Server(server);

server.listen(3000, () => {
  console.log('Player: http://localhost:3000/player');
  console.log('Host: http://localhost:3000/host');
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
  ioClientHost.on('disableA4', () => {
    playerNamespace.emit('disableA4')
    hostNamespace.emit('disableA4')
  })
  ioClientHost.on('enableA4', () => {
    playerNamespace.emit('enableA4')
    hostNamespace.emit('enableA4')
  })
  ioClientHost.on('enableA1', () => {
    playerNamespace.emit('enableA1')
    hostNamespace.emit('enableA1')
  })
  ioClientHost.on('disableA1', () => {
    playerNamespace.emit('disableA1')
    hostNamespace.emit('disableA1')
  })
  ioClientHost.on('disableAllButtons', () => {
    playerNamespace.emit('disableAllButtons')
    hostNamespace.emit('disableAllButtons')
  })
  ioClientHost.on('enableAllButtons', () => {
    playerNamespace.emit('enableAllButtons')
    hostNamespace.emit('enableAllButtons')
  })
  ioClientHost.on('ans 1 wrong', () => {
    playerNamespace.emit('ans 1 wrong')
    hostNamespace.emit('ans 1 wrong')
  })
  ioClientHost.on('ans 2 wrong', () => {
    playerNamespace.emit('ans 2 wrong')
    hostNamespace.emit('ans 2 wrong')
  })
  ioClientHost.on('ans 3 wrong', () => {
    playerNamespace.emit('ans 3 wrong')
    hostNamespace.emit('ans 3 wrong')
  })
  ioClientHost.on('ans 4 wrong', () => {
    playerNamespace.emit('ans 4 wrong')
    hostNamespace.emit('ans 4 wrong')
  })
  ioClientHost.on('toQ1', (q11json) => {
    console.log(q11json)
    playerNamespace.emit('toQ1', q11json)
  })
  ioClientHost.on('show ans 1', () => {
    playerNamespace.emit('show ans 1')
  })
  ioClientHost.on('show cat', () => {
    playerNamespace.emit('show cat')
  })
  ioClientHost.on('show ans 2', () => {
    playerNamespace.emit('show ans 2')
  })
  ioClientHost.on('show ans 3', () => {
    playerNamespace.emit('show ans 3')
  })
  ioClientHost.on('show ans 4', () => {
    playerNamespace.emit('show ans 4')
  })
  ioClientHost.on('show q', () => {
    playerNamespace.emit('show q')
  })
  ioClientHost.on('countdown 60', () => {
    playerNamespace.emit('countdown 60')
  })
  ioClientHost.on('end clock', () => {
    playerNamespace.emit('end clock')
  })
});