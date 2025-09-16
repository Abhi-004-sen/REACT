import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Navbar />
   
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
   </>
  );
}

export default App;
