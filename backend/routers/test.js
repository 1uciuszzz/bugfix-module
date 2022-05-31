
import express from "express"
import TestModel from "../schemas/TestSchema.js";

import { decode } from "../utils/jwt.js";

const test = express.Router()

test.get('/', (req, res, next) => {
  res.send("1234")
})
//测试人员新增测试
test.post("/addtest", async (req, res, next) => {
  let {testname,featureid,name} = req.body
  if (testname && featureid && name) {
    let { authorization } = req.headers
    let info = decode(authorization);
    if (info) {
      if (info.type == "1") {
        let start = new Date().toUTCString()
        let result = await TestModel.insertMany({
          testname, start, featureid, name, username:info.username,userid:info._id
        })
        if (result.length) {
          res.json({
            status: true,
            code: 200,
            msg: '新增成功',
            result
          })
        } else {
          res.json({
            status: false,
            code: 500,
            msg: "新增失败"
          })
        }
      } else {
        res.json({
          status: false,
          code: 500,
          msg: '权限不够'
        })
      }
    } else {
      res.json({
        status: false,
        code: 500,
        msg: "token失效"
      })
    }
  } else {
    res.json({
      status: false,
      code: 500,
      msg: '请传入完整参数'
    })
  }
})

//测试人员删除测试 测试id
test.post("/deltest", (req, res, next) => {
  let { testid } = req.body;
  let { authorization } = req.headers
  let info = decode(authorization);
  if (info) {
    if (info.type == "1") {
      let result = TestModel.deleteMany({ testid })
      res.json({
        status: true,
        code: 200,
        msg: "删除成功",
        result
      })
    } else {
      res.json({
        status: false,
        code: 500,
        msg: '权限不够'
      })
    }
  } else {
    res.json({
      status: false,
      code: 500,
      msg: "token错误，请重新登录"
    })
  }
})

//展示所有新增测试
test.get("/showtest", async(req, res, next) => {
  let { authorization } = req.headers
  let info = decode(authorization);
  if (info) {
    if (info.type == "1" || info.type == "0") {
      let {testname,featureid} = req.query
      let reg = new RegExp(testname)
      let result = await TestModel.find({ userid: info._id,testname:reg })
      res.json({
        status: true,
        msg: "ok",
        result
      })
    } else {
      res.json({
        status: false,
        msg: '权限不够'
      })
    }
  } else {
    res.json({
      status: false,
      msg:4
    })
  }
})

//根据featureid 查看所属测试
test.get("/gettestByfeatureid",async(req,res,next)=>{
  let { authorization } = req.headers
  let info = decode(authorization);
  if (info) {
    if (info.type == "1" || info.type == "0") {
      let {featureid} = req.query
      let result = await TestModel.find({ userid: info._id,featureid })
      res.json({
        status: true,
        msg: "ok",
        result
      })
    } else {
      res.json({
        status: false,
        msg: '权限不够'
      })
    }
  } else {
    res.json({
      status: false,
      msg:4
    })
  }
})



export default test