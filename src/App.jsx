///      EXAMPLE 1

// import React from "react";
// import {useState} from'react';
// function App(){

// const [color ,setColor]=useState('red')

//   const changeColor=()=>{
//    setColor('blue')
   
//   }
//   return(
//     <>
//     <h1>My favourite color is {color}</h1>
//     <button onClick={changeColor}>Blue</button>
//     </>
//   ) 
// }
// export default App




//         EXAMPLE 2


// import React from "react";
// import {useState} from'react';
// function App(){
//   const [car, setCar]=useState({
//     brand:"Ferrari",
//     model:"Roma",
//     year:"2023",
//     color:"red"
//   });

//   const changeColor=()=>{
//     setCar((prev)=>{
//       return {...prev, color:"blue"}
//     })
//   }
//   return(
//     <>
//     <h1>My {car.brand}</h1>
//     <h2>It us a {car.color} {car.model} from {car.year}</h2>
//     <button onClick={changeColor}>Blue</button>

//     </>
//   )
// }
// export default App;




//         EXAMPLE 3

import React from "react";
import {useState} from'react';

function App(){
  const [count, setCount]=useState(0)
  const increaseCount=()=>{
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
   
  }
  return(
    <>
   <h1>Count:{count}</h1>
    <button onClick={increaseCount}>Increase by 4</button>
    </>
  )
}
export default App