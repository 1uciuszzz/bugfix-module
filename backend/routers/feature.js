import express from "express";
import FeatureModel from "../schemas/FeatureSchema.js";
import UserModel from "../schemas/UserSchema.js";
import BugModel from "../schemas/BugSchema.js";
import { decode } from "../utils/jwt.js";

const feature = express.Router();

feature.get("/", async (req, res, next) => {
  const queries = req.query;
  const params = {};
  for (const key in queries) {
    if (queries[key]) {
      params[key] = queries[key];
    }
  }
  const result = await FeatureModel.find(queries);
  return res.json({
    status: true,
    data: result,
  });
});

feature.post("/", async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({
      status: false,
      msg: "没有token",
    });
  }
  const tokenData = decode(authorization);
  if (tokenData.type !== "0") {
    return res.json({
      status: false,
      msg: "您没有权限创建开发",
    });
  }
  const { name, devid, level } = req.body;
  const dup = await FeatureModel.findOne({ name });
  const dev = await UserModel.findById(devid);
  if (dup) {
    return res.json({
      status: false,
      msg: "该功能名已存在",
    });
  }
  const result = await FeatureModel.create({
    name,
    devid,
    devname: dev.username,
    level,
  });
  return res.json({
    status: true,
    data: result,
  });
});

feature.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const target = await FeatureModel.findById(id);
  const payload = req.body;
  const properties = Object.keys(req.body);
  properties.forEach((property) => {
    target[property] = payload[property];
  });
  target.save();
  return res.json({
    status: true,
    data: target,
  });
});

feature.delete("/:id", async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({
      status: false,
      msg: "没有token",
    });
  }
  const tokenData = decode(authorization);
  if (tokenData.type !== "0") {
    return res.json({
      status: false,
      msg: "您没有权限删除开发",
    });
  }
  const { id } = req.params;
  const target = await FeatureModel.findById(id);
  if (!target) {
    return res.json({
      status: false,
      msg: "该功能不存在或已被删除",
    });
  }
  await FeatureModel.deleteOne({ _id: id });
  return res.json({
    status: true,
    data: target,
  });
});

export default feature;
