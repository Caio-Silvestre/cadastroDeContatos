import { Request, Response } from "express";
import { IClientsRequest, IClientUpdateRequest } from "../interfaces/clients.interface";
import createClientsService from "../services/clients/createClients.service";
import deleteClientsService from "../services/clients/deleteClients.service";
import lisClientsService from "../services/clients/listClients.service";
import retrieveClientsService from "../services/clients/retrieveClients.service";
import updateClientsService from "../services/clients/updateClients.service";

// =========================IMPORTS=================================================

const createClientsController = async (req:Request, res:Response) => {
 
    const client: IClientsRequest = req.body
    const userId: string = req.user.id
    console.log("Passei control");
    
    
    const createdClient = await createClientsService(client, userId)
    return res.status(201).json(createdClient)
}

const listClientsController = async (req:Request, res:Response) => {
    const userId: string = req.user.id
    const clients = await lisClientsService(userId)

    
    return res.json(clients)
}

const retrieveClientsController = async(req:Request, res:Response) =>{
    const id:string = req.params.id
    const client = await retrieveClientsService(id)
    return res.json(client)
}

const updateClientsController =async (req:Request, res:Response) => {   
    const client: IClientUpdateRequest= req.body;
    const id:string = req.params.id
    const updatedClient = await updateClientsService(client,id)
    return res.json(updatedClient)}

const delteClientsController = async (req:Request, res:Response) => {
    const id = req.params.id
    await deleteClientsService(id)
    return res.status(204).send()
}

export {createClientsController ,listClientsController, updateClientsController, delteClientsController, retrieveClientsController}