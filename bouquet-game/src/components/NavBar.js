import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                <h3>Memory Game</h3>
            </a>
            <h3 className="text-white ml-auto">Score: 0 | Top Score: 0 </h3>
        </nav>
    );
}

export default NavBar;