import React from "react";

const Home =()=> {
  //  return (
   //     <div className='dummyClass'>
   //     <h1>hello Topit</h1>
   //     </div>
   // )

 return React.createElement(
    'div',
    {id:'hello', className :'dummyClass'},
    React.createElement("h4",null,'hello Megha...')

 )
}
export default Home