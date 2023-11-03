import express from "express";

import { postRegister, postNameCheck } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", postRegister);

userRouter.post("/nameCheck", postNameCheck);

export default userRouter;
