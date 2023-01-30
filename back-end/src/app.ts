import express from 'express';
import userRoutes from './routes/user.routes';
import clientsRoutes from './routes/client.routes';
const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/clients", clientsRoutes)

app.listen(3000, () => {
    console.log("Server running in port 3000");
});