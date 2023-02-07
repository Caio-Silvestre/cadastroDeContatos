import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
// =========================IMPORTS=================================================

const createUserService = async ({name, email, tel, password}: IUserRequest): Promise<User> =>{

    const userRepository = AppDataSource.getRepository(User)
    const findName = await userRepository.findOneBy({name})
    if (findName){
        throw new AppError("Name already registred", 400)
    }
    if(!password){
        throw new AppError("Password is required", 400)
    }
    if(!name){
        throw new AppError("Name is required", 400)
    }
    if(!email || !tel){
        throw new AppError("Email and tel is required", 400)
    }
    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        tel,
        password : hashedPassword
    })
    await userRepository.save(user)
    return user;
}

export default createUserService