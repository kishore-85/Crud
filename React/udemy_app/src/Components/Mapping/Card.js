import React from "react";
function Card(props) {
    
    return(
        <>
            <div className="div">
                <h2>{props.brand}</h2>
                <img src={props.img}></img>
                <p>{props.price}</p>
                <p>{props.model}</p>
            </div>
        </>
    )
  }
  
  export default Card;
  