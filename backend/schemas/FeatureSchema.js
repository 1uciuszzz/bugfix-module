import mongoose from "mongoose";

const FeatureSchema = mongoose.Schema({
  name: String,
  devid: String,
  devname: String,
  start: {
    type: String,
    default: new Date().toUTCString(),
  },
  end: {
    type: String,
    default: null,
  },
  status: String,
  level: String,
});

const FeatureModel = mongoose.model("feature", FeatureSchema);

export default FeatureModel;
