
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { FormCadastro } from "../Home/style";
import { HomeDiv, TehcList, TehcListInative } from "./style";

import "react-toastify/dist/ReactToastify.css";
import {motion } from "framer-motion"
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";

import { formSchemaRegisterClients } from "../../validators";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// =========================IMPORTS=================================================


function Home() {
    const nav = useNavigate();
    const dataRecovery = {isAcitve:true}
    const {clients, userData,onSubmitFunction, deleteClient, updateClient  } = useContext(HomeContext);
    // const userToken = localStorage.getItem('token')

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(formSchemaRegisterClients),
    });
    
    const handleClients = clients.filter(client => client.isActive === true)
    const handleClientsInative = clients.filter(client => client.isActive === false)

    function logout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      event.preventDefault();
      localStorage.clear();
      nav("/");
    }
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HomeDiv>
            <header>
              <img src={logo} alt="Logo" />
              <button onClick={(event) => logout(event)}>Logout</button>
            </header>
            <main>
              <div className="userData">
                <h2>Olá {userData.name}</h2>
              </div>
                <FormCadastro>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
                  <p>Registrar novo Cliente</p>
          <label>
            Nome Completo:
            <input
              placeholder={
                errors.name
                  ? typeof errors.name.message == "string"
                    ? errors.name.message
                    : undefined
                  : "Name"
              }
              {...register("name")}
            />
            <span style={{ color: "red" }}>
              {errors.name
                ? typeof errors.name.message == "string"
                  ? errors.name.message
                  : undefined
                : ""}
            </span>
          </label>
          <label>
            E-mail:
            <input
              placeholder={
                errors.email
                  ? typeof errors.email.message == "string"
                    ? errors.email.message
                    : undefined
                  : "E-mail"
              }
              {...register("email")}
            />
            <span style={{ color: "red" }}>
              {errors.email
                ? typeof errors.email.message == "string"
                  ? errors.email.message
                  : undefined
                : ""}
            </span>
          </label>
          <label>
            Telefone:
            <input
              placeholder={
                errors.tel
                  ? typeof errors.tel.message == "string"
                    ? errors.tel.message
                    : undefined
                  : "(xx) xxxxx-xxxx"
              }
              {...register("tel")}
            />
            <span style={{ color: "red" }}>
              {errors.tel
                ? typeof errors.tel.message == "string"
                  ? errors.tel.message
                  : undefined
                : ""}
            </span>
          </label>
     
          <button type="submit">Cadastrar</button>
        </form>

            </FormCadastro>
              <div className="clientsDiv">
                <header>
                  <h4 className="clientsTitle">Clientes de {userData.name}</h4>
                </header>
                <TehcList>
                  
                <table>
                {  handleClients.map((client, index) =>{
                  
                      return (
                        <tr key={index}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.tel}</td>
                        <button id={client.id} onClick={(event) =>{deleteClient(client.id)}}>X</button>
                      </tr>                    
                      )
                    })
                  }
                </table>
                </TehcList>
              </div>
              <div className="clientsDiv">
                <header>
                  <h4 className="clientsTitle" style={{color:"red"}}>Clientes inativos de {userData.name}</h4>
                </header>
                  
                <TehcListInative>
                <table>
                {  handleClientsInative.map((client, index) =>{
                  
                      return (
                        <tr key={index}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.tel}</td>
                        <button id={client.id} onClick={(event) =>{updateClient(client.id)}}>X</button>

                      </tr>                    
                      )
                    })
                  }
                </table>
                </TehcListInative>
              </div>
            </main>
            
           
          </HomeDiv>
        </motion.div>
      );
  }
  
  export default Home;