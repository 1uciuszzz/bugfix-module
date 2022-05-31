import mongoose from "mongoose" 

const TestSchema = mongoose.Schema({
  testname:String,
  start: {
    type: String,
    default: new Date().toISOString(),
  },
  end: {
    type: String,
    default: "",
  },
  username:String, //测试人员名
  userid:String, //测试人员id
  featureid:String, //功能id
  name:String //功能名
})

const TestModel = mongoose.model("test", TestSchema);

export default TestModel;
