import { IClientsRequest, IClientsResponse } from "../../interfaces/clients.interface"
import {randomUUID} from "node:crypto"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { AppError } from "../../errors/appError"
import { User } from "../../entities/user.entity"
// =========================IMPORTS=================================================

const createClientsService = async ({name, email, tel}: IClientsRequest, userId: string): Promise<Client> =>{

    const clientRepository = AppDataSource.getRepository(Client)
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: userId})
    const findName = await clientRepository.findOneBy({name})
    if (findName){
        throw new AppError("Name already registred", 400)
    }
    if(!name){
        throw new AppError("Name is required", 400)
    }
    if(!email || !tel){
        throw new AppError("Contact is required", 400)
    }
    


    const client = clientRepository.create({
        name,
        email,
        tel,
        user: user!
    })
    await clientRepository.save(client)
    return client;
}
export default createClientsService