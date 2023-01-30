export interface IClientsRequest{
    name: string,
    email: string,
    tel: string,
}

export interface IClientsResponse extends IClientsRequest {
    id: string
}