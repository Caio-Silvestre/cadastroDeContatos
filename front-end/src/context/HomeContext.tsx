import { createContext, ReactNode } from "react";
import { api } from "../service/api";
import {useState, useEffect} from "react"
import { FieldValues } from 'react-hook-form/dist/types';
import { useNavigate } from "react-router-dom";
// =========================IMPORTS=================================================

interface HomeProviderProps{
    children: ReactNode;
}
interface HomeContextProps {
    clients: Client[];
    userData: User;
    onSubmitFunction: (data: FieldValues) => void;
    deleteClient: (clientId: string) => void;
    updateClient: (clientId: string) => void;
}
interface Client {
    created_at: string;
    id: string;
    name: string;
    tel: string;
    email: string;
    user: User
    isActive: boolean;
  }
interface User {
createDate:string
email:string
id:string
isActive: boolean
name:string
password:string
tel:string
}



export const HomeContext = createContext<HomeContextProps>(
    {} as HomeContextProps
);

const HomeProvider = ({children}: HomeProviderProps)=>{
    const [clients, setClients] = useState<Client[]>([] as Client[])
    const [userData, setUserData] = useState<User>({} as User)
    const userToken = localStorage.getItem('token')
    const nav = useNavigate()


    
    async  function userInfos(){
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`
        await api
        .get("user/owner")
        .then((response)=>{
            setUserData(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(() => {
        async  function allClients(){
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}` 
            await api
            .get("clients")
            .then((response)=>{
                  setClients(response.data)
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
            allClients();
            userInfos();
        }, [userToken]);

        const  onSubmitFunction = async (data: FieldValues) =>{
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}` 
            console.log(data);
            await api
              .post("clients", data)
              
              .then((response)=> {
                console.log(response.data)
                setClients((oldData) => [...oldData, response.data])
                // nav("/home")
              })
              .catch((error)=> {
                console.error(error.response.data);
                alert(error.response.data.message)               
              })
          }
        const  deleteClient = async (clientId:string) => {
          
          api.defaults.headers.common["Authorization"] = `Bearer ${userToken}` 
          await api
          .delete(`clients/${clientId}`)
          .then((response)=> {
            nav(0)
            alert("Client deletado com sucesso!")
          })
              .catch((error)=> {
                console.log(error.response.data);
                alert("Ocorreu um erro, se persistir, entre em contato com o suporte")
              })
            }
            const updateClient = async (clientId:string)=>{
              api.defaults.headers.common["Authorization"] = `Bearer ${userToken}` 
              await api
            .patch(`clients/${clientId}`,{isActive: true} )

            .then(response => {
              console.log(response);
              nav(0)
              alert("Cleinte ativado com sucesso")
            })
            .catch(error => {
              console.log(error.response.data);
              alert("Algo deu errado, tente novamente ou contate o suporte")})
        }
        return (
            <HomeContext.Provider value={{clients, userData, onSubmitFunction, deleteClient, updateClient}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider