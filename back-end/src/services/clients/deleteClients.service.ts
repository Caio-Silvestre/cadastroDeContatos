import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { AppError } from "../../errors/appError"

// =========================IMPORTS=================================================

const deleteClientsService = async ( id: string) => {
    const clientRepository = AppDataSource.getRepository(Client)
    
    const findClient = await clientRepository.findOneBy({id})
    if (!findClient) {
        throw new AppError("User not found",400)
    }
    if(!findClient.isActive) {
        throw new AppError("User is not active",400);
    }
    await clientRepository.update(id, {isActive: false})
    
}

export default deleteClientsService