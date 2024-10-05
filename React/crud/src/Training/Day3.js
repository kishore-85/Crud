import Child from "./Child";

function Props(){
    let email = "kishore@gmail.com";
    let obj ={id:'1',city:'krr'}
    return(
        <>
        <p>parent</p>
        <Child send={email} val={'kec'}  val2={obj}>  </Child>
        </>
    )
}

export default Props;