function Logic(){
    let gst = 18;
    return (
        <>
            <p>{gst}</p>
        </>
    )
}



function Products(proda,prodb){
    let totalprod = proda+prodb;          //example 1
    return totalprod;

}

function Purchase_order(){
    let purchase = 5;
    return (                              //example 2
        <>
            <p>{purchase}</p>
        </>
    )

} 
export default Logic;                    //default export 
export {Products,Purchase_order}         //Non-default export

