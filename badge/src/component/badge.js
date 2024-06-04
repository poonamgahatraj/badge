import { useState } from "react";
import './badge.css'

export default function Badge (){
const[count,setCount]=useState(2)

    return(
        <>
        <button style={{position:"relative",marginTop:"1%"}}>Notifications</button>
        {count > 0 && <div className="badge">{count}</div>}
        </>
    )
}