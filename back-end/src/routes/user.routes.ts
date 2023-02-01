import { Router } from "express";
import {createUserController, listUserController, retrieveUserController, delteUserController, updateUserController} from "../controllers/user.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
// =========================IMPORTS=====================================================


const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUserController)
userRoutes.get(":/id", ensureAuthMiddleware ,retrieveUserController)
userRoutes.delete(":/id",ensureAuthMiddleware, delteUserController)
userRoutes.patch(":/id", ensureAuthMiddleware,updateUserController)




export default userRoutes;