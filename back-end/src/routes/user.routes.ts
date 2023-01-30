import { Router } from "express";
import {createUserController, listUserController, retrieveUserController, delteUserController, updateUserController} from "../controllers/user.controllers";
// =========================IMPORTS=====================================================


const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUserController)
userRoutes.get(":/id", retrieveUserController)
userRoutes.delete(":/id", delteUserController)
userRoutes.patch(":/id", updateUserController)




export default userRoutes;