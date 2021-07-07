import React from 'react'


 const MyAge = ({age,name,calc}) => {
   //console.log({name});
   return (
   <>
    <p>My Age Is:{age} </p>
    <button onClick={calc}>Click Me</button>
   </>
   )
};

export default MyAge;