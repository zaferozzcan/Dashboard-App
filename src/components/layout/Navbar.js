import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";

function Navbar(){
    return (
       <nav className="nav-wrapper.grey.darken-3">
           <div className="container">   
                <Link to="/" className = "brand-logo"> Zafer Ozcan </Link>
                <SignedInLink />
           </div>
       </nav>
    )
}

export default Navbar;