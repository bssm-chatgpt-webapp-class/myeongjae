const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (client) => {
  client.on("chat", (data) => {
    console.log("get:", data);
    client.broadcast.emit("chat", "response: " + data);
  });
  client.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(5050);
