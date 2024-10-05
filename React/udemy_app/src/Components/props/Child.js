function Child(props){
   console.log(props)
    return(
        <>
            <p>Child component</p>
            <p>{props.a}</p>

           
           <div>
               <p>Emplyee name</p> 
               { 
                   props.b.map((val)=>
                       <p key={val.fname}>{val.fname}</p>
                   )
               }
           </div>
           <div>
               
           </div>
           
        </>
    )
}

export default Child;