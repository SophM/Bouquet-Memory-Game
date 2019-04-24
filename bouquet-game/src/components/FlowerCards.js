import React from "react";

function FlowerCard(props) {
    return (
        <img className="img-fluid img-thumbnail m-3" type="button" src={props.image} alt={props.name} data-id={props.id} onClick={props.handleClickImage} style={{width: "150px", height: "150px"}}/>
    );
}

export default FlowerCard;