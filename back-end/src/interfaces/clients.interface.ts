import { User } from "../entities/user.entity"
export interface IClientsRequest{
    name: string,
    email: string,
    tel: string,
    user: User
   
}

export interface IClientsResponse extends IClientsRequest {
    id: string
}

export interface IClientUpdateRequest {
    name?: string
    email?: string
    tel?: string
    isActive?: boolean
}

export interface IClientDelete {
    isActive: boolean
}