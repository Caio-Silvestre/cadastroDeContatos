import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/user.interface";
import createUserService from "../services/user/createUser.service";
// =========================IMPORTS=================================================

const createUserController = (req:Request, res:Response) => {
    try {
        const user: IUserRequest = req.body;
        const createdUser = createUserService(user)
        return res.status(200).json(createdUser)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

const listUserController = (req:Request, res:Response) => {}

const retrieveUserController = (req:Request, res:Response) =>{}

const updateUserController = (req:Request, res:Response) => {}

const delteUserController = (req:Request, res:Response) => {}

export {createUserController ,listUserController, updateUserController, delteUserController, retrieveUserController}