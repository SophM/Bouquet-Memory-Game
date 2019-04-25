import React from "react";

function FinalMessage(props) {
    return (
        <div className="text-center mt-3">
          <a href="/"><h3 style={{color: "#3e8503"}}>{props.finalMessage}</h3></a>
        </div>
    );
}

export default FinalMessage;