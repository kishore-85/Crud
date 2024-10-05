import Card from "./Card";

function Comp_data() {
  let api_data = [
    { id: 1, price: "19000", model: "2024", brand: "Samsung" ,img:'samsung.webp' },
    { id: 2, price: "21000", model: "2024", brand: "One_plus" ,img:'Oneplus.webp' },
    { id: 3, price: "17000", model: "2024", brand: "RealMe",img:'Realme.webp' },
  ];

  // function Send(val){
  //   return <Card key={val.id}  price={val.price} img={val.img} brand={val.brand} model={val.model}></Card>
  // }


  function myFun(event){
        console.log(event)
  }
  return(
      <>
        {/* <Card price="19000" img="./samsung.webp" brand="Samsung" model="2024"></Card> */}
       
         {/* <p>Type 1</p> */}
        {/* {api_data.map(Send)} */}



            {/* <p> Type 2</p> */}
        {/* {api_data.map(function(val){
             return <Card key={val.id}  price={val.price} img={val.img} brand={val.brand} model={val.model}></Card>
        })} */}


        {/* <p>Type-3</p> */}
        {api_data.map((val)=>{
             return <Card key={val.id}  price={val.price} img={val.img} brand={val.brand} model={val.model}></Card>
        })}
        <input type="email" onChange={myFun}></input>
      </>
  )
}

export default Comp_data;
