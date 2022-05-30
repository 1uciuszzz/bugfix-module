import mongoose from "mongoose";
const BugSchema = mongoose.Schema({
  name: String,//项目名
  testid:String, //测试id
  testname:String,//测试名字
  devid:String,//开发id
  devname:String,//开发名字
  bugname:String, //bug名
  reason:String,//描述
  level:String, //bug级别 1，2，3
  start:{//创建bug时间
    type:String,
    default:new Date().toUTCString()
  },
  end: {//bug关闭时间
    type: String,
    default: null,
  },
  extend:String,//附件(可选)
  bugstatus:Number,//bug状态  1:待解决（测试提）	2:待验收（开发修改后待验收）	3:待修复（验收未通过）	4:已解决（验收通过）
}) 


const BugModel = mongoose.model("bug", BugSchema);

export default BugModel;



