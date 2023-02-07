import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

// =========================IMPORTS=================================================

const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id})
    if (!findUser) {
        throw new AppError("User not found", 400)
    }
    if(!findUser.isActive) {
        throw new AppError("User is not active", 400);
    }
    await userRepository.update(id, {isActive: false})
}

export default deleteUserService