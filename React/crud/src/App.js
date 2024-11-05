import logo from './logo.svg';
import './App.css';
import Resume from './Task/Components/Resume';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Props from './Training/Day3';
import Child from './Training/Child';
import Body from './component/body/Body';
import Day4 from './Training/Day4';

import Form from './Task/Components/forms/Form';
import Usememo from './Training/hooks/Usememo';
import Routing from './Training/Routing/Category';
import { Route, Routes } from 'react-router-dom';
import Login from './Training/Routing/Login';
import Error from './Training/Routing/Error';
import Category from './Training/Routing/Category';
import Homepage from './Training/Routing/Homepage';
import { useState } from 'react';
import Addcategory from './Training/Routing/Addcategory';
import Home from './Training/Nancy_routes/Home';
import { EDIT_PURCHASE, HOME,  PURCHASE } from './const';
import Purchase from './Training/Nancy_routes/chld_comp/Purchase';
import Edit_purchase from './Training/Nancy_routes/chld_comp/Edit_purchase';
import Uselocation from './Training/uselocation/Uselocation';
import Uselocation2 from './Training/uselocation/Uselocation2';
import Homee from './Task/Components/Home';
import Cutomer from './Training/uselocation/Search_query/Cutomer';
import Customer_list from './Training/uselocation/Search_query/Customer_list';

function App() {
  const [login,setlogin] = useState(false)

  function handlelogin(){
    setlogin(!login)
  }

  return (
   <>
     {/* <Resume></Resume> */}
     {/* <Header></Header> */}
    {/* <Footer></Footer> */}
    {/* <Props></Props> */}
    {/* <Child></Child>
    <Body></Body> */}
    {/* <Usememo></Usememo> */}
    {/* <Day4></Day4> */}
  {/* <Form></Form> */}
  
  {/* //1 */}
  {/* <Routes>   

    {login==true?<Route path='/' element={<Homepage></Homepage>}/>: <Route path='/' element={<Login></Login>}/>}      
    
    <Route path='/category'>
      <Route index element={<Category></Category>}></Route>
      <Route path=":Add_category" element={<Addcategory></Addcategory>}></Route>
    </Route>
    <Route path='*' element={<Error></Error>}></Route>
  </Routes>
    
    <button onClick={handlelogin}>login</button> */}


    {/* //2 nancy training */}

    <Routes>

      {/* <Route path={HOME} element={<Home></Home>}/> */}

        {/* <Route path={PURCHASE}>
              <Route index element={<Purchase></Purchase>}/>
              <Route path={EDIT_PURCHASE} element={<Edit_purchase></Edit_purchase>}/>    //Nested routes

              <Route path={`${EDIT_PURCHASE}/:id`} element={<Edit_purchase></Edit_purchase>}/>
        </Route> */}

        {/* <Route path="/" element={<Uselocation></Uselocation>}></Route>
        <Route path="/location2" element={<Uselocation2></Uselocation2>}></Route> */}
         
         <Route path="/" element={<Homee></Homee>}/>
         <Route path="/customer/:id" element={<Cutomer></Cutomer>}/>
         <Route path="/customer_list" element={<Customer_list></Customer_list>}/>
    </Routes>
 

     
   </>
  );
}

export default App;
