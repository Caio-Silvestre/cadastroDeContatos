import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { User } from "../../entities/user.entity"

// =========================IMPORTS=================================================


const lisClientsService = async(id: string): Promise<Client[]> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id})
    console.log(user);
    
    const clients = await clientRepository.find({ where: {user: {id:id}},
        relations: {
            user: true
        }
    })

    return clients
}

export default lisClientsService