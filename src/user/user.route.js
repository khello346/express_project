import express from "express";
import createUser from "./user.service.js";
import userController from "./user.controller.js";
import changeInfo from "./user.controller.js";
import users from "./user.service.js";

const router = express.Router();
router.put("/changeInfo", userController.changeInfo);
router.post("/signUp", userController.signUp);

router.use("*", (req, res, next) => {
  console.log("my request is : ", req);
  console.log("request Method : ", req.method);
  console.log("request Url : ", req.baseUrl);
  console.log("Request Body : ", req.body);
  console.log("Requestt Body:", JSON.stringify(req.body, null, 2));
  next();
});
