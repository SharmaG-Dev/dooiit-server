"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var app = (0, express_1.default)();
var httpServer = (0, http_1.createServer)(app);
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*'
    }
});
app.get('/', function (req, res) {
    var name = process.env.NAME || 'World';
    res.send("Hello ".concat(name, "!"));
});
var port = parseInt(process.env.PORT || '3000');
httpServer.listen(port, function () {
    console.log("listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map