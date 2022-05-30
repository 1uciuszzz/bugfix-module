
import express from "express"
import TestModel from "../schemas/TestSchema.js";

import { decode } from "../utils/jwt.js";

const test = express.Router()

test.get('/', (req, res, next) => {
  res.send("1234")
})
//测试人员新增测试
test.post("/addtest", async(req,res,next)=>{
  let {testname,start,end,featureid,name} = req.body;
  if(testname&&start&&end&&featureid&&name){
    let {authorization} = req.headers
    let info = decode(authorization);
  console.log(info)

    if(info){
      if(info.type == "1"){
        let result = await TestModel.insertMany({
          testname,start,end,featureid,name,testid:info._id
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
      }else{
        res.json({
          status:false,
          code:500,
          msg:'权限不够'
        })
      }
    }else{
      res.json({
        status:false,
        code:500,
        msg:"token失效"
      })
    }
  }else{
    res.json({
      status: false,
      code: 500,
      msg: '请传入完整参数'
    })
  }
})

//测试人员删除测试 测试id
test.post("deltest",(req,res,next)=>{
  let {testid} = req.body;
  let {authorization} = req.headers
  let info = decode(authorization);
  if(info){
    if(info.type == "1"){
      let result = TestModel.deleteMany({testid})
      res.json({
        status:true,
        code:200,
        msg:"删除成功",
        result
      })
    }else{
      res.json({
        status:false,
      code:500,
      msg:'权限不够'
      })
    }
  }else{
    res.json({
      status:false,
      code:500,
      msg:"token错误，请重新登录"
    })
  }
})

//展示所有新增测试
test.get("showtest",(req,res,next)=>{
  let {authorization} = req.headers
  let info = decode(authorization);
  if(info){
    if(info.type == "1"){
      let result = TestModel.find({testname:info.username})
      res.json({
        status:true,
        code:200,
        msg:"ok",
        result
      })
    }else{
      res.json({
        status:false,
      code:500,
      msg:'权限不够'
      })
    }
  }else{
    res.json({
      status:false,
      code:500,
      msg:"token错误，请重新登录"
    })
  }
})




export default test