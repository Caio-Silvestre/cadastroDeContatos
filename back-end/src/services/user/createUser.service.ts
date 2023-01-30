import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import {randomUUID} from "node:crypto"


// =========================IMPORTS=================================================

const createUserService = ({name, email, tel, password}: IUserRequest): IUserResponse =>{
    const id = randomUUID();

    return {
        id: id,
        name,
        email,
        tel

    }
}

export default createUserService