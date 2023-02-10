import { createContext, ReactNode } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { api } from '../service/api';
import { FieldValues } from 'react-hook-form/dist/types';
import { log } from 'console';
// =========================IMPORTS=================================================

interface RegisterContextProps {
    onSubmitFunction: (data: FieldValues) => void;
    nav: NavigateFunction;
  }
  
  interface RegisterProviderProps {
    children: ReactNode;
  }
  
  export const RegisterContext = createContext<RegisterContextProps>(
    {} as RegisterContextProps
  );

  const RegisterProvider = ({children}: RegisterProviderProps) => {
    const nav = useNavigate();
    
    const  onSubmitFunction = async (data: FieldValues) =>{
   
      
      await api
        .post("user", data)
        .then((response)=> {
          nav("/login")})
        .catch((error)=> {
          console.log(error)
          alert("Algo deu errado tente novamente");
        })
    }
    return(
      <RegisterContext.Provider value ={{onSubmitFunction, nav}}>
        {children}
      </RegisterContext.Provider>
    )
  }

  export default RegisterProvider