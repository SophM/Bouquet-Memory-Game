import React from "react";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#3e8503"}}>
            <h3 className="text-white mx-auto">Score: {props.score} | Top Score: {props.topScore}</h3>
        </nav>
    );
}

export default NavBar;