import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

// =========================IMPORTS=================================================


const ensureAuthMiddleware =async (req:Request, res:Response, next: NextFunction) => {
    let token = req.headers.authorization;
    
    if(!token) {
        return res.status(400).json({ message: "Invalid token"})
    }
    
    token = token.split(" ")[1]
    jwt.verify(token, "senhaFOrteDemais1234@@@", (error, decoded:any) => {
        if(error) {
            return res.status(401).json({ 
                message: "Invalid token"
            })
        }
        req.user = {
        id: decoded.sub
        };
        });
    return next()
}
export default ensureAuthMiddleware