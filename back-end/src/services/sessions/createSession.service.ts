import { AppDataSource} from "../../data-source";
import { User } from "../../entities/user.entity";
import { ISessionRequest } from "../../interfaces/session.interface";
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { AppError } from "../../errors/appError";

// =========================IMPORTS=====================================================

const createSessionsService =async ({email, password}: ISessionRequest): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({email: email})
    if (!user) {
        throw new AppError("Invalid email or password",400)
    }
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
        throw new AppError("Invalid email or password",400)
    }
    const token = jwt.sign({
        name: user.name,
        id: user.id,
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '24h',
        subject: user.id
    })
    return token
}
export default createSessionsService