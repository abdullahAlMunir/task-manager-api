import express from "express";

const router = express.Router();

import * as TaskController from "../app/controller/TaskController.js";
import * as UsersController from "../app/controller/UsersController.js"
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

// user (Before Login)
router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.get("/VerifyEmail", UsersController.VerifyEmail);
router.post("/VerificationCode", UsersController.VerificationCode);
router.post("/ResetPassword", UsersController.ResetPassword);

// user (After Login)
router.get("/ProfileDetails", AuthMiddleware, UsersController.ProfileDetails);
router.put("/ProfileUpdate", AuthMiddleware, UsersController.ProfileUpdate);

// task (After Login)
router.post("/CreateTask", AuthMiddleware, TaskController.CreateTask);
router.patch("/UpdatedTaskStatus/:id/:status", AuthMiddleware, TaskController.UpdatedTaskStatus);
router.get("/TaskListByStatus/:status", AuthMiddleware, TaskController.TaskListByStatus);
router.delete("/DeleteTask/:id", AuthMiddleware, TaskController.DeleteTask);
router.get("/CountTask", AuthMiddleware, TaskController.CountTask)


export default router;