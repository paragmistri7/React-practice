import {  useState } from "react"
import Stateprops022 from "./useeffect02stateprops"

function Useeffect033() {

    const [data ,setdata] = useState(10)
    const [count ,setcount] = useState(100)

   
    
    return (
        <>
          
            <Stateprops022 data={data} count={count} />
            
            <button onClick={ ()=>{setdata(data + 1)}} >  data here      </button>
            <button onClick={ ()=>{setcount(count + 1)}} >  count here      </button>
            
            </>
    )
}
export default Useeffect033