import express from "express";
import cors from "cors";
import "./database.js";
import user from "./routers/user.js";
import auth from "./routers/auth.js";
import feature from "./routers/feature.js";
import bug from "./routers/bug.js";
import test from "./routers/test.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/v1/user", user);
server.use("/api/v1/auth", auth);
server.use("/api/v1/bug", bug);
server.use("/api/v1/feature", feature);
server.use("/api/v1/test", test);

server.listen(8000, () => {
  console.log("服务器启动在端口8000");
});
