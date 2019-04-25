import React from "react";
import Background from "../images/flowers-background.jpg";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid mb-0 pb-4 pt-3" style={{backgroundImage: "url(" + Background + ")", backgroundSize: "cover", backgroundPosition: "bottom"}}>
            <div className="container text-center">
                <h1 className="display-4 font-weight-bold text-white" style={{textShadow: "3px  3px 2px #3e8503, 3px  -3px 2px #3e8503, -3px  3px 2px #3e8503, -3px  -3px 2px #3e8503"}}>Bouquet - Memory Game</h1>
                <h2 className="font-weight-bold text-white" style={{textShadow: "3px  3px 2px #3e8503, 3px  -3px 2px #3e8503, -3px  3px 2px #3e8503, -3px  -3px 2px #3e8503"}}>Pick flowers and make a bouquet</h2>
                <h2 className="font-weight-bold text-white" style={{textShadow: "3px  3px 2px #3e8503, 3px  -3px 2px #3e8503, -3px  3px 2px #3e8503, -3px  -3px 2px #3e8503"}}>We like diversity so don't click on a particular flower more than once!</h2>
            </div>
        </div>
    );
}

export default Jumbotron;