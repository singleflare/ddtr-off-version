const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 3000)
app.use(express.static('public'));

const { join } = require('path');
const ioServer = require('socket.io')(server)


console.log('Player: http://localhost:3000/player');
console.log('Host: http://localhost:3000/host');

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

  ioClientHost.on('load q11', (data) => {
    playerNamespace.emit('load q11', data)
  })
  ioClientHost.on('load q12', (data) => {
    playerNamespace.emit('load q12', data)
  })
  ioClientHost.on('load q21', (data) => {
    playerNamespace.emit('load q21', data)
  })
  ioClientHost.on('load q22', (data) => {
    playerNamespace.emit('load q22', data)
  })
  ioClientHost.on('load q31', (data) => {
    playerNamespace.emit('load q31', data)
  })
  ioClientHost.on('load q32', (data) => {
    playerNamespace.emit('load q32', data)
  })
  ioClientHost.on('load q41', (data) => {
    playerNamespace.emit('load q41', data)
  })
  ioClientHost.on('load q42', (data) => {
    playerNamespace.emit('load q42', data)
  })
  ioClientHost.on('load q51', (data) => {
    playerNamespace.emit('load q51', data)
  })
  ioClientHost.on('load q52', (data) => {
    playerNamespace.emit('load q52', data)
  })
  ioClientHost.on('load q61', (data) => {
    playerNamespace.emit('load q61', data)
  })
  ioClientHost.on('load q62', (data) => {
    playerNamespace.emit('load q62', data)
  })
  ioClientHost.on('load q71', (data) => {
    playerNamespace.emit('load q71', data)
  })
  ioClientHost.on('load q72', (data) => {
    playerNamespace.emit('load q72', data)
  })
  ioClientHost.on('load q81', (data) => {
    playerNamespace.emit('load q81', data)
  })
  ioClientHost.on('load q82', (data) => {
    playerNamespace.emit('load q82', data)
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
  ioClientHost.on('countdown 30', () => {
    playerNamespace.emit('countdown 30')
  })
  ioClientHost.on('end clock', () => {
    playerNamespace.emit('end clock')
  })
  ioClientHost.on('set money', (money) => {
    playerNamespace.emit('set money', money)
  })
  ioClientHost.on('reset money put', () => {
    playerNamespace.emit('reset money put')
  })

  ioClientHost.on('start q sound', () => {
    playerNamespace.emit('start q sound')
  })
  ioClientHost.on('start prog sound', () => {
    playerNamespace.emit('start prog sound')
  })
  ioClientHost.on('after 60s sound', () => {
    playerNamespace.emit('after 60s sound')
  })
  ioClientHost.on('before q sound', () => {
    playerNamespace.emit('before q sound')
  })
  ioClientHost.on('pass q sound', () => {
    playerNamespace.emit('pass q sound')
  })
  ioClientHost.on('win sound', () => {
    playerNamespace.emit('win sound')
  })
  ioClientHost.on('lose sound', () => {
    playerNamespace.emit('lose sound')
  })
  ioClientHost.on('stop all sounds', () => {
    playerNamespace.emit('stop all sounds')
  })
});