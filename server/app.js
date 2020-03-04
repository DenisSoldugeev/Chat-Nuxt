const app = require('express') ();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('IO CONNECTED')

  socket.on ('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + ' Server'
      })
    }, 500)
  })

  socket.emit('newMessage', {
    text: 'What'
  })
});

module.exports = {
  app,
  server
};

