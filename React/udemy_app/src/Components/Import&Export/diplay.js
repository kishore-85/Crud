import React from "react";
import Logic from "./logic";
import {Products,Purchase_order} from "./logic"
function Display(){
    return (
        <>
            <Logic></Logic>
            <p>{Products(10,10)}</p>          
            <p>{Purchase_order()}</p>
            <Purchase_order></Purchase_order>
        </>
    )
}

export default Display;