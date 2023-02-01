import { IClientsRequest, IClientsResponse } from "../../interfaces/clients.interface"
import {randomUUID} from "node:crypto"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { AppError } from "../../errors/appError"
// =========================IMPORTS=================================================

const createClientsService = async ({name, email, tel}: IClientsRequest): Promise<Client> =>{

    const clientRepository = AppDataSource.getRepository(Client)

    if(!name){
        throw new AppError("Name is required", 400)
    }
    if(!email || !tel){
        throw new AppError("Contact is required", 400)
    }
    const client = clientRepository.create({
        name,
        email,
        tel
    })
    await clientRepository.save(client)
    return client;
}
export default createClientsService