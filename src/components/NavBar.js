import React from "react";
import { Link } from 'react-router-dom';

function NaVBar(){
    return(
        <div className="navbar">
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default NaVBar;