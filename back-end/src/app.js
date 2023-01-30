import express from "express";
import { request } from "http";

const app = express()

app.use(express.json())

const users = []
let id = 1

app.post('/user', (request, response) => {
    const user = request.body;
    user.id = id;
    users.push(user);
    id++;
    return response.status(201).json(user);

})

app.get('/user', (request, response) =>{
    return response.status(200).json(users);
})

app.get('/user/:id', (request, response) =>{
    const user_id = request.params.id
    const userFind = users.find(user => user.id == user_id)

    if(!userFind){
        return response.status(404).json({
            message: 'User not found'
        })
    }
    return response.status(200).json(userFind)
})

app.listen(3000, () => { 
    console.log("Listen in port 3000")
})

 