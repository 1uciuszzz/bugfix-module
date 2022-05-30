import mongoose from "mongoose";

const FeatureSchema = mongoose.Schema({
  name: String,
  devid: mongoose.Types.ObjectId,
  devname: String,
  start: {
    type: String,
    default: new Date().toISOString(),
  },
  end: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "1",
  },
  level: String,
});

const FeatureModel = mongoose.model("feature", FeatureSchema);

export default FeatureModel;
