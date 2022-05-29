import express from "express";

const user = express.Router();

user.post("/", async (req, res, next) => {
  const { username, password } = req.body;
});

export default user;
