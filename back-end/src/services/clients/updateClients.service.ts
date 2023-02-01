import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/appError";
import { IClientUpdateRequest } from "../../interfaces/clients.interface";

// =========================IMPORTS=================================================

const updateClientsService = async ({name, email, tel}: IClientUpdateRequest, id: string): Promise<Client> =>{
    const clientRepository = AppDataSource.getRepository(Client) 
    const findClient = await clientRepository.findOneBy({id})
    
    if (!findClient){
        throw new AppError("User not found", 400)
    }
    await clientRepository.update(id, {
        name: name? name : findClient.name,
        email: email ? email : findClient.email,
        tel : tel? tel : findClient.tel,
    })
    const client = await clientRepository.findOneBy({id})
    return client!
}

export default updateClientsService;