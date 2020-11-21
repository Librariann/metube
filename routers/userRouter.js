import express from "express";
import routes from "../routes";
import { users } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get(routes.users, users);

export default userRouter;