function Jsx(){
    let fname = "ram";
    let lname ='moorthy'
    let num = 8;
  
    let get_date = new Date()
    let get_year = get_date.getFullYear()
    return(
        <>
            <h1>Hello {`${fname} ${lname}`}</h1>                    {/*Acessing variables inside HTML elements*/}
             <p>my lucky no is{num}</p>
             <p>Random number {Math.floor(Math.random()*10)}</p>     {/*using js inbuilt functions*/}


             <p>Created by{`kishore`}</p> 
             <p>Copyright @{get_year}</p> 
        </>
    )
}

export default Jsx;