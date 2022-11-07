import React, { useState,useEffect, useRef } from 'react'

export default function RefImplementation() {
  
    const [count,setcount] = useState(0);
    const rendercount = useRef(0)
  
    useEffect(() =>{
        rendercount.current = rendercount.current + 1;
    })
    return (
    <div>
        <input 
        type="text"
        onChange={(e)=>{setcount(e.target.value)}}
        />
        
        <p>{`My name is ${count}`}</p>
        <p>{`The app renders ${rendercount.current} times`}</p>
        
    </div>
    
  )
}