import { buildQueries } from "@testing-library/react";
import { useState } from "react";

function Jsx_Attributes(){
    let img = "https://picsum.photos/200"
    let customStyle = {
        color: "green",
        fontSize : "20px"
    }
   
    
    //1 style applying through using useState
    const [time ,settime] = useState('Goodmorning')
    
    const [fstyle , setfstyle] = useState({
        color:'orange',
        fontSize:'25px'
    })


    let good_aftrn= ()=>{
       settime('Good afternoon');
       setfstyle({ color:'green',})
    }

    let good_Evng = ()=>{
        settime('Good evening');
        setfstyle({ color:'yellow',})
    }


    //2 dynamic style applying
    const [dyn_style , setdyn_style]  = useState({color:"blue"})

    let get_time = new Date();
    let get_hours = get_time.getHours()
    
    // if(get_hours<12){
    //     console.log(get_hours)
    //           setdyn_style({
    //               color:"blue"
    //           })
    // }
    return(
        <>
           {/* Attributes should be in camelcase */}
           <p className="content">jsx attri</p>

           {/* another type img insertion */}
           <img src={img}></img>               

           {/* inline styling */}

           <p style={{color:"blue"}}>Inline style</p>
       

           {/* custom_style */}
          
               <p style={customStyle}>This is Custom style</p>
           


        <div>
              <h1 style={fstyle}>{time}</h1>
              <button onClick={good_aftrn}>Good afternoon</button> <br></br>
              <br></br>
              <button onClick={good_Evng}>Good Evening</button>
        </div>

        <div>
            <h1 style={dyn_style}>{get_hours}</h1>
        </div>
        </>
    )
}

export default Jsx_Attributes;