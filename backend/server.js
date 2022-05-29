import express from "express";
import "./database.js";

const server = express();

server.listen(8000, () => {
  console.log("服务器启动在端口8000");
});
