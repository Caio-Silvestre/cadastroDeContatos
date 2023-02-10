import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterContext } from "../../context/RegisterContext";
import { formSchemaRegister } from "../../validators";
import { motion } from "framer-motion";
import { FormCadastro } from "./style";
import { useContext } from "react";
import logo2 from "../../assets/logo2.png";
// =========================IMPORTS=================================================

function Register(){
    const { onSubmitFunction, nav } = useContext(RegisterContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchemaRegister),
      });

      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
            <FormCadastro>
            <header>
          <img src={logo2} alt="Logo" />
          <button onClick={(event) => nav("/")}>Voltar</button>
        </header>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
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
          <label>
            Confirme a senha
            <input
              placeholder={
                errors.passwordConfirm
                  ? typeof errors.passwordConfirm.message == "string"
                    ? errors.passwordConfirm.message
                    : undefined
                  : "Confirme a senha"
              }
              type="password"
              {...register("passwordConfirm")}
            />
            <span style={{ color: "red" }}>
              {errors.passwordConfirm
                ? typeof errors.passwordConfirm.message == "string"
                  ? errors.passwordConfirm.message
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
      </motion.div>
      )
}
export default Register