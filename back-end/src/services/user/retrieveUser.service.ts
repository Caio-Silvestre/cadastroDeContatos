import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

// =========================IMPORTS=================================================

const retrieveUserService = async (id:string): Promise<User> =>{
    const userRepository = AppDataSource.getRepository(User)
        
        const user = await userRepository.findOneBy({id})
        return user!
}

export default retrieveUserService