import styled from "styled-components";
import { BsPlusSquare } from "react-icons/bs";

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(20, 20, 20);

  height: 100vh;
  overflow-x: auto;
  header {
    width: 100%;
    background-color: rgb(20, 20, 20);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 5px;

    border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
  }
  header button {
    width: 70.54px;
    height: 31.95px;

    background: #1EC776;
    border-radius: 4px;
    border: none;
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
    margin-right: 10px;

    color: white;

    cursor: pointer;
  }
  header button:hover {
    border-color: #212529;
  }
  header img {
    margin-left: 10px;
    size: 50%;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .userData {
    width: 95%;
    height: 100px;
    border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .userData h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }
  .userData p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }

  .clientsDiv {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    max-height: 600px;
    overflow-y: autos;
    width: 95%;
    background: #212529;
    border-radius: 4px;
    margin-top: 28px;
    padding-bottom: 10px;
  }
  .clientsDiv header {
    width: 90%;
    height: 0px;
    padding: 5%;
    background-color: transparent;
  }
  .clientsTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: #f8f9fa;
  }
  .newTechBtn {
    display: flex;
    align-items: center;
    align-content: center;
    background: #212529;
    border-radius: 4px;
    height: fit-content;
    width: fit-content;
    margin: 0;
    padding: 5px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 500px) {
    header {
      justify-content: space-between;
    }
    header button {
      margin-right: 10px;
      color: white;
      cursor: pointer;
      margin-right: 20%;
    }
    header button:hover {
      border-color: #212529;
    }
    header img {
      margin-left: 20%;
      size: 50%;
    }
    main {
      width: 100%;
      height: fit-content;
    }
    .userData {
      width: 100%;
      height: 100px;
      border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .userData h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      width: 60%;

      color: #f8f9fa;
    }
    .userData p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      width: 60%;

      color: #868e96;
    }
    .clientsDiv {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: fit-content;
      max-height: 600px;
      overflow-y: autos;
      width: 60%;
      background: #212529;
      border-radius: 14px;
      margin-top: 28px;
    }
    .clientsDiv table {
      padding: 5px;
      width: 100%;
      color: white;
      font-weight: bold;
    }
  }
`;

export const TehcList = styled.div`
  border: none;
  width: 100%;
  height: 100%;
  background-color: #212529;
  margin-top: 10px;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  td{
    border: solid 0.1rem white;
    padding: 0;
    font-weight: 100;
    padding: 0.2em;
    width: 100%;
    
  }
  button{
    margin-left: 0.5em;
    background-color: #e29090;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
  }
  button:hover{
    background-color: #e26363;
    border: none;
    color: white;
    font-weight: normal;
  }
  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 12.18px;
    padding-right: 12.18px;
    width: 85%;
    background-color: #121214;
  }
  div:hover {
    background: #343b41;
  }
  div div {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    height: 0px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;

    color: #f8f9fa;
    cursor: pointer;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;

    text-align: right;

    color: #868e96;

    display: flex;
    align-items: center;
  }
  @media (min-width: 500px) {
    header {
      justify-content: space-around;
      width: 100vw;
      height: 118px;
    }
    div {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      padding-left: 12.18px;
      padding-right: 12.18px;
      width: 88%;
      background-color: #121214;
    }
    div:hover {
      background: #343b41;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;

      color: #f8f9fa;
    }
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;

      text-align: right;

      color: #868e96;

      display: flex;
      align-items: center;
    }
  }
`;
export const TehcListInative = styled.div`
  border: none;
  width: 100%;
  height: 100%;
  background-color: #212529;
  margin-top: 10px;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  td{
    border: solid 0.1rem white;
    padding: 0;
    font-weight: 100;
    padding: 0.2em;
    width: 100%;
    background-color: #e26363;

    
  }
  button{
    margin-left: 0.5em;
    background-color: #63c063;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
  }
  button:hover{
    background-color: GRE;
    border: none;
    color: white;
    font-weight: normal;
  }
  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 12.18px;
    padding-right: 12.18px;
    width: 85%;
    background-color: #121214;
  }
  div:hover {
    background: #343b41;
  }
  div div {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    height: 0px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;

    color: #f8f9fa;
    cursor: pointer;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;

    text-align: right;

    color: #868e96;

    display: flex;
    align-items: center;
  }
  @media (min-width: 500px) {
    header {
      justify-content: space-around;
      width: 100vw;
      height: 118px;
    }
    div {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      padding-left: 12.18px;
      padding-right: 12.18px;
      width: 88%;
      background-color: #121214;
    }
    div:hover {
      background: #343b41;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;

      color: #f8f9fa;
    }
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;

      text-align: right;

      color: #868e96;

      display: flex;
      align-items: center;
    }
  }
`;

export const SquareX = styled(BsPlusSquare)`
  color: "white";
  size: "50px";
`;

export const FormCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(20, 20, 20);

  height: fit-content;
  img {
    width: 200px;
    height: auto;
  }
  header {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0px;
    margin-bottom: 0px;

    width: 90vw;
  }
  header button {
    width: 79.54px;
    height: 31.95px;

    background: #212529;
    border-color: #212529;
    border-radius: 4px;

    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
  }
  header button:hover {
    border-color: #1EC776;
  }
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 22px;
    color: white;
    margin: 0;
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.6911px 17.6477px;
    gap: 10px;
    margin-top: 25px;

    background-color: grey;

    width: 320px;
    height: fit-content;
    max-height: 90vh;
    overflow-y: auto;

    background: #212529;
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 3.20867px;
  }
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 10px;
    margin: 0px;
    width: 264px;
    height: fit-content;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;

    color: #f8f9fa;
  }
  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 8.12132px 0px;

    background: #343b41;

    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;

    color: #f8f9fa;
  }
  input::placeholder {
    padding-left: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;
    /* identical to box height, or 162% */

    /* grey-0 */

    color: #f8f9fa;
  }

  select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 8.12132px 0px;

    background: #343b41;

    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;

    color: #f8f9fa;
  }
  option {
    padding-left: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;
    /* identical to box height, or 162% */

    /* grey-0 */

    color: #f8f9fa;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 259.9px;
    height: 38.5px;

    background: #1EC776;
    border: 1.2182px solid #1EC776;
    border-radius: 4.06066px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    /* identical to box height, or 165% */

    color: #ffffff;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;

    color: #868e96;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    text-align: left;
  }
  @media (min-width: 450px) {
    header {
      justify-content: space-between;
      width: 351px;
    }
    form {
      margin-top: 25px;
      height: max-content;
      max-height: fit-content;
      overflow: auto;
    }
  }
`;