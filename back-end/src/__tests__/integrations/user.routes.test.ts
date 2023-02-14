import request from "supertest"
import app from "../../app"
import { AppDataSource } from "../../data-source"
import { DataSource } from "typeorm"
import { IUserRequest, IUserUpdateRequest } from "../../interfaces/user.interface"
import { ISessionRequest } from "../../interfaces/session.interface"
import { User } from "../../entities/user.entity"
import { IClientsRequest, IClientUpdateRequest } from "../../interfaces/clients.interface"

// ====================================Imports================================
const userData: IUserRequest = {
    name: "Naruto Uzumaki",
    email: "uzumaki@gmail.com",
    tel: "41 998741477",
    password: "12345678910"
    }

const userUpdateData: IUserUpdateRequest = {
    name: "Sasuke Uchiha",
    email: "uzumaki@gmail.com",
    tel: "41 998741477",
    password: "12345678910"
    }
    
    let createdUser: any = ""
    
    let createdUsers: Array<any> =[]
    
    let token = ""
    
    
    const userLoginData: ISessionRequest = {
        email: "uzumaki@gmail.com",
        password: "12345678910"
    }
    describe('Testando rotas de User', () => {
        let connection: DataSource
        
        beforeAll(async() => {
            await AppDataSource.initialize().then(res => {
                connection = res
            }).catch(err => console.log(err))
    })

    afterAll(async() => {
        await connection.destroy()
    })
    
    test('POST/user -> Criar um novo user',async () => {
        const result = await request(app).post('/user').send(userData)
        
        expect(result.status).toBe(201)
        expect(result.body).toHaveProperty("id")
        expect(result.body).toHaveProperty("isActive")
        expect(result.body).toHaveProperty("createDate")
        expect(result.body.password).not.toEqual(userData.password)
        createdUsers.push(result.body)
        createdUser = result.body
        
    })
    test('GET/user -> Listar users',async () => {
        const result = await request(app).get('/user')
        
        
        expect(result.body).toMatchObject(createdUsers)

    })
    
    test("POST /user -> Login",async () => {
        const result = await request(app).post('/login').send(userLoginData)
        
        token = result.body.token
        expect(result.status).toBe(200)
        expect(result.body).toHaveProperty("token");
        
    })
    
    test('GET/user -> Informações do  user',async () => {
        const result = await request(app).get('/user/owner').set("Authorization", `Bearer ${token}`)
        
        expect(result.body).toMatchObject(createdUser)
        
    })
    
    test('PATCH/user -> Editar um user',async () => {
        const result = await request(app).patch(`/user/update`).set("Authorization", `Bearer ${token}`)
        .send(userUpdateData)
        
        expect(result.status).toBe(200)
        expect(result.body).toHaveProperty("id")
        expect(result.body).toHaveProperty("isActive")
        expect(result.body).toHaveProperty("createDate")
        expect(result.body.password).not.toEqual(userUpdateData.password)
        createdUsers.push(result.body)
    })
    
    test("DELETE/user -> Soft delete user",async () => {
        const result = await request(app).delete(`/user/delete`).set("Authorization", `Bearer ${token}`)
        
        expect(result.status).toBe(204)
    })
})
const clientData: IClientsRequest = {
    name: "Naruto Uzumaki",
    email: "uzuma@gmail.com2",
    tel: "41 998741212"
   
}

const clientUpdateData: IClientUpdateRequest = {
    name: "Naruto Uzumaki",
    email: "kurama@gmail.com",
    tel: "41 998741212",
    }
    
    let createdClient: any = ""
    
    let createdClients: Array<any> =[]

    let clientId: string = ""

describe('Testando rotas de Client', () => {
    let connection: DataSource
    
    beforeAll(async() => {
        await AppDataSource.initialize().then(res => {
            connection = res
        }).catch(err => console.log(err))
    })
    
    afterAll(async() => {
        await connection.destroy()
    })
    
    test('POST/client -> Criar um novo client',async () => {
        const result = await request(app).post('/clients').set("Authorization", `Bearer ${token}`).send(clientData)
            console.log(createdUser);
            
        
          expect(result.status).toBe(201)
          expect(result.body).toHaveProperty("id")
          expect(result.body).toHaveProperty("isActive")
          expect(result.body).toHaveProperty("createDate")
          createdClients.push(result.body)
          createdClient = result.body
          clientId = result.body.id
          console.log(result.body);
          
          
          
        })
    test('GET/client -> Listar clients',async () => {
        const result = await request(app).get('/clients').set("Authorization", `Bearer ${token}`)
       
        
        
        expect(result.body).toMatchObject(createdClients)

    })

    

    test('GET/client -> Informações do  client',async () => {
        const result = await request(app).get(`/clients/${clientId}`).set("Authorization", `Bearer ${token}`)
        
        expect(result.body).toMatchObject(createdClient)

    })

    test('PATCH/client -> Editar um client',async () => {
        const result = await request(app).patch(`/clients/${clientId}`).set("Authorization", `Bearer ${token}`)
        .send(clientUpdateData)
        
        expect(result.status).toBe(200)
        expect(result.body).toHaveProperty("id")
        expect(result.body).toHaveProperty("isActive")
        expect(result.body).toHaveProperty("createDate")
        createdClients.push(result.body)
        })
    
    test("DELETE/client -> Soft delete client",async () => {
        const result = await request(app).delete(`/clients/${clientId}`).set("Authorization", `Bearer ${token}`)
        
        expect(result.status).toBe(204)
    })
})
