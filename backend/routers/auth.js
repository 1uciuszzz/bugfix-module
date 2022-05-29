import express from "express";
import UserModel from "../schemas/UserSchema.js";
import { verify } from "../utils/hash.js";
import { encode } from "../utils/jwt.js";

const auth = express.Router();

auth.post("/", async (req, res, next) => {
  const { username, password } = req.body;
  const userInDb = await UserModel.findOne({ username });
  if (userInDb) {
    console.log(verify(password, userInDb.password));
    if (verify(password, userInDb.password)) {
      return res.json({
        status: true,
        token: encode({
          _id: userInDb._id,
          username: userInDb.username,
          type: userInDb.type,
        }),
        type: userInDb.type,
      });
    } else {
      return res.json({
        status: false,
        msg: "用户认证失败",
      });
    }
  } else {
    return res.json({
      status: false,
      msg: "用户不存在",
    });
  }
});

export default auth;
