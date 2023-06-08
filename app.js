// declaration 
const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
// cree server
const server = require('http').createServer(app);

//kate3ti les inforamtion nta3 server l websocket
const websocket = new WebSocket.Server({ server });

websocket.on("connection", function connection(ws) {
    //yatsana l client ou y receivi ou ysefatlou
  console.log('Client connected');
  ws.send("Welcome hsoub client");


// tari9a kiydir yawsal l message
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });
});

app.use(express.static(path.join(__dirname, 'public')));

//server yakhdam
const port = 3000;
server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
