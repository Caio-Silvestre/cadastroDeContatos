import React from 'react';
import {useContext} from 'react'
import { LoginContext } from '../../context/LoginContext';
import { formSchemaLogin } from '../../validators';
import { FormLogin } from './style';
import logo2 from "../../assets/logo2.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {motion, } from 'framer-motion'


// =========================IMPORTS=================================================

function Login(){
    const { onSubmitFunction, nav} = useContext(LoginContext);

    const {register, handleSubmit,
        formState:{ errors },
    } = useForm({
        resolver: yupResolver(formSchemaLogin)
    })

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
        <FormLogin>
        <div>
          <img src={logo2} alt="Logo" />
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>
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
            Senha
            <input
              placeholder={
                errors.password
                  ? typeof errors.password.message == "string"
                    ? errors.password.message
                    : undefined
                  : "Senha"
              }
              type="password"
              {...register("password")}
            />
            <span style={{ color: "red" }}>
              {errors.password
                ? typeof errors.password.message == "string"
                  ? errors.password.message
                  : undefined
                : ""}
            </span>
          </label>

          <button type="submit">Login</button>
          <div className="noCadastroDiv">
            <p>Ainda não possui cadastro?</p>
            <button className="criarCadastro" onClick={(event) => nav("/register")}>
              Cadastre-se
            </button>
          </div>
        </form>
      </FormLogin>

        </motion.div>
    )
}

export default Login