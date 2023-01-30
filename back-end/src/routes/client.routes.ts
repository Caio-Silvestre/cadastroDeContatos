import { Router } from "express";
import {createClientsController ,listClientsController, updateClientsController, delteClientsController, retrieveClientsController } from "../controllers/clients.controllers";

// =========================IMPORTS=====================================================


const clientsRoutes = Router();

clientsRoutes.post("", createClientsController)
clientsRoutes.get("", listClientsController)
clientsRoutes.get(":/id", retrieveClientsController)
clientsRoutes.delete(":/id", delteClientsController)
clientsRoutes.patch(":/id", updateClientsController)




export default clientsRoutes;