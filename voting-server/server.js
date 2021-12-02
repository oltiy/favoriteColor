const express = require('express');
const app= express();
const http = require('http').createServer(app);

const colors = [
    {
      id: 1,
      color: 'red',
      totalVotes: 0,
    },
    {
      id: 2,
      color: 'blue',
      totalVotes: 0,
    },
    {
      id: 3,
      color: 'green',
      totalVotes: 0,
    },
    {
      id: 4,
      color: 'yellow',
      totalVotes: 0,
    },
    {
      id: 5,
      color: 'gray',
      totalVotes: 0,
    },
    {
      id: 6,
      color: 'orange',
      totalVotes: 0,
    },
    {
      id: 7,
      color: 'pink',
      totalVotes: 0,
    },
    {
      id: 8,
      color: '#800020',
      totalVotes: 0,
    },
  ];

const io = require('socket.io')(
    http,{
        cors:{
            origin:'*'
        }
    }
)

io.on('connection', socket => {
    socket.on('ClientReady',() => {
        const max = Math.max(...colors.map(c => c.totalVotes));
        socket.emit('ColorList', { colors, max });
    });

    socket.on('ClientVoted', color => {
        let max = -1;
        for (const colorItem of colors) {
            if (colorItem.color === color) colorItem.totalVotes++;
            if (max < colorItem.totalVotes) max = colorItem.totalVotes;  
        }
        socket.emit('ColorList',{ colors, max });
    });
});

http.listen(3000,()=>{
    console.log('server is running')
})