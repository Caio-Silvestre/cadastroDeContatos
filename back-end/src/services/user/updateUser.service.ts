import { IUserUpdateRequest } from "../../interfaces/user.interface"
import { User } from "../../entities/user.entity"
import { AppDataSource } from "../../data-source"
import { hash } from "bcrypt"
import { AppError } from "../../errors/appError"

// =========================IMPORTS=================================================

const updateUserService = async ({ name, email,tel, password }: IUserUpdateRequest, id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({
        id
    })

    if (!findUser) {
        throw new AppError("User not found", 400)
    }

    await userRepository.update(
        id,{
            name: name? name : findUser.name,
            email: email ? email : findUser.email,
            tel : tel? tel : findUser.tel,
            password: password ?  await hash(password, 10) : findUser.password
        }
    )
    const user = await userRepository.findOneBy({
        id
    })
    return user!
}

export default updateUserService