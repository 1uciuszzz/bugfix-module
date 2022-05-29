import express from "express";
import UserModel from "../schemas/UserSchema.js";
import { hash } from "../utils/hash.js";
import { decode } from "../utils/jwt.js";

const user = express.Router();

user.post("/", async (req, res, next) => {
  const { username, password, type } = req.body;
  const dup = await UserModel.findOne({ username });
  if (dup) {
    return res.json({ status: false, msg: "用户已存在" });
  }
  const result = await UserModel.create({
    username,
    password: hash(password),
    type,
  });
  res.json({
    status: true,
    data: {
      _id: result._id,
      username: result.username,
      type: result.type,
    },
  });
});

user.get("/", async (req, res, next) => {
  const { authorization } = req.headers;
  const result = decode(authorization);
  if (result) {
    const data = await UserModel.findById(result._id);
    return res.json({
      status: true,
      data: {
        _id: data._id,
        username: data.username,
        type: data.type,
      },
    });
  } else {
    return res.json({ status: false, msg: "无效的token" });
  }
});

export default user;
