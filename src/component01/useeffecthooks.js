import React ,{useEffect, useState } from "react"
function Useeffect() {

    const [count, setcount] = useState(0)

    useEffect(()=>{
        console.log("use effect")
 

   }) 
    return (
        <>
            <h1>{"parag "+(count)}</h1>
            <button onClick={()=>{setcount( count + 1)}}>click me</button>
            <button onClick={()=>{setcount(5)}}>click me</button>
        </>
    )
}
export default Useeffect;