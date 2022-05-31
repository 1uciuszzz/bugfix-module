import express from "express";
import BugModel from "../schemas/BugSchema.js";
import FeatureModel from "../schemas/FeatureSchema.js"
import { decode } from "../utils/jwt.js";

const bug = express.Router();

bug.get("/getbugsbyfeature/:id", async (req, res, next) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({
      status: false,
      msg: "没有token",
    });
  }
  const tokenData = decode(authorization);
  const feature = await FeatureModel.findById(id);
  const bugs = await BugModel.find({
    featureid: feature._id,
    devid: tokenData._id,
  });
  return res.json({
    status: true,
    feature,
    bugs,
  });
});

bug.patch("/setstatus/:id", async (req, res, next) => {
  const { id } = req.params;
  const { bugstatus } = req.body;
  await BugModel.updateOne({ _id: id }, { bugstatus: bugstatus });
  const result = await BugModel.findById(id);
  return res.json({
    status: true,
    data: result,
  });
});

bug.get("/getallbug", async (req, res, next) => {

  const { authorization } = req.headers;
  const result = decode(authorization);
  let reply = {};
  if (result) {
    if (result.type == 1) {
      reply = await BugModel.find()
    } else if (result.type == 2) {
      reply = await BugModel.find({ userid: result._id })
    } else {
      reply = await BugModel.find({ devtid: result._id })
    }
    res.json({
      status: true,
      msg: "success",
      data: reply
    })

  } else {
    return res.json({ status: false, msg: "无效的token" });
  }
});

bug.post("/addbug", async (req, res, next) => {

  const { authorization } = req.headers;
  const result = decode(authorization);
  let { bugname, bugtype, devname, devid, level, featureid, testid, testname, } = req.body
  let feature = await FeatureModel.findById(featureid)
  let name = feature.name;
  if (result) {
    if (result.type != '1') {
      res.json({
        statu: false,
        msg: "权限不够",
      })
    } else {
      let reply = await BugModel.create({ bugname, bugtype, devname, devid, level: level * 1, userid: result._id, username: result.username, featureid, name, testid, testname })
      if (Object.keys(reply).length) {
        res.json({
          status: true,
          msg: "新增成功",
          data: reply
        })
      } else {
        res.json({
          status: false,
          msg: "新增失败"
        })
      }
    }

  } else {
    return res.json({ status: false, msg: "无效的token" });
  }
});


bug.patch("/updatebug", async (req, res, next) => {
  const { authorization } = req.headers;
  const result = decode(authorization);
  let { _id, bugstatus } = req.body
  console.log(_id, bugstatus)
  if (result) {
    let reply = await BugModel.updateOne({ _id }, { $set: { bugstatus } })
    if (reply.acknowledged == 1) {
      res.json({
        status: true, msg: "修改成功"
      })
    } else {
      res.json({
        status: false,
        msg: "修改失败"
      })
    }


  } else {
    return res.json({ status: false, msg: "无效的token" });
  }
});

bug.delete("/deletebug", async (req, res, next) => {
  const { authorization } = req.headers;
  const result = decode(authorization);
  let { bugid } = req.body;
  if (result) {
    let reply = await BugModel.remove({ _id: bugid });
    if (reply.acknowledged == 1) {
      res.json({
        status: true,
        msg: "删除成功",
      });
    } else {
      res.json({
        status: false,
        msg: "删除失败",
      });
    }
  } else {
    return res.json({ status: false, msg: "无效的token" });
  }
});

export default bug;
