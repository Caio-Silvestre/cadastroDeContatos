export interface IUserRequest{
    name: string,
    email: string,
    tel: string,
    password?: string,
}

export interface IUserResponse extends IUserRequest {
    id: string
}

export interface IUserUpdateRequest {
    name?: string
    email?: string
    tel?: string
    password?: string
}

export interface IUserDelete {
    isActive: boolean
}