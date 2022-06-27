import express from "express";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./imgs");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const uploader = multer({
  storage: storage,
});
const upload = express.Router();

upload.post("/extend", uploader.single("extend"), (req, res, next) => {
  res.json({
    status: true,
    path: req.file.path,
  });
});

export default upload;
