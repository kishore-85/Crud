function Li(props){
    
    return (
        <>
         <div id="container_2">
              <ul>
                    {
                        props.arrval.map((val,index)=>{
                          return  <li key={index} className="li">
                              {val} <button className="delete" onClick={()=>{props.onClickFunction(val)}}>Delete </button>
                          </li>
                        })
                    }
              </ul>

          </div>
        </>
    )
}

export default Li;