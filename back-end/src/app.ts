import 'reflect-metadata'
import express from 'express';
import "express-async-errors"
import handleErrorMiddleware from './middleware/handleError.middelware';
import userRoutes from './routes/user.routes';
import clientsRoutes from './routes/client.routes';
import sessionRoutes from './routes/session.routes';
// =========================IMPORTS=================================================


const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/clients", clientsRoutes);
app.use('/login', sessionRoutes);
app.use(handleErrorMiddleware);

export default app;
