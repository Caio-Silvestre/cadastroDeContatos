import { Router } from "express";
import { createSessionController } from "../controllers/session.controller";

// =========================IMPORTS=====================================================


const sessionRoutes = Router()

sessionRoutes.post('', createSessionController)

export default sessionRoutes