
import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
    email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
    password: yup.string().required("O campo senha é obrigatório"),
  });


export const formSchemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("Nome Obrigatório")
    .min(10, "Insira nome completo")
    .max(30, "Abrevie seu nome a 30 caracteres"),
  email: yup.string()
  .required("E-mail Obrigatório")
  .email("E-mail Inválido"),

  password: yup
    .string()
    .required("O campo senha é obrigatório")
    .min(6, "Insira pelo menos 6 caracteres")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/.{3,}/, "Deve conter ao menos 3 dígitos"),
  passwordConfirm: yup
    .string()
    .required("O campo senha é obrigatório")
    .oneOf([yup.ref("password")], "A senhas não são iguais"),
  tel: yup
    .string()
    .required("Telefone Obrigatório")
    .matches(/^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$/, "(xx) xxxxx-xxxx")
});



export const formSchemaRegisterClients = yup.object().shape({
  name: yup
    .string()
    .required("Nome Obrigatório")
    .min(10, "Insira nome completo")
    .max(30, "Abrevie seu nome a 30 caracteres"),
  email: yup.string()
  .required("E-mail Obrigatório")
  .email("E-mail Inválido"),
  tel: yup
    .string()
    .required("Telefone Obrigatório")
    .matches(/^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$/, "(xx) xxxxx-xxxx")
});

