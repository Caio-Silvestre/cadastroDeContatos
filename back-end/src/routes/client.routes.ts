import { Router } from "express";
import {createClientsController ,listClientsController, updateClientsController, delteClientsController, retrieveClientsController } from "../controllers/clients.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
// =========================IMPORTS=====================================================


const clientsRoutes = Router();

clientsRoutes.post("",ensureAuthMiddleware ,createClientsController)
clientsRoutes.get("", ensureAuthMiddleware,listClientsController)
clientsRoutes.get(":/id",ensureAuthMiddleware ,retrieveClientsController)
clientsRoutes.delete(":/id",ensureAuthMiddleware ,delteClientsController)
clientsRoutes.patch(":/id",ensureAuthMiddleware, updateClientsController)




export default clientsRoutes;