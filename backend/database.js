import mongoose from "mongoose";

export default mongoose
  .connect("mongodb://1ucius.top:27017/bugfix")
  .then((r) => {
    console.log("数据库已连接");
  })
  .catch((e) => {
    console.log(e);
  });
