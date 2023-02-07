import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"


// =========================IMPORTS=================================================


const lisClientsService = async(): Promise<Client[]> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const clients = await clientRepository.find({
        relations: {
            user: true
        }
    })

    return clients
}

export default lisClientsService