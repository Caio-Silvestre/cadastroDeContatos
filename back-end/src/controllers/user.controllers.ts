import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { IUserRequest, IUserUpdateRequest } from "../interfaces/user.interface";
import createUserService from "../services/user/createUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import lisUserService from "../services/user/listUser.service";
import retrieveUserService from "../services/user/retrieveUser.service";
import updateUserService from "../services/user/updateUser.service";
// =========================IMPORTS=================================================

const createUserController = async (req:Request, res:Response) => {

        const user: IUserRequest = req.body;
        const createdUser = await createUserService(user)
        return res.status(200).json(createdUser)
    
}

const listUserController = async (req:Request, res:Response) => {
    const users = await lisUserService()
    return res.json(users)
}

const retrieveUserController = async (req:Request, res:Response) =>{
    const id: string = req.params.id
    const user = await retrieveUserService(id)
    return res.json(user)
}
    

const updateUserController = async (req:Request, res:Response) => {
        const user: IUserUpdateRequest = req.body;
        const id:string = req.params.id
        const updatedUser = await updateUserService(user,id)
        return res.json(updatedUser)
    }

const delteUserController = async (req:Request, res:Response) => {
    const id = req.params.id
    await deleteUserService(id)
    return res.status(204).send()
}

export {createUserController ,listUserController, updateUserController, delteUserController, retrieveUserController}