import express from "express";
import BugModel from "../schemas/BugSchema.js";
import { decode } from "../utils/jwt.js";

const bug = express.Router();

bug.get("/getallbug", async (req, res, next) => {
    const { authorization } = req.headers;
    const result = decode(authorization);
    let reply = {};
    if (result) {
        if (result.type == 1) {
            reply = await BugModel.find()
        } else if (result.type == 2) {
            reply = await BugModel.find({ testid: result._id })
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
    let { bugname, bugtype, devname, devid, level ,featureid } = req.body
    if (result) {
        if (result.type == 3) {
            res.json({
                statu: false,
                msg: "权限不够",
            })
        } else {
            let reply = await BugModel.insert({ bugname, bugtype, devname, devid, level, testid: result.id ,featureid })
            if (reply.acknowledged) {
                res.json({
                    status: true,
                    msg: "新增成功"
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
})

bug.patch("/upadtebug", async (req, res, next) => {
    const { authorization } = req.headers;
    const result = decode(authorization);
    let { bugid, bugtype} = req.body
    if (result) {
       let reply =  await BugModel.updateOne({_id:bugid},{$set:{bugtype}})
       if(reply.acknowledged==1){
           res.json({
            status: true, msg: "修改成功" 
           })
       }else{
           res.json({
               status:false,
               msg:"修改失败"
           })
       }
    } else {
        return res.json({ status: false, msg: "无效的token" });
    }
})

bug.delete("/deletebug",async (req, res, next)=>{
    const { authorization } = req.headers;
    const result = decode(authorization);
    let { bugid} = req.body
    if (result) {
        let reply =  await BugModel.remove({_id:bugid})
       if(reply.acknowledged==1){
           res.json({
            status: true, msg: "删除成功" 
           })
       }else{
           res.json({
               status:false,
               msg:"删除失败"
           })
       }
    } else {
        return res.json({ status: false, msg: "无效的token" });
    }
})

export default bug;
