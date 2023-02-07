import { Router } from "express";
import {createUserController, listUserController, retrieveUserController, delteUserController, updateUserController} from "../controllers/user.controllers";
import emailMiddleware from "../middleware/emailInUse.middleware";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
// =========================IMPORTS=====================================================


const userRoutes = Router();

userRoutes.post("",createUserController);
userRoutes.get("", listUserController)
userRoutes.get("/owner", ensureAuthMiddleware ,retrieveUserController)
userRoutes.delete("/delete",ensureAuthMiddleware, delteUserController)
userRoutes.patch("/update", ensureAuthMiddleware,updateUserController)




export default userRoutes;