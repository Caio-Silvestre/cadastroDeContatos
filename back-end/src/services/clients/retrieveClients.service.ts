import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clients.entity"

// =========================IMPORTS=================================================

const retrieveClientsService =  async (id:string): Promise<Client> => {
        const clientRepository = AppDataSource.getRepository(Client)
        const client = await clientRepository.findOne({relations:{
            user: true
        }, where: {id} , })
        
        

        return client!
    }


export default retrieveClientsService