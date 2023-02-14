import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { User } from "../../entities/user.entity"

// =========================IMPORTS=================================================


const lisClientsService = async(id: string): Promise<Client[]> => {
    const clientRepository = AppDataSource.getRepository(Client)
    console.log("passei aqui");
    
    const clients = await clientRepository.find({ where: {user: {id:id}},
        relations: {
            user: true
        }
    })

    return clients
}

export default lisClientsService