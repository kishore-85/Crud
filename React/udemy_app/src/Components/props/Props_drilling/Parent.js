import { useState } from "react";
import Child from "./Child";



function Parent(){

    let [data , set_data] = useState()
function get_updatedData(){
    console.log('called')
    // data ="data passed succesfully from child "
    set_data("data passed succesfully from child")
}
    return (
        <>
           <Child onClickFunction={get_updatedData}></Child>

           <p>Child Data is :{data}</p>
        </>
    )
}
export default Parent;