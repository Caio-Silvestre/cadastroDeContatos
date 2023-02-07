import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { IUserRequest, IUserUpdateRequest } from "../interfaces/user.interface";
import createUserService from "../services/user/createUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import listUserService from "../services/user/listUser.service";
import retrieveUserService from "../services/user/retrieveUser.service";
import updateUserService from "../services/user/updateUser.service";
// =========================IMPORTS=================================================

const createUserController = async (req:Request, res:Response) => {

        const user: IUserRequest = req.body;
        const createdUser = await createUserService(user)
        return res.status(201).json(createdUser)
    
}

const listUserController = async (req:Request, res:Response) => {
    const users = await listUserService()
    return res.json(users)
}

const retrieveUserController = async (req:Request, res:Response) =>{
    const userId: string = req.user.id
    
    const user = await retrieveUserService(userId)
    
    return res.json(user)
}
    

const updateUserController = async (req:Request, res:Response) => {
        const user: IUserUpdateRequest = req.body;
        const userId: string = req.user.id
        const updatedUser = await updateUserService(user,userId)
        return res.json(updatedUser)
    }

const delteUserController = async (req:Request, res:Response) => {
    const userId: string = req.user.id
    await deleteUserService(userId)
    return res.status(204).send();
}

export {createUserController ,listUserController, updateUserController, delteUserController, retrieveUserController}