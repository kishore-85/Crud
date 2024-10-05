import logo from "./logo.svg";
import "./App.css";

import Jsx_Attributes from "./JsxAttributes";
import Jsx from "./Jsx";
import Use from "./Components/Hooks/Use";
import Parent from "./Components/props/Parent";
// import Parent from './props/Props_drilling/Parent';
import Display from "./Components/Import&Export/diplay";
import Comp_data from "./Components/Mapping/CompData";
import { useState } from "react";
import Login from "./Components/Conditional_rendering_login/Login";
import Home from "./Components/Conditional_rendering_login/Home";
import Timer from "./Components/Conditional_rendering_login/Timer/Timer";
import Formsstate from "./Components/practise/Formsate";
import Todolist from "./Components/practise/Todolist";
function App() {
  // let [isLoggedin, setIsLoggedin] = useState(false);
  // let [value, setValue] = useState('');
  let isLoggedin = false;
  let isRegistered = false;
  let value = 10;;
  console.log(isLoggedin, typeof(isLoggedin))
  // function Loginfun() {
  //   if (isLoggedin === true) {
  //     value="loggedin";
  //     return <Home></Home>
      
  //   } else {
  //     return  <Login> </Login>;     
     
  //   }
  // }

  return (
    <>
      {/* <Jsx></Jsx> */}
      {/* <Jsx_Attributes></Jsx_Attributes>  */}
      {/* <Use></Use> */}
      {/* <Parent></Parent> */}
      {/* <Parent></Parent> */}
      {/* <Display></Display> */}
      {/* <Comp_data></Comp_data> */}
      {/* <Timer></Timer> */}
      {/* <Formsstate></Formsstate> */}
      <Todolist></Todolist>

      {/* {Loginfun()}                                            //type 1 */}
      {/* {isLoggedin == true ? <Home></Home> : <Login status={isRegistered}></Login>}  //type-2 */}

        {/* {value == 9 && <Home></Home>}                              //TYPE -3 */}
             
    </>
  );
}

export default App;
