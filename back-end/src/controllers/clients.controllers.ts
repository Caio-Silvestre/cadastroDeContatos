import { Request, Response } from "express";
import { IClientsRequest, IClientUpdateRequest } from "../interfaces/clients.interface";
import createClientsService from "../services/clients/createClients.service";
import lisClientsService from "../services/clients/listClients.service";
import updateClientsService from "../services/clients/updateClients.service";

// =========================IMPORTS=================================================

const createClientsController = async (req:Request, res:Response) => {
 
    const client: IClientsRequest = req.body
    const createdClient = await createClientsService(client)
    return res.status(200).json(createdClient)
}

const listClientsController = async (req:Request, res:Response) => {
    const clients = await lisClientsService()
    return res.json(clients)
}

const retrieveClientsController = (req:Request, res:Response) =>{}

const updateClientsController =async (req:Request, res:Response) => {   
    const client: IClientUpdateRequest= req.body;
    const id:string = req.params.id
    const updatedClient = await updateClientsService(client,id)
    return res.json(updatedClient)}

const delteClientsController = (req:Request, res:Response) => {}

export {createClientsController ,listClientsController, updateClientsController, delteClientsController, retrieveClientsController}