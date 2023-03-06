import { useEffect, useState } from "react"

function Useeffect03() {

    const [data ,setdata] = useState(10)
    const [count ,setcount] = useState(100)

    useEffect(() => {
        console.log("useState called only data")
 
    }, [data])

    useEffect(() => {
        console.log("useState called only count....")
 
    }, [count])
    
    return (
        <>
            <h1>Data : {data } </h1> 
            <h1>count : {count } </h1> 
            <button onClick={ ()=>{setdata(data + 1)}} >  data here      </button>
            <button onClick={ ()=>{setcount(count + 1)}} >  count here      </button>
            
            </>
    )
}
export default Useeffect03