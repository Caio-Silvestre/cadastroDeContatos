import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginProvider from './context/LoginContext';
import RegisterProvider from './context/RegisterContext';
import HomeProvider from './context/HomeContext';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
// =========================IMPORTS=================================================




function App() {
  return (
      <LoginProvider>
        <RegisterProvider>
          <HomeProvider>

        <Routes>
          <Route path={"*"} element={<Login/>} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/register"} element={<Register/>} />
          <Route path={"/home"} element={<Home/>} />
        </Routes>

          </HomeProvider>
        </RegisterProvider>
      </LoginProvider>
  );
}

export default App;
