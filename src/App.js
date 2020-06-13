import React from "react";
import {BrowserRouter } from "react-router-dom"
import Navbar from "../src/components/layout/Navbar"
import SigedInLink from "./components/layout/SignedInLink"
import SigedOutLink from "./components/layout/SignedOutLink"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      
      </div>
    </BrowserRouter>
  );
}
