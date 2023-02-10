import { createContext, ReactNode, useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { api } from "../service/api";

// =========================IMPORTS=================================================

interface LoginProviderCotnext {
    children: ReactNode
}
interface LoginContextProps {
    onSubmitFunction: (data: FieldValues) => void;
    token: string
    nav: NavigateFunction
}

export const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

const LoginProvider = ({children}: LoginProviderCotnext) =>{
    const [token, setToken] = useState<string>("")
    const nav = useNavigate()

    async function onSubmitFunction(data: FieldValues){

        await api
        .post("login", data)
        .then((response) => {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            nav("/home")
        })
        .catch((error) => {
            alert("Ocorreu um erro, tente novamente")
        })
    }
    return (
        <LoginContext.Provider value={{onSubmitFunction, token, nav}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider