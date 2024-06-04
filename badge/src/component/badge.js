import { useState } from "react";
import './badge.css'

export default function Badge (){
const[count,setCount]=useState(2);

function showIncrement(){
    setCount(count+1)
}

    return(
        <>
        <button style={{position:"relative",marginTop:"1%"}}>Notifications</button>
        {count > 0 && <div className="badge">{count}</div>}
        <button onClick={showIncrement}>+</button>
        </>
    )
}