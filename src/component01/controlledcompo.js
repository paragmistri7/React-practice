import { useState } from "react"

function Controll(params) {
   const [data ,setdata] = useState(15)
   
    return (


        <>
            <h1>Controlled Component</h1>
        
        <input type = "text" defaultValue={45}   onChange ={(e)=>setdata(e.target.value)} ></input>
            <h2>{ data}</h2>
        </>

    )
}
export default Controll