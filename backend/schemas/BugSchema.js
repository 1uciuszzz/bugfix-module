import mongoose from "mongoose";

const BugSchema = mongoose.Schema({
  bugname:String,
  bugtype:String,
  start:{
    type:String,
    default:new Date().toLocaleString
  },
  end:{
      type:String,
      default:null
  },
  bugstatus:{
    type:Number,
    default:1
  },
  devname:String,
  devid:String,
  level:Number,
  testid:String

});

const BugModel = mongoose.model("bug", BugSchema);
export default BugModel;
