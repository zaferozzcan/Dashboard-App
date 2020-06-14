import React from "react";
import {BrowserRouter } from "react-router-dom"
import Navbar from "../src/components/layout/Navbar"


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      
      </div>
    </BrowserRouter>
  );
}
