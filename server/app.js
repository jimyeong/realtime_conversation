const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const port = 5000;
const {Server} = require("socket.io");
const morgan = require("morgan");


app.use(morgan("dev"))

const io = new Server(server, {cors: {origin: "*"}});

const counceling = io.of("/counceling");

counceling.on("connection", (socket)=>{
    socket.emit("loby", {
        message: "hey guys can you just wait for me?"
    });
});

io.on("connection", (socket)=>{
    console.log("[socket]", socket);
    socket.emit("join", {
        message: "hi, nice to see you today"
    });
});



server.listen(port, ()=>{
    console.log("server is running on port ", 5000);
});

