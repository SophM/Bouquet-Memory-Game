import React from "react";
import Background from "../images/flowers.jpg";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid mb-0" style={{backgroundImage: "url(" + Background + ")", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="container text-center">
                <h1 className="display-4 font-weight-bold text-white" style={{textShadow: "2px  2px 2px #3e8503, 2px  -2px 2px #3e8503, -2px  2px 2px #3e8503, -2px  -2px 2px #3e8503"}}>Bouquet - Memory Game</h1>
                <h3 className="font-weight-bold text-white" style={{textShadow: "2px  2px 2px #3e8503, 2px  -2px 2px #3e8503, -2px  2px 2px #3e8503, -2px  -2px 2px #3e8503"}}>Pick flowers and make a bouquet</h3>
                <h3 className="font-weight-bold text-white" style={{textShadow: "2px  2px 2px #3e8503, 2px  -2px 2px #3e8503, -2px  2px 2px #3e8503, -2px  -2px 2px #3e8503"}}>We like diversity so don't click on a particular flower more than once!</h3>
            </div>
        </div>
    );
}

export default Jumbotron;