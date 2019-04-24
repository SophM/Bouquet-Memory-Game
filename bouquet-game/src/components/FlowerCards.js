import React from "react";

function FlowerCard(props) {
    return (
        <img className="img-fluid img-thumbnail m-3" src={props.image} alt={props.name} data-id={props.id} style={{width: "150px", height: "150px"}}/>
    );
}

export default FlowerCard;