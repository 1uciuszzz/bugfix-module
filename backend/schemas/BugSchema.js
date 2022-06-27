import mongoose from "mongoose";

const BugSchema = mongoose.Schema({
  bugname: String,
  bugtype: String,
  start: {
    type: String,
    default: new Date().toISOString(),
  },
  end: {
    type: String,
    default: null,
  },
  bugstatus: {
    type: Number,
    default: 1,
  },
  devname: String,
  devid: String,
  level: Number,
  userid: String,
  username: String,
  featureid: String,
  extend: String,
  name: String,
  testid: String,
  testname: String,
});

const BugModel = mongoose.model("bug", BugSchema);
export default BugModel;
