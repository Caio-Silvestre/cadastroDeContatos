import { IClientsRequest, IClientsResponse } from "../../interfaces/clients.interface"
import {randomUUID} from "node:crypto"


// =========================IMPORTS=================================================

const createClientsService = ({name, email, tel}: IClientsRequest): IClientsResponse =>{
    const id = randomUUID();

    return {
        id: id,
        name,
        email,
        tel

    }
}

export default createClientsService