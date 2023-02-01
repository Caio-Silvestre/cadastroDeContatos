import { Request, Response } from "express";
import { ISessionRequest } from "../interfaces/session.interface";
import createSessionsService from "../services/sessions/createSession.service";

// =========================IMPORTS=====================================================

const createSessionController =async (req: Request, res:Response) => {    
    const data : ISessionRequest = req.body
    const token = await createSessionsService(data)
    return res.json(token)
    }
export {createSessionController}