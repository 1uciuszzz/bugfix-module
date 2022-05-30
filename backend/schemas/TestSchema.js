import mongoose from "mongoose" 

const TestSchema = mongoose.Schema({
  testid:String,
  testname:String,
  start:String,
  end:String,
  featureid:String,
  name:String
})

const TestModel = mongoose.model("test", TestSchema);

export default TestModel;
