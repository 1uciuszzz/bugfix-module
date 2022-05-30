import express from "express"
import BugModel from "../schemas/BugSchema.js"
import UserModel from "../schemas/UserSchema.js"
import { decode } from "../utils/jwt.js"

const bug = express.Router()



bug.get('/', (req, res, next) => {
  res.send("1234")
})

//测试指派bug，开发人员列表 (项目名称?，测试id)
bug.get("/getdev",(req,res,next)  => {
  let token = req.headers.token;
  if(token){
    jwt.verify(token,'abc',(err,info)=>{
      if(err){
        let result = UserModel.find();
        res.json({
          status:true,
          code:200,
          msg:"ok",
          result
        })
      }
    })
  }else{
    res.json({
      status:false,
      code:500,
      msg:"token失效"
    })
  }
})

//测试查询本人所提的所有bug
// bug.get('/showbug', (req, res, next) => {
//   let token = req.headers.token;
//   jwt.verify(token, 'abc', async (err, info) => {
//     if (!err) {
//       if (info.usertype == 2) {
//         let result = await BugModel.find({ testid: info.userid });
//         res.json({
//           status: true,
//           code: 200,
//           msg: 'ok',
//           result
//         })
//       } else {
//         res.json({
//           status: false,
//           code: 500,
//           msg: '权限不足'
//         })
//       }
//     } else {
//       res.json({
//         status: false,
//         code: 500,
//         msg: 'token错误，请重新登录'
//       })
//     }
//   })
// })

// //测试新增bug
// bug.post("/addbug", (req, res, next) => {
//   let { devname, devid, reason, level, name, bugname, bugstatus = 1 } = req.body;
//   if (devname && reason && level && name && bugname && bugstatus) {
//     let token = req.headers.token;
//     jwt.verify(token, 'abc', async (err, info) => {
//       if (!err) {
//         let testid = info.userid;
//         let testname = info.username;
//         let usertype = info.usertype;
//         if (usertype != 2) {
//           res.json({
//             status: false,
//             code: 500,
//             msg: "权限不够"
//           })
//         } else {
//           let result = await BugModel.insertMany({
//             name, testid, testname, reason, level, devname, bugname, extend, bugstatus, devid
//           });
//           if (result.length) {
//             res.json({
//               status: true,
//               code: 200,
//               msg: '新增成功',
//               result
//             })
//           } else {
//             res.json({
//               status: false,
//               code: 500,
//               msg: "新增失败"
//             })
//           }
//         }
//       }else{
//         res.json({
//           status:false,
//           code:500,
//           msg:"权限不够"
//         })
//       }
//     })
//   } else {
//     res.json({
//       status: false,
//       code: 500,
//       msg: '请传入完整参数'
//     })
//   }
// })

// //测试修改bug状态 根据bugid修改
// bug.patch('/updatebug',(req,res,next)=>{
//   let {_id,bugstatus} = req.body;
//   if(_id&&bugstatus){
//     let token = req.headers.token
//     jwt.verify(token,'abc',async(err,info)=>{
//       if(!err){
//         if(info.usertype!=2){
//           let result = await BugModel.update({_id},{$set:{bugstatus:bugstatus*1}});
//           if(result.modifiedCount){
//             res.json({
//               status:true,
//               code:200,
//               msg:"更新成功"
//             })
//           }else{
//             res.json({
//               status:false,
//               code:200,
//               msg:"更新失败"
//             })
//           }
//         }else {
//           res.json({
//         status:false,
//             code: 500,
//             msg: "权限不够"
//           })
//         }
//       }
//     })
//   }else{
//     res.json({
//       status:false,
//       code:500,
//       msg:"请传入完整参数"
//     })
//   }
// })

export default bug